import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";

const ContextGlobal = createContext();

export const initialState = { theme: JSON.parse(localStorage.getItem('theme')) || false, dentista: [], dentistasFav: JSON.parse(localStorage.getItem('favoritos')) || [] }

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { ...state, dentista: action.payload }
    case 'THEME':
      return { ...state, theme: action.payload }
    case 'ADD_FAVS':
      return { ...state, dentistasFav: action.payload }
    default:
      throw new Error()
  }
}

export const ContextProvider = ({ children }) => {

  const url = 'https://jsonplaceholder.typicode.com/users'

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get(url)
      .then((resp) => { dispatch({ type: 'GET_LIST', payload: resp.data }) })
  }, [])

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(state.dentistasFav))
  }, [state.dentistasFav])


  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContexGlobal = () => useContext(ContextGlobal)
