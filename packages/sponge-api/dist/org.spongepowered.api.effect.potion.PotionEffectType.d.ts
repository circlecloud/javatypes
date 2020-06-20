declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace potion {
                    /**
                     * Represents a possible type of {@link PotionEffect}.
                     */
                    // @ts-ignore
                    interface PotionEffectType extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable {
                        /**
                         * Gets whether this potion effect is applied instantly or over time.
                         * @return If applied instantly.
                         */
                        // @ts-ignore
                        isInstant(): boolean
                        /**
                         * Gets the {@link Translation} for this potion effect type as a potion
                         * name.
                         * @return The translation representing this effect as potion
                         */
                        // @ts-ignore
                        getPotionTranslation(): org.spongepowered.api.text.translation.Translation
                    }
                }
            }
        }
    }
}
