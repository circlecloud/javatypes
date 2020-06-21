declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                namespace BookMeta {
                    /**
                     * Represents the generation (or level of copying) of a written book
                     */
                    // @ts-ignore
                    class Generation extends java.lang.Enum<org.bukkit.inventory.meta.BookMeta.Generation> {
                        /**
                         * Book written into a book-and-quill. Can be copied. (Default value)
                         */
                        // @ts-ignore
                        readonly ORIGINAL: org.bukkit.inventory.meta.BookMeta.Generation
                        /**
                         * Book that was copied from an original. Can be copied.
                         */
                        // @ts-ignore
                        readonly COPY_OF_ORIGINAL: org.bukkit.inventory.meta.BookMeta.Generation
                        /**
                         * Book that was copied from a copy of an original. Can't be copied.
                         */
                        // @ts-ignore
                        readonly COPY_OF_COPY: org.bukkit.inventory.meta.BookMeta.Generation
                        /**
                         * Unused; unobtainable by players. Can't be copied.
                         */
                        // @ts-ignore
                        readonly TATTERED: org.bukkit.inventory.meta.BookMeta.Generation
                        // @ts-ignore
                        values(): org.bukkit.inventory.meta.BookMeta.Generation[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.inventory.meta.BookMeta.Generation
                    }
                }
            }
        }
    }
}
