declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} representing the "shattering" state of an
                             * {@link EyeOfEnder}. Usually, if an {@link EyeOfEnder} will "shatter" at
                             * the end of it's travel duration such that no {@link ItemStack} will drop.
                             */
                            // @ts-ignore
                            interface ShatteringData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.ShatteringData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableShatteringData> {
                                /**
                                 * Gets the {@link Value} for the "shattering" state of an
                                 * {@link EyeOfEnder}.
                                 * @return The immutable value for the "shattering" state
                                 * @see Keys#WILL_SHATTER
                                 */
                                // @ts-ignore
                                willShatter(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
