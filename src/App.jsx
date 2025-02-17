import { useState } from "react";
import { Button, Card, CardContent, Typography, Box, IconButton, Snackbar, Alert } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "@fontsource/dancing-script";

const quotes = [
  { text: "I'm not arguing, I'm just explaining why I'm right!", author: "Anonymous" },
  { text: "My bed is a magical place where I suddenly remember everything I forgot to do.", author: "Unknown" },
  { text: "Some people graduate with honors, I am just honored to graduate.", author: "Milton Berle" },
  { text: "I'm on a seafood diet. I see food and I eat it!", author: "Garfield" },
  { text: "I told my wife she should embrace her mistakes. She gave me a hug.", author: "Anonymous" },
  { text: "Behind every great man is a woman rolling her eyes.", author: "Jim Carrey" },
  { text: "A day without laughter is a day wasted.", author: "Charlie Chaplin" },
  { text: "If at first you don’t succeed, then skydiving definitely isn’t for you.", author: "Steven Wright" },
  { text: "I finally figured out what I want to be when I get older… younger!", author: "Maxine" },
  { text: "I used to think I was indecisive, but now I’m not too sure.", author: "Unknown" },
  { text: "To err is human; to blame it on someone else shows management potential.", author: "Unknown" },
  { text: "I didn’t fail the test. I just found 100 ways to do it wrong.", author: "Benjamin Franklin" },
  { text: "The road to success is dotted with many tempting parking spaces.", author: "Will Rogers" },
  { text: "A balanced diet means a cupcake in each hand.", author: "Unknown" },
  { text: "The only mystery in life is why the kamikaze pilots wore helmets.", author: "Al McGuire" },
  { text: "Why don’t skeletons fight each other? They don’t have the guts.", author: "Unknown" },
  { text: "I have an inferiority complex, but it’s not a very good one.", author: "Unknown" },
  { text: "My wife told me to stop impersonating a flamingo. I had to put my foot down.", author: "Unknown" },
  { text: "I told my dad I wanted to be a comedian. He laughed at me.", author: "Unknown" },
  { text: "I was going to tell a joke about an elevator, but it’s an uplifting experience.", author: "Unknown" },
  { text: "A clear conscience is usually the sign of a bad memory.", author: "Unknown" },
  { text: "I used to be addicted to soap, but I’m clean now.", author: "Unknown" },
  { text: "My fake plants died because I did not pretend to water them.", author: "Mitch Hedberg" },
  { text: "I am on a whiskey diet. I've lost three days already.", author: "Tommy Cooper" },
  { text: "A bank is a place that will lend you money if you can prove that you don’t need it.", author: "Bob Hope" },
  { text: "Never trust an atom, they make up everything!", author: "Unknown" },
  { text: "Some people graduate with honors, I am just honored to graduate.", author: "Milton Berle" },
  { text: "I told my wife she should embrace her mistakes. She gave me a hug.", author: "Anonymous" },
  { text: "A computer once beat me at chess, but it was no match for me at kickboxing.", author: "Emo Philips" },
  { text: "Always borrow money from a pessimist. He won’t expect it back.", author: "Oscar Wilde" }
];

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const theme = createTheme({
  typography: {
    fontFamily: "'Dancing Script', sans-serif", // Use handwritten font
  },
});

function App() {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());
  const [bgColor, setBgColor] = useState(`hsl(${Math.random() * 360}, 80%, 80%)`);
  const [openSnackbar, setOpenSnackbar] = useState(false);


  const getNewQuote = () => {
    setCurrentQuote(getRandomQuote());
    setBgColor(`hsl(${Math.random() * 360}, 80%, 80%)`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`"${currentQuote.text}" - ${currentQuote.author}`);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: bgColor,
          transition: "background-color 0.5s ease-in-out",
          flexDirection: "column",
          gap: 2,
          textAlign: "center",
        }}
      >
        <EmojiEmotionsIcon sx={{ fontSize: 80, color: "#ff4081" }} />
        <Card sx={{ maxWidth: 500, padding: 3, boxShadow: 5, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              {currentQuote.text}
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">
              - {currentQuote.author}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={getNewQuote}
                sx={{ fontSize: "1.2rem", fontWeight: "bold", flexGrow: 1, mr: 1 }}
              >
                🤣 Next Quote
              </Button>
              <IconButton color="primary" onClick={copyToClipboard}>
                <ContentCopyIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Snackbar to show alert */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          Quote copied to clipboard!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
