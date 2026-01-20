export type Goal = "transfer" | "career" | "undecided";

export type Checkpoint = {
  id: string;
  label: string;
  tags?: Goal[]; // optional filtering by goal.
};

export type Milestone = {
  id: string;
  title: string;
  description?: string;
  checkpoints: Checkpoint[];
};

export const MILESTONES: Milestone[] = [
  {
    id: "ever-semester",
    title: "Every Semester",
    checkpoints: [
      { id: "pass-classes", label: "Pass each class with a grade of a C or higher and maintain a GPA of at least 2.0." },
      { id: "full-time", label: "Attend full-time if you can succeed while meeting responsibilities and supporting well-being." },
      { id: "supports", label: "Learn about the support LAVC offers to help you thrive in and out of class." }, 
      { id: "register-early", label: "Register as soon as enrollment opens to secure the classes you want." }, 
      { id: "review-sep", label: "Revies your progress on your SEP and meet with your counselor if needed." },
    ],
  },

  {
    id: "15-units", 
    title: "By Completion of 15 Units", 
    checkpoints: [
      { id: "success-course", label: "Complete a Student Success course. " }, 
      { id: "choose-major", label: "Choose your major based on your interests and the career your want." }, 
      { id: "sep", label: "Make sure you have a Student Education PLan (SEP)." },
    ],
  },

  {
    id: "30-units",
    title: "By Completion of 30 Units", 
    checkpoints: [
      { id: "english", label: "Complete a course in English Communication." },
      { id: "math", label: "Complete a course in Mathematial Concepts and Quantitative Reasoning." },
      { id: "major-accurate", label: "Make sure your declared major is accurate. " },
      { id: "major-9", label: "Complete at least 9 units in your major." }, 
      { id: "prereqs", label: "For certain majors (STEM, Health Science), complete prerequisite courses (check your SEP." },
      { id: "explore", label: "Begin exploring internships and transfer opportunities.", tags: ["transfer"] },
    ],
  },

  {
    id: "45-units", 
    title: "By Completion of 45 Units", 
    checkpoints: [
      { id: "counselor-check", label: "Meet with your counselor to check progress toward graduation and/or transfer." }, 
      { id: "transfer-center", label: "Learn about transfer options and use Transfer Center services.", tags: ["transfer"] }, 
      { id: "apply-universities", label: "Apply to universities.", tags: ["transfer"] },
      { id: "apply-internshpips", label: "Apply to internships.", tags: ["transfer"] }, 
      { id: "career-toolkit", label: "Follow the steps in the career toolkit (resume, interviews, job applications).", tags: ["career"] },
    ],
  },

  {
    id: "60-units", 
    title: "At or Near 60 Units (Graduate and/or Transfer)", 
    checkpoints: [
      { id: "apply-degree", label: "Apply for your degree or certificate and meet with your counselor to confirm requirements." },
      { id: "career-toolkit-2", label: "If entering career: follow the Career Toolkit steps (resume, interview practice, job applications).", tags: ["career"] },
      { id: "transfer-verify", label: "If transferring: verify you submitted all required documents for your university application.", tags: ["transfer"] },
      { id: "university-research", label: "If transferring: explore your university’s tutoring, communities/clubs, and supports.", tags: ["transfer"] },
      { id: "celebrate", label: "Attend your graduation ceremony and celebrate." },
    ],
  },
];
