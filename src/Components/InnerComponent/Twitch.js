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
                <Grid item sm={6}>
                        <p>Lives focadas em bate papo e compartilhamento de ideias. O público também é interessado em assuntos da cultura japonesa e pop de uma maneira geral. A comunidade está em constante crescimento.</p>
                </Grid>
                <Grid item xs>
                    <Item sx={{
                        minHeight: '150px'
                    }}>
                        <p>2.190
                        Seguidores</p>
                        <p>14,4
                            viewers/mês</p></Item>
                </Grid>

                <Grid item xs>
                    <Item sx={{
                        minHeight: '150px'
                    }}>
                        <p>63.430
                        minutos assistidos</p>
                        <p>2.658
                        visualizações ao vivo</p></Item>
                </Grid>
            </Grid>
        </Box>
    );
}
