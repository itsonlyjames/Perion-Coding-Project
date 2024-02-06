import { retrieveOwnedGames } from '$lib/endpoints';
import type { Actions } from './$types';

export const actions = {
	default: async (e) => {
		const formData = await e.request.formData();
		let steamID = formData.get('steamID');

		return await retrieveOwnedGames(steamID as string);
	}
} satisfies Actions;
