import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Driver from '../pages/Driver'
import Home from '../pages/Home'
import Register from '../pages/Register'

const AppRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path={`/`} element={<Home />} />
					<Route path={`/driver`} element={<Driver />} />
					<Route path={`/register`} element={<Register />} />
					<Route path='*' element={<>No Match</>} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default AppRoutes;
