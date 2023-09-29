import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
            <h5>Join the family</h5>
                <p>We invite you to embark on a journey with us into the world of smart living. Whether you're looking to enhance your home's security, reduce energy consumption, or simply make everyday tasks more convenient, we have the solutions you need.
Discover how Automatio can revolutionize your home, making it not just smarter, but also more sustainable and enjoyable. We're excited to be part of your journey toward a smarter, more connected future.</p>
            </div>
            <div className="col-md-6">
                <h5>Find us here</h5>
                <p><FontAwesomeIcon icon={faEnvelope}/> E-mail us on <a href="mailto:automatio.ca@gmail.com">automatio.ca@gmail.com</a></p>
                <p><FontAwesomeIcon icon={faPhone}/> Book a Free consultation : <a href="mailto:automatio.ca@gmail.com">Click here</a></p>
                <p><FontAwesomeIcon icon={faMapPin}/> 1 Kingfisher Way, Whitby, ON, Canada <FontAwesomeIcon icon={faCanadianMapleLeaf}/></p>
            </div>
        </div>
    </div>
  )
}

export default Contact