/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.mapper;

import com.brainmatics.dao.CategoryDao;
import com.brainmatics.domain.Product;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

/**
 *
 * @author Hendro Steven
 */
public class ProductMapper implements RowMapper<Product> {

    private CategoryDao dao;

    public ProductMapper(CategoryDao dao) {
        this.dao = dao;
    }

    @Override
    public Product mapRow(ResultSet rs, int i) throws SQLException {
        Product product = new Product();
        product.setId(rs.getLong("id"));
        product.setName(rs.getString("name"));
        product.setPrice(rs.getDouble("price"));
        product.setDescription(rs.getString("description"));
        product.setCategory(dao.getById(rs.getLong("category_id")));
        return product;
    }

}
