export enum PerformanceStatus {
    GREEN = 'green',
    YELLOW = 'yellow',
    RED = 'red',
    GRAY = 'gray'
}

export enum Perspective {
    FINANCIAL = 'financial',
    CUSTOMER = 'customer',
    INTERNAL_PROCESS = 'internal_process',
    LEARNING_GROWTH = 'learning_growth'
}

export interface KPI {
    id: string;
    name: string;
    perspective: Perspective;
    strategicObjective: string;
    description: string;
    value: number | null;
    target: number;
    unit: string;
    status: PerformanceStatus;
    dataSource: string;
    lastUpdated: string;
    trend: 'up' | 'down' | 'stable';
}

export interface FilterCriteria {
    department?: string[];
    year?: number[];
    quarter?: number[];
    priorityLevel?: number[];
    focusArea?: string[];
}

export interface FocusArea {
    name: string;
    status: PerformanceStatus;
    progress: number;
}
