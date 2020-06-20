declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    /**
                     * This is a variant of the {@link RandomObjectTable} which uses a 0-1 chance
                     * attached to every entry. When rolled the a chance roll is calculated for each
                     * entry and <strong>all</strong> entries which pass are returned.
                     * @param <T> The entry type
                     */
                    // @ts-ignore
                    class ChanceTable<T> extends org.spongepowered.api.util.weighted.RandomObjectTable<T> {
                        /**
                         * Creates a new {@link ChanceTable} with a default roll count of 1.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a new {@link ChanceTable}.
                         * @param rolls The number of rolls to perform
                         */
                        // @ts-ignore
                        constructor(rolls: number /*int*/)
                        // @ts-ignore
                        get(rand: java.util.Random): java.util.List<T>
                        // @ts-ignore
                        equals(o: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
