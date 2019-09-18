import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList, GraphQLSchema, GraphQLInt } from 'graphql';

import movies from './movies.json';

const movie = new GraphQLObjectType({
  name: 'Movie',
  fields: {
    title: { type: GraphQLString },
    cover: { type: GraphQLString },
    year: { type: GraphQLString },
    cost: { type: GraphQLFloat },
    starring: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'starring',
        fields: {
          name: { type: GraphQLString }
        }
      }))
    }
  }
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      movies: {
        type: new GraphQLList(movie),
        resolve: () => movies
      },
      movie: {
        type: movie,
        args: {
          index: { type: GraphQLInt }
        },
        resolve: ( _, {index}) => movies[index - 1]
      }
    }
  })
});

export default schema;