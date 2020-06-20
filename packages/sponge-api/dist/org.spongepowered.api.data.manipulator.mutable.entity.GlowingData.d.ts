declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for representing something glowing. Usually applies
                             * to an {@link Entity} to give a glowing outline.
                             */
                            // @ts-ignore
                            interface GlowingData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.GlowingData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableGlowingData> {
                                /**
                                 * Gets the {@link Value} representing whether an entity is glowing.
                                 * @return Whether the entity is glowing
                                 * @see Keys#GLOWING
                                 */
                                // @ts-ignore
                                glowing(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
