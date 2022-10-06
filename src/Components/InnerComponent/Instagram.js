import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item sm={6}
                    textAlign="center">
                        <p>Plataforma voltada para compartilhar o dia a dia, novidades e notícias relacionadas aos outros canais onde produzo conteúdo.</p>
                </Grid>
                <Grid item xs>
                    <Item sx={{
                        minHeight: '150px'
                    }}>
                        <p>1.600
                        Seguidores</p>
                        <p>19,9k
                        alcance/mês</p></Item>
                </Grid>

                <Grid item xs>
                    <Item sx={{
                        minHeight: '150px'
                    }}> 
                        <p>39,2%
                        feminino</p>
                        <p>60,7%
                        masculino</p>
                        <p>26,8%
                        18 a 24 anos</p>
                        <p>47,9%
                        25 a 34 anos</p></Item>
                </Grid>
            </Grid>
        </Box>
    );
}
