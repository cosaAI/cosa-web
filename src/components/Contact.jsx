import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact = () => {
    const [headerRef, headerVisible] = useScrollAnimation()
    const [contentRef, contentVisible] = useScrollAnimation()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: '',
            })
        }, 3000)
    }

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email',
            value: 'hello@company.com',
            link: 'mailto:hello@company.com',
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Phone',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567',
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Location',
            value: 'San Francisco, CA',
            link: '#',
        },
    ]

    return (
        <>
            <div className="section-divider"></div>

            <section id="contact" className="py-20 lg:py-32 bg-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 opacity-50"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'visible' : ''}`}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Get in <span className="text-gradient">Touch</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Ready to transform your business? Let's start a conversation about your goals.
                        </p>
                    </div>

                    <div ref={contentRef} className={`grid lg:grid-cols-2 gap-12 fade-in-up ${contentVisible ? 'visible' : ''}`}>
                        {/* Contact Information */}
                        <div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    Let's Talk About Your Project
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    Our team of experts is ready to discuss your needs and provide tailored solutions.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-4 mb-8">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        className="flex items-center space-x-4 p-4 glass-effect rounded-2xl hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-500">{info.title}</div>
                                            <div className="text-slate-900 font-semibold">{info.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Additional Info */}
                            <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
                                <h4 className="text-xl font-bold mb-3">Why Choose Us?</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Expert team with 10+ years experience</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Proven track record of successful projects</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>24/7 support and maintenance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Transparent pricing and timelines</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="glass-effect rounded-2xl p-8 lg:p-10">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle className="w-12 h-12 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Thank You!</h3>
                                    <p className="text-slate-600">
                                        We've received your message and will get back to you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-300"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-300"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-300"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-300"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Service Interested In *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-300 bg-white"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="ai-integration">AI Integration</option>
                                            <option value="mcp-implementation">MCP Server Implementation</option>
                                            <option value="custom-development">Custom Software Development</option>
                                            <option value="process-automation">Process Automation</option>
                                            <option value="data-engineering">Data Engineering</option>
                                            <option value="machine-learning">Machine Learning Solutions</option>
                                            <option value="consulting">Consulting</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-300 resize-none"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                                    >
                                        <span>Send Message</span>
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact

