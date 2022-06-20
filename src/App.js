import './App.css';
import { CalendarIcon, StarIcon, CheckIcon } from '@chakra-ui/icons';
import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';
// import bottleCans from './images/bottleCans.png';
// import { Button, Textarea } from '@chakra-ui/react';
import Form from './components/Form';
import Moment from 'moment';

function App() {
/*   const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
   */
  
const formatDate = Moment().format('MMM Do YYYY')
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='welcome-message'>
      <Heading size='md'>Stop & Shop Store 487<p></p>New England Wildlife Center<p></p>Bottle & Can Drive Fundraiser<p></p></Heading>
      <Heading size='sm'> <p></p> </Heading>

      </div>
      
      </header>
      <div className='weeks-running'>
        <Container>
          <Grid templateColumns='repeat(3, 1fr)' gap={6} p='24' m='32'>
            <GridItem w='100%' h='80' bg='' >

            <CalendarIcon w={55} h={55}/>
            </GridItem>

            <GridItem w='100%' h='80' bg='' >
              <Heading>Weeks Running</Heading>
            
            </GridItem>
            <GridItem w='100%' h='80' bg='' >
            <Heading>
              6</Heading>
            </GridItem>

          </Grid>

        </Container>
      </div>

      <div className='cans-recycled'>
      <Container>

      <Grid templateColumns='repeat(3, 1fr)' gap={6} p='24' m='32'>
            <GridItem w='100%' h='80' bg='' >

            <StarIcon w={55} h={55}/>
            </GridItem>

            <GridItem w='100%' h='80' bg='' >
              <Heading>Cans Recycled </Heading>
            
            </GridItem>
            <GridItem w='100%' h='80' bg='' >
            <Heading>
              386</Heading>
            </GridItem>

          </Grid>

</Container>
      </div>
      <div className='amount-raised'>
        <Container>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} p='24' m='32'>
            <GridItem w='100%' h='80' bg='' >

            <CheckIcon w={55} h={55}/>
            </GridItem>

            <GridItem w='100%' h='80' bg='' >
              <Heading>Amount Raised </Heading>
            
            </GridItem>
            <GridItem w='100%' h='80' bg='' >
            <Heading>
            $19.30</Heading>
            </GridItem>

          </Grid>

</Container>
      </div>
<div className='thanks-info'>
<Container>



<Heading>Thanks for making a difference! </Heading>

<Form />

</Container>
</div>
<div className="date-info">
  Today's date is {formatDate}
</div>

    </div>
  );
}

export default App;
