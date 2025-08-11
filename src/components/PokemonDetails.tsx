import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props) => {

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject
            }}
        >
            {/** Types y Peso */}

            <View style={{
                ...styles.container,
                marginTop: 370,
            }}>
                <Text style={styles.title}>Types</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                                key={type.name}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
                </View>
                {/** Peso */}
                <Text style={styles.title}>Peso</Text>
                <Text style={styles.regularText}>{pokemon.weight} kg</Text>
            </View>

            {/** Sprites*/}
            <View style={styles.container}>
                <Text style={styles.title}>Sprites</Text>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >

                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprites}
                />

                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprites}
                />

                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprites}
                />

                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprites}
                />

            </ScrollView>

            <View style={styles.container}>
                <Text style={styles.title}>Skills</Text>

                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                                key={ability.name}
                            >
                                {ability.name}
                            </Text>
                        ))
                    }
                </View>

            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Moves</Text>

                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                                key={move.name}
                            >
                                {move.name}
                            </Text>
                        ))
                    }
                </View>

            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Stats</Text>

                <View>
                    {
                        pokemon.stats.map((stat, i) => (
                            <View
                                style={{ flexDirection: 'row' }}
                                key={stat.stat.name + i}
                            >
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 150,
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    {stat.stat.name}
                                </Text>

                                <Text
                                    style={{
                                        ...styles.regularText,
                                        fontWeight: 'bold',
                                        color: 'black',
                                    }}
                                    key={stat.base_stat}
                                >
                                    {stat.base_stat}
                                </Text>

                            </View>
                        ))
                    }
                </View>

                {/** Sprite Final */}

                <View style={{
                    marginBottom: 20,
                    alignItems: 'center',
                }}>
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprites}
                    />
                </View>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    regularText: {
        fontSize: 19,
        textTransform: 'capitalize',
    },
    basicSprites: {
        width: 100,
        height: 100,
    }
})