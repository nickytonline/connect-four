import type { Player } from 'src/types/GameTypes';
import { writable } from 'svelte/store';

type Players = 0 | 1;
export type CellState = Players | undefined;

interface GameState {
	players: [Player, Player];
	playerTurn: Players;
	boardState: CellState[][];
}

export const gameState = writable<GameState>({
	players: [{ color: 'R' }, { color: 'Y' }],
	playerTurn: 1,
	boardState: new Array(7).fill(new Array(6).fill(undefined)),
});
