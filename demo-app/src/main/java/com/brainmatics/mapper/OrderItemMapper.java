/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.mapper;

import com.brainmatics.dao.ProductDao;
import com.brainmatics.domain.OrderItem;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

/**
 *
 * @author Hendro Steven
 */
public class OrderItemMapper implements RowMapper<OrderItem>{
    private ProductDao dao;
    
    public OrderItemMapper(ProductDao dao){
        this.dao = dao;
    }

    @Override
    public OrderItem mapRow(ResultSet rs, int i) throws SQLException {
        OrderItem item = new OrderItem();
        item.setPrice(rs.getDouble("price"));
        item.setQuantity(rs.getInt("quantity"));
        item.setProduct(dao.getProductById(rs.getLong("product_id")));
        return item;
    }
}
