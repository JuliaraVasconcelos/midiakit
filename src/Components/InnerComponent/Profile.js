import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Perfil from '../../Images/perfil.png'
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Img = styled('img')({
    margin: 'auto',
    display: 'flex',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={2} wrap='wrap'>
                <Grid item>
                    <ButtonBase sx={{ width: 200 }}>
                        <Img alt="imagem de perfil" src={Perfil} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                <p>Sou a Juliara, tenho 30 anos e produzo conteúdo para a internet desde 2015. Atualmente no Youtube, Instagram, Tik Tok e Twitch, meus conteúdos são voltados para o mundo dos games e animes, abrangendo principalmente o público que consome conteúdos orientais.</p>
                                <p>Influencer de marcas de tecnologia e lifestyle.</p>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
