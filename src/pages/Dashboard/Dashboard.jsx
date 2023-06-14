import InstructorDashboard from "./InstructorDashboard";
import StudentDashboard from "./StudentDashboard";

const Dashboard = () => {
    return (
        <div>
        <StudentDashboard></StudentDashboard>
        <br />
        <br />
        <InstructorDashboard></InstructorDashboard>
        </div>
    );
};

export default Dashboard;