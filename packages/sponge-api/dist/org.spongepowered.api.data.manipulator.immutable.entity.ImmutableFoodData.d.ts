declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the various aspects of "hunger"
                             * which has various effects on health and speed of {@link Humanoid} entities.
                             */
                            // @ts-ignore
                            interface ImmutableFoodData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableFoodData, org.spongepowered.api.data.manipulator.mutable.entity.FoodData> {
                                /**
                                 * Gets the current food level as an {@link ImmutableBoundedValue}.
                                 * <p>Food level has health effects, depending on game difficulty and
                                 * hunger levels. If the food level is high enough, the human entity
                                 * may heal. If the food level is at 0, the human entity may starve.</p>
                                 * @return The current food level
                                 */
                                // @ts-ignore
                                foodLevel(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the "exhaustion" level.
                                 * <p>When the exhaustion level reaches 0, saturation is usually diminished
                                 * such that saturation is decreased and then exhaustion is reset to the
                                 * maximum. This type of effect occurs over time and can be modified by
                                 * movements and actions performed by the {@link Humanoid} entity.</p>
                                 * @return The immutable bounded value of exhaustion
                                 */
                                // @ts-ignore
                                exhaustion(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Double | number>
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the "exhaustion" level.
                                 * <p>When the saturation level reaches 0, the food level is usually
                                 * diminished such that the food level is decreased by 1, then
                                 * saturation is reset to the maximum value. This type of effect occurs
                                 * over time and can be modified by movements and actions performed by the
                                 * {@link Humanoid} entity.</p>
                                 * @return The immutable bounded value of saturation
                                 */
                                // @ts-ignore
                                saturation(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Double | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
