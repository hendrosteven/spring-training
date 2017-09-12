/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.mapper;

import com.brainmatics.dao.CustomerDao;
import com.brainmatics.dao.OrderDao;
import com.brainmatics.domain.Order;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import org.springframework.jdbc.core.RowMapper;

/**
 *
 * @author Hendro Steven
 */
public class OrderMapper implements RowMapper<Order> {

    private CustomerDao dao;
    private OrderDao oDao;

    public OrderMapper(CustomerDao dao, OrderDao oDao) {
        this.dao = dao;
        this.oDao = oDao;
    }

    @Override
    public Order mapRow(ResultSet rs, int i) throws SQLException {
        Order order = new Order();
        order.setId(rs.getLong("id"));
        order.setOrderDate(rs.getObject("order_date", LocalDate.class));
        order.setCustomer(dao.getById(rs.getLong("customer_id")));
        order.setItems(oDao.getAllItemsByOrder(rs.getLong("id")));
        return order;
    }

}
