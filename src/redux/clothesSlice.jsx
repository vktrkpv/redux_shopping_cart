import { createSlice } from '@reduxjs/toolkit'

export const clothesSlice = createSlice({
    name: 'clothes',
    initialState: {
        selectedCategory: "ALL"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }

    },

})

export const getSelectedCategory = state => state.clothes.selectedCategory;
export default clothesSlice.reducer;
export  const { filterCategory } = clothesSlice.actions;