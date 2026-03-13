import React from 'react';
import { PerformanceStatus } from '../types';

interface StatusIndicatorProps {
    status: PerformanceStatus;
    size?: 'sm' | 'md' | 'lg';
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, size = 'md' }) => {
    const sizeClasses = {
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-6 h-6'
    };

    const colorClasses = {
        [PerformanceStatus.GREEN]: 'bg-green-500',
        [PerformanceStatus.YELLOW]: 'bg-yellow-500',
        [PerformanceStatus.RED]: 'bg-red-500',
        [PerformanceStatus.GRAY]: 'bg-gray-400'
    };

    return (
        <div
            className={`${sizeClasses[size]} ${colorClasses[status]} rounded-full shadow-lg`}
            role="img"
            aria-label={`Performance status: ${status}`}
        />
    );
};

export default StatusIndicator;
