"use client"
import React, { useState, useMemo } from 'react'
import { Search, Filter, SlidersHorizontal, Plus, Edit2 } from 'lucide-react'
import InputComponent from '@/app/Component/InputComponent';
import { useForm } from 'react-hook-form';
import DialogBox from '@/app/Component/admin-Component/DialogBox';

// Mock data
const MOCK_PRODUCTS = Array.from({ length: 50 }).map((_, i) => {
  const categories = ['Shirt', 'T-Shirt', 'Pant'];
  const category = categories[i % categories.length];
  return {
    id: `PROD-${1000 + i}`,
    name: `${category} ${i + 1}`,
    category: category,
    stock: Math.floor(Math.random() * 25) + 1,
    price: 300 + (i * 10)
  };
});

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [dialogOpen, setDialogOpen] = useState(false)

  // Form hooks 
  const { register, handleSubmit, control, formState: { errors, isSubmitting, isValid, disabled } } = useForm({
    defaultValues: {
      productName: "",
      price: "",
      category: "",
      colors: [],
      sizes: [],
      images: [],
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  }
  // Available filter target groups
  const filterTabs = ['All', 'Shirt', 'T-Shirt', 'Pant']

  // Handle dialog box
  const handleDialogBox = () => {
    setDialogOpen(!dialogOpen)
  }
  //  search and filter 
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section className="ml-60  min-h-screen w-[calc(100%-15rem)] bg-gray-50 p-6 font-bricolage">

      {/*  Header*/}
      <div className="flex items-center justify-between pb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Products</h1>
          <p className="text-xs text-gray-500 mt-0.5">Manage, filter, and track your active inventory live</p>
        </div>

        <button onClick={handleDialogBox} className="cursor-pointer rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-rose-600 hover:shadow active:scale-95 flex items-center gap-2 justify-center">
          <Plus /> Add Product
        </button>
      </div>

      <DialogBox dialogOpen={dialogOpen} handleSubmit={handleSubmit(onSubmit)} handleDialogBox={handleDialogBox} register={register} errors={errors} control={control} isSubmitting={isSubmitting} />

      {/* Main Content */}
      <div className="w-full rounded-4xl bg-black p-6 shadow-inner border border-gray-800 flex flex-col gap-5">

        {/* Search and Filter Panel Controllers */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-gray-800">

          {/* Dynamic Input Query Field */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search by name or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-black border border-gray-700 text-white rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all duration-200"
            />
          </div>

          {/* Filtering Category Segment Controls */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none">
            <span className="text-xs font-medium text-gray-600  items-center gap-1.5 mr-1 hidden sm:flex">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Filter:
            </span>
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                className={`cursor-pointer px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap
                  ${selectedCategory === tab
                    ? "bg-pink-600 text-white shadow-md shadow-pink-900/20"
                    : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Scrollable Data List */}
        <ul className="flex max-h-[calc(100vh-18rem)] flex-col gap-3 overflow-y-auto pr-2 ">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li
                key={product.id}
                className="flex items-center justify-between rounded-2xl bg-black border border-gray-800/60 p-5 transition-all duration-200 hover:bg-black/70 hover:border-gray-700 group cursor-pointer"
              >
                {/* Product Image and Product name */}
                <div className="flex items-center gap-4">
                  {/* Fallback Image Thumbnail Box */}
                  <div className="h-12 w-12 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-500 font-bold text-[10px] tracking-wider uppercase group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-500 transition-all duration-200">
                    {product.category === 'T-Shirt' ? 'TSHIRT' : product.category.toUpperCase()}
                  </div>
                  <div>
                    <h2 className="font-semibold text-white group-hover:text-pink-400 transition-colors">{product.name}</h2>
                    <p className="text-xs text-gray-500 mt-0.5">ID: #{product.id}</p>
                  </div>
                </div>
                {/* Product stock status */}
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <span className="block text-xs font-medium text-gray-400">Stock Status</span>
                    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset mt-1
                      ${product.stock > 5
                        ? "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20"
                        : "bg-amber-500/10 text-amber-400 ring-amber-500/20"
                      }`}
                    >
                      {product.stock} units
                    </span>
                  </div>

                  <div className="text-right min-w-20">
                    <span className="block text-xs text-gray-500">Unit Price</span>
                    <span className="text-lg font-bold text-white tracking-tight">₹{product.price}</span>
                  </div>
                </div>
                {/* Edit btn */}
                <button className='text-white bg-rose-500 p-2 rounded-full'>
                  <Edit2 />
                </button>
              </li>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center border border-dashed border-gray-800 rounded-2xl bg-gray-900/50">
              <Filter className="w-8 h-8 text-gray-600 mb-2" />
              <p className="text-sm font-medium text-gray-400">No matching products found</p>
              <p className="text-xs text-gray-600 mt-1">Try tweaking your search term or clear active filters</p>
            </div>
          )}
        </ul>
      </div>
    </section>
  )
}

export default Page
