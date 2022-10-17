import { createSlice } from '@reduxjs/toolkit'
import cookies from 'js-cookie'



export const userSlider = createSlice({
    name: 'user',
    initialState: {
        token: ""
    },
    reducers: {
        exite: () => {
            cookies.remove('user')
        },
    }
});

export const { exite } = userSlider.actions;
export default userSlider.reducer;

