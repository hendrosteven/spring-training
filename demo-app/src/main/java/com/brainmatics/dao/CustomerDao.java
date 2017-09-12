/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.dao;

import com.brainmatics.domain.Customer;
import com.brainmatics.mapper.CustomerMapper;
import java.util.ArrayList;
import java.util.List;
import static jdk.nashorn.internal.runtime.Debug.id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Hendro Steven
 */
@Repository
public class CustomerDao {

    @Autowired
    private JdbcTemplate jdbc;

    public int insert(Customer customer) {
        return this.jdbc.update("insert into tbl_customer(name, email, "
                + "phone) value(?,?,?)",
                customer.getName(), customer.getEmail(),
                customer.getPhone());
    }

    public int update(Customer customer) {
        return this.jdbc.update("update tbl_customer set name=?, email=?,"
                + "phone=? where id=?",
                customer.getName(), customer.getEmail(),
                customer.getPhone(), customer.getId());
    }

    public Customer getById(long id) {
        Customer customer = null;
        customer = this.jdbc.queryForObject("SELECT id,name,email,"
                + "phone FROM tbl_customer where id=?",
                new Object[]{id}, new CustomerMapper());
        return customer;
    }

    public List<Customer> getAll() {
        List<Customer> data = new ArrayList<Customer>();
        data = this.jdbc.query("SELECT id,name,email,"
                + "phone FROM tbl_customer",
                new CustomerMapper());
        return data;
    }
}
