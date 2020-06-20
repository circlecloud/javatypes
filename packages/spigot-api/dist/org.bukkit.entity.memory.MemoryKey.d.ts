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
                    readonly HOME: org.bukkit.entity.memory.MemoryKey<org.bukkit.Location>
                    // @ts-ignore
                    readonly MEETING_POINT: org.bukkit.entity.memory.MemoryKey<org.bukkit.Location>
                    // @ts-ignore
                    readonly JOB_SITE: org.bukkit.entity.memory.MemoryKey<org.bukkit.Location>
                    // @ts-ignore
                    readonly LAST_SLEPT: org.bukkit.entity.memory.MemoryKey<java.lang.Long>
                    // @ts-ignore
                    readonly LAST_WOKEN: org.bukkit.entity.memory.MemoryKey<java.lang.Long>
                    // @ts-ignore
                    readonly LAST_WORKED_AT_POI: org.bukkit.entity.memory.MemoryKey<java.lang.Long>
                    // @ts-ignore
                    getKey(): org.bukkit.NamespacedKey
                    /**
                     * Gets the class of values associated with this memory.
                     * @return the class of value objects
                     */
                    // @ts-ignore
                    getMemoryClass(): java.lang.Class<T>
                    /**
                     * Returns a {@link MemoryKey} by a {@link NamespacedKey}.
                     * @param namespacedKey the {#link NamespacedKey} referencing a
                     *  {@link MemoryKey}
                     * @return the {#link MemoryKey} or null when no {@link MemoryKey} is
                     *  available under that key
                     */
                    // @ts-ignore
                    getByKey(namespacedKey: org.bukkit.NamespacedKey): org.bukkit.entity.memory.MemoryKey
                    /**
                     * Returns the set of all MemoryKeys.
                     * @return the memoryKeys
                     */
                    // @ts-ignore
                    values(): java.util.Set<org.bukkit.entity.memory.MemoryKey>
                }
            }
        }
    }
}
