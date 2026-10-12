import { X } from 'lucide-react'
import { div } from 'motion/react-client';
import React, { useMemo, useState } from 'react'
import { Controller } from 'react-hook-form';

const SizePicker = ({ control }) => {
    const [searchQuery, SetSearchQuery] = useState("");
    const [selectedSize, setSelectedSize] = useState([]);

    const sizes = useMemo(() => [
        "S",
        "M",
        "L",
        "XL",
        "2XL",
        "3XL",
        "4XL"
    ], [])
    return (
        <Controller
            name="sizes"
            control={control}
            defaultValue={[]}
            rules={{ required: "Please select at least one size" }}
            render={({ field }) => {
                const currentSelection = field.value || [];
                const trimmed = searchQuery.trim().toLowerCase();
                const filterSize = trimmed
                    ? sizes.filter((s) => {
                        const matchedSize = s.toLowerCase().includes(trimmed);
                        const isNotSelected = !selectedSize.includes(s);
                        return matchedSize && isNotSelected;
                    })
                    : [];


                const handleSelected = (size) => {
                    field.onChange([...currentSelection, size]);
                    setSelectedSize((prev) => [...prev, size]);
                    SetSearchQuery("");
                }
                const handleRemove = (sizeRemove) => {
                    field.onChange(currentSelection.filter((r) => r !== sizeRemove));
                    setSelectedSize((prev) => prev.filter((r) => r !== sizeRemove));

                }
                return (
                    <div className=' flex flex-col gap-2 relative'>
                        <div className=' w-full p-2.5 flex flex-wrap gap-1 border rounded-md bg-gray-100 border-gray-400   '>
                            {
                                selectedSize.map((s, index) => (
                                    <div key={index} className='bg-white border px-2 py-1  flex justify-between border-gray-200 text-sm  rounded-full font-medium font-bricolage gap-2'>
                                        <span >{s}</span>
                                        <button type='button' onClick={() => handleRemove(s)} >
                                            <X size={10} className='stroke-gray-400 hover:stroke-red-400' />
                                        </button>
                                    </div>
                                ))
                            }

                            <input value={searchQuery} onChange={(e) => SetSearchQuery(e.target.value)} type="search" className='outline-none placeholder:text-sm w-full flex-1'
                                placeholder={selectedSize.length === 0 ? "Choose Product Size" : "Add size"} />
                        </div>



                        {
                            filterSize.length > 0 && (
                                <div className='rounded-xl absolute left-0 right-0 top-15 p-2 bg-white shadow shadow-gray-300 border-2 border-gray-300' >
                                    <ul className='w-full p-0 m-0   '>
                                        {
                                            filterSize.map((m, i) => (
                                                <li key={i}
                                                    onClick={() => handleSelected(m)} className='w-full p-1  text-black bg-white hover:bg-gray-100'>
                                                    {m}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                )

            }} />)
}

export default SizePicker