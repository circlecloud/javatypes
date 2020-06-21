declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} containing health specific information
                             * for a {@link Living} entity. Usually just signifying that an {@link Entity}
                             * has "health" and can "die" once the health is depleted.
                             */
                            // @ts-ignore
                            interface HealthData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.HealthData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableHealthData> {
                                /**
                                 * Returns the health amount.
                                 * <p>The range of the health depends on the object on which this
                                 * method is defined. For players in Minecraft, the nominal range is
                                 * between 0 and 20, inclusive, but the range can be adjusted.</p>
                                 * <p>Convention dictates that health does not follow below 0 but this
                                 * convention may be broken.</p>
                                 * @return Health value
                                 * @see Keys#HEALTH
                                 */
                                // @ts-ignore
                                health(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double | number>
                                /**
                                 * Gets the current maximum health.
                                 * <p>The maximum health set here may affect the attribute increasing
                                 * health points. The base health should be minded that it may be lower
                                 * than the total maximum health of this entity.</p>
                                 * @return This entities maximum health
                                 * @see Keys#MAX_HEALTH
                                 */
                                // @ts-ignore
                                maxHealth(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
