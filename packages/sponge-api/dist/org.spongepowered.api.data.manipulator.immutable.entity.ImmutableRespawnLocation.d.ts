declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the "respawn" location of a
                             * {@link Player}. A {@link Player} may have multiple respawn locations, but can
                             * only have a single respawn location per {@link World}. A location can be
                             * "forced", which means they will spawn there even if it's not a valid bed.
                             */
                            // @ts-ignore
                            interface ImmutableRespawnLocation extends org.spongepowered.api.data.manipulator.immutable.ImmutableMappedData<java.util.UUID, org.spongepowered.api.util.RespawnLocation, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableRespawnLocation, org.spongepowered.api.data.manipulator.mutable.entity.RespawnLocationData> {
                                /**
                                 * Gets the {@link ImmutableMapValue} for the "respawn" locations set for
                                 * various {@link World#getUniqueId()} such that a {@link Player} may not
                                 * have a respawn point for a particular {@link World}, but may have
                                 * multiple respawn points for other {@link World}s.
                                 * @return The immutable map for the respawn locations per world id
                                 */
                                // @ts-ignore
                                respawnLocation(): org.spongepowered.api.data.value.immutable.ImmutableMapValue<java.util.UUID, org.spongepowered.api.util.RespawnLocation>
                                /**
                                 * Gets the respawn location for the given world, if available. If the
                                 * respawn point for that world has not been set, {@link Optional#empty()}
                                 * is returned.
                                 * @param world The world to check
                                 * @return The {#link RespawnLocation}
                                 */
                                // @ts-ignore
                                getForWorld(world: org.spongepowered.api.world.World): java.util.Optional<org.spongepowered.api.util.RespawnLocation>
                            }
                        }
                    }
                }
            }
        }
    }
}
