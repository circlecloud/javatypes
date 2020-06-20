declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for the "respawn" location of a {@link Player}. A
                             * {@link Player} may have multiple respawn locations, but can only have a
                             * single respawn location per {@link World}.
                             */
                            // @ts-ignore
                            interface RespawnLocationData extends org.spongepowered.api.data.manipulator.mutable.MappedData<java.util.UUID, org.spongepowered.api.util.RespawnLocation, org.spongepowered.api.data.manipulator.mutable.entity.RespawnLocationData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableRespawnLocation> {
                                /**
                                 * Gets the {@link MapValue} for the "respawn" locations set for various
                                 * {@link World#getUniqueId()} such that a {@link Player} may not have a
                                 * respawn point for a particular {@link World}, but may have multiple
                                 * respawn points for other {@link World}s.
                                 * @return The map for the respawn locations per world id
                                 * @see Keys#RESPAWN_LOCATIONS
                                 */
                                // @ts-ignore
                                respawnLocation(): org.spongepowered.api.data.value.mutable.MapValue<java.util.UUID, org.spongepowered.api.util.RespawnLocation>
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
