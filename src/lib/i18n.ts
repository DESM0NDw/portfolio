import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Lang = 'de' | 'en';

function createLangStore() {
  const initial: Lang = browser
    ? ((localStorage.getItem('lang') as Lang) ?? (navigator.language.startsWith('de') ? 'de' : 'en'))
    : 'de';
  const { subscribe, set } = writable<Lang>(initial);
  return {
    subscribe,
    set(lang: Lang) {
      if (browser) localStorage.setItem('lang', lang);
      set(lang);
    },
  };
}

export const lang = createLangStore();

export const t = {
  de: {
    title: 'Desmond Wong — KI-Augmented Developer',
    nav: { projects: 'Projekte', stack: 'Stack', contact: 'Kontakt' },
    hero: {
      badge: 'Offen für Remote-Positionen',
      subtitle: 'KI-Augmented Developer',
      meta: 'TechLabs Data Science (2025) · ITA-Abschluss · Self-taught',
      cta: 'Projekte ansehen',
      contact: 'Kontakt',
    },
    about: {
      heading: 'Über mich',
      p1: 'Self-taught KI-Augmented Developer mit Background in Data Science.',
      p2: 'Nach meinem ITA-Abschluss habe ich 2025 das TechLabs Data Science Bootcamp absolviert und mich seitdem auf Software-Entwicklung fokussiert — von Fullstack-Apps bis zu KI-gestützten Tools.',
      p3: 'Ich suche eine Remote-Position als Developer, um meine Skills weiterzuentwickeln und nebenbei an eigenen Projekten zu arbeiten.',
    },
    projects: {
      heading: 'Projekte',
      p1: {
        badge: 'In Entwicklung',
        name: 'KI-gestützte Business-Software',
        desc: 'Persönliches Tool für die Selbstständigkeit. Unified Inbox (Telegram, E-Mail, Teams, WhatsApp), Time Tracking, Invoicing, Expense-OCR mit KI und Client Portal.',
        demo: 'Live Demo ansehen',
      },
      p2: {
        badge: 'Experiment',
        name: 'Multi-Agent Frameworks',
        desc: 'Exploration verschiedener Multi-Agenten-Frameworks (CrewAI, OpenAI Swarm, Paperclip, AutoGen u. a.) — wie mehrere KI-Agenten sich koordinieren, um Aufgaben autonom abzuarbeiten. Vergleich von Ansätzen, Autonomiegraden und Workflow-Orchestrierung.',
        poc: 'Proof of Concept',
      },
    },
    stack: { heading: 'Stack & Tools' },
    showcases: {
      heading: 'KI-Automatisierung Showcases',
      subheading: 'Live-Demos zum Ausprobieren — gebaut mit Qdrant, Groq und Docker.',
      s1: {
        badge: 'Live',
        name: 'PDF-Wissens-Bot',
        desc: 'Dokumente, Handbücher oder Verträge hochladen — die KI beantwortet Fragen dazu mit Quellenangabe. Basiert auf RAG mit Vektor-Datenbank.',
        link: 'Demo ansehen',
        url: 'https://pdf-demo.autonomika.de',
      },
      s2: {
        badge: 'Live',
        name: 'KI-E-Mail-Assistent',
        desc: 'Eingehende E-Mails werden automatisch kategorisiert, priorisiert und Antwortvorschläge generiert. Spart 2–4 Stunden pro Woche.',
        link: 'Demo ansehen',
        url: 'https://email-demo.autonomika.de',
      },
      s3: {
        badge: 'Live',
        name: 'Meeting-Zusammenfassung',
        desc: 'Transcript einfügen — KI liefert Zusammenfassung, Entscheidungen und priorisierte To-Dos. Groq + FastAPI + SvelteKit.',
        link: 'Demo ansehen',
        url: 'https://meeting-demo.autonomika.de',
      },
    },
    contact: {
      heading: 'Kontakt',
      desc: 'Interesse an einem Gespräch? Ich freue mich auf deine Nachricht.',
    },
    footer: '© 2026 Desmond Wong · Alle Rechte vorbehalten',
  },
  en: {
    title: 'Desmond Wong — AI-Augmented Developer',
    nav: { projects: 'Projects', stack: 'Stack', contact: 'Contact' },
    hero: {
      badge: 'Open to remote positions',
      subtitle: 'AI-Augmented Developer',
      meta: 'TechLabs Data Science (2025) · IT Graduate · Self-taught',
      cta: 'View Projects',
      contact: 'Contact',
    },
    about: {
      heading: 'About me',
      p1: 'Self-taught AI-Augmented Developer with a background in Data Science.',
      p2: 'After completing my IT program, I completed the TechLabs Data Science Bootcamp in 2025 and have since focused on software development — from full-stack apps to AI-powered tools.',
      p3: "I'm looking for a remote position as a developer to grow my skills while working on my own projects on the side.",
    },
    projects: {
      heading: 'Projects',
      p1: {
        badge: 'In Development',
        name: 'AI-Powered Business Software',
        desc: 'Personal tool for freelancers. Unified Inbox (Telegram, Email, Teams, WhatsApp), Time Tracking, Invoicing, Expense-OCR with AI and Client Portal.',
        demo: 'View Live Demo',
      },
      p2: {
        badge: 'Experiment',
        name: 'Multi-Agent Frameworks',
        desc: 'Exploration of different multi-agent frameworks (CrewAI, OpenAI Swarm, Paperclip, AutoGen and others) — how multiple AI agents coordinate to autonomously complete tasks. Comparison of approaches, autonomy levels and workflow orchestration.',
        poc: 'Proof of Concept',
      },
    },
    stack: { heading: 'Stack & Tools' },
    showcases: {
      heading: 'AI Automation Showcases',
      subheading: 'Live demos you can try — built with Qdrant, Groq, and Docker.',
      s1: {
        badge: 'Live',
        name: 'PDF Knowledge Bot',
        desc: 'Upload documents, manuals, or contracts — the AI answers questions with source references. Built on RAG with a vector database.',
        link: 'View Demo',
        url: 'https://pdf-demo.autonomika.de',
      },
      s2: {
        badge: 'Live',
        name: 'AI Email Assistant',
        desc: 'Incoming emails are automatically categorized, prioritized, and reply suggestions are generated. Saves 2–4 hours per week.',
        link: 'View Demo',
        url: 'https://email-demo.autonomika.de',
      },
      s3: {
        badge: 'Live',
        name: 'Meeting Summary',
        desc: 'Paste a transcript — AI delivers a summary, decisions, and prioritized to-dos. Groq + FastAPI + SvelteKit.',
        link: 'View Demo',
        url: 'https://meeting-demo.autonomika.de',
      },
    },
    contact: {
      heading: 'Contact',
      desc: "Interested in a conversation? I'd love to hear from you.",
    },
    footer: '© 2026 Desmond Wong · All Rights Reserved',
  },
} as const;
