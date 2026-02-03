import { formatPrice } from '../helpers'
import type { OrderItem } from '../types/index'

type OrderItemProps = {
    order: OrderItem[]
    removeItem: (id: OrderItem['id']) => void
}

export default function OrderItems({ order, removeItem }: OrderItemProps) {
    return (
        <div>
            <h2 className=' text-3xl font-bold text-center'>Consumo</h2>
            <div className='space-y-4 mt-5 mx-10'>
                {
                    order.length === 0 ?
                    <p className='text-center'>No hay items en el consumo</p>
                    :
                    order.map((item) => (
                        <div key={item.id} className='flex justify-between border-b border-gray-800'>
                        <div  className='items-center'>
                            <p className='text-lg font-semibold'>{item.name} - {formatPrice(item.price)}</p>
                            <p className='text-lg font-bold'>cantidad: {item.quantity}</p>
                        </div>
                        <button className='bg-red-500 hover:bg-red-700 hover:animate-pulses h-8 w-8 text-white rounded-full flex items-center justify-center' onClick={() => removeItem(item.id)}>X</button>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
