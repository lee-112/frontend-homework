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
        <div className="d-flex flex-column align-items-center">
          <input
            className="my-2"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="mb-4" onClick={searchCharacter}>
            Search
          </button>
        </div>
        {character && (
          <div
            className="card text-center my-4 m-auto justify-content-center"
            style={{ width: "200px" }}
          >
            <img
              className="p-2"
              alt={character.fullName}
              src={character.imageUrl}
              height="220px"
              width="197px"
            />
            <div className="card-body">
              <h5 className="fw-bolder">{character.fullName}</h5>
              <h6 className="fw-bold">{character.title}</h6>
            </div>
          </div>
        )}
        {error && <div>{error}</div>}
      </div>
    </>
  );
}

export default Search;

/**
 * 
 * <div className="container rounder text-center p-2">
            <img
              alt={character.fullName}
              src={character.imageUrl}
              height="200px"
              width="200px"
            />
            <div className="fw-bold">
              <p className="fw-bolder">{character.fullName}</p>
              <p>{character.title}</p>
            </div>
          </div>
 */
