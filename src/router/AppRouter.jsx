import { useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';
import { useAuthStore } from "../hooks";


export const AppRouter = () => {

    const { checkAuthToken, status } = useAuthStore();
    //const authStatus ='not-authenticated';


    useEffect(() => {
      checkAuthToken();
    }, []);
    

    if(status === 'checking'){
      return (
        <h3>Cargando...</h3>
      )
    }


  return (
    <Routes>
        {
            (status === 'authenticated')
            ? (
              <>
                <Route path="/" element={ <CalendarPage /> } />
                <Route path="/*" element={ <Navigate to="/" /> } />
              </>

                  
              )
            : (
              <>
                <Route path="/auth/*" element={ <LoginPage /> } />
                <Route path="/*" element={ <Navigate to="/auth/login" /> } />
              </>
                 
              ) 

        }


    </Routes>
  )
}
