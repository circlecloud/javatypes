declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            namespace creature {
                                /**
                                 * An {@link AITask} which uses the ranging aspect of the Ranger to attack
                                 * the target.
                                 */
                                // @ts-ignore
                                interface RangeAgentAITask extends org.spongepowered.api.entity.ai.task.AITask<org.spongepowered.api.entity.living.Ranger> {
                                    /**
                                     * Creates a new {@link Builder} to build a new {@link RangeAgentAITask}.
                                     * @return A new builder
                                     */
                                    // @ts-ignore
                                    builder(): org.spongepowered.api.entity.ai.task.builtin.creature.RangeAgentAITask.Builder
                                    /**
                                     * Gets the movement speed modifier for moving towards a targeted
                                     * {@link Entity}.
                                     * @return The movement speed modifier
                                     */
                                    // @ts-ignore
                                    getMoveSpeed(): number /*double*/
                                    /**
                                     * Sets the movement speed modifier for moving towards a targeted
                                     * {@link Entity}.
                                     * @param speed The movement speed modifier
                                     * @return This task, for chaining
                                     */
                                    // @ts-ignore
                                    setMoveSpeed(speed: number /*double*/): org.spongepowered.api.entity.ai.task.builtin.creature.RangeAgentAITask
                                    /**
                                     * Gets the delay in ticks between attempts to attack the targeted
                                     * {@link Entity}.
                                     * @return The delay in ticks between attempts to attack
                                     */
                                    // @ts-ignore
                                    getDelayBetweenAttacks(): number /*int*/
                                    /**
                                     * The time, in ticks, this {@link Ranger} will wait before attacking
                                     * again.
                                     * @param delay The delay, in ticks
                                     * @return This task, for chaining
                                     */
                                    // @ts-ignore
                                    setDelayBetweenAttacks(delay: number /*int*/): org.spongepowered.api.entity.ai.task.builtin.creature.RangeAgentAITask
                                    /**
                                     * Gets the radius of which the owning {@link Ranger} will attempt to
                                     * attack a targeted {@link Entity}.
                                     * @return The radius of which the owning entity will attempt to attack
                                     */
                                    // @ts-ignore
                                    getAttackRadius(): number /*float*/
                                    /**
                                     * Sets the radius of which the owning {@link Ranger} will attempt to
                                     * attack a targeted {@link Entity}.
                                     * @param radius The radius of which the owning entity will attempt to
                                     *      attack
                                     * @return This task, for chaining
                                     */
                                    // @ts-ignore
                                    setAttackRadius(radius: number /*float*/): org.spongepowered.api.entity.ai.task.builtin.creature.RangeAgentAITask
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
