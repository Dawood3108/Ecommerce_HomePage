import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {BiLogoFacebookCircle,BiLogoInstagram} from 'react-icons/bi'
import {BsLinkedin} from 'react-icons/bs'
import google from '../assets/images/pay/play.jpg'
import app from '../assets/images/pay/app.jpg'
import pay from '../assets/images/pay/pay.png'
const footer = () => {
  return (
   <>
 <footer className='footer p-5 '>
  <div className="container-xxl">
<div className="row">
  <div className="col-4  flex-column ">
<h3 className='mb-4'>Contact Us</h3>
<div className="footer-details flex-colum mb-5">
<p className="mb-3"><b>Address:</b> Thika town,waltex building,2nd floor</p>
<p className="mb-3"><b>Phone:</b>  <a href="tel:+2453458974">Call Us + 2453458974</a></p>
<p className="mb-3"><b>Hours Open:</b> From 8 A.m to 5 P.m</p>
<p className='mb-3'><b>Follow Us</b></p>

<div className="social-icons d-flex  jusify-content-around">
  <Link><AiFillTwitterCircle className='mx-2 fs-4'/></Link>
  <Link><BiLogoFacebookCircle className='mx-2 fs-4'/></Link>
  <Link>< BiLogoInstagram className='mx-2 fs-4'/></Link>
  <Link>< BsLinkedin className='mx-2 fs-5'/></Link>
</div>
</div>

  </div>
<div className="col-2">
  <h3 className='mb-4'>About</h3>
<div className="footer-details d-flex-column justify-content-space-between col-2">
  <Link className="mb-3">
     About </Link>
  <Link className="mb-3 ">
    Delivery</Link>
  <Link className="mb-3 ">
    privacy policy</Link>
  <Link className="mb-3">
     Tax policy</Link>
  <Link className="mb-3"> 
  About Us</Link>
 
  <Link className='mb-4 py-2'>
     Terms & conditions</Link>
</div>

</div>

<div className="col-2">
  <h3 className='mb-4'>Accounts</h3>
<div className="footer-details d-flex-column justify-content-space-between col-2">
  <Link className="mb-3">
     Accounts </Link>
  <Link className="mb-3 ">
    Delivery</Link>
  <Link className="mb-3 ">
    privacy policy</Link>
  <Link className="mb-3">
     Tax policy</Link>
  <Link className="mb-3"> 
  About Us</Link>
 
  <Link className='mb-4 py-2'>
     Terms & conditions</Link>
</div>

</div>
<div className="col-4">
 <h3 className='mb-3'> Install App</h3>
<div className="footer-details">
  <p>Available On Google Play Store & App Store</p>
 

<div className='pay' >
  <Link><img src={google} alt="google play " className='img-fluid p-4 ' /></Link>

<Link> <img src={app} alt="app-store" className='img-fluid p-4' /></Link>
 
</div>
<h6 className='mb-3'>payment method</h6>
<Link><img src={pay} alt="google play " className='img-fluid p-4 ' /></Link>

</div>

</div>



</div>
<hr />
<div className="row d-flex justify-content-between">
  
<div className="col-8">
  <p>&copy; Developed by Eclar Developers 2023 </p>
</div>
<div className="col-3 d-flex justify-content-around  ">
<Link className='text-black'>Privacy Policy</Link>
<Link className='text-black'>Terms of user</Link>
<Link className='text-black'>Contact Me</Link>

</div>

</div>
</div>




 </footer>

   
   </>
  )
}

export default footer
