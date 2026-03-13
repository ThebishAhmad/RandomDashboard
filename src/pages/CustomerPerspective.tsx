import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { kpis, satisfactionByFocusArea, satisfactionTrend } from '../data/mockData';
import { Perspective } from '../types';
import KPICard from '../components/KPICard';
import { Phone, Clock, Users, TrendingUp } from 'lucide-react';

const CustomerPerspective: React.FC = () => {
    const customerKPIs = kpis.filter(kpi => kpi.perspective === Perspective.CUSTOMER);

    const responseTimeData = [
        { service: 'General Inquiry', avgTime: 18, target: 24, status: 'green' },
        { service: 'Permit Request', avgTime: 22, target: 24, status: 'green' },
        { service: 'Complaint', avgTime: 20, target: 24, status: 'green' },
        { service: 'Tax Question', avgTime: 26, target: 24, status: 'yellow' },
        { service: 'Property Info', avgTime: 19, target: 24, status: 'green' }
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Customer & Stakeholder Perspective</h2>
                <p className="text-gray-600">Service quality and stakeholder satisfaction</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {customerKPIs.map(kpi => (
                    <KPICard key={kpi.id} kpi={kpi} />
                ))}
            </div>

            {/* Satisfaction Score and Radar Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Overall Satisfaction Gauge */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Overall Customer Satisfaction</h3>
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
                                    stroke="#f59e0b"
                                    strokeWidth="16"
                                    fill="none"
                                    strokeDasharray={`${(4.1 / 5) * 502.4} 502.4`}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-bold text-gray-800">4.1</span>
                                <span className="text-sm text-gray-600">out of 5.0</span>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">Target: 4.2/5.0</p>
                            <p className="text-xs text-yellow-600 mt-1">98% of target achieved</p>
                        </div>
                    </div>
                </div>

                {/* Satisfaction by Focus Area */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Satisfaction by Focus Area</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <RadarChart data={satisfactionByFocusArea}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="area" />
                            <PolarRadiusAxis angle={90} domain={[0, 5]} />
                            <Radar name="Satisfaction Score" dataKey="score" stroke="#1e40af" fill="#1e40af" fillOpacity={0.6} />
                            <Tooltip />
                        </RadarChart>
                    </ResponsiveContainer>
                    <div className="mt-4 text-sm text-gray-600">
                        <p><strong>Highest:</strong> Effective Government (4.3)</p>
                        <p><strong>Focus Area:</strong> Growth Management (3.9)</p>
                    </div>
                </div>
            </div>

            {/* Satisfaction Trend */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Satisfaction Trend</h3>
                <p className="text-sm text-gray-600 mb-4">5-Year Historical Performance</p>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={satisfactionTrend}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis domain={[3, 5]} label={{ value: 'Satisfaction Score', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="score"
                            stroke="#10b981"
                            strokeWidth={3}
                            name="Satisfaction Score"
                            dot={{ fill: '#10b981', r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <p className="text-sm text-green-800">
                            <strong>Positive Trend:</strong> 14% improvement since 2004, demonstrating sustained focus on service quality
                        </p>
                    </div>
                </div>
            </div>

            {/* Service Response Time Heat Map */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Response Time by Category</h3>
                <p className="text-sm text-gray-600 mb-4">Average hours from request to initial response</p>
                <div className="space-y-3">
                    {responseTimeData.map((item) => (
                        <div key={item.service} className="flex items-center gap-4">
                            <div className="w-40 text-sm font-medium text-gray-700">{item.service}</div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                                        <div
                                            className={`h-full flex items-center justify-end pr-2 text-white text-sm font-semibold transition-all ${item.status === 'green' ? 'bg-green-500' : 'bg-yellow-500'
                                                }`}
                                            style={{ width: `${(item.avgTime / item.target) * 100}%` }}
                                        >
                                            {item.avgTime}h
                                        </div>
                                    </div>
                                    <div className="w-16 text-sm text-gray-600">
                                        Target: {item.target}h
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 311 Contact Center Performance */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <Phone className="w-8 h-8 text-blue-600" />
                        <h4 className="font-semibold text-gray-800">Total Calls</h4>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">250,000</div>
                    <p className="text-sm text-gray-600 mt-1">Annual volume (2008)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <Clock className="w-8 h-8 text-green-600" />
                        <h4 className="font-semibold text-gray-800">First Contact Resolution</h4>
                    </div>
                    <div className="text-3xl font-bold text-green-600">92%</div>
                    <p className="text-sm text-gray-600 mt-1">Issues resolved on first call</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <Users className="w-8 h-8 text-purple-600" />
                        <h4 className="font-semibold text-gray-800">Channel Usage</h4>
                    </div>
                    <div className="space-y-1 mt-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Phone</span>
                            <span className="font-semibold">68%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Web</span>
                            <span className="font-semibold">24%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">In-Person</span>
                            <span className="font-semibold">8%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerPerspective;
