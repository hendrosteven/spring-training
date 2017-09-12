/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.dao;

import com.brainmatics.domain.Order;
import com.brainmatics.domain.OrderItem;
import com.brainmatics.mapper.OrderItemMapper;
import com.brainmatics.mapper.OrderMapper;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Hendro Steven
 */
@Repository
public class OrderDao {

    @Autowired
    private JdbcTemplate jdbc;
    @Autowired
    private ProductDao pDao;
    @Autowired
    private CustomerDao cDao;

    @Transactional
    public int insert(Order order) {
        String sql = "insert into tbl_order(customer_id,order_date) values(?,?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        int insertedRow = 0;
        insertedRow += this.jdbc.update(
                new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection con)
                    throws SQLException {
                PreparedStatement pst
                        = con.prepareStatement(sql, new String[]{"id"});
                pst.setLong(1, order.getCustomer().getId());
                pst.setDate(2, Date.valueOf(order.getOrderDate()));
                return pst;
            }
        }, keyHolder);
        long insertedId = (long) keyHolder.getKey();
        for (OrderItem item : order.getItems()) {
            insertedRow += this.jdbc.update("insert into tbl_order_item"
                    + "(order_id,product_id,"
                    + "quantity,price) values(?,?,?,?)",
                    insertedId, item.getProduct().getId(), item.getQuantity(),
                    item.getProduct().getPrice());
        }
        return insertedRow;
    }

    public List<OrderItem> getAllItemsByOrder(long orderId) {
        List<OrderItem> data = new ArrayList<OrderItem>();
        data = this.jdbc.query("SELECT product_id,quantity,price"
                + " FROM tbl_order_item where order_id=?",
                new Object[]{orderId},
                new OrderItemMapper(pDao));
        return data;
    }
    
    public List<Order> getAllOrder() {
        List<Order> data = new ArrayList<Order>();
        data = this.jdbc.query("SELECT id,customer_id,order_date"
                + " FROM tbl_order", new OrderMapper(cDao, this));
        return data;
    }

}
