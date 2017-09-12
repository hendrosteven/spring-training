/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.service;

import com.brainmatics.entity.Category;
import com.brainmatics.repo.CategoryRepo;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Hendro Steven
 */
@Service("categoryService")
@Transactional
public class CategoryService {

    @Autowired
    private CategoryRepo repo;

    public Category insert(Category category) {
        return repo.save(category);
    }
    
    public Category update(Category category) {
        return repo.save(category);
    }
    
    public boolean delete(Long id){
        repo.delete(id);
        return true;
    }
    
    public Category getById(Long id){
        return repo.findOne(id);
    }
    
    public List<Category> getAll(){
        return repo.findAllCategory();
    }
}
