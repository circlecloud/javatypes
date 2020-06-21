declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace memory {
                /**
                 * Represents a key used for accessing memory values of a
                 * {@link org.bukkit.entity.LivingEntity}.
                 * @param <T> the class type of the memory value
                 */
                // @ts-ignore
                class MemoryKey<T> extends java.lang.Object implements org.bukkit.Keyed {
                    // @ts-ignore
                    public static readonly HOME: org.bukkit.entity.memory.MemoryKey<org.bukkit.Location>
                    // @ts-ignore
                    public static readonly MEETING_POINT: org.bukkit.entity.memory.MemoryKey<org.bukkit.Location>
                    // @ts-ignore
                    public static readonly JOB_SITE: org.bukkit.entity.memory.MemoryKey<org.bukkit.Location>
                    // @ts-ignore
                    public static readonly LAST_SLEPT: org.bukkit.entity.memory.MemoryKey<java.lang.Long | number>
                    // @ts-ignore
                    public static readonly LAST_WOKEN: org.bukkit.entity.memory.MemoryKey<java.lang.Long | number>
                    // @ts-ignore
                    public static readonly LAST_WORKED_AT_POI: org.bukkit.entity.memory.MemoryKey<java.lang.Long | number>
                    // @ts-ignore
                    public getKey(): org.bukkit.NamespacedKey
                    /**
                     * Gets the class of values associated with this memory.
                     * @return the class of value objects
                     */
                    // @ts-ignore
                    public getMemoryClass(): java.lang.Class<T>
                    /**
                     * Returns a {@link MemoryKey} by a {@link NamespacedKey}.
                     * @param namespacedKey the {#link NamespacedKey} referencing a
                     *  {@link MemoryKey}
                     * @return the {#link MemoryKey} or null when no {@link MemoryKey} is
                     *  available under that key
                     */
                    // @ts-ignore
                    public static getByKey(namespacedKey: org.bukkit.NamespacedKey): org.bukkit.entity.memory.MemoryKey<any>
                    /**
                     * Returns the set of all MemoryKeys.
                     * @return the memoryKeys
                     */
                    // @ts-ignore
                    public static values(): Array<org.bukkit.entity.memory.MemoryKey<any>>
                }
            }
        }
    }
}
