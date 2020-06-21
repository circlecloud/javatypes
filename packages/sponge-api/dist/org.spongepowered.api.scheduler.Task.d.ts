declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scheduler {
                /**
                 * Represents a task that has been scheduled.
                 */
                // @ts-ignore
                interface Task extends org.spongepowered.api.util.Identifiable {
                    /**
                     * Creates a new {@link Builder} to build a {@link Task}.
                     * @return The new builder
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.scheduler.Task.Builder
                    /**
                     * Gets the name of this task.
                     * @return The name of the task
                     */
                    // @ts-ignore
                    getName(): string
                    /**
                     * Returns the plugin that scheduled this task.
                     * @return The plugin that scheduled the task
                     */
                    // @ts-ignore
                    getOwner(): org.spongepowered.api.plugin.PluginContainer
                    /**
                     * Gets the delay that the task was scheduled to run after. A delay of 0
                     * represents that the task started immediately.
                     * @return The delay (offset) in either milliseconds or ticks (ticks are
                     *          exclusive to synchronous tasks)
                     */
                    // @ts-ignore
                    getDelay(): number /*long*/
                    /**
                     * Gets the interval for repeating tasks. An interval of 0 represents that
                     * the task does not repeat.
                     * @return The interval (period) in either milliseconds or ticks (ticks are
                     *          exclusive to synchronous tasks)
                     */
                    // @ts-ignore
                    getInterval(): number /*long*/
                    /**
                     * Cancels the task. Cancelling a repeating task will prevent any further
                     * repetitions of the task.
                     * @return If the task is not running and was cancelled
                     */
                    // @ts-ignore
                    cancel(): boolean
                    /**
                     * Gets the {@link Consumer}<{@link Task}> that this task is running.
                     * @return The consumer
                     */
                    // @ts-ignore
                    getConsumer(): java.util.function$.Consumer<org.spongepowered.api.scheduler.Task>
                    /**
                     * Gets whether this task is asynchronous.
                     * @return True if asynchronous, false if synchronous
                     */
                    // @ts-ignore
                    isAsynchronous(): boolean
                }
            }
        }
    }
}
