import { useState, createContext, useContext } from "react"


const BudgetContext = createContext()

const BudgetProvider = (({ children }) => {

  const [budgetMode, setBudgetMode] = useState(true)

  return (
    <BudgetContext.Provider
      value={{
        budgetMode,
        setBudgetMode,
      }}>
      {children}
    </BudgetContext.Provider>
  )

})

const useBudget = () => {
  const context = useContext(BudgetContext)
  return context
}

export { BudgetProvider, useBudget }


