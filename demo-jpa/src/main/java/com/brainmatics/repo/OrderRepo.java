/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.repo;

import com.brainmatics.entity.Orders;
import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Hendro Steven
 */
public interface OrderRepo extends CrudRepository<Orders, Long>{
    
    @Query("select o from Orders o")
    public List<Orders> findAll();
    
    @Query("select o from Orders o where o.customer.id= :customerId")
    public List<Orders> findByCustomer(@Param("customerId") Long customerId);

    @Query("SELECT o FROM Orders o WHERE o.orderDate "
            + "BETWEEN :startDate AND :endDate")
    public List<Orders> findByOrderDate(@Param("startDate") Date startDate,
            @Param("endDate") Date endDate);
}
