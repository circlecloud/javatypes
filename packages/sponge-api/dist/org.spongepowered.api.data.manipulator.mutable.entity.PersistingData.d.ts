declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} that marks the "persisting" state for an
                             * {@link Entity}. A persisting entity will not naturally despawn, even if it
                             * would otherwise be able to.
                             * <p>In Vanilla, certain entities despawn when no player is close to them, as
                             * long as their "persisting" state is not <code>true</code>.</p>
                             */
                            // @ts-ignore
                            interface PersistingData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.PersistingData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutablePersistingData> {
                                /**
                                 * Gets the {@link Value} for the "persist" state of an
                                 * {@link Entity}.
                                 * @return The value for the persisting state
                                 * @see Keys#PERSISTS
                                 */
                                // @ts-ignore
                                persists(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
