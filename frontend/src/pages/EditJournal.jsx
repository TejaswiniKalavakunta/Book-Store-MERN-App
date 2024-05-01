import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditJournal = () => {
  const [title, setTitle] = useState("");
  const [insight, setInsight] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/journals/${id}`)
      .then((response) => {
        setInsight(response.data.insight);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Check console");
        console.log(error);
      });
  }, []);

  const handleEditJournal = () => {
    const data = {
      title,
      insight,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/journals/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Journal edited successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Check console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Journal</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Insight</label>
          <textarea
            value={insight}
            onChange={(e) => setInsight(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full h-40"
          />
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={handleEditJournal}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditJournal;
