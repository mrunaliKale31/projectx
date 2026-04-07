import React from 'react';
import Navbar from '../components/Navbar';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <header className="dashboard-header">
          <h1 className="dashboard-title">Discover Wholesome Meals</h1>
          <p className="dashboard-subtitle">
            Explore curated, nutrient-dense recipes customized for your health goals. 
            Eating well has never been this effortless.
          </p>
        </header>

        <div className="recipe-grid">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
