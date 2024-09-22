import React from 'react'
import { Typography, Container, Grid, Link, IconButton } from '@mui/material'
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material'
  import './Footer.css' 

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-title">
              LawLogix
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Your go-to platform for connecting with top lawyers and scheduling
              appointments effortlessly.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-title">
              Quick Links
            </Typography>
            <ul className="footer-links">
              <li>
                <Link href="/about" color="inherit">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" color="inherit">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" color="inherit">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-title">
              Follow Us
            </Typography>
            <div className="social-icons">
              <IconButton href="https://facebook.com" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://linkedin.com" color="inherit">
                <LinkedIn />
              </IconButton>
            </div>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          className="footer-copyright"
        >
          {'© '}
          {new Date().getFullYear()} LawLogix. All rights reserved.
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer
