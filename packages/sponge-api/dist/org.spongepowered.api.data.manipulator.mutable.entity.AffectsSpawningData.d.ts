declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for the "affects spawning" state of a
                             * {@link Player}.
                             */
                            // @ts-ignore
                            interface AffectsSpawningData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.AffectsSpawningData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAffectsSpawningData> {
                                /**
                                 * Gets the {@link Value} for the "affects spawning" state.
                                 * <p>A {@link Player} who does not affect spawning will be treated as a
                                 * spectator in regards to spawning. A {@link MobSpawner} will not be
                                 * activated by his presence and mobs around him may naturally despawn
                                 * if there is no other Player around who affects spawning.</p>
                                 * @return The value for the affects spawning state
                                 * @see Keys#AFFECTS_SPAWNING
                                 */
                                // @ts-ignore
                                affectsSpawning(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
