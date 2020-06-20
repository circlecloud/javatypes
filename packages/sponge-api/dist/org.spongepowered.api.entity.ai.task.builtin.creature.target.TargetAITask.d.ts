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
                                    interface TargetAITask<A extends org.spongepowered.api.entity.ai.task.builtin.creature.target.TargetAITask<A>> extends org.spongepowered.api.entity.ai.task.AITask<org.spongepowered.api.entity.living.Creature> {
                                        /**
                                         * Gets whether the owning {@link Agent} can visibly "see" the
                                         * {@link Entity} being targeted such that any {@link BlockType}s that
                                         * are visibly opaque will prevent the owning {@link Agent} from
                                         * targeting that {@link Entity}.
                                         * @return Whether line of sight is required to target an entity
                                         */
                                        // @ts-ignore
                                        shouldCheckSight(): boolean
                                        /**
                                         * Sets whether the owning {@link Agent} can visibly "see" the
                                         * {@link Entity} being targeted such that any {@link BlockType}s that
                                         * are visibly opaque will prevent the owning {@link Agent} from
                                         * targeting that {@link Entity}.
                                         * @param checkSight Whether line of sight is required to target
                                         * @return This task, for chaining
                                         */
                                        // @ts-ignore
                                        setCheckSight(checkSight: boolean): A
                                        /**
                                         * Gets whether an {@link Entity} can only be targeted within a "short"
                                         * radius from the owning {@link Agent}.
                                         * @return Whether only nearby entities can be targeted
                                         */
                                        // @ts-ignore
                                        onlyNearby(): boolean
                                        /**
                                         * Sets whether an {@link Entity} can only be targeted within a "short"
                                         * radius from the owning {@link Agent}.
                                         * @param nearby Whether only nearby entities can be targeted
                                         * @return This task, for chaining
                                         */
                                        // @ts-ignore
                                        setOnlyNearby(nearby: boolean): A
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
