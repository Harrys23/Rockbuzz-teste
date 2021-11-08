<template>
	<div
		class="recomendedContainer rounded-2xl w-72 p-3 hidden xl:flex xl:flex-col"
	>
		<h1 class="header text-2xl font-bold">Who to follow</h1>
		<div class="flex flex-col">
			<div
				v-for="recomendado in recomendados"
				:key="recomendado"
				class="inline-flex items-center h-20 gap-2"
			>
				<img
					class="w-14 h-14 rounded-full"
					:src="recomendado.avatar"
					alt="Foto do perfil recomendado"
				/>
				<div class="flex flex-wrap gap-2">
					<p class="text-sm font-bold">{{ recomendado.name }}</p>
					<p class="text-sm">@{{ recomendado.userName }}</p>
				</div>
				<button class="font-semibold">Seguir</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import faker from "faker";

export default {
	data() {
		return {
			recomendados: [
				{
					name: faker.name.findName(),
					userName: faker.internet.userName(),
					avatar: faker.image.avatar(),
				},
				{
					name: faker.name.findName(),
					userName: faker.internet.userName(),
					avatar: faker.image.avatar(),
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.recomendedContainer {
	background-color: var(--xx-gray);
	border: 1px solid var(--light-gray);

	.header {
		color: var(--dark-gray);
	}

	button {
		background-color: var(--blue);
		color: var(--black);
		border-radius: 5px;
		padding: 5px 10px;
		font-size: 0.8rem;
		cursor: pointer;
		transition: 20ms;

		&:hover {
			filter: brightness(0.8);
		}
	}
}
</style>
