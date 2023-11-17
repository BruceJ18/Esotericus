import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { id, title, route } = category;
  const navigate = useNavigate();

  const onNavHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavHandler}>
      <BackgroundImage src={require(`../../assets/images/categories/img_${id}.jpg`)} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;


