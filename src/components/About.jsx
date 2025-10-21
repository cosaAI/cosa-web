import React from 'react'
import { Target, Users, Award, Zap } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
    const [headerRef, headerVisible] = useScrollAnimation()
    const [contentRef, contentVisible] = useScrollAnimation()
    const [statsRef, statsVisible] = useScrollAnimation()
    const [valuesRef, valuesVisible] = useScrollAnimation()
    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: 'Mission-Driven',
            description: 'Delivering solutions that drive measurable results.',
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: 'Client-Centric',
            description: 'Your success is our success, always.',
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: 'Excellence',
            description: 'Highest standards in quality and performance.',
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'Innovation',
            description: 'Cutting-edge tech that gives you an edge.',
        },
    ]

    return (
        <>
            <div className="section-divider"></div>

            <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100 to-transparent rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-100 to-transparent rounded-full blur-3xl opacity-30"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'visible' : ''}`}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            About <span className="text-gradient">Us</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            We're a team of software engineers and AI specialists transforming businesses through innovative technology.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div ref={contentRef} className={`slide-in-left ${contentVisible ? 'visible' : ''}`}>
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                                Building the Future of Software
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                At <span className="font-semibold text-gradient">[Company Name]</span>, we specialize in AI integrations and MCP server implementations that seamlessly connect intelligent systems to your business infrastructure.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                From consultation to deployment, we combine technical excellence with strategic thinking to deliver solutions that position you for sustainable growth.
                            </p>
                        </div>

                        <div ref={statsRef} className={`relative scale-in ${statsVisible ? 'visible' : ''}`}>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { value: '50+', label: 'Clients Served' },
                                    { value: '200+', label: 'Projects' },
                                    { value: '15+', label: 'AI Models' },
                                    { value: '100%', label: 'Success Rate' },
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                                    >
                                        <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-slate-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Values */}
                    <div ref={valuesRef}>
                        <h3 className={`text-2xl sm:text-3xl font-bold text-slate-900 mb-10 text-center fade-in-up ${valuesVisible ? 'visible' : ''}`}>
                            Our Core Values
                        </h3>
                        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children ${valuesVisible ? 'visible' : ''}`}>
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                                    <div className="relative">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {value.icon}
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                                            {value.title}
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About

