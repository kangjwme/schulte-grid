import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [clickedNumbers, setClickedNumbers] = useState<number[]>([]);

  const initializeGame = () => {
    const nums = Array.from({ length: 25 }, (_, i) => i + 1);
    // Fisher-Yates shuffle
    for (let i = nums.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    setNumbers(nums);
    setCurrentNumber(1);
    setStartTime(null);
    setEndTime(null);
    setGameStarted(false);
    setGameCompleted(false);
    setClickedNumbers([]);
    setShowStartScreen(true);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const startGame = () => {
    setShowStartScreen(false);
    setGameStarted(true);
    setStartTime(Date.now());
  };

  const handleNumberClick = (number: number) => {
    if (clickedNumbers.includes(number)) return;

    if (number === currentNumber) {
      setClickedNumbers(prev => [...prev, number]);
      if (currentNumber === 25) {
        setEndTime(Date.now());
        setGameCompleted(true);
      } else {
        setCurrentNumber(prev => prev + 1);
      }
    }
  };

  const getTimeString = () => {
    if (!startTime || !endTime) return '0.00';
    const timeInSeconds = (endTime - startTime) / 1000;
    return timeInSeconds.toFixed(2);
  };

  const getPerformanceMessage = () => {
    const timeInSeconds = parseFloat(getTimeString());
    if (timeInSeconds <= 8) return '優秀！你的注意力非常集中！';
    if (timeInSeconds <= 20) return '良好！繼續保持！';
    if (timeInSeconds <= 26) return '中等水平，還有提升空間。';
    return '需要多加練習，提高注意力集中能力。';
  };

  if (showStartScreen) {
    return (
      <Container maxWidth="md">
        <Box sx={{ 
          my: 4, 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh'
        }}>
          <Typography variant="h3" component="h1" gutterBottom>
            舒爾特方格訓練
          </Typography>
          <Typography variant="body1" paragraph sx={{ maxWidth: 600, mb: 4 }}>
            這是一個訓練注意力和視覺搜索能力的遊戲。在5x5的方格中，按照從1到25的順序點擊數字。
            完成時間越短，表示你的注意力越集中。
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            onClick={startGame}
            sx={{ fontSize: '1.2rem', py: 2, px: 4 }}
          >
            開始遊戲
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          舒爾特方格訓練
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <Button 
            variant="contained" 
            onClick={initializeGame}
            sx={{ mr: 2 }}
          >
            重新開始
          </Button>
          {gameCompleted && (
            <Typography variant="h6" color="primary">
              用時: {getTimeString()} 秒
            </Typography>
          )}
        </Box>

        <Grid container spacing={1} sx={{ maxWidth: 500, margin: 'auto' }}>
          {numbers.map((number, index) => (
            <Grid item xs={2.4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  textAlign: 'center',
                  cursor: clickedNumbers.includes(number) ? 'default' : 'pointer',
                  bgcolor: clickedNumbers.includes(number) ? '#e0e0e0' : 'white',
                  '&:hover': {
                    bgcolor: clickedNumbers.includes(number) ? '#e0e0e0' : '#bbdefb',
                  },
                }}
                onClick={() => handleNumberClick(number)}
              >
                <Typography variant="h6">{number}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {gameCompleted && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" color="primary">
              {getPerformanceMessage()}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default App;
