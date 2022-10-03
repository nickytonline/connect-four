<script lang="ts">
	import { gameState } from '../lib/stores/gameState';
	import Coin from './Coin.svelte';
</script>

<div data-board>
	{#each $gameState.boardState as column, colIndex}
		<div data-column={colIndex}>
			{#each column as cell, rowIndex}
				<div data-cell="{colIndex},{rowIndex}">
					{#if cell}
						<Coin player={$gameState.players[cell]} />
					{:else}
						{colIndex},{rowIndex}
					{/if}
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	/* Use a PNG for board background and use transparent BG for cells */
	div[data-board] {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		/* grid-template-rows: repeat(6, 1fr); */
		grid-gap: 1rem;
		width: 28rem;
		height: 25rem;
		background-color: blue;
	}

	div[data-board] [data-cell] {
		width: 3rem;
		height: 3rem;
		border: 4px solid white;
		background-color: white;
		border-radius: 50%;
	}
</style>
