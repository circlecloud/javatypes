declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * Represents a position for a player to respawn in in a particular world.
                 * Instances can be obtained using {@link RespawnLocationData} or by using the
                 * {@link #builder()}.
                 */
                // @ts-ignore
                class RespawnLocation extends java.lang.Object implements org.spongepowered.api.data.DataSerializable {
                    /**
                     * Creates a new {@link Builder} to build a {@link RespawnLocation}.
                     * @return A new builder
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.util.RespawnLocation.Builder
                    /**
                     * Gets the {@link UUID} of the world this position refers to.
                     * @return The world UUID
                     */
                    // @ts-ignore
                    getWorldUniqueId(): java.util.UUID
                    /**
                     * Gets the position within the world of this spawn point.
                     * @return The spawn position
                     */
                    // @ts-ignore
                    getPosition(): Vector3d
                    /**
                     * Gets whether the spawn position is forced in the given world, if
                     * available. A forced position will spawn the player there even if a bed is
                     * missing or obstructed.
                     * @return Whether the position is forced in the world
                     */
                    // @ts-ignore
                    isForced(): boolean
                    /**
                     * Gets this spawn position as a {@link Location} object, if the world is
                     * available.
                     * @return The position object, if available.
                     */
                    // @ts-ignore
                    asLocation(): java.util.Optional<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>
                    // @ts-ignore
                    getContentVersion(): int
                    // @ts-ignore
                    toContainer(): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    equals(o: any): boolean
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
