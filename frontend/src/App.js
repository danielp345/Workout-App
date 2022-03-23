import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Navbar from "./components/Navbar"
import PrivateRoute from "./components/PrivateRoute"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NewTraining from "./pages/NewTraining"

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<div className="mx-6">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/new-training" element={<PrivateRoute />}>
							<Route path="/new-training" element={<NewTraining />} />
						</Route>
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	)
}

export default App
