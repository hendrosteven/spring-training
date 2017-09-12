/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.dao;

import com.brainmatics.domain.Product;
import com.brainmatics.mapper.ProductMapper;
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
public class ProductDao {

    @Autowired
    private JdbcTemplate jdbc;
    @Autowired
    private CategoryDao dao;

    public int insert(Product product) {
        return this.jdbc.update("insert into tbl_product(name, price, "
                + "description,category_id) value(?,?,?,?)",
                product.getName(), product.getPrice(),
                product.getDescription(), product.getCategory().getId());
    }

    public int update(Product product) {
        return this.jdbc.update("update tbl_product set name=?, price=?, description=?,"
                + "category_id=? where id=?", product.getName(), product.getPrice(),
                product.getDescription(), product.getCategory().getId(), product.getId());
    }

    public List<Product> findAll() {
        List<Product> data = new ArrayList<Product>();
        data = this.jdbc.query("SELECT id,name,price,"
                + "description,category_id FROM tbl_product", new ProductMapper(dao));
        return data;
    }

    public Product getProductById(long id) {
        Product product = null;
        product = this.jdbc.queryForObject("SELECT id,name,price,"
                + "description,category_id FROM tbl_product where id=?",
                new Object[]{id}, new ProductMapper(dao));
        return product;
    }
}
