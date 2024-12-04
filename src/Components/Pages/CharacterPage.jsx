import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CharacterPage = () => {
  const [currentCharacter, setCurrentCharacter] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch("../../data/characters.json")
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((data) => {
        setCurrentCharacter(data.find((item) => item.id == params.id));
      });
  }, [params.id]);
  return <div>{currentCharacter?.name}</div>;
};
