declare namespace org {
    namespace bukkit {
        namespace metadata {
            /**
             * This interface is implemented by all objects that can provide metadata
             * about themselves.
             */
            // @ts-ignore
            interface Metadatable {
                /**
                 * Sets a metadata value in the implementing object's metadata store.
                 * @param metadataKey A unique key to identify this metadata.
                 * @param newMetadataValue The metadata value to apply.
                 * @throws IllegalArgumentException If value is null, or the owning plugin
                 *      is null
                 */
                // @ts-ignore
                setMetadata(metadataKey: java.lang.String | string, newMetadataValue: org.bukkit.metadata.MetadataValue): void
                /**
                 * Returns a list of previously set metadata values from the implementing
                 * object's metadata store.
                 * @param metadataKey the unique metadata key being sought.
                 * @return A list of values, one for each plugin that has set the
                 *      requested value.
                 */
                // @ts-ignore
                getMetadata(metadataKey: java.lang.String | string): Array<org.bukkit.metadata.MetadataValue>
                /**
                 * Tests to see whether the implementing object contains the given
                 * metadata value in its metadata store.
                 * @param metadataKey the unique metadata key being queried.
                 * @return the existence of the metadataKey within subject.
                 */
                // @ts-ignore
                hasMetadata(metadataKey: java.lang.String | string): boolean
                /**
                 * Removes the given metadata value from the implementing object's
                 * metadata store.
                 * @param metadataKey the unique metadata key identifying the metadata to
                 *      remove.
                 * @param owningPlugin This plugin's metadata value will be removed. All
                 *      other values will be left untouched.
                 * @throws IllegalArgumentException If plugin is null
                 */
                // @ts-ignore
                removeMetadata(metadataKey: java.lang.String | string, owningPlugin: org.bukkit.plugin.Plugin): void
            }
        }
    }
}
