'use client'

import toast from "react-hot-toast";

const Notify = (message, type = "blank") => {
    const options = {
        duration: 3000,
        position: 'top-center',
        removeDelay: 1000,
        className: 'bg-red-500  text-zinc-900  border border-zinc-200  rounded-full shadow-lg font-medium text-sm  tracking-tight ',
        iconTheme: {
            primary: type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6",
            secondary: "#fff",
        },
    };

    if (type === "success") {
        toast.success(message, options);
    } else if (type === "error") {
        toast.error(message, options);
    } else {
        toast(message, options);
    }
};

export default Notify;
