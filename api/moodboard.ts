export type MoodboardImage = {
	Visuel: string;
	Top: string;
	Left: string;
	Rotation: string;
	Width: string;
	Height: string;
};

export async function fetchMoodboardImages(): Promise<MoodboardImage[]> {
	try {
		const query =
			'&fields[1]=Top' +
			'&fields[2]=Left' +
			'&fields[3]=Rotation' +
			'&populate[Visuel]=true';

		const response = await fetch('http://localhost:1337/api/moodboards?' + query);
		if (!response.ok) throw new Error('Failed to fetch data from Strapi');
		const res = await response.json();
		return res.data.map((moodboard: any) => {
			return {
				Top: moodboard.attributes.Top || '',
				Left: moodboard.attributes.Left || '',
				Rotation: moodboard.attributes.Rotation || '',
				Visuel: moodboard.attributes.Visuel.data.attributes.url ? `http://localhost:1337${moodboard.attributes.Visuel.data.attributes.url}` : '',
				Width: moodboard.attributes.Visuel.data.attributes.width || '',
				Height: moodboard.attributes.Visuel.data.attributes.height
			};
		});
	} catch (error) {
		console.error('Error fetching projects:', error);
		return []
	}
}
