declare namespace org {
    namespace bukkit {
        namespace metadata {
            namespace LazyMetadataValue {
                /**
                 * Describes possible caching strategies for metadata.
                 */
                // @ts-ignore
                class CacheStrategy extends java.lang.Enum<org.bukkit.metadata.LazyMetadataValue.CacheStrategy> {
                    /**
                     * Once the metadata value has been evaluated, do not re-evaluate the
                     * value until it is manually invalidated.
                     */
                    // @ts-ignore
                    readonly CACHE_AFTER_FIRST_EVAL: org.bukkit.metadata.LazyMetadataValue.CacheStrategy
                    /**
                     * Re-evaluate the metadata item every time it is requested
                     */
                    // @ts-ignore
                    readonly NEVER_CACHE: org.bukkit.metadata.LazyMetadataValue.CacheStrategy
                    /**
                     * Once the metadata value has been evaluated, do not re-evaluate the
                     * value in spite of manual invalidation.
                     */
                    // @ts-ignore
                    readonly CACHE_ETERNALLY: org.bukkit.metadata.LazyMetadataValue.CacheStrategy
                    // @ts-ignore
                    values(): org.bukkit.metadata.LazyMetadataValue.CacheStrategy[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.metadata.LazyMetadataValue.CacheStrategy
                }
            }
        }
    }
}
