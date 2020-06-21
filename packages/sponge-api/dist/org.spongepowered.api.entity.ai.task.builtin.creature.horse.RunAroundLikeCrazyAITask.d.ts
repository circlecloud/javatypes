declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            namespace creature {
                                namespace horse {
                                    // @ts-ignore
                                    interface RunAroundLikeCrazyAITask extends org.spongepowered.api.entity.ai.task.AITask<org.spongepowered.api.entity.living.animal.RideableHorse> {
                                        /**
                                         * Creates a new {@link Builder} to build a new
                                         * {@link RunAroundLikeCrazyAITask}.
                                         * @return A new builder
                                         */
                                        // @ts-ignore
                                        builder(): org.spongepowered.api.entity.ai.task.builtin.creature.horse.RunAroundLikeCrazyAITask.Builder
                                        /**
                                         * Gets the speed modifier at which when an {@link Entity} is running
                                         * around, the movement speed is amplified by this modifier.
                                         * @return The speed modifier
                                         */
                                        // @ts-ignore
                                        getSpeed(): number /*double*/
                                        /**
                                         * Sets the speed modifier at which when an {@link Entity} is running
                                         * around, the movement speed is amplified by this modifier.
                                         * @param speed The speed modifier at which an entity is "running around"
                                         * @return This task, for chaining
                                         */
                                        // @ts-ignore
                                        setSpeed(speed: number /*double*/): org.spongepowered.api.entity.ai.task.builtin.creature.horse.RunAroundLikeCrazyAITask
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
