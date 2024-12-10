const TaskCard = (props) => {
  return (
    <div className="TaskItem bg-white shadow-lg rounded-lg p-6 mb-4 transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-semibold mb-3">{props.title}</h2>
      <p className="text-gray-500">Completed on: due date</p>
      <p className="text-gray-500">Asignee: name</p>
    </div>
  );
};

export default TaskCard;
