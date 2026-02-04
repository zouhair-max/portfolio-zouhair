"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { 
  Code2, Database, Globe, Server, GitBranch, Users, Wrench,
  TrendingUp, Award, Rocket, ChevronLeft, ChevronRight
} from 'lucide-react';

// ============================================
// DESIGN SYSTEM & CONSTANTS
// ============================================
const DESIGN_CONFIG = {
  colors: {
    background: '#0a0a0a',
    surface: '#1a1a1a',
    surfaceHover: '#252525',
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
      tertiary: '#808080'
    },
    accent: '#8d6a9f',
    accentHover: '#9d7aaf',
    accentLight: '#8d6a9f40',
    border: 'rgba(255,255,255,0.1)'
  },
  animations: {
    duration: 800,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    stagger: 100
  }
};

// ============================================
// SVG ICON COMPONENTS
// ============================================

// Programming Languages Icons
const JavaScriptIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#F7DF1E">
    <rect width="24" height="24" rx="2" fill="#F7DF1E"/>
    <path d="M13.5 12.5h-2.5l-.5 2.5h-2l.5-2.5-1-5h2.5l.5 2h2l.5-2h2.5l-1 5h-2.5l-.5 2.5z" fill="#000"/>
  </svg>
);

const PythonIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M9.585 2.926c-2.133 0-3.86 1.728-3.86 3.86v2.31h7.72v.772H4.17c-2.133 0-3.86 1.728-3.86 3.86v4.62c0 2.133 1.727 3.86 3.86 3.86h2.31v-3.09c0-2.133 1.728-3.86 3.86-3.86h7.72c2.133 0 3.86-1.727 3.86-3.86V6.786c0-2.133-1.727-3.86-3.86-3.86H9.585zM7.38 5.544c.852 0 1.544.692 1.544 1.544 0 .852-.692 1.544-1.544 1.544-.852 0-1.544-.692-1.544-1.544 0-.852.692-1.544 1.544-1.544z" fill="#3776AB"/>
    <path d="M14.415 21.074c2.133 0 3.86-1.728 3.86-3.86v-2.31h-7.72v-.772h8.375c2.133 0 3.86-1.728 3.86-3.86V4.752c0-2.133-1.727-3.86-3.86-3.86h-2.31v3.09c0 2.133-1.728 3.86-3.86 3.86H4.17c-2.133 0-3.86 1.727-3.86 3.86v4.62c0 2.133 1.727 3.86 3.86 3.86h5.245zm2.205-2.618c-.852 0-1.544-.692-1.544-1.544 0-.852.692-1.544 1.544-1.544.852 0 1.544.692 1.544 1.544 0 .852-.692 1.544-1.544 1.544z" fill="#FFD43B"/>
  </svg>
);

const PHPIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="12" rx="10.5" ry="5.5" fill="url(#phpGradient)" stroke="white" strokeWidth="0.5"/>
    <defs>
      <linearGradient id="phpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#777BB4"/>
        <stop offset="50%" stopColor="#6B7EB8"/>
        <stop offset="100%" stopColor="#4F5B93"/>
      </linearGradient>
    </defs>
    <text x="12" y="15.5" fontSize="7" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif" style={{fontStyle: 'italic'}}>php</text>
  </svg>
);

// Web Development Icons
const HTMLIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#E34F26">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L18.619 4l-1.24 13.896L12 19.288l-5.38-1.392L5.38 4l.03-.587h13.18z"/>
  </svg>
);

const CSSIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#1572B6">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413l-1.24 13.896L12 19.288l-5.38-1.392L5.38 4l.03-.587h13.18z"/>
  </svg>
);

const ReactIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
  </svg>
);

const VueIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#4FC08D">
    <path d="M24 1.61H14.06L12 5.16 9.94 1.61H0L12 22.39 24 1.61zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43L12 14.08z"/>
  </svg>
);

const TailwindIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#06B6D4">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.85 9.53 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35-1.01-1-2.15-2.15-4.59-2.15z"/>
  </svg>
);

const BootstrapIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#7952B3">
    <path d="M11.77 11.24H9.56V8.87h2.21c1.17 0 1.94.61 1.94 1.61 0 1.12-.83 1.76-2.06 1.76m0-6.24H9.56v6.24h2.21c1.63 0 2.77-1 2.77-3.1 0-2.16-1.19-3.14-2.77-3.14M24 10.34v3.03c0 .81-.67 1.47-1.5 1.47H18v3.13H12.9v-3.13H1.5c-.83 0-1.5-.66-1.5-1.47v-3.03c0-.81.67-1.47 1.5-1.47h10.4V5.87H18v3H22.5c.83 0 1.5.66 1.5 1.47M24 4.5v3.03c0 .81-.67 1.47-1.5 1.47H18v3.13H12.9V9H1.5C.67 9 0 8.34 0 7.53V4.5C0 3.69.67 3.03 1.5 3.03h10.4V0H18v3.03h4.5c.83 0 1.5.66 1.5 1.47z"/>
  </svg>
);

// Backend Icons
const NodeJSIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#339933">
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.044,0.151-0.044,0.216,0l2.256,1.339c0.082,0.045,0.197,0.045,0.28,0l8.74-5.044 c0.082-0.045,0.134-0.141,0.134-0.238V6.213c0-0.097-0.052-0.192-0.134-0.238l-8.74-5.033c-0.082-0.057-0.197-0.057-0.28,0 L3.723,6.213c-0.082,0.045-0.134,0.141-0.134,0.238v10.018c0,0.097,0.052,0.203,0.134,0.238l2.375,1.392 c1.112,0.525,1.801-0.198,1.801-0.784V6.434c0-0.221,0.181-0.4,0.403-0.4h1.729c0.221,0,0.4,0.192,0.4,0.4v11.353 c0,0.626,0.044,0.784,0.18,1.048l0.09,0.151c0.198,0.336,0.516,0.54,0.93,0.54c0.221,0,0.4-0.192,0.4-0.4v-0.614 c0-1.347,0.873-1.605,1.587-1.605c0.221,0,0.4,0.192,0.4,0.4c0,0.221-0.181,0.4-0.4,0.4c-0.134,0-0.403,0.03-0.403,0.3v0.614 c0,0.626-0.044,0.784-0.18,1.048l-0.09,0.151c-0.198,0.336-0.516,0.54-0.93,0.54c-0.221,0-0.4,0.192-0.4,0.4v0.614 c0,0.221-0.181,0.4-0.4,0.4H11.998z M19.291,13.993c-0.057,0-0.134,0.03-0.211,0.075l-1.677,0.975 c-0.458,0.27-0.757,0.027-0.757-0.54V8.197c0-0.567,0.299-0.81,0.757-0.54l1.677,0.975c0.154,0.09,0.211,0.27,0.134,0.403 c-0.04,0.067-0.107,0.075-0.134,0.075c-0.026,0-0.08-0.015-0.134-0.045l-1.677-0.975c-0.082-0.057-0.197-0.057-0.28,0 c-0.082,0.045-0.134,0.141-0.134,0.238v7.306c0,0.097,0.052,0.192,0.134,0.238c0.04,0.022,0.09,0.03,0.14,0.03 c0.05,0,0.1-0.008,0.14-0.03l1.677-0.975c0.458-0.27,0.757-0.027,0.757,0.54v1.677c0,0.097-0.052,0.192-0.134,0.238 C19.37,13.978,19.33,13.993,19.291,13.993z"/>
  </svg>
);

const LaravelIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#FF2D20">
    <path d="M24 10.248V6.749H13.586c-1.435 0-2.122.9-2.122 2.35 0 1.41.687 2.302 2.122 2.302h1.217v-1.551h-1.21c-.384 0-.59-.2-.59-.551 0-.384.206-.551.59-.551H24zM9.533 3.026l-6.35 14.066h2.213l.6-1.448h6.317l.6 1.448h2.212L9.533 3.026zm-.31 9.64l1.89-4.65 1.93 4.65H9.223z"/>
  </svg>
);

// Database Icons
const MySQLIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#4479A1">
    <path d="M16.405 5.501c-1.21 0-1.891.74-2.29 1.383-.4.642-.597 1.498-.597 2.462 0 .963.197 1.82.597 2.462.399.643 1.08 1.383 2.29 1.383 1.197 0 1.878-.74 2.277-1.383.4-.642.597-1.499.597-2.462 0-.964-.197-1.82-.597-2.462-.399-.643-1.08-1.383-2.277-1.383zm-2.776 3.845c0-1.78.597-3.24 1.786-4.23 1.19-.99 2.776-1.48 4.58-1.48 1.804 0 3.39.49 4.58 1.48 1.19.99 1.786 2.45 1.786 4.23 0 1.78-.597 3.24-1.786 4.23-1.19.99-2.776 1.48-4.58 1.48-1.804 0-3.39-.49-4.58-1.48-1.19-.99-1.786-2.45-1.786-4.23z"/>
  </svg>
);

const PostgreSQLIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#336791">
    <path d="M23.5597 14.3101c-.3047-1.8892-1.8892-3.4737-3.7784-3.7784V9.9317c1.8892-.3047 3.4737-1.8892 3.7784-3.7784h.5996c.3047-1.8892 1.8892-3.4737 3.7784-3.7784V-1.8h-1.8v.5996c-1.8892.3047-3.4737 1.8892-3.7784 3.7784h-.5996c-.3047 1.8892-1.8892 3.4737-3.7784 3.7784v.5996c1.8892.3047 3.4737 1.8892 3.7784 3.7784h.5996z"/>
  </svg>
);

const MongoDBIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#47A248">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.533 3.682-4.533 10.02 0 7.182 5.223 11.83 5.577 12.105.23.18.46.343.673.48.106-.314.18-.64.23-.97.261-1.856.176-2.918.02-4.307-.02-.19-.04-.38-.06-.57-.15-1.48-.34-3.195-.34-4.99 0-1.795.19-3.51.34-4.99.02-.19.04-.38.06-.57.156-1.389.241-2.451-.02-4.307-.05-.33-.124-.656-.23-.97-.213-.137-.443-.3-.673-.48-.354-.275-5.577-4.923-5.577-12.105 0-6.338 3.81-9.454 4.533-10.02.468-.499.487-.689.523-1.184.205.486.455 1.046.735 1.44.321.701 3.309 2.535 4.573 8.115.08.35.15.69.2 1.04.05-.35.12-.69.2-1.04zm-.52 1.01c-.05.35-.12.69-.2 1.04-.05.35-.12.69-.2 1.04-.15 1.48-.34 3.195-.34 4.99 0 1.795.19 3.51.34 4.99.08.35.15.69.2 1.04.05-.35.12-.69.2-1.04.15-1.48.34-3.195.34-4.99 0-1.795-.19-3.51-.34-4.99z"/>
  </svg>
);

// Version Control Icons
const GitIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#F05032">
    <path d="M23.546 10.93L13.067 0.45c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.379-.07 1.889.44.516.515.658 1.258.438 1.9l2.658 2.66c.643-.223 1.387-.083 1.9.435.721.72.721 1.888 0 2.606-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-2.004L9.867 8.884c-.005.001-.01.003-.015.003-.667-.268-1.464-.13-2.003.41-.721.721-.721 1.889 0 2.611.72.719 1.884.719 2.604 0 .514-.514.658-1.258.435-1.9l2.605-2.603v6.824h1.544c.402 0 .727.332.727.74 0 .409-.325.74-.727.74H9.78c-.402 0-.726-.331-.726-.74V9.7l-1.01-1.01-6.864 6.863c-.604.604-.604 1.582 0 2.188l10.479 10.478c.603.604 1.582.604 2.186 0l10.431-10.429c.605-.604.605-1.582 0-2.187"/>
  </svg>
);

const GitHubIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const GitLabIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#FC6D26">
    <path d="M23.955 13.587l-1.159-3.556a.5.5 0 00-.2-.281L12.739 4.5a.5.5 0 00-.477 0L1.404 9.75a.5.5 0 00-.2.281l-1.159 3.556a.5.5 0 00.1.506l11.25 11.25a.5.5 0 00.707 0l11.25-11.25a.5.5 0 00.1-.506zM12 4.5L2.5 9.5l9.5 5 9.5-5L12 4.5z"/>
  </svg>
);

