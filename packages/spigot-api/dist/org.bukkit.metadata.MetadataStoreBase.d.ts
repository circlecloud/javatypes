declare namespace org {
    namespace bukkit {
        namespace metadata {
            // @ts-ignore
            abstract class MetadataStoreBase<T> extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Adds a metadata value to an object. Each metadata value is owned by a
                 * specific {@link Plugin}. If a plugin has already added a metadata value
                 * to an object, that value will be replaced with the value of {@code
                 * newMetadataValue}. Multiple plugins can set independent values for the
                 * same {@code metadataKey} without conflict.
                 * <p>
                 * Implementation note: I considered using a {@link
                 * java.util.concurrent.locks.ReadWriteLock} for controlling access to
                 * {@code metadataMap}, but decided that the added overhead wasn't worth
                 * the finer grained access control.
                 * <p>
                 * Bukkit is almost entirely single threaded so locking overhead shouldn't
                 * pose a problem.
                 * @param subject The object receiving the metadata.
                 * @param metadataKey A unique key to identify this metadata.
                 * @param newMetadataValue The metadata value to apply.
                 * @throws IllegalArgumentException If value is null, or the owning plugin
                 *      is null
                 * @see MetadataStore#setMetadata(Object, String, MetadataValue)
                 */
                // @ts-ignore
                public setMetadata(subject: T, metadataKey: java.lang.String | string, newMetadataValue: org.bukkit.metadata.MetadataValue): void
                /**
                 * Returns all metadata values attached to an object. If multiple
                 * have attached metadata, each will value will be included.
                 * @param subject the object being interrogated.
                 * @param metadataKey the unique metadata key being sought.
                 * @return A list of values, one for each plugin that has set the
                 *      requested value.
                 * @see MetadataStore#getMetadata(Object, String)
                 */
                // @ts-ignore
                public getMetadata(subject: T, metadataKey: java.lang.String | string): Array<org.bukkit.metadata.MetadataValue>
                /**
                 * Tests to see if a metadata attribute has been set on an object.
                 * @param subject the object upon which the has-metadata test is
                 *      performed.
                 * @param metadataKey the unique metadata key being queried.
                 * @return the existence of the metadataKey within subject.
                 */
                // @ts-ignore
                public hasMetadata(subject: T, metadataKey: java.lang.String | string): boolean
                /**
                 * Removes a metadata item owned by a plugin from a subject.
                 * @param subject the object to remove the metadata from.
                 * @param metadataKey the unique metadata key identifying the metadata to
                 *      remove.
                 * @param owningPlugin the plugin attempting to remove a metadata item.
                 * @throws IllegalArgumentException If plugin is null
                 * @see MetadataStore#removeMetadata(Object, String,
                 *      org.bukkit.plugin.Plugin)
                 */
                // @ts-ignore
                public removeMetadata(subject: T, metadataKey: java.lang.String | string, owningPlugin: org.bukkit.plugin.Plugin): void
                /**
                 * Invalidates all metadata in the metadata store that originates from the
                 * given plugin. Doing this will force each invalidated metadata item to
                 * be recalculated the next time it is accessed.
                 * @param owningPlugin the plugin requesting the invalidation.
                 * @throws IllegalArgumentException If plugin is null
                 * @see MetadataStore#invalidateAll(org.bukkit.plugin.Plugin)
                 */
                // @ts-ignore
                public invalidateAll(owningPlugin: org.bukkit.plugin.Plugin): void
                /**
                 * Creates a unique name for the object receiving metadata by combining
                 * unique data from the subject with a metadataKey.
                 * <p>
                 * The name created must be globally unique for the given object and any
                 * two equivalent objects must generate the same unique name. For example,
                 * two Player objects must generate the same string if they represent the
                 * same player, even if the objects would fail a reference equality test.
                 * @param subject The object for which this key is being generated.
                 * @param metadataKey The name identifying the metadata value.
                 * @return a unique metadata key for the given subject.
                 */
                // @ts-ignore
                abstract disambiguate(subject: T, metadataKey: java.lang.String | string): string
            }
        }
    }
}
