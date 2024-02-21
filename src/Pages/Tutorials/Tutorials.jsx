import React, { useState } from "react";
import "./Tutorials.scss";
import { tutorials } from "../../Data/tutorials";
import { Link } from "react-router-dom";

const Tutorials = () => {
  const types = {
    all: "All",
    react: "React",
    terminal: "Terminal",
    /* angular: "Angular",
    node: "Node.js",
    mongo: "MongoDB", */
    javascript: "JavaScript",
  };

  const [selectedType, setSelectedType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTutorials =
    selectedType === "all"
      ? tutorials.filter((tutorial) =>
          tutorial.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : tutorials.filter(
          (tutorial) =>
            tutorial.type === selectedType &&
            tutorial.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className="tutorials">
      <div className="tutorials--header">
        <h1>Tutoriales</h1>
        <div className="tutorials--header__filters">
          {Object.keys(types).map((type, index) => (
            <button
              key={index}
              className={selectedType === type ? "active" : ""}
              onClick={() => handleTypeClick(type)}
            >
              {types[type]}
            </button>
          ))}
        </div>
        <div className="tutorials--header__search">
          <input
            type="text"
            placeholder="Search for a tutorial"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="tutorials--container">
        {filteredTutorials.map((tutorial, index) => (
          <Link to={tutorial.url}>
            <div key={index} className="tutorials--container__card">
              <img src={tutorial.image} alt={tutorial.title} />
              <h2>{tutorial.title}</h2>
              <p>{tutorial.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
