declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace type {
                    /**
                     * Represents a piece of art to be displayed by {@link Painting}s.
                     */
                    // @ts-ignore
                    interface Art extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the height in blocks this art piece spans.
                         * @return The height in blocks
                         */
                        // @ts-ignore
                        getHeight(): int
                        /**
                         * Gets the width in blocks this art piece spans.
                         * @return The width in blocks
                         */
                        // @ts-ignore
                        getWidth(): int
                    }
                }
            }
        }
    }
}
