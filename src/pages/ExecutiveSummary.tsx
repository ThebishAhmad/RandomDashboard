import React from 'react';
import { useNavigate } from 'react-router-dom';
import { kpis, focusAreas } from '../data/mockData';
import { Perspective, PerformanceStatus } from '../types';
import StatusIndicator from '../components/StatusIndicator';
import { AlertCircle, CheckCircle, TrendingUp } from 'lucide-react';

const ExecutiveSummary: React.FC = () => {
    const navigate = useNavigate();

    const getPerspectiveKPIs = (perspective: Perspective) => {
        return kpis.filter(kpi => kpi.perspective === perspective);
    };

    const calculatePerspectiveProgress = (perspective: Perspective) => {
        const perspectiveKPIs = getPerspectiveKPIs(perspective);
        const greenCount = perspectiveKPIs.filter(k => k.status === PerformanceStatus.GREEN).length;
        return Math.round((greenCount / perspectiveKPIs.length) * 100);
    };

    const getPerspectiveStatus = (perspective: Perspective): PerformanceStatus => {
        const progress = calculatePerspectiveProgress(perspective);
        if (progress >= 80) return PerformanceStatus.GREEN;
        if (progress >= 60) return PerformanceStatus.YELLOW;
        return PerformanceStatus.RED;
    };

    const perspectives = [
        {
            name: 'Financial',
            perspective: Perspective.FINANCIAL,
            path: '/financial',
            description: 'Fiscal responsibility and resource efficiency'
        },
        {
            name: 'Customer & Stakeholder',
            perspective: Perspective.CUSTOMER,
            path: '/customer',
            description: 'Service quality and satisfaction'
        },
        {
            name: 'Internal Process',
            perspective: Perspective.INTERNAL_PROCESS,
            path: '/internal-process',
            description: 'Operational excellence and efficiency'
        },
        {
            name: 'Learning & Growth',
            perspective: Perspective.LEARNING_GROWTH,
            path: '/learning-growth',
            description: 'Employee development and capacity'
        }
    ];

    return (
        <div className="space-y-6">
            {/* Vision 2015 Progress */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-2">Vision 2015 Progress</h2>
                <p className="text-blue-100 mb-4">
                    A community of pride and choice for people to LIVE, WORK and RECREATE
                </p>
                <div className="flex items-center gap-4">
                    <div className="flex-1">
                        <div className="bg-white bg-opacity-20 rounded-full h-8 overflow-hidden">
                            <div
                                className="bg-white h-full flex items-center justify-center text-blue-900 font-bold text-sm transition-all duration-500"
                                style={{ width: '51%' }}
                            >
                                51% Complete
                            </div>
                        </div>
                    </div>
                    <div className="text-4xl font-bold">51%</div>
                </div>
                <p className="text-sm text-blue-100 mt-2">
                    As of 2008 - 7 years into 15-year journey
                </p>
            </div>

            {/* Four Perspectives Overview */}
            <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Balanced Scorecard Perspectives</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {perspectives.map((p) => {
                        const progress = calculatePerspectiveProgress(p.perspective);
                        const status = getPerspectiveStatus(p.perspective);
                        return (
                            <div
                                key={p.perspective}
                                onClick={() => navigate(p.path)}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all cursor-pointer"
                                role="button"
                                tabIndex={0}
                                onKeyPress={(e) => e.key === 'Enter' && navigate(p.path)}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="font-semibold text-gray-800">{p.name}</h4>
                                    <StatusIndicator status={status} size="lg" />
                                </div>
                                <p className="text-sm text-gray-600 mb-4">{p.description}</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Goals Achieved</span>
                                        <span className="font-semibold text-gray-800">{progress}%</span>
                                    </div>
                                    <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-500 ${status === PerformanceStatus.GREEN ? 'bg-green-500' :
                                                    status === PerformanceStatus.YELLOW ? 'bg-yellow-500' :
                                                        'bg-red-500'
                                                }`}
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Focus Areas Performance */}
            <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Focus Area Performance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {focusAreas.map((area) => (
                        <div key={area.name} className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-semibold text-gray-800">{area.name}</h4>
                                <StatusIndicator status={area.status} size="md" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Progress</span>
                                    <span className="font-semibold text-gray-800">{area.progress}%</span>
                                </div>
                                <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                                    <div
                                        className={`h-full transition-all duration-500 ${area.status === PerformanceStatus.GREEN ? 'bg-green-500' :
                                                area.status === PerformanceStatus.YELLOW ? 'bg-yellow-500' :
                                                    'bg-red-500'
                                            }`}
                                        style={{ width: `${area.progress}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Key Highlights & Alerts */}
            <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights & Alerts</h3>
                <div className="space-y-3">
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                            <div>
                                <p className="font-semibold text-green-900">Budget utilization at 96% - on target</p>
                                <p className="text-sm text-green-700">Financial efficiency maintained across departments</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <div className="flex items-start gap-3">
                            <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                            <div>
                                <p className="font-semibold text-green-900">Customer satisfaction improved 5% year-over-year</p>
                                <p className="text-sm text-green-700">Positive trend across all service categories</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                            <div>
                                <p className="font-semibold text-yellow-900">Digital service adoption at 38% - slightly below target</p>
                                <p className="text-sm text-yellow-700">Continued focus needed on eGovernment initiatives</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExecutiveSummary;
