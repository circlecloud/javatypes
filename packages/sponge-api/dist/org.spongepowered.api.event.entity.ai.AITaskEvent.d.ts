declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace ai {
                        // @ts-ignore
                        interface AITaskEvent extends org.spongepowered.api.event.entity.living.TargetAgentEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets the {@link Goal} the task will be assigned to.
                             * @return The goal
                             */
                            // @ts-ignore
                            getGoal(): org.spongepowered.api.entity.ai.Goal<any>
                            /**
                             * Gets the {@link AITask} to be assigned.
                             * @return The task
                             */
                            // @ts-ignore
                            getTask(): org.spongepowered.api.entity.ai.task.AITask<any>
                            /**
                             * Gets the priority the task will be assigned to. Lower numbers mean
                             * higher priority.
                             * @return The priority
                             */
                            // @ts-ignore
                            getPriority(): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
