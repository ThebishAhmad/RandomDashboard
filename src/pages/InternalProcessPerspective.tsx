import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { kpis, partScoresByDimension, partScoresByPriority } from '../data/mockData';
import { Perspective } from '../types';
import KPICard from '../components/KPICard';
import { CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

const InternalProcessPerspective: React.FC = () => {
    const processKPIs = kpis.filter(kpi => kpi.perspective === Perspective.INTERNAL_PROCESS);

    const eGovAdoptionFunnel = [
        { stage: 'Services Eligible', value: 100, count: 267 },
        { stage: 'Services Online', value: 45, count: 120 },
        { stage: 'Users Registered', value: 62, count: 74 },
        { stage: 'Digital Transactions', value: 38, count: 46 }
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Internal Business Process Perspective</h2>
                <p className="text-gray-600">Operational excellence and process efficiency</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {processKPIs.map(kpi => (
                    <KPICard key={kpi.id} kpi={kpi} />
                ))}
            </div>

            {/* PART Score Overview and Dimensions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* PART Score Gauge */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">PART Performance Score</h3>
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="relative w-48 h-48">
                            <svg className="transform -rotate-90 w-48 h-48">
                                <circle
                                    cx="96"
                                    cy="96"
                                    r="80"
                                    stroke="#e5e7eb"
                                    strokeWidth="16"
                                    fill="none"
                                />
                                <circle
                                    cx="96"
                                    cy="96"
                                    r="80"
                                    stroke="#10b981"
                                    strokeWidth="16"
                                    fill="none"
                                    strokeDasharray={`${(77 / 100) * 502.4} 502.4`}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-bold text-gray-800">77%</span>
                                <span className="text-sm text-gray-600">Average</span>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">Target: 80%</p>
                            <p className="text-xs text-green-600 mt-1">50 program categories evaluated</p>
                        </div>
                    </div>
                </div>

                {/* PART Dimensions Radar */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">PART Dimensions</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <RadarChart data={partScoresByDimension}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="dimension" />
                            <PolarRadiusAxis angle={90} domain={[0, 100]} />
                            <Radar name="Score" dataKey="score" stroke="#1e40af" fill="#1e40af" fillOpacity={0.6} />
                            <Tooltip />
                        </RadarChart>
                    </ResponsiveContainer>
                    <div className="mt-4 space-y-1 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Relevance:</span>
                            <span className="font-semibold text-green-600">85%</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Performance:</span>
                            <span className="font-semibold text-yellow-600">72%</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Efficiency:</span>
                            <span className="font-semibold text-green-600">78%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Program Performance by Priority Level */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Program Performance by Priority Level</h3>
                <p className="text-sm text-gray-600 mb-4">PART scores across the 7 priority levels</p>
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={partScoresByPriority}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="priority" />
                        <YAxis domain={[0, 100]} label={{ value: 'Score %', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="relevance" fill="#3b82f6" name="Relevance" />
                        <Bar dataKey="performance" fill="#10b981" name="Performance" />
                        <Bar dataKey="efficiency" fill="#f59e0b" name="Efficiency" />
                    </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                        <strong>Insight:</strong> Higher priority programs consistently show stronger performance across all PART dimensions
                    </p>
                </div>
            </div>

            {/* eGovernment Adoption Funnel */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">eGovernment Adoption Funnel</h3>
                <p className="text-sm text-gray-600 mb-6">Digital service transformation progress</p>
                <div className="space-y-4">
                    {eGovAdoptionFunnel.map((stage, index) => (
                        <div key={stage.stage}>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">{stage.stage}</span>
                                <span className="text-sm text-gray-600">{stage.count} ({stage.value}%)</span>
                            </div>
                            <div className="relative">
                                <div className="w-full bg-gray-200 rounded-full h-10 overflow-hidden">
                                    <div
                                        className={`h-full flex items-center justify-center text-white font-semibold transition-all ${index === 0 ? 'bg-blue-600' :
                                                index === 1 ? 'bg-blue-500' :
                                                    index === 2 ? 'bg-blue-400' :
                                                        'bg-blue-300'
                                            }`}
                                        style={{ width: `${stage.value}%` }}
                                    >
                                        {stage.value}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-yellow-600" />
                        <p className="text-sm text-yellow-800">
                            <strong>Action Needed:</strong> Focus on increasing digital transaction completion rate to meet 40% target
                        </p>
                    </div>
                </div>
            </div>

            {/* Process Improvement Initiatives */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Process Improvement Initiatives</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left font-semibold text-gray-700">Initiative</th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-700">Status</th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-700">Impact</th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-700">Completion</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-4 py-3">311 Contact Center Implementation</td>
                                <td className="px-4 py-3">
                                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                        <CheckCircle className="w-3 h-3" /> Complete
                                    </span>
                                </td>
                                <td className="px-4 py-3">$1.2M savings</td>
                                <td className="px-4 py-3">100%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">Consolidated IT Services</td>
                                <td className="px-4 py-3">
                                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                        <CheckCircle className="w-3 h-3" /> Complete
                                    </span>
                                </td>
                                <td className="px-4 py-3">$850K savings</td>
                                <td className="px-4 py-3">100%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">HR Shared Services Model</td>
                                <td className="px-4 py-3">
                                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                                        <TrendingUp className="w-3 h-3" /> In Progress
                                    </span>
                                </td>
                                <td className="px-4 py-3">$600K projected</td>
                                <td className="px-4 py-3">75%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">eGovernment Portal Expansion</td>
                                <td className="px-4 py-3">
                                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                                        <TrendingUp className="w-3 h-3" /> In Progress
                                    </span>
                                </td>
                                <td className="px-4 py-3">$400K projected</td>
                                <td className="px-4 py-3">60%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                        <strong>Total Impact:</strong> $2.1M in realized savings + $1.0M projected from active initiatives
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InternalProcessPerspective;
