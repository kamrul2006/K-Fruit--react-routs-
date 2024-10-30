const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Welcome to K-Fruit, your go-to destination for the freshest, highest-quality fruits. 
                We pride ourselves on providing nature’s best to our community.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li><a href="/home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="/product" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">123 Fresh Lane, Fruit City, FC 12345</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
              <p className="text-gray-400">Email: info@fruitshop.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} [Shop Name]. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  