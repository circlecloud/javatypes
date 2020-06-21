declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace ai {
                        namespace AITaskEvent {
                            /**
                             * Fired when an {@link AITask} is added to an {@link Agent}'s {@link Goal}.
                             */
                            // @ts-ignore
                            interface Add extends org.spongepowered.api.event.entity.ai.AITaskEvent {
                                /**
                                 * Gets the original priority that {@link AITaskEvent#getTask()} will
                                 * be assigned to. See {@link AITaskEvent#getPriority()}.
                                 * @return The original priority
                                 */
                                // @ts-ignore
                                getOriginalPriority(): number /*int*/
                                /**
                                 * Sets the priority the task will be assigned to. See
                                 * {@link AITaskEvent#getPriority()}.
                                 * @param priority The new priority
                                 */
                                // @ts-ignore
                                setPriority(priority: number /*int*/): void
                            }
                        }
                    }
                }
            }
        }
    }
}
