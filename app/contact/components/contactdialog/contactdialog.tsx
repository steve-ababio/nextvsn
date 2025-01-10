import Link from "next/link";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

// pages/contact.js
export default function ContactDialog() {
    return (
    <div className="min-h-screen">
        <h1 className="text-[24px] text-center text-slate-700 font-bold py-10">Get in touch</h1>
        <div className="min-h-screen py-16 bg-vsn-btndeep text-white flex justify-center items-center p-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section: Contact Information */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl text-center sm:text-start font-bold">OUR CONTACT INFORMATION</h1>
          <p className="text-base md:text-lg">
            Reach out to us directly through any of the methods below.
          </p>
          <div className="bg-white text-blue-900 p-4 rounded-[30px] text-sm md:text-lg">
            info@nextvsntechinnovation.com
          </div>
          <p className="text-sm md:text-base">
            <strong><span className="text-vsnbluelight">Phone:</span></strong> (123) 456-7890
          </p>
          <p className="text-sm md:text-base">
            <strong><span className="text-vsnbluelight">Address:</span></strong> 1234 Tech Lane, Innovation City, Country
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="font-semibold text-lg text-vsnbluelight">Customer Support</h2>
              <p className="text-sm my-3">Our support team is available 24/7.</p>
              <p className="mb-2"><span className="text-vsnbluelight">Email:</span> support@nextvsn.com</p>
              <p className="mb-2"><Link href="tel:Phone:(123) 456-7890"><span className="text-vsnbluelight mb-2">Phone:</span> (123) 456-7890</Link></p>
              <p><span className="text-vsnbluelight">Live Chat:</span> Available on our website</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Feedback and Suggestions</h2>
              <p className="text-sm">
                We value your feedback to continuously improve Nextvsn.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm md:text-base">Connect with us on social media:</p>
            <div className="flex space-x-4 mt-2">
              <Link href="#" className="bg-white text-blue-900 p-2 rounded-full">
                <CiFacebook size={25} />
              </Link>
              <Link href="#" className="bg-white text-blue-900 p-2 rounded-full">
                <CiInstagram size={25} />
              </Link>
              <Link href="#" className="bg-white text-blue-900 p-2 rounded-full">
                <CiTwitter size={25} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-blue-900">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email address</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company Name</label>
              <input
                type="text"
                placeholder="Your Company Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                placeholder="Type your message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
    );
  }
  