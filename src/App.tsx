import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ExecutiveSummary from './pages/ExecutiveSummary';
import FinancialPerspective from './pages/FinancialPerspective';
import CustomerPerspective from './pages/CustomerPerspective';
import InternalProcessPerspective from './pages/InternalProcessPerspective';
import LearningGrowthPerspective from './pages/LearningGrowthPerspective';

const App: React.FC = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Navigation />
                <main className="max-w-7xl mx-auto px-4 py-8">
                    <Routes>
                        <Route path="/" element={<ExecutiveSummary />} />
                        <Route path="/financial" element={<FinancialPerspective />} />
                        <Route path="/customer" element={<CustomerPerspective />} />
                        <Route path="/internal-process" element={<InternalProcessPerspective />} />
                        <Route path="/learning-growth" element={<LearningGrowthPerspective />} />
                    </Routes>
                </main>
                <footer className="bg-gray-800 text-white py-6 mt-12">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <p className="text-sm">
                            Mecklenburg County Balanced Scorecard Dashboard - Managing for Results (M4R)
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                            Based on the case study: "Using the Balanced Scorecard to Move from Management by Experts to Managing for Results"
                        </p>
                    </div>
                </footer>
            </div>
        </Router>
    );
};

export default App;
