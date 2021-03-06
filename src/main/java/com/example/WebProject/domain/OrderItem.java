package com.example.WebProject.domain;

import com.example.WebProject.domain.Item.Item;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter

public class OrderItem {
    @Id
    @GeneratedValue
    @Column(name="order_item_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "item_id")
    private Item item;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="order_id")
    private Order order;

    private int orderPrice;
    private int count;


    //==주문 생성 메서드==//
    public static OrderItem createOrderItem(Item item, int orderPrice ,int count){
        OrderItem orderItem = new OrderItem();
        orderItem.setItem(item);
        orderItem.setOrderPrice(orderPrice);
        orderItem.setCount(count);

        item.removeStock(count);
        return orderItem;
    }

    //==켄슬==//
    public void cancel(){
        getItem().addStock(count);
    }
    //==총 가격 조회==//
    public int getTotalPrice(){
        return getOrderPrice() * getCount();
    }

}
