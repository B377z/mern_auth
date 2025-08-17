import { useEffect, useState } from "react";
import axios from "axios";

export default function Protected() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/protected", {
          headers: { Authorization: `Bearer ${token}` }
        });

        setMessage(res.data.message);  // e.g. "Welcome!"
        setUser(res.data.user);        // return user info from backend
      } catch (err) {
        setMessage("Unauthorized. Please log in.");
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {user ? (
        <>
          <h2>🎉 Welcome, {user.fullName || user.email}!</h2>
          <p>{message}</p>
          <p>Your email: {user.email}</p>
        </>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}

