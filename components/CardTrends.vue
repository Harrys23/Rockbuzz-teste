<template>
	<div class="trendsContainer rounded-2xl min-w-auto">
		<div class="wrapper">
			<h1 class="header text-2xl font-bold p-3">Trends</h1>
		</div>
		<div class="flex flex-col p-2 gap-1">
			<a class="font-semibold" v-for="trend in trends" :key="trend" href="#">
				#{{ trend.tag }}
			</a>
		</div>
	</div>
</template>

<script lang="ts">
import faker from "faker";

export default {
	data() {
		return {
			trends: [
				{
					tag: faker.lorem.slug(),
				},
				{
					tag: faker.lorem.slug(),
				},
				{
					tag: faker.lorem.slug(),
				},
				{
					tag: faker.lorem.slug(),
				},
				{
					tag: faker.lorem.slug(),
				},
				{
					tag: faker.lorem.slug(),
				},
				{
					tag: faker.lorem.slug(),
				},
				{
					tag: faker.lorem.slug(),
				},
				{
					tag: faker.lorem.slug(),
				},
				{
					tag: faker.lorem.slug(),
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.trendsContainer {
	background-color: var(--xx-gray);
	border: 1px solid var(--light-gray);

	.wrapper::after {
		content: "";
		display: block;
		height: 1px;
		background-color: var(--light-gray);
	}

	.header {
		color: var(--dark-gray);
	}
}
</style>
