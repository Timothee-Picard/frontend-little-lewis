export type Contact = {
	mail: string;
	telephone: string;
	adresseParis: string;
	adresseMontpellier: string;
	lienInstagram: string;
	lienLinkedin: string;
	lienDribble: string;
	lienTiktok: string;
};

export async function fetchContact(): Promise<Contact> {
	try {
		const query =
			'fields[0]=Mail' +
			'&fields[1]=Telephone' +
			'&fields[2]=Adresse_Paris' +
			'&fields[3]=Adresse_Montpellier' +
			'&fields[4]=Lien_Instagram' +
			'&fields[5]=Lien_Linkedin' +
			'&fields[6]=Lien_Dribble' +
			'&fields[7]=Lien_Tiktok';

		const response = await fetch('http://localhost:1337/api/contact?' + query);
		if (!response.ok) throw new Error('Failed to fetch data from Strapi');
		const res = await response.json();
		return {
			mail: res.data.attributes.Mail || '',
			telephone: res.data.attributes.Telephone || '',
			adresseParis: res.data.attributes.Adresse_Paris || '',
			adresseMontpellier: res.data.attributes.Adresse_Montpellier || '',
			lienInstagram: res.data.attributes.Lien_Instagram || '',
			lienLinkedin: res.data.attributes.Lien_Linkedin || '',
			lienDribble: res.data.attributes.Lien_Dribble || '',
			lienTiktok: res.data.attributes.Lien_Tiktok || '',
		};
	} catch (error) {
		console.error('Error fetching projects:', error);
		return {
			mail: "",
			telephone: "",
			adresseParis: "",
			adresseMontpellier: "",
			lienInstagram: "",
			lienLinkedin: "",
			lienDribble: "",
			lienTiktok: "",
		}
	}
}
