import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useContexGlobal } from './utils/global.context';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';


const Card = ({ name, username, id }) => {

  const { state, dispatch } = useContexGlobal()
  const [isFavorite, setIsFavorite] = useState(false);



  useEffect(()=>{
    
  },[isFavorite])
 
  
  const addFav = () => {
    let foundObjet = (state.dentistasFav.find(obj => obj.id === id))
    if (foundObjet) {
      alert('Este dentista ya fue agregado')
    } else {
      dispatch({
        type: 'ADD_FAVS', payload: [...state.dentistasFav, { name: name, userName: username, id: id }]
      });
    }
    setIsFavorite(true)
  };

  

  return (
    <div key={id} className="card">
      
      <Link to={'/detail/' + id}>
        <img src="./images/doctor.jpg" alt="imagen doctor" className="imgHome" />
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='h6'>{username}</Typography>
        <p> ID: {id}</p>
      </Link>

      <Button variant="contained" type='submit' onClick={ addFav }>
        {'Add Favs'}
      </Button>



    </div >
  )
};

export default Card;










