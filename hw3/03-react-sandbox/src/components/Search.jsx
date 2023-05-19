import axios from "axios";
import { useState } from "react";

function Search() {
  const [name, setName] = useState("");
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  const searchCharacter = async () => {
    try {
      const response = await axios.get(
        `https://thronesapi.com/api/v2/Characters/`
      );
      const foundCharacter = response.data.find(
        (char) => char.fullName.toLowerCase() === name.toLowerCase()
      );
      if (foundCharacter) {
        setCharacter(foundCharacter);
        setError(null);
      } else {
        setError("Character not found");
        setCharacter(null);
      }
    } catch (err) {
      setError("Character not found");
      setCharacter(null);
    }
  };

  return (
    <>
      <h1 className="text-center p-3">Search Game of Thrones Character</h1>
      <div
        className="container justify-content-center"
        style={{ maxWidth: "768px" }}
      >
        <div className="input-group d-flex justify-content-center">
          <input
            className="form-control"
            id="search-api"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ maxWidth: "320px" }}
          />
          <button
            className="btn bg-dark text-light"
            aria-label="search"
            onClick={searchCharacter}
          >
            <label htmlFor="search-api" className="form-label m-0">
              Search
            </label>
          </button>
        </div>

        {character && (
          <div
            className="card text-center my-4 m-auto justify-content-center"
            style={{ width: "200px" }}
          >
            <img
              className="p-2"
              alt={character.id}
              src={character.imageUrl}
              height="220px"
              width="197px"
            />
            <div className="card-body">
              <h2 className="fs-5 fw-bolder">{character.fullName}</h2>
              <h3 className="fs-6 fw-bolder">{character.title}</h3>
            </div>
          </div>
        )}
        {error && <div>{error}</div>}
      </div>
    </>
  );
}

export default Search;
