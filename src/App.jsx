import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import PersonalInfo from "./_components/PersonalInfo";
import ContentTabs from "./_components/ContentTabs";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <PersonalInfo />

        <ContentTabs />
      </Container>
    </ThemeProvider>
  );
}
