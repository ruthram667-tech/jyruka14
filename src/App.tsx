import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { PageTransition } from './components/common/PageTransition';
import { AuthProvider } from './context/AuthContext';
import { InquiryProvider } from './context/InquiryContext';
import { AnalyticsProvider } from './context/AnalyticsContext';
import { EmployeeProvider } from './context/EmployeeContext';

// Public Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';

// Private Dashboard
import { DashboardPage } from './pages/DashboardPage';

// Auto scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Public Layout containing standard Navbar and Footer
function PublicLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white overflow-x-hidden w-full max-w-full relative">
      {/* Top ambient mint/greenish atmosphere matching brand aesthetic across all pages */}
      <div className="absolute top-0 left-0 right-0 h-[540px] bg-gradient-to-b from-[#e8fbf2] via-[#f1faf5]/75 to-transparent pointer-events-none z-0" />
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] bg-emerald-300/20 blur-[140px] pointer-events-none z-0" />

      <Navbar />
      <div className="flex-1 w-full max-w-full relative z-10">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnalyticsProvider>
        <AuthProvider>
          <InquiryProvider>
            <EmployeeProvider>
              <ScrollToTop />
              <Routes>
                {/* Public showcase routes with Navbar and Footer */}
                <Route element={<PublicLayout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/how-it-works" element={<HowItWorksPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/login" element={<LoginPage />} />
                </Route>

                {/* Private owner dashboard: persistent left sidebar layout, NO public navbar/footer */}
                <Route path="/dashboard" element={<DashboardPage />} />

                {/* Catch-all fallback */}
                <Route path="*" element={<PublicLayout />} />
              </Routes>
            </EmployeeProvider>
          </InquiryProvider>
        </AuthProvider>
      </AnalyticsProvider>
    </BrowserRouter>
  );
}
