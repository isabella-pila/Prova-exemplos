import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

export interface IAuthContextData {
  login: boolean
  setLogin: Dispatch<SetStateAction<boolean>>
}
export interface IProvider {
  children: ReactNode
}
const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)
export const AuthProvider = ({children}:IProvider) => {
  const [login, setLogin] = useState(false)
  return (
    <AuthContext.Provider value={{login, setLogin}}>
      {children}
    </AuthContext.Provider>
  )
}
export function useAuth(): IAuthContextData {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth deve ser utilizado com o AuthProvider')
    }
    return context
}
