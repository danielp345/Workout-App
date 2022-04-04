import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import trainingsReducer from "../features/trainings/trainingsSlice"
import trainingDaysReducer from "../features/trainingDays/trainingDaysSlice"

export const store = configureStore({
	reducer: {
		auth: authReducer,
		trainings: trainingsReducer,
		trainingDays: trainingDaysReducer,
	},
})
