const ContactSection = () => {
    return (
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
          <p className="text-center text-gray-600 mb-8">
            Have questions? Get in touch with us! We would love to hear from you.
          </p>
          
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your name"
              />
            </div>
  
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your email"
              />
            </div>
  
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="5"
                placeholder="Your message"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  