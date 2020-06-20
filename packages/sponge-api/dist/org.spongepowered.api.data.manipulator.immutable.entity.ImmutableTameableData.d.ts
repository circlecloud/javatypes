declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} that handles the link to the
                             * {@link UUID} of the {@link Tamer} that has "tamed" an {@link Animal}.
                             * Usually {@link Animal}s can not be tamed, however, certain few can.
                             * Such as {@link Wolf} and {@link Ocelot}s.
                             */
                            // @ts-ignore
                            interface ImmutableTameableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableTameableData, org.spongepowered.api.data.manipulator.mutable.entity.TameableData> {
                                /**
                                 * Gets the {@link ImmutableOptionalValue} for the {@link UUID} of the
                                 * {@link Tamer}.
                                 * @return The immutable optional value for the uuid of the tamer
                                 */
                                // @ts-ignore
                                owner(): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue<java.util.UUID>
                            }
                        }
                    }
                }
            }
        }
    }
}
