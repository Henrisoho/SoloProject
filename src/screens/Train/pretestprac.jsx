import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useReduxStore from '../../hooks/useReduxStore';
import { Box, Typography, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../components/App/theme';

export default function PreTest() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dispatch = useDispatch();
    const history = useHistory();
    const store = useReduxStore();
    const words = useSelector(store => store.completeReducer)
    const completeWordsArr = useSelector((store) => store.practiceCompleteReducer)
    const lang = useSelector((store) => store.langPickedReducer)

    const goNext = (e) => {
        e.preventDefault();
        history.push('/test')
    }

    console.log(lang)
    return (
        <Box className="container"
            textAlign='center'
            alignItems='center'
            alignContent='center'
            style={{ backgroundColor: colors.primary[400], height: '100%', }}>
            <Box>
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                    backgroundColor={colors.primary[400]}
                >
                    Memorize these then we'll test
                </Typography>
            </Box>
            <Box>
                {completeWordsArr?.map((word) => {
                    return (
                        <Typography
                            variant="h4"
                            color={colors.grey[100]}
                            fontWeight="bold"
                            sx={{ m: "10px 0 0 0" }}
                            backgroundColor={colors.primary[400]}
                            key={word.correctWord.id}
                        >
                            {word.correctWord.word} = {word.transWord}
                        </Typography>
                    )
                })}
            </Box>
            <Box paddingBottom='20px'>
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                    backgroundColor={colors.primary[400]}
                >
                    When you are ready lets begin the test
                </Typography>
            </Box>
            <Button onClick={goNext} color='success' variant="contained">Let's Begin</Button>
        </Box>
    );
}
