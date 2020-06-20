declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    /**
                     * An abstract entry which may be contained in any table.
                     * @param <T> The entry type
                     */
                    // @ts-ignore
                    class TableEntry<T> extends java.lang.Object {
                        /**
                         * Creates a new {@link TableEntry} with the desired {@code weight}.
                         * @param weight The weight to associate with this entry
                         */
                        // @ts-ignore
                        constructor(weight: number /*double*/)
                        /**
                         * Gets the weight of this entry.
                         * @return The weight
                         */
                        // @ts-ignore
                        getWeight(): double
                    }
                }
            }
        }
    }
}
