declare namespace org {
    namespace bukkit {
        namespace metadata {
            /**
             * The LazyMetadataValue class implements a type of metadata that is not
             * computed until another plugin asks for it.
             * <p>
             * By making metadata values lazy, no computation is done by the providing
             * plugin until absolutely necessary (if ever). Additionally,
             * LazyMetadataValue objects cache their values internally unless overridden
             * by a {@link CacheStrategy} or invalidated at the individual or plugin
             * level. Once invalidated, the LazyMetadataValue will recompute its value
             * when asked.
             */
            // @ts-ignore
            class LazyMetadataValue extends org.bukkit.metadata.MetadataValueAdapter {
                /**
                 * Initialized a LazyMetadataValue object with the default
                 * CACHE_AFTER_FIRST_EVAL cache strategy.
                 * @param owningPlugin the {#link Plugin} that created this metadata
                 *      value.
                 * @param lazyValue the lazy value assigned to this metadata value.
                 */
                // @ts-ignore
                constructor(owningPlugin: org.bukkit.plugin.Plugin, lazyValue: java.util.concurrent.Callable<java.lang.Object>)
                /**
                 * Initializes a LazyMetadataValue object with a specific cache strategy.
                 * @param owningPlugin the {#link Plugin} that created this metadata
                 *      value.
                 * @param cacheStrategy determines the rules for caching this metadata
                 *      value.
                 * @param lazyValue the lazy value assigned to this metadata value.
                 */
                // @ts-ignore
                constructor(owningPlugin: org.bukkit.plugin.Plugin, cacheStrategy: org.bukkit.metadata.LazyMetadataValue.CacheStrategy, lazyValue: java.util.concurrent.Callable<java.lang.Object>)
                /**
                 * Protected special constructor used by FixedMetadataValue to bypass
                 * standard setup.
                 * @param owningPlugin the owning plugin
                 */
                // @ts-ignore
                constructor(owningPlugin: org.bukkit.plugin.Plugin)
                // @ts-ignore
                value(): java.lang.Object
                // @ts-ignore
                invalidate(): void
            }
        }
    }
}
