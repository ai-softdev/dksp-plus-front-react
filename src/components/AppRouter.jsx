import React from 'react';
import {routes} from "../router/index.js";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={<route.component/>}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;