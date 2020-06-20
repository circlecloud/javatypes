declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Represents the UUID of the skin for a {@link Humanoid}.
                             * <p>Unfortunately the actual binary data for the skin is not able to be
                             * manipulated because it must be signed on mojang's server.</p>
                             */
                            // @ts-ignore
                            interface SkinData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.SkinData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSkinData> {
                                /**
                                 * Gets the {@link Value} for the {@link UUID} of the skin to display on a
                                 * {@link Humanoid} entity for customization.
                                 * @return The value for the skin uuid
                                 * @see Keys#SKIN_UNIQUE_ID
                                 */
                                // @ts-ignore
                                skinUniqueId(): org.spongepowered.api.data.value.mutable.Value<java.util.UUID>
                            }
                        }
                    }
                }
            }
        }
    }
}
