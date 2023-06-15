import { Spinner } from "react-bootstrap";
import useUserInfo from "../../hooks/useUserInfo";
import InstructorDashboard from "./InstructorDashboard";
import StudentDashboard from "./StudentDashboard";

const Dashboard = () => {
    const [userData, loading] = useUserInfo();
    const userRole = userData.role;

    return (
        <div>
        {
            loading && <Spinner className="d-flex justify-content-center align-items-center" animation="grow" variant="light" />
          }
          {!loading && userRole === "student" && (
            <StudentDashboard studentData={userData} />
        )}
        {!loading && userRole === "instructor" && (
            <InstructorDashboard instructorData={userData} />
        )}
        </div>
    );
};

export default Dashboard;