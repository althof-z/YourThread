import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function CategoryList({ categories, activeCategory, setActiveCategory }) {
  const handleCategoryClick = (category) => {
    if (category === activeCategory) {
      setActiveCategory('all');
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <ul className="list-unstyled d-flex flex-wrap">
      {categories.map((category) => (
        <li
          key={uuidv4()}
          className="me-2 mb-3 "

        >
          <button type="button" className={`btn btn-outline-dark ${category === activeCategory ? 'active-category' : ''}`} onClick={() => handleCategoryClick(category)}>
            {' '}
            #
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};

export default CategoryList;
