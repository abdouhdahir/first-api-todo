import { GraphQLList, GraphQLObjectType } from "graphql";
import { getAllTodos } from "./resolvers/todoResolver";
import TodoType from "./types/todoType";

export const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getAllTodos: {
            type: new GraphQLList(TodoType),
            resolve: getAllTodos
        },
    }
})