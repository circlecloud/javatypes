declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * A {@link ImmutableDataManipulator} representing the dominant {@link HandPreference}
                             * of a {@link Living} entity.
                             * <p>Handedness usually determines which hand is used for "main" interactions,
                             * such as tool use or block placing/breaking.</p>
                             * <p><i>NOTE: </i> This does not apply to {@link Player}s, for Player
                             * entities see {@link DominantHandProperty}.</p>
                             */
                            // @ts-ignore
                            interface ImmutableDominantHandData extends org.spongepowered.api.data.manipulator.immutable.ImmutableVariantData<org.spongepowered.api.data.type.HandPreference, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableDominantHandData, org.spongepowered.api.data.manipulator.mutable.entity.DominantHandData> {
                                /**
                                 * Gets the {@link ImmutableValue} representing the dominant {@link HandPreference} of an
                                 * {@link Entity}.
                                 * @return The value for handedness
                                 */
                                // @ts-ignore
                                dominantHand(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.data.type.HandPreference>
                            }
                        }
                    }
                }
            }
        }
    }
}
