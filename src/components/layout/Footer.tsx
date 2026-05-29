export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-2xl font-heading font-bold text-gradient mb-4 md:mb-0">
          AJ Studios
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AJ Studios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
