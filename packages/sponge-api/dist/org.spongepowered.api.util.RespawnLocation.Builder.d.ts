declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace RespawnLocation {
                    /**
                     * A helper class to build {@link RespawnLocation}s.
                     */
                    // @ts-ignore
                    class Builder extends org.spongepowered.api.data.persistence.AbstractDataBuilder<org.spongepowered.api.util.RespawnLocation> {
                        /**
                         * Creates a new {@link Builder}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Sets the {@link UUID} of the provided {@link World} into this
                         * builder.
                         * @param world The world to get the uuid from
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        public world(world: org.spongepowered.api.world.World): org.spongepowered.api.util.RespawnLocation.Builder
                        /**
                         * Sets the {@link UUID} of the desired {@link World}. There are no
                         * validation checks to whether a world exists with the provided uuid,
                         * mainly for reasons when multiple worlds are loaded and unloaded.
                         * @param worldId The world unique id
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        public world(worldId: java.util.UUID): org.spongepowered.api.util.RespawnLocation.Builder
                        /**
                         * Sets the {@link UUID} of the {@link Location} provided {@link World},
                         * and the {@link Vector3d} position to respawn at.
                         * @param location The location desired
                         * @return This builder, for chaining
                         * @throws IllegalStateException If the location's extent is null
                         */
                        // @ts-ignore
                        public location(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): org.spongepowered.api.util.RespawnLocation.Builder
                        /**
                         * Sets the {@link Vector3d} position of where to respawn at.
                         * @param position The position to respawn at
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        public position(position: Vector3d): org.spongepowered.api.util.RespawnLocation.Builder
                        /**
                         * Sets whether the position to respawn at is forced or can be varied
                         * for safety.
                         * @param isForced If the respawn position is forced
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        public forceSpawn(isForced: boolean): org.spongepowered.api.util.RespawnLocation.Builder
                        // @ts-ignore
                        buildContent(container: org.spongepowered.api.data.DataView): java.util.Optional<org.spongepowered.api.util.RespawnLocation>
                        // @ts-ignore
                        public reset(): org.spongepowered.api.util.RespawnLocation.Builder
                        // @ts-ignore
                        public from(value: org.spongepowered.api.util.RespawnLocation): org.spongepowered.api.util.RespawnLocation.Builder
                        /**
                         * Creates a new {@link RespawnLocation} from this builder.
                         * @return The new respawn location
                         */
                        // @ts-ignore
                        public build(): org.spongepowered.api.util.RespawnLocation
                    }
                }
            }
        }
    }
}
