// Home.js

import React, { useState } from 'react';

export default function Home({ quizData, styles }) {
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const nextQuestion = (i) => {
    // Check if answer is correct
    if (i === quizData[quizIndex].a) {
      setScore(s => s + 1);
    }

    // Move to next question or finish quiz
    if (quizIndex + 1 < quizData.length) {
      setQuizIndex(q => q + 1);
    } else {
      setQuizComplete(true);
      // alert is now optional since the component will display the result
    }
  };
  
  // Quiz Content View
  const QuizContent = () => {
    if (quizComplete) {
      return (
        <div>
          <h3>Quiz Completed!</h3>
          <p>Your Final Score: {score} out of {quizData.length}</p>
          <button onClick={() => { setQuizIndex(0); setScore(0); setQuizComplete(false); }}>
              Retake Quiz
          </button>
        </div>
      );
    }
    
    // Display current question
    return (
      <div>
        <p>{quizData[quizIndex].q}</p>
        {quizData[quizIndex].o.map((opt, i) => (
          <button key={i} style={styles.optionBtn} onClick={() => nextQuestion(i)}>
            {opt}
          </button>
        ))}
        <p>Score: {score}</p>
        <p>Question {quizIndex + 1} of {quizData.length}</p>
      </div>
    );
  };


  return (
    <>
      <section id="preamble" style={styles.section}>
        <h2>The Preamble</h2>
        <p>We, the people of India, having solemnly resolved to constitute India into a Sovereign Socialist Secular Democratic Republic...</p>
      </section>

      <section id="rights" style={styles.section}>
        <h2>Fundamental Rights & Duties</h2>
        <div style={styles.cards}>
          <div style={styles.card}><h3>Right to Equality</h3><p>Ensures equal treatment before law for all citizens.</p></div>
          <div style={styles.card}><h3>Right to Freedom</h3><p>Grants freedom of speech, expression, and movement.</p></div>
          <div style={styles.card}><h3>Right Against Exploitation</h3><p>Prohibits forced labor and child labor.</p></div>
          <div style={styles.card}><h3>Right to Remedies</h3><p>Allows citizens to approach courts for enforcement of rights.</p></div>
          <div style={styles.card}><h3>Fundamental Duties</h3><p>Encourages respect for national symbols and environmental protection.</p></div>
        </div>
      </section>

      <section id="quiz" style={styles.section}>
        <h2>Constitution Quiz</h2>
        <div style={{ textAlign: "center" }}>
          <QuizContent />
        </div>
      </section>

      <section id="timeline" style={styles.section}>
        <h2>Timeline of the Constitution</h2>
        <ul>
          <li>1946 - Constituent Assembly formed</li>
          <li>1949 - Constitution adopted</li>
          <li>1950 - Came into effect on January 26</li>
          <li>1976 - 42nd Amendment adds Fundamental Duties</li>
        </ul>
      </section>
    </>
  );
}