import "semantic-ui-css/semantic.min.css";
import { Grid, Header, Segment, Image, List, Button, Container } from "semantic-ui-react";
import React, { useState } from 'react';
import ApiFetch from '../api/ApiFetch';

const refreshPage = () => {
    window.location.reload();
}

export default function TheMealDb() {
    const [image, setImagePlat] = useState({});

    return(
        <div>
            <ApiFetch setData={setImagePlat} url="https://www.themealdb.com/api/json/v1/1/random.php"/>
            <Header as="h1" content="TheMealDb" textAlign="center" />
            <Grid columns={2} stackable>
                <Grid.Row columns={1}>
                <Grid.Column>
                    <Segment>
                    {processData(image)}
                    </Segment>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )

}

function processData(data) {
    console.log(data);
    if(typeof data.meals != "undefined") {
        console.log(data.meals[0]);
        console.log(data.meals[0].strMealThumb);
        let src_image = data.meals[0].strMealThumb + '/preview';

        let header_plat_origine = data.meals[0].strMeal + ' - ' + data.meals[0].strArea;

        let liste_ingredients = creeListeIngredients(data.meals[0]);

        return (
            <>
                <Image src={src_image} size='small' circular centered />
                <Header as="h2" content={header_plat_origine} textAlign="center" />
                <Header as="h3" content={data.meals[0].strCategory} textAlign="center" />
                <Grid>
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={12}>
                        <Segment vertical>
                            <Header as="h2" content="Ingredients : " textAlign="left" />
                            <List as="ul">
                                {liste_ingredients}
                            </List>
                        </Segment>
                        <Segment vertical>
                            <Header as="h2" content="Consignes : " textAlign="left" />
                            <Header as="h4" content={data.meals[0].strInstructions} textAlign="left" />
                        </Segment>
                        <Segment vertical>
                            <Header as="h3" content="Social : " textAlign="left" /><a href={data.meals[0].strYoutube}>Video youtube</a>
                        </Segment>
                        <Segment vertical>
                            <Button basic color='green' fluid onClick={refreshPage}>Trouver un autre plat !</Button>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={2}></Grid.Column>
                </Grid>
            </> 
        );
    }
}


function creeListeIngredients(data) {
    let liste = [];

    for(let i = 0; i < 20; i++) {
        let ptr_ingr = 'strIngredient' + parseInt(i + 1);
        let ptr_qte = 'strMeasure' + parseInt(i + 1);
        if(data[ptr_ingr] !== "" && data[ptr_ingr] !== null) {
            liste.push(<List.Item as='li'>{data[ptr_ingr]} - {data[ptr_qte]}</List.Item>);
        } else {
            i =  22;
        }
    }

    return liste;
}