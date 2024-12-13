import CharsterCard from "../CharsterCard";
import { CommonPage } from "../Common/CommonPage";

const CharactersPage = () => {
  return (
    <CommonPage
      CardComponent={CharsterCard}
      classFieldListMap="grid justify-items-center gap-4 grid-cols-3 grid-rows-3 w-full"
    />
  );
};

export default CharactersPage;
