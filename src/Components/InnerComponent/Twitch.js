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
                        <p>Lives focadas em bate papo e compartilhamento de ideias. O público também é interessado em assuntos da cultura japonesa e pop de uma maneira geral. A comunidade está em constante crescimento.</p>
                </Grid>
                <Grid item xs>
                    <Item sx={{
                        minHeight: '150px'
                    }}><Num>
                        <div><Percent>2.325</Percent>
                        Seguidores</div>
                        <div><Percent>21</Percent>
                        viewers/mês</div>
                        </Num>
                        </Item>
                </Grid>

                <Grid item xs>
                    <Item sx={{
                        minHeight: '150px'
                    }}><Num>
                        <div><Percent>1.724</Percent>
                        horas assistidas</div>
                        <div><Percent>6.024</Percent>
                        visualizações ao vivo</div>
                        </Num></Item>
                </Grid>
            </Grid>
        </Box>
    );
}
