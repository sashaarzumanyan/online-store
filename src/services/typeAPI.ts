import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IType } from '../interface/Itype'
import { IUser } from '../interface/userInteface'

export const typeApi = createApi({
    reducerPath: 'typeApi',
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000/api` }),
    endpoints: (build) => ({
        getTypes: build.query<IType[], number>({
            query: () => ({
                url: `/type`,
            })
        })
    })
})

export const {useGetTypesQuery} = typeApi