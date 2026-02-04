import { tipOpcions } from "../data/tipOptions"
import type { Dispatch, SetStateAction } from "react"

type OrderTipFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}
export default function OrderTipForm({ setTip, tip}: OrderTipFormProps) {
    return (
        <>
            <div className="space-y-3 bg-gray-200 p-4 rounded-md">
                <div className="flex flex-col">
                    <form>
                        {tipOpcions.map((tipOpcion) => (
                            <div key={tipOpcion.id} className="flex items-center">
                                <input id={tipOpcion.id} type="radio" name="tip" value={tipOpcion.value} className="mr-2"
                                    onChange={(e) => setTip(Number(e.target.value))} 
                                    checked={tipOpcion.value === tip} />
                                <label htmlFor={tipOpcion.id} className="mr-4">{tipOpcion.name}</label>
                            </div>
                        ))}
                    </form>
                </div>
            </div>
        </>

    )
}
