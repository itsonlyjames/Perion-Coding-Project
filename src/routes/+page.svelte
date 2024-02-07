<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import { onMount } from 'svelte';

	export let form;

	let totalPlayTime: number;
	let mostPlayedGame: { [key: string]: string };

	type gamesResponse = {
		playtime_forever: number;
	};

	onMount(() => {
		if (!form) return;

		totalPlayTime = form.response.games.reduce(
			(a: number, b: gamesResponse) => a + b.playtime_forever,
			0
		);
		mostPlayedGame = form.response.games.reduce((a: gamesResponse, b: gamesResponse) =>
			a.playtime_forever > b.playtime_forever ? a : b
		);
	});
</script>

<div class="container h-full mx-auto flex justify-center items-start p-8">
	<div class="space-y-5">
		<h1 class="h1 text-center">Steam Stats</h1>
		<form method="POST" class="flex flex-row justify-center">
			<label for="steamID" class="label">
				<input
					name="steamID"
					type="text"
					placeholder="Enter your Steam ID"
					class="text-black rounded-3xl"
				/>
			</label>
			<button type="submit" class="btn variant-filled">submit</button>
		</form>

		{#if form?.response}
			<h2 class="h2">Results</h2>
			<div class="grid gap-4 md:grid-cols-2">
				{#if mostPlayedGame}
					<div class="card variant-glass-primary p-6">
						<h3 class="h3 mb-2">Most Played Game</h3>
						<h4 class="h4 mb-4">{mostPlayedGame.name}</h4>
						<p>
							Played for <b>{mostPlayedGame.playtime_forever}</b> minutes, or
							<b>{(+mostPlayedGame.playtime_forever / 60).toFixed(2)}</b>
							hours, or <b>{(+mostPlayedGame.playtime_forever / 1440).toFixed(2)}</b> days
						</p>
					</div>
				{/if}
				{#if totalPlayTime}
					<div class="card variant-soft-tertiary p-6">
						<h4 class="h4 mb-2">Total Time Playing: <b>{totalPlayTime} minutes</b></h4>
						<h4 class="h4">Total Games Owned: <b>{form.response.game_count}</b></h4>
					</div>
				{/if}
			</div>

			<div class="grid gap-8 md:grid-cols-3">
				{#each form.response.games as game}
					<div class="card variant-filled-secondary flex flex-col">
						<header class="card-header p-0 rounded-lg">
							<img
								src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg`}
								alt=""
								class="rounded-t-2xl w-full"
							/>
						</header>
						<section class="p-4 flex flex-col justify-between h-full">
							<h4 class="h4 mb-3">{game.name}</h4>
							<p class="align-bottom">
								Time played: {game.playtime_forever} minutes
							</p>
						</section>
					</div>
				{/each}
			</div>
		{:else}
			<h3 class="h3">No valid steam ID</h3>
		{/if}
	</div>
</div>
