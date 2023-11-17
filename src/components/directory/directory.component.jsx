import DirectoryItem from "../directory-item/directory-item.component";
import {DirectoryContainer} from "./directory.styles.jsx";

const categories = [
  { id: 1, title: "Crystals" , route:'shop/crystals'},
  { id: 2, title: "Books" , route:'shop/books'},
  { id: 3, title: "Artifacts" , route:'shop/artifacts'},
  { id: 4, title: "Womens" , route:'shop/womens'},
  { id: 5, title: "Mens" , route:'shop/mens'},
];


const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
