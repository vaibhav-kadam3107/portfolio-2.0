// src/pages/Skills.js

import React, { useState, useEffect } from 'react';
import { getSkills, addSkill } from '../api/api';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();
        setSkills(data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  const handleAddSkill = async () => {
    if (newSkill.trim() === '') {
      setError('Skill name is required.');
      return;
    }

    try {
      const skill = { name: newSkill.trim() };
      const addedSkill = await addSkill(skill);

      setSkills([...skills, addedSkill]);
      setNewSkill('');
      setError('');
    } catch (error) {
      console.error('Error adding skill:', error);
      setError('Failed to add skill.');
    }
  };

  return (
    <section className="p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.length > 0 ? (
            skills.map((skill) => (
              <div
                key={skill.id}
                className="p-4 border border-gray-300 rounded-lg shadow-sm"
              >
                <p className="text-lg font-medium">{skill.name}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No skills available.</p>
          )}
        </div>
        <div className="mt-8">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="New Skill"
            className="p-3 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleAddSkill}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ml-4"
          >
            Add Skill
          </button>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </section>
  );
};

export default Skills;
