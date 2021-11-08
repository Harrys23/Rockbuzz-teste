<template>
	<div class="perfilContainer rounded-2xl flex flex-col min-w-auto h-auto">
		<div class="perfil flex flex-col w-full p-3">
			<div class="inline-flex">
				<img
					class="w-16 h-16 rounded-full"
					:src="perfil.avatar"
					alt="Sua foto de perfil"
				/>
				<div class="ml-3 flex flex-col">
					<h2 class="font-semibold">{{ perfil.nome }}</h2>
					<p class="font-sm font-light">@{{ perfil.usuario }}</p>
				</div>
			</div>
			<div class="perfilInfo inline-flex justify-center">
				<div class="inline-flex gap-4">
					<div class="Tweets">
						<p>Tweets</p>
						<p>{{ perfil.tweets }}</p>
					</div>
					<div class="seguidores">
						<p>Seguidores</p>
						<p>{{ perfil.seguidores }}</p>
					</div>
					<div class="seguindo">
						<p>Seguindo</p>
						<p>{{ perfil.seguindo }}</p>
					</div>
				</div>
			</div>
		</div>

		<div class="teste flex flex-col justify-center">
			<div class="inline-flex justify-center p-3">
				<input
					class="w-11/12"
					type="text"
					placeholder="O que está acontecendo?"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import faker from "faker";

export default {
	data() {
		return {
			perfil: {
				headerImg: faker.image.image(),
				nome: faker.name.findName(),
				avatar: faker.image.avatar(),
				usuario: faker.internet.userName(),
				seguidores: faker.datatype.number(999),
				seguindo: faker.datatype.number(999),
				tweets: faker.datatype.number(999),
			},
		};
	},
};
</script>

<style lang="scss">
.perfilContainer {
	background-color: var(--xx-gray);
	border: 1px solid var(--light-gray);

	.teste::before {
		content: "";
		display: block;
		height: 1px;
		background-color: var(--light-gray);
	}

	input {
		border-radius: 50px;
		border: 1px solid var(--dark-gray);
		padding-left: 1rem;
	}
}
</style>
