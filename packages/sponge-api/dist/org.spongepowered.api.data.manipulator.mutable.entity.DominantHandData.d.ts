declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} representing the dominant {@link HandPreference} of a
                             * {@link Living} entity.
                             * <p>Handedness usually determines which hand is used for "main" interactions,
                             * such as tool use or block placing/breaking.</p>
                             * <p><i>NOTE: </i> This does not apply to {@link Player}s, for Player
                             * entities see {@link DominantHandProperty}.</p>
                             */
                            // @ts-ignore
                            interface DominantHandData extends org.spongepowered.api.data.manipulator.mutable.VariantData<org.spongepowered.api.data.type.HandPreference, org.spongepowered.api.data.manipulator.mutable.entity.DominantHandData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableDominantHandData> {
                                /**
                                 * Gets the {@link Value} representing the dominant {@link HandPreference} of an
                                 * {@link Entity}.
                                 * @return The value for handedness
                                 * @see Keys#DOMINANT_HAND
                                 */
                                // @ts-ignore
                                dominantHand(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.HandPreference>
                            }
                        }
                    }
                }
            }
        }
    }
}
