package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.common.CustomResponse;
import com.app.entities.Orders;
import com.app.services.OrdersService;

@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true")
@RestController
public class OrdersController {

	@Autowired
	private OrdersService ordersService;
	
	@Autowired
	private CustomResponse response;
	
	@PostMapping("/placeOrder")
	public CustomResponse addOrders(@RequestBody Orders orders) {
		Orders orders2 = null;
		try {
			orders2 = ordersService.save(orders);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		if (orders2 != null) {
			response.setStatus("success");
			response.setData(orders2);
		} else {
			response.setStatus("error");
			response.setData("");
		}
		return response;
	}
}
