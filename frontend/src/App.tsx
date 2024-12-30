import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import SearchPage from './pages/search/SearchPage';
import ListingPage from './pages/listing/ListingPage';
import CartPage from './components/cart/CartPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import CreateListingPage from './pages/listing/CreateListingPage';
import CategoryPage from './pages/category/CategoryPage';
import {ProtectedRoute} from './components/auth/ProtectedRoute';
import {AuthProvider} from './contexts/AuthContext';
import {CartProvider} from './contexts/CartContext';
import SettingsPage from "./pages/settings/SettingsPage.tsx";
import ClientsPage from "./pages/clients/ClientsPage.tsx";
import AdsPage from "./pages/ads/AdsPage.tsx";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-navy-900">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/listing/:id" element={<ListingPage />} />
                <Route path="/cart" element={<CartPage />} />
                  <Route path="/dashboard/ads" element={<AdsPage/>}/>
                  <Route path="/dashboard/clients" element={<ClientsPage/>}/>
                  <Route path="/dashboard/settings" element={<SettingsPage/>}/>


                <Route path="/checkout" element={
                  <ProtectedRoute>
                    <CheckoutPage />
                  </ProtectedRoute>
                } />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                } />
                <Route path="/listing/create" element={
                  <ProtectedRoute>
                    <CreateListingPage />
                  </ProtectedRoute>
                } />
              </Routes>
            </main>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;