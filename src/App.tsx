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
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col selection:bg-amber-500 selection:text-black">
      <Navbar />
      <div className="flex-1">
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
