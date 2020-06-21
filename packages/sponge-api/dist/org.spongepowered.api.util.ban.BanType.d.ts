declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace ban {
                    /**
                     * Represents the possible types of bans.
                     */
                    // @ts-ignore
                    interface BanType extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the {@link Ban} class that this type represents.
                         * @return The ban class
                         */
                        // @ts-ignore
                        getBanClass(): java.lang.Class<any>
                    }
                }
            }
        }
    }
}
