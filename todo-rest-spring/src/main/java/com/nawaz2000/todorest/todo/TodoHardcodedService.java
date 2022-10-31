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
}
