import React, { useEffect, useState } from "react";
import axios from "axios";

const AllDocuments = ({ setShowListHandler, setDocumentHandler }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8900/tasks/");
      setProducts(response.data);
    })();
  }, []);

  return (
    <div className="w-2/5">
      {products.map((value, _) => {
        return (
          <div
            className="border-2 text-white p-5 mb-5 cursor-pointer"
            key={value._id}
            onClick={() => {
              setDocumentHandler({ ...value });
              setShowListHandler(false);
            }}
          >
            <div>Task Name : {value.name}</div>
            <div>Task Description : {value.description}</div>
            <div>Task Completion Date : {value.completeAt}</div>
            <div>Task Creation Date : {value.createdAt}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AllDocuments;
