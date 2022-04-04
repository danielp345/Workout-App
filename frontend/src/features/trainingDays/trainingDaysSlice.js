import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import trainingDaysService from "./trainingDaysService"

const initialState = {
	trainingDays: [],
	trainingDay: {},
    trainingName: '',
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
}

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

export const trainingDaysSlice = createSlice({
	name: "trainingDay",
	initialState,
	reducers: {
		reset: (state) => initialState,
        update: (state) => {
            
        }
	},
	extraReducers: (builder) => {
		builder
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
		// .addCase(createNote.pending, (state) => {
		// 	state.isLoading = true
		// })
		// .addCase(createNote.fulfilled, (state, action) => {
		// 	state.isLoading = false
		// 	state.isSuccess = true
		// 	state.notes.push(action.payload)
		// })
		// .addCase(createNote.rejected, (state, action) => {
		// 	state.isLoading = false
		// 	state.isError = true
		// 	state.message = action.payload
		// })
	},
})

export const { reset } = trainingDaysSlice.actions
export default trainingDaysSlice.reducer
