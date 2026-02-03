import { tipOpcions } from "../data/tipOptions"
import type { Dispatch, SetStateAction } from "react"

type OrderTipFormProps = {
    setTip: Dispatch<SetStateAction<number>>
}
export default function OrderTipForm({ setTip }: OrderTipFormProps) {
    return (
        <>
            <div className="space-y-3 bg-gray-200 p-4 rounded-md">
                <div className="flex flex-col">
                    <form>
                        {tipOpcions.map((tip) => (
                            <div key={tip.id} className="flex items-center">    
                                <input id={tip.id} type="radio" name="tip" value={tip.value} className="mr-2" onChange={(e) => setTip(Number(e.target.value))} />
                                <label htmlFor={tip.id} className="mr-4">{tip.name}</label>
                            </div>
                        ))}
                    </form>
                </div>
            </div>
        </>

    )
}
