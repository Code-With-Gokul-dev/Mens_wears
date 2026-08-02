import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const backendUrl = "/api";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: backendUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth?.token
            if (token) {
                headers.set("authorization", `Bearer ${token}`)
            }
            headers.set('Content-Type', 'application/json')
            return headers
        },
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
        registerUser: builder.mutation({
            query: (userData) => ({
                url: "/register",
                method: "POST",
                body: userData,
            }),
        }),
        getMe: builder.query({
            query: () => "/me",
            providesTags: ["User"]

        }),

    }),
});



export const {
    useLoginApiMutation,
    useRegisterUserMutation,
    useLazyGetMeQuery,
    useGetMeQuery
} = baseApi;