# Quick Start Guide

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation Steps

### 1. Install Node.js
If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/)

### 2. Install Dependencies
Open a terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- React
- React Router
- Recharts (for visualizations)
- Tailwind CSS (for styling)
- TypeScript
- Vite (build tool)

### 3. Start the Development Server

```bash
npm run dev
```

The dashboard will be available at: **http://localhost:3000**

### 4. Navigate the Dashboard

The dashboard has 5 main pages accessible via the top navigation:

1. **Executive Summary** (Home) - Overview of all perspectives
2. **Financial** - Budget and cost metrics
3. **Customer** - Satisfaction and service metrics
4. **Internal Process** - Operational efficiency metrics
5. **Learning & Growth** - Employee and workforce metrics

## What You'll See

### Executive Summary Page
- Vision 2015 progress bar showing 51% completion
- Four perspective cards with performance indicators
- Focus area performance grid
- Key highlights and alerts

### Financial Perspective
- Budget Utilization Rate KPI (96%)
- Cost Efficiency per Service KPI (-2.3% YoY)
- Interactive charts showing:
  - Budget utilization by department
  - Cost efficiency trend over 5 years
  - Funding allocation by priority level
  - Reserve funds status

### Customer Perspective
- Customer Satisfaction Score (4.1/5.0)
- Service Response Time (22 hours)
- Interactive visualizations:
  - Satisfaction gauge
  - Radar chart by focus area
  - 5-year satisfaction trend
  - Response time heat map
  - 311 contact center metrics

### Internal Process Perspective
- PART Performance Score (77%)
- Digital Service Adoption (38%)
- Visualizations include:
  - PART score gauge and radar chart
  - Performance by priority level
  - eGovernment adoption funnel
  - Process improvement initiatives table

### Learning & Growth Perspective
- Employee Engagement Score (3.9/5.0)
- Workforce Diversity Index (0.87)
- Charts showing:
  - Engagement dimensions spider chart
  - Diversity comparison
  - Training progress
  - Turnover trend
  - Workforce statistics

## Features to Explore

### Traffic Light Indicators
- 🟢 **Green**: Goal achieved
- 🟡 **Yellow**: Approaching target
- 🔴 **Red**: Below threshold
- ⚪ **Gray**: Data unavailable

### Interactive Elements
- Click on KPI cards to see details
- Hover over charts for specific data points
- Navigate between perspectives using the top menu
- Responsive design works on mobile, tablet, and desktop

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, Vite will automatically try the next available port (3001, 3002, etc.)

### Installation Errors
If you encounter errors during `npm install`:
1. Delete the `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

### Build Errors
If you see TypeScript errors:
1. Make sure you're using Node.js version 16 or higher
2. Try running `npm install` again
3. Clear the cache: `npm cache clean --force`

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Next Steps

1. Explore all five dashboard pages
2. Review the KPI cards and their strategic objectives
3. Interact with the various charts and visualizations
4. Check the responsive design on different screen sizes
5. Review the code in `src/` to understand the implementation

## Support

For questions or issues:
- Review the main README.md file
- Check the case study document for context
- Examine the code in the `src/` directory

## Key Files to Review

- `src/App.tsx` - Main application component
- `src/pages/` - Individual dashboard pages
- `src/components/` - Reusable UI components
- `src/data/mockData.ts` - All KPI data and chart data
- `src/types.ts` - TypeScript type definitions

Enjoy exploring the Balanced Scorecard Dashboard!
