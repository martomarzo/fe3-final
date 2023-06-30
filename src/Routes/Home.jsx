import { Typography } from '@mui/material';
import Card from '../Components/Card'
import { useContexGlobal } from '../Components/utils/global.context'



const Home = () => {

  const { state } = useContexGlobal()

   return (
    <main className="" >
      <Typography sx={{ fontSize: 50 }} variant='h1' color="primary"> Dentistas </Typography>
      <div className='card-grid'>
        {state.dentista.map(dentista => (
          <Card
            key={dentista.id}
            name={dentista.name}
            username={dentista.username}
            id={dentista.id}
          />
        ))}
      </div>
    </main>
  )
}

export default Home