import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllDocuments from "./components/allDocuments";
import { useState } from "react";
import SingleDocument from "./components/singleDocument";
import RegisterSingleDocument from "./components/registerSingleDocument";

function App() {
  const [showList, setShowList] = useState(true);
  const [document, setDocument] = useState({});

  const setShowListHandler = (toggle) => setShowList(toggle);
  const setDocumentHandler = (toggle) => setDocument(toggle);
  return (
    <div className="w-screen h-screen bg-slate-950 flex flex-col justify-start items-center text-white">
      <Router>
        <header className="text-xl p-3">MERN Microservice Mongoose Task</header>
        <nav className="flex flex-row mb-5">
          <Link to="/">
            <div className="p-3 text-lg" onClick={() => setShowList(true)}>
              Home
            </div>
          </Link>
          <Link to="/register">
            <div className="p-3 text-lg">Register</div>
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              showList ? (
                <AllDocuments
                  setShowListHandler={setShowListHandler}
                  setDocumentHandler={setDocumentHandler}
                />
              ) : (
                <SingleDocument
                  document={document}
                  setShowListHandler={setShowListHandler}
                />
              )
            }
          ></Route>
          <Route path="/register" element={<RegisterSingleDocument />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
