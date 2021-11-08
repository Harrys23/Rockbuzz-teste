<template>
	<nav class="navbar-container container min-w-full h-14">
		<div
			class="
				wrapper
				flex
				gap-14
				min-w-full
				h-full
				justify-evenly
				items-center
				px-6
			"
		>
			<div class="menu flex gap-3 sm:gap-2">
				<div class="home inline-flex items-center">
					<img src="~/assets/icons/House.svg" alt="Home" />
					<span class="md:flex hidden font-bold">Home</span>
				</div>
				<div class="notifications inline-flex items-center">
					<img src="~/assets/icons/Bell.svg" alt="Notificações" />
					<span class="md:flex hidden font-bold">Notificações</span>
				</div>
				<div class="discover inline-flex items-center">
					<img src="~/assets/icons/internet.svg" alt="Explorar" />
					<span class="md:flex hidden font-bold">Explorar</span>
				</div>
				<div class="profile inline-flex items-center">
					<img src="~/assets/icons/account.svg" alt="Perfil" />
					<span class="md:flex hidden font-bold">Perfil</span>
				</div>
			</div>
			<ImgLogo />

			<div class="search inline-flex gap-2">
				<div class="w-6"></div>
				<input class="h-7 w-0 sm:w-40" type="text" placeholder="Pesquisar" />
				<img src="~/assets/icons/chat.svg" alt="Mensagens" />
				<img src="~/assets/icons/Setting.svg" alt="Configurações" />
			</div>
		</div>
	</nav>
</template>

<script lang="ts"></script>

<style lang="scss">
.navbar-container {
	background-color: var(--light-gray);
	position: fixed;
	top: 0;
	border-bottom: 1px solid var(--black);
	.wrapper {
		position: relative;
		span {
			color: var(--black);
		}

		img {
			min-width: 1.5rem;
			min-height: 1.5rem;
		}

		.search input {
			border-radius: 50px;
			background-image: url("@/assets/icons/Magnifier.svg");
			background-repeat: no-repeat;
			background-position: 6px;
			background-size: 1.1rem;
			padding-left: 1.7rem;
		}
	}
}
</style>
