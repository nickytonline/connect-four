<script lang="ts">
	import type { Player } from '../types/GameTypes';

	export let player: Player;
</script>

<div>{player.color}</div>

<style>
	div {
		display: grid;
		place-items: center;
		font-size: 3rem;
		font-weight: bold;
		border-radius: 50%;
		border: dotted 4px #000;
		width: 100px;
		height: 100px;
	}
</style>
