import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { kpis, employeeEngagementDimensions, diversityComparison } from '../data/mockData';
import { Perspective } from '../types';
import KPICard from '../components/KPICard';
import { Users, BookOpen, TrendingDown } from 'lucide-react';

const LearningGrowthPerspective: React.FC = () => {
    const learningKPIs = kpis.filter(kpi => kpi.perspective === Perspective.LEARNING_GROWTH);

    const turnoverTrend = [
        { year: '2004', rate: 12.5 },
        { year: '2005', rate: 11.2 },
        { year: '2006', rate: 10.1 },
        { year: '2007', rate: 9.3 },
        { year: '2008', rate: 8.2 }
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Learning & Growth Perspective</h2>
                <p className="text-gray-600">Employee development and organizational capacity</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningKPIs.map(kpi => (
                    <KPICard key={kpi.id} kpi={kpi} />
                ))}
            </div>

            {/* Employee Engagement Score and Dimensions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Engagement Gauge */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Employee Engagement Score</h3>
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
                                    strokeDasharray={`${(3.9 / 5) * 502.4} 502.4`}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-bold text-gray-800">3.9</span>
                                <span className="text-sm text-gray-600">out of 5.0</span>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">Target: 4.0/5.0</p>
                            <p className="text-xs text-yellow-600 mt-1">98% of target achieved</p>
                        </div>
                    </div>
                </div>

                {/* Engagement Dimensions Spider Chart */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Engagement Dimensions</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <RadarChart data={employeeEngagementDimensions}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="dimension" />
                            <PolarRadiusAxis angle={90} domain={[0, 5]} />
                            <Radar name="Score" dataKey="score" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                            <Tooltip />
                        </RadarChart>
                    </ResponsiveContainer>
                    <div className="mt-4 space-y-1 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Highest:</span>
                            <span className="font-semibold text-green-600">Leadership (4.1)</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Focus Area:</span>
                            <span className="font-semibold text-yellow-600">Communication (3.7)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Workforce Diversity Comparison */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Workforce Diversity vs. Community Demographics</h3>
                <p className="text-sm text-gray-600 mb-4">Diversity Index: 0.87 (Target: 0.90)</p>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={diversityComparison}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis domain={[0, 70]} label={{ value: 'Percentage %', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="workforce" fill="#3b82f6" name="County Workforce" />
                        <Bar dataKey="community" fill="#10b981" name="Community Demographics" />
                    </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                        <strong>Progress:</strong> Workforce composition closely aligns with community demographics across all categories
                    </p>
                </div>
            </div>

            {/* Training & Development */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Training & Development</h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Training Completion Rate</span>
                                <span className="text-sm font-semibold text-green-600">78%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className="bg-green-500 h-3 rounded-full" style={{ width: '78%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Leadership Development</span>
                                <span className="text-sm font-semibold text-blue-600">85%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Technical Skills Training</span>
                                <span className="text-sm font-semibold text-purple-600">72%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className="bg-purple-500 h-3 rounded-full" style={{ width: '72%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-3">
                            <BookOpen className="w-8 h-8 text-blue-600" />
                            <div>
                                <div className="text-2xl font-bold text-gray-900">42</div>
                                <div className="text-sm text-gray-600">Avg. training hours per employee</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Turnover & Retention */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Turnover & Retention</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={turnoverTrend}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis domain={[0, 15]} label={{ value: 'Turnover %', angle: -90, position: 'insideLeft' }} />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="rate"
                                stroke="#10b981"
                                strokeWidth={3}
                                name="Turnover Rate"
                                dot={{ fill: '#10b981', r: 5 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2">
                            <TrendingDown className="w-5 h-5 text-green-600" />
                            <p className="text-sm text-green-800">
                                <strong>Excellent:</strong> 34% reduction in turnover since 2004, well below 10% target
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Workforce Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <Users className="w-8 h-8 text-blue-600" />
                        <h4 className="font-semibold text-gray-800">Total Employees</h4>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">5,847</div>
                    <p className="text-sm text-gray-600 mt-1">Full-time equivalents</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Avg. Tenure</h4>
                    <div className="text-3xl font-bold text-gray-900">8.2</div>
                    <p className="text-sm text-gray-600 mt-1">Years of service</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Internal Promotions</h4>
                    <div className="text-3xl font-bold text-green-600">24%</div>
                    <p className="text-sm text-gray-600 mt-1">Of all hires (2008)</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Pay for Performance</h4>
                    <div className="text-3xl font-bold text-purple-600">100%</div>
                    <p className="text-sm text-gray-600 mt-1">Employees covered</p>
                </div>
            </div>

            {/* Key Initiatives */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Workforce Initiatives</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Broadband Classification System</h4>
                        <p className="text-sm text-blue-800">Implemented in 2004 to provide flexibility and support career development</p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Market Pay for Market Performance</h4>
                        <p className="text-sm text-green-800">Competitive compensation aligned with performance, implemented 2005</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Diversity Management Plan</h4>
                        <p className="text-sm text-purple-800">Approved 2006, linking diversity goals directly to scorecard measures</p>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">Employee & Organizational Development</h4>
                        <p className="text-sm text-yellow-800">System-thinking approach for learning, leadership, and innovation</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningGrowthPerspective;
