export type Category = {
	id: string;
	nom: string;
};

export async function fetchCategories(): Promise<Category[]> {
	try {
		const response = await fetch('http://localhost:1337/api/categories?fields=Nom');
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
