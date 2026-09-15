<script lang="ts">
	let { item: data } = $props();
	// console.log(data);
</script>

<div class="card">
	<div class="image">
		<img src={data.image} alt="" srcset="" />
	</div>
	<div class="summary">
		<div class="name"><h1>{data.name}</h1></div>
		<div class="description">{data.description}</div>
		<!-- <div class="tags">
			{#each data.tags as tag (tag)}
				<div class="tag">{tag}</div>
			{/each}
		</div> -->
	</div>
	<div class="values">
		<div class="prices">
			<div class="buy">Purchase: {data.purchasePrice}</div>
			<div class="sell">Sell: {data.sellPrice}</div>
		</div>
		<div class="stats">
			<div class="stat1">Days to Mature: {data.daysToMature}</div>
			<div class="stat2">Days to Produce: {data.daysToProduce}</div>
		</div>
	</div>
	<div class="products">
		{#each [data.produce, data.deluxeProduce].filter(Boolean) as product (product.id)}
			<div class="product">
				<div class="image_product">
					<img src={product.image} alt="" />
				</div>
				<div class="summary_product">Name: {product.name}</div>
				<!-- <div class="tags_product">
						<div class="tag">Tag: {product.tag}</div>
					</div> -->
				<div class="prices_product">
					<!-- <div class="buy_product">Purchase: {product.purchasePrice}</div> -->
					<div class="sell_product">Sell: {product.sellPrice}</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
</style>
