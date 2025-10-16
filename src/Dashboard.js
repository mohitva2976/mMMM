// src/Dashboard.js

import React from "react";

// --- STYLES (can be moved to a CSS file) ---
const styles = {
  dashboard: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f4f7f6',
    maxWidth: '800px',
    margin: '2rem auto',
    borderRadius: '12px',
  },
  header: {
    fontSize: '2em',
    color: '#333',
    marginBottom: '20px',
  },
  courseCard: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '15px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  courseHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  },
  courseName: {
    fontSize: '1.3em',
    fontWeight: 'bold',
  },
  statusIndicator: {
    fontSize: '0.9em',
    padding: '5px 12px',
    borderRadius: '15px',
    fontWeight: 'bold',
  },
  progressBarContainer: {
    width: "100%",
    backgroundColor: "#eee",
    borderRadius: '4px',
    height: "8px"
  },
};

// --- COMPONENTS ---

function Progress({ percentage }) {
  const barColor = percentage === 100 ? "#28a745" : "#007bff";
  return (
    <div>
      <p style={{textAlign: 'right', color: '#555'}}>Progress: {percentage}%</p>
      <div style={styles.progressBarContainer}>
        <div style={{ width: `${percentage}%`, background: barColor, height: "8px", borderRadius: '4px' }}></div>
      </div>
    </div>
  );
}

function Course({ name, progress }) {
  let status, statusStyle;
  if (progress === 100) {
    status = "Completed";
    statusStyle = { backgroundColor: '#d4edda', color: '#155724' };
  } else if (progress > 0) {
    status = "In Progress";
    statusStyle = { backgroundColor: '#fff3cd', color: '#856404' };
  } else {
    status = "Not Started";
    statusStyle = { backgroundColor: '#e2e3e5', color: '#383d41' };
  }

  return (
    <div style={styles.courseCard}>
      <div style={styles.courseHeader}>
        <h3 style={styles.courseName}>{name}</h3>
        <span style={{...styles.statusIndicator, ...statusStyle}}>{status}</span>
      </div>
      <Progress percentage={progress} />
    </div>
  );
}

export default function Dashboard({ student, courses }) {
  return (
    <div style={styles.dashboard}>
      <h2 style={styles.header}>Welcome, {student}</h2>
      <div>
        {courses.map((c, i) => (
          <Course key={i} name={c.name} progress={c.progress} />
        ))}
      </div>
    </div>
  );
}