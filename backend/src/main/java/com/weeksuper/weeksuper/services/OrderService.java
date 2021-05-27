package com.weeksuper.weeksuper.services;

import com.weeksuper.weeksuper.dto.OrderDTO;
import com.weeksuper.weeksuper.dto.ProductDTO;
import com.weeksuper.weeksuper.entities.Order;
import com.weeksuper.weeksuper.entities.OrderStatus;
import com.weeksuper.weeksuper.entities.Product;
import com.weeksuper.weeksuper.repositories.OrderRepository;
import com.weeksuper.weeksuper.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {
        List<Order> list = orderRepository.findOrdersWithProducts();
        return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
    }

    @Transactional
    public OrderDTO insert(OrderDTO orderDTO) {
        Order order = new Order(null, orderDTO.getAddress(), orderDTO.getLatitude(), orderDTO.getLongitude(),
                                    Instant.now(), OrderStatus.PENDING);
        for (ProductDTO productDTO : orderDTO.getProducts()) {
            Product product = productRepository.getOne(productDTO.getId());
            order.getProducts().add(product);
        }
        order = orderRepository.save(order);
        return new OrderDTO(order);
    }

    //public List<OrderDTO> findById(){}
}
