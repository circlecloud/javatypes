declare namespace org {
    namespace bukkit {
        namespace persistence {
            /**
             * This interface represents a map like object, capable of storing custom tags
             * in it.
             */
            // @ts-ignore
            interface PersistentDataContainer {
                /**
                 * Stores a metadata value on the {@link PersistentDataHolder} instance.
                 * <p>
                 * This API cannot be used to manipulate minecraft data, as the values will
                 * be stored using your namespace. This method will override any existing
                 * value the {@link PersistentDataHolder} may have stored under the provided
                 * key.
                 * @param key the key this value will be stored under
                 * @param type the type this tag uses
                 * @param value the value stored in the tag
                 * @param <T> the generic java type of the tag value
                 * @param <Z> the generic type of the object to store
                 * @throws NullPointerException if the key is null
                 * @throws NullPointerException if the type is null
                 * @throws NullPointerException if the value is null. Removing a tag should
                 *  be done using {#link #remove(NamespacedKey)}
                 * @throws IllegalArgumentException if no suitable adapter will be found for
                 *  the {#link PersistentDataType#getPrimitiveType()}
                 */
                // @ts-ignore
                set<T, Z>(key: org.bukkit.NamespacedKey, type: org.bukkit.persistence.PersistentDataType<T, Z>, value: Z): void
                /**
                 * Returns if the persistent metadata provider has metadata registered
                 * matching the provided parameters.
                 * <p>
                 * This method will only return if the found value has the same primitive
                 * data type as the provided key.
                 * <p>
                 * Storing a value using a custom {@link PersistentDataType} implementation
                 * will not store the complex data type. Therefore storing a UUID (by
                 * storing a byte[]) will match has("key" ,
                 * {@link PersistentDataType#BYTE_ARRAY}). Likewise a stored byte[] will
                 * always match your UUID {@link PersistentDataType} even if it is not 16
                 * bytes long.
                 * <p>
                 * This method is only usable for custom object keys. Overwriting existing
                 * tags, like the the display name, will not work as the values are stored
                 * using your namespace.
                 * @param key the key the value is stored under
                 * @param type the type which primitive storage type has to match the value
                 * @param <T> the generic type of the stored primitive
                 * @param <Z> the generic type of the eventually created complex object
                 * @return if a value
                 * @throws NullPointerException if the key to look up is null
                 * @throws NullPointerException if the type to cast the found object to is
                 *  null
                 */
                // @ts-ignore
                has<T, Z>(key: org.bukkit.NamespacedKey, type: org.bukkit.persistence.PersistentDataType<T, Z>): boolean
                /**
                 * Returns the metadata value that is stored on the
                 * {@link PersistentDataHolder} instance.
                 * @param key the key to look up in the custom tag map
                 * @param type the type the value must have and will be casted to
                 * @param <T> the generic type of the stored primitive
                 * @param <Z> the generic type of the eventually created complex object
                 * @return the value or {#code null} if no value was mapped under the given
                 *  value
                 * @throws NullPointerException if the key to look up is null
                 * @throws NullPointerException if the type to cast the found object to is
                 *  null
                 * @throws IllegalArgumentException if the value exists under the given key,
                 *  but cannot be access using the given type
                 * @throws IllegalArgumentException if no suitable adapter will be found for
                 *  the {#link
                 *  PersistentDataType#getPrimitiveType()}
                 */
                // @ts-ignore
                get<T, Z>(key: org.bukkit.NamespacedKey, type: org.bukkit.persistence.PersistentDataType<T, Z>): Z
                /**
                 * Returns the metadata value that is stored on the
                 * {@link PersistentDataHolder} instance. If the value does not exist in the
                 * container, the default value provided is returned.
                 * @param key the key to look up in the custom tag map
                 * @param type the type the value must have and will be casted to
                 * @param defaultValue the default value to return if no value was found for
                 *  the provided key
                 * @param <T> the generic type of the stored primitive
                 * @param <Z> the generic type of the eventually created complex object
                 * @return the value or the default value if no value was mapped under the
                 *  given value
                 * @throws NullPointerException if the key to look up is null
                 * @throws NullPointerException if the type to cast the found object to is
                 *  null
                 * @throws IllegalArgumentException if the value exists under the given key,
                 *  but cannot be access using the given type
                 * @throws IllegalArgumentException if no suitable adapter will be found for
                 *  the {#link PersistentDataType#getPrimitiveType()}
                 */
                // @ts-ignore
                getOrDefault<T, Z>(key: org.bukkit.NamespacedKey, type: org.bukkit.persistence.PersistentDataType<T, Z>, defaultValue: Z): Z
                /**
                 * Removes a custom key from the {@link PersistentDataHolder} instance.
                 * @param key the key
                 * @throws NullPointerException if the provided key is null
                 */
                // @ts-ignore
                remove(key: org.bukkit.NamespacedKey): void
                /**
                 * Returns if the container instance is empty, therefore has no entries
                 * inside it.
                 * @return the boolean
                 */
                // @ts-ignore
                isEmpty(): boolean
                /**
                 * Returns the adapter context this tag container uses.
                 * @return the tag context
                 */
                // @ts-ignore
                getAdapterContext(): org.bukkit.persistence.PersistentDataAdapterContext
            }
        }
    }
}
