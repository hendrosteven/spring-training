/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.service;

import com.brainmatics.entity.Account;
import com.brainmatics.repo.AccountRepo;
import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 *
 * @author Hendro Steven
 */
@Service("accountService")
@Transactional
public class AccountService implements UserDetailsService {

    @Autowired
    private AccountRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) 
                    throws UsernameNotFoundException {
        Account acc = repo.findByUsername(username);
        if (acc == null) {
            throw new UsernameNotFoundException("No user present "
                    + "with username: " + username);
        } else {
            List<String> userRoles = new ArrayList<String>();
            userRoles.add("USER");
            return new Account(acc, userRoles);            
        }
    }

    public Account register(Account acc) throws Exception {
        Account temp = repo.findByUsername(acc.getUsername());
        if (temp != null) {
            throw new Exception("Email already registered");
        }       
        return repo.save(acc);     
    }

    public Account login(String username, String password) throws Exception {
        Account account = repo.findByUsername(username);
        if (account != null) {
            if (!account.getPassword().equals(DigestUtils.md5Hex(password))) {
                account = null;
                throw new Exception("Login Fail");
            } else {
                return account;
            }
        } else {
            throw new Exception("Login Fail");
        }
    }

}
