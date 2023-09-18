import "./category.styles.scss"

const CategoryContainer = ( { category } ) => {
    
    const { title } = category;

    return (

    <div className="category">
        
        <div className="category-body">
        <h2>{ title }</h2>
        <p>Shop Now</p>
        </div>
    </div>
    )
}

export default CategoryContainer;

