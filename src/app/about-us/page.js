'use client'
import Box from '@mui/material/Box';
import './about-us.css';


const AboutUs = () => {
  return (
    <Box sx={{display:"flex"}}> 

    <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      {/* Add your home page content here */}

    <div className="job-detail-header-div">
      <h2 className='padding-bottom-four job-detail-heading'>About Us</h2>
    </div>
    <div className="build-bridge-div">
      <h2 className='main-intro-text' id='build-bridges'>We build bridges between <span className='gradient-text-blue'>companies and employment</span></h2>
    </div>
    

    <div className="about-us-intro-div ">
      <p className='about-us-intro gradient-text-blue'>Our mission is to help students to get the best opportunities. We also help fast growing startups, Companies to build powerful, strong teams Fast with a seamless hiring experience.</p>
    </div>
    <div className="about-us-detail-container">
      <div className='container-section'>
        <h3 className=' yellow-text'>What drives Us?</h3>
        <p className='description'>Finding an Internship, Jobs Sucks. In college students apply daily to over 100 positions on every recruitment platform, spending hours finding roles that fit our interests and also being confused in figuring out the genuine Internship, Job source where they have some trust on that platform.</p>
        <br />
        <p className='description'>There is a huge gap between Job-seekers and employers today, largely due to inaccessibility, talent and expectation mismatch etc.</p>
      </div>

      <div className='container-section'>
        <h3 className='jobs-text'>What do we offer?</h3>
        <p className='description'>We come with a one stop solution for all your problems that you’ll be facing as a Job-seeker or employer. 
We solve this problem by helping out talented individuals in finding their dream roles and assisting recruiters to hire the right fit for their organization.</p>
        <br />
      <p className='description'>At the end of the day, we will be upfront and transparent with the data we collect and how we use it to help you land your dream job - and {"we'll"} let you decide if {"you're"} cool with that.</p>
        <br />
        <p className='description'>
{"Let's" }make recruiting better for everyone.</p>
        
      </div>

    </div>
    <div className="about-us-intro-div">
      <a href="/" className='freenlancer-text'>Contact Us</a>
    </div>

    </Box>
    </Box>
  );
};

export default AboutUs;