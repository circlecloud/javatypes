declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    /**
                     * Represents a {@link RandomObjectTable} which is nested inside the entry of
                     * another table.
                     * @param <T> The entry type
                     */
                    // @ts-ignore
                    class NestedTableEntry<T> extends org.spongepowered.api.util.weighted.TableEntry<T> {
                        /**
                         * Creates a new {@link NestedTableEntry} with the provided
                         * {@code weight} and {@link RandomObjectTable table}.
                         * @param weight The weight to apply to the entry
                         * @param table The table itself
                         */
                        // @ts-ignore
                        constructor(weight: number /*double*/, table: org.spongepowered.api.util.weighted.RandomObjectTable<T>)
                        /**
                         * Retrieves entries from the nested table.
                         * @param rand The random object to use
                         * @return The retrieved entries
                         */
                        // @ts-ignore
                        public get(rand: java.util.Random): Array<T>
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
