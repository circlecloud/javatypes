declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            // @ts-ignore
                            interface WatchClosestAITask extends org.spongepowered.api.entity.ai.task.AITask<org.spongepowered.api.entity.living.Agent> {
                                /**
                                 * Creates a new {@link Builder} to build a new
                                 * {@link WatchClosestAITask}.
                                 * @return A new builder
                                 */
                                // @ts-ignore
                                builder(): org.spongepowered.api.entity.ai.task.builtin.WatchClosestAITask.Builder
                                /**
                                 * Gets the {@link Class} of the {@link Entity} type to "stare" or
                                 * "watch" when that type of entity is nearby.
                                 * @return The class of entity to "watch"
                                 */
                                // @ts-ignore
                                getWatchedClass(): java.lang.Class<? extends org.spongepowered.api.entity.Entity>
                                /**
                                 * Sets the {@link Class} of the {@link Entity} type to "stare" or
                                 * "watch" when that type of entity is nearby.
                                 * @param watchedClass The class of entity to "watch"
                                 * @return This task, for chaining
                                 */
                                // @ts-ignore
                                setWatchedClass(watchedClass: java.lang.Class<org.spongepowered.api.entity.Entity>): org.spongepowered.api.entity.ai.task.builtin.WatchClosestAITask
                                /**
                                 * Gets the maximum distance to "watch" a targeted {@link Entity}.
                                 * @return The distance to watch a targeted entity
                                 */
                                // @ts-ignore
                                getMaxDistance(): float
                                /**
                                 * Sets the maximum distance to "watch" a targeted {@link Entity}.
                                 * @param maxDistance The maximum distance to watch an entity
                                 * @return This task, for chaining
                                 */
                                // @ts-ignore
                                setMaxDistance(maxDistance: number /*float*/): org.spongepowered.api.entity.ai.task.builtin.WatchClosestAITask
                                /**
                                 * Gets the chance that an {@link Entity} will "watch" a targeted
                                 * {@link Entity}.
                                 * @return The chance to watch
                                 */
                                // @ts-ignore
                                getChance(): float
                                /**
                                 * SEts the chance to "watch" a targeted {@link Entity}.
                                 * @param chance The chance to "watch"
                                 * @return This task, for chaining
                                 */
                                // @ts-ignore
                                setChance(chance: number /*float*/): org.spongepowered.api.entity.ai.task.builtin.WatchClosestAITask
                            }
                        }
                    }
                }
            }
        }
    }
}
