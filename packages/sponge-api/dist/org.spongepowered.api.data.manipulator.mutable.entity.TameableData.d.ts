declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} that handles the link to the {@link UUID} of the
                             * {@link Tamer} that has "tamed" an {@link Animal}. Usually {@link Animal}s
                             * can not be tamed, however, certain few can. Such as {@link Wolf} and
                             * {@link Ocelot}s.
                             */
                            // @ts-ignore
                            interface TameableData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.TameableData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableTameableData> {
                                /**
                                 * Gets the {@link OptionalValue} for the {@link UUID} of the
                                 * {@link Tamer}.
                                 * @return The optional value for the uuid of the tamer
                                 * @see Keys#TAMED_OWNER
                                 */
                                // @ts-ignore
                                owner(): org.spongepowered.api.data.value.mutable.OptionalValue<java.util.UUID>
                            }
                        }
                    }
                }
            }
        }
    }
}
