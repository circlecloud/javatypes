declare namespace org {
    namespace bukkit {
        namespace metadata {
            // @ts-ignore
            interface MetadataValue {
                /**
                 * Fetches the value of this metadata item.
                 * @return the metadata value.
                 */
                // @ts-ignore
                value(): java.lang.Object
                /**
                 * Attempts to convert the value of this metadata item into an int.
                 * @return the value as an int.
                 */
                // @ts-ignore
                asInt(): int
                /**
                 * Attempts to convert the value of this metadata item into a float.
                 * @return the value as a float.
                 */
                // @ts-ignore
                asFloat(): float
                /**
                 * Attempts to convert the value of this metadata item into a double.
                 * @return the value as a double.
                 */
                // @ts-ignore
                asDouble(): double
                /**
                 * Attempts to convert the value of this metadata item into a long.
                 * @return the value as a long.
                 */
                // @ts-ignore
                asLong(): long
                /**
                 * Attempts to convert the value of this metadata item into a short.
                 * @return the value as a short.
                 */
                // @ts-ignore
                asShort(): short
                /**
                 * Attempts to convert the value of this metadata item into a byte.
                 * @return the value as a byte.
                 */
                // @ts-ignore
                asByte(): byte
                /**
                 * Attempts to convert the value of this metadata item into a boolean.
                 * @return the value as a boolean.
                 */
                // @ts-ignore
                asBoolean(): boolean
                /**
                 * Attempts to convert the value of this metadata item into a string.
                 * @return the value as a string.
                 */
                // @ts-ignore
                asString(): java.lang.String
                /**
                 * Returns the {@link Plugin} that created this metadata item.
                 * @return the plugin that owns this metadata value. Could be null if the plugin was already unloaded.
                 */
                // @ts-ignore
                getOwningPlugin(): org.bukkit.plugin.Plugin
                /**
                 * Invalidates this metadata item, forcing it to recompute when next
                 * accessed.
                 */
                // @ts-ignore
                invalidate(): void
            }
        }
    }
}
