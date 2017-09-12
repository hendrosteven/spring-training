/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.service;

import com.brainmatics.entity.Product;
import com.brainmatics.repo.ProductRepo;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Hendro Steven
 */
@Service("productService")
@Transactional
public class ProductService {

    @Autowired
    private ProductRepo repo;

    public Product insertOrUpdate(Product product) {
        return repo.save(product);
    }

    public boolean delete(Long id) {
        repo.delete(id);
        return true;
    }

    public List<Product> findAll() {
        return repo.findAllProduct();
    }

    public List<Product> findByCategory(Long categoryId) {
        return repo.findByCategory(categoryId);
    }

    public List<Product> findByName(String name) {
        return repo.findByName("%" + name + "%");
    }
}
