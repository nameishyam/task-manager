const TaskCard = (props) => {
  return (
    <div className="TaskItem bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{props.title}</h2>
      <p className="text-gray-600">Completed on: due date</p>
      <p className="text-gray-600">Asignee: name</p>
    </div>
  );
};

export default TaskCard;
