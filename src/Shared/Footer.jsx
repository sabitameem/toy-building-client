import logo from '../../src/assets/logo.avif'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center">
              <img src={logo} alt="Website Logo" className="h-8 w-8 mr-2" />
              <h2 className="text-lg font-bold">Toy Building</h2>
            </div>
            <p className="mt-2">&copy; {new Date().getFullYear()} Toy Building. All rights reserved.</p>
          </div>
          <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="mb-2">123 Main Street, City, State, ZIP</p>
            <p className="mb-2">Phone: +1 (123) 456-7890</p>
            <p>Email: info@yourwebsite.com</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center md:justify-end">
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.477 0 10c0 4.412 3.381 8.006 7.708 8.328v-5.878H5.703V10h2.005V7.807c0-2.03 1.21-3.159 3.074-3.159.877 0 1.679.065 1.907.094v2.117h-1.306c-1.025 0-1.225.488-1.225 1.204V10h2.47l-.32 2.45h-2.15v5.878C16.619 18.006 20 14.412 20 10c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11 0H9C4.029 0 0 4.03 0 9v2c0 4.97 4.029 9 9 9h2c4.97 0 9-4.03 9-9v-2c0-4.97-4.03-9-9-9zm3 9h-1.328l.219-1.969h1.11c.526 0 .953.428.953.953v1.062c0 .525-.427.953-.953.953zm-6 0H7V6.969h1.172zm-2.532 0H4.5l-.203 2.062H3.172c-.526 0-.953-.428-.953-.953v-1.062c0-.526.427-.953.953-.953zM8 5.932c-.932 0-1.687.755-1.687 1.687S7.068 9.306 8 9.306s1.687-.755 1.687-1.687S8.932 5.932 8 5.932zm5.563 2.062h-1.328V6.969h1.328v1.025zM8 6.969H6.828V5.906H8v1.063zm2.532 1.025H10.5v-1.025h1.172l.219 1.025zM7 9.031H5.828l-.203-1.025H3.172l-.203 1.025H2v2.062h1.172l.203-1.969H5.5l.203 1.969H7V9.031zm9-3.062H18V9c0 4.029-4.03 7-9 7H9c-4.97 0-9-2.971-9-7V6.969h1.172l.203-1.025H1.5L1.297 6.969H0V9c0 5.523 4.477 10 10 10h2c5.523 0 10-4.477 10-10V6.969h-1.297L18.5 5.944H19V6.97z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18.75 0H1.25A1.254 1.254 0 0 0 0 1.25v17.5C0 19.878 1.122 21 2.5 21h15c1.378 0 2.5-1.122 2.5-2.5V1.25A1.254 1.254 0 0 0 18.75 0zm-4.138 7.797a.952.952 0 0 0-.95.951v2.303a.952.952 0 0 0 .95.951h2.304a.952.952 0 0 0 .95-.95V8.747a.952.952 0 0 0-.95-.951h-2.304zm-3.66 0a.952.952 0 0 0-.95.951v2.303a.952.952 0 0 0 .95.951h2.303a.952.952 0 0 0 .952-.95V8.747a.952.952 0 0 0-.952-.951H10.952zm-3.66 0a.952.952 0 0 0-.95.951v2.303a.952.952 0 0 0 .95.951h2.303a.952.952 0 0 0 .951-.95V8.747a.952.952 0 0 0-.95-.951H7.292zM18.75 2.5H1.25c-.69 0-1.25.56-1.25 1.25v3.66h20v-3.66c0-.69-.56-1.25-1.25-1.25z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
