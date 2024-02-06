<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	export let form;
</script>

<div class="container h-full mx-auto flex justify-center items-start p-8">
	<div class="space-y-5">
		<form method="POST" class="flex flex-row">
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

			<div class="space-y-5">
				{#each form?.response.games as game}
					<div class="card variant-filled-primary p-6">{game.appid}</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
