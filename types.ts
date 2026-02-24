import React from 'react';

export interface NavLink {
  id: string;
  title: string;
}

export interface TechIcon {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export interface Service {
  title: string;
  icon: React.ReactNode;
}

export interface Experience {
  title: string;
  company_name: string;
  icon: React.ReactNode;
  iconBg: string;
  date: string;
  points: string[];
}

export interface Technology {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
}

export interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}
