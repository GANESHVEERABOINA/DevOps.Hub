import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import InterviewQuestions from "../pages/InterviewQuestions";
import QuestionDetails from "../pages/QuestionDetails";
import Login from "../pages/Login";

// New SignInPage Component
import { SignInPage } from "../components/auth/SignInPage";

// టూల్స్ ఇంపోర్ట్స్
import Linux from "../pages/ToolQuestions/Linux";
import Docker from "../pages/ToolQuestions/Docker";
import Kubernetes from "../pages/ToolQuestions/Kubernetes";
import Jenkins from "../pages/ToolQuestions/Jenkins";
import Networking from "../pages/ToolQuestions/Networking";
import AWS from "../pages/ToolQuestions/AWS";
import ShellScripting from "../pages/ToolQuestions/ShellScripting";
import Git from "../pages/ToolQuestions/Git";
import GitHub from "../pages/ToolQuestions/GitHub";
import Terraform from "../pages/ToolQuestions/Terraform";
import Ansible from "../pages/ToolQuestions/Ansible";
import Prometheus from "../pages/ToolQuestions/Prometheus";
import Grafana from "../pages/ToolQuestions/Grafana";
import SonarQube from "../pages/ToolQuestions/SonarQube";
import Monitoring from "../pages/ToolQuestions/Monitoring";
import CICD from "../pages/ToolQuestions/CICD";
import Nginx from "../pages/ToolQuestions/Nginx";
import Apache from "../pages/ToolQuestions/Apache";
import DevSecOps from "../pages/ToolQuestions/DevSecOps";
import GitOps from "../pages/ToolQuestions/GitOps";
import PythonForDevOps from "../pages/ToolQuestions/PythonForDevOps";
import CloudFundamentals from "../pages/ToolQuestions/CloudFundamentals";
import HRQuestionsPage from "../pages/ToolQuestions/HRQuestions";
import SalaryNegotiation from "../pages/ToolQuestions/SalaryNegotiation";
import Cybersecurity from "../pages/ToolQuestions/Cybersecurity";

// ఇతర పేజీలు
import Roadmaps from "../pages/Roadmaps";
import Projects from "../pages/Projects";
import MockInterview from "../pages/MockInterview";
import HRQuestions from "../pages/HRQuestions";
import SalaryInsights from "../pages/SalaryInsights";
import ResumeBuilder from "../pages/ResumeBuilder";
import Bookmarks from "../pages/Bookmarks";
import Achievements from "../pages/Achievements";
import CompanyWiseQuestions from "../pages/CompanyWiseQuestions";
import UserProfile from "../pages/UserProfile";
import Settings from "../pages/Settings";
import SearchResults from "../pages/SearchResults";
import NotFound from "../pages/NotFound";

const AppRouter = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/sign-in" element={<SignInPage />} /> 
    <Route path="/" element={<Home />} />
    
    <Route element={<DashboardLayout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/questions" element={<InterviewQuestions />} />
      
      {/* టూల్స్ రూట్స్ */}
      <Route path="/questions/linux" element={<Linux />} />
      <Route path="/questions/docker" element={<Docker />} />
      <Route path="/questions/kubernetes" element={<Kubernetes />} />
      <Route path="/questions/jenkins" element={<Jenkins />} />
      <Route path="/questions/networking" element={<Networking />} />
      <Route path="/questions/aws" element={<AWS />} />
      <Route path="/questions/shell-scripting" element={<ShellScripting />} />
      <Route path="/questions/git" element={<Git />} />
      <Route path="/questions/github" element={<GitHub />} />
      <Route path="/questions/terraform" element={<Terraform />} />
      <Route path="/questions/ansible" element={<Ansible />} />
      <Route path="/questions/prometheus" element={<Prometheus />} />
      <Route path="/questions/grafana" element={<Grafana />} />
      <Route path="/questions/sonarqube" element={<SonarQube />} />
      <Route path="/questions/monitoring" element={<Monitoring />} />
      <Route path="/questions/cicd" element={<CICD />} />
      <Route path="/questions/nginx" element={<Nginx />} />
      <Route path="/questions/apache" element={<Apache />} />
      <Route path="/questions/devsecops" element={<DevSecOps />} />
      <Route path="/questions/gitops" element={<GitOps />} />
      <Route path="/questions/python-devops" element={<PythonForDevOps />} />
      <Route path="/questions/cloud-fundamentals" element={<CloudFundamentals />} />
      <Route path="/questions/hr-questions" element={<HRQuestionsPage />} />
      <Route path="/questions/salary-negotiation" element={<SalaryNegotiation />} />
      <Route path="/questions/cybersecurity" element={<Cybersecurity />} />

      {/* డైనమిక్ క్వశ్చన్ డీటెయిల్స్ */}
      <Route path="/questions/:id" element={<QuestionDetails />} />
      
      {/* ఇతర పేజీలు */}
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