import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import PrivacyPage from "./pages/Privacy";
import TermsPage from "./pages/Terms";
import DeepLinkRedirect from "./pages/DeepLinkRedirect";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />

      {/* Deep link fallback pages — shown when app is not installed */}
      <Route path="/group/:id" element={<DeepLinkRedirect type="group" />} />
      <Route path="/profile/:id" element={<DeepLinkRedirect type="profile" />} />
      <Route path="/course/:id" element={<DeepLinkRedirect type="course" />} />
      <Route path="/referral/:id" element={<DeepLinkRedirect type="referral" />} />
      <Route path="/conversation/:id" element={<DeepLinkRedirect type="conversation" />} />
    </Routes>
  );
}

export default App;
