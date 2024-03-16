import React from "react";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  let navigate = useNavigate();
  return (
    <div>
      Not Found... <button onClick={() => navigate("/")}>back to home</button>
    </div>
  );
}
