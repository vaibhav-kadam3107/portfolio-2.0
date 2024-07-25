// src/api/api.js

const API_URL = 'http://localhost:5000';

export const getProjects = async () => {
  const response = await fetch(`${API_URL}/projects`);
  return response.json();
};

export const getRecommendations = async () => {
  const response = await fetch(`${API_URL}/recommendations`);
  return response.json();
};

export const getSkills = async () => {
  const response = await fetch(`${API_URL}/skills`);
  return response.json();
};

export const addSkill = async (skill) => {
  const response = await fetch(`${API_URL}/skills`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(skill),
  });
  return response.json();
};
