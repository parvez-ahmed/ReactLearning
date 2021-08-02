import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
export default function CustomCalendar(props){
    return (
        <div className="PopUpContainer">
            <Calendar onChange={props.onDateSelect} />
        </div>
    )
}