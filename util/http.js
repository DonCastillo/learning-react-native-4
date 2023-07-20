import axios from "axios";

export function storeExpense(expenseData) {
    axios.post(
        "https://react-native-course-8ee6a-default-rtdb.firebaseio.com/expenses.json",
        expenseData
    );
}

