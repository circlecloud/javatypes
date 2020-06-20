declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} containing health specific information
                             * for a {@link Living} entity. Usually just signifying that an {@link Entity}
                             * has "health" and can "die" once the health is depleted.
                             */
                            // @ts-ignore
                            interface ImmutableHealthData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableHealthData, org.spongepowered.api.data.manipulator.mutable.entity.HealthData> {
                                /**
                                 * Gets an {@link ImmutableBoundedValue} for the current health.
                                 * <p>The range of the health depends on the object on which this
                                 * method is defined. For players in Minecraft, the nominal range is
                                 * between 0 and 20, inclusive, but the range can be adjusted.</p>
                                 * <p>Convention dictates that health does not follow below 0 but this
                                 * convention may be broken for any reason.</p>
                                 * @return Health value
                                 */
                                // @ts-ignore
                                health(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Double>
                                /**
                                 * Gets an {@link ImmutableBoundedValue} for the maximum health.
                                 * <p>The maximum health set here may affect the attribute increasing
                                 * health points. The base health should be minded that it may be lower
                                 * than the total maximum health of this entity.</p>
                                 * @return This entities maximum health
                                 */
                                // @ts-ignore
                                maxHealth(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Double>
                            }
                        }
                    }
                }
            }
        }
    }
}
