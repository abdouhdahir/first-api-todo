import { Schema, model } from 'mongoose';

// Définition du schéma pour un "Todo"
const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,

    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const Todo = model('Todo', TodoSchema);

export default Todo