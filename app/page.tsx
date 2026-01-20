"use client"
/**
 * Main Cap Milestones prototype page
 * - Renders milestone navigation and checkpoint checklists. 
 * - Collects student inputs (goal, major, progress)
 * - Calls backend AI endpoint for guidance and resources. 
 */

import { useMemo, useState } from "react"; 
import { MILESTONES, Goal } from "../data/milestones";

type RecommendedResource = {
  title: string;
  type: string; 
  why: string; 
};

type AiResult = {
  overallSummary: string; 
  nextActions: string[];
  recommendedResources: RecommendedResource[];
};

type ProgressState = Record<string, Record<string, boolean>>; 
// progress[milestoneId][checkpointId] = true/false

export default function Home() {
  const [goal, setGoal] = useState<Goal>("undecided");
  const [major, setMajor] = useState<string>(""); 
  const [activeMilestoneId, setActiveMilestoneId] = useState<string>(MILESTONES[0].id);

  const [progress, setProgress] = useState<ProgressState>({}); 
  const [aiResult, setAiResult] = useState<AiResult | null>(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState<string>("");
}

