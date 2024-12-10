import TaskCard from "./TaskCard";
import Header from "./Header";

const App = () => {
  return (
    <>
      <div className="mt-10 flex justify-center items-center">
        <Header
          title="Smarter Tasks"
          project="Gaurdian Final Year Project (Rewamp College Website)"
        />
      </div>
      <div className="container mx-auto p-10">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-8 p-4">
            <h1 className="text-3xl font-bold mb-6">Pending Tasks</h1>
            <div>
              <TaskCard title="Build the website with static content" />
              <TaskCard title="Add blog" />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-3xl font-bold mb-6">Done</h1>
            <div>
              <TaskCard title="design the mockup" />
              <TaskCard title="get permission from the principal" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
