<script>
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
							width: 1,
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
</script>

<div id="tsparticles"></div>
<div class="content">
	<div class="centerd">
		<h1 class="title">StarCalc</h1>
	</div>
	<div class="centerd">
		<div class="box">
			<div class="selection">
				<div><img src="images/crops/coffee-bean/stage-6.png" alt="" /></div>
				<div></div>
			</div>
			<div class="selection">
				<div><img src="images/artisan-goods/Wine.png" alt="" /></div>
				<div></div>
			</div>
			<div class="selection">
				<div><button type="button" id="like">Like</button></div>
				<div></div>
			</div>
			<div class="selection">
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</div>