// Tools Icons
const DockerIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
    <path d="M13.983 11.103h2.119a.186.186 0 00.186-.186V8.798a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.186.186v2.119a.186.186 0 00.186.186zm-3.627 0h2.119a.186.186 0 00.186-.186V8.798a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.186.186v2.119a.186.186 0 00.186.186zm-3.627 0h2.119a.186.186 0 00.186-.186V8.798a.186.186 0 00-.186-.186H6.729a.186.186 0 00-.186.186v2.119a.186.186 0 00.186.186zm-3.627 0h2.119a.186.186 0 00.186-.186V8.798a.186.186 0 00-.186-.186H3.102a.186.186 0 00-.186.186v2.119a.186.186 0 00.186.186zm15.255-3.627H18.51a.186.186 0 00-.186.186v2.119a.186.186 0 00.186.186h2.119a.186.186 0 00.186-.186V7.662a.186.186 0 00-.186-.186zm0 3.627h-2.119a.186.186 0 00-.186.186v2.119a.186.186 0 00.186.186h2.119a.186.186 0 00.186-.186v-2.119a.186.186 0 00-.186-.186zM8.729 7.476h2.119a.186.186 0 00.186-.186V5.171a.186.186 0 00-.186-.186H8.729a.186.186 0 00-.186.186v2.119a.186.186 0 00.186.186zm-3.627 0h2.119a.186.186 0 00.186-.186V5.171a.186.186 0 00-.186-.186H5.102a.186.186 0 00-.186.186v2.119a.186.186 0 00.186.186zm18.51-2.933h-1.86c-.026-.178-.08-.347-.15-.511-.045-.105-.1-.21-.155-.315a3.902 3.902 0 00-.25-.368 3.624 3.624 0 00-1.238-1.053 3.902 3.902 0 00-.368-.25 3.624 3.624 0 00-1.053-.238 3.902 3.902 0 00-.368-.05c-.178-.026-.347-.08-.511-.15a3.624 3.624 0 00-1.238-.15H4.729a3.624 3.624 0 00-1.238.15c-.164.07-.333.124-.511.15a3.902 3.902 0 00-.368.05 3.624 3.624 0 00-1.053.238 3.902 3.902 0 00-.368.25 3.624 3.624 0 00-1.238 1.053 3.902 3.902 0 00-.25.368c-.055.105-.11.21-.155.315-.07.164-.124.333-.15.511H.186A.186.186 0 000 4.729v14.542a.186.186 0 00.186.186h23.628a.186.186 0 00.186-.186V4.729a.186.186 0 00-.186-.186zM1.86 4.729h20.28v13.17H1.86V4.729z"/>
  </svg>
);

// ============================================
// SKILLS DATA WITH ICONS
// ============================================
const getSkillsData = (t) => [
  {
    id: 'programming',
    name: t('skills.categories.programming'),
    icon: Code2,
    color: '#8d6a9f',
    skills: [
      { name: t('skills.programming.js'), icon: <JavaScriptIcon /> },
      { name: t('skills.programming.python'), icon: <PythonIcon /> },
      { name: t('skills.programming.php'), icon: <PHPIcon /> }
    ]
  },
  {
    id: 'web',
    name: t('skills.categories.web'),
    icon: Globe,
    color: '#61DAFB',
    skills: [
      { name: t('skills.web.frontend'), icon: <><HTMLIcon /><CSSIcon /></> },
      { name: t('skills.web.frameworks'), icon: <><ReactIcon /><VueIcon /></> },
      { name: t('skills.web.styling'), icon: <><TailwindIcon /><BootstrapIcon /></> }
    ]
  },
  {
    id: 'backend',
    name: t('skills.categories.backend'),
    icon: Server,
    color: '#339933',
    skills: [
      { name: t('skills.backend.nodejs'), icon: <NodeJSIcon /> },
      { name: t('skills.backend.laravel'), icon: <LaravelIcon /> }
    ]
  },
  {
    id: 'databases',
    name: t('skills.categories.databases'),
    icon: Database,
    color: '#4479A1',
    skills: [
      { name: t('skills.databases.relational'), icon: <><MySQLIcon /><PostgreSQLIcon /></> },
      { name: t('skills.databases.nosql'), icon: <MongoDBIcon /> },
      { name: t('skills.databases.tools'), icon: <Database className="w-6 h-6" /> }
    ]
  },
  {
    id: 'versionControl',
    name: t('skills.categories.versionControl'),
    icon: GitBranch,
    color: '#F05032',
    skills: [
      { name: t('skills.versionControl.git'), icon: <GitIcon /> },
      { name: t('skills.versionControl.hosting'), icon: <><GitHubIcon /><GitLabIcon /></> }
    ]
  },
  {
    id: 'softSkills',
    name: t('skills.categories.softSkills'),
    icon: Users,
    color: '#8d6a9f',
    skills: [
      { name: t('skills.softSkills.problemSolving'), icon: <Code2 className="w-6 h-6" /> },
      { name: t('skills.softSkills.communication'), icon: <Users className="w-6 h-6" /> },
      { name: t('skills.softSkills.timeManagement'), icon: <TrendingUp className="w-6 h-6" /> },
      { name: t('skills.softSkills.adaptability'), icon: <Rocket className="w-6 h-6" /> },
      { name: t('skills.softSkills.attentionToDetail'), icon: <Award className="w-6 h-6" /> }
    ]
  },
  {
    id: 'tools',
    name: t('skills.categories.tools'),
    icon: Wrench,
    color: '#FFD700',
    skills: [
      { name: t('skills.tools.ides'), icon: <Code2 className="w-6 h-6" /> },
      { name: t('skills.tools.localEnv'), icon: <DockerIcon /> },
      { name: t('skills.tools.documentation'), icon: <Wrench className="w-6 h-6" /> }
    ]
  }
];

// ============================================
// COMPONENTS
// ============================================

/**
 * Skill Item Component
 */
const SkillItem = ({ skill, index, isVisible, delay }) => {
  return (
    <div
      className="mb-4 transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="flex items-center gap-3 p-4 rounded-xl"
        style={{
          background: DESIGN_CONFIG.colors.surface,
          border: `1px solid ${DESIGN_CONFIG.colors.border}`
        }}
      >
        <div className="shrink-0 flex items-center justify-center w-10 h-10"
          style={{
            color: DESIGN_CONFIG.colors.accent
          }}
        >
          {skill.icon}
        </div>
        <span className="font-medium flex-1" style={{ color: DESIGN_CONFIG.colors.text.primary }}>
          {skill.name}
        </span>
      </div>
    </div>
  );
};

/**
 * Skill Category Card Component
 */
const SkillCategory = ({ category, index, isVisible }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const Icon = category.icon;

  useEffect(() => {
    if (isVisible && cardRef.current) {
      const delay = index * DESIGN_CONFIG.animations.stagger;
      const timer = setTimeout(() => {
        cardRef.current.style.opacity = '1';
        cardRef.current.style.transform = 'translateY(0) scale(1)';
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-2xl transition-all duration-500"
      style={{
        background: DESIGN_CONFIG.colors.surface,
        border: `1px solid ${DESIGN_CONFIG.colors.border}`,
        opacity: 0,
        transform: 'translateY(20px) scale(0.95)',
        boxShadow: isExpanded
          ? `0 20px 60px ${DESIGN_CONFIG.colors.accentLight}`
          : '0 4px 20px rgba(0,0,0,0.3)'
      }}
    >
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-center justify-between transition-all duration-300 hover:bg-opacity-50"
        style={{
          background: isExpanded ? `${DESIGN_CONFIG.colors.accent}10` : 'transparent'
        }}
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: `${category.color}20`,
              border: `2px solid ${category.color}40`,
              transform: isExpanded ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
            }}
          >
            <Icon className="w-7 h-7" style={{ color: category.color }} />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold mb-1"
              style={{ color: DESIGN_CONFIG.colors.text.primary }}
            >
              {category.name}
            </h3>
            <p className="text-sm"
              style={{ color: DESIGN_CONFIG.colors.text.secondary }}
            >
              {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
            </p>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: isExpanded ? DESIGN_CONFIG.colors.accent : DESIGN_CONFIG.colors.surfaceHover,
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            style={{ color: DESIGN_CONFIG.colors.text.primary }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Skills List */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: isExpanded ? '1000px' : '0',
          opacity: isExpanded ? 1 : 0
        }}
      >
        <div className="px-6 pb-6">
          {category.skills.map((skill, skillIndex) => (
            <SkillItem
              key={skillIndex}
              skill={skill}
              index={skillIndex}
              isVisible={isExpanded}
              delay={skillIndex * 50}
            />
          ))}
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${category.color}10, transparent 70%)`,
          opacity: isExpanded ? 1 : 0
        }}
      />
    </div>
  );
};

/**
 * Skill Stat Card Component
 */
const SkillStatCard = ({ icon: Icon, value, label, color, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      const stepDuration = duration / steps;
      
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-2xl p-6 transition-all duration-500"
      style={{
        background: DESIGN_CONFIG.colors.surface,
        border: `1px solid ${DESIGN_CONFIG.colors.border}`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{
            background: `${color}20`,
            border: `2px solid ${color}40`
          }}
        >
          <Icon className="w-7 h-7" style={{ color: color }} />
        </div>
        <div>
          <div className="text-3xl font-bold mb-1"
            style={{ color: DESIGN_CONFIG.colors.text.primary }}
          >
            {count}+
          </div>
          <div className="text-sm"
            style={{ color: DESIGN_CONFIG.colors.text.secondary }}
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================
export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useI18n();

  const skillsCategories = getSkillsData(t);
  const totalSkills = skillsCategories.reduce((sum, cat) => sum + cat.skills.length, 0);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePrevious = () => {
    setCurrentCategoryIndex((prev) => 
      prev === 0 ? skillsCategories.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentCategoryIndex((prev) => 
      prev === skillsCategories.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen relative overflow-hidden"
      style={{
        background: DESIGN_CONFIG.colors.background
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 opacity-10"
          style={{
            background: `radial-gradient(circle, ${DESIGN_CONFIG.colors.accent}, transparent)`,
            filter: 'blur(80px)'
          }}
        />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 opacity-10"
          style={{
            background: `radial-gradient(circle, ${DESIGN_CONFIG.colors.accent}, transparent)`,
            filter: 'blur(80px)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: `${DESIGN_CONFIG.colors.accent}20`,
              border: `1px solid ${DESIGN_CONFIG.colors.accent}40`
            }}
          >
            <Rocket className="w-4 h-4" style={{ color: DESIGN_CONFIG.colors.accent }} />
            <span className="text-sm font-medium" style={{ color: DESIGN_CONFIG.colors.accent }}>
              {t('skills.title')}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ color: DESIGN_CONFIG.colors.text.primary }}
          >
            {t('skills.title')}
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: DESIGN_CONFIG.colors.text.secondary }}
          >
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <SkillStatCard
            icon={Award}
            value={skillsCategories.length}
            label={t('skills.stats.categories')}
            color={DESIGN_CONFIG.colors.accent}
            delay={0}
          />
          <SkillStatCard
            icon={Code2}
            value={totalSkills}
            label={t('skills.stats.totalSkills')}
            color="#00FF88"
            delay={100}
          />
          <SkillStatCard
            icon={TrendingUp}
            value={3}
            label={t('skills.stats.yearsExp')}
            color="#00BFFF"
            delay={200}
          />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mb-8 flex items-center justify-between gap-4">
          <button
            onClick={handlePrevious}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
            style={{
              background: DESIGN_CONFIG.colors.surface,
              border: `1px solid ${DESIGN_CONFIG.colors.border}`,
              color: DESIGN_CONFIG.colors.text.primary
            }}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>{t('skills.previous')}</span>
          </button>
          <select
            value={currentCategoryIndex}
            onChange={(e) => setCurrentCategoryIndex(Number(e.target.value))}
            className="flex-1 px-4 py-2 rounded-lg"
            style={{
              background: DESIGN_CONFIG.colors.surface,
              border: `1px solid ${DESIGN_CONFIG.colors.border}`,
              color: DESIGN_CONFIG.colors.text.primary
            }}
          >
            {skillsCategories.map((cat, idx) => (
              <option key={cat.id} value={idx}>{cat.name}</option>
            ))}
          </select>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
            style={{
              background: DESIGN_CONFIG.colors.surface,
              border: `1px solid ${DESIGN_CONFIG.colors.border}`,
              color: DESIGN_CONFIG.colors.text.primary
            }}
          >
            <span>{t('skills.next')}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Hint */}
        <p className="md:hidden text-center text-sm mb-8"
          style={{ color: DESIGN_CONFIG.colors.text.tertiary }}
        >
          {t('skills.mobileHint')}
        </p>

        {/* Skills Categories - Desktop: All, Mobile: Current */}
        <div className="space-y-6">
          {skillsCategories.map((category, index) => {
            // On mobile, only show current category
            const shouldShow = !isMobile || index === currentCategoryIndex;
            return shouldShow ? (
            <SkillCategory
              key={category.id}
              category={category}
              index={index}
              isVisible={isVisible}
            />
            ) : null;
          })}
        </div>
      </div>
    </section>
  );
}
