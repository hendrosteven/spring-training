/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.controller;

import com.brainmatics.dto.SearchData;
import com.brainmatics.entity.Product;
import com.brainmatics.service.ProductService;
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
    private ProductService productService;

    @RequestMapping(method = RequestMethod.POST)
    public Product insertOrUpdate(@RequestBody Product product) {
        return productService.insertOrUpdate(product);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Product> findAll() {
        return productService.findAll();
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public boolean deleteProduct(@PathVariable("id") Long id) {
        return productService.delete(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/search")
    public List<Product> findByName(@RequestBody SearchData search) {
        return productService.findByName(search.getSearchKey());
    }

}
