import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Sidebar = () => {
    return (
        <div className="text-start">
            <img
                src="nash_logo.png"
                alt="nashtech logo"
                style={{ width: "50%" }}
            />
            <h5 className="text-nash-red">
                <b>Online Asset Management</b>
            </h5>
            <Card className="rounded-0 border-0 fw-bold fs-5">
                <Card.Header className="bg-nash-red rounded-0">
                    Home
                </Card.Header>
                <ListGroup variant="flush" className="border-0 my-1">
                    <ListGroup.Item
                        className="border border-white border-3"
                        style={{ background: "#eeeeee" }}
                    >
                        Manage User
                    </ListGroup.Item>
                    <ListGroup.Item
                        className="border border-white border-3"
                        style={{ background: "#eeeeee" }}
                    >
                        Manage Asset
                    </ListGroup.Item>
                    <ListGroup.Item
                        className="border border-white border-3"
                        style={{ background: "#eeeeee" }}
                    >
                        Manage Assignment
                    </ListGroup.Item>
                    <ListGroup.Item
                        className="border border-white border-3"
                        style={{ background: "#eeeeee" }}
                    >
                        Request for Returning
                    </ListGroup.Item>
                    <ListGroup.Item
                        className="border border-white border-3"
                        style={{ background: "#eeeeee" }}
                    >
                        Report
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
};

export default Sidebar;
