declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} that handles the "player created" state
                             * for an {@link IronGolem}.
                             */
                            // @ts-ignore
                            interface PlayerCreatedData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.PlayerCreatedData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutablePlayerCreatedData> {
                                /**
                                 * Gets the {@link Value} for the "player created" state of an
                                 * {@link IronGolem}.
                                 * @return The value for the "player created" state
                                 * @see Keys#PLAYER_CREATED
                                 */
                                // @ts-ignore
                                playerCreated(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
