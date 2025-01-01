import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminModule from './components/admin/AdminModule';
import UserModule from './components/user/UserModule';
import ReportingModule from './components/reporting/ReportingModule';
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';

const initialCompanies = [
  { id: 1, name: "ENTNT", location: "Abu Dhabi", linkedinProfile: "linkedin.com/company/entnt", emails: ["contact@entnt.com"], phoneNumbers: ["+1-555-0123"], comments: "Leading technology provider", communicationPeriodicity: 7, communications: [{ type: "LinkedIn Post", date: "2024-12-20", notes: "Introduced new content collaboration tools" }, { type: "Email", date: "2024-12-15", notes: "Discussed upcoming industry events" }] },
  { id: 4, name: "AMAZON", location: "Seattle, US", linkedinProfile: "linkedin.com/company/amazon", emails: ["contact@amazon.com"], phoneNumbers: ["+1-206-266-1000"], comments: "E-commerce and cloud services leader", communicationPeriodicity: 3, communications: [{ type: "Email", date: "2024-12-28", notes: "Introduced new AWS services" }, { type: "Newsletter", date: "2024-12-21", notes: "Sent monthly performance report" }, { type: "Phone Call", date: "2024-12-17", notes: "Followed up on supply chain collaboration" }] }
];

const initialCommunicationMethods = [
  { id: 1, name: "LinkedIn Post", description: "Share or interact with company posts on LinkedIn", sequence: 1, mandatory: true },
  { id: 2, name: "LinkedIn Message", description: "Direct message to company representatives on LinkedIn", sequence: 2, mandatory: true },
  { id: 3, name: "Email", description: "Email communication", sequence: 3, mandatory: true },
  { id: 4, name: "Phone Call", description: "Direct phone communication", sequence: 4, mandatory: false },
  { id: 5, name: "Other", description: "Other forms of communication", sequence: 5, mandatory: false }
];

function App() {
  const [companies, setCompanies] = useState(initialCompanies);
  const [communicationMethods, setCommunicationMethods] = useState(initialCommunicationMethods);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <div className="flex h-screen overflow-hidden">
          <div className="w-64 bg-white shadow-lg">
            <Sidebar />
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-y-auto bg-gray-100">
              <div className="max-w-6xl mx-auto px-6 py-8">
                <Routes>
                  <Route path="/admin/*" element={<AdminModule companies={companies} setCompanies={setCompanies} communicationMethods={communicationMethods} setCommunicationMethods={setCommunicationMethods} />} />
                  <Route path="/user/*" element={<UserModule companies={companies} setCompanies={setCompanies} communicationMethods={communicationMethods} />} />
                  <Route path="/reports/*" element={<ReportingModule companies={companies} communicationMethods={communicationMethods} />} />
                  <Route path="/" element={<Navigate to="/user" replace />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

