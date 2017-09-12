/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.controller;

import com.brainmatics.dao.OrderDao;
import com.brainmatics.domain.Order;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Hendro Steven
 */
@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderDao dao;

    @RequestMapping(method = RequestMethod.POST)
    public int insert(@RequestBody Order order) {
        order.setOrderDate(LocalDate.now());
        return dao.insert(order);
    }
}
