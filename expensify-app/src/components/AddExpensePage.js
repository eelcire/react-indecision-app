import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { AddExpense, addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit = {(expense) => {
        props.dispatch(addExpense(expense));
        // re-routes me to dashboard
        props.history.push('/')
      }}
    />
  </div>
)

export default connect()(AddExpensePage);