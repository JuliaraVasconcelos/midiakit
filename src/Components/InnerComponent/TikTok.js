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
const Num = styled('div')({
    padding: '2px',
    color: '#4B06B6',
    margin: '10px'
})
const Percent = styled('div')({
    fontSize: '24px',
    color: '4B06B6',
    fontWeight: 'bold'
});

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
                    }}><Num>
                        <div><Percent>8.578</Percent>
                        Seguidores</div>
                        <div><Percent>+873k</Percent>
                        visualizações</div>
                        </Num></Item>
                </Grid>

                <Grid item xs>
                    <Item sx={{
                        minHeight: '150px'
                    }}><Num>
                        <div><Percent>19,7%</Percent>
                        feminino</div>
                        <div><Percent>80,3%</Percent>
                        masculino</div></Num></Item>
                </Grid>
            </Grid>
        </Box>
    );
}
