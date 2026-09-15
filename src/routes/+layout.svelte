<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	import { onMount } from 'svelte';
	import { tsParticles } from '@tsparticles/engine';
	import { loadMeteorsPreset } from '@tsparticles/preset-meteors';

	let container;

	loadMeteorsPreset(tsParticles);

	onMount(() => {
		container?.destroy();
		container = tsParticles.load({
			id: 'tsparticles',
			options: {
				preset: 'meteors',
				fullScreen: {
					enable: true,
					zIndex: -1
				},
				background: {
					opacity: 0
				},
				particles: {
					move: {
						outModes: {
							default: 'out'
						}
					},
					paint: {
						fill: {
							enable: true,
							color: {
								value: ['#60a5fa', '#a78bfa', '#f472b6']
							}
						},
						stroke: {
							width: 2,
							color: {
								value: '#ffffff'
							}
						}
					},
					number: {
						value: 0,
						limit: {
							value: 50
						}
					}
				}
			}
		});
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div id="tsparticles"></div>
{@render children()}
