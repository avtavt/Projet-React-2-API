import "semantic-ui-css/semantic.min.css";
import { Grid, Header, Segment, Image, Table, Button } from "semantic-ui-react";
import React, { useState } from 'react';
import ApiFetch from '../api/ApiFetch';

const refreshPage = () => {
  window.location.reload();
}

export default function TheCocktailDB() {
    const [image, setImageCocktail] = useState({});

    return(
        <div>
            <ApiFetch setData={setImageCocktail} url="https://www.thecocktaildb.com/api/json/v1/1/random.php"/>
            
            <Header as="h1" content="TheCocktailDB" textAlign="center" />
            <Grid columns={2} stackable>
                <Grid.Row columns={1}>
                <Grid.Column>
                    <Segment>
                    {processDataCocktail(image)}
                    </Segment>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

function processDataCocktail(data) {
    if(typeof data.drinks != "undefined") {
        console.log(data.drinks[0]);
        console.log(data.drinks[0].strDrinkThumb);
        let d = data.drinks[0];
        let src_image = d.strDrinkThumb + '/preview';
        let ingredientsHeader = [];
        let ingredientsBody = [];
        let ingredientsQuantity = [];

        for (let index = 0 ; index < 15 ; index++) {
          if (d["strIngredient" + (index+1)] !== null && d["strIngredient" + (index+1)] != "") {
            ingredientsHeader.push(<Table.HeaderCell>Ingredient N°{index+1}</Table.HeaderCell>);
            ingredientsBody.push(<Table.Cell>{d["strIngredient" + (index+1)]} </Table.Cell>);
            ingredientsQuantity.push(<Table.Cell>{d["strMeasure" + (index+1)]} </Table.Cell>);
          }
        }
        
        return (
            <>
                <Image src={src_image} size='small' circular centered />
                <Header as="h2" content={d.strDrink} textAlign="center" />
                <Header as="h3" content={d.strCategory} textAlign="center" />
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Content type</Table.HeaderCell>
                      <Table.HeaderCell>Alcohol</Table.HeaderCell>
                      <Table.HeaderCell>Instructions</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>{d.strGlass}</Table.Cell>
                      <Table.Cell>{d.strAlcoholic}</Table.Cell>
                      <Table.Cell>{d.strInstructions}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
                <Header as="h3" content="Ingredients" textAlign="center" />
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      {ingredientsHeader.map((e) => e)}
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      {ingredientsBody.map((e) => e)}
                    </Table.Row>
                    <Table.Row>
                      {ingredientsQuantity.map((e) => e)}
                    </Table.Row>
                  </Table.Body>
                </Table>
                <Button basic color='red' fluid onClick={refreshPage}>Another cocktail !</Button>
            </> 
        )
    }
}

