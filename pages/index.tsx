import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Builder from '../src/components/Builder'
import NavigationButtons from '../src/components/NavigationButtons.jsx'
import Provider from '../src/components/Provider'
import useActions from './api/useActions'

import { AppBar, Box, Button, Container, Grid, Toolbar, Typography, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material'
import { useState } from 'react'


function ResetBtn() {
  const { handleReset } = useActions();
  const [open, setOpen] = useState(false)
  return (
    <Box>
      <Button onClick={() => setOpen(p => !p)} variant='contained' disableElevation color='error' >Reset</Button>
      <Dialog open={open} >
        <DialogTitle>Are you sure you would like to reset this project?</DialogTitle>
        <DialogContent>
          <Button onClick={() => setOpen(p => !p)} variant='outlined' disableElevation  >Cancel</Button>
          <Button onClick={() => {
            handleReset()
            setOpen(p => !p)
          }} variant='contained'
            sx={{ mx: 4 }}
            disableElevation
            color='error'
          >Reset</Button>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default function Home() {
  return <Provider>
    <Head>
      <title>Service generator</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <AppBar elevation={0} >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant='h5'>Service generator</Typography>
          <ResetBtn />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Grid container spacing={2} >
          <Grid item xs={9} >
            <Builder />
          </Grid>
          <Grid item xs >
            <NavigationButtons />
          </Grid>
        </Grid>
      </Container>
    </main>
  </Provider>
}