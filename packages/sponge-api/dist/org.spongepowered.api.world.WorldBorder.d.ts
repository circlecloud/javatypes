declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * A world border is a square boundary, extending through the entire y-axis.
                 * <p>It can gradually grow or shrink to a radius over a period of time. A
                 * warning is displayed when a contracting world border will reach the player in
                 * a certain amount of time, or when the player is a certain number of blocks
                 * away.</p>
                 * <p>In Minecraft, a warning is displayed in the form of a reddish tint.</p>
                 */
                // @ts-ignore
                interface WorldBorder {
                    /**
                     * Creates a new {@link Builder} instance for making {@link WorldBorder}s.
                     * @return The builder
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.world.WorldBorder.Builder
                    /**
                     * Gets the diameter the world border is expanding or contracting to.
                     * <p>This will return the same value as {@link #getDiameter} unless
                     * {@link #getTimeRemaining} is greater than 0.</p>
                     * @return The diameter being changed to
                     */
                    // @ts-ignore
                    getNewDiameter(): double
                    /**
                     * Gets the diameter of the world border.
                     * <p>The returned diameter applies to the x and z axis. The world border
                     * extends over the entire y-axis.</p>
                     * @return The diameter
                     */
                    // @ts-ignore
                    getDiameter(): double
                    /**
                     * Sets the diameter of the world border.
                     * <p>The specified diameter applies to the x and z axis. The world border
                     * extends over the entire y-axis.</p>
                     * @param diameter The diameter
                     */
                    // @ts-ignore
                    setDiameter(diameter: number /*double*/): void
                    /**
                     * Sets the diameter of the world border, over the given period of time.
                     * <p>The world border diameter increases/decrease linearly over the
                     * specified time. The specified diameter applies to the x and z axis. The
                     * world border extends over the entire y-axis.</p>
                     * @param diameter The diameter where the border will expand/contract to
                     * @param time The time over which to change, in milliseconds
                     */
                    // @ts-ignore
                    setDiameter(diameter: number /*double*/, time: number /*long*/): void
                    /**
                     * Sets the starting diameter and the ending diameter of the world border,
                     * over the given period of time.
                     * <p>The world border diameter increases/diameter linearly over the
                     * specified time. The specified diameter applies to the x and z axis. The
                     * world border extends over the entire y-axis.</p>
                     * @param startDiameter The diameter where the border will start
                     * @param endDiameter The diameter where the border will end
                     * @param time The time over which to change, in milliseconds
                     */
                    // @ts-ignore
                    setDiameter(startDiameter: number /*double*/, endDiameter: number /*double*/, time: number /*long*/): void
                    /**
                     * Gets the time remaining until the world border stops expanding or
                     * contracting.
                     * @return The time remaining, in milliseconds
                     */
                    // @ts-ignore
                    getTimeRemaining(): long
                    /**
                     * Sets the center of the world border.
                     * @param x The x-axis center of the world border
                     * @param z The z-axis center of the world border
                     */
                    // @ts-ignore
                    setCenter(x: number /*double*/, z: number /*double*/): void
                    /**
                     * Gets the center of the world border.
                     * <p>The returned position is three-dimensional. As the world border
                     * extends over the entire y-axis, the returned position will always have a
                     * {@code y} set to 0.</p>
                     * @return The center
                     */
                    // @ts-ignore
                    getCenter(): Vector3d
                    /**
                     * Gets the time when a contracting world border will warn a player for whom
                     * the world border will reach in {@code time} seconds.
                     * <p>In Minecraft, the warning is displayed in the form of a reddish
                     * tint.</p>
                     * @return The time, in seconds
                     */
                    // @ts-ignore
                    getWarningTime(): int
                    /**
                     * Sets the time when a contracting world border will warn a player for whom
                     * the world border will reach in {@code time} seconds.
                     * <p>In Minecraft, the warning is displayed in the form of a reddish
                     * tint.</p>
                     * @param time The time, in seconds
                     */
                    // @ts-ignore
                    setWarningTime(time: number /*int*/): void
                    /**
                     * Gets the distance when a contracting world border will warn a player for
                     * whom the world border is {@code distance} blocks away.
                     * <p>In Minecraft, the warning is displayed in the form of a reddish
                     * tint.</p>
                     * @return The distance, in blocks
                     */
                    // @ts-ignore
                    getWarningDistance(): int
                    /**
                     * Sets the distance when a contracting world border will warn a player for
                     * whom the world border is {@code distance} blocks away.
                     * <p>In Minecraft, the warning is displayed in the form of a reddish
                     * tint.</p>
                     * @param distance The distance, in blocks
                     */
                    // @ts-ignore
                    setWarningDistance(distance: number /*int*/): void
                    /**
                     * Gets the distance a player may be outside the world border before taking
                     * damage.
                     * @return The distance
                     */
                    // @ts-ignore
                    getDamageThreshold(): double
                    /**
                     * Sets the distance a player may be be outside the world border before
                     * taking damage.
                     * @param distance The distance
                     */
                    // @ts-ignore
                    setDamageThreshold(distance: number /*double*/): void
                    /**
                     * Gets the damage done to a player per block per tick when outside the
                     * buffer.
                     * @return The damage amount
                     */
                    // @ts-ignore
                    getDamageAmount(): double
                    /**
                     * Sets the damage done to a player per block per tick when outside the
                     * buffer.
                     * @param damage The damage amount
                     */
                    // @ts-ignore
                    setDamageAmount(damage: number /*double*/): void
                    /**
                     * Returns a new builder for creating a task to pre-generate the chunks
                     * inside the border. The current state of the border is "snapshotted" for
                     * the builder. It is not backed by this instance. If the border size is
                     * changing then the target size is used.
                     * @param world The target world
                     * @return The builder for the chunk pre-generate task
                     * @see ChunkPreGenerate
                     */
                    // @ts-ignore
                    newChunkPreGenerate(world: org.spongepowered.api.world.World): org.spongepowered.api.world.ChunkPreGenerate.Builder
                    /**
                     * Copies the properties of the passed border onto this border.
                     * @param border The border whose properties are to be copied
                     */
                    // @ts-ignore
                    copyPropertiesFrom(border: org.spongepowered.api.world.WorldBorder): void
                }
            }
        }
    }
}
