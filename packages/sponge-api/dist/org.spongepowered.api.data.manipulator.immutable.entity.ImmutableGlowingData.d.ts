declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for representing something glowing. Usually applies
                             * to an {@link Entity} to give a glowing outline.
                             */
                            // @ts-ignore
                            interface ImmutableGlowingData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableGlowingData, org.spongepowered.api.data.manipulator.mutable.entity.GlowingData> {
                                /**
                                 * Gets the {@link Value} representing whether something is glowing.
                                 * @return The value for glowing
                                 */
                                // @ts-ignore
                                glowing(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
