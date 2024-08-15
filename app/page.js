import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="200vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">
              Login
            </Button>
            <Button color="inherit" href="/sign-up">
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          textAlign: "center",
          my: 4,
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5" gutterBottom>
          The easiest way to create flashcard from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Easy Text Input
            </Typography>
            <Typography>
              {" "}
              Simply input your text and let our software do the rest. Creating
              flashcards has been easier.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Smart Flashcards
            </Typography>
            <Typography>
              {" "}
              Our AI intelligence breaks down your text into concise flashcards,
              perfect for studying.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Accessible Anywhere
            </Typography>
            <Typography>
              {" "}
              Access your flashcards from any device, at any time. Study on the
              go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5">Basic</Typography>
              <Typography variant="h6">$5 / Month</Typography>
              <Typography>
                {" "}
                Access to basic flashcard feautures and limited storage.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose Basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5">Pro</Typography>
              <Typography variant="h6">$10 / Month</Typography>
              <Typography>
                {" "}
                Unlimited flashcards and storage, with primary support.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose Pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Potentially add Premium */}
      {/* <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Box
            sx={{
              p: 3,
              border: "1px solid",
              borderColor: "grey.300",
              borderRadius: 2,
            }}
          >
            <Typography variant="h5">Premium</Typography>
            <Typography variant="h6">$15 / Month</Typography>
            <Typography>
              {" "}
              Access to basic flashcard feautures and limited storage.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Choose Premium
            </Button>
          </Box>
        </Grid> */}
    </Container>
  );
}
