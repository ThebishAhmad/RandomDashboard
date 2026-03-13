# Mecklenburg County Balanced Scorecard Dashboard

A comprehensive web-based dashboard implementing the Balanced Scorecard framework based on the Mecklenburg County case study. This dashboard demonstrates data-driven decision making across four perspectives: Financial, Customer & Stakeholder, Internal Business Process, and Learning & Growth.

## Features

### Multi-Page Dashboard
- **Executive Summary**: High-level overview of Vision 2015 progress and all four perspectives
- **Financial Perspective**: Budget utilization, cost efficiency, and funding by priority
- **Customer & Stakeholder Perspective**: Satisfaction scores, response times, and 311 performance
- **Internal Business Process Perspective**: PART scores, eGovernment adoption, and process improvements
- **Learning & Growth Perspective**: Employee engagement, workforce diversity, and training metrics

### Key Capabilities
- ✅ Traffic light performance indicators (Green/Yellow/Red/Gray)
- ✅ Interactive visualizations (bar charts, line charts, gauges, radar charts)
- ✅ KPI cards with strategic objectives and data sources
- ✅ Responsive design for desktop, tablet, and mobile
- ✅ Real-time data visualization with Recharts
- ✅ Accessible navigation and keyboard support

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React

## Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to `http://localhost:3000`

## Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── KPICard.tsx     # KPI display card
│   │   ├── Navigation.tsx   # Main navigation bar
│   │   └── StatusIndicator.tsx  # Traffic light indicator
│   ├── pages/              # Dashboard pages
│   │   ├── ExecutiveSummary.tsx
│   │   ├── FinancialPerspective.tsx
│   │   ├── CustomerPerspective.tsx
│   │   ├── InternalProcessPerspective.tsx
│   │   └── LearningGrowthPerspective.tsx
│   ├── data/               # Mock data
│   │   └── mockData.ts     # KPIs and chart data
│   ├── types.ts            # TypeScript interfaces
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Dashboard Pages

### 1. Executive Summary
- Vision 2015 progress indicator (51% complete)
- Four perspective overview cards
- Focus area performance grid
- Key highlights and alerts

### 2. Financial Perspective
**KPIs:**
- Budget Utilization Rate: 96% (Target: 97%)
- Cost Efficiency per Service: -2.3% YoY (Target: -2.0%)

**Visualizations:**
- Budget utilization by department (bar chart)
- Cost efficiency trend (line chart)
- Funding by priority level (horizontal bar chart)
- Reserve funds status (gauges)

### 3. Customer & Stakeholder Perspective
**KPIs:**
- Customer Satisfaction Score: 4.1/5.0 (Target: 4.2)
- Service Response Time: 22 hours (Target: 24 hours)

**Visualizations:**
- Overall satisfaction gauge
- Satisfaction by focus area (radar chart)
- Satisfaction trend (line chart)
- Service response time by category (heat map)
- 311 contact center performance metrics

### 4. Internal Business Process Perspective
**KPIs:**
- PART Performance Score: 77% (Target: 80%)
- Digital Service Adoption: 38% (Target: 40%)

**Visualizations:**
- PART score gauge
- PART dimensions (radar chart)
- Program performance by priority (grouped bar chart)
- eGovernment adoption funnel
- Process improvement initiatives table

### 5. Learning & Growth Perspective
**KPIs:**
- Employee Engagement Score: 3.9/5.0 (Target: 4.0)
- Workforce Diversity Index: 0.87 (Target: 0.90)

**Visualizations:**
- Employee engagement gauge
- Engagement dimensions (spider chart)
- Workforce diversity comparison (bar chart)
- Training & development progress bars
- Turnover & retention trend (line chart)
- Workforce statistics cards

## Data Model

### KPI Structure
Each KPI includes:
- Name and description
- Strategic objective
- Current value and target
- Performance status (traffic light)
- Data source
- Last updated timestamp
- Trend indicator (up/down/stable)

### Performance Status
- 🟢 **Green**: Goal achieved (≥ target)
- 🟡 **Yellow**: Mixed performance (approaching target)
- 🔴 **Red**: Below threshold (needs attention)
- ⚪ **Gray**: Data unavailable

## Customization

### Adding New KPIs
Edit `src/data/mockData.ts` and add to the `kpis` array:

```typescript
{
  id: 'unique-id',
  name: 'KPI Name',
  perspective: Perspective.FINANCIAL,
  strategicObjective: 'Your objective',
  description: 'KPI description',
  value: 95,
  target: 100,
  unit: '%',
  status: PerformanceStatus.GREEN,
  dataSource: 'Data source name',
  lastUpdated: '2008-12-15',
  trend: 'up'
}
```

### Modifying Visualizations
Charts are built with Recharts. Customize in the respective page components:
- `FinancialPerspective.tsx`
- `CustomerPerspective.tsx`
- `InternalProcessPerspective.tsx`
- `LearningGrowthPerspective.tsx`

### Styling
Tailwind CSS classes are used throughout. Modify `tailwind.config.js` for theme customization.

## Case Study Context

This dashboard is based on the Mecklenburg County, NC case study documenting their 7-year journey (2001-2008) implementing the Balanced Scorecard framework for Managing for Results (M4R).

**Key Achievements:**
- 51% of 15-year Vision 2015 goals achieved by 2008
- Transformed from "management by experts" to data-driven decisions
- Implemented PART (Program Assessment Rating Tool) for all 267 services
- Established 7-level priority system for budget allocation
- Achieved widespread accountability and transparency

**Four Focus Areas:**
1. Community Health & Safety
2. Growth Management & Environment
3. Social, Education & Economic Opportunity
4. Effective & Efficient Government

## Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation supported
- Screen reader compatible
- ARIA labels on interactive elements
- Alt text for visualizations

## License

This project is for educational purposes based on the public case study by Mecklenburg County and the Balanced Scorecard Institute.

## Credits

- **Case Study**: John McGillicuddy, Mecklenburg County General Manager
- **Framework**: Balanced Scorecard Institute's Nine Steps to Success®
- **Developers**: Built with React, TypeScript, and modern web technologies
# RandomDashboard
