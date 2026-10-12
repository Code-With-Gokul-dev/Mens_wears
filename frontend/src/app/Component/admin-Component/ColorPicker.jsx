'use client'
import React, { useState, useMemo } from 'react'
import { Controller } from 'react-hook-form'

const ColorPicker = ({ control }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const colors = useMemo(() => [
    { color: 'Black', colorHex: '#000000' },
    { color: 'White', colorHex: '#ffffff' },
    { color: 'Red', colorHex: '#ff0000' },
    { color: 'Lime', colorHex: '#00ff00' },
    { color: 'Blue', colorHex: '#0000ff' },
    { color: 'Yellow', colorHex: '#ffff00' },
    { color: 'Cyan', colorHex: '#00ffff' },
    { color: 'Magenta', colorHex: '#ff00ff' },
    { color: 'Silver', colorHex: '#c0c0c0' },
    { color: 'Gray', colorHex: '#808080' },
    { color: 'Maroon', colorHex: '#800000' },
    { color: 'Olive', colorHex: '#808000' },
    { color: 'Green', colorHex: '#008000' },
    { color: 'Purple', colorHex: '#800080' },
    { color: 'Teal', colorHex: '#008080' },
    { color: 'Navy', colorHex: '#000080' },
    { color: 'Orange', colorHex: '#ffa500' },
    { color: 'Brown', colorHex: '#a52a2a' },
    { color: 'Gold', colorHex: '#ffd700' },
    { color: 'Pink', colorHex: '#ffc0cb' },
    { color: 'Lavender', colorHex: '#e6e6fa' },
    { color: 'Turquoise', colorHex: '#40e0d0' },
    { color: 'Coral', colorHex: '#ff7f50' },
    { color: 'Salmon', colorHex: '#fa8072' },
    { color: 'Indigo', colorHex: '#4b0082' },
    { color: 'Violet', colorHex: '#ee82ee' },
    { color: 'Plum', colorHex: '#dda0dd' },
    { color: 'Orchid', colorHex: '#da70d6' },
    { color: 'Khaki', colorHex: '#f0e68c' },
    { color: 'Beige', colorHex: '#f5f5dc' },
    { color: 'Mint', colorHex: '#f5fffa' },
    { color: 'Crimson', colorHex: '#dc143c' }
  ], [])

  return (
    <Controller
      name="colors"
      control={control}
      defaultValue={[]}
      render={({ field }) => {
        
        const currentSelection = field.value || []

        
        const filteredColors = colors.filter((colorObj) => {
          const matchesSearch = colorObj.color.toLowerCase().includes(searchTerm.toLowerCase())
          const isAlreadySelected = currentSelection.some(item => item.color === colorObj.color)
          return matchesSearch && !isAlreadySelected
        })

        const handleSelect = (colorObj) => {
          field.onChange([...currentSelection, colorObj])
          setSearchTerm('') 
        }

        const handleRemove = (colorObj) => {
          field.onChange(currentSelection.filter(item => item.color !== colorObj.color))
        }

        return (
          <div className="gap-3 flex flex-col relative w-full">
            {/* Input container with tags */}
            <div className="bg-gray-100 border border-gray-400 rounded p-3 flex flex-wrap gap-1.5 items-center">
              {currentSelection.map((item, idx) => (
                <span 
                  key={idx} 
                  className="flex items-center gap-1.5 bg-white border border-gray-300 rounded-full px-2.5 py-1 text-xs text-black shadow-sm"
                >
                  <span 
                    style={{ backgroundColor: item.colorHex }} 
                    className="w-3 h-3 rounded-full border border-gray-300 inline-block" 
                  />
                  <span>{item.color}</span>
                  <button 
                    type="button" 
                    onClick={() => handleRemove(item)} 
                    className="text-gray-400 hover:text-black font-bold ml-0.5"
                  >
                    &times;
                  </button>
                </span>
              ))}
              
              <input 
                className="bg-transparent outline-none flex-1 min-w-25 text-sm text-black placeholder:text-gray-400 px-1" 
                onChange={(e) => setSearchTerm(e.target.value)} 
                value={searchTerm} 
                type="search" 
                placeholder={currentSelection.length === 0 ? "Product colors..." : "Add more..."} 
              />
            </div>

            {/* Dropdown list - only displays if searching */}
            {searchTerm && filteredColors.length > 0 && (
              <div className="bg-white absolute left-0 right-0 top-16 border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto z-10 scrollbar-thin scrollbar-thumb-gray-400">
                <ul className="p-0 m-0 list-none">
                  {filteredColors.map((colorObj, i) => (
                    <li 
                      key={i} 
                      onClick={() => handleSelect(colorObj)} 
                      className="flex gap-2 bg-white hover:bg-gray-100 p-2 items-center cursor-pointer select-none"
                    >
                      <span 
                        style={{ backgroundColor: colorObj.colorHex }} 
                        className="rounded-full w-5 h-5 block border border-gray-300/70" 
                      />
                      <span className="text-black text-sm">{colorObj.color}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      }}
    />
  )
}

export default ColorPicker
