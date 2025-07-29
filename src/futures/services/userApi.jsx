import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const userApi = createApi({
    reducerPath: 'apiUsers',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://store-api.softclub.tj/",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('access_token')
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getRegister: builder.mutation({
            query: (newRegister) => ({
                url: 'Account/register',
                method: 'POST',
                body: newRegister
            })
        }),
        postLogin: builder.mutation({
            query: (newLogin) => ({
                url: 'Account/login',
                method: 'POST',
                body: newLogin
            })
        }),
        getProduct: builder.query({
            query: () => 'Product/get-products'
        }),
        getCart: builder.query({
            query: () => 'Cart/get-products-from-cart'
        }),
        deleteInCart: builder.mutation({
            query: (id) => ({
                url: `Cart/delete-product-from-cart?id=${id}`,
                method: 'DELETE'
            })
        }),
        increaseCartProduct: builder.mutation({
            query: (id) => ({
                url: `Cart/increase-product-in-cart?id=${id}`,
                method: 'PUT'
            })
        }),
        dicreaseCartProduct: builder.mutation({
            query: (id) => ({
                url: `Cart/reduce-product-in-cart?id=${id}`,
                method: 'PUT'
            })
        }),
        clearCart: builder.mutation({
            query: () => ({
                url: `Cart/clear-cart`,
                method: 'DELETE'
            })
        }),
        subCategories: builder.query({
            query: () => 'Category/get-categories'
        }),
        getProfile: builder.query({
            query: (userId) => `UserProfile/get-user-profile-by-id?id=${userId}`,
        }),
        cleareCart: builder.mutation({
            query: () => ({
                url: 'Cart/clear-cart',
                method: "DELETE",
            })
        }),
        getBrand: builder.query({
            query: () => 'Brand/get-brands'
        }),
        editProfile: builder.mutation({
            query: (formData) => ({
                url: 'UserProfile/update-user-profile',
                method: 'PUT',
                body: formData
            })
        })
    })
})

export const { useEditProfileMutation,useGetBrandQuery, useCleareCartMutation, useGetProfileQuery, useSubCategoriesQuery, useClearCartMutation, useDicreaseCartProductMutation, useGetRegisterMutation, useIncreaseCartProductMutation, usePostLoginMutation, useGetProductQuery, useGetCartQuery, useDeleteInCartMutation } = userApi