import React, { useState } from 'react';
import './about.scss';
import { Grid, Paper, Typography } from '@material-ui/core';
import { DeveloperMode, Language, Gavel } from '@material-ui/icons';

export default function About() {

  return (
    <section className="about" id='about'>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>

          <Paper variant="outlines" elevation={3} className="aboutWrapper">
            <br />
            <DeveloperMode className="icon" />
            <br />
            <Typography variant="h6">
              Software Engineer
          </Typography>
            <br />
            <Typography variant="caption" >
              Building practical and secure applications <br />
              to meet your business needs.
          </Typography>
            <br />
            <Typography variant="h6">
              Technologies I use
            </Typography>
            <br />
            <Typography variant="caption">
              Node.js, Express.js, <br />
              MySQL, MongoDB, DynamoDB, S3 <br />
            </Typography>
            <br />
            <Typography variant="h6">
              Dev Tools
            </Typography>
            <br />
            <Typography variant="caption">
              Sequelize and Mongoose <br />
              Database Architechting <br />
              Application Design <br />
              Secure Authentication
          </Typography>
            <br />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper variant="outlines" elevation={3} className="aboutWrapper">
            <br />
            <Language className="icon" />
            <br />
            <Typography variant="h6">
              Web Developer
          </Typography>
            <br />
            <Typography variant="caption">
              I like to build projects that <br />
              stretch me alongside a team of <br />
              awesome collaborators.
          </Typography>
            <br />
            <Typography variant="h6">
              Languages I speak
            </Typography>
            <br />
            <Typography variant="caption">
              HTML5, CSS3, Sass <br />
              JavaScript, React <br />
            </Typography>
            <br />
            <Typography variant="h6">
              Dev Tools
            </Typography>
            <br />
            <Typography variant="caption">
              Material Desgin <br />
              Bootstrap <br />
              GitHub <br />
              Terminal <br />
              VSCode <br />
              Auth0
          </Typography>
            <br />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper variant="outlines" elevation={3} className="aboutWrapper">
            <br />
            <Gavel className="icon" />
            <br />
            <Typography variant="h6">
              Geology and Woodwork
          </Typography>
            <br />
            <Typography variant="caption">
              Earth Scientist who appreciates <br />
              the natural world and loves <br />
              well made things that last.
          </Typography>
            <br />
            <Typography variant="h6">
              Experience
            </Typography>
            <br />
            <Typography variant="caption">
              Environmental Consulting <br />
              Professional Luthier <br />
            </Typography>
            <br />
            <Typography variant="h6">
              Skills
            </Typography>
            <br />
            <Typography variant="caption">
              Systematic problem solver <br />
              Utilize complex toolset <br />
              Eye for detail <br />               
              Constant learner
            </Typography>
            <br />
          </Paper>
        </Grid>
      </Grid>
    </section>
  )
}