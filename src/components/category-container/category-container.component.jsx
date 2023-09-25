import "./category.styles.scss"

const CategoryContainer = ( { category } ) => {
    
    const { id, title } = category;

    return (

    <div className="category" style={{ backgroundImage: `url(images/categories/img_${id}.jpg)`}} >
        <img className="background-image" src={require(`../../assets/images/categories/img_${id}.jpg`)} alt="category images" width={100} />
        <div className="category-body">
        <h2>{ title }</h2>
        <p>Shop Now</p>
        </div>
    </div>
    )
}

export default CategoryContainer;

