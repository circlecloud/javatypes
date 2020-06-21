declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * Implementation of <strong>java.util.Map</strong> that includes a
                 * <code>locked</code> property.  This class can be used to safely expose
                 * Catalina internal parameter map objects to user classes without having
                 * to clone them in order to avoid modifications.  When first created, a
                 * <code>ParmaeterMap</code> instance is not locked.
                 * @param <K> The type of Key
                 * @param <V> The type of Value
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class ParameterMap<K, V> extends java.lang.Object implements java.util.Map<K, V>, java.io.Serializable {
                    /**
                     * Construct a new, empty map with the default initial capacity and
                     * load factor.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new, empty map with the specified initial capacity and
                     * default load factor.
                     * @param initialCapacity The initial capacity of this map
                     */
                    // @ts-ignore
                    constructor(initialCapacity: number /*int*/)
                    /**
                     * Construct a new, empty map with the specified initial capacity and
                     * load factor.
                     * @param initialCapacity The initial capacity of this map
                     * @param loadFactor The load factor of this map
                     */
                    // @ts-ignore
                    constructor(initialCapacity: number /*int*/, loadFactor: number /*float*/)
                    /**
                     * Construct a new map with the same mappings as the given map.
                     * @param map Map whose contents are duplicated in the new map
                     */
                    // @ts-ignore
                    constructor(map: java.util.Map<K, V>)
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
                     * {@inheritDoc}
                     * @exception IllegalStateException if this map is currently locked
                     */
                    // @ts-ignore
                    public clear(): void
                    /**
                     * {@inheritDoc}
                     * @exception IllegalStateException if this map is currently locked
                     */
                    // @ts-ignore
                    public put(key: K, value: V): V
                    /**
                     * {@inheritDoc}
                     * @exception IllegalStateException if this map is currently locked
                     */
                    // @ts-ignore
                    public putAll(map: java.util.Map<any, any>): void
                    /**
                     * {@inheritDoc}
                     * @exception IllegalStateException if this map is currently locked
                     */
                    // @ts-ignore
                    public remove(key: java.lang.Object | any): V
                    // @ts-ignore
                    public size(): number /*int*/
                    // @ts-ignore
                    public isEmpty(): boolean
                    // @ts-ignore
                    public containsKey(key: java.lang.Object | any): boolean
                    // @ts-ignore
                    public containsValue(value: java.lang.Object | any): boolean
                    // @ts-ignore
                    public get(key: java.lang.Object | any): V
                    /**
                     * {@inheritDoc}
                     * <p>
                     * Returns an <strong>unmodifiable</strong> {@link Set} view of the keys
                     * contained in this map if it is locked.
                     */
                    // @ts-ignore
                    public keySet(): Array<K>
                    /**
                     * {@inheritDoc}
                     * <p>
                     * Returns an <strong>unmodifiable</strong> {@link Collection} view of the
                     * values contained in this map if it is locked.
                     */
                    // @ts-ignore
                    public values(): Array<V>
                    /**
                     * {@inheritDoc}
                     * <p>
                     * Returns an <strong>unmodifiable</strong> {@link Set} view of the mappings
                     * contained in this map if it is locked.
                     */
                    // @ts-ignore
                    public entrySet(): Array<java.util.Map.Entry<K, V>>
                }
            }
        }
    }
}
