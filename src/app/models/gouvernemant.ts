export class Gouvernemant {

      
      // ...
      
      private gouverneratList: any[] = [
        { id: 1, nom: "Ariana" },
        { id: 2, nom: "Béja" },
        { id: 3, nom: "Ben Arous" },
        { id: 4, nom: "Bizerte" },
        { id: 5, nom: "Gabès" },
        { id: 6, nom: "Gafsa" },
        { id: 7, nom: "Jendouba" },
        { id: 8, nom: "Kairouan" },
        { id: 9, nom: "Kasserine" },
        { id: 10, nom: "Kébili" },
        { id: 11, nom: "La Manouba" },
        { id: 12, nom: "Le Kef" },
        { id: 13, nom: "Mahdia" },
        { id: 14, nom: "Médenine" },
        { id: 15, nom: "Monastir" },
        { id: 16, nom: "Nabeul" },
        { id: 17, nom: "Sfax" },
        { id: 18, nom: "Sidi Bouzid" },
        { id: 19, nom: "Siliana" },
        { id: 20, nom: "Sousse" },
        { id: 21, nom: "Tataouine" },
        { id: 22, nom: "Tozeur" },
        { id: 23, nom: "Tunis" },
        { id: 24, nom: "Zaghouan" }
      ];
      
      // ...
      

    getGouvernerats(): string[] {
        return this.gouverneratList;
      }
      getNOMByGouvernement(i: number): string | undefined {
        // Adjust the index by subtracting 1
        const adjustedIndex = i - 1;
      
        // Check if the index is within the valid range
        if (adjustedIndex >= 0 && adjustedIndex < this.gouverneratList.length) {
          return this.gouverneratList[adjustedIndex].nom;
        } else {
          // Return undefined or handle out-of-range case appropriately
          return undefined;
        }
}
getGouvernoratIdByNom(nom: string): number | null {
  const lowerCaseNom = nom

  for (const gouvernorat of this.gouverneratList) {

    if (gouvernorat && gouvernorat.nom && gouvernorat.nom.toLowerCase() === lowerCaseNom) {
      // Gouvernorat trouvé, renvoyer l'ID et sortir de la boucle
      return gouvernorat.id;
    }
  }

  // Aucun gouvernorat correspondant trouvé, renvoyer null
  console.log("Aucun gouvernorat correspondant trouvé.");
  return null;
}




}
