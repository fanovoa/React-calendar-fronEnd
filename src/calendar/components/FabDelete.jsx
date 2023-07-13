import { useCalendarStore } from "../../hooks";


export const FabDelete = () => {

    const { startDeleteEvent, hasEventSelected } = useCalendarStore();

    const handleDelete = () => {
        startDeleteEvent();
    }
      
  return (
    <>
    {
        ( hasEventSelected)
        ?  
        <button
        className="btn btn-danger fab-danger"
        onClick={ handleDelete }
        
        >
            <i className="fas fa-trash-alt"></i>

        </button>
        : ''
    }
    </>
    
   
  )
}
