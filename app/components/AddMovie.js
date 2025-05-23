"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddMovie = () => {
  const Router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/movies", input)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInput({});
        setShowModal(false);
        Router.refresh();
      });
  };
  return (
    <div className="flex justify-center">
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-700 text-white p-3 cursor-pointer"
      >
        Add New Movie
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form className="w-full px-5 pb-6" onSubmit={handleSubmit}>
          <h1>Add or Update a Movie</h1>
          <input
            type="text"
            placeholder="title"
            name="title"
            className="w-full p-2 mb-3"
            value={input.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="actors"
            name="actors"
            className="w-full p-2 mb-3"
            value={input.actors}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="year"
            name="year"
            className="w-full p-2 mb-3"
            value={input.year}
            onChange={handleChange}
          />
          <button type="submit" className="bg-blue-700 text-white px-5 py-2">
            submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;
