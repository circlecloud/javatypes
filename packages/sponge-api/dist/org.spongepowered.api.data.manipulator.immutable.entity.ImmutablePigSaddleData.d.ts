declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the current {@link ItemStack} that
                             * is used as the saddle. Usually applicable for {@link RideableHorse}s and
                             * {@link Pig}s.
                             */
                            // @ts-ignore
                            interface ImmutablePigSaddleData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutablePigSaddleData, org.spongepowered.api.data.manipulator.mutable.entity.PigSaddleData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "saddled" state.
                                 * @return The immutable value for the saddle state
                                 */
                                // @ts-ignore
                                saddle(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
