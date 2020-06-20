declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace type {
                    /**
                     * Represents a type of cooked fish.
                     */
                    // @ts-ignore
                    interface CookedFish extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable {
                        /**
                         * Gets this cooked fish type's corresponding {@link Fish} type.
                         * @return The raw fish type.
                         */
                        // @ts-ignore
                        getRawFish(): org.spongepowered.api.data.type.Fish
                    }
                }
            }
        }
    }
}
