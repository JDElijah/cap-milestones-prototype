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

export const MILESTONE: Milestone[] = [
  {
    id: "ever-semester",
    title: "Every Semester",
    checkpoints: [
      { id: "pass-classes", label: "Pass each class with a grade of a C or higher and maintain a GPA of at least 2.0." },
      { id: "full-time", label: "Attend full-time if you can succeed while meeting responsibilities and supporting well-being." },
    ],
  },
];
