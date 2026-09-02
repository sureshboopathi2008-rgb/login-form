import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function Details() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await api.get("/auth/details");

        setUser(response.data.user);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Unable to load user details."
        );
      } finally {
        setLoading(false);
      }
    };

    getUserDetails();
  }, []);

  return (
    <div className="details-page">
      <Navbar />

      <main className="details-container">
        <div className="details-header">
          <p className="small-title">DASHBOARD</p>

          <h1>My Details</h1>

          <p>
            View your personal information below.
          </p>
        </div>

        {loading && (
          <div className="status-card">
            Loading your details...
          </div>
        )}

        {error && (
          <div className="error-message details-error">
            {error}
          </div>
        )}

        {user && (
          <div className="profile-card">
            <div className="profile-top">
              <div className="profile-avatar">
                {user.name?.charAt(0).toUpperCase() || "U"}
              </div>

              <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>

            <div className="details-grid">
              <div className="detail-item">
                <span>Full Name</span>
                <strong>{user.name || "Not available"}</strong>
              </div>

              <div className="detail-item">
                <span>Email</span>
                <strong>{user.email || "Not available"}</strong>
              </div>

              <div className="detail-item">
                <span>Phone</span>
                <strong>{user.phone || "Not available"}</strong>
              </div>

              <div className="detail-item">
                <span>Date of Birth</span>
                <strong>
                  {user.dateOfBirth || "Not available"}
                </strong>
              </div>

              <div className="detail-item full-width">
                <span>Address</span>
                <strong>
                  {user.address || "Not available"}
                </strong>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Details;