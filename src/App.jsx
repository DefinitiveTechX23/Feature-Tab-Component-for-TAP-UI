import Tabs from "./components/Tabs.jsx";

const DashboardPlaceholder = () => (
  <div>Dashboard will become available when your application is accepted.</div>
);

const TaskHistoryPlaceholder = () => (
  <div>Task history will become available when your application is accepted.</div>
);

const EventsPlaceholder = () => (
  <div>Events will become available when your application is accepted.</div>
);

function App() {
  const tabs = [
    { label: "Dashboard", content: <DashboardPlaceholder /> },
    { label: "Task History", content: <TaskHistoryPlaceholder /> },
    { label: "Events", content: <EventsPlaceholder /> },
  ];

  return <Tabs tabs={tabs} />;
}

export default App;