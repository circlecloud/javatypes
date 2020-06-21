declare namespace org {
    namespace bukkit {
        namespace metadata {
            /**
             * A FixedMetadataValue is a special case metadata item that contains the same
             * value forever after initialization. Invalidating a FixedMetadataValue has
             * no effect.
             * <p>
             * This class extends LazyMetadataValue for historical reasons, even though it
             * overrides all the implementation methods. it is possible that in the future
             * that the inheritance hierarchy may change.
             */
            // @ts-ignore
            class FixedMetadataValue extends org.bukkit.metadata.LazyMetadataValue {
                /**
                 * Initializes a FixedMetadataValue with an Object
                 * @param owningPlugin the {#link Plugin} that created this metadata value
                 * @param value the value assigned to this metadata value
                 */
                // @ts-ignore
                constructor(owningPlugin: org.bukkit.plugin.Plugin, value: java.lang.Object | any)
                // @ts-ignore
                public invalidate(): void
                // @ts-ignore
                public value(): any
            }
        }
    }
}
