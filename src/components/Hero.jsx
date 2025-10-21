import React from 'react'
import { ArrowRight, Sparkles, Cpu, Network } from 'lucide-react'

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
                </div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary-200 mb-6">
                            <Sparkles className="w-4 h-4 text-accent-600" />
                            <span className="text-sm font-medium text-slate-700">Innovating Business Solutions</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                            Transform Your Business with{' '}
                            <span className="text-gradient bg-300% animate-gradient">
                                AI & MCP Solutions
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Empower your organization with cutting-edge AI integrations and Model Context Protocol server implementations. We deliver scalable, intelligent solutions that drive real results.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#contact"
                                className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>Start Your Journey</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>

                            <a
                                href="#services"
                                className="px-8 py-4 bg-white text-slate-700 rounded-full font-semibold border-2 border-slate-200 hover:border-primary-600 hover:shadow-lg transition-all duration-300"
                            >
                                Explore Services
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto lg:mx-0">
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-primary-600">100+</div>
                                <div className="text-sm text-slate-600">Projects</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-accent-600">98%</div>
                                <div className="text-sm text-slate-600">Satisfaction</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-primary-600">24/7</div>
                                <div className="text-sm text-slate-600">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Graphic Elements */}
                    <div className="relative hidden lg:block">
                        <div className="relative w-full h-[600px]">
                            {/* Central Hub */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl shadow-2xl animate-pulse-slow flex items-center justify-center">
                                <Cpu className="w-16 h-16 text-white" />
                            </div>

                            {/* Orbiting Elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
                                {[...Array(6)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10"
                                        style={{
                                            transform: `rotate(${i * 60}deg) translateY(-200px)`,
                                            animation: `float 3s ease-in-out infinite`,
                                            animationDelay: `${i * 0.5}s`,
                                        }}
                                    >
                                        <div className="w-20 h-20 bg-white rounded-2xl shadow-xl border border-slate-200 flex items-center justify-center"
                                            style={{ transform: `rotate(-${i * 60}deg)` }}
                                        >
                                            {i % 3 === 0 && <Network className="w-10 h-10 text-primary-600" />}
                                            {i % 3 === 1 && <Sparkles className="w-10 h-10 text-accent-600" />}
                                            {i % 3 === 2 && <Cpu className="w-10 h-10 text-primary-700" />}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full">
                                {[...Array(6)].map((_, i) => {
                                    const angle = (i * 60 * Math.PI) / 180
                                    const x1 = 50
                                    const y1 = 50
                                    const x2 = 50 + 33.33 * Math.sin(angle)
                                    const y2 = 50 - 33.33 * Math.cos(angle)
                                    return (
                                        <line
                                            key={i}
                                            x1={`${x1}%`}
                                            y1={`${y1}%`}
                                            x2={`${x2}%`}
                                            y2={`${y2}%`}
                                            stroke="url(#gradient)"
                                            strokeWidth="2"
                                            strokeDasharray="5,5"
                                            opacity="0.3"
                                        />
                                    )
                                })}
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#0284c7" />
                                        <stop offset="100%" stopColor="#9333ea" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-slate-400 rounded-full"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero

