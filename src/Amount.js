import React from "react";
import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';


function Amount(){
    return (
        <div className='amount-raised'>
        <Container>
          <div className='form-box'>
        <div className='fs-top'>

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
</div>
</div>
</Container>
      </div>
    )
}

export default Amount;



