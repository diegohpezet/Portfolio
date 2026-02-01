import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { Typography } from '@mui/material';
import { CastForEducation, Engineering, Web } from '@mui/icons-material';

const experience = [{
  title: "Quality Engineer Associate",
  company: {
    name: "Accenture",
    url: "https://www.accenture.com/ar-es",
    className: "text-indigo-500",
    icon: <Engineering />
  },
  date: "Apr, 2025 - Present",
  description: `I am responsible for ensuring the quality and reliability of software applications 
  through rigorous testing and quality assurance practices. My role involves collaborating 
  with cross-functional teams to identify and resolve defects, implement testing strategies, 
  and contribute to the overall success of software projects.`
}, {
  title: "Freelance Web Developer",
  company:
  {
    name: "TWINS Consulting Group",
    url: "https://twinsconsultora.com/",
    className: "text-pink-500",
    icon: <Web />
  },
  date: "Feb, 2025 - Apr, 2025",
  description: `Developed the company's website using Wordpress, enhancing its online presence.
  Implemented responsive design principles to ensure optimal viewing across various devices.`
}, {
  title: "Programming Instructor",
  company: {
    name: "EEST N°4 - Berazategui",
    url: "https://web2.tecnica4berazategui.edu.ar/",
    className: "text-blue-600",
    icon: <CastForEducation />
  },
  date: "Jul, 2023 - Present (Part-time)",
  description: `I teach programming fundamentals to high school students, focusing on languages 
  such as Python and JavaScript. My responsibilities include designing lesson plans, 
  delivering engaging lectures, and providing hands-on coding exercises to help students 
  grasp core programming concepts and develop problem-solving skills.`
}];

export default function Experience() {
  return (
    <Timeline
      sx={{
        padding: 0,
        margin: 0,
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.3,
        },
      }}
    >
      {experience.map(exp => (
        <TimelineItem key={exp.title}>
          <TimelineOppositeContent color="textSecondary">
            {exp.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={exp.company.className} variant="outlined">
              {exp.company.icon}
            </TimelineDot>
            <TimelineConnector/>
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" fontWeight={"bold"}>
              {exp.title}
            </Typography>

            <Typography variant={"subtitle1"} className={exp.company.className}>
              <a href={exp.company.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                {exp.company.name}
              </a>
            </Typography>

            <Typography variant={"body2"}>
              {exp.description}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))
      }
    </Timeline >
  )
}