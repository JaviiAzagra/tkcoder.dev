import React from "react";
import "./Home.scss";
import { articles } from "../../Data/articles";
import { tutorials } from "../../Data/tutorials";
import { Link } from "react-router-dom";

const Home = () => {
  /* const [tutorials, setTutorials] = useState(null);
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tkcoder-dev-api.vercel.app/tutorials"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setTutorials(jsonData.slice(0, 3));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); */

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tkcoder-dev-api.vercel.app/articles"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setArticles(jsonData.slice(0, 3));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
 */
  return (
    <div className="home">
      <div className="home--top">
        <h1>Mejora tus habilidades en desarrollo web</h1>
        <img src="/assets/logohome.png" alt="LaptopHome" />
      </div>
      <div className="home--tutorials">
        <div className="home--tutorials__title">
          <h1>Tutoriales Destacados</h1>
        </div>
        <div className="home--tutorials__tutorial">
          {tutorials.slice(0, 3).map((tutorial, index) => (
            <Link to={tutorial.url}>
              <div key={index} className="home--tutorials__tutorial--card">
                <img src={tutorial.image} alt={tutorial.title} />
                <p>{tutorial.description}</p>
              </div>
            </Link>
          ))}
          {/* {tutorials &&
            tutorials.map((item) => (
              <Link to={item.url}>
                <div className="home--tutorials__tutorial--card">
                  <img src={item.img} alt={item.title} />
                  <p>{item.description}</p>
                </div>
              </Link>
            ))} */}
        </div>
      </div>
      <div className="home--articles">
        <div className="home--articles__title">
          <h1>Artículos Destacados</h1>
        </div>
        <div className="home--articles__article">
          {articles.slice(0, 3).map((article, index) => (
            <div key={index} className="home--articles__article--card">
              <div className="home--articles__article--card__text">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <div className="home--articles__article--card__text--link">
                  <Link to={article.url}>Leer mas</Link>
                </div>
              </div>
              <div className="home--articles__article--card__img">
                <img src={article.image} alt={article.title} />
              </div>
            </div>
          ))}

          {/* {articles &&
            articles.map((item) => (
              <div className="home--articles__article--card">
                <div className="home--articles__article--card__text">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="home--articles__article--card__text--link">
                    <Link to={item.url}>Leer mas</Link>
                  </div>
                </div>
                <div className="home--articles__article--card__img">
                  <img src={item.img} alt={item.title} />
                </div>
              </div>
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
