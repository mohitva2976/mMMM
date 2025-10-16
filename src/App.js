// src/App.js

import React from 'react';
import Dashboard from './Dashboard'; // Import your new component
import './App.css';

// Sample data to pass to the Dashboard component
const studentName = "Rahul Sharma";
const courseData = [
  { name: "React Fundamentals", progress: 85 },
  { name: "Node.js Basics", progress: 60 },
  { name: "Advanced SQL", progress: 100 },
  { name: "UI/UX Design Principles", progress: 0 },
];

function App() {
  return (
    <div className="App">
      <Dashboard student={studentName} courses={courseData} />
    </div>
  );
}

export default App;