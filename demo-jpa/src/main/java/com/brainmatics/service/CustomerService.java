/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.service;

import com.brainmatics.entity.Customer;
import com.brainmatics.repo.CustomerRepo;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Hendro Steven
 */
@Service("customerService")
@Transactional
public class CustomerService {
    
    @Autowired
    private CustomerRepo repo;
    
    public Customer insertOrUpdate(Customer customer){
        return repo.save(customer);
    }
    
    public boolean delete(Long id){
        repo.delete(id);
        return true;
    }
    
    public Customer findById(Long id){
        return repo.findOne(id);
    }
    
    public List<Customer> findAll(){
        return repo.findAllCustomer();
    }
}
