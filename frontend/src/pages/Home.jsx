import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import JournalsTable from "../components/home/JournalsTable";
import JournalsCard from "../components/home/JournalsCard";

const Home = () => {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/journals")
      .then((response) => {
        setJournals(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col">
      <div className="p-4 flex-grow">
        {/* <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div> */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Your Entries</h1>
          <Link to="/journals/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
        {loading ? <Spinner /> : <JournalsCard journals={journals} />}
      </div>
    </div>
  );
};

export default Home;
