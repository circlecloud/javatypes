declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'has_book' is a quick flag to check whether this lectern has a book inside
                     * it.
                     */
                    // @ts-ignore
                    interface Lectern extends org.bukkit.block.data.Directional, org.bukkit.block.data.Powerable {
                        /**
                         * Gets the value of the 'has_book' property.
                         * @return the 'has_book' value
                         */
                        // @ts-ignore
                        hasBook(): boolean
                    }
                }
            }
        }
    }
}
