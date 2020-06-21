declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    /**
                     * Represents a set of tasks that will be updated together by an {@link Agent}.
                     * <p>In Minecraft, most agents have just one goal which is living or
                     * simulating, or whichever term you want to call it. Other agents, such as
                     * {@link Monster}s, use a "target" goal which serves to seek out potential
                     * victims and execute a series of attack tasks.</p>
                     * @param <O> The type of agent
                     */
                    // @ts-ignore
                    interface Goal<O extends org.spongepowered.api.entity.living.Agent> {
                        /**
                         * The type of this goal.
                         * @return The type
                         */
                        // @ts-ignore
                        getType(): org.spongepowered.api.entity.ai.GoalType
                        /**
                         * The {@link Agent} that owns this goal.
                         * @return The owner
                         */
                        // @ts-ignore
                        getOwner(): O
                        /**
                         * Adds a new {@link AITask} to this goal.
                         * @param priority The priority this task should run at
                         * @param task The task to run
                         * @return This goal, for chaining
                         */
                        // @ts-ignore
                        addTask(priority: number /*int*/, task: org.spongepowered.api.entity.ai.task.AITask<any>): org.spongepowered.api.entity.ai.Goal<O>
                        /**
                         * Removes a specific {@link AITask} from this goal.
                         * @param task The task to remove
                         * @return This goal, for chaining
                         */
                        // @ts-ignore
                        removeTask(task: org.spongepowered.api.entity.ai.task.AITask<any>): org.spongepowered.api.entity.ai.Goal<O>
                        /**
                         * Removes all {@link AITask}s whose {@link AITaskType} matches
                         * the provided type.
                         * @param type The type to remove
                         * @return The goal, for chaining
                         */
                        // @ts-ignore
                        removeTasks(type: org.spongepowered.api.entity.ai.task.AITaskType): org.spongepowered.api.entity.ai.Goal<O>
                        /**
                         * Gets all {@link AITask}s whose {@link AITaskType} matches
                         * the provided type.
                         * @param type The type to look for
                         * @return All the tasks found
                         */
                        // @ts-ignore
                        getTasksByType(type: org.spongepowered.api.entity.ai.task.AITaskType): Array<any>
                        /**
                         * Gets all {@link AITask}s in this goal.
                         * @return The tasks
                         */
                        // @ts-ignore
                        getTasks(): Array<any>
                        /**
                         * Clears all {@link AITask}s from this goal.
                         */
                        // @ts-ignore
                        clear(): void
                    }
                }
            }
        }
    }
}
