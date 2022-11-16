import Table from "react-bootstrap/Table";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ReplayIcon from "@mui/icons-material/Replay";
const Assignment = () => {
    return (
        <div>
            <h4>My Assignment</h4>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Asset Code</th>
                        <th>Asset Name</th>
                        <th>Category</th>
                        <th>Assigned Date</th>
                        <th>State</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>LA 10002</td>
                        <td>Laptop HP</td>
                        <td>Laptop</td>
                        <td>10/04/2019</td>
                        <td>Accepted</td>
                        <td>
                            <CheckIcon />
                            <CloseIcon />
                            <ReplayIcon />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Assignment;
