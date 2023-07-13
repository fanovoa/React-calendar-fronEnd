import { useSelector, useDispatch } from 'react-redux';
import { onAddNewEvent, onSetActiveEvent } from '../store';


export const useCalendarStore = () => {

    const dispatch =useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
      dispatch( onSetActiveEvent( calendarEvent ) );
    }

    const starSavingEvent = async( calendarEvent ) => {

      //TODO: llegar al backend

      //Todo bien
      if(calendarEvent._id){
        //Actualizado
      }else{
          dispatch( onAddNewEvent({ ...calendarEvent, _id:new Date().getTime() }) );
      }
    }


  return {
    //* Propiedades

    activeEvent,
    events,

    //* Metodos
    setActiveEvent,
    starSavingEvent
  }
}
