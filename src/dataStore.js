// src/dataStore.js

// Simple in-memory data store
export const submissions = [];

// Add a new submission
export function addSubmission(entry) {
  submissions.push(entry);
}

// Get all submissions
export function getSubmissions() {
  return submissions;
}
