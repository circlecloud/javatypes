declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the "expiring" ticks remaining
                             * for an {@link Entity} to "remain" existing in a world. Usually applicable to
                             * {@link Endermite}s, {@link PrimedTNT}, etc.
                             */
                            // @ts-ignore
                            interface ImmutableExpirableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableExpirableData, org.spongepowered.api.data.manipulator.mutable.entity.ExpirableData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the amount of "ticks"
                                 * remaining before the "expiration" occurs.
                                 * @return The immutable bounded value for the amount of ticks remaining
                                 */
                                // @ts-ignore
                                expireTicks(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
