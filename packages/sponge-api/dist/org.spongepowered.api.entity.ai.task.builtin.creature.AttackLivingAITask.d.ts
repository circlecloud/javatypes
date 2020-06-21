declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            namespace creature {
                                // @ts-ignore
                                interface AttackLivingAITask extends org.spongepowered.api.entity.ai.task.AITask<org.spongepowered.api.entity.living.Creature> {
                                    /**
                                     * Creates a new {@link Builder} to build a new
                                     * {@link AttackLivingAITask}.
                                     * @return A new builder
                                     */
                                    // @ts-ignore
                                    builder(): org.spongepowered.api.entity.ai.task.builtin.creature.AttackLivingAITask.Builder
                                    /**
                                     * Gets the "movement" speed modifier when targeting towards a
                                     * targeted {@link Entity}.
                                     * @return The movement speed modifier when targeting an entity
                                     */
                                    // @ts-ignore
                                    getSpeed(): number /*double*/
                                    /**
                                     * Sets the movement speed modifier when the parent {@link Creature}
                                     * is targeting an {@link Entity}.
                                     * @param speed The speed
                                     * @return This task, for chaining
                                     */
                                    // @ts-ignore
                                    setSpeed(speed: number /*double*/): org.spongepowered.api.entity.ai.task.builtin.creature.AttackLivingAITask
                                    /**
                                     * Gets whether the navigator will attempt to continue to "target"
                                     * an {@link Entity} after certain circumstances have been met,
                                     * sometimes whether a targeted {@link Entity} has moved too far away,
                                     * moved to where there is an obstacle between the parent and the
                                     * targeted entity, etc.
                                     * @return Whether the task will continue targeting the entity after
                                     *       certain conditions prevent a direct navigation path is not
                                     *       available
                                     */
                                    // @ts-ignore
                                    hasLongMemory(): boolean
                                    /**
                                     * Sets whether the task will continue to navigate the parent
                                     * {@link Agent} to continue targeting an {@link Entity} after the
                                     * entity has moved to where a direct navigation path is no longer
                                     * available.
                                     * @param longMemory Whether to continue targeting an entity
                                     * @return This task, for chaining
                                     */
                                    // @ts-ignore
                                    setLongMemory(longMemory: boolean): org.spongepowered.api.entity.ai.task.builtin.creature.AttackLivingAITask
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
