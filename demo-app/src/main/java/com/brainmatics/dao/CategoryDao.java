/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.dao;

import com.brainmatics.domain.Category;
import com.brainmatics.mapper.CategoryMapper;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Hendro Steven
 */
@Repository
public class CategoryDao {
    
    @Autowired
    private JdbcTemplate jdbc;
    
    public int insert(Category category) {
        return this.jdbc.update("insert into tbl_category"
                + "(name, description) value(?,?)", 
                category.getName(),category.getDescription());
    }

    public int update(Category category) {
        return this.jdbc.update("update tbl_category set name=?, "
                + "description=? where id=?", category.getName(),
                category.getDescription(), category.getId());
    }

    public List<Category> getAll() {
        List<Category> data = new ArrayList<Category>();
        data = this.jdbc.query("SELECT id,name,"
                + "description FROM tbl_category", new CategoryMapper());
        return data;
    }

    public Category getById(long id) {
        Category category = null;
        category = this.jdbc.queryForObject("SELECT id,name,"
                + "description FROM tbl_category where id=?",
                new Object[]{id}, new CategoryMapper());
        return category;
    }
}
