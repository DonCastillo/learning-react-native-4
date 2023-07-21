import { Text } from "react-native";
import { useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext);
    return (
        <ExpensesOutput
            expenses={expensesCtx.expenses}
            expensesPeriod="Total"
            fallbackText="No registered expenses found."
        />
    );
}

export default AllExpenses;
