/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.controller;

import com.brainmatics.entity.Orders;
import com.brainmatics.service.OrderService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
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
    private OrderService orderService;

    @RequestMapping(method = RequestMethod.POST)
    public Orders insert(@RequestBody Orders order) {
        return orderService.insert(order);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Orders> findAll() {
        return orderService.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/customer/{id}")
    public List<Orders> findByCustomer(@PathVariable("id") Long id) {
        return orderService.findByCustomer(id);
    }
}
