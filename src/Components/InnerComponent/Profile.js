import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Perfil from '../../Images/perfil.png'
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import youtube from '../../Images/youtube.png';
import twitch from '../../Images/twitch.png';
import tiktok from '../../Images/tiktok.png';
import instagram from '../../Images/instagram.png'


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const H3 = styled('div')({
    fontSize: '30px',
    color: '4B06B6',
    fontWeight: 'bold'
});
const Num = styled('div')({
    padding: '2px',
    color: '#4B06B6',
    margin: '10px'
})
const Img = styled('img')({
    padding: '10px',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function BasicGrid() {
    return (
        <Box sx={{
            flexGrow: 2,
            alignItens: 'center',
            textAlign: 'center'
        }}>
            <Grid>
                <Typography>
                    <Img alt="imagem de perfil" src={Perfil} width={'200px'} />
                    <h1>Juliara Vasconcelos</h1>
                    <div>Influencer de marcas de tecnologia e lifestyle.</div>
                    <a href='https://www.youtube.com/channel/UC1wBUmaGagTLs0DYpI9Vg8g'><Img src={youtube} width='50px' /></a>
                    <a href='http://twitch.tv/jujubazonac'><Img src={twitch} width='43px' /></a>
                    <a href='https://www.tiktok.com/@jujubazonac'><Img src={tiktok} width='40px' /></a>
                    <a href='https://www.instagram.com/jujubazonac/'><Img src={instagram} width='45px' /></a>
                </Typography>
            </Grid>
            <Grid>
                <p>Sou a Juliara, tenho 30 anos e produzo conteúdo para a internet desde 2015. Atualmente no Youtube, Instagram, Tik Tok e Twitch, meus conteúdos são voltados para o mundo dos games e animes, abrangendo principalmente o público que consome conteúdos orientais.</p>

                <Grid container sm={12} spacing={1} margin={'auto'}>
                    <Num><H3>+20K</H3> seguidores no total</Num>
                    <Num><H3>+880K </H3>visualizações no total</Num>
                </Grid>
            </Grid>
        </Box>
    );
}
