declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Represents the original join {@link Instant} that a {@link User} or
                             * {@link Player} originally joined a server with.
                             */
                            // @ts-ignore
                            interface JoinData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.JoinData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableJoinData> {
                                /**
                                 * Gets the {@link Value} of the {@link Instant} that a {@link Player} joined
                                 * the {@link Server} the first time.
                                 * @return The value for the first time a player joined
                                 * @see Keys#FIRST_DATE_PLAYED
                                 */
                                // @ts-ignore
                                firstPlayed(): org.spongepowered.api.data.value.mutable.Value<java.time.Instant>
                                /**
                                 * Gets the {@link Value} of the {@link Instant} that a {@link Player} joined
                                 * the {@link Server} the last time.
                                 * @return The value for the last time a player joined
                                 * @see Keys#LAST_DATE_PLAYED
                                 */
                                // @ts-ignore
                                lastPlayed(): org.spongepowered.api.data.value.mutable.Value<java.time.Instant>
                            }
                        }
                    }
                }
            }
        }
    }
}
