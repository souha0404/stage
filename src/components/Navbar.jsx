import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";


const Navbar = () => {
  const [isProjectsMenuVisible, setIsProjectsMenuVisible] = useState(false);

  return (
    <nav className="bg-gray-800 h-screen w-64 fixed top-0 left-0 p-4 shadow-lg">
      <div className="flex flex-col items-center">
        <Button className="mb-6 text-black w-full hover:bg-gray-200 transition" asChild>
          <Link to="/">Home</Link>
        </Button>
        <div className="text-white text-xl font-bold mb-4">Management Platform</div>
        <div className="relative w-full">
          <div
            className="text-white cursor-pointer hover:underline text-center"
            onMouseEnter={() => setIsProjectsMenuVisible(true)}
            onMouseLeave={() => setIsProjectsMenuVisible(false)}
          >
            Projects
          </div>
          {isProjectsMenuVisible && (
            <div
              className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2 z-10 w-full"
              onMouseEnter={() => setIsProjectsMenuVisible(true)}
              onMouseLeave={() => setIsProjectsMenuVisible(false)}
            >
              <Link to="/projects/create" className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded">
                Create Project
              </Link>
              <Link to="/projects/update" className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded">
                Update Project
              </Link>
              <Link to="/projects/read" className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded">
                Read Project
              </Link>
              <Link to="/projects/delete" className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded">
                Delete Project
              </Link>
            </div>
          )}
        </div>
        <div className="w-full">
          <Link to="/resources" className="text-white hover:underline block text-center">
            Resources
          </Link>
          <Link to="/wbs" className="text-white hover:underline block text-center">
            WBS
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;