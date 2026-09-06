import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const CONTRIBUTORS = [
  { name: 'Dr Shweta Chawak', institution: 'IIT Hyderabad / Jindal Global University' },
  { name: 'Dr Mahati Chittem', institution: 'IIT Hyderabad' },
  { name: 'Prof Phyllis Butow', institution: 'University of Sydney' },
  { name: 'Dr Haryana Dhillon', institution: 'University of Sydney' },
];

const PublicFooter = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <footer className="border-t border-white/10 bg-surface-950 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Brand & Language */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                Q
              </div>
              <span className="font-bold text-white text-lg">Ask Your Doctor</span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Empowering cancer patients and caregivers to prepare personalized question lists for their medical appointments.
            </p>
            <div className="pt-2">
              <LanguageSelector selectedLanguage={selectedLanguage} onLanguageChange={onLanguageChange} theme="dark" />
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Credits */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Resource Developed By</h4>
            <ul className="space-y-2 text-xs">
              {CONTRIBUTORS.map((c) => (
                <li key={c.name} className="text-gray-400">
                  <span className="font-medium text-gray-200">{c.name}</span>
                  <span className="block text-gray-500 text-[11px]">{c.institution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2025 Ask Your Doctor. All rights reserved.</p>
          <p className="text-gray-600">QPL Digital Platform for Health Communication</p>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
