import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
// layout
import Layout from "../layout";
import MinimalLayout from "../layout/MinimalLayout";
import MainLayout from "../layout/MainLayout";
import Assignment from "../scenes/assignment";
import ErrorPage from "../scenes/error";
const Router = () => {
    return (
        <div>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route element={<MainLayout />}>
                            <Route index element={<Assignment />} />
                        </Route>
                        <Route element={<MinimalLayout />}>
                            <Route path="*" element={<ErrorPage />} />
                        </Route>
                    </Route>
                </Routes>
            </Fragment>
        </div>
    );
};

export default Router;
