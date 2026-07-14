import React from 'react'

const InputComponent = ({ register, errors, inputName }) => {

    return (
        <div className='flex flex-col'>
            <div className=' text-black font-caveat font-medium bg-white rounded-md rounded-b-none overflow-hidden'>
                <input
                    type="text"
                    className='p-2 w-full outline-none border-b-2 border-gray-600 '
                    placeholder={inputName}
                    {...register(inputName, { required: `${inputName} is required` })}
                />
            </div>
            {errors[inputName] && <p className='text-red-500 text-xs mt-1'>{errors[inputName].message}</p>}
        </div>
    )
}

export default InputComponent