import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'
import {
    getTrainingDay,
    reset as reestTD
} from '../features/trainingDays/trainingDaysSlice'
import Spinner from '../components/Spinner'

function TrainingDay() {
    const {trainingDay} = useSelector(
        (state) => state.trainingDays
    )

    const dispatch = useDispatch()

    const {trainingId, trainingDayId} = useParams()

    useEffect(() => {
        dispatch(getTrainingDay({trainingId, trainingDayId}))

    }, [dispatch, trainingDayId])

  return (
    <div>TrainingDay</div>
  )
}

export default TrainingDay