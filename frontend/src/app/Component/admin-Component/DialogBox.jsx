import React from "react";
import InputComponent from "../InputComponent";
import { X } from "lucide-react";
import ColorPicker from "./ColorPicker";
import SizePicker from "./SizePicker";
import UploadImg from "./UploadImg";


const DialogBox = ({ dialogOpen, handleSubmit, handleDialogBox, register, errors, control, isSubmitting }) => {

    return (
        <div
            className={`${dialogOpen ? "flex" : "hidden"} bg-black/80 backdrop-blur-2xl  fixed top-0 left-0 bottom-0 z-50 w-full  justify-center items-center min-h-screen overflow-y-hidden`}
        >
            {/* Box */}
            <div
                className={`${dialogOpen ? "block" : "hidden"} relative bg-white shadow-2xl shadow-black/50  max-w-4xl w-full h-150 rounded-xl p-5`}
            >
                <div className="flex justify-between items-center">
                    <h1 className="font-bricolage font-semibold text-gray-800 text-lg">
                        Add Product
                    </h1>

                    <button
                        onClick={handleDialogBox}
                        className="bg-red-50 rounded-full cursor-pointer hover:bg-red-100 p-2 border border-gray-300/50 shadow-inner shadow-white/50"
                    >
                        <X className="text-red-400" />
                    </button>
                </div>

                {/* Product Form */}
                <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-5">
                    {/* first row */}
                    <div className="grid grid-cols-3 gap-10 ">
                        <InputComponent
                            style={
                                "bg-gray-100 placeholder:text-gray-600 max-w-full w-full rounded-md p-2 border border-gray-300 outline-none focus:border-gray-500 placeholder:text-sm"
                            }
                            register={register}
                            errors={errors}
                            inputName={"productName"}
                            placeholder={"Product Name"}
                        />
                        <InputComponent
                            style={
                                "bg-gray-100 placeholder:text-gray-600 max-w-full w-full rounded-md p-2 border border-gray-300 outline-none focus:border-gray-500 placeholder:text-sm"
                            }
                            register={register}
                            errors={errors}
                            inputName={"price"}
                            placeholder={"Price"}
                            registerOptions={{
                                required: "Price is required",
                                pattern: {
                                    value: /^[0-9]+(\.[0-9]{1,2})?$/,
                                    message: "Please enter a valid price",
                                },
                            }}
                        />

                        <select
                            {
                            ...register("category", {
                                required: "Category is required",
                            })
                            }
                            className="max-w-full w-full bg-gray-100 border-2 font-bricolage text-gray-600 text-sm border-gray-300 outline-none rounded-md"
                        >
                            <option value="">Select category</option>
                            <option value="shirt">
                                Shirt
                            </option>
                            <option value="t-shirt">T-shirt</option>
                            <option value="pant">Pant</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 items-baseline gap-5">
                        {/*Pick the color */}
                        <ColorPicker control={control} />

                        {/* Size picker */}
                        <SizePicker control={control} />
                    </div>
                    {/* Image uploader */}
                    <UploadImg control={control} />

                    <div className="absolute bottom-5 right-10 flex items-center justify-end gap-3">
                        <button
                            type="button"
                            onClick={handleDialogBox}
                            className="bg-white/80 min-w-20 w-full hover:bg-white transition-all ease-in-out duration-200 border-2 drop-shadow-2xl drop-shadow-black/70 border-gray-200 p-2 rounded-full shadow-inner shadow-white/40 cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-black/95 min-w-20 w-full hover:bg-black cursor-pointer text-white p-2 rounded-full shadow-inner shadow-white"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DialogBox;
