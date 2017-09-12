/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.controller;

import com.brainmatics.entity.Product;
import com.brainmatics.repo.ProductRepo;
import com.brainmatics.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
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
    private ProductService productService;
    
    @RequestMapping(method = RequestMethod.POST)
    public Product insertOrUpdate(@RequestBody Product product){
        return productService.insertOrUpdate(product);
    }
  
}
