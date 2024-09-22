import Todo from "../../models/todo";

// Resolver pour récupérer tous les todos
export const getAllTodos = async () => {
  try {
    const todos = await Todo.find();
    return todos;
  } catch {
    throw new Error("Error fetching todos");
  }
};

// Resolver pour récupérer un todo par son id

// Resolver pour ajouter un todo
export const addTodo = async (_: any, args: any) => {
  try {
    // On crée un objet avec les données à ajouter
    const itemsToAdd = {
      title: args.title,
      description: args.description,
      order: args.order,
      completed: args.completed,
    };
    // On crée une instance de Todo avec les données à ajouter
    const todo = new Todo(itemsToAdd);
    // On sauvegarde l'instance de Todo
    await todo.save();
    return todo;
  } catch {
    throw new Error("Error adding todo");
  }
};

export const uptadeTodo = async (_: any, args: any) => {
  try {
    const todo = await Todo.findByIdAndUpdate(args.id , args, {new: true})
    return todo
  } catch {
    throw new Error("Error adding todo")
  }
}

export const deleteTodo = async (_ : any, args: any) => {
  try {
    const todo = await Todo.findByIdAndDelete(args.id)
    return todo
  } catch {
    throw new Error("Error deleting todo");
  }
}