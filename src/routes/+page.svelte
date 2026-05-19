<script lang="ts">
	import { onMount } from 'svelte';
	import { lang, t } from '$lib/i18n';

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) entry.target.classList.add('visible');
				});
			},
			{ threshold: 0.1 }
		);
		document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	});

	const tx = $derived(t[$lang]);
</script>

<svelte:head>
	<title>{tx.title}</title>
</svelte:head>

<!-- Nav -->
<nav class="fixed top-0 left-0 right-0 z-50 bg-slate-50/90 backdrop-blur-sm border-b border-slate-200">
	<div class="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
		<span class="font-bold text-slate-900 tracking-tight">Desmond Wong</span>
		<div class="flex items-center gap-6 text-sm text-slate-600">
			<a href="#projekte" class="hover:text-amber-500 transition-colors">{tx.nav.projects}</a>
			<a href="#showcases" class="hover:text-amber-500 transition-colors">Showcases</a>
			<a href="#stack" class="hover:text-amber-500 transition-colors">{tx.nav.stack}</a>
			<button
				onclick={() => lang.set($lang === 'de' ? 'en' : 'de')}
				class="text-slate-500 hover:text-slate-800 font-medium transition-colors tabular-nums"
			>
				{$lang === 'de' ? 'EN' : 'DE'}
			</button>
			<a
				href="#kontakt"
				class="bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-4 py-1.5 rounded-lg transition-colors"
			>
				{tx.nav.contact}
			</a>
		</div>
	</div>
</nav>

<!-- Hero -->
<section class="min-h-screen flex items-center pt-14 bg-slate-900">
	<div class="max-w-4xl mx-auto px-6 py-24">
		<div class="fade-in">
			<div class="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium px-3 py-1 rounded-full mb-8">
				<span class="h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
				{tx.hero.badge}
			</div>
			<h1 class="text-5xl sm:text-7xl font-extrabold text-white tracking-tight mb-6">
				Desmond Wong
			</h1>
			<p class="text-xl sm:text-2xl text-slate-300 font-medium mb-4">
				{tx.hero.subtitle}
			</p>
			<p class="text-slate-400 mb-10 max-w-xl leading-relaxed">
				{tx.hero.meta}
			</p>
			<div class="flex flex-wrap gap-4">
				<a
					href="#projekte"
					class="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
				>
					{tx.hero.cta}
				</a>
				<a
					href="#kontakt"
					class="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors"
				>
					{tx.hero.contact}
				</a>
			</div>
		</div>
	</div>
</section>

<!-- About -->
<section id="about" class="py-24 bg-white">
	<div class="max-w-4xl mx-auto px-6">
		<div class="fade-in max-w-2xl">
			<h2 class="text-3xl font-bold text-slate-900 mb-6">{tx.about.heading}</h2>
			<p class="text-slate-600 leading-relaxed mb-4">{tx.about.p1}</p>
			<p class="text-slate-600 leading-relaxed mb-4">{tx.about.p2}</p>
			<p class="text-slate-600 leading-relaxed">{tx.about.p3}</p>
		</div>
	</div>
</section>

<!-- Projekte -->
<section id="projekte" class="py-24 bg-slate-50">
	<div class="max-w-4xl mx-auto px-6">
		<h2 class="fade-in text-3xl font-bold text-slate-900 mb-12">{tx.projects.heading}</h2>
		<div class="grid sm:grid-cols-2 gap-6">

			<!-- Projekt 1 -->
			<div class="fade-in bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all">
				<div class="flex items-start justify-between mb-4">
					<div class="h-10 w-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
						<svg class="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
						</svg>
					</div>
					<span class="text-xs font-medium text-amber-600 bg-amber-50 border border-amber-100 px-2 py-1 rounded-full">{tx.projects.p1.badge}</span>
				</div>
				<h3 class="text-lg font-bold text-slate-900 mb-2">{tx.projects.p1.name}</h3>
				<p class="text-slate-500 text-sm leading-relaxed mb-4">{tx.projects.p1.desc}</p>
				<div class="flex flex-wrap gap-1.5 mb-5">
					{#each ['SvelteKit', 'Fastify', 'Prisma', 'PostgreSQL', 'Docker'] as tag}
						<span class="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{tag}</span>
					{/each}
				</div>
				<a
					href="https://office.autonomika.de"
					class="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
				>
					{tx.projects.p1.demo}
					<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
					</svg>
				</a>
			</div>

			<!-- Projekt 2 -->
			<div class="fade-in bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all">
				<div class="flex items-start justify-between mb-4">
					<div class="h-10 w-10 bg-slate-100 rounded-xl flex items-center justify-center">
						<svg class="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
						</svg>
					</div>
					<span class="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">{tx.projects.p2.badge}</span>
				</div>
				<h3 class="text-lg font-bold text-slate-900 mb-2">{tx.projects.p2.name}</h3>
				<p class="text-slate-500 text-sm leading-relaxed mb-4">{tx.projects.p2.desc}</p>
				<div class="flex flex-wrap gap-1.5 mb-5">
					{#each ['Python', 'CrewAI', 'OpenAI Swarm', 'Paperclip', 'AutoGen'] as tag}
						<span class="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{tag}</span>
					{/each}
				</div>
				<span class="text-sm text-slate-400 italic">{tx.projects.p2.poc}</span>
			</div>

		</div>
	</div>
</section>

<!-- Showcases -->
<section id="showcases" class="py-24 bg-slate-900">
	<div class="max-w-4xl mx-auto px-6">
		<div class="fade-in mb-12">
			<h2 class="text-3xl font-bold text-white mb-3">{tx.showcases.heading}</h2>
			<p class="text-slate-400">{tx.showcases.subheading}</p>
		</div>
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

			<!-- PDF Knowledge Bot -->
			<div class="fade-in bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/5 transition-all flex flex-col">
				<div class="flex items-start justify-between mb-4">
					<div class="h-10 w-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
						<svg class="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
						</svg>
					</div>
					<span class="inline-flex items-center gap-1.5 text-xs font-medium text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-1 rounded-full">
						<span class="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
						{tx.showcases.s1.badge}
					</span>
				</div>
				<h3 class="text-lg font-bold text-white mb-2">{tx.showcases.s1.name}</h3>
				<p class="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{tx.showcases.s1.desc}</p>
				<div class="flex flex-wrap gap-1.5 mb-4">
					{#each ['Qdrant', 'Groq', 'nomic-embed-text', 'RAG'] as tag}
						<span class="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded">{tag}</span>
					{/each}
				</div>
				<a href={tx.showcases.s1.url} target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors rounded-xl px-4 py-2">
					{tx.showcases.s1.link}
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
					</svg>
				</a>
			</div>

			<!-- E-Mail Assistent -->
			<div class="fade-in bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/5 transition-all flex flex-col">
				<div class="flex items-start justify-between mb-4">
					<div class="h-10 w-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
						<svg class="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
						</svg>
					</div>
					<span class="inline-flex items-center gap-1.5 text-xs font-medium text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-1 rounded-full">
						<span class="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
						{tx.showcases.s2.badge}
					</span>
				</div>
				<h3 class="text-lg font-bold text-white mb-2">{tx.showcases.s2.name}</h3>
				<p class="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{tx.showcases.s2.desc}</p>
				<div class="flex flex-wrap gap-1.5 mb-4">
					{#each ['Groq', 'FastAPI', 'SvelteKit', 'Docker', 'n8n'] as tag}
						<span class="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded">{tag}</span>
					{/each}
				</div>
				<a href={tx.showcases.s2.url} target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors rounded-xl px-4 py-2">
					{tx.showcases.s2.link}
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
					</svg>
				</a>
			</div>

			<!-- Meeting Summary -->
			<div class="fade-in bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-amber-500/30 hover:shadow-lg transition-all flex flex-col">
				<div class="flex items-start justify-between mb-4">
					<div class="h-10 w-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
						<svg class="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
						</svg>
					</div>
					<span class="text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-full">{tx.showcases.s3.badge}</span>
				</div>
				<h3 class="text-lg font-bold text-white mb-2">{tx.showcases.s3.name}</h3>
				<p class="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{tx.showcases.s3.desc}</p>
				<div class="flex flex-wrap gap-1.5 mb-4">
					{#each ['Groq', 'FastAPI', 'SvelteKit', 'Docker'] as tag}
						<span class="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded">{tag}</span>
					{/each}
				</div>
				<a href={tx.showcases.s3.url} target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors rounded-xl px-4 py-2">
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
					</svg>
					{tx.showcases.s3.link}
				</a>
			</div>

		</div>
	</div>
</section>

<!-- Stack -->
<section id="stack" class="py-24 bg-white">
	<div class="max-w-4xl mx-auto px-6">
		<h2 class="fade-in text-3xl font-bold text-slate-900 mb-12">{tx.stack.heading}</h2>
		<div class="fade-in grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each [
				{ label: 'Languages', items: [
					{ name: 'TypeScript', icon: 'typescript' },
					{ name: 'Python', icon: 'python' },
					{ name: 'SQL', icon: null },
				]},
				{ label: 'Frontend', items: [
					{ name: 'SvelteKit', icon: 'svelte' },
					{ name: 'Tailwind CSS', icon: 'tailwindcss' },
					{ name: 'HTML/CSS', icon: 'html5' },
				]},
				{ label: 'Backend', items: [
					{ name: 'Fastify', icon: 'fastify' },
					{ name: 'Node.js', icon: 'nodedotjs' },
					{ name: 'Prisma', icon: 'prisma' },
					{ name: 'REST APIs', icon: null },
				]},
				{ label: 'Database', items: [
					{ name: 'PostgreSQL', icon: 'postgresql' },
				]},
				{ label: 'DevOps', items: [
					{ name: 'Docker', icon: 'docker' },
					{ name: 'Git', icon: 'git' },
					{ name: 'Linux', icon: 'linux' },
					{ name: 'Traefik', icon: 'traefikproxy' },
					{ name: 'Hostinger', icon: null },
				]},
				{ label: 'KI & Tools', items: [
					{ name: 'Claude Code', icon: 'anthropic' },
					{ name: 'Ollama', icon: 'ollama' },
					{ name: 'OpenClaw', icon: null },
					{ name: 'n8n', icon: 'n8n' },
					{ name: 'VS Code', icon: null },
					{ name: 'GitHub', icon: 'github' },
				]},
			] as group}
				<div class="bg-slate-50 rounded-xl p-5">
					<p class="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">{group.label}</p>
					<div class="flex flex-wrap gap-2">
						{#each group.items as item}
							<span class="inline-flex items-center gap-1.5 text-sm text-slate-700 font-medium bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
								{#if item.icon}
									<img
										src="https://cdn.simpleicons.org/{item.icon}"
										alt={item.name}
										class="h-4 w-4 object-contain"
									/>
								{/if}
								{item.name}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Kontakt -->
<section id="kontakt" class="py-24 bg-slate-900">
	<div class="max-w-4xl mx-auto px-6 text-center">
		<div class="fade-in">
			<h2 class="text-3xl font-bold text-white mb-4">{tx.contact.heading}</h2>
			<p class="text-slate-400 mb-8 max-w-md mx-auto">{tx.contact.desc}</p>
			<a
				href="mailto:desmond.wong@autonomika.de"
				class="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
			>
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
				</svg>
				desmond.wong@autonomika.de
			</a>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="bg-slate-950 py-6 text-center text-slate-600 text-sm">
	{tx.footer} · <a href="/impressum" class="hover:text-slate-400 transition-colors">Impressum & Datenschutz</a>
</footer>

<style>
	:global(.fade-in) {
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.6s ease, transform 0.6s ease;
	}
	:global(.fade-in.visible) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
