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
                        public add(entry: org.spongepowered.api.util.weighted.TableEntry<T>): boolean
                        // @ts-ignore
                        public add(object: T, weight: number /*double*/): boolean
                        // @ts-ignore
                        public addAll(c: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public setRolls(rolls: org.spongepowered.api.util.weighted.VariableAmount): void
                        // @ts-ignore
                        public setRolls(rolls: number /*int*/): void
                        // @ts-ignore
                        public remove(entry: java.lang.Object | any): boolean
                        // @ts-ignore
                        public removeObject(entry: java.lang.Object | any): boolean
                        // @ts-ignore
                        public removeAll(c: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public removeIf(filter: java.util.function$.Predicate<any>): boolean
                        // @ts-ignore
                        public retainAll(c: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public clear(): void
                        // @ts-ignore
                        public iterator(): java.util.Iterator<org.spongepowered.api.util.weighted.TableEntry<T>>
                        // @ts-ignore
                        public contains(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        public getRolls(): org.spongepowered.api.util.weighted.VariableAmount
                        // @ts-ignore
                        public get(rand: java.util.Random): Array<T>
                        // @ts-ignore
                        public containsObject(obj: java.lang.Object | any): boolean
                        // @ts-ignore
                        public containsAll(c: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public containsAllObjects(c: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public isEmpty(): boolean
                        // @ts-ignore
                        public size(): number /*int*/
                        // @ts-ignore
                        public getEntries(): Array<org.spongepowered.api.util.weighted.TableEntry<T>>
                        // @ts-ignore
                        public toArray(): any[]
                        // @ts-ignore
                        public toArray<R>(a: R[]): R
                        // @ts-ignore
                        public spliterator(): java.util.Spliterator<org.spongepowered.api.util.weighted.TableEntry<T>>
                        // @ts-ignore
                        public stream(): java.util.stream.Stream<org.spongepowered.api.util.weighted.TableEntry<T>>
                        // @ts-ignore
                        public parallelStream(): java.util.stream.Stream<org.spongepowered.api.util.weighted.TableEntry<T>>
                        // @ts-ignore
                        public forEach(action: java.util.function$.Consumer<any>): void
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                    }
                }
            }
        }
    }
}
