<template>
	<div class="feedContainer flex flex-col sm:w-96 md:max-w-lg rounded-2xl mb-4">
		<div class="header px-4 py-2 h-12 w-auto">
			<h1 class="title text-3xl font-bold">Tweets</h1>
		</div>
		<div
			v-for="users in feed"
			:key="users.id"
			class="tweet w-auto flex flex-col"
		>
			<div class="flex w-auto p-3 inline-flex">
				<div class="w-16 h-16 mr-2">
					<img class="rounded-full" :src="users.avatar" alt="Foto de perfil" />
				</div>
				<div class="flex flex-1 w-auto flex-col">
					<div class="items-center inline-flex gap-3 mt-4 mb-1">
						<h2 class="text-lg font-semibold">
							{{ users.name }}
						</h2>
						<h5 class="text-sm font-light">@{{ users.userName }}</h5>
					</div>
					<div class="mb-2">
						<p class="w-auto">
							{{ users.tweet }}
						</p>
					</div>
					<div class="inline-flex w-auto justify-between ml-4">
						<a class="text-xs" href="#"> Expandir </a>

						<div class="inline-flex items-center gap-2">
							<ImgLike :count="users.favorites" :id="users.id" />
							<ImgReply />
							<ImgRetweet />
							<ImgMore />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import axios from "axios";

type Feed = {
	name: {
		firstName: string;
		lastName: string;
	};
	userName: string;
	avatar: string;
	tweet: string;
};

export default {
	data() {
		return {
			feed: [] as Feed[],
		};
	},

	mounted() {
		axios.get("api/users").then((res) => {
			this.feed = res.data.users;
		});
	},
};
</script>

<style lang="scss">
.feedContainer {
	background-color: var(--xx-gray);
	border: 1px solid var(--light-gray);

	.header .title {
		color: var(--dark-gray);
	}

	.tweet {
		&::before {
			content: "";
			display: block;
			height: 1px;
			background-color: var(--light-gray);
		}
	}
}
</style>
