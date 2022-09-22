package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.daos.OrdersDao;
import com.app.entities.Orders;

@Transactional
@Service
public class OrdersServiceImpl implements OrdersService{

	@Autowired
	private OrdersDao ordersDao;
	
	@Override
	public Orders save(Orders orders) {
		return ordersDao.save(orders);
	}

	/*
	 * @Override
	public User save(User user) {
		return userDao.save(user);
	}*/
}
