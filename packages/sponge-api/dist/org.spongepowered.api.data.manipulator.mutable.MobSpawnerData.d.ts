declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        /**
                         * Represents the data associated with a mob spawner, including the spawn delay,
                         * the spawn count, and the list of possible entities that can be spawned.
                         */
                        // @ts-ignore
                        interface MobSpawnerData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.MobSpawnerData, org.spongepowered.api.data.manipulator.immutable.ImmutableMobSpawnerData> {
                            /**
                             * Gets the {@link MutableBoundedValue} for the remaining delay before
                             * a new attempt at spawning an {@link Entity} is made.
                             * @return The immutable bounded value for the remaining delay
                             * @see Keys#SPAWNER_REMAINING_DELAY
                             */
                            // @ts-ignore
                            remainingDelay(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short | number>
                            /**
                             * Gets the {@link MutableBoundedValue} for the minimum spawn delay
                             * required between attempts to spawn an {@link Entity}.
                             * @return The bounded value of the minimum spawn delay
                             * @see Keys#SPAWNER_MINIMUM_DELAY
                             */
                            // @ts-ignore
                            minimumSpawnDelay(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short | number>
                            /**
                             * Gets the {@link MutableBoundedValue} for the maximum spawn delay
                             * required between attempts to spawn an {@link Entity}.
                             * @return The bounded value of the maximum spawn delay
                             * @see Keys#SPAWNER_MAXIMUM_DELAY
                             */
                            // @ts-ignore
                            maximumSpawnDelay(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short | number>
                            /**
                             * Gets the {@link MutableBoundedValue} for the count of successful
                             * spawns of all {@link Entity} instances from the owning spawner. This
                             * count is simply a total count, there is no limitation on how many
                             * attempts are made to spawn an {@link Entity}.
                             * @return The immutable bounded value
                             * @see Keys#SPAWNER_SPAWN_COUNT
                             */
                            // @ts-ignore
                            spawnCount(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short | number>
                            /**
                             * Gets the {@link MutableBoundedValue} for the limitation on the number
                             * of nearby {@link Entity} instances can exist near the owning spawner. The
                             * limitation is that if there are more {@link Entity} instances than the
                             * provided value, no attempts to spawn a new {@link Entity} will be made.
                             * @return The bounded value of the maximum supported nearby entities
                             * @see Keys#SPAWNER_MAXIMUM_NEARBY_ENTITIES
                             */
                            // @ts-ignore
                            maximumNearbyEntities(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short | number>
                            /**
                             * Gets the {@link MutableBoundedValue} for the minimum range a
                             * {@link Player} must remain in proximity of the spawner, such that if a
                             * {@link Player} is NOT within the provided range, no attempts to spawn an
                             * {@link Entity} is made.
                             * @return The value of the required player range to spawn entities
                             * @see Keys#SPAWNER_REQUIRED_PLAYER_RANGE
                             */
                            // @ts-ignore
                            requiredPlayerRange(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short | number>
                            /**
                             * Gets the {@link MutableBoundedValue} for the maximum range that an
                             * {@link Entity} can be spawned from the spawner.
                             * @return The immutable value of the maximum spawn range an entity can be
                             *      spawned
                             * @see Keys#SPAWNER_SPAWN_RANGE
                             */
                            // @ts-ignore
                            spawnRange(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short | number>
                            /**
                             * Gets the {@link Value} for the overridden
                             * {@link WeightedSerializableObject}{@code <EntityArchetype>} to spawn
                             * next. If possible, the next entity to spawn may be chosen from the
                             * already provided {@link #possibleEntitiesToSpawn()}.
                             * @return The next possible entity to spawn
                             * @see Keys#SPAWNER_NEXT_ENTITY_TO_SPAWN
                             */
                            // @ts-ignore
                            nextEntityToSpawn(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.util.weighted.WeightedSerializableObject<org.spongepowered.api.entity.EntityArchetype>>
                            /**
                             * Gets the {@link WeightedCollectionValue} of all possible
                             * {@link Entity} instances that can be spawned by the spawner. As they
                             * are all {@link WeightedSerializableObject}{@code <EntityArchetype>}
                             * instances, their weight is defined as a {@link Random} to determine
                             * the next {@link Entity} that will be spawned, unless overridden by
                             * {@link #nextEntityToSpawn()}.
                             * @return The immutable weighted entity collection value of entities
                             * @see Keys#SPAWNER_ENTITIES
                             */
                            // @ts-ignore
                            possibleEntitiesToSpawn(): org.spongepowered.api.data.value.mutable.WeightedCollectionValue<org.spongepowered.api.entity.EntityArchetype>
                        }
                    }
                }
            }
        }
    }
}
