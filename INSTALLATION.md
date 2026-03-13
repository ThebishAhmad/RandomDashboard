# Installation and Setup Instructions

## Complete Step-by-Step Guide

### Step 1: Verify Prerequisites

Before starting, ensure you have Node.js installed:

```bash
node --version
```

You should see version 16.0.0 or higher. If not installed, download from [nodejs.org](https://nodejs.org/)

### Step 2: Navigate to Project Directory

Open your terminal/command prompt and navigate to the project folder:

```bash
cd path/to/balanced-scorecard-dashboard
```

### Step 3: Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will install:
- React and React DOM
- React Router for navigation
- Recharts for data visualization
- Tailwind CSS for styling
- TypeScript for type safety
- Vite as the build tool
- Lucide React for icons

**Expected output:**
```
added 234 packages, and audited 235 packages in 15s
```

### Step 4: Start the Development Server

```bash
npm run dev
```

**Expected output:**
```
  VITE v5.0.8  ready in 523 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### Step 5: Open in Browser

Open your web browser and navigate to:

```
http://localhost:3000
```

You should see the Balanced Scorecard Dashboard with the Executive Summary page.

---

## Troubleshooting Common Issues

### Issue 1: "npm: command not found"

**Problem**: Node.js/npm is not installed or not in PATH

**Solution**:
1. Download and install Node.js from [nodejs.org](https://nodejs.org/)
2. Restart your terminal
3. Verify installation: `node --version` and `npm --version`

### Issue 2: "Port 3000 is already in use"

**Problem**: Another application is using port 3000

**Solution**:
Vite will automatically use the next available port (3001, 3002, etc.). Check the terminal output for the actual port number.

Alternatively, you can specify a different port in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001  // Change to desired port
  }
})
```

### Issue 3: Installation Errors or Warnings

**Problem**: Errors during `npm install`

**Solution**:
1. Delete `node_modules` folder and `package-lock.json`:
   ```bash
   rm -rf node_modules package-lock.json
   ```
   (On Windows: `rmdir /s node_modules` and `del package-lock.json`)

2. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

3. Reinstall:
   ```bash
   npm install
   ```

### Issue 4: TypeScript Errors

**Problem**: TypeScript compilation errors

**Solution**:
1. Ensure you're using Node.js 16 or higher
2. Delete `node_modules` and reinstall
3. Check that all TypeScript files have correct syntax

### Issue 5: Blank Page or White Screen

**Problem**: Dashboard doesn't load in browser

**Solution**:
1. Check browser console for errors (F12 or right-click → Inspect)
2. Ensure development server is running
3. Try clearing browser cache
4. Try a different browser

---

## Verifying Installation

After starting the development server, you should see:

### 1. Executive Summary Page
- Vision 2015 progress bar showing 51%
- Four perspective cards (Financial, Customer, Internal Process, Learning & Growth)
- Focus area performance grid
- Key highlights section

### 2. Navigation Bar
- Blue navigation bar at the top
- Five navigation links:
  - Executive Summary
  - Financial
  - Customer
  - Internal Process
  - Learning & Growth

### 3. Interactive Elements
- Click on perspective cards to navigate
- Hover over charts to see tooltips
- All visualizations should render properly

---

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `dist/` folder with optimized files.

To preview the production build:

```bash
npm run preview
```

---

## Project Structure Verification

After installation, your project should have this structure:

```
balanced-scorecard-dashboard/
├── node_modules/          # Installed dependencies (created after npm install)
├── src/
│   ├── components/
│   │   ├── KPICard.tsx
│   │   ├── Navigation.tsx
│   │   └── StatusIndicator.tsx
│   ├── data/
│   │   └── mockData.ts
│   ├── pages/
│   │   ├── ExecutiveSummary.tsx
│   │   ├── FinancialPerspective.tsx
│   │   ├── CustomerPerspective.tsx
│   │   ├── InternalProcessPerspective.tsx
│   │   └── LearningGrowthPerspective.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── types.ts
├── index.html
├── package.json
├── package-lock.json      # Created after npm install
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── README.md
├── QUICKSTART.md
├── ASSIGNMENT_SUMMARY.md
└── INSTALLATION.md
```

---

## Testing the Dashboard

### Test Checklist

1. **Navigation**
   - [ ] Click each navigation link
   - [ ] Verify each page loads correctly
   - [ ] Check that active page is highlighted

2. **Executive Summary**
   - [ ] Vision 2015 progress bar displays
   - [ ] Four perspective cards show correct data
   - [ ] Focus areas display with traffic lights
   - [ ] Highlights section shows alerts

3. **Financial Perspective**
   - [ ] Two KPI cards display
   - [ ] Budget utilization chart renders
   - [ ] Cost efficiency trend line shows
   - [ ] Priority level funding chart displays
   - [ ] Reserve funds gauges show

4. **Customer Perspective**
   - [ ] Satisfaction gauge displays
   - [ ] Radar chart renders
   - [ ] Trend line chart shows
   - [ ] Response time heat map displays
   - [ ] 311 metrics cards show

5. **Internal Process Perspective**
   - [ ] PART score gauge displays
   - [ ] Radar chart for dimensions renders
   - [ ] Priority level bar chart shows
   - [ ] eGovernment funnel displays
   - [ ] Initiatives table renders

6. **Learning & Growth Perspective**
   - [ ] Engagement gauge displays
   - [ ] Spider chart renders
   - [ ] Diversity comparison chart shows
   - [ ] Training progress bars display
   - [ ] Turnover trend line shows
   - [ ] Workforce statistics cards display

---

## Performance Optimization

For best performance:

1. **Use a modern browser**:
   - Chrome 90+
   - Firefox 88+
   - Safari 14+
   - Edge 90+

2. **Clear browser cache** if experiencing slow loading

3. **Close unnecessary browser tabs** to free up memory

4. **Disable browser extensions** that might interfere with JavaScript

---

## Development Tips

### Hot Module Replacement (HMR)

Vite provides instant updates when you edit files. Changes will appear in the browser without a full page reload.

### Editing Data

To modify KPI values or chart data:
1. Open `src/data/mockData.ts`
2. Edit the values
3. Save the file
4. Changes appear instantly in the browser

### Editing Styles

To modify colors or styling:
1. Edit Tailwind classes in component files
2. Or modify `tailwind.config.js` for theme changes
3. Changes apply instantly

### Adding New Pages

1. Create new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

---

## Getting Help

If you encounter issues:

1. **Check the console**: Press F12 in browser to see error messages
2. **Review the README**: Comprehensive documentation available
3. **Check QUICKSTART.md**: Quick reference guide
4. **Review ASSIGNMENT_SUMMARY.md**: Complete KPI specifications

---

## System Requirements

### Minimum Requirements
- **OS**: Windows 10, macOS 10.14, or Linux
- **RAM**: 4 GB
- **Disk Space**: 500 MB for project and dependencies
- **Browser**: Modern browser with JavaScript enabled

### Recommended Requirements
- **OS**: Windows 11, macOS 12+, or Linux
- **RAM**: 8 GB or more
- **Disk Space**: 1 GB
- **Browser**: Latest version of Chrome, Firefox, or Edge

---

## Next Steps

After successful installation:

1. Explore all five dashboard pages
2. Review the KPI specifications in ASSIGNMENT_SUMMARY.md
3. Examine the code structure in `src/` directory
4. Customize data in `src/data/mockData.ts` if needed
5. Review the case study context in README.md

---

## Uninstalling

To remove the project:

1. Stop the development server (Ctrl+C)
2. Delete the project folder
3. No system-wide changes were made

To remove just the dependencies:

```bash
rm -rf node_modules package-lock.json
```

(On Windows: `rmdir /s node_modules` and `del package-lock.json`)

---

## Support

For technical issues:
- Review error messages in terminal and browser console
- Check that all files are present and unmodified
- Ensure Node.js version is 16 or higher
- Try reinstalling dependencies

For questions about the dashboard design:
- Review ASSIGNMENT_SUMMARY.md for KPI details
- Check README.md for feature documentation
- Examine the case study for context

---

**Installation Complete!** 🎉

You now have a fully functional Balanced Scorecard Dashboard running locally. Enjoy exploring the data-driven insights from the Mecklenburg County case study!
