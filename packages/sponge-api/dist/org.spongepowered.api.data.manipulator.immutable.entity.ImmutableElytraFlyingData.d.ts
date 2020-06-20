declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} which represents whether or not a {@link Player}
                             * is flying in elytra style, which in vanilla usually means they also have a
                             * {@link ItemTypes#ELYTRA} equipped in their chest slot.
                             */
                            // @ts-ignore
                            interface ImmutableElytraFlyingData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableElytraFlyingData, org.spongepowered.api.data.manipulator.mutable.entity.ElytraFlyingData> {
                                /**
                                 * Gets the {@link ImmutableValue} elytra flying state.
                                 * @return The elytra flying state immutable value
                                 * @see Keys#IS_ELYTRA_FLYING
                                 */
                                // @ts-ignore
                                elytraFlying(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
