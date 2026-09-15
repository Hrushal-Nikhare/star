<script>
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	const emojis = {
		// TODO add the rest!
		420: '🫠',
		500: '💥'
	};
	onMount(() => {
		// console.log(page);
        setTimeout(() => {
            document.location.href = '/';
        }, 10000);
	});
</script>

<div class="content">
	<div class="centerd">
		<h1>{page.status} {page.error.message}</h1>
		<span>
			{emojis[page.status] ?? emojis[500]}
		</span>
	</div>
</div>

<style>
	span {
		font-size: 10rem;
	}
	h1 {
		font-size: 3rem;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>
