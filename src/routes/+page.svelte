<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class="content">
	<div class="centerd">
		<h1 class="title">StarCalc</h1>
	</div>
	<div class="centerd">
		<div class="box">
			<div class="selection">
				<a href={resolve('/crops')}>
					<div>
						<img src="/images/crops/pumpkin/crop.png" alt="Crops" />
						Crops
					</div></a
				>
			</div>
			<div class="selection">
				<a href={resolve('/animals')}>
					<div>
						<img src="/images/animals/Duck.png" alt="Animals" />
						Animals
					</div>
				</a>
			</div>
			<div class="selection">
				<a href={resolve('/artisnal')}>
					<div>
						<img src="/images/artisan-goods/Wine.png" alt="Artisnal Goods" />
						Artisnal Goods
					</div>
				</a>
			</div>
			<div class="selection">
				<a href={resolve('/monster')}>
					<div>
						<img src="/images/monsters/Bat.png" alt="Monsters" />
						Monsters
					</div>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.content {
		min-height: 100vh;
		padding: clamp(2rem, 8vh, 5rem) 1rem;
	}

	h1.title {
		margin-bottom: 1.5rem;
		color: #f6d38a;
		text-shadow: 3px 3px 0 #6b3515;
	}

	div.selection a {
		color: var(--background-color);
		text-decoration: none;
	}

	div.box {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		gap: 8px;
		width: min(80vw, 900px);
		max-width: calc(100% - 2rem);
		padding: 16px;
		border: 3px solid #9b4f18;
		border-radius: 6px;
		box-shadow:
			inset 0 0 0 2px #ffd98b,
			0 6px 0 #06101c,
			0 10px 20px rgb(0 0 0 / 35%);
	}

	.selection {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		min-width: 0;
	}

	.selection a > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 8px;
		font-size: 1.35rem;
		padding: 12px 16px;
		border: 2px solid transparent;
		border-radius: 4px;
		transition:
			background-color 150ms ease,
			border-color 150ms ease,
			transform 150ms ease;
	}

	.selection a:hover > div,
	.selection a:focus-visible > div {
		background-color: rgb(255 235 174 / 45%);
		border-color: #d16f05;
		transform: translateY(-3px);
	}

	.selection img {
		width: 76px;
		height: 76px;
		object-fit: contain;
	}

	@media (max-width: 600px) {
		.content {
			padding-top: 2rem;
		}

		h1.title {
			font-size: 4rem;
		}

		div.box {
			flex-direction: column;
		}

		.selection {
			width: 100%;
		}
	}
</style>
