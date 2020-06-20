declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            namespace creature {
                                namespace target {
                                    // @ts-ignore
                                    interface FindNearestAttackableTargetAITask extends org.spongepowered.api.entity.ai.task.builtin.creature.target.TargetAITask<org.spongepowered.api.entity.ai.task.builtin.creature.target.FindNearestAttackableTargetAITask> {
                                        /**
                                         * Creates a new {@link Builder} for building a new {@link FindNearestAttackableTargetAITask}.
                                         * @return A new builder
                                         */
                                        // @ts-ignore
                                        builder(): org.spongepowered.api.entity.ai.task.builtin.creature.target.FindNearestAttackableTargetAITask.Builder
                                        /**
                                         * Gets the {@link Class entity class} that can be targeted.
                                         * @return The entity class that can be targeted
                                         */
                                        // @ts-ignore
                                        getTargetClass(): java.lang.Class<? extends org.spongepowered.api.entity.living.Living>
                                        /**
                                         * Sets the {@link Class entity class} that can be targeted.
                                         * @param targetClass The entity class to target
                                         * @return This task, for chaining
                                         */
                                        // @ts-ignore
                                        setTargetClass(targetClass: java.lang.Class<org.spongepowered.api.entity.living.Living>): org.spongepowered.api.entity.ai.task.builtin.creature.target.FindNearestAttackableTargetAITask
                                        /**
                                         * Gets the chance that this task will go through and attempt to find a
                                         * new target.
                                         * @return The chance that this task will go through and find a target
                                         */
                                        // @ts-ignore
                                        getChance(): int
                                        /**
                                         * Sets the chance that this task will go through and attempt to find a
                                         * new target.
                                         * @param chance The chance that this task will attemp to find a new target
                                         * @return This task, for chaining
                                         */
                                        // @ts-ignore
                                        setChance(chance: number /*int*/): org.spongepowered.api.entity.ai.task.builtin.creature.target.FindNearestAttackableTargetAITask
                                        /**
                                         * Sets the {@link Predicate} filter to determine whether a {@link Living}
                                         * entity can be targeted.
                                         * @param predicate The predicate
                                         * @return This task, for chaining
                                         */
                                        // @ts-ignore
                                        filter(predicate: java.util.function.Predicate<org.spongepowered.api.entity.living.Living> | java.util.function$.Predicate<org.spongepowered.api.entity.living.Living>): org.spongepowered.api.entity.ai.task.builtin.creature.target.FindNearestAttackableTargetAITask
                                        /**
                                         * Gets the {@link Predicate} filter to determine whether a {@link Living living entity}
                                         * can be targeted.
                                         * @return The predicate to filter living entities for targeting
                                         */
                                        // @ts-ignore
                                        getFilter(): java.util.function.Predicate<org.spongepowered.api.entity.living.Living>
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
