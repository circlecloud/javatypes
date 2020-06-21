declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scheduler {
                /**
                 * Represents a scheduler for running {@link Task}s.
                 */
                // @ts-ignore
                interface Scheduler {
                    /**
                     * Gets a new instance of a {@link Task.Builder}.
                     * @return A new task builder
                     */
                    // @ts-ignore
                    createTaskBuilder(): org.spongepowered.api.scheduler.Task.Builder
                    /**
                     * Retrieves a scheduled or running task by its unique ID.
                     * @param id The id of the task
                     * @return The scheduled or running task, or {#link Optional#empty()}
                     */
                    // @ts-ignore
                    getTaskById(id: java.util.UUID): java.util.Optional<org.spongepowered.api.scheduler.Task>
                    /**
                     * Returns a set of {@link Task}s that match the Regular Expression pattern.
                     * @param pattern The regular expression pattern applied to the name of
                     *         tasks
                     * @return A set of {#link Task}s that have names that match the pattern,
                     *          the set will be empty if no names match
                     */
                    // @ts-ignore
                    getTasksByName(pattern: java.lang.String | string): Array<org.spongepowered.api.scheduler.Task>
                    /**
                     * Returns a set of all currently scheduled tasks.
                     * @return A set of scheduled tasks
                     */
                    // @ts-ignore
                    getScheduledTasks(): Array<org.spongepowered.api.scheduler.Task>
                    /**
                     * Returns a set of all currently scheduled tasks for either asynchronous or
                     * synchronous execution.
                     * @param async True to get all async tasks, false to get all sync tasks
                     * @return A set of scheduled tasks for the given sync type
                     */
                    // @ts-ignore
                    getScheduledTasks(async: boolean): Array<org.spongepowered.api.scheduler.Task>
                    /**
                     * Returns a set of all currently scheduled tasks owned by the given plugin.
                     * @param plugin The plugin that created the tasks
                     * @return A set of scheduled tasks
                     */
                    // @ts-ignore
                    getScheduledTasks(plugin: java.lang.Object | any): Array<org.spongepowered.api.scheduler.Task>
                    /**
                     * Gets the ideal delay between ticks in milliseconds. The server aims to
                     * stabilise at this value.
                     * @return The preferred tick interval
                     */
                    // @ts-ignore
                    getPreferredTickInterval(): number /*int*/
                    /**
                     * Creates a new {@link ExecutorService} that can be used to schedule
                     * synchronous tasks through the standard Java concurrency interfaces.
                     * @param plugin The plugin that will own the created tasks
                     * @return A new executor service that can be used to execute
                     *      synchronous tasks
                     */
                    // @ts-ignore
                    createSyncExecutor(plugin: java.lang.Object | any): org.spongepowered.api.scheduler.SpongeExecutorService
                    /**
                     * Creates a new {@link ExecutorService} that can be used to schedule
                     * asynchronous tasks through the standard Java concurrency interfaces.
                     * @param plugin The plugin that will own the created tasks
                     * @return A new executor service that can be used to execute
                     *      asynchronous tasks
                     * @see Task.Builder#async()
                     */
                    // @ts-ignore
                    createAsyncExecutor(plugin: java.lang.Object | any): org.spongepowered.api.scheduler.SpongeExecutorService
                }
            }
        }
    }
}
