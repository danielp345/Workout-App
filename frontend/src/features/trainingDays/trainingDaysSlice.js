import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import trainingDaysService from "./trainingDaysService"

const initialState = {
	trainingDays: [],
	trainingDay: {},
	trainingName: "",
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
}

// Create training day
export const createTrainingDay = createAsyncThunk(
	'training-days/create',
	async (trainingId, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await trainingDaysService.createTrainingDay(trainingId, token)
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

// Get training training days
export const getTrainingDays = createAsyncThunk(
	"training-days/getAll",
	async (trainingId, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await trainingDaysService.getTrainingDays(trainingId, token)
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

// Get training training day
export const getTrainingDay = createAsyncThunk(
	"training-days/getOne",
	async ({ trainingId, trainingDayId }, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await trainingDaysService.getTrainingDay(
				trainingId,
				trainingDayId,
				token
			)
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

export const trainingDaysSlice = createSlice({
	name: "trainingDay",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createTrainingDay.pending, (state) => {
				state.isLoading = true
			})
			.addCase(createTrainingDay.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.trainingDay = action.payload
			})
			.addCase(createTrainingDay.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getTrainingDays.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getTrainingDays.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.trainingDays = action.payload
			})
			.addCase(getTrainingDays.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getTrainingDay.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getTrainingDay.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.trainingDay = action.payload
			})
			.addCase(getTrainingDay.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})

export const { reset } = trainingDaysSlice.actions
export default trainingDaysSlice.reducer
