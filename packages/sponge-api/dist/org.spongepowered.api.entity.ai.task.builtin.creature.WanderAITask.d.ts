declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            namespace creature {
                                // @ts-ignore
                                interface WanderAITask extends org.spongepowered.api.entity.ai.task.AITask<org.spongepowered.api.entity.living.Creature> {
                                    /**
                                     * Creates a new {@link Builder} to build a new
                                     * {@link WanderAITask}.
                                     * @return A new builder
                                     */
                                    // @ts-ignore
                                    builder(): org.spongepowered.api.entity.ai.task.builtin.creature.WanderAITask.Builder
                                    /**
                                     * Gets the speed modifier at which the owning {@link Entity}
                                     * will move around to appear to "wander".
                                     * @return The speed modifier
                                     */
                                    // @ts-ignore
                                    getSpeed(): double
                                    /**
                                     * Sets the speed modifier at which the owning {@link Entity}
                                     * will move around to appear to "wander".
                                     * @param speed The movement speed modifier
                                     * @return This task, for chaining
                                     */
                                    // @ts-ignore
                                    setSpeed(speed: number /*double*/): org.spongepowered.api.entity.ai.task.builtin.creature.WanderAITask
                                    /**
                                     * Gets the chance that the owning {@link Entity} will "wander".
                                     * @return The chance that the owning entity will "wander"
                                     */
                                    // @ts-ignore
                                    getExecutionChance(): int
                                    /**
                                     * Sets the chance that the owning {@link Entity} will perform
                                     * a "wander".
                                     * @param executionChance The wandering chance
                                     * @return This task, for chaining
                                     */
                                    // @ts-ignore
                                    setExecutionChance(executionChance: number /*int*/): org.spongepowered.api.entity.ai.task.builtin.creature.WanderAITask
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
