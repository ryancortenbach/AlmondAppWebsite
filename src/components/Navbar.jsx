import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="text-2xl font-bold text-gray-900">
                            Almonds
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="#features"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                            Features
                        </a>
                        <a
                            href="#about"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                            About
                        </a>
                        <a
                            href="#download"
                            className="px-6 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-200 font-medium"
                        >
                            Download
                        </a>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        ></span>
                        <span
                            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        ></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col gap-4 py-4">
                        <a
                            href="#features"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="#about"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#download"
                            className="px-6 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-200 font-medium text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
