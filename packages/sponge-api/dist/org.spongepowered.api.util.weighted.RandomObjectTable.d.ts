declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    /**
                     * An abstract table holding weighted objects. Objects may be retrieved from the
                     * table according to weight or chance.
                     * @param <T> The type of entry
                     */
                    // @ts-ignore
                    abstract class RandomObjectTable<T> extends java.lang.Object implements java.util.Collection<org.spongepowered.api.util.weighted.TableEntry<T>> {
                        /**
                         * Creates a new {@link RandomObjectTable} with the provided number of rolls.
                         * @see RandomObjectTable#getRolls()
                         * @param rolls the rolls
                         */
                        // @ts-ignore
                        constructor(rolls: number /*int*/)
                        /**
                         * Creates a new {@link RandomObjectTable} with the provided number of rolls.
                         * @see RandomObjectTable#getRolls()
                         * @param rolls the rolls
                         */
                        // @ts-ignore
                        constructor(rolls: org.spongepowered.api.util.weighted.VariableAmount)
                        // @ts-ignore
                        readonly entries: java.util.List<org.spongepowered.api.util.weighted.TableEntry<T>> | Array<org.spongepowered.api.util.weighted.TableEntry<T>>
                        /**
                         * Gets the number of times this table will roll while retrieving items. For
                         * each roll a complete pass through of the table will occur.
                         * @return The number of rolls
                         */
                        // @ts-ignore
                        public getRolls(): org.spongepowered.api.util.weighted.VariableAmount
                        /**
                         * Sets the number of times this table will roll while retrieving items.
                         * @param rolls The new roll count
                         */
                        // @ts-ignore
                        public setRolls(rolls: org.spongepowered.api.util.weighted.VariableAmount): void
                        /**
                         * Sets the number of times this table will roll while retrieving items.
                         * @param rolls The new roll count
                         */
                        // @ts-ignore
                        public setRolls(rolls: number /*int*/): void
                        // @ts-ignore
                        public add(entry: org.spongepowered.api.util.weighted.TableEntry<T>): boolean
                        /**
                         * Adds the given object to the table with the given weight.
                         * @param object The new object
                         * @param weight The weight of the object
                         * @return If the object was successfully added
                         */
                        // @ts-ignore
                        public add(object: T, weight: number /*double*/): boolean
                        // @ts-ignore
                        public addAll(c: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public contains(o: java.lang.Object | any): boolean
                        /**
                         * Gets if this table contains the given object, the object may either be a
                         * {@link TableEntry} or the object contained within.
                         * @param obj The object to check for
                         * @return If the object is contained within the table
                         */
                        // @ts-ignore
                        public containsObject(obj: java.lang.Object | any): boolean
                        // @ts-ignore
                        public containsAll(c: java.util.Collection<any> | Array<any>): boolean
                        /**
                         * Gets if this table contains all of the given objects, the objects may
                         * either be {@link TableEntry}s or the objects contained within the
                         * entries.
                         * @param c The objects to check for
                         * @return If all of the objects are contained within the table
                         */
                        // @ts-ignore
                        public containsAllObjects(c: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public isEmpty(): boolean
                        // @ts-ignore
                        public remove(entry: java.lang.Object | any): boolean
                        /**
                         * Removes the first instance of an entry in this table which is a
                         * {@link WeightedObject} entry and contains the given object.
                         * @param object The object to remove
                         * @return If the table was changed as a result
                         */
                        // @ts-ignore
                        public removeObject(object: java.lang.Object | any): boolean
                        // @ts-ignore
                        public removeAll(c: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public retainAll(c: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public clear(): void
                        // @ts-ignore
                        public size(): number /*int*/
                        /**
                         * Performs a number of rolls according to the number of rolls defined by
                         * {@link #getRolls()} and returns items from the table for each roll.
                         * @param rand The random object to use
                         * @return The returned items, may be empty but not null
                         */
                        // @ts-ignore
                        public abstract get(rand: java.util.Random): Array<T>
                        /**
                         * Gets the entries in the table. Note that the specific sub class of this
                         * abstract table will determine the context that the entry weights should
                         * be interpreted in (either weights or chances).
                         * @return The raw entries
                         */
                        // @ts-ignore
                        public getEntries(): Array<org.spongepowered.api.util.weighted.TableEntry<T>>
                        // @ts-ignore
                        public iterator(): java.util.Iterator<org.spongepowered.api.util.weighted.TableEntry<T>>
                        // @ts-ignore
                        public toArray(): any[]
                        // @ts-ignore
                        public toArray<R>(a: R[]): R
                    }
                }
            }
        }
    }
}
