import { formatPrice } from "../helpers"
import OrderTipForm from "./OrderTipForm"
import { useMemo, type Dispatch, type SetStateAction } from "react"
import type { OrderItem } from "../types"

type OrderPriceProps = {
    order: OrderItem[]
    tip: number
    setTip: Dispatch<SetStateAction<number>>
}

export default function OrderTotal({ order, tip, setTip }: OrderPriceProps) {
    const subtotal = useMemo(() => order.reduce((acc, item) => acc + (item.price * item.quantity), 0), [order])
    const tipAmount = useMemo(() => subtotal * tip, [tip, order])
    return (
        <>
            <div className="space-y-3 bg-gray-200 p-4 rounded-md">
                <OrderTipForm setTip={setTip} />
                <p className="flex flex-col">
                    <span className="text-lg font-semibold">SubTotal:  {formatPrice(subtotal)}</span>
                    <span className="text-lg font-semibold">Propina:  {formatPrice(tipAmount)}</span>
                    <span className="text-lg font-bold flex justify-end">Total:  {formatPrice(subtotal + tipAmount)}</span>
                </p>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Pagar
                </button>
            </div>
        </>
    )
}
