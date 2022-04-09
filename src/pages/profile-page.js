// import ProfileForm from "../components/profile-form";
import { useState } from "react";
import { CardProfile } from "../components/cards/profile-card";
import { useAuth } from "../context/auth-context";
import { useLocalStorage } from "../hooks";
import Button from "../components/Button/index";

function ProfilePage() {
  const [personalData, setPersonalData] = useLocalStorage(
    useAuth().user,
    "PersonalData"
  );
  const [change, setChange] = useState(false);
  const { user, logout } = useAuth();

  function handleFormChange(event) {
    const { name, value } = event.target;

    setPersonalData({ ...personalData, [name]: value });
    // setErrors({ ...errors, [name]: "" });
  }

  return (
    <>
      {personalData.email ? (
        <>
          <div>
            <h1>My Profile</h1>
            <h3
              style={change ? { color: "green" } : { color: "orange" }}
              onClick={() => setChange(!change)}
            >
              {change ? "Cancel" : "Change"}
            </h3>
          </div>
          <CardProfile
            personalData={personalData}
            onChange={handleFormChange}
            change={change}
            disabled={change ? null : "disabled"}
            exist={user.name ? true : false}
            // change={personalData.name ? true}
          />
          {!change && user.name && (
            <Button
              isFullWidth
              type="primary"
              style={{ margin: "1rem 0", maxWidth: "315px" }}
              onClick={() => logout()}
            >
              Logout
            </Button>
          )}
        </>
      ) : null}
    </>
  );
}

export default ProfilePage;
