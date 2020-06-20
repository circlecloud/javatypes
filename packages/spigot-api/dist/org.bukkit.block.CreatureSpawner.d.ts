declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a creature spawner.
             */
            // @ts-ignore
            interface CreatureSpawner extends org.bukkit.block.TileState {
                /**
                 * Get the spawner's creature type.
                 * @return The creature type.
                 */
                // @ts-ignore
                getSpawnedType(): org.bukkit.entity.EntityType
                /**
                 * Set the spawner's creature type.
                 * @param creatureType The creature type.
                 */
                // @ts-ignore
                setSpawnedType(creatureType: org.bukkit.entity.EntityType): void
                /**
                 * Set the spawner mob type.
                 * @param creatureType The creature type's name.
                 * @deprecated magic value, use
                 *  {#link #setSpawnedType(org.bukkit.entity.EntityType)}.
                 */
                // @ts-ignore
                setCreatureTypeByName(creatureType: string): void
                /**
                 * Get the spawner's creature type.
                 * @return The creature type's name.
                 * @deprecated magic value, use {#link #getSpawnedType()}.
                 */
                // @ts-ignore
                getCreatureTypeName(): java.lang.String
                /**
                 * Get the spawner's delay.
                 * <br>
                 * This is the delay, in ticks, until the spawner will spawn its next mob.
                 * @return The delay.
                 */
                // @ts-ignore
                getDelay(): int
                /**
                 * Set the spawner's delay.
                 * <br>
                 * If set to -1, the spawn delay will be reset to a random value between
                 * {@link #getMinSpawnDelay} and {@link #getMaxSpawnDelay()}.
                 * @param delay The delay.
                 */
                // @ts-ignore
                setDelay(delay: number /*int*/): void
                /**
                 * The minimum spawn delay amount (in ticks).
                 * <br>
                 * This value is used when the spawner resets its delay (for any reason).
                 * It will choose a random number between {@link #getMinSpawnDelay()}
                 * and {@link #getMaxSpawnDelay()} for its next {@link #getDelay()}.
                 * Default value is 200 ticks.
                 * @return the minimum spawn delay amount
                 */
                // @ts-ignore
                getMinSpawnDelay(): int
                /**
                 * Set the minimum spawn delay amount (in ticks).
                 * @param delay the minimum spawn delay amount
                 * @see #getMinSpawnDelay()
                 */
                // @ts-ignore
                setMinSpawnDelay(delay: number /*int*/): void
                /**
                 * The maximum spawn delay amount (in ticks).
                 * <br>
                 * This value is used when the spawner resets its delay (for any reason).
                 * It will choose a random number between {@link #getMinSpawnDelay()}
                 * and {@link #getMaxSpawnDelay()} for its next {@link #getDelay()}.
                 * <br>
                 * This value <b>must</b> be greater than 0 and less than or equal to
                 * {@link #getMaxSpawnDelay()}.
                 * Default value is 800 ticks.
                 * @return the maximum spawn delay amount
                 */
                // @ts-ignore
                getMaxSpawnDelay(): int
                /**
                 * Set the maximum spawn delay amount (in ticks).
                 * <br>
                 * This value <b>must</b> be greater than 0, as well as greater than or
                 * equal to {@link #getMinSpawnDelay()}
                 * @param delay the new maximum spawn delay amount
                 * @see #getMaxSpawnDelay()
                 */
                // @ts-ignore
                setMaxSpawnDelay(delay: number /*int*/): void
                /**
                 * Get how many mobs attempt to spawn.
                 * <br>
                 * Default value is 4.
                 * @return the current spawn count
                 */
                // @ts-ignore
                getSpawnCount(): int
                /**
                 * Set how many mobs attempt to spawn.
                 * @param spawnCount the new spawn count
                 */
                // @ts-ignore
                setSpawnCount(spawnCount: number /*int*/): void
                /**
                 * Set the new maximum amount of similar entities that are allowed to be
                 * within spawning range of this spawner.
                 * <br>
                 * If more than the maximum number of entities are within range, the spawner
                 * will not spawn and try again with a new {@link #getDelay()}.
                 * <br>
                 * Default value is 16.
                 * @return the maximum number of nearby, similar, entities
                 */
                // @ts-ignore
                getMaxNearbyEntities(): int
                /**
                 * Set the maximum number of similar entities that are allowed to be within
                 * spawning range of this spawner.
                 * <br>
                 * Similar entities are entities that are of the same {@link EntityType}
                 * @param maxNearbyEntities the maximum number of nearby, similar, entities
                 */
                // @ts-ignore
                setMaxNearbyEntities(maxNearbyEntities: number /*int*/): void
                /**
                 * Get the maximum distance(squared) a player can be in order for this
                 * spawner to be active.
                 * <br>
                 * If this value is less than or equal to 0, this spawner is always active
                 * (given that there are players online).
                 * <br>
                 * Default value is 16.
                 * @return the maximum distance(squared) a player can be in order for this
                 *  spawner to be active.
                 */
                // @ts-ignore
                getRequiredPlayerRange(): int
                /**
                 * Set the maximum distance (squared) a player can be in order for this
                 * spawner to be active.
                 * <br>
                 * Setting this value to less than or equal to 0 will make this spawner
                 * always active (given that there are players online).
                 * @param requiredPlayerRange the maximum distance (squared) a player can be
                 *  in order for this spawner to be active.
                 */
                // @ts-ignore
                setRequiredPlayerRange(requiredPlayerRange: number /*int*/): void
                /**
                 * Get the radius around which the spawner will attempt to spawn mobs in.
                 * <br>
                 * This area is square, includes the block the spawner is in, and is
                 * centered on the spawner's x,z coordinates - not the spawner itself.
                 * <br>
                 * It is 2 blocks high, centered on the spawner's y-coordinate (its bottom);
                 * thus allowing mobs to spawn as high as its top surface and as low
                 * as 1 block below its bottom surface.
                 * <br>
                 * Default value is 4.
                 * @return the spawn range
                 */
                // @ts-ignore
                getSpawnRange(): int
                /**
                 * Set the new spawn range.
                 * <br>
                 * @param spawnRange the new spawn range
                 * @see #getSpawnRange()
                 */
                // @ts-ignore
                setSpawnRange(spawnRange: number /*int*/): void
            }
        }
    }
}
