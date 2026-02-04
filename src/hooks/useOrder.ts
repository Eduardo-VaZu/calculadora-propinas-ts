import { useState } from "react"
import type { OrderItem, MenuItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState<number>(0)

    const addItem = (item: MenuItem) => {
        const exists = order.find(orderItem => orderItem.id === item.id)
        if (exists) {
            setOrder(prev => (
                prev.map(
                    orderItem => orderItem.id === item.id
                        ? { ...orderItem, quantity: (orderItem.quantity ?? 1) + 1 }
                        : orderItem
                )))
        }else {
            setOrder(prev => [...prev, { ...item, quantity: 1 }])
        }
    }

    const countPrice = () => {
        return order.reduce((acc, item) => acc + (item.price * (item.quantity ?? 1)), 0)
    }

    const removeItem = (id: OrderItem['id']) => {
        setOrder(prev => prev.filter(item => item.id !== id))
    }

    const removeAllItems = () => {
        setTip(0)
        setOrder([])
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        countPrice,
        removeItem,
        removeAllItems
    }

}