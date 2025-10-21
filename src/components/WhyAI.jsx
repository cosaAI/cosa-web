import React from 'react'
import { TrendingUp, DollarSign, Clock, Target, Shield, Zap } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const WhyAI = () => {
    const [headerRef, headerVisible] = useScrollAnimation()
    const [contentRef, contentVisible] = useScrollAnimation()
    const [statsRef, statsVisible] = useScrollAnimation()
    const [benefitsRef, benefitsVisible] = useScrollAnimation()
    const [ctaRef, ctaVisible] = useScrollAnimation()
    const benefits = [
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: 'Increased Efficiency',
            description: 'AI automates repetitive tasks and processes, allowing your team to focus on high-value activities that drive growth.',
            stat: '40-60%',
            statLabel: 'Productivity Increase',
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: 'Cost Reduction',
            description: 'Reduce operational costs through intelligent automation and optimized resource allocation powered by AI.',
            stat: '30-50%',
            statLabel: 'Cost Savings',
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: 'Better Decision Making',
            description: 'Leverage data-driven insights and predictive analytics to make informed decisions that impact your bottom line.',
            stat: '25%',
            statLabel: 'Better Accuracy',
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: '24/7 Availability',
            description: 'AI-powered systems work round the clock, providing consistent service and support without downtime.',
            stat: '100%',
            statLabel: 'Uptime',
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Enhanced Security',
            description: 'AI can detect and respond to security threats in real-time, protecting your business from cyber attacks.',
            stat: '95%',
            statLabel: 'Threat Detection',
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'Scalability',
            description: 'AI solutions scale effortlessly with your business growth, handling increased workloads without proportional cost increases.',
            stat: '10x',
            statLabel: 'Scale Potential',
        },
    ]

    return (
        <>
            <div className="section-divider"></div>

            <section id="why-ai" className="py-20 lg:py-32 bg-white relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-20 left-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                <div className="absolute bottom-20 right-0 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'visible' : ''}`}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Why Your Business Needs <span className="text-gradient">AI Integration</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            AI is transforming industries worldwide. Companies that embrace it early gain significant competitive advantages.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div ref={contentRef} className={`slide-in-left ${contentVisible ? 'visible' : ''}`}>
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                                The AI Advantage
                            </h3>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                AI transforms operations from customer service to predictive analytics. Whether in healthcare, finance, retail, or manufacturing, AI delivers measurable results.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                The question isn't whether to integrate AI—it's how quickly you can do it to stay ahead.
                            </p>

                            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-200">
                                <h4 className="text-lg font-bold text-slate-900 mb-3">Key Insight</h4>
                                <p className="text-slate-700 leading-relaxed">
                                    Businesses implementing AI see an average revenue increase of <span className="font-bold text-primary-600">15-20%</span> within the first year.
                                </p>
                            </div>
                        </div>

                        <div ref={statsRef} className={`relative slide-in-right ${statsVisible ? 'visible' : ''}`}>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'Faster Processing', value: '1000x' },
                                    { label: 'Error Reduction', value: '90%' },
                                    { label: 'Customer Satisfaction', value: '85%' },
                                    { label: 'ROI Timeline', value: '6-12mo' },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                                    >
                                        <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                                            {item.value}
                                        </div>
                                        <div className="text-sm text-slate-600">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Benefits Grid */}
                    <div ref={benefitsRef} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${benefitsVisible ? 'visible' : ''}`}>
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                                <div className="relative">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {benefit.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                                        {benefit.description}
                                    </p>
                                    <div className="pt-4 border-t border-slate-200">
                                        <div className="text-2xl font-bold text-gradient">{benefit.stat}</div>
                                        <div className="text-sm text-slate-500">{benefit.statLabel}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div ref={ctaRef} className={`mt-16 text-center bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 scale-in ${ctaVisible ? 'visible' : ''}`}>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Ready to Transform Your Business with AI?
                        </h3>
                        <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                            Let's discuss how AI integration can solve your specific challenges and unlock new opportunities for growth.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            Schedule a Consultation
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyAI

