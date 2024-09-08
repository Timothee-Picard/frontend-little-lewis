const url = process.env.NEXT_PUBLIC_API_URL;

export type Projets = {
	id: string;
	nom: string;
	presentation: string;
};

export type Projet = {
	id: string;
	nom: string;
	couleur1: string;
	couleur2: string;
	couleur3: string;
	titreDescription: string;
	description: string;
	client: string;
	annee: string;
	conclusion: string;
	nombre1: string;
	nombre2: string;
	nombre3: string;
	label1: string;
	label2: string;
	label3: string;
	images: string[];
	images2: string[];
	imageFin: string;
	separateur1: string;
	miseEnAvant: string;
	transition: string;
	separateur2: string;
	principale: string;
};

export async function fetchProjets(): Promise<Projets[]> {
	try {
		const response = await fetch(`${url}/api/projets?fields=Nom&populate=Presentation`);
		if (!response.ok) {
			throw new Error('Failed to fetch data from Strapi');
		}

		const data = await response.json();

		const projets: Projets[] = data.data.map((projet: any) => {
			const id = projet.id.toString();
			const nom = projet.attributes.Nom;
			const presentation = projet.attributes.Presentation?.data;

			const imageUrl = presentation.attributes?.url || '';
			return { id, nom, presentation: imageUrl };
		});

		return projets;
	} catch (error) {
		console.error('Error fetching projects:', error);
		return [];
	}
}

export async function fetchProjetById(id: string): Promise<Projet | null> {
	try {
		const query =
			'fields[0]=Nom' +
			'&fields[1]=Couleur_1' +
			'&fields[2]=Couleur_2' +
			'&fields[3]=Couleur_3' +
			'&fields[4]=Titre_Description' +
			'&fields[5]=Description' +
			'&fields[6]=Client' +
			'&fields[7]=Annee' +
			'&fields[8]=Conclusion' +
			'&fields[9]=Nombre1' +
			'&fields[10]=Nombre2' +
			'&fields[11]=Nombre3' +
			'&fields[12]=Label1' +
			'&fields[13]=Label2' +
			'&fields[14]=Label3' +
			'&populate[Principale]=true' +
			'&populate[Separateur1]=true' +
			'&populate[Mise_en_avant]=true' +
			'&populate[Transition]=true' +
			'&populate[Images]=true' +
			'&populate[Images2]=true' +
			'&populate[Separateur2]=true' +
			'&populate[Image_Fin]=true';

		const response = await fetch(`${url}/api/projets/${id}?${query}`);
		if (!response.ok) {
			throw new Error('Failed to fetch data from Strapi');
		}

		const data = await response.json();


		const projet: Projet = {
			id: data.data.id.toString(),
			nom: data.data.attributes.Nom || '',
			couleur1: data.data.attributes.Couleur_1 || '',
			couleur2: data.data.attributes.Couleur_2 || '',
			couleur3: data.data.attributes.Couleur_3 || '',
			titreDescription: data.data.attributes.Titre_Description || '',
			description: data.data.attributes.Description || '',
			client: data.data.attributes.Client || '',
			annee: data.data.attributes.Annee || '',
			conclusion: data.data.attributes.Conclusion || '',
			nombre1: data.data.attributes.Nombre1 || '',
			nombre2: data.data.attributes.Nombre2 || '',
			nombre3: data.data.attributes.Nombre3 || '',
			label1: data.data.attributes.Label1 || '',
			label2: data.data.attributes.Label2 || '',
			label3: data.data.attributes.Label3 || '',
			images: data.data.attributes?.Images?.data?.length
				? data.data.attributes.Images.data.map((image: any) => `${url}${image.attributes.url}`)
				: [],
			images2: data.data.attributes?.Images2?.data?.length
				? data.data.attributes.Images2.data.map((image: any) => `${url}${image.attributes.url}`)
				: [],
			imageFin: data.data.attributes?.Image_Fin?.data || '',
			separateur1: data.data.attributes?.Separateur1?.data || '',
			separateur2: data.data.attributes?.Separateur2?.data || '',
			miseEnAvant: data.data.attributes?.Mise_en_avant?.data || '',
			transition: data.data.attributes?.Transition?.data || '',
			principale: data.data.attributes?.Principale?.data || ''
		};

		return projet;
	} catch (error) {
		console.error('Error fetching project:', error);
		return null
	}
}
