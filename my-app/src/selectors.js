export const selectLoading = ({ statusState }) => statusState.loading
export const selectSearch = ({ searchState }) => searchState.search
export const selectSort = ({ sortState }) => sortState.sort
export const selectTodosServer = ({ todosState }) => todosState.todosServer
export const selectRefresh = ({ todosState }) => todosState.refresh
export const selectEdit = ({ todosState }) => todosState.edit
