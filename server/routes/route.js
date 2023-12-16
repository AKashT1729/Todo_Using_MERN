import express from "express";
import { addTodo,getAllTodos,toggleTodoDone,updateTodo,deleteTodo } from "../controller/todo-controller.js";

const route = express.Router();

route.post("/todo", addTodo);
route.get("/todo",getAllTodos)
route.get("/todo/:id",toggleTodoDone)
route.put("/todo/:id",updateTodo)
route.delete('/todo/:id',deleteTodo)

export default route;