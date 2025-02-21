import { AppDispatch, RootState } from '@/store'
import { setSearch } from '@/store/features/globalSlice'
import React from 'react'
import { Searchbar } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'

export default function Search() {
    const global = useSelector((state: RootState) => state.global)
    const dispatch: AppDispatch = useDispatch()

    return (
        <Searchbar
            placeholder="Search"
            style={{height:55}}
            onChangeText={(value) => dispatch(setSearch(value))}
            value={global.search}
        />
    )
}
