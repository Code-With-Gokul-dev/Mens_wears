import React from 'react'

const InputComponent = ({ register, errors, inputName, style,type }) => {

    return (
        <div className='flex flex-col'>
            <div className=' text-black font-caveat font-medium bg-white  overflow-hidden'>
                <input 
                    type={type}
                   className={style}
                    placeholder={inputName}
                    {...register(inputName, { required: `${inputName} is required` })}
                />
            </div>
            {errors[inputName] && <p className='text-red-500 text-xs mt-1'>{errors[inputName].message}</p>}
        </div>
    )
}

export default InputComponent