declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} representing the "shattering" state of
                             * an {@link EnderPearl}. Usually, if an {@link EnderPearl} will "shatter" at
                             * the end of it's travel duration such that no {@link ItemStack} will drop.
                             */
                            // @ts-ignore
                            interface ImmutableShatteringData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableShatteringData, org.spongepowered.api.data.manipulator.mutable.entity.ShatteringData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "shattering" state of an
                                 * {@link EnderPearl}.
                                 * @return The immutable value for the "shattering" state
                                 */
                                // @ts-ignore
                                willShatter(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
