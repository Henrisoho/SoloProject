import React from 'react'
import { ColorModeContext, tokens } from '../../components/App/theme';
import { useContext } from "react"
import { Button, Typography, useTheme } from '@mui/material';
import { MoviesList } from '../../data';
import { Box } from '@mui/system';


export default function Movies() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
function randomNumberBetween(x, y) {
  return Math.floor(Math.random() * (y - x + 1)) + x;
}

 const onHandleRand = () =>{
let randomNum = randomNumberBetween(0, 4);
console.log(randomNum);
if(randomNum){
return randomNum
}else{
  return 1
}
 }
const x = onHandleRand()
 console.log(x)

  return (
    <Box
      backgroundColor={colors.primary[400]}
      height='100%'
    >
      <center>
        <Box
          backgroundColor={colors.greenAccent[300]}
          height='550px'
          width='425px'
          alignContent='center'
          alignItems='center'
          borderRadius='5%'
        >
          <img style={{ maxHeight: '500px', marginTop: '25px' }} src={MoviesList[x].image} alt="" />
        </Box>

        <Box
          backgroundColor={colors.greenAccent[300]}
          height='50px'
          width='350px'
          alignContent='center'
          alignItems='center'
          marginTop='20px'
          borderRadius='20px'
        >
          <Typography
            marginTop='10px'
            variant="h2"
            color={colors.primary[400]}
            fontWeight="bold"
            sx={{ m: "10px 0 0 0" }}
          >{MoviesList[x].title}</Typography>
        </Box>
      </center>
    </Box>
  )
}
