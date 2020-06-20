declare namespace org {
    namespace bukkit {
        namespace metadata {
            /**
             * Optional base class for facilitating MetadataValue implementations.
             * <p>
             * This provides all the conversion functions for MetadataValue so that
             * writing an implementation of MetadataValue is as simple as implementing
             * value() and invalidate().
             */
            // @ts-ignore
            class MetadataValueAdapter extends java.lang.Object implements org.bukkit.metadata.MetadataValue {
                // @ts-ignore
                constructor(owningPlugin: org.bukkit.plugin.Plugin)
                // @ts-ignore
                readonly owningPlugin: java.lang.ref.WeakReference<org.bukkit.plugin.Plugin>
                // @ts-ignore
                getOwningPlugin(): org.bukkit.plugin.Plugin
                // @ts-ignore
                asInt(): int
                // @ts-ignore
                asFloat(): float
                // @ts-ignore
                asDouble(): double
                // @ts-ignore
                asLong(): long
                // @ts-ignore
                asShort(): short
                // @ts-ignore
                asByte(): byte
                // @ts-ignore
                asBoolean(): boolean
                // @ts-ignore
                asString(): java.lang.String
            }
        }
    }
}
