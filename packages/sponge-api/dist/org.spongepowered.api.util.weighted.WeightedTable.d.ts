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
                        public add(entry: org.spongepowered.api.util.weighted.TableEntry<T>): boolean
                        // @ts-ignore
                        public add(object: T, weight: number /*double*/): boolean
                        // @ts-ignore
                        public addAll(c: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public remove(entry: java.lang.Object | any): boolean
                        // @ts-ignore
                        public removeObject(entry: java.lang.Object | any): boolean
                        // @ts-ignore
                        public removeAll(c: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public retainAll(c: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public clear(): void
                        /**
                         * Recalculates the total weight of all entries in this table.
                         */
                        // @ts-ignore
                        recalculateWeight(): void
                        // @ts-ignore
                        public get(rand: java.util.Random): Array<T>
                        // @ts-ignore
                        public iterator(): java.util.Iterator<org.spongepowered.api.util.weighted.TableEntry<T>>
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
