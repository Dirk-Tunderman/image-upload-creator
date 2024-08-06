import { Home, Users, Lightbulb, Code, Clock } from "lucide-react";
import Index from "./pages/Index.jsx";
import Consultation from "./pages/Consultation.jsx";
import PreDevelopment from "./pages/PreDevelopment.jsx";
import Development from "./pages/Development.jsx";
import LongTermCollaboration from "./pages/LongTermCollaboration.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Consultation",
    to: "/consultation",
    icon: <Users className="h-4 w-4" />,
    page: <Consultation />,
  },
  {
    title: "Pre-Development",
    to: "/pre-development",
    icon: <Lightbulb className="h-4 w-4" />,
    page: <PreDevelopment />,
  },
  {
    title: "Development",
    to: "/development",
    icon: <Code className="h-4 w-4" />,
    page: <Development />,
  },
  {
    title: "Long Term Collaboration",
    to: "/long-term-collaboration",
    icon: <Clock className="h-4 w-4" />,
    page: <LongTermCollaboration />,
  },
];
