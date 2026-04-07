import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Flame } from 'lucide-react';

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card glass">
      <div className="recipe-img-wrapper">
        <img src={recipe.image} alt={recipe.title} className="recipe-img" loading="lazy" />
      </div>
      <div className="recipe-content">
        <div className="recipe-tags">
          {recipe.tags.map(tag => (
            <span key={tag} className={`badge badge-${tag.toLowerCase().replace(' ', '-')}`}>
              {tag}
            </span>
          ))}
        </div>
        <h3 className="recipe-title">{recipe.title}</h3>
        <div className="recipe-meta">
          <span className="recipe-meta-item"><Clock size={16} /> {recipe.time}</span>
          <span className="recipe-meta-item"><Flame size={16} /> {recipe.calories}</span>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: 'auto' }}>
          {recipe.description}
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;
