import { useSelector } from "react-redux";
import { getAllUsers } from "./usersSlice";

const GetUser = ({userId}) => {
    const getUsers = useSelector(getAllUsers);
    const getUserObject = getUsers.filter((data) => data.id === userId);

    return (
        <div>
            <span>{getUserObject[0]?.name ? getUserObject[0]?.name: 'No User Selected'}</span>
        </div>
    )
};

export default GetUser;