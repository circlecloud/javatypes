declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace type {
                    /**
                     * Represents a type of raw fish item.
                     */
                    // @ts-ignore
                    interface Fish extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable {
                        /**
                         * Gets this raw fish type's corresponding {@link CookedFish} type.
                         * @return The cooked fish type, if available
                         */
                        // @ts-ignore
                        getCookedFish(): java.util.Optional<org.spongepowered.api.data.type.CookedFish>
                    }
                }
            }
        }
    }
}
