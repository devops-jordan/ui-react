"use client"
import { createContext, useContext, useState } from "react";


export interface AppContextUI {
  status: boolean
  title: string
  changeStatus?: () => void
}

const AppContext = createContext<AppContextUI>({
  status: true,
  title: 'AppRoot-Component',
  // changeStatus: () => { }
})

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider value={
      {
        status: true,
        title: "AppRoot-Component",
      }
    }>
      {children}
    </AppContext.Provider>
  )
}
export function useAppContext() {
  return useContext(AppContext)
}