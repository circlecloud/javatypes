declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} that handles the "player created" state
                             * for an {@link IronGolem}.
                             */
                            // @ts-ignore
                            interface ImmutablePlayerCreatedData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutablePlayerCreatedData, org.spongepowered.api.data.manipulator.mutable.entity.PlayerCreatedData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "player created" state of an
                                 * {@link IronGolem}.
                                 * @return The immutable value for the "player created" state
                                 */
                                // @ts-ignore
                                playerCreated(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
