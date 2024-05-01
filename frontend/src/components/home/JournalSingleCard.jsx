import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import JournalModal from "./JournalModal";

const JournalSingleCard = ({ journal }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative bg-white border border-gray-300 rounded-lg p-4 w-72 h-70 hover:shadow-xl overflow-hidden">
      <h2 className="absolute top-2 right-2 px-3 py-1 bg-red-300 rounded-lg text-sm z-10">
        {journal.date}
      </h2>
      <h4 className="my-2 text-gray-500 z-10 truncate">{journal._id}</h4>
      <div className="flex items-center gap-x-2 z-10">
        <PiBookOpenTextLight className="text-red-300 text-2xl mt-2" />
        <h2 className="my-1 truncate">{journal.title}</h2>
      </div>
      <div className="z-10 overflow-hidden mb-6">
        {" "}
        {/* Added margin-bottom */}
        <BiUserCircle className="text-red-300 text-2xl mt-2" />
        <h2 className="my-1 overflow-ellipsis overflow-hidden max-h-32">
          {journal.insight}
        </h2>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center gap-x-2 z-10">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer mt-3"
          onClick={() => setShowModal(true)}
        />
        {/* <Link to={`/journals/details/${journal._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black mt-3" />
        </Link> */}
        <Link to={`/journals/edit/${journal._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black mt-3" />
        </Link>
        <Link to={`/journals/delete/${journal._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black mt-3" />
        </Link>
      </div>
      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-30 z-0"></div>
      {showModal && (
        <JournalModal journal={journal} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default JournalSingleCard;
