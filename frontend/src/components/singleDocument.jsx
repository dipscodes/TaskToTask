import { useState } from "react";
import axios from "axios";

const SingleDocument = ({ document, setShowListHandler }) => {
  const [response, setResponse] = useState("");
  const [formData, setFormData] = useState(document);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const deleteProduct = async () => {
    try {
      const deledDocument = await axios.delete(
        `http://localhost:8900/deleteTask/${document._id}`
      );
      setResponse(deledDocument.data.message);
      alert(deledDocument.data.message);
      setShowListHandler(true);
    } catch (error) {
      console.error(error);
    }
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedDocument = await axios.put(
        `http://localhost:8900/putTask/${document._id}`,
        formData
      );
      setResponse(updatedDocument.data.message);
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
          value={formData.name}
          placeholder="Task Name"
          onChange={handleChange}
        ></input>
        <label className="text-white">Task Description</label>
        <input
          className="p-3 mb-5"
          type="text"
          name="description"
          placeholder="Task Description"
          value={formData.description}
          onChange={handleChange}
        ></input>
        <label className="text-white">Task Completion Date</label>
        <input
          className="p-3 mb-5"
          type="date"
          name="completeAt"
          value={formData.completeAt}
          onChange={handleChange}
        ></input>
        <label className="text-white">Task Creation Date</label>
        <input
          className="p-3 mb-5"
          type="text"
          name="createdAt"
          value={formData.createdAt}
          onChange={() => {}}
        ></input>
        <button className="text-white p-5 border-2 text-lg" type="submit">
          Update Task
        </button>
        <button
          className="text-black p-5 border-2 mt-5 bg-red-500 text-lg"
          type="button"
          onClick={deleteProduct}
        >
          Delete Task
        </button>
      </form>
      <div className="p-5 text-white">{response}</div>
    </div>
  );
};

export default SingleDocument;
