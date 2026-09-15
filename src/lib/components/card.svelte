<script lang="ts">
	let data = $props();
</script>

<div class="card">
	<div class="image">
		<img src={data.image} alt="" srcset="" />
	</div>
	<div class="summary">
		<div class="name">{data.name}</div>
		<div class="description">{data.description}</div>
		<div class="tags">
			{#each data.tags as tag (tag)}
				<div class="tag">{tag}</div>
			{/each}
		</div>
	</div>
	<div class="values">
		<div class="prices">
			<div class="buy">{data.purchasePrice}</div>
			<div class="sell">{data.sellPrice}</div>
		</div>
		<div class="stats">
			<div class="stat1">{data.daysToMature}</div>
			<div class="stat2">{data.daysToProduce}</div>
		</div>
	</div>
	<div class="products">
		{#each data.produce as product (product)}
			<div class="product">
				<div class="image_product">
					<img src={product.image} alt="" />
				</div>
				<div class="summary_product">{product.name}</div>
				<div class="tags_product">
					<div class="tag">{product.tag}</div>
				</div>
				<div class="prices_product">
					<div class="buy_product">{product.purchasePrice}</div>
					<div class="sell_product">{product.sellPrice}</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
</style>
