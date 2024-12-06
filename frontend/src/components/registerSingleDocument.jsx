import React, { useState } from "react";
import axios from "axios";

const RegisterSingleDocument = () => {
  const [response, setResponse] = useState("");
  const [document, setDocument] = useState({
    name: "",
    description: "",
    completeAt: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDocument({
      ...document,
      [name]: value,
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8900/postTask/", {
        ...document,
        ["createdAt"]: new Date().toISOString().split("T")[0],
      });
      alert(response.data.message);
      setResponse(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-white text-center">
      <form className="flex flex-col text-black" onSubmit={onFormSubmit}>
        <label className="text-white">Task Name</label>
        <input
          className="p-3 mb-5"
          type="text"
          name="name"
          value={document.name}
          placeholder="Task Name"
          onChange={handleChange}
        ></input>
        <label className="text-white">Task Description</label>
        <input
          className="p-3 mb-5"
          type="text"
          name="description"
          placeholder="Task Description"
          value={document.description}
          onChange={handleChange}
        ></input>
        <label className="text-white">Task Completion Date</label>
        <input
          className="p-3 mb-5"
          type="date"
          name="completeAt"
          placeholder="Complete At"
          value={document.completeAt}
          onChange={handleChange}
        ></input>
        <button className="text-white p-5 border-2" type="submit">
          Add Task
        </button>
      </form>
      <div className="p-5 text-white">{response}</div>
    </div>
  );
};

export default RegisterSingleDocument;
