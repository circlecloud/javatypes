declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Represents the "gained" experience information. Usually experience can be
                             * used to enchant weapons and items. Usually applicable to {@link Humanoid}s.
                             */
                            // @ts-ignore
                            interface ExperienceHolderData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.ExperienceHolderData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableExperienceHolderData> {
                                /**
                                 * Gets the {@link MutableBoundedValue}  for the amount of experience
                                 * gained since the beginning of the current {@link #level()}. Normally,
                                 * the higher the level, the more "experience" required to gain another
                                 * level.
                                 * @return The bounded value of experience since the beginning of the
                                 *      current level
                                 * @see Keys#EXPERIENCE_SINCE_LEVEL
                                 */
                                // @ts-ignore
                                experienceSinceLevel(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the amount of experience
                                 * required between the current {@link #level()} and the next level.
                                 * This can be presumed to be the supposed "maximum" for the
                                 * {@link #experienceSinceLevel()} amount.
                                 * @return The immutable bounded required experience between levels
                                 * @see Keys#EXPERIENCE_FROM_START_OF_LEVEL
                                 */
                                // @ts-ignore
                                getExperienceBetweenLevels(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the {@link MutableBoundedValue} for the current "level" of
                                 * experience deserved according to the {@link #totalExperience()} and
                                 * a function from implementation defining how much experience required
                                 * per level.
                                 * @return The current level according to the amount of total experience
                                 * @see Keys#EXPERIENCE_LEVEL
                                 */
                                // @ts-ignore
                                level(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the total amount of experience stored.
                                 * @return The value of total amount of experience
                                 * @see Keys#TOTAL_EXPERIENCE
                                 */
                                // @ts-ignore
                                totalExperience(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
