export const getTasksFromLocalStorage = <T>(selectedDay?: string): T => {
    if (!selectedDay) return [] as T;
    const cachedTasks = localStorage.getItem(selectedDay);
    return cachedTasks ? JSON.parse(cachedTasks) : ([] as T);
};

export const saveTasksToLocalStorage = (selectedDay: string, newTasks: unknown) => {
    localStorage.setItem(selectedDay, JSON.stringify(newTasks));
};

export const removeTasksFromLocalStorage = (selectedDay: string) => {
    localStorage.removeItem(selectedDay);
};
