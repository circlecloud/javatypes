declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} that marks the "persisting" state for an
                             * {@link Entity}. A persisting entity will not naturally despawn, even if it
                             * would otherwise be able to.
                             * <p>In Vanilla, certain entities despawn when no player is close to them, as
                             * long as their "persisting" state is not <code>true</code>.</p>
                             */
                            // @ts-ignore
                            interface ImmutablePersistingData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutablePersistingData, org.spongepowered.api.data.manipulator.mutable.entity.PersistingData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "persist" state of an
                                 * {@link Entity}.
                                 * @return The immutable value for the persisting state
                                 */
                                // @ts-ignore
                                persists(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
