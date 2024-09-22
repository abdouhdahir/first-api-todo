
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLNonNull } from 'graphql';

const TodoType = new GraphQLObjectType({
    name: 'Todo',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        order: { type: new GraphQLNonNull(GraphQLInt) },
        completed: { type: new GraphQLNonNull(GraphQLBoolean) },
    },
});

export default TodoType;