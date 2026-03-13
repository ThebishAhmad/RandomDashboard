import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { kpis, budgetUtilizationData, costEfficiencyTrend, priorityLevelFunding } from '../data/mockData';
import { Perspective } from '../types';
import KPICard from '../components/KPICard';

const FinancialPerspective: React.FC = () => {
    const financialKPIs = kpis.filter(kpi => kpi.perspective === Perspective.FINANCIAL);

    const getBarColor = (utilization: number) => {
        if (utilization >= 95 && utilization <= 100) return '#10b981'; // green
        if (utilization >= 90 && utilization < 95) return '#f59e0b'; // yellow
        return '#ef4444'; // red
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Financial Perspective</h2>
                <p className="text-gray-600">Fiscal responsibility and efficient resource allocation</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {financialKPIs.map(kpi => (
                    <KPICard key={kpi.id} kpi={kpi} />
                ))}
            </div>

            {/* Budget Utilization by Department */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Budget Utilization by Department</h3>
                <p className="text-sm text-gray-600 mb-4">Target range: 95-98% (optimal efficiency)</p>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={budgetUtilizationData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="department" angle={-45} textAnchor="end" height={100} />
                        <YAxis domain={[85, 100]} label={{ value: 'Utilization %', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Bar dataKey="utilization" name="Actual Utilization">
                            {budgetUtilizationData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={getBarColor(entry.utilization)} />
                            ))}
                        </Bar>
                        <Line type="monotone" dataKey="target" stroke="#6366f1" strokeWidth={2} name="Target" dot={false} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Cost Efficiency Trend */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Cost Efficiency Trend</h3>
                <p className="text-sm text-gray-600 mb-4">Indexed to 2004 baseline (100) - Lower is better</p>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={costEfficiencyTrend}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis domain={[85, 105]} label={{ value: 'Cost Index', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#10b981"
                            strokeWidth={3}
                            name="Cost per Service"
                            dot={{ fill: '#10b981', r: 5 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                        <strong>Achievement:</strong> 7.3% cost reduction since 2004 while maintaining service quality
                    </p>
                </div>
            </div>

            {/* Funding by Priority Level */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">County Funding by Priority Level</h3>
                <p className="text-sm text-gray-600 mb-4">FY 2008 Budget Allocation (in millions)</p>
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={priorityLevelFunding} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" label={{ value: 'Funding ($M)', position: 'insideBottom', offset: -5 }} />
                        <YAxis dataKey="level" type="category" width={100} />
                        <Tooltip formatter={(value) => `$${value}M`} />
                        <Bar dataKey="funding" fill="#1e40af" name="County Funds">
                            {priorityLevelFunding.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={`hsl(220, 70%, ${85 - index * 10}%)`} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Funding allocation aligns with Board-established priorities based on relevance, performance, and efficiency criteria
                    </p>
                </div>
            </div>

            {/* Reserve Funds Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Technology Reserve</h4>
                    <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                    <p className="text-sm text-gray-600">Funded at 0.5¢ tax rate</p>
                    <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Fleet Reserve</h4>
                    <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                    <p className="text-sm text-gray-600">Funded at 0.25¢ tax rate</p>
                    <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Capital Reserve</h4>
                    <div className="text-3xl font-bold text-yellow-600 mb-1">75%</div>
                    <p className="text-sm text-gray-600">Funded at 0.25¢ tax rate</p>
                    <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialPerspective;
