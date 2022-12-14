import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
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

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid sm={12}
                    textAlign="center">
                        <p>Sou a Juliara, tenho 29 anos e produzo conteúdo para a internet desde 2015. Atualmente no Youtube, Instagram, Tik Tok e Twitch, meus conteúdos são voltados para o mundo dos games e animes, abrangendo principalmente o público que consome conteúdos orientais.</p>
                        <p>Influencer de marcas de tecnologia e lifestyle.</p>
                    
                </Grid>
            </Grid>
        </Box>
    );
}
