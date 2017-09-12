/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.controller;

import com.brainmatics.dao.ProductDao;
import com.brainmatics.domain.Product;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Hendro Steven
 */
@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductDao dao;
    
    @RequestMapping(method = RequestMethod.GET)
    public List<Product> findAll(){
        return dao.findAll();
    }
    
    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Product findById(@PathVariable("id")long id){
        return dao.getProductById(id);
    }
    
    @RequestMapping(method = RequestMethod.POST)
    public int insert(@RequestBody Product product){
        return dao.insert(product);
    }
    
    @RequestMapping(method = RequestMethod.PUT)
    public int update(@RequestBody Product product){
        return dao.update(product);
    }
}
