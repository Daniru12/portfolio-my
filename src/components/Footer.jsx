export const Footer = () => {
    return (
      <footer className="py-6 bg-black text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Daniru Ranathunga. Built with React. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  };