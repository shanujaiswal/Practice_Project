import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="d-flex">
      <div
        className="bg-dark vh-100 d-flex flex-column justify-content-between"
        style={{
          width: isOpen ? "150px" : "50px",
          transition: "width 0.3s ease-in-out",
        }}
      >
        <div
          className="p-3 text-white"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer" }}
        >
          ☰
        </div>
        <ul className="nav flex-column flex-grow-1">
          <li className="nav-item">
            <a href="/" className="nav-link text-white">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-brightness-high"
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
              {isOpen && "  My Day"}
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="success"
                class="bi bi-star text-green-500"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
              </svg>
              {isOpen && "   Important"}
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-white">
              📊 {isOpen && "Planned"}
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-white">
              📦 {isOpen && "Assigned to me"}
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-white">
              🛒 {isOpen && "Tasks"}
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-white">
              👥 {isOpen && "Getting started"}
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-white">
              👥 {isOpen && "Groceries"}
            </a>
          </li>
        </ul>
        <div className="p-3 text-white">
          <a href="/" className="nav-link text-white">
            👤 {isOpen && "Profile"}
          </a>
        </div>
      </div>
    </div>
  );
}
