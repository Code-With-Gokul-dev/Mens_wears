'use client'
import { ImageUp, X } from 'lucide-react'
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { Controller } from 'react-hook-form';

const UploadImg = ({ control }) => {
    const [isDraging, setDraging] = useState(false);
    const fileInputRef = useRef(null);
    const allowMimeType = ["image/jpg", "image/jpeg", "image/png", "image/webp"];

    const handleContainerClick = () => {
        fileInputRef.current.click();
    };

    return (
        <Controller
            name="images"
            control={control}
            defaultValue={[]}
            render={({ field }) => {
                // Safely handle form value state fallback
                const currentImages = field.value || [];

                const processFiles = (filesList) => {
                    const validImages = Array.from(filesList).filter((file) =>
                        allowMimeType.includes(file.type)
                    );

                    const newImages = validImages.map((file) => ({
                        id: crypto.randomUUID(),
                        file: file,
                        previewUrl: URL.createObjectURL(file),
                        name: file.name,
                    }));

                    // Append new selections directly into React Hook Form state
                    field.onChange([...currentImages, ...newImages]);
                };

                const handleFileChanges = (e) => {
                    if (e.target.files && e.target.files.length > 0) {
                        processFiles(e.target.files);
                    }
                };

                const handleDragOver = (e) => {
                    e.preventDefault();
                    setDraging(true);
                };

                const handleDragLeave = (e) => {
                    e.preventDefault();
                    setDraging(false);
                };

                const handleDrop = (e) => {
                    e.preventDefault();
                    setDraging(false);
                    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                        processFiles(e.dataTransfer.files);
                        e.dataTransfer.clearData();
                    }
                };

                const handleRemove = (e, id, previewUrl) => {
                    e.stopPropagation();
                    URL.revokeObjectURL(previewUrl);
                    
                    // Filter out the image from React Hook Form state
                    const filtered = currentImages.filter((i) => i.id !== id);
                    field.onChange(filtered);
                };

                return (
                    <section className='flex flex-col gap-5'>
                        <div 
                            onClick={handleContainerClick} 
                            onDragOver={handleDragOver} 
                            onDragLeave={handleDragLeave} 
                            onDrop={handleDrop} 
                            className={`min-[calc(100vh-5rem)] h-50 ${isDraging ? "bg-amber-200" : "bg-gray-200/80"} rounded-xl border-gray-500 border-dashed border-2 text-center flex justify-center items-center cursor-pointer`}
                        >
                            <input 
                                type='file' 
                                accept='image/*' 
                                multiple 
                                ref={fileInputRef} 
                                onChange={handleFileChanges} 
                                style={{ display: "none" }} 
                            />
                            <div className='flex flex-col justify-center items-center pointer-events-none'>
                                <ImageUp className='size-20 stroke-1 transition-all duration-300 ease-in-out fill-yellow-400 stroke-black' />
                                <h1>
                                    {isDraging 
                                        ? "Drop It ..." 
                                        : currentImages.length > 0 
                                            ? "Add More Images ..." 
                                            : "Drag and Drop or Upload the Image"
                                    }
                                </h1>
                            </div>
                        </div>

                        <div className='flex rounded-md bg-gray-100'>
                            {currentImages.length > 0 && (
                                <div className='rounded-md flex gap-3 p-2 overflow-x-auto scrollbar-none'>
                                    {currentImages.map((img) => (
                                        <div key={img.id} className='relative w-15 h-15 overflow-hidden shadow shadow-black/50 rounded-md shrink-0'>
                                            <Image 
                                                src={img.previewUrl} 
                                                fill 
                                                className='aspect-square object-cover object-center' 
                                                alt={img.name || "preview"} 
                                            />
                                            <button 
                                                type="button" 
                                                onClick={(e) => handleRemove(e, img.id, img.previewUrl)} 
                                                className='rounded-full flex justify-center group/remove items-center absolute top-1 right-1 w-5 h-5 bg-white/50 shadow z-10'
                                            >
                                                <X className='stroke-black size-3 group-hover/remove:stroke-red-500' />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                );
            }}   
        />
    );
};

export default UploadImg;
