import { useEffect, useState } from "react";
import { CharsterCard } from "../CharsterCard";

export const CharactersPage = () => {
  const [charactersArr, setCharactersArr] = useState([]);
  useEffect(() => {
    fetch("../../data/characters.json")
      .then((data) => data.json())
      .then((data) => setCharactersArr(data));
  }, []);

  return (
    <div>
      {charactersArr.map((item) => (
        <CharsterCard key={item.id} character={item} />
      ))}
    </div>
  );
};
