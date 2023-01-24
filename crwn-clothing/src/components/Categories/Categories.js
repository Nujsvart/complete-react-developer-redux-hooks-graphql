import CategoryItem from "../CategoryItem/CategoryItem";

import "./categories.styles.scss";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(category => (
        <CategoryItem
          key={category.id}
          imageUrl={category.imageUrl}
          title={category.title}
        />
      ))}
    </div>
  );
};

export default Categories;
