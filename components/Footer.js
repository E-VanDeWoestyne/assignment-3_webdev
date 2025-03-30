export default function Footer() {
    return (
      <footer className="bg-gray-800 p-4 text-white mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Internet Movies Rental Company</p>
        <p>Contact: info@imr.com</p>
      </footer>
    );
  }