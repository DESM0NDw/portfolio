# desmond.autonomika.de — Portfolio

Personal portfolio of Desmond Wong, AI-Augmented Developer.

**Live:** https://desmond.autonomika.de

## Stack

- [SvelteKit](https://kit.svelte.dev/) + TypeScript
- Tailwind CSS
- Docker + Nginx
- Deployed on Hetzner Cloud via Nginx Proxy Manager

## Features

- DE/EN language toggle (persisted in localStorage)
- Projects, AI Automation Showcases, Stack, Contact sections
- Fade-in scroll animations
- Impressum & Datenschutzerklärung (DSGVO)

## Local Development

```bash
cd frontend
npm install
npm run dev
```

## Deploy

```bash
docker compose build --no-cache
docker compose up -d
```

Requires the `1panel-network` Docker network to exist on the host.
