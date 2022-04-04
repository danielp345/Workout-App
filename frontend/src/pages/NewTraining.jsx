import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { createTraining, reset } from "../features/trainings/trainingsSlice"
import Spinner from "../components/Spinner"

function NewTraining() {
	const { user } = useSelector((state) => state.auth)
	const { isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.trainings
	)
	const [trainingName, setTrainingName] = useState("")
	const [inputList, setInputList] = useState([{ exerciseName: "" }])

	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (isError) {
			toast.error(message)
		}

		if (isSuccess) {
			dispatch(reset())
			navigate("/trainings")
		}

		dispatch(reset())
	}, [dispatch, isError, isSuccess, navigate, message])

	// handle input change
	const handleInputChange = (e, index) => {
		const { name, value } = e.target
		const list = [...inputList]
		list[index][name] = value
		setInputList(list)
	}

	// handle click event of the Remove button
	const handleRemoveClick = (index) => {
		const list = [...inputList]
		list.splice(index, 1)
		setInputList(list)
	}

	// handle click event of the Add button
	const handleAddClick = () => {
		setInputList([...inputList, { exerciseName: "" }])
	}

	const onChangeName = (e) => {
		setTrainingName(e.target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(createTraining({ trainingName, exercises: inputList }))
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<>
			<form
				onSubmit={onSubmit}
				className="form-control card rounded-box  w-full bg-base-200 p-3 px-5 pb-10"
			>
				<div className="card-body relative items-center text-center">
					<p className="text-3xl font-bold m-5 mb-20">Create your workout</p>

					<div>
						<label className="input-group ">
							<span>Name</span>
							<input
								id="name"
								name="name"
								type="text"
								placeholder="Put your workout name"
								value={trainingName}
								onChange={onChangeName}
								className="input"
								required
							/>
						</label>
					</div>
					<ul>
						{inputList.map((input, i) => {
							return (
								<li key={`exercise-${i}`} className="mb-2">
									<label className="input-group">
										<span>Exercise {i + 1}</span>
										<input
											type="text"
											name="exerciseName"
											placeholder="Put the exercise name"
											className="input"
											onChange={(e) => handleInputChange(e, i)}
											required
										/>
										{inputList.length !== 1 && (
											<button
												className="btn btn-outline btn-xs ml-2 mt-2"
												onClick={() => handleRemoveClick(i)}
											>
												Remove
											</button>
										)}
									</label>
									<div>
										{inputList.length - 1 === i && (
											<button
												className="btn btn-outline btn-sm mt-2"
												onClick={handleAddClick}
											>
												Add another
											</button>
										)}
									</div>
								</li>
							)
						})}
					</ul>
				</div>
				<button className="btn">Submit</button>
			</form>
		</>
	)
}

export default NewTraining
