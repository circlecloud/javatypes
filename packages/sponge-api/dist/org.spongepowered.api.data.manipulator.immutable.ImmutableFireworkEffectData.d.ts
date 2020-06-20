declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        /**
                         * An {@link ImmutableDataManipulator} handling the various
                         * {@link FireworkEffect}s associated with a {@link Firework} and
                         * an {@link ItemStack} that is of the {@link ItemTypes#FIREWORKS} or {@link ItemTypes#FIREWORK_CHARGE}.
                         */
                        // @ts-ignore
                        interface ImmutableFireworkEffectData extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData<org.spongepowered.api.item.FireworkEffect, org.spongepowered.api.data.manipulator.immutable.ImmutableFireworkEffectData, org.spongepowered.api.data.manipulator.mutable.FireworkEffectData> {
                            /**
                             * Gets the {@link ImmutableListValue} of {@link FireworkEffect}s.
                             * <p>Note that for {@link ItemTypes#FIREWORK_CHARGE} only the first effect
                             * will apply to the charge.</p>
                             * @return The list value of firework effects
                             */
                            // @ts-ignore
                            effects(): org.spongepowered.api.data.value.immutable.ImmutableListValue<org.spongepowered.api.item.FireworkEffect>
                        }
                    }
                }
            }
        }
    }
}
