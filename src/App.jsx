import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ComparisonPage from './pages/ComparisonPage';
import ChatbotPage from './pages/ChatbotPage';
import AlertsPage from './pages/AlertsPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import { Toaster } from 'sonner';
import { ThemeProvider } from './context/ThemeContext';

// Layout wrapper to conditionally show Navbar
const Layout = ({ children }) => {
    const location = useLocation();
    // Always show Navbar
    const showNavbar = true;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-50 font-sans pb-12 transition-colors">
            <Navbar />
            <main className={location.pathname !== '/' ? "pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" : ""}>
                {children}
            </main>
            <Toaster position="top-right" theme="system" />
        </div>
    );
};

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/compare" element={<ComparisonPage />} />
                        <Route path="/chat" element={<ChatbotPage />} />
                        <Route path="/alerts" element={<AlertsPage />} />
                        <Route path="/reports" element={<ReportsPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;
