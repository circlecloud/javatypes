declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the "experience" held by a
                             * {@link DataHolder}. Usually the mechanics of "experience" is that it is
                             * accumulated by a {@link Humanoid} and can be spent on creating
                             * {@link Enchantment}s or renaming {@link ItemStack}s.
                             */
                            // @ts-ignore
                            interface ImmutableExperienceHolderData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableExperienceHolderData, org.spongepowered.api.data.manipulator.mutable.entity.ExperienceHolderData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue}  for the amount of experience
                                 * gained since the beginning of the current {@link #level()}. Normally,
                                 * the higher the level, the more "experience" required to gain another
                                 * level.
                                 * @return The bounded value of experience since the beginning of the
                                 *      current level
                                 */
                                // @ts-ignore
                                experienceSinceLevel(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the amount of experience
                                 * required between the current {@link #level()} and the next level.
                                 * This can be presumed to be the supposed "maximum" for the
                                 * {@link #experienceSinceLevel()} amount.
                                 * @return The immutable bounded required experience between levels
                                 */
                                // @ts-ignore
                                experienceBetweenLevels(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the current "level" of
                                 * experience deserved according to the {@link #totalExperience()} and
                                 * a function from implementation defining how much experience required
                                 * per level.
                                 * @return The current level according to the amount of total experience
                                 */
                                // @ts-ignore
                                level(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                                /**
                                 * Gets the total amount of experience stored.
                                 * @return The immutable value of total amount of experience
                                 */
                                // @ts-ignore
                                totalExperience(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
