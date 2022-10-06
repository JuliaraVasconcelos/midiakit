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
                        <p>Vídeos focados no público que é atraído por cultura japonesa e pop, com vídeos de animes, curiosidades, mostrando produtos e dia a dia.</p>
                </Grid>
                <Grid item xs>
                    <Item sx={{
                        minHeight: '150px'
                    }}>
                        <p>3.758
                        Seguidores</p>
                        <p>89,9k
                        visualizações</p></Item>
                </Grid>

                <Grid item xs>
                    <Item sx={{
                        minHeight: '150px'
                    }}>
                        <p>22,9%
                        feminino</p>
                        <p>77,1%
                        masculino</p></Item>
                </Grid>
            </Grid>
        </Box>
    );
}
