declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface HealthScalingData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.HealthScalingData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableHealthScalingData> {
                                /**
                                 * Defines the amount of health to show client-side (in hearts) such that
                                 * the maximum health is the value of this scale, and the current health
                                 * is scaled as a ratio.
                                 * <p>If the current maximum health is 400, and the player has 200, but the
                                 * scale dictates 20, then the client will see 5 hearts (or 10 half hearts)
                                 * out of 10 hearts.</p>
                                 * @return The value for the health scale
                                 * @see Keys#HEALTH_SCALE
                                 */
                                // @ts-ignore
                                healthScale(): org.spongepowered.api.data.value.BoundedValue<java.lang.Double | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
