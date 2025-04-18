export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 mt-12 pb-32">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm" style={{ color: "var(--foreground)" }}>
        <p>&copy; {new Date().getFullYear()} MonSite. Tous droits réservés.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/mentions-legales" className="hover:underline">
            Mentions légales
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
