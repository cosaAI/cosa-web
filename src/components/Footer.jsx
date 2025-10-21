import React from 'react'
import { Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        Company: [
            { label: 'About Us', href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'Careers', href: '#' },
            { label: 'Blog', href: '#' },
        ],
        Services: [
            { label: 'AI Integration', href: '#services' },
            { label: 'MCP Implementation', href: '#services' },
            { label: 'Custom Development', href: '#services' },
            { label: 'Consulting', href: '#services' },
        ],
        Resources: [
            { label: 'Documentation', href: '#' },
            { label: 'Case Studies', href: '#' },
            { label: 'Whitepapers', href: '#' },
            { label: 'Support', href: '#' },
        ],
        Legal: [
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
            { label: 'Cookie Policy', href: '#' },
            { label: 'Compliance', href: '#' },
        ],
    }

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: '#', label: 'Github' },
        { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
        { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
        { icon: <Mail className="w-5 h-5" />, href: '#contact', label: 'Email' },
    ]

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <a href="#home" className="flex items-center space-x-2 mb-4 group">
                            <Code2 className="h-8 w-8 text-primary-400 group-hover:text-accent-400 transition-colors duration-300" />
                            <span className="text-xl font-bold text-white">
                                [Company Name]
                            </span>
                        </a>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Transforming businesses with cutting-edge AI integrations and MCP server implementations.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-600 hover:to-accent-600 hover:text-white transition-all duration-300 hover:scale-110"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-white font-semibold mb-4">{category}</h3>
                            <ul className="space-y-2">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-slate-400 hover:text-primary-400 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-slate-800 pt-8 mb-8">
                    <div className="max-w-md mx-auto text-center">
                        <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
                        <p className="text-slate-400 mb-4">
                            Subscribe to our newsletter for the latest AI and technology insights.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg focus:border-primary-600 focus:ring-2 focus:ring-primary-900 outline-none transition-all duration-300 text-white placeholder-slate-500"
                            />
                            <button className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8">
                    <p className="text-slate-400 text-sm text-center">
                        © {currentYear} <span className="text-white font-semibold">[Company Name]</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

