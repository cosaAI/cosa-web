import React, { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Why AI', href: '#why-ai' },
        { label: 'Why MCP', href: '#why-mcp' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center space-x-2 group">
                        <div className="relative">
                            <Code2 className="h-8 w-8 text-primary-600 group-hover:text-accent-600 transition-colors duration-300" />
                            <div className="absolute inset-0 bg-primary-600 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-gradient">
                            [Company Name]
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-slate-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 text-slate-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-slate-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="px-4 py-4 space-y-3 glass-effect border-t border-slate-200">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors duration-300"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg text-center font-medium hover:shadow-lg transition-all duration-300"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

