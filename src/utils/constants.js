r// Constants for the Interactive Product Tour Builder

// Default steps for the demo
export const DEFAULT_STEPS = [
  {
    id: 1,
    title: "Welcome to Your Dashboard",
    description: "This is where you'll manage all your projects and see key metrics at a glance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Create Your First Project",
    description: "Click the 'New Project' button to start building something amazing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Collaborate with Your Team",
    description: "Invite team members and work together in real-time on your projects.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Track Your Progress",
    description: "Monitor your project's progress and stay on top of deadlines.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 5,
    title: "Export Your Work",
    description: "Easily export your projects and share them with stakeholders.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&h=500&fit=crop&auto=format",
  },
];

// Default image URL for steps without an image
export const DEFAULT_IMAGE_URL = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format";

// Application views
export const VIEWS = {
  LANDING: "landing",
  DEMO: "demo",
  EDITOR: "editor",
};