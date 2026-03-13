import React from 'react';
import { KPI } from '../types';
import StatusIndicator from './StatusIndicator';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface KPICardProps {
    kpi: KPI;
    onClick?: () => void;
}

const KPICard: React.FC<KPICardProps> = ({ kpi, onClick }) => {
    const getTrendIcon = () => {
        switch (kpi.trend) {
            case 'up':
                return <TrendingUp className="w-4 h-4 text-green-600" />;
            case 'down':
                return <TrendingDown className="w-4 h-4 text-red-600" />;
            default:
                return <Minus className="w-4 h-4 text-gray-600" />;
        }
    };

    return (
        <div
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && onClick?.()}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{kpi.name}</h3>
                    <p className="text-sm text-gray-600">{kpi.strategicObjective}</p>
                </div>
                <StatusIndicator status={kpi.status} size="lg" />
            </div>

            <div className="flex items-end justify-between">
                <div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900">
                            {kpi.value !== null ? kpi.value : 'N/A'}
                        </span>
                        <span className="text-sm text-gray-600">{kpi.unit}</span>
                        {getTrendIcon()}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                        Target: {kpi.target}{kpi.unit}
                    </div>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-xs text-gray-500">
                    <div>Source: {kpi.dataSource}</div>
                    <div>Updated: {new Date(kpi.lastUpdated).toLocaleDateString()}</div>
                </div>
            </div>
        </div>
    );
};

export default KPICard;
