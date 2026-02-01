import { Box, Grid, Typography } from "@mui/material";
import { Link } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function PersonalInfo() {
  return (
    <Box component={"header"} display={"grid"} gap={2} mb={2}>
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, sm: 4 }} display="flex" justifyContent="center" alignItems="center">
          <img
            src="/me.jpg"
            alt="Profile Picture"
            width={250}
            height={250}
            style={{ borderRadius: "50%" }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <Typography variant="h4" component="h1" fontWeight={"bold"} gutterBottom>
            Diego Pezet
          </Typography>
          <Typography>
            <Typography component="span" color={"primary"}>Quality Engineer</Typography> by profession,
            <Typography component="span" color={"primary"}> programming teacher</Typography> by vocation.
            Passionate about clean code, test automation, and teaching developers how to build software that actually works.
          </Typography>
          <Grid container spacing={2} mt={2}>
            <Grid size={4} display="flex" alignItems="center">
              <WorkIcon className="text-indigo-500" />
              <Link href="https://www.accenture.com/ar-es" sx={{ ml: 1, textDecoration: 'none' }}>Accenture</Link>
            </Grid>
            <Grid size={4} display="flex" alignItems="center">
              <LinkedInIcon className="text-blue-400" />
              <Link href="https://www.linkedin.com/in/diegohpezet/" sx={{ ml: 1, textDecoration: 'none' }}>LinkedIn</Link>
            </Grid>
            <Grid size={4} display="flex" alignItems="center">
              <GitHubIcon />
              <Link href="https://github.com/diegohpezet" sx={{ ml: 1, textDecoration: 'none' }}>Github</Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}