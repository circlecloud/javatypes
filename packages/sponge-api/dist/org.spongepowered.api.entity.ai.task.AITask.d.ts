declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        /**
                         * Represents a task performed by {@link Agent}s. If you desire to create your own, see
                         * {@link AbstractAITask}.
                         * @param <O> The type of agent
                         */
                        // @ts-ignore
                        interface AITask<O extends org.spongepowered.api.entity.living.Agent> {
                            /**
                             * Gets the {@link AITaskType} of this task.
                             * @return The type
                             */
                            // @ts-ignore
                            getType(): org.spongepowered.api.entity.ai.task.AITaskType
                            /**
                             * Gets the {@link Goal} that is updating this task, if any.
                             * @return The goal or {#link Optional#empty()} if not present
                             */
                            // @ts-ignore
                            getGoal(): java.util.Optional<org.spongepowered.api.entity.ai.Goal<O>>
                            /**
                             * Gets the {@link Agent} that owns this task, if any.
                             * @return The owner or {#link Optional#empty()} if not present
                             */
                            // @ts-ignore
                            getOwner(): java.util.Optional<O>
                            /**
                             * Tests if the provided {@link AITask} is allowed to be ran concurrently
                             * with this task.
                             * <p>This plays a role in determining if tasks should be updated or not.
                             * If this method
                             * is being called on this task, that means:</p>
                             * <ol>
                             * <li>This task has higher priority than the provided task for our
                             * {@link AITask#getGoal()}.</li>
                             * <li>Returning "false" will remove the provided task from the list of
                             * updated tasks, if not
                             * there already.</li>
                             * <li>Returning "true" will add the provided task to the list of updated
                             * tasks, if not there
                             * already.</li>
                             * </ol>
                             * @param other The other task
                             * @return True if it can be, false if not
                             */
                            // @ts-ignore
                            canRunConcurrentWith(other: org.spongepowered.api.entity.ai.task.AITask<O>): boolean
                            /**
                             * Returns if this task can be interrupted. This determines if this task
                             * can be added to the list of updated tasks as well as if it should
                             * continue updating.
                             * <p>Thought should be made before blindly returning true or false here.
                             * In Minecraft, all tasks can be interrupted by higher priority tasks
                             * (tasks added with lower numerical values in
                             * {@link Goal#addTask(int, AITask)}) but a task being created by a plugin
                             * might be deemed critical and as such should return false.</p>
                             * <p>Due note that the meaning of "true" changes based on the state of the
                             * {@link Goal}.  To put it simply, this value can mean "Should I be added
                             * as an updating task or "Should I continue updating?". Regardless of the
                             * question, the next step that happens is transferring from this method to
                             * {@link AITask#canRunConcurrentWith(AITask)} in the next AI tick loop.</p>
                             * @return True if can be interrupted, false if not
                             */
                            // @ts-ignore
                            canBeInterrupted(): boolean
                        }
                    }
                }
            }
        }
    }
}
