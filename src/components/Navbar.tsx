const Navbar = () => {
  return (
    <nav className="fixed w-full bg-[#0f172a]/90 backdrop-blur-sm text-white shadow-lg z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a
          href="#About"
          className="font-bold text-xl text-white no-underline hover:text-indigo-200 active:text-indigo-300 transition-colors"
        >
          Surbhi Singh
        </a>
        <div className="space-x-8 hidden md:flex">
          {["About", "Experience", "Projects", "Skills", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-slate-300 hover:text-white active:text-indigo-300 font-medium transition-colors no-underline"
              >
                {item}
              </a>
            ),
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
