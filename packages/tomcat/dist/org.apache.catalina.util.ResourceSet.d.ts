declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * Extended implementation of <strong>HashSet</strong> that includes a
                 * <code>locked</code> property.  This class can be used to safely expose
                 * resource path sets to user classes without having to clone them in order
                 * to avoid modifications.  When first created, a <code>ResourceMap</code>
                 * is not locked.
                 * @param <T> The type of elements in the Set
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class ResourceSet<T> extends java.util.HashSet<T> {
                    /**
                     * Construct a new, empty set with the default initial capacity and
                     * load factor.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new, empty set with the specified initial capacity and
                     * default load factor.
                     * @param initialCapacity The initial capacity of this set
                     */
                    // @ts-ignore
                    constructor(initialCapacity: number /*int*/)
                    /**
                     * Construct a new, empty set with the specified initial capacity and
                     * load factor.
                     * @param initialCapacity The initial capacity of this set
                     * @param loadFactor The load factor of this set
                     */
                    // @ts-ignore
                    constructor(initialCapacity: number /*int*/, loadFactor: number /*float*/)
                    /**
                     * Construct a new set with the same contents as the existing collection.
                     * @param coll The collection whose contents we should copy
                     */
                    // @ts-ignore
                    constructor(coll: java.util.Collection<T> | Array<T>)
                    /**
                     * @return the locked state of this parameter map.
                     */
                    // @ts-ignore
                    public isLocked(): boolean
                    /**
                     * Set the locked state of this parameter map.
                     * @param locked The new locked state
                     */
                    // @ts-ignore
                    public setLocked(locked: boolean): void
                    /**
                     * Add the specified element to this set if it is not already present.
                     * Return <code>true</code> if the element was added.
                     * @param o The object to be added
                     * @exception IllegalStateException if this ResourceSet is locked
                     */
                    // @ts-ignore
                    public add(o: T): boolean
                    /**
                     * Remove all of the elements from this set.
                     * @exception IllegalStateException if this ResourceSet is locked
                     */
                    // @ts-ignore
                    public clear(): void
                    /**
                     * Remove the given element from this set if it is present.
                     * Return <code>true</code> if the element was removed.
                     * @param o The object to be removed
                     * @exception IllegalStateException if this ResourceSet is locked
                     */
                    // @ts-ignore
                    public remove(o: java.lang.Object | any): boolean
                }
            }
        }
    }
}
