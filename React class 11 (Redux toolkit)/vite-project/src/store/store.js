// ----------------------------------------------------------- GLOABAL STORE ----------------------------------------------------------------
// Yahaan ham kar kia rahy han ?
// Yah basically hamara aik GLOBAL STORE hay. Ham apnay iss GLOBAL STORE ko apni application ky sath connect karein gy.(Check the main.jsx file)

// 1) Yahaan ham aik configureStore ka function mangwa rahy han iss redux ki library sy '@reduxjs/toolkit' jo ham phely hi install kar chuky han.
// 2) Iss function ka use kar ky ham apna aik global store / global state create karwa rahy han.
// 3) ConfigureStore ky andar hamary pas object ho ga reducer: {} jis my ham apnay store ky tamam SLICES ki initial states ko get together kar
//  rahy hongy/ Combine kar rhay han hongy tamam slices ki states ko reducer object ky andar.

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

