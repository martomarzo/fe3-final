import { Typography } from "@mui/material";
import Card from "../Components/Card";
import { useContexGlobal } from "../Components/utils/global.context";



const Favs = () => {

  const {state} = useContexGlobal()

 
  return (
    <>
      <Typography color={'primary'} variant="h4" align="center" >Dentists Favoritoss</Typography>
      <div className="card-grid">
        {state.dentistasFav.length > 0 ?
          state.dentistasFav.map((dentista) => (
            <Card
              name={dentista.name}
              username={dentista.userName}
              id={dentista.id}
              key={dentista.id}
            />
          )): <p> No guardaste ningun favorito </p>}
      </div>

      

    </>
  );
};

export default Favs;
