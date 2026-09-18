<script lang="ts">
	let { item: data, type } = $props();
	// console.log(data);
	// console.log(type);
	// const tags = data.type.split('-').join(' ').toLocaleLowerCase().replace(/\b\w/g, function (char) {
	// 	return char.toUpperCase();
	// });
</script>

{#if data.name !== 'Horse'}
	<div class="card">
		<div class="title">
			<div class="image">
				<img src={data.image} alt="" srcset="" />
			</div>
			<div class="summary">
				<div class="name"><h1>{data.name}</h1></div>
				<div class="description">{data.description}</div>
				<div class="tags">
					<!-- {#each data.tags as tag (tag)}
				<div class="tag">{tag}</div>
			{/each} -->
				</div>
				<br />
				<div class="type">
					{data.type
						.split('-')
						.join(' ')
						.toLocaleLowerCase()
						.replace(/\b\w/g, function (char) {
							return char.toUpperCase();
						})}
				</div>
			</div>
		</div>
		<br />
		<hr />
		<div class="values">
			<div class="prices">
				{#if data.purchasePrice !== null}
					<div class="buy"><span>Purchase</span><strong>{data.purchasePrice}g</strong></div>
				{/if}
				{#if Object.hasOwn(data, 'sellPrice')}
					<div class="sell"><span>Sell</span><strong>{data.sellPrice}g</strong></div>
				{/if}
			</div>
			{#if Object.hasOwn(data, 'daysToMature') || Object.hasOwn(data, 'daysToProduce')}
				<div class="stats">
					<div class="stat1"><span>To mature</span><strong>{data.daysToMature} days</strong></div>
					<div class="stat2"><span>To produce</span><strong>{data.daysToProduce} day</strong></div>
				</div>
			{/if}
		</div>
		{#if Object.hasOwn(data, 'produce') || Object.hasOwn(data, 'deluxeProduce')}
			<details class="products">
				<summary><strong>Products</strong></summary>
				{#each [data.produce, data.deluxeProduce].filter(Boolean) as product (product.id)}
					<div class="product">
						<div class="image_product">
							<img src={product.image} alt="" />
						</div>
						<div>
							<h3 class="summary_product">{product.name}</h3>
							{#if product === data.deluxeProduce}
								<div class="type">Deluxe Produce</div>
							{/if}
							<div class="prices_product">
								<!-- <div class="buy_product">Purchase: {product.purchasePrice}</div> -->
								<div class="sell_product">
									<span>Sell</span><strong>{product.sellPrice}g</strong>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</details>
		{/if}
	</div>
{/if}

<style>
	div.card {
		backdrop-filter: blur(10px);
		box-shadow: 0 10px 20px rgba(26, 26, 26, 0.35);
		/* border: 1px solid #ccc; */
		border: 2px solid #d6a99a;
		border-radius: 16px;
		margin: 10px;
		padding: 16px;
		width: fit-content;
		max-width: 45vw;
		/* width: 25vw; */

		.title {
			display: flex;
			flex: 1;
		}
		.image {
			margin: 8px;
			padding: 16px;
			/* border: 1px solid #ccc; */
			border-radius: 16px;
			/* width: fit-content; */
			min-width: 25%;
			/* height: 100%; */
			flex-shrink: 0;
			align-self: center;
			img {
				width: 100%;
			}
		}
		.summary {
			margin: 8px;
			padding: 16px;
		}
		.type {
			/* margin: 4px; */
			padding: 6px;
			/* border: 1px solid #ccc; */
			border: 1px solid  hwb(15 60% 16% / 0.5);
			border-radius: 16px;
			width: fit-content;
			background: linear-gradient(45deg, hwb(15 60% 16% / 0.23),hwb(29 76% 16% / 0.20));
		}
	}
	.values {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin: 14px 0;
	}
	.prices,
	.stats {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.buy,
	.sell,
	.stat1,
	.stat2 {
		display: flex;
		align-items: baseline;
		gap: 8px;
		padding: 8px 12px;
		border-radius: 10px;
		font-size: 0.82rem;
		letter-spacing: 0.04em;
		box-shadow: inset 0 0 0 1px rgb(255 255 255 / 12%);
	}
	.buy,
	.sell {
		background: linear-gradient(135deg, rgb(255 197 118 / 24%), rgb(209 111 5 / 20%));
		border: 1px solid rgb(255 197 118 / 45%);
	}
	.stat1,
	.stat2 {
		background: rgb(69 74 222 / 16%);
		border: 1px solid rgb(149 153 255 / 35%);
	}
	span {
		color: rgb(240 227 210 / 72%);
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
	strong {
		color: #ffe0a3;
		font-family: 'Calligraffitti', cursive;
		font-size: 1.15rem;
		font-weight: 700;
		letter-spacing: 0.02em;
	}
	details.products {
		margin: 16px 4px;
		padding: 16px;
		border: 1px solid #ccc;
		border-radius: 16px;

		/* backdrop-filter: blur(10px); */
		box-shadow: 0 10px 20px rgba(26, 26, 26, 0.35);
		summary {
			/* font-weight: bold; */
			font-size: 1rem;
		}
	}
	div.product {
		display: flex;
		flex: 1;
		margin: 16px;
		padding: 16px;
		border: 1px solid #ccc;
		border-radius: 16px;

		.image_product {
			margin: 8px;
			padding: 16px;
			border-radius: 16px;
			min-width: 10%;
			flex-shrink: 0;
			align-self: center;
			img {
				width: 100%;
			}
		}
		.type {
			font-size: 0.8rem;
			margin: 8px 0px;
			padding: 4px 8px;
		}
		.prices_product {
			margin-top: 8px;
		}
		.sell_product {
			display: flex;
			align-items: baseline;
			gap: 8px;
			width: fit-content;
			padding: 5px 10px;
			border: 1px solid rgb(255 197 118 / 35%);
			border-radius: 8px;
			background: rgb(255 197 118 / 12%);
		}
	}
</style>
