package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Orders;

public interface OrdersDao extends JpaRepository<Orders, Integer>{
	Orders findByOrderid(int id);
}
