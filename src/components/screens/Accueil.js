import "semantic-ui-css/semantic.min.css";
import { Grid, Header, Container } from "semantic-ui-react";

export default function Accueil() {
    return(
        <>
        <Header as="h1" content="" textAlign="center" />
        <Container text>
            <Header as='h2'>Description</Header>
            <p>
                Ce site en React utilise deux API en rapport avec la nourriture et les boissons : TheMealDb et TheCocktailDB.
            </p>
            <p>
                La premiere permet de trouver un plat choisi aleatoirement et de presenter sa composition, ses mesures ainsi que sa recette.
            </p>
            <p>
                La seconde permet d'obtenir un cocktail choisi aleatoirement. On affiche ses caracteristiques telles que de dire si il est dans la categorie alcool ou sans alcool, sa composition et comment le realiser.
            </p>
            <p>
                Pour lier les deux APIs, le programme propose un plat et une boisson tout en presentant les deux selections.
            </p>
            <p>
                Le lien TheMealDb permet d'avoir acces a l'API de presentation des plats. Le lien TheCocktailDb propose quant a lui des cocktails. Enfin le lien Exemple permet de montrer comment utiliser les deux applications en meme temps.
            </p>
        </Container>
        </>
    )

}