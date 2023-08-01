export const toggleCompletedHandlerActionCreator = (completed) => ({
  type: 'TOGGLE_COMPLETED_HANDLER_ACTION_CREATOR',
  payload: completed ? !completed : completed
 })
