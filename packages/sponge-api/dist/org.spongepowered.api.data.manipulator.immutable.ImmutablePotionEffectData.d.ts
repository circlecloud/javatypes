declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        /**
                         * An {@link ImmutableDataManipulator} that handles the various
                         * {@link PotionEffect}s that may either affect an {@link Entity} or be
                         * contained within an {@link ItemStack} of the type {@link ItemTypes#POTION}.
                         */
                        // @ts-ignore
                        interface ImmutablePotionEffectData extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData<org.spongepowered.api.effect.potion.PotionEffect, org.spongepowered.api.data.manipulator.immutable.ImmutablePotionEffectData, org.spongepowered.api.data.manipulator.mutable.PotionEffectData> {
                            /**
                             * Gets the {@link ImmutableListValue} of the {@link PotionEffect}s.
                             * @return The immutable list value of all potion effects contained
                             */
                            // @ts-ignore
                            effects(): org.spongepowered.api.data.value.immutable.ImmutableListValue<org.spongepowered.api.effect.potion.PotionEffect>
                        }
                    }
                }
            }
        }
    }
}
