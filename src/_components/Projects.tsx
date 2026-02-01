import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { Card } from '@mui/material';

const projects = [{
  title: "Artlog",
  description: `Web app that allows users to create and share digital pictures.`,
  img: {
    url: "/project_pictures/Artlog.png",
    width: 1297,
    height: 937
  }
}, {
  title: "Deck'd",
  description: `E-Commerce to sell custom card decks.`,
  img: {
    url: "/project_pictures/Deckd.png",
    width: 942,
    height: 948
  }
}, {
  title: "MyNotes",
  description: `A note-taking web application.`,
  img: {
    url: "/project_pictures/MyNotes.png",
    width: 691,
    height: 851
  }
}, {
  title: "PDIBlog",
  description: `A blog that I use to keep track of what I teach.`,
  img: {
    url: "/project_pictures/PDIBlog.png",
    width: 1010,
    height: 755
  }
}, {
  title: "Wallet",
  description: `A digital wallet that simulates transactions`,
  img: {
    url: "/project_pictures/Wallet.png",
    width: 1247,
    height: 749,
  }
}]

export default function Projects() {
  return (
    <Box>
      <Masonry columns={{ lg: 2 }} spacing={2}>
        {projects.map((project, index) => (
          <Card
            key={index}
            tabIndex={0}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              '&:hover .overlay': {
                opacity: 1,
                transform: 'translateY(0)',
                pointerEvents: 'auto',
              },
              '&:hover .projectImage': {
                filter: 'brightness(0.95)',
              },
              // Always show overlay and darken image on small screens (mobile)
              '@media (max-width:600px)': {
                '& .overlay': {
                  opacity: 1,
                  transform: 'translateY(0)',
                  pointerEvents: 'auto',
                },
                '& .projectImage': {
                  filter: 'brightness(0.95)',
                },
              },
            }}
          >
            <img
              src={project.img.url}
              alt={project.title}
              width={project.img.width}
              height={project.img.height}
              className="projectImage"
              style={{ transition: 'filter 220ms ease' }}
            />

            <Box
              className="overlay"
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: 'rgba(0,0,0,0.65)',
                color: '#fff',
                p: 2,
                opacity: 0,
                transform: 'translateY(10px)',
                transition: 'all 220ms ease',
                pointerEvents: 'none',
              }}
            >
              <Box component="h3" sx={{ m: 0, fontSize: '1.05rem' }}>{project.title}</Box>
              <Box component="p" sx={{ m: 0, mt: 0.5, fontSize: '0.9rem' }}>{project.description}</Box>
            </Box>
          </Card>
        ))}
      </Masonry>
    </Box>
  );
}
