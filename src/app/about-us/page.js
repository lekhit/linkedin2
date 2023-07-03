'use client'
import Box from '@mui/material/Box';


const AboutUs = () => {
  function Carsol(){
    return (
<>
<div className='  flex justify-items-center gap-4 py-8  '>
<div className='relative  top-8 w-full h-[100px] md:h-[300px] rounded-lg  bg-slate-400'> </div>
<div className='relative  bottom-8 w-full  h-[100px] md:h-[300px] rounded-lg  bg-slate-400'> </div>
<div className='relative  top-8 w-full h-[100px] md:h-[300px] rounded-lg  bg-slate-400'> </div>
<div className='relative  bottom-8 w-full h-[100px] md:h-[300px] rounded-lg  bg-slate-400'> </div>

</div>
</>
    )
  }
  return (
    <Box sx={{display:"flex"}}> 

    <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      {/* Add your home page content here */}

    <div className="job-detail-header-div">
      <h2 className='text-center text-2xl md:text-6xl font-bold '>About Us</h2>
    </div>
    <div className=" md:w-[433px] py-8">
      <h2 className='text-2xl md:text-4xl ' id='build-bridges'>We build bridges between <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#FF00A8] to-[#973CDE] '>companies and employment</span></h2>
    </div>
    <Carsol/>

    <div className="py-16 md:px-56  ">
      <p className='text-xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#FF00A8] to-[#973CDE]'>Our mission is to help students to get the best opportunities. We also help fast growing startups, Companies to build powerful, strong teams Fast with a seamless hiring experience.</p>
    </div>
    <div className="md:p-8">
      <div className='container-section'>
        <h3 className='text-[#FFD966] text-xl md:text-3xl'>What drives Us?</h3>
        <div className='text-md md:text-xl pt-4'>
        <p className=''>Finding an Internship, Jobs Sucks. In college students apply daily to over 100 positions on every recruitment platform, spending hours finding roles that fit our interests and also being confused in figuring out the genuine Internship, Job source where they have some trust on that platform.</p>
        <br />
        <p className=' '>There is a huge gap between Job-seekers and employers today, largely due to inaccessibility, talent and expectation mismatch etc.</p>
        </div>
      </div>

      <div className='pt-8'>
        <h3 className='text-[#00D085] text-xl md:text-3xl'>What do we offer?</h3>
        <div className='text-md md:text-xl pt-4'>
        <p className='description'>We come with a one stop solution for all your problems that you’ll be facing as a Job-seeker or employer. 
We solve this problem by helping out talented individuals in finding their dream roles and assisting recruiters to hire the right fit for their organization.</p>
        <br />
      <p className='description'>At the end of the day, we will be upfront and transparent with the data we collect and how we use it to help you land your dream job - and {"we'll"} let you decide if {"you're"} cool with that.</p>
        <br />
        <p className='description'>
{"Let's" }make recruiting better for everyone.</p>
</div>
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