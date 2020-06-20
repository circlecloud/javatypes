declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the {@link Instant}s that a
                             * {@link Player} both first joined a server, and last joined a server.
                             */
                            // @ts-ignore
                            interface ImmutableJoinData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableJoinData, org.spongepowered.api.data.manipulator.mutable.entity.JoinData> {
                                /**
                                 * Gets the {@link ImmutableValue} of the {@link Instant} that a
                                 * {@link Player} joined the {@link Server} the first time.
                                 * @return The immutable value for the first time a player joined
                                 */
                                // @ts-ignore
                                firstPlayed(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.time.Instant>
                                /**
                                 * Gets the {@link ImmutableValue} of the {@link Instant} that a
                                 * {@link Player} joined the {@link Server} the last time.
                                 * @return The immutable value for the last time a player joined
                                 */
                                // @ts-ignore
                                lastPlayed(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.time.Instant>
                            }
                        }
                    }
                }
            }
        }
    }
}
