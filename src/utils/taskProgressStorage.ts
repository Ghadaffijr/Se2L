const COMPLETED_TASK_IDS_STORAGE_KEY = 'se2lCompletedTaskIds'

export function getSavedCompletedTaskIds() {
  const savedCompletedTaskIds = localStorage.getItem(
    COMPLETED_TASK_IDS_STORAGE_KEY,
  )

  if (!savedCompletedTaskIds) {
    return []
  }

  try {
    return JSON.parse(savedCompletedTaskIds) as string[]
  } catch {
    return []
  }
}

export function saveCompletedTaskIds(taskIds: string[]) {
  localStorage.setItem(COMPLETED_TASK_IDS_STORAGE_KEY, JSON.stringify(taskIds))
}

export function isTaskComplete(taskId: string) {
  return getSavedCompletedTaskIds().includes(taskId)
}

export function toggleSavedTaskCompletion(taskId: string) {
  const completedTaskIds = getSavedCompletedTaskIds()

  const updatedCompletedTaskIds = completedTaskIds.includes(taskId)
    ? completedTaskIds.filter((completedTaskId) => completedTaskId !== taskId)
    : [...completedTaskIds, taskId]

  saveCompletedTaskIds(updatedCompletedTaskIds)

  return updatedCompletedTaskIds
}