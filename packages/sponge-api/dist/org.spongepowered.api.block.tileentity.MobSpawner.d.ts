declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    /**
                     * Represents a Monster Spawner.
                     */
                    // @ts-ignore
                    interface MobSpawner extends org.spongepowered.api.block.tileentity.TileEntity {
                        /**
                         * Trigger an immediate spawn of a batch of entities.
                         * <p>This will obey the restrictions of maximum nearby entities and player
                         * range unless the {@code force} flag is set.</p>
                         * @param force Whether to ignore spawning restrictions
                         */
                        // @ts-ignore
                        spawnEntityBatchImmediately(force: boolean): void
                        /**
                         * Gets the {@link MobSpawnerData} for this mob spawner.
                         * @return the mob spawner's associated data
                         */
                        // @ts-ignore
                        getMobSpawnerData(): org.spongepowered.api.data.manipulator.mutable.MobSpawnerData
                        /**
                         * Gets the {@link MutableBoundedValue} for the remaining delay before
                         * a new attempt at spawning an {@link Entity} is made.
                         * @return The immutable bounded value for the remaining delay
                         */
                        // @ts-ignore
                        remainingDelay(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short>
                        /**
                         * Gets the {@link MutableBoundedValue} for the minimum spawn delay
                         * required between attempts to spawn an {@link Entity}.
                         * @return The bounded value of the minimum spawn delay
                         */
                        // @ts-ignore
                        minimumSpawnDelay(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short>
                        /**
                         * Gets the {@link MutableBoundedValue} for the maximum spawn delay
                         * required between attempts to spawn an {@link Entity}.
                         * @return The bounded value of the maximum spawn delay
                         */
                        // @ts-ignore
                        maximumSpawnDelay(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short>
                        /**
                         * Gets the {@link MutableBoundedValue} for the count of successful
                         * spawns of all {@link Entity} instances from the owning spawner. This
                         * count is simply a total count, there is no limitation on how many
                         * attempts are made to spawn an {@link Entity}.
                         * @return The immutable bounded value
                         */
                        // @ts-ignore
                        spawnCount(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short>
                        /**
                         * Gets the {@link MutableBoundedValue} for the limitation on the number
                         * of nearby {@link Entity} instances can exist near the owning spawner. The
                         * limitation is that if there are more {@link Entity} instances than the
                         * provided value, no attempts to spawn a new {@link Entity} will be made.
                         * @return The bounded value of the maximum supported nearby entities
                         */
                        // @ts-ignore
                        maximumNearbyEntities(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short>
                        /**
                         * Gets the {@link MutableBoundedValue} for the minimum range a
                         * {@link Player} must remain in proximity of the spawner, such that if a
                         * {@link Player} is NOT within the provided range, no attempts to spawn an
                         * {@link Entity} is made.
                         * @return The value of the required player range to spawn entities
                         */
                        // @ts-ignore
                        requiredPlayerRange(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short>
                        /**
                         * Gets the {@link MutableBoundedValue} for the maximum range that an
                         * {@link Entity} can be spawned from the spawner.
                         * @return The immutable value of the maximum spawn range an entity can be
                         *      spawned
                         */
                        // @ts-ignore
                        spawnRange(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Short>
                        /**
                         * Gets the {@link Value}
                         * for the overridden
                         * {@link WeightedSerializableObject}{@code <EntitySnapshot>} to spawn
                         * next. If possible, the next entity to spawn may be chosen from the
                         * already provided {@link #possibleEntitiesToSpawn()}.
                         * @return The next possible entity to spawn
                         */
                        // @ts-ignore
                        nextEntityToSpawn(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.util.weighted.WeightedSerializableObject<org.spongepowered.api.entity.EntityArchetype>>
                        /**
                         * Gets the {@link WeightedCollectionValue} of all possible
                         * {@link Entity} instances that can be spawned by the spawner. As they
                         * are all {@link WeightedSerializableObject}{@code <EntitySnapshot>}
                         * instances, their weight is defined as a {@link Random} to determine
                         * the next {@link Entity} that will be spawned, unless overriden by
                         * {@link #nextEntityToSpawn()}.
                         * @return The immutable weighted entity collection value of entities
                         */
                        // @ts-ignore
                        possibleEntitiesToSpawn(): org.spongepowered.api.data.value.mutable.WeightedCollectionValue<org.spongepowered.api.entity.EntityArchetype>
                    }
                }
            }
        }
    }
}
