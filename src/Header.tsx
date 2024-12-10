import React from "react";

const Header = (props) => {
  return (
    <div className="TaskItem bg-blue-500 text-white shadow-lg rounded-lg p-6 mb-8">
      <h1 className="text-4xl font-bold mb-4">{props.title}</h1>
      <h2 className="text-2xl font-semibold">Project: {props.project}</h2>
    </div>
  );
};

export default Header;
