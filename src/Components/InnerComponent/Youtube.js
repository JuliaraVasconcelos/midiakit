import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import videosyt from '../../Images/videosyt.jpg'
import { AlignHorizontalCenter } from '@mui/icons-material';

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
        <Box sx={{ flexGrow: 1,
                minHeight: 350,
                 }}>
            <Grid container spacing={3}>
                <Grid item sm={6}
                textAlign="center"
                alignSelf={'center'}>
                    Canal voltado para o público interessado na cultura japonesa, contando com reviews de animes, teorias e curiosidades, além de reviews de produtos relacionados às marcas parceiras, que geram identificação com a audiência.
                </Grid>
                <Grid item xs alignSelf={'center'}>
                    <Item sx={{
                        minHeight: '240px',
                        alignSelf: 'center'                      
                    }}><Num>
                        <div><Percent>+7.2k</Percent>
                        Inscritos</div>
                        <div><Percent>+6k</Percent>
                        views/mês</div></Num></Item>
                </Grid>

                <Grid item xs>
                    <Item sx={{
                        minHeight: '150px'
                    }}><Num>
                        <div><Percent>23,5%</Percent>
                            feminino</div>
                        <div><Percent>76,6%</Percent>
                            masculino</div>
                        <div><Percent>63,2%</Percent>
                            18 a 24 anos</div>
                        <div><Percent>35,0%</Percent>
                            25 a 34 anos</div>
                        </Num>
                    </Item>
                </Grid>
            </Grid>
            {/* <Grid sx={{
                marginTop: '10px',
            }}>
                <img src={videosyt} alt='vídeos mais vistos no canal'
                    width={'100%'}
                    padding={'20px'}
                />
            </Grid> */}
        </Box>
    );
}
