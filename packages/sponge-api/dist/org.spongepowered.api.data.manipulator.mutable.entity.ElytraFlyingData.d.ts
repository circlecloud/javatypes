declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} which represents whether or not a {@link Player}
                             * is flying in elytra style, which in vanilla usually means they also have a
                             * {@link ItemTypes#ELYTRA} equipped in their chest slot.
                             */
                            // @ts-ignore
                            interface ElytraFlyingData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.ElytraFlyingData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableElytraFlyingData> {
                                /**
                                 * Gets the {@link Value} elytra flying state.
                                 * @return The elytra flying state value
                                 * @see Keys#IS_ELYTRA_FLYING
                                 */
                                // @ts-ignore
                                elytraFlying(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
