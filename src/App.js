import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useState} from "react";
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function App() {
 const [strikeprice,setStrikePrice]=useState(0);
 const [spotprice,setSpotPrice]=useState(0);
 const [optionprice,setOptionPrice]=useState(0);
 const [chips,setChips]=useState(0);
 const [hava,setHava]=useState(0);
 const [type, setType] = React.useState("CE");
 console.log(type);
  const classes = useStyles();
  const handlestrikechange=(event)=>{
    setStrikePrice(event.target.value);
    
  }
  const handlespotchange=(event)=>{
    setSpotPrice(event.target.value);
  }
  const handleoptionchange=(event)=>{
    setOptionPrice(event.target.value);
  }
  const calculate=()=>{

if(type==10){
  
  if(spotprice>=strikeprice){
    var intrensicvalue=(parseInt(spotprice)-parseInt(strikeprice));
    setChips(intrensicvalue);
    var timevalue=(parseInt(strikeprice)+parseInt(optionprice))-parseInt(spotprice);
    setHava(timevalue);
  }
  else{
    setChips(0);
    setHava(optionprice);
  }
  
  
}
else{
  if(strikeprice>=spotprice){
    var intrensicvalue=(parseInt(strikeprice)-parseInt(spotprice));
    setChips(intrensicvalue);
    var timevalue=(parseInt(spotprice)+parseInt(optionprice))-parseInt(strikeprice);
    setHava(timevalue);
  }
  else{
    setChips(0);
    setHava(optionprice);
  }
}



  
  }
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  return (
    <div className="App">
    <h1>Option Intrensic And Time Value Calculator</h1>
    <FormControl className={classes.formControl}>
    <Select
      value={type}
      onChange={handleTypeChange}
      displayEmpty
      className={classes.selectEmpty}
      inputProps={{ 'aria-label': 'CE or PE' }}
    >
      
      <MenuItem value={10}>CE</MenuItem>
      <MenuItem value={20}>PE</MenuItem>
      
    </Select>
    <FormHelperText>CE or PE</FormHelperText>
  </FormControl>
    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="standard-basic" type="number" label="Spot Price" onChange={handlespotchange}/>
      <TextField id="standard-basic" type="number" label="Strike Price" onChange={handlestrikechange} />
  
      <TextField id="standard-basic" type="number" label="Option Price" onChange={handleoptionchange}/>
     
    </form>
    <Button variant="contained" color="secondary" onClick={calculate}>Calculate</Button>
    <h3>Intrensic Value(chips):- {chips}</h3>
    <h3>Time Value(Hava):- {hava}</h3>
    </div>
  );
}

export default App;
