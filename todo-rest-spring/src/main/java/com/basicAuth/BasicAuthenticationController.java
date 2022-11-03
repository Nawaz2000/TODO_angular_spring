package com.basicAuth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class BasicAuthenticationController {

    @GetMapping("/basicAuth")
    public AuthenticationBean helloWorldBean(){
        return new AuthenticationBean("Hello World");
    }

//    @GetMapping("/hello-world/path-variable/{name}")
//    public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
//        //throw new RuntimeException("Server has some error");
//        return new HelloWorldBean(String.format("Hello world, %s", name));
//    }
}
