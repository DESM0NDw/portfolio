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
    title: 'Desmond Wong, KI-Augmented Developer',
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
      p1: 'Ich baue Software, die Leute von wiederkehrender Arbeit befreit: Automatisierungen, KI-Tools, Fullstack-Apps.',
      p2: 'IT-Ausbildung, danach TechLabs Data Science (2025). Seitdem selbst weitergemacht: erste eigene Projekte gebaut, deployt, an echten Problemen gelernt.',
      p3: 'Ich suche eine Remote-Stelle als Developer, um professionelle Erfahrung zu sammeln und dabei an eigenen Sachen weiterzuarbeiten.',
    },
    projects: {
      heading: 'Projekte',
      p1: {
        badge: 'In Entwicklung',
        name: 'Business-Software für Selbstständige',
        desc: 'Ich wollte ein Tool, das für mich funktioniert, nicht drei separate Apps. Alles in einer Oberfläche: Nachrichten aus Telegram, E-Mail, Teams und WhatsApp, Zeiterfassung, Rechnungen und Belegerfassung per Foto.',
        demo: 'Live Demo ansehen',
      },
      p2: {
        badge: 'Experiment',
        name: 'Multi-Agent Frameworks im Vergleich',
        desc: 'Ich wollte verstehen, wie mehrere KI-Agenten zusammenarbeiten, wann es sinnvoll ist und wann es über das Ziel hinausschießt. Getestet: CrewAI, OpenAI Swarm, AutoGen und weitere.',
        poc: 'Proof of Concept',
      },
    },
    stack: { heading: 'Stack & Tools' },
    showcases: {
      heading: 'Showcases',
      subheading: 'Drei Automatisierungen zum selbst Ausprobieren, jede löst ein konkretes Problem aus dem Arbeitsalltag.',
      s1: {
        badge: 'Live',
        name: 'Dokumente per Chat durchsuchen',
        desc: 'Problem: Niemand liest 200-seitige Handbücher, also fragen neue Mitarbeiter lieber den Kollegen, der auch erst suchen muss. Lösung: Dokument hochladen, Frage stellen, Antwort mit Seitenangabe bekommt man in Sekunden.',
        link: 'Demo ausprobieren',
        url: 'https://pdf-demo.autonomika.de',
      },
      s2: {
        badge: 'Live',
        name: 'E-Mail-Postfach entlasten',
        desc: 'Problem: Jeden Morgen 50+ Mails, davon die Hälfte unwichtig, aber das weiß man erst nach dem Lesen. Lösung: Mails werden nach Dringlichkeit sortiert, Antwort-Entwürfe stehen bereit. Man prüft nur noch und schickt ab.',
        link: 'Demo ausprobieren',
        url: 'https://email-demo.autonomika.de',
      },
      s3: {
        badge: 'Live',
        name: 'Meeting-Protokoll automatisch',
        desc: 'Problem: Nach jedem Meeting weiß keiner mehr genau, was beschlossen wurde. To-Dos verschwinden, Verantwortlichkeiten auch. Lösung: Transkript einfügen, fertig kommt: Entscheidungen, offene Punkte, wer macht was bis wann.',
        link: 'Demo ausprobieren',
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
    title: 'Desmond Wong, AI-Augmented Developer',
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
      p1: 'I build software that takes repetitive work off people\'s plates: automations, AI tools, full-stack apps.',
      p2: 'IT degree, then TechLabs Data Science (2025). Since then: built and shipped my own projects, learned from real problems along the way.',
      p3: "Looking for a remote developer role to build professional experience while continuing work on my own projects.",
    },
    projects: {
      heading: 'Projects',
      p1: {
        badge: 'In Development',
        name: 'Business Software for Freelancers',
        desc: 'I wanted a tool that actually worked for me, not three separate apps. Everything in one place: messages from Telegram, email, Teams and WhatsApp, time tracking, invoicing, and receipt capture by photo.',
        demo: 'View Live Demo',
      },
      p2: {
        badge: 'Experiment',
        name: 'Multi-Agent Frameworks Compared',
        desc: 'I wanted to understand how multiple AI agents work together, when it makes sense and when it overcomplicates things. Tested: CrewAI, OpenAI Swarm, AutoGen, and others.',
        poc: 'Proof of Concept',
      },
    },
    stack: { heading: 'Stack & Tools' },
    showcases: {
      heading: 'Showcases',
      subheading: 'Three automations you can try yourself, each one solving a real problem from everyday work.',
      s1: {
        badge: 'Live',
        name: 'Search Documents by Chat',
        desc: 'Problem: Nobody reads 200-page manuals, so new employees ask a colleague who also has to go look it up. Solution: Upload a document, ask a question, get the answer with a page reference in seconds.',
        link: 'Try the demo',
        url: 'https://pdf-demo.autonomika.de',
      },
      s2: {
        badge: 'Live',
        name: 'Clear Your Inbox Faster',
        desc: "Problem: 50+ emails every morning, half of them low-priority, but you only know that after reading them. Solution: Emails get sorted by urgency and reply drafts are ready to go. You just review and send.",
        link: 'Try the demo',
        url: 'https://email-demo.autonomika.de',
      },
      s3: {
        badge: 'Live',
        name: 'Automatic Meeting Notes',
        desc: "Problem: After every meeting, nobody quite remembers what was decided. Action items disappear, ownership gets fuzzy. Solution: Paste the transcript, get back: decisions made, open questions, who does what by when.",
        link: 'Try the demo',
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
