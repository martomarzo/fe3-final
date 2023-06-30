import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'





const Detail = () => {

  const [dent, setDent] = useState({})

  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setDent(res.data))
  }, [id])



  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
       <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Dentista: {id}
            </Typography>
            <Typography variant="h5" component="div">
              {dent.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {dent.email}
            </Typography>
            <Typography variant="body2">
              <Link >www.{dent.website}</Link>

            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Mas info</Button>
          </CardActions>
        </Card>
      </Box>

      
    </div>
  )
}
export default Detail


