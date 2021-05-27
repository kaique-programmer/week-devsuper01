package com.weeksuper.weeksuper.services;

import com.weeksuper.weeksuper.dto.OrderDTO;
import com.weeksuper.weeksuper.entities.Order;
import com.weeksuper.weeksuper.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {
        List<Order> list = orderRepository.findOrdersWithProducts();
        return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
    }

    //public List<OrderDTO> findById(){}
}
