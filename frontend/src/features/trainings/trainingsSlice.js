import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import trainingsService from "./trainingsService"

const initialState = {
	trainings: [],
	training: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
}

// Create new training
export const createTraining = createAsyncThunk(
	"trainings/create",
	async (trainingData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await trainingsService.createTraining(trainingData, token)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString

			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Get user trainings
export const getTrainings = createAsyncThunk(
	"tickets/getAll",
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await trainingsService.getTrainings(token)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString

			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Get single training
export const getTraining = createAsyncThunk(
	"tickets/get",
	async (trainingId, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await trainingsService.getTraining(trainingId, token)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const trainingsSlice = createSlice({
	name: "training",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createTraining.pending, (state) => {
				state.isLoading = true
			})
			.addCase(createTraining.fulfilled, (state) => {
				state.isLoading = false
				state.isSuccess = true
			})
			.addCase(createTraining.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getTrainings.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getTrainings.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.trainings = action.payload
			})
			.addCase(getTrainings.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getTraining.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getTraining.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.training = action.payload
			})
			.addCase(getTraining.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})

export const { reset } = trainingsSlice.actions
export default trainingsSlice.reducer
