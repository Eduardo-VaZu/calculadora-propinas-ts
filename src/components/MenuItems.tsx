import type { MenuItem} from '../types'
type MunuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

export default function MenuItems({ item, addItem }: MunuItemProps) {
    return (

        <button className='border-2 border-gray-80 hover:bg-gray-500 rounded-md w-full p-3 flex justify-between'
        onClick={() => addItem(item)}>
            <p>{item.name}</p>
            <p className='text-bold'>${item.price}</p>
        </button>

    )
}
