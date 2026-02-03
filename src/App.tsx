import MenuItems from './components/MenuItems.tsx'
import OrderItems from './components/OrderItems.tsx'
import OrderTotal from './components/OrderTotal.tsx'
import { menuItems } from './data/db.ts'
import useOrder from './hooks/useOrder.ts'

function App() {
  const { order,tip, setTip, addItem,removeItem,removeAllItems } = useOrder()
  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl text-center font-bold">Calculadora de Propinas</h1>
      </header>
      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
        <div className='space-y-4 '>
          <h2 className=' text-3xl font-bold text-center'>Menu</h2>
          <div className='space-y-4'>
            {menuItems.map((item) => (
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className='ml-5 border border-dashed border-gray-900 p-1 rounded-lg space-y-4'>
          <OrderItems
            order={order}
            removeItem={removeItem}
          />
          <div className='mt-5 mx-10'>
            <OrderTotal
              order={order}
              tip={tip}
              setTip={setTip}
              removeAllItems={removeAllItems}
            />
          </div>
          
        </div>
      </main>
    </>
  )
}

export default App
