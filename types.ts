import React from 'react';

export interface Service {
  id: string;
  title: string;
  icon: React.ElementType;
  shortDesc: string;
  fullDesc: string;
  image: string;
}

export interface Package {
  id: string;
  title: string;
  image: string;
  description: string;
  location: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  location: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface VisaCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  requirements: string[];
  process: string[];
}

export enum EditorState {
  IDLE,
  UPLOADING,
  GENERATING,
  SUCCESS,
  ERROR
}

// AI Trip Planner Types
export interface Activity {
  time: string;
  activity: string;
}

export interface DailyPlan {
  day: number;
  theme: string;
  activities: Activity[];
}

export interface Hotel {
  name: string;
  description: string;
}

export interface TripPlanResult {
  tripTitle: string;
  estimatedCost: string;
  hotels: Hotel[];
  dailyItinerary: DailyPlan[];
}