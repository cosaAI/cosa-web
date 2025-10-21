import React from 'react'
import { Network, Lock, Gauge, RefreshCw, Layers, GitBranch } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const WhyMCP = () => {
    const [headerRef, headerVisible] = useScrollAnimation()
    const [explanationRef, explanationVisible] = useScrollAnimation()
    const [featuresRef, featuresVisible] = useScrollAnimation()
    const [useCasesRef, useCasesVisible] = useScrollAnimation()
    const [comparisonRef, comparisonVisible] = useScrollAnimation()
    const [ctaRef, ctaVisible] = useScrollAnimation()
    const features = [
        {
            icon: <Network className="w-8 h-8" />,
            title: 'Seamless Integration',
            description: 'Standardized AI-to-infrastructure communication.',
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: 'Enhanced Security',
            description: 'Built-in encryption and access protection.',
        },
        {
            icon: <Gauge className="w-8 h-8" />,
            title: 'Optimized Performance',
            description: 'Minimal latency, maximum throughput.',
        },
        {
            icon: <RefreshCw className="w-8 h-8" />,
            title: 'Context Preservation',
            description: 'Maintains conversation context across sessions.',
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: 'Scalable Architecture',
            description: 'Grows with your business needs.',
        },
        {
            icon: <GitBranch className="w-8 h-8" />,
            title: 'Flexible Deployment',
            description: 'On-premise, cloud, or hybrid options.',
        },
    ]

    const useCases = [
        {
            title: 'Customer Service',
            description: 'Intelligent chatbots with maintained context.',
            color: 'from-primary-500 to-primary-700',
        },
        {
            title: 'Data Analytics',
            description: 'Secure AI queries with proper permissions.',
            color: 'from-accent-500 to-accent-700',
        },
        {
            title: 'Content Generation',
            description: 'Brand-consistent AI-powered content.',
            color: 'from-primary-600 to-accent-600',
        },
        {
            title: 'Process Automation',
            description: 'Context-aware workflow automation.',
            color: 'from-accent-600 to-primary-600',
        },
    ]

    return (
        <>
            <div className="section-divider"></div>

            <section id="why-mcp" className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                    <div className="absolute top-1/2 right-10 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'visible' : ''}`}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Why <span className="text-gradient">Model Context Protocol</span> Matters
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            MCP is revolutionizing AI-application communication, becoming the industry standard for seamless integration.
                        </p>
                    </div>

                    {/* Explanation Section */}
                    <div ref={explanationRef} className={`mb-20 fade-in-up ${explanationVisible ? 'visible' : ''}`}>
                        <div className="glass-effect rounded-3xl p-8 lg:p-12">
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                                What is MCP?
                            </h3>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    <span className="font-semibold text-slate-900">Model Context Protocol (MCP)</span> is an open standard enabling secure, efficient communication between AI models and external systems. It's a universal bridge for AI integration.
                                </p>
                                <p>
                                    Instead of building custom integrations for each AI model, MCP provides a standardized protocol that works everywhere—dramatically reducing development time.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div ref={featuresRef} className="mb-20">
                        <h3 className={`text-2xl sm:text-3xl font-bold text-slate-900 mb-10 text-center fade-in-up ${featuresVisible ? 'visible' : ''}`}>
                            Key Benefits
                        </h3>
                        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${featuresVisible ? 'visible' : ''}`}>
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                                    <div className="relative">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {feature.icon}
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                                            {feature.title}
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Use Cases */}
                    <div ref={useCasesRef} className="mb-16">
                        <h3 className={`text-2xl sm:text-3xl font-bold text-slate-900 mb-10 text-center fade-in-up ${useCasesVisible ? 'visible' : ''}`}>
                            Real-World Applications
                        </h3>
                        <div className={`grid md:grid-cols-2 gap-6 stagger-children ${useCasesVisible ? 'visible' : ''}`}>
                            {useCases.map((useCase, index) => (
                                <div
                                    key={index}
                                    className={`group relative bg-gradient-to-br ${useCase.color} rounded-2xl p-8 hover:scale-105 transition-all duration-300 overflow-hidden`}
                                >
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                                    <div className="relative">
                                        <h4 className="text-2xl font-bold text-white mb-3">
                                            {useCase.title}
                                        </h4>
                                        <p className="text-white/90 leading-relaxed">
                                            {useCase.description}
                                        </p>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Comparison Chart */}
                    <div ref={comparisonRef} className={`bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg scale-in ${comparisonVisible ? 'visible' : ''}`}>
                        <div className="p-8 lg:p-12">
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
                                MCP vs Traditional Integration
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-4 px-6 text-slate-900 font-semibold">Feature</th>
                                            <th className="text-center py-4 px-6 text-slate-900 font-semibold">Traditional</th>
                                            <th className="text-center py-4 px-6 text-primary-600 font-semibold">With MCP</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {[
                                            { feature: 'Setup Time', traditional: '2-4 weeks', mcp: '2-3 days' },
                                            { feature: 'Context Retention', traditional: 'Limited', mcp: 'Full' },
                                            { feature: 'Scalability', traditional: 'Manual', mcp: 'Automatic' },
                                            { feature: 'Security', traditional: 'Custom', mcp: 'Built-in' },
                                            { feature: 'Maintenance', traditional: 'High', mcp: 'Low' },
                                        ].map((row, index) => (
                                            <tr key={index} className="hover:bg-slate-50 transition-colors duration-200">
                                                <td className="py-4 px-6 text-slate-900 font-medium">{row.feature}</td>
                                                <td className="py-4 px-6 text-center text-slate-600">{row.traditional}</td>
                                                <td className="py-4 px-6 text-center">
                                                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-semibold">
                                                        {row.mcp}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div ref={ctaRef} className={`mt-16 text-center fade-in-up ${ctaVisible ? 'visible' : ''}`}>
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                            Ready to Implement MCP?
                        </h3>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            Our experts can design and deploy MCP servers tailored to your needs.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            Get Started with MCP
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyMCP

