const url = process.env.NEXT_PUBLIC_API_URL;

export type Category = {
	id: string;
	nom: string;
};

export async function fetchCategories(): Promise<Category[]> {
	console.log('test url', url);
	console.log('test env', process.env.NEXT_PUBLIC_API_URL);
	try {
		const response = await fetch(`${url}/api/categories?fields=Nom`);
		if (!response.ok) throw new Error('Failed to fetch data from Strapi');
		const data = await response.json();
		return data.data.map((category: any) => {
			const id = category.id.toString();
			const nom = category.attributes.Nom;

			return {id, nom};
		});
	} catch (error) {
		console.error('Error fetching projects:', error);
		return [];
	}
}
