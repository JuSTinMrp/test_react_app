import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecentScans from "./pages/RecentScans";
import StaticAnalyzer from "./pages/StaticAnalyzer"
import Donate from "./pages/Donate"
import Docs from "./pages/Docs"
import About from "./pages/About"
import Upload from "./pages/Upload";
import Information from "./components/Info/Information";
import Scanoptions from "./Scan_options/Scanoptions";
import SignerCertificate from "./components/SignerCertificate/SignerCertificate";
import Permissions from "./components/Permissions/Permissions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/RecentScans" element={<RecentScans />} />
          <Route path="/StaticAnalyzer" element={<StaticAnalyzer />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Docs" element={<Docs />} />
          <Route path="/About" element={<About />} />
          <Route path="/newscan" element={<Upload />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/Scan_options" element={<Scanoptions />} />
          <Route path="/Signer_Certificate" element={<SignerCertificate />} />
          <Route path="/Permissions" element={<Permissions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
