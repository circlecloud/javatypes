declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    /**
                     * A table of weighted entry, each entry is given a weight, the higher the
                     * weight the more likely the chance that the entry is chosen. Each roll will
                     * only return a single entries value.
                     * @param <T> The entry type
                     */
                    // @ts-ignore
                    class WeightedTable<T> extends org.spongepowered.api.util.weighted.RandomObjectTable<T> {
                        /**
                         * Creates a new {@link WeightedTable} with a default roll
                         * count of {@code 1}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a new {@link WeightedTable} with the provided
                         * number of {@code rolls}.
                         * @param rolls The rolls for variance
                         */
                        // @ts-ignore
                        constructor(rolls: number /*int*/)
                        /**
                         * Creates a new {@link WeightedTable} with the provided
                         * {@link VariableAmount} for the amount of rolls and variance.
                         * @param rolls The rolls for variance
                         */
                        // @ts-ignore
                        constructor(rolls: org.spongepowered.api.util.weighted.VariableAmount)
                        // @ts-ignore
                        add(entry: org.spongepowered.api.util.weighted.TableEntry<T>): boolean
                        // @ts-ignore
                        add(object: T, weight: number /*double*/): boolean
                        // @ts-ignore
                        addAll(c: Array<org.spongepowered.api.util.weighted.TableEntry<T>>): boolean
                        // @ts-ignore
                        remove(entry: any): boolean
                        // @ts-ignore
                        removeObject(entry: any): boolean
                        // @ts-ignore
                        removeAll(c: Array<any>): boolean
                        // @ts-ignore
                        retainAll(c: Array<any>): boolean
                        // @ts-ignore
                        clear(): void
                        /**
                         * Recalculates the total weight of all entries in this table.
                         */
                        // @ts-ignore
                        recalculateWeight(): void
                        // @ts-ignore
                        get(rand: java.util.Random): java.util.List<T>
                        // @ts-ignore
                        iterator(): java.util.Iterator<org.spongepowered.api.util.weighted.TableEntry<T>>
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
