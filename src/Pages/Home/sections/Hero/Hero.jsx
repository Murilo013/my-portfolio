import Avatar from "../../../../assets/images/Avatar.png" 
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Container, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

function Hero() {

    const StyledHero = styled("div")(()=>({
        backgroundColor: "gray",
        height: "100vh"
    }))

    const StyledAvatar = styled("img")(()=>({
        width: "100%",
        borderRadius: "50%"
    }))

    return (
      <>
          <StyledHero>
            <Container>
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <Typography color="primary" variant="h2">Olá, Murilo Aqui!</Typography>
                        <GitHubIcon/>
                        <LinkedInIcon/>
                        <SimCardDownloadIcon/>
                    </Grid>
                    <Grid size={4}>              
                        <StyledAvatar src={Avatar} />
                    </Grid>
                </Grid>
            </Container>
          </StyledHero>
      </>
    )
  }
  
  export default Hero
  