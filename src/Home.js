import React from "react";
import app from "./base";
import FeedbackForm from "./FeedbackForm";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <FeedbackForm />
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
