import CategoryContainer from "../category-container/category-container.component";
import './directory.styles.scss';

const Directory = ( { categories } ) => {
  return (
    <div className="directory-container">
      {categories.map(( category ) => {
        return <CategoryContainer key={ category.id } category={ category } />;
      })}
    

    </div>




  )
}

export default Directory