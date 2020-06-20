declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        /**
                         * Represents a {@link List} of {@link PotionEffect}s that can be applicable to
                         * various {@link DataHolder}s such as {@link Entity}s, {@link ItemStack}s as
                         * {@link ItemTypes#POTION}, etc.
                         */
                        // @ts-ignore
                        interface PotionEffectData extends org.spongepowered.api.data.manipulator.mutable.ListData<org.spongepowered.api.effect.potion.PotionEffect, org.spongepowered.api.data.manipulator.mutable.PotionEffectData, org.spongepowered.api.data.manipulator.immutable.ImmutablePotionEffectData> {
                            /**
                             * Gets the {@link ListValue} of the {@link PotionEffect}s.
                             * @return The list value of all potion effects contained
                             * @see Keys#POTION_EFFECTS
                             */
                            // @ts-ignore
                            effects(): org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.effect.potion.PotionEffect>
                        }
                    }
                }
            }
        }
    }
}
