import { useContexGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import Button from '@mui/material/Button';
import { useEffect } from 'react';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {

  const { state, dispatch } = useContexGlobal()

  const toggle = () => {
    const newTheme = !state.theme;
    dispatch({ type: "THEME", payload: newTheme });
    localStorage.setItem('theme', JSON.stringify(newTheme));
  };
  
  useEffect(() => {
    if (localStorage.getItem('theme') !== null) {
      dispatch({ type: "THEME", payload: JSON.parse(localStorage.getItem('theme'))});
    }
  }, );

  useEffect(() => {
    document.body.classList.toggle("dark", state.theme);
  }, [state.theme]);

  return (
    <nav className="navbar-container">
      <Link to={routes.home}><h4 className='link'> Home</h4></Link>
      <Link to={routes.contact}><h4 className='link'>Contacto</h4></Link>
      
      <Link to={routes.favs}><h4 className='link'>Favoritos</h4></Link>

    
      <Button variant="contained" onClick={toggle}>Theme</Button>

    </nav>
  )
}

export default Navbar