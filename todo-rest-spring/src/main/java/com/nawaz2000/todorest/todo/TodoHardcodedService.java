package com.nawaz2000.todorest.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {
    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;

    static{
        todos.add(new Todo(++idCounter, "Nawaz2000", "Learn Angular", new Date(), false));
        todos.add(new Todo(++idCounter, "Nawaz2000", "Learn Spring", new Date(), false));
        todos.add(new Todo(++idCounter, "Nawaz2000", "Learn Microservices", new Date(), false));
    }

    public List<Todo> findAll(){
        return todos;
    }

    public Todo deleteByOd(long id){
        Todo todo = findById(id);
        if (todo == null)
            return null;
        if(todos.remove(todo))
            return todo;
        return null;
    }

    public Todo findById(long id) {
        for (Todo todo:todos){
            if (todo.getId() == id)
                return todo;
        }
        return null;
    }

    public Todo save(Todo todo){
        if (todo.getId()==-1 || todo.getId()==0){
            todo.setId(++idCounter);
            todos.add(todo);
        }else{
            deleteByOd(todo.getId());
            todos.add(todo);
        }
        return todo;
    }
}
