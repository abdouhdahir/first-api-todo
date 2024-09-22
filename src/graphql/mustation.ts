import { GraphQLBoolean, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { addTodo, uptadeTodo } from "./resolvers/todoResolver";
import TodoType from "./types/todoType";


export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addTodo: {
            type: TodoType,
            args: {
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                order: { type: GraphQLInt },
                completed: { type: GraphQLBoolean },
            },
            resolve: addTodo
        },
        updateTodo: {
            type: TodoType,
            args: {
                id:{ type: GraphQLString },
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                order: { type: GraphQLInt },
                completed: { type: GraphQLBoolean },
            },
            resolve: uptadeTodo
        }
    }
})