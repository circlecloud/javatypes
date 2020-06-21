declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableHealthScalingData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableHealthScalingData, org.spongepowered.api.data.manipulator.mutable.entity.HealthScalingData> {
                                /**
                                 * Defines the amount of health to show client-side (in hearts) such that
                                 * the maximum health is the value of this scale, and the current health
                                 * is scaled as a ratio.
                                 * <p>If the current maximum health is 400, and the player has 200, but the
                                 * scale dictates 20, then the client will see 5 hearts (or 10 half hearts)
                                 * out of 10 hearts.</p>
                                 * @return The value for the health scale
                                 */
                                // @ts-ignore
                                healthScale(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Double | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
