import "semantic-ui-css/semantic.min.css";
import { Grid, Header, Segment, Image, Table, Button } from "semantic-ui-react";
import React, { useState } from 'react';
import ApiFetch from '../api/ApiFetch';

const refreshPage = () => {
    window.location.reload();
  }

export default function Exemple() {
    const [imageCocktail, setImageCocktail] = useState({});
    const [imagePlat, setImagePlat] = useState({});

    return(
        <div>
            <ApiFetch setData={setImageCocktail} url="https://www.thecocktaildb.com/api/json/v1/1/random.php"/>
            <ApiFetch setData={setImagePlat} url="https://www.themealdb.com/api/json/v1/1/random.php"/>

            <Header as="h1" content="Menu surprise !" textAlign="center" />
            <Grid columns={2} stackable>
                <Grid.Row columns={1}>
                <Grid.Column>
                    <Grid columns={2} stackable>
                        <Grid.Row columns={2}>
                            <Grid.Column  width={8}>
                                <Segment>
                                    <Header as="h2" content="Cocktail du chef" textAlign="center" />
                                    {processDataCocktail(imageCocktail)}
                                </Segment>
                            </Grid.Column>
                            <Grid.Column  width={8}>
                                <Segment>
                                    <Header as="h2" content="Plat du chef" textAlign="center" />
                                    {processDataPlat(imagePlat)}
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            <Header as="h1" content="Bon appetit !" textAlign="center" />
            <Button basic color='pink' fluid onClick={refreshPage}>Creez moi un autre plat !</Button>
        </div>
    )

}

function processDataCocktail(data) {
    if(typeof data.drinks != "undefined") {
        let d = data.drinks[0];
        let src_image = d.strDrinkThumb + '/preview';        
        
        return (
            <>
                <Image src={src_image} size='small' circular centered />
                <Header as="h2" content={data.drinks[0].strDrink} textAlign="center" />
                <Header as="h3" content={data.drinks[0].strCategory} textAlign="center" />
            </> 
        )
    }
}

function processDataPlat(data) {
    console.log(data);
    if(typeof data.meals != "undefined") {
        let src_image = data.meals[0].strMealThumb + '/preview';

        let header_plat_origine = data.meals[0].strMeal + ' - ' + data.meals[0].strArea;
        return (
            <>
                <Image src={src_image} size='small' circular centered />
                <Header as="h2" content={header_plat_origine} textAlign="center" />
                <Header as="h3" content={data.meals[0].strCategory} textAlign="center" />
            </> 
        );
    }
}