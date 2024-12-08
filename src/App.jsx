import TaskCard from "./TaskCard";

function App() {
  return (
    <div>
      <div>
        <h1>Pending Tasks</h1>
        <TaskCard title="Build the website with static content" />
        <TaskCard title="Add blog" />
      </div>
      <div>
        <h1>Done</h1>
        <TaskCard title="design the mockup" />
        <TaskCard title="get permission from the principal" />
      </div>
    </div>
  );
}

export default App;
