declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    /**
                     * A general interface for recipes.
                     */
                    // @ts-ignore
                    interface Recipe extends org.spongepowered.api.CatalogType {
                        /**
                         * A general result of this recipe. This result may be customized depending
                         * on the context.
                         * @return The exemplary result of this recipe
                         */
                        // @ts-ignore
                        getExemplaryResult(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                    }
                }
            }
        }
    }
}
