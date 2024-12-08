const Header = (props) => {
  return (
    <div className="TaskItem bg-white shadow-md rounded-lg p-4">
      <h1 className="text-2xl font-bold mb-4">{props.title}</h1>
      <h2 className="text-xl font-bold mb-2">Project: {props.project}</h2>
    </div>
  );
};

export default Header;
