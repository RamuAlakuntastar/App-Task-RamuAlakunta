import './Footer.css';



const Footer = () => {
  return (
    <div className="footercontaier"> 

        <div className='footercont1'>
        <ul className='cont11'>

          <li className="heading1">BE THE FIRST TO KNOW</li>
          <li className="paragraph1">Sign up for updates from metta muse.</li>
          <li className='nm'><input type='email' placeholder='Enter The Email' className='email' /> <button className='buttonemail'>SUBSCRIBE</button></li>

        </ul>
        <ul className='cont11'>
          <li className="heading1">CONTACT US</li>
          <li className="paragraph1">+44 221 133 5360</li>
          <li className="paragraph1">customercare@mettammuse.com</li>
          <li className="heading1">CURRENCY</li>
          <li className="heading1">+USD</li>
          <li className="paragraph1">transaction will be completed in Euros and a currency reterence's avaliable an hover.</li>
        </ul>
          
          </div>
          <hr color='white'/>
          <div className='cont13'>
            <ul className="cont11">
              <li className="headig1">metta muse</li>
              <li className="paragraph1">About US</li>
              <li className="paragraph1">Stories</li>
              <li className="paragraph1">Artisans</li>
              <li className="paragraph1">Boutiques</li>
              <li className="paragraph1">Contact Us</li>
              <li className="paragraph1">EU Compliances Docs</li>
            </ul>
            <ul className="cont11">
              <li className="heading1">QUICK LINKS</li>
              <li className="paragraph1">Orders & Shipping</li>
              <li className="paragraph1">Payment & Pricing</li>
              <li className="paragraph1">Join/Login as a Seller</li>
              <li className="paragraph1">Return & Refunds</li>
              <li className="paragraph1">FAQs</li>
              <li className="paragraph1">Privacy Policy</li>
              <li className="paragraph1">Terms & Conditions</li>
            </ul>
            <ul className="cont11">
              <li className="heading1">FOLLOW US</li>
              <li className="paragraph1">Instagram</li>
              <li className="paragraph1">Facebook</li>
              <li className="paragraph1">Twitter</li>
              <li className="paragraph1">Pinterest</li>
              <li className="paragraph1">LinkedIn</li>
              <li className="paragraph1">YouTube</li>
            </ul>
            </div> 
      </div> 
    
  );
}







export default Footer;