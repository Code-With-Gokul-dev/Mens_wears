import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const backendUrl = "/api";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: backendUrl,
        credentials: "include"
    }),

    // Tags for caching
    tagTypes: ["User", "Products", "Orders", "Cart"],

    endpoints: (builder) => ({
        //    Login Api 
        loginApi: builder.mutation({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
            }),
            invalidatesTags: ["User", "Cart"],
        }),
        // register the new user
        registerUser: builder.mutation({
            query: (userData) => ({
                url: "/register",
                method: "POST",
                body: userData,
            }),
        }),
        // get user data after login
        getMe: builder.query({
            query: () => "/me",
            providesTags: ["User"]

        }),
        // logout user 
        logout: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "POST",
                credentials: "include"
            })
        })
    }),
});



export const {
    useLoginApiMutation,
    useRegisterUserMutation,
    useLazyGetMeQuery,
    useGetMeQuery,
    useLogoutMutation
} = baseApi;