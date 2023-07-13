import { useSelector, useDispatch } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';


export const useCalendarStore = () => {

    const dispatch =useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
      dispatch( onSetActiveEvent( calendarEvent ) );
    }

    const startSavingEvent = async( calendarEvent ) => {

      //TODO: llegar al backend

      //Todo bien
      if(calendarEvent._id){
          //Actualizado
          dispatch(onUpdateEvent({ ...calendarEvent } ));
      }else{
          dispatch( onAddNewEvent({ ...calendarEvent, _id:new Date().getTime() }) );
      }
    }

    const startDeleteEvent = () =>{
      dispatch( onDeleteEvent() );
    }


  return {
    //* Propiedades

    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //* Metodos
    setActiveEvent,
    startSavingEvent,
    startDeleteEvent
  }
}
