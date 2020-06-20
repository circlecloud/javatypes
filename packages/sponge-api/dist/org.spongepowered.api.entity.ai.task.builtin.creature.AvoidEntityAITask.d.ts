declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            namespace creature {
                                // @ts-ignore
                                interface AvoidEntityAITask extends org.spongepowered.api.entity.ai.task.AITask<org.spongepowered.api.entity.living.Creature> {
                                    /**
                                     * Creates a new {@link Builder} for creating a new {@link AvoidEntityAITask}.
                                     * @return A new builder
                                     */
                                    // @ts-ignore
                                    builder(): org.spongepowered.api.entity.ai.task.builtin.creature.AvoidEntityAITask.Builder
                                    /**
                                     * Gets the {@link Predicate} for filtering which {@link Entity} instances
                                     * are qualified to have the owning {@link Agent} move away from the
                                     * {@link Entity} of which the {@link Predicate#test(Object)} returns
                                     * {@code true}.
                                     * @return The predicate used to filter which entities to avoid
                                     */
                                    // @ts-ignore
                                    getTargetSelector(): java.util.function.Predicate<org.spongepowered.api.entity.Entity>
                                    /**
                                     * Sets the {@link Predicate} for filtering which {@link Entity} instances
                                     * are considered to be "avoided" by the owning {@link Agent}.
                                     * @param predicate The predicate
                                     * @return This task, for chaining
                                     */
                                    // @ts-ignore
                                    setTargetSelector(predicate: java.util.function.Predicate<org.spongepowered.api.entity.Entity> | java.util.function$.Predicate<org.spongepowered.api.entity.Entity>): org.spongepowered.api.entity.ai.task.builtin.creature.AvoidEntityAITask
                                    /**
                                     * Gets the search distance at which any {@link Entity} instances in a
                                     * radius of the parent {@link Agent} are considered for avoiding.
                                     * @return The search distance
                                     */
                                    // @ts-ignore
                                    getSearchDistance(): float
                                    /**
                                     * Sets the search distance at which any {@link Entity} instances in a
                                     * radius of the parent {@link Agent} are considered for avoiding.
                                     * @param distance The search distance
                                     * @return This task, for chaining
                                     */
                                    // @ts-ignore
                                    setSearchDistance(distance: number /*float*/): org.spongepowered.api.entity.ai.task.builtin.creature.AvoidEntityAITask
                                    /**
                                     * Gets the speed "modifier" for which the parent {@link Agent} will
                                     * move away from a found {@link Entity} to "avoid" when in close
                                     * range. Close range is currently defined as {@code 7} blocks.
                                     * @return The close range movement speed modifier
                                     */
                                    // @ts-ignore
                                    getCloseRangeSpeed(): double
                                    /**
                                     * Sets the peed "modifier" for which the parent {@link Agent} will
                                     * move away from a found {@link Entity} to "avoid" when in close
                                     * range. Close range is currently defined as {@code 7} blocks.
                                     * @param speed The movement speed modifier
                                     * @return This task, for chaining
                                     */
                                    // @ts-ignore
                                    setCloseRangeSpeed(speed: number /*double*/): org.spongepowered.api.entity.ai.task.builtin.creature.AvoidEntityAITask
                                    /**
                                     * Gets the close range speed "modifier" for which the parent {@link Agent}
                                     * will move away from a found {@link Entity} to "avoid" when in
                                     * a farther range than 7 blocks.
                                     * @return The close range speed
                                     */
                                    // @ts-ignore
                                    getFarRangeSpeed(): double
                                    /**
                                     * Sets the close range speed "modifier" for which the parent {@link Agent}
                                     * will move away from a found {@link Entity} to "avoid" when in
                                     * a farther range than 7 blocks.
                                     * @param speed The movement speed modifier
                                     * @return This task, for chaining
                                     */
                                    // @ts-ignore
                                    setFarRangeSpeed(speed: number /*double*/): org.spongepowered.api.entity.ai.task.builtin.creature.AvoidEntityAITask
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
