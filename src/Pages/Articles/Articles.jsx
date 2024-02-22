import React, { useState } from "react";
import "./Articles.scss";
import { articles } from "../../Data/articles";
import { Link } from "react-router-dom";

const Articles = () => {
  const types = {
    all: "All",
    fullstack: "Full Stack",
    vscode: "VSCode",
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

  const filteredArticles =
    selectedType === "all"
      ? articles.filter((tutorial) =>
          tutorial.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : articles.filter(
          (tutorial) =>
            tutorial.type === selectedType &&
            tutorial.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className="articles">
      <div className="articles--header">
        <h1>Artículos</h1>
        <div className="articles--header__filters">
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
        <div className="articles--header__search">
          <input
            type="text"
            placeholder="Search for a tutorial"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="articles--container">
        {filteredArticles.map((article, index) => (
          <div key={index} className="articles--container__card">
            <div className="articles--container__card--text">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <div className="articles--container__card--text--link">
                <Link to={article.url}>Leer mas</Link>
              </div>
            </div>
            <div className="articles--container__card--img">
              <img src={article.image} alt={article.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
