import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, TrendingUp, Bell, FileText, Menu, X, HomeIcon, Settings } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import ThemeToggler from './ThemeToggler';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/', icon: HomeIcon },
        { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
        { name: 'Comparison', path: '/compare', icon: TrendingUp },
        { name: 'AI Chatbot', path: '/chat', icon: MessageSquare },
        { name: 'Alerts', path: '/alerts', icon: Bell },
        { name: 'Reports', path: '/reports', icon: FileText },
        { name: 'Settings', path: '/settings', icon: Settings },
    ];

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 z-50 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-brand-600 dark:text-brand-400">
                        <TrendingUp className="w-8 h-8" />
                        <span>TrendForecast.ai</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={clsx(
                                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand-600 dark:hover:text-brand-400",
                                    location.pathname === link.path ? "text-brand-600 dark:text-brand-400" : "text-slate-500 dark:text-zinc-400"
                                )}
                            >
                                <link.icon className="w-4 h-4" />
                                {link.name}
                            </Link>
                        ))}
                        <div className="pl-6 border-l border-slate-200 dark:border-zinc-800">
                            <ThemeToggler />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggler />
                        <button onClick={toggleMenu} className="p-2 text-slate-500 dark:text-zinc-400 hover:text-slate-700 dark:hover:text-zinc-200">
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={clsx(
                                    "flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium",
                                    location.pathname === link.path
                                        ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400"
                                        : "text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800"
                                )}
                            >
                                <link.icon className="w-5 h-5" />
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
