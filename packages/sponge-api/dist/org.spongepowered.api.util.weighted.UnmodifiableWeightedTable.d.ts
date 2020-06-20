declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    /**
                     * Creates a WeightedTable that is completely immutable, but still is able
                     * to be changed via its proxy table.
                     * @param <T> Item type
                     */
                    // @ts-ignore
                    class UnmodifiableWeightedTable<T> extends org.spongepowered.api.util.weighted.WeightedTable<T> {
                        /**
                         * Creates a new {@link UnmodifiableWeightedTable} with the provided
                         * {@link WeightedTable}.
                         * @param table The table to provide
                         */
                        // @ts-ignore
                        constructor(table: org.spongepowered.api.util.weighted.WeightedTable<T>)
                        /**
                         * Creates a new {@link UnmodifiableWeightedTable} with the provided
                         * {@link WeightedTable} and {@code rolls}.
                         * @param table The table
                         * @param rolls The rolls
                         */
                        // @ts-ignore
                        constructor(table: org.spongepowered.api.util.weighted.WeightedTable<T>, rolls: number /*int*/)
                        /**
                         * Creates a new {@link UnmodifiableWeightedTable} with the provided
                         * {@link WeightedTable} and {@link VariableAmount rolls}.
                         * @param table The table
                         * @param rolls The rolls
                         */
                        // @ts-ignore
                        constructor(table: org.spongepowered.api.util.weighted.WeightedTable<T>, rolls: org.spongepowered.api.util.weighted.VariableAmount)
                        // @ts-ignore
                        add(entry: org.spongepowered.api.util.weighted.TableEntry<T>): boolean
                        // @ts-ignore
                        add(object: T, weight: number /*double*/): boolean
                        // @ts-ignore
                        addAll(c: Array<org.spongepowered.api.util.weighted.TableEntry<T>>): boolean
                        // @ts-ignore
                        setRolls(rolls: org.spongepowered.api.util.weighted.VariableAmount): void
                        // @ts-ignore
                        setRolls(rolls: number /*int*/): void
                        // @ts-ignore
                        remove(entry: any): boolean
                        // @ts-ignore
                        removeObject(entry: any): boolean
                        // @ts-ignore
                        removeAll(c: Array<any>): boolean
                        // @ts-ignore
                        removeIf(filter: java.util.function.Predicate<any super org.spongepowered.api.util.weighted.TableEntry<T>> | java.util.function$.Predicate<? super org.spongepowered.api.util.weighted.TableEntry<T>>): boolean
                        // @ts-ignore
                        retainAll(c: Array<any>): boolean
                        // @ts-ignore
                        clear(): void
                        // @ts-ignore
                        iterator(): java.util.Iterator<org.spongepowered.api.util.weighted.TableEntry<T>>
                        // @ts-ignore
                        contains(o: any): boolean
                        // @ts-ignore
                        getRolls(): org.spongepowered.api.util.weighted.VariableAmount
                        // @ts-ignore
                        get(rand: java.util.Random): java.util.List<T>
                        // @ts-ignore
                        containsObject(obj: any): boolean
                        // @ts-ignore
                        containsAll(c: Array<any>): boolean
                        // @ts-ignore
                        containsAllObjects(c: Array<any>): boolean
                        // @ts-ignore
                        isEmpty(): boolean
                        // @ts-ignore
                        size(): int
                        // @ts-ignore
                        getEntries(): java.util.List<org.spongepowered.api.util.weighted.TableEntry<T>>
                        // @ts-ignore
                        toArray(): java.lang.Object[]
                        // @ts-ignore
                        toArray<R>(a: R[]): R
                        // @ts-ignore
                        spliterator(): java.util.Spliterator<org.spongepowered.api.util.weighted.TableEntry<T>>
                        // @ts-ignore
                        stream(): java.util.stream.Stream<org.spongepowered.api.util.weighted.TableEntry<T>>
                        // @ts-ignore
                        parallelStream(): java.util.stream.Stream<org.spongepowered.api.util.weighted.TableEntry<T>>
                        // @ts-ignore
                        forEach(action: java.util.function.Consumer<any super org.spongepowered.api.util.weighted.TableEntry<T>> | java.util.function$.Consumer<? super org.spongepowered.api.util.weighted.TableEntry<T>>): void
                        // @ts-ignore
                        toString(): java.lang.String
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        equals(o: any): boolean
                    }
                }
            }
        }
    }
}
