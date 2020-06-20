declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        /**
                         * A {@link DataManipulator} handling the various
                         * {@link FireworkEffect}s associated with a {@link Firework} and
                         * an {@link ItemStack} that is of the {@link ItemTypes#FIREWORKS} or {@link ItemTypes#FIREWORK_CHARGE}.
                         */
                        // @ts-ignore
                        interface FireworkEffectData extends org.spongepowered.api.data.manipulator.mutable.ListData<org.spongepowered.api.item.FireworkEffect, org.spongepowered.api.data.manipulator.mutable.FireworkEffectData, org.spongepowered.api.data.manipulator.immutable.ImmutableFireworkEffectData> {
                            /**
                             * Gets the {@link ListValue} of {@link FireworkEffect}s.
                             * <p>Note that for {@link ItemTypes#FIREWORK_CHARGE} only the first effect
                             * will apply to the charge.</p>
                             * @return The list value of firework effects
                             * @see Keys#FIREWORK_EFFECTS
                             */
                            // @ts-ignore
                            effects(): org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.item.FireworkEffect>
                        }
                    }
                }
            }
        }
    }
}
