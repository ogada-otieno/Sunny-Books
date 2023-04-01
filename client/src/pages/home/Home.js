import React from "react";

const Home = ({ user, onLogout }) => {
    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout())
    }

  return (
    <div>
      Home
      {user ? (
        <>
          <h1>Welcome {user.name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Not logged in.</h1>
        </>
      )}
    </div>
  );
};

export default Home;
