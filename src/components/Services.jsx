import React from 'react'
import { Bot, Server, Code, Workflow, Database, Brain } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Services = () => {
    const [headerRef, headerVisible] = useScrollAnimation()
    const [servicesRef, servicesVisible] = useScrollAnimation()
    const [ctaRef, ctaVisible] = useScrollAnimation()
    const services = [
        {
            icon: <Bot className="w-10 h-10" />,
            title: 'AI Integration',
            description: 'Seamlessly integrate powerful AI models into your existing systems. From natural language processing to computer vision, we implement solutions that enhance your business capabilities.',
            features: ['Custom AI Models', 'API Integration', 'Real-time Processing', 'Scalable Architecture'],
            gradient: 'from-primary-500 to-primary-700',
        },
        {
            icon: <Server className="w-10 h-10" />,
            title: 'MCP Server Implementation',
            description: 'Expert implementation of Model Context Protocol servers, enabling efficient communication between AI systems and your infrastructure with optimal performance and reliability.',
            features: ['Custom Protocol Design', 'High Performance', 'Secure Communication', 'Load Balancing'],
            gradient: 'from-accent-500 to-accent-700',
        },
        {
            icon: <Code className="w-10 h-10" />,
            title: 'Custom Software Development',
            description: 'Tailored software solutions built from the ground up to meet your specific business requirements, using modern frameworks and best practices.',
            features: ['Full-Stack Development', 'Cloud Native', 'Microservices', 'CI/CD Pipeline'],
            gradient: 'from-primary-600 to-accent-600',
        },
        {
            icon: <Workflow className="w-10 h-10" />,
            title: 'Process Automation',
            description: 'Automate repetitive tasks and streamline workflows with intelligent automation solutions that save time and reduce operational costs.',
            features: ['Workflow Optimization', 'RPA Solutions', 'Smart Analytics', 'Integration Hub'],
            gradient: 'from-accent-600 to-primary-600',
        },
        {
            icon: <Database className="w-10 h-10" />,
            title: 'Data Engineering',
            description: 'Build robust data pipelines and infrastructure to collect, process, and analyze large volumes of data for actionable insights.',
            features: ['ETL Pipelines', 'Data Warehousing', 'Real-time Analytics', 'Big Data Solutions'],
            gradient: 'from-primary-500 to-accent-500',
        },
        {
            icon: <Brain className="w-10 h-10" />,
            title: 'Machine Learning Solutions',
            description: 'Develop and deploy custom machine learning models that learn from your data and provide intelligent predictions and recommendations.',
            features: ['Predictive Analytics', 'Model Training', 'MLOps', 'Continuous Learning'],
            gradient: 'from-accent-500 to-primary-600',
        },
    ]

    return (
        <>
            <div className="section-divider"></div>

            <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'visible' : ''}`}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Our <span className="text-gradient">Services</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Comprehensive software solutions tailored to your business needs. We combine cutting-edge technology with industry expertise to deliver exceptional results.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div ref={servicesRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${servicesVisible ? 'visible' : ''}`}>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
                            >
                                {/* Gradient Border Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                                <div className="absolute inset-[1px] bg-white rounded-2xl -z-10"></div>

                                <div className="p-8">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                                        {service.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm text-slate-600">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-2`}></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <button className="mt-6 text-sm font-semibold text-primary-600 group-hover:text-accent-600 flex items-center space-x-1 transition-colors duration-300">
                                        <span>Learn More</span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div ref={ctaRef} className={`mt-16 text-center fade-in-up ${ctaVisible ? 'visible' : ''}`}>
                        <p className="text-lg text-slate-600 mb-6">
                            Don't see what you're looking for? We offer custom solutions tailored to your needs.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            Discuss Your Project
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services

