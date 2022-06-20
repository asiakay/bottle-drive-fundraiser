import React from "react";
// import { useState } from "react";
import { FormControl, Container, Text, Textarea, Stack, Radio, RadioGroup, Button } from '@chakra-ui/react';
import { useForm } from '@formspree/react';
import '../Form.css';




function Form(){

    const [state, handleSubmit] = useForm("mvolngjv");
    if (state.succeeded){
        return <p>Thanks for your input!</p>;
    }



    return (
        <>
        <Container>
<div className="form-box">
<form onSubmit={handleSubmit}>
   <label> Do you want to continue the fundraiser?</label>
    <label><input type="radio" value="yes" name="continue" id="_cont" />yes</label>
    <label><input type="radio" value="no" name="continue" id="_cont"/>no</label>
    <p></p>
    
    <label>How much do you want to set as a goal amount?</label>
    <label><input type="radio" value="25" name="goal" id="_goal"/>$25</label>
    <label><input type="radio" value="50" name="goal" id="_goal"/>$50</label>
    <label><input type="radio" value="100" name="goal" id="_goal"/>$100</label>
  <p></p>

    <label>Enter your questions, comments or suggestions below</label><br></br> 
    <textarea name="comments" id="_comments" placeholder="(optional)"/>
    <br></br>
    <input type="submit" value="submit" className="myButton"/>

</form>
</div>
</Container>

</>
            
)}

export default Form;

