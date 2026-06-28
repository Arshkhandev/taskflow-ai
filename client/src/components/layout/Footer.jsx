const Footer = () => {
  return (
    <footer className="h-16 border-t bg-white flex items-center justify-center text-sm text-gray-500">
      © {new Date().getFullYear()} TaskFlow AI. All rights reserved.
    </footer>
  );
};

export default Footer;