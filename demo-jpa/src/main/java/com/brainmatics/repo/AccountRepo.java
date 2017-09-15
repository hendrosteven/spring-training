/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.repo;

import com.brainmatics.entity.Account;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Hendro Steven
 */
public interface AccountRepo extends CrudRepository<Account, Long> {

    @Query("SELECT a FROM Account a WHERE "
            + "LOWER(a.username) = LOWER(:username)")
    public Account findByUsername(@Param("username") String username);

}
