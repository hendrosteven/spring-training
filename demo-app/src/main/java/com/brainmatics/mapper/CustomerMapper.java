/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.mapper;

import com.brainmatics.domain.Customer;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

/**
 *
 * @author Hendro Steven
 */
public class CustomerMapper implements RowMapper<Customer>{

    @Override
    public Customer mapRow(ResultSet rs, int i) throws SQLException {
        Customer cust = new Customer();
        cust.setId(rs.getLong("id"));
        cust.setName(rs.getString("name"));
        cust.setEmail(rs.getString("email"));
        cust.setPhone(rs.getString("phone"));
        return cust;
    }
    
}
