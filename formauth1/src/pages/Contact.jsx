
import React from 'react'
import Layout from '../components/layouts/Layout';
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
           Email: www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
           Phone : 9933935760
          </p>
          <p className="mt-3">
            Help? : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
