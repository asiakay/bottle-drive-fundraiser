import './App.css';
import './header.css';
import { Container, Heading } from '@chakra-ui/react';
// import bottleCans from './images/bottleCans.png';
// import { Button, Textarea } from '@chakra-ui/react';
import Form from './components/Form';
import Header from './Header.js';
import Moment from 'moment';
import Weeks from './Weeks.js';
import Amount from './Amount';
import Cans from './Cans.js';

function App() {
/*   const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
   */
  
const formatDate = Moment().format('MMM Do YYYY')
  
  return (
    <div className="App">
      <header className="App-header">

<Header/>
      
    </header>
      
<Weeks />

<Cans />
    
 

      <Amount />
      <div className='thanks-div'>
        <Heading className='thanks'>Thanks for making a difference! </Heading></div>

<div className='survey'>
<Container>



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
