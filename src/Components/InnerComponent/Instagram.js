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
                    textAlign="center"
                    alignSelf={'center'}>
                        <p>Plataforma voltada para compartilhar o dia a dia, novidades e notícias relacionadas aos outros canais onde produzo conteúdo.</p>
                </Grid>
                <Grid item xs alignSelf={'center'}>
                    <Item sx={{
                        minHeight: '240px'
                    }}><Num alignSelf={'center'}>
                        <div><Percent>1.940</Percent>
                        Seguidores</div>
                        <div><Percent>14.6k</Percent>
                        alcance/mês</div>
                        <div><Percent>56.542</Percent>
                        impressões/mês</div>
                        </Num></Item>
                </Grid>

                <Grid item xs>
                    <Item sx={{
                        minHeight: '150px'
                    }}> <Num>
                        <div><Percent>27,1%</Percent>
                        feminino</div>
                        <div><Percent>72,8%</Percent>
                        masculino</div>
                        <div><Percent>36,6%</Percent>
                        18 a 24 anos</div>
                        <div><Percent>42,5%</Percent>                    
                        25 a 34 anos</div>
                        </Num></Item>
                </Grid>
            </Grid>
        </Box>
    );
}
