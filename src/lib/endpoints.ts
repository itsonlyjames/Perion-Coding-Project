import { PUBLIC_API_KEY } from '$env/static/public';

export const retrieveOwnedGames = async (steamId: string) =>
	fetch(
		`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${PUBLIC_API_KEY}&steamid=${steamId}&format=json&include_appinfo=true`
	)
		.then((res) => {
			console.log('🚀 ~ res:', res.status);
			if (res.status === 400) throw new Error('No user found');
			return res.json();
		})
		.catch((e) => e);
