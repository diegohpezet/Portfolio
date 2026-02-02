import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { Helmet } from "react-helmet";
import PersonalInfo from "./_components/PersonalInfo";
import ContentTabs from "./_components/ContentTabs";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Portfolio | diegohpezet</title>
        <meta name="description" content="Welcome to my personal portfolio website." />
        <link rel="canonical" href="https://diegohpezet.dev/" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Helmet>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <PersonalInfo />

        <ContentTabs />
      </Container>
    </ThemeProvider>
  );
}
