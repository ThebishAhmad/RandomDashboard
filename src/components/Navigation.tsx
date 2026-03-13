import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, DollarSign, Users, Settings, GraduationCap } from 'lucide-react';

const Navigation: React.FC = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Executive Summary', icon: Home },
        { path: '/financial', label: 'Financial', icon: DollarSign },
        { path: '/customer', label: 'Customer', icon: Users },
        { path: '/internal-process', label: 'Internal Process', icon: Settings },
        { path: '/learning-growth', label: 'Learning & Growth', icon: GraduationCap }
    ];

    return (
        <nav className="bg-primary text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold">Mecklenburg County</h1>
                        <span className="ml-2 text-sm opacity-90">Balanced Scorecard</span>
                    </div>
                </div>
                <div className="flex space-x-1 pb-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-colors ${isActive
                                        ? 'bg-white text-primary font-semibold'
                                        : 'text-white hover:bg-blue-700'
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span className="text-sm">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
