import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import InterviewQuestions from '../pages/InterviewQuestions';
import Linux from '../pages/ToolQuestions/Linux';
import Docker from '../pages/ToolQuestions/Docker';
// Import all other tool pages similarly
import Roadmaps from '../pages/Roadmaps';
import Projects from '../pages/Projects';
import MockInterview from '../pages/MockInterview';
import HRQuestions from '../pages/HRQuestions';
import SalaryInsights from '../pages/SalaryInsights';
import ResumeBuilder from '../pages/ResumeBuilder';
import Bookmarks from '../pages/Bookmarks';
import Achievements from '../pages/Achievements';
import CompanyWiseQuestions from '../pages/CompanyWiseQuestions';
import UserProfile from '../pages/UserProfile';
import Settings from '../pages/Settings';
import SearchResults from '../pages/SearchResults';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';

const AppRouter = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Home />} />
    <Route element={<DashboardLayout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/questions" element={<InterviewQuestions />} />
      <Route path="/questions/linux" element={<Linux />} />
      <Route path="/questions/docker" element={<Docker />} />
      {/* ... all tool routes */}
      <Route path="/roadmaps" element={<Roadmaps />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/mock-interview" element={<MockInterview />} />
      <Route path="/hr-questions" element={<HRQuestions />} />
      <Route path="/salary-insights" element={<SalaryInsights />} />
      <Route path="/resume-builder" element={<ResumeBuilder />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/company-questions" element={<CompanyWiseQuestions />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/search" element={<SearchResults />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRouter;