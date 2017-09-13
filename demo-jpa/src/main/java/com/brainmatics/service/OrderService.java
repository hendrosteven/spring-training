/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.service;

import com.brainmatics.entity.Orders;
import com.brainmatics.repo.OrderRepo;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Hendro Steven
 */
@Service("orderService")
@Transactional
public class OrderService {

    @Autowired
    private OrderRepo repo;

    public Orders insert(Orders order) {     
        order.setOrderDate(new Date());
        return this.repo.save(order);
    }
}
