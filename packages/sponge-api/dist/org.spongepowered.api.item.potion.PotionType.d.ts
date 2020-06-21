declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace potion {
                    /**
                     * Represents a type of potion with specific {@link PotionEffect}s.
                     */
                    // @ts-ignore
                    interface PotionType extends org.spongepowered.api.CatalogType {
                        // @ts-ignore
                        getEffects(): Array<org.spongepowered.api.effect.potion.PotionEffect>
                    }
                }
            }
        }
    }
}
