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
                    class RandomObjectTable<T> extends java.lang.Object implements java.util.Collection<org.spongepowered.api.util.weighted.TableEntry<T>> {
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
                        readonly entries: Array<org.spongepowered.api.util.weighted.TableEntry<T>>
                        /**
                         * Gets the number of times this table will roll while retrieving items. For
                         * each roll a complete pass through of the table will occur.
                         * @return The number of rolls
                         */
                        // @ts-ignore
                        getRolls(): org.spongepowered.api.util.weighted.VariableAmount
                        /**
                         * Sets the number of times this table will roll while retrieving items.
                         * @param rolls The new roll count
                         */
                        // @ts-ignore
                        setRolls(rolls: org.spongepowered.api.util.weighted.VariableAmount): void
                        /**
                         * Sets the number of times this table will roll while retrieving items.
                         * @param rolls The new roll count
                         */
                        // @ts-ignore
                        setRolls(rolls: number /*int*/): void
                        // @ts-ignore
                        add(entry: org.spongepowered.api.util.weighted.TableEntry<T>): boolean
                        /**
                         * Adds the given object to the table with the given weight.
                         * @param object The new object
                         * @param weight The weight of the object
                         * @return If the object was successfully added
                         */
                        // @ts-ignore
                        add(object: T, weight: number /*double*/): boolean
                        // @ts-ignore
                        addAll(c: Array<org.spongepowered.api.util.weighted.TableEntry<T>>): boolean
                        // @ts-ignore
                        contains(o: any): boolean
                        /**
                         * Gets if this table contains the given object, the object may either be a
                         * {@link TableEntry} or the object contained within.
                         * @param obj The object to check for
                         * @return If the object is contained within the table
                         */
                        // @ts-ignore
                        containsObject(obj: any): boolean
                        // @ts-ignore
                        containsAll(c: Array<any>): boolean
                        /**
                         * Gets if this table contains all of the given objects, the objects may
                         * either be {@link TableEntry}s or the objects contained within the
                         * entries.
                         * @param c The objects to check for
                         * @return If all of the objects are contained within the table
                         */
                        // @ts-ignore
                        containsAllObjects(c: Array<any>): boolean
                        // @ts-ignore
                        isEmpty(): boolean
                        // @ts-ignore
                        remove(entry: any): boolean
                        /**
                         * Removes the first instance of an entry in this table which is a
                         * {@link WeightedObject} entry and contains the given object.
                         * @param object The object to remove
                         * @return If the table was changed as a result
                         */
                        // @ts-ignore
                        removeObject(object: any): boolean
                        // @ts-ignore
                        removeAll(c: Array<any>): boolean
                        // @ts-ignore
                        retainAll(c: Array<any>): boolean
                        // @ts-ignore
                        clear(): void
                        // @ts-ignore
                        size(): int
                        /**
                         * Performs a number of rolls according to the number of rolls defined by
                         * {@link #getRolls()} and returns items from the table for each roll.
                         * @param rand The random object to use
                         * @return The returned items, may be empty but not null
                         */
                        // @ts-ignore
                        abstract get(rand: java.util.Random): java.util.List<T>
                        /**
                         * Gets the entries in the table. Note that the specific sub class of this
                         * abstract table will determine the context that the entry weights should
                         * be interpreted in (either weights or chances).
                         * @return The raw entries
                         */
                        // @ts-ignore
                        getEntries(): java.util.List<org.spongepowered.api.util.weighted.TableEntry<T>>
                        // @ts-ignore
                        iterator(): java.util.Iterator<org.spongepowered.api.util.weighted.TableEntry<T>>
                        // @ts-ignore
                        toArray(): java.lang.Object[]
                        // @ts-ignore
                        toArray<R>(a: R[]): R
                    }
                }
            }
        }
    }
}
