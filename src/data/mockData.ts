import { KPI, PerformanceStatus, Perspective, FocusArea } from '../types';

export const focusAreas: FocusArea[] = [
    { name: 'Community Health & Safety', status: PerformanceStatus.GREEN, progress: 88 },
    { name: 'Growth Management & Environment', status: PerformanceStatus.YELLOW, progress: 72 },
    { name: 'Social, Education & Economic Opportunity', status: PerformanceStatus.GREEN, progress: 79 },
    { name: 'Effective & Efficient Government', status: PerformanceStatus.GREEN, progress: 85 }
];

export const kpis: KPI[] = [
    // Financial KPIs
    {
        id: 'fin-1',
        name: 'Budget Utilization Rate',
        perspective: Perspective.FINANCIAL,
        strategicObjective: 'Improve financial efficiency and ensure optimal use of allocated resources',
        description: 'Percentage of allocated budget spent across departments',
        value: 96,
        target: 97,
        unit: '%',
        status: PerformanceStatus.GREEN,
        dataSource: 'County Financial Management System',
        lastUpdated: '2008-12-15',
        trend: 'stable'
    },
    {
        id: 'fin-2',
        name: 'Cost Efficiency per Service',
        perspective: Perspective.FINANCIAL,
        strategicObjective: 'Maximize value delivery while minimizing cost per unit of service',
        description: 'Average cost to deliver one unit of service',
        value: -2.3,
        target: -2.0,
        unit: '% YoY',
        status: PerformanceStatus.GREEN,
        dataSource: 'PART Program Review Reports',
        lastUpdated: '2008-12-15',
        trend: 'down'
    },
    // Customer KPIs
    {
        id: 'cust-1',
        name: 'Customer Satisfaction Score',
        perspective: Perspective.CUSTOMER,
        strategicObjective: 'Maximize stakeholder value and improve service quality perception',
        description: 'Aggregate satisfaction rating from annual surveys',
        value: 4.1,
        target: 4.2,
        unit: '/5.0',
        status: PerformanceStatus.YELLOW,
        dataSource: 'Annual Customer Satisfaction Survey',
        lastUpdated: '2008-11-30',
        trend: 'up'
    },
    {
        id: 'cust-2',
        name: 'Service Response Time',
        perspective: Perspective.CUSTOMER,
        strategicObjective: 'Improve service accessibility and responsiveness to citizen needs',
        description: 'Average time from service request to initial response',
        value: 22,
        target: 24,
        unit: 'hours',
        status: PerformanceStatus.GREEN,
        dataSource: '311 Customer Contact Center System',
        lastUpdated: '2008-12-16',
        trend: 'down'
    },
    // Internal Process KPIs
    {
        id: 'proc-1',
        name: 'PART Performance Score',
        perspective: Perspective.INTERNAL_PROCESS,
        strategicObjective: 'Optimize operational processes and improve program effectiveness',
        description: 'Average Program Assessment Rating Tool score',
        value: 77,
        target: 80,
        unit: '%',
        status: PerformanceStatus.GREEN,
        dataSource: 'Annual PART Program Review',
        lastUpdated: '2008-12-01',
        trend: 'up'
    },
    {
        id: 'proc-2',
        name: 'Digital Service Adoption',
        perspective: Perspective.INTERNAL_PROCESS,
        strategicObjective: 'Increase efficiency through technology adoption',
        description: 'Percentage of transactions completed digitally',
        value: 38,
        target: 40,
        unit: '%',
        status: PerformanceStatus.YELLOW,
        dataSource: 'eGovernment Tracking System',
        lastUpdated: '2008-12-10',
        trend: 'up'
    },
    // Learning & Growth KPIs
    {
        id: 'learn-1',
        name: 'Employee Engagement Score',
        perspective: Perspective.LEARNING_GROWTH,
        strategicObjective: 'Build organizational capacity through engaged workforce',
        description: 'Aggregate score from annual employee climate survey',
        value: 3.9,
        target: 4.0,
        unit: '/5.0',
        status: PerformanceStatus.YELLOW,
        dataSource: 'Annual Employee Climate Survey',
        lastUpdated: '2008-10-30',
        trend: 'up'
    },
    {
        id: 'learn-2',
        name: 'Workforce Diversity Index',
        perspective: Perspective.LEARNING_GROWTH,
        strategicObjective: 'Build a workforce representative of the community',
        description: 'Alignment of workforce demographics with community',
        value: 0.87,
        target: 0.90,
        unit: 'index',
        status: PerformanceStatus.GREEN,
        dataSource: 'HR System & Census Data',
        lastUpdated: '2008-12-01',
        trend: 'up'
    }
];

export const budgetUtilizationData = [
    { department: 'Health Services', utilization: 97, target: 96 },
    { department: 'Public Safety', utilization: 98, target: 96 },
    { department: 'Parks & Recreation', utilization: 94, target: 96 },
    { department: 'Social Services', utilization: 96, target: 96 },
    { department: 'Transportation', utilization: 95, target: 96 },
    { department: 'IT Services', utilization: 93, target: 96 }
];

export const costEfficiencyTrend = [
    { year: '2004', value: 100 },
    { year: '2005', value: 98 },
    { year: '2006', value: 96.5 },
    { year: '2007', value: 95 },
    { year: '2008', value: 92.7 }
];

export const priorityLevelFunding = [
    { level: 'Priority 1', funding: 750 },
    { level: 'Priority 2', funding: 620 },
    { level: 'Priority 3', funding: 580 },
    { level: 'Priority 4', funding: 450 },
    { level: 'Priority 5', funding: 320 },
    { level: 'Priority 6', funding: 180 },
    { level: 'Priority 7', funding: 100 }
];

export const satisfactionByFocusArea = [
    { area: 'Community Health', score: 4.2 },
    { area: 'Growth Mgmt', score: 3.9 },
    { area: 'Social/Econ', score: 4.0 },
    { area: 'Eff. Govt', score: 4.3 }
];

export const satisfactionTrend = [
    { year: '2004', score: 3.6 },
    { year: '2005', score: 3.7 },
    { year: '2006', score: 3.9 },
    { year: '2007', score: 4.0 },
    { year: '2008', score: 4.1 }
];

export const partScoresByDimension = [
    { dimension: 'Relevance', score: 85 },
    { dimension: 'Performance', score: 72 },
    { dimension: 'Efficiency', score: 78 }
];

export const partScoresByPriority = [
    { priority: 'P1', relevance: 88, performance: 82, efficiency: 85 },
    { priority: 'P2', relevance: 86, performance: 78, efficiency: 80 },
    { priority: 'P3', relevance: 84, performance: 75, efficiency: 77 },
    { priority: 'P4', relevance: 82, performance: 70, efficiency: 74 },
    { priority: 'P5', relevance: 80, performance: 65, efficiency: 70 }
];

export const employeeEngagementDimensions = [
    { dimension: 'Motivation', score: 4.0 },
    { dimension: 'Satisfaction', score: 3.8 },
    { dimension: 'Development', score: 3.9 },
    { dimension: 'Leadership', score: 4.1 },
    { dimension: 'Communication', score: 3.7 }
];

export const diversityComparison = [
    { category: 'White', workforce: 62, community: 60 },
    { category: 'Black', workforce: 28, community: 31 },
    { category: 'Hispanic', workforce: 7, community: 8 },
    { category: 'Asian', workforce: 3, community: 4 }
];
