declare namespace org {
    namespace bukkit {
        namespace metadata {
            // @ts-ignore
            interface MetadataStore<T> {
                /**
                 * Adds a metadata value to an object.
                 * @param subject The object receiving the metadata.
                 * @param metadataKey A unique key to identify this metadata.
                 * @param newMetadataValue The metadata value to apply.
                 * @throws IllegalArgumentException If value is null, or the owning plugin
                 *      is null
                 */
                // @ts-ignore
                setMetadata(subject: T, metadataKey: java.lang.String | string, newMetadataValue: org.bukkit.metadata.MetadataValue): void
                /**
                 * Returns all metadata values attached to an object. If multiple plugins
                 * have attached metadata, each will value will be included.
                 * @param subject the object being interrogated.
                 * @param metadataKey the unique metadata key being sought.
                 * @return A list of values, one for each plugin that has set the
                 *      requested value.
                 */
                // @ts-ignore
                getMetadata(subject: T, metadataKey: java.lang.String | string): Array<org.bukkit.metadata.MetadataValue>
                /**
                 * Tests to see if a metadata attribute has been set on an object.
                 * @param subject the object upon which the has-metadata test is
                 *      performed.
                 * @param metadataKey the unique metadata key being queried.
                 * @return the existence of the metadataKey within subject.
                 */
                // @ts-ignore
                hasMetadata(subject: T, metadataKey: java.lang.String | string): boolean
                /**
                 * Removes a metadata item owned by a plugin from a subject.
                 * @param subject the object to remove the metadata from.
                 * @param metadataKey the unique metadata key identifying the metadata to
                 *      remove.
                 * @param owningPlugin the plugin attempting to remove a metadata item.
                 * @throws IllegalArgumentException If plugin is null
                 */
                // @ts-ignore
                removeMetadata(subject: T, metadataKey: java.lang.String | string, owningPlugin: org.bukkit.plugin.Plugin): void
                /**
                 * Invalidates all metadata in the metadata store that originates from the
                 * given plugin. Doing this will force each invalidated metadata item to
                 * be recalculated the next time it is accessed.
                 * @param owningPlugin the plugin requesting the invalidation.
                 * @throws IllegalArgumentException If plugin is null
                 */
                // @ts-ignore
                invalidateAll(owningPlugin: org.bukkit.plugin.Plugin): void
            }
        }
    }
}
