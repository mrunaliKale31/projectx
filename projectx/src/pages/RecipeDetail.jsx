import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { recipes } from '../data/recipes';
import { ArrowLeft, Clock, Flame, CheckCircle2 } from 'lucide-react';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '5rem' }}>
        <h2>Recipe not found</h2>
        <Link to="/dashboard" className="btn btn-primary" style={{ marginTop: '2rem' }}>Go Back</Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container">
        <div style={{ marginTop: '2rem' }}>
          <Link to="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>
        </div>

        <div className="detail-hero">
          <img src={recipe.image} alt={recipe.title} className="detail-img" />
        </div>

        <div className="recipe-tags" style={{ marginBottom: '1rem' }}>
          {recipe.tags.map(tag => (
            <span key={tag} className={`badge badge-${tag.toLowerCase().replace(' ', '-')}`}>{tag}</span>
          ))}
        </div>

        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{recipe.title}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '800px' }}>
          {recipe.description}
        </p>

        <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
          <div className="glass" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem', borderRadius: 'var(--radius-md)' }}>
            <Clock size={24} color="var(--primary-color)" />
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Time</div>
              <div style={{ fontWeight: '600' }}>{recipe.time}</div>
            </div>
          </div>
          <div className="glass" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem', borderRadius: 'var(--radius-md)' }}>
            <Flame size={24} color="var(--secondary-color)" />
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Calories</div>
              <div style={{ fontWeight: '600' }}>{recipe.calories}</div>
            </div>
          </div>
        </div>

        <div className="detail-content">
          <div className="glass ingredients-list">
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 color="var(--primary-color)" /> Ingredients
            </h2>
            <ul>
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx} className="ingredient-item">
                  <span style={{ fontWeight: '500' }}>{ing.name}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{ing.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="steps-list">
            <h2 style={{ marginBottom: '0.5rem' }}>Instructions</h2>
            {recipe.steps.map((step, idx) => (
              <div key={idx} className="glass step-item">
                <div className="step-number">{idx + 1}</div>
                <div className="step-text">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default RecipeDetail;
