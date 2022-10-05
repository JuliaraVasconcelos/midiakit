import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import videosyt from '../../Images/videosyt.jpg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
    return (
        <Box sx={{ flexGrow: 1, }}>
            <Grid container spacing={3}>
                <Grid item sm={6}>
                    <p>Canal voltado para o público interessado na cultura japonesa, contando com reviews de animes, teorias e curiosidades, além de reviews de produtos relacionados às marcas parceiras, que geram identificação com a audiência.</p>
                </Grid>
                <Grid item xs>
                    <Item sx={{
                        minHeight: '150px'
                    }}><p>+6.500
                        Inscritos</p>
                        <p>+7 mil
                            views/mês</p></Item>
                </Grid>

                <Grid item xs>
                    <Item sx={{
                        minHeight: '150px'
                    }}>
                        <p>20,1%
                            feminino</p>
                        <p>79,9%
                            masculino</p>
                        <p>70,3%
                            18 a 24 anos</p>
                        <p>26,9%
                            25 a 34 anos</p>
                    </Item>
                </Grid>
            </Grid>
            <Grid sx={{
                marginTop: '10px',
            }}>
                <img src={videosyt} alt='vídeos mais vistos no canal'
                    width={'100%'}
                    padding={'20px'}
                />
            </Grid>
        </Box>
    );
}
