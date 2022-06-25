import React from "react";
import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';


function Weeks(){
    return (
        <div className='weeks-running'>
        <Container>
        <div className='form-box'>
        <div className='fs-top'>

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
          </div>
          </div>

        </Container> 
      </div>
    )
}

export default Weeks;