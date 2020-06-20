declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Signifies that an entity will expire after the value has
                             * decayed to the minimum. Usually applicable to {@link Weather},
                             * {@link Endermite}s and {@link Item}s.
                             */
                            // @ts-ignore
                            interface ExpirableData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.ExpirableData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableExpirableData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the amount of "ticks"
                                 * remaining before the "expiration" occurs.
                                 * @return The immutable bounded value for the amount of ticks remaining
                                 * @see Keys#EXPIRATION_TICKS
                                 */
                                // @ts-ignore
                                expireTicks(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
