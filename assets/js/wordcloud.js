import React from 'react';
import ReactWordcloud from 'react-wordcloud';
 
const words = [
    { text: 'Java', value: 100 },
    { text: 'Python', value: 100 },
    { text: 'SQL', value: 70 },
    { text: 'C++', value: 60 },
    { text: 'HTML5/CSS', value: 90 },
    { text: 'JavaScript', value: 90 },
    { text: 'React', value: 85 },
    { text: 'Unix', value: 55 },
    { text: 'Shell', value: 40 },
    { text: 'Kotlin', value: 35 },
    { text: 'Typescript', value: 65 },
    { text: 'XML', value: 45 },
    { text: 'Oracle', value: 50 },
    { text: 'MySQL', value: 75 },
    { text: 'MongoDB', value: 70 },
    { text: 'Neo4j', value: 30 },
    { text: 'Firebase', value: 60 },
    { text: 'NoSQL', value: 55 },
    { text: 'PLSQL', value: 40 },
    { text: 'SQL Server', value: 65 },
    { text: 'Elasticsearch', value: 50 },
    { text: 'SpringBoot', value: 45 },
    { text: 'GitHub', value: 95 },
    { text: 'Bitbucket', value: 40 },
    { text: 'Android', value: 55 },
    { text: 'Agile', value: 75 },
    { text: 'Postman', value: 50 },
    { text: 'Docker', value: 70 },
    { text: 'Machine Learning', value: 85 },
    { text: 'API Testing', value: 40 },
    { text: 'Natural Language Processing', value: 45 },
    { text: 'Cloud Computing', value: 65 },
    { text: 'Google Cloud Platform', value: 60 },
    { text: 'Amazon Web Services', value: 90 },
    { text: 'Kubernetes', value: 50 },
    { text: 'Information Retrieval', value: 40 },
    { text: 'Information Extraction', value: 40 },
    { text: 'Web Search', value: 40 },
    { text: 'Deep Learning', value: 75 },
    { text: 'Artificial Intelligence', value: 85 },
    { text: 'DevOps', value: 70 },
  ];

const options = {
    rotations: 1,
    rotationAngles: [ 0],
    colors: ['#0D47A1', '#1565C0', '#1976D2', '#1E88E5', '#2196F3', '#1b5e20', '#2e7d32', '#388e3c', '#43a047', '#4caf50'],
    tooltipOptions: { enabled: false },
    fontFamily: 'Poppins, sans-serif',


  };
  const callbacks = {
    getWordTooltip: (word) => '',  // Override the default getTooltip behavior to not show any tooltip
};
 
function SimpleWordcloud() {
  return <ReactWordcloud  
  options={options}
  words={words} 
 callbacks={callbacks}/>
}
export default SimpleWordcloud;