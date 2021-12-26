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
            abstract class MetadataValueAdapter extends java.lang.Object implements org.bukkit.metadata.MetadataValue {
                // @ts-ignore
                constructor(owningPlugin: org.bukkit.plugin.Plugin)
                // @ts-ignore
                readonly owningPlugin: java.lang.ref.WeakReference<org.bukkit.plugin.Plugin>
                // @ts-ignore
                public getOwningPlugin(): org.bukkit.plugin.Plugin
                // @ts-ignore
                public asInt(): number /*int*/
                // @ts-ignore
                public asFloat(): number /*float*/
                // @ts-ignore
                public asDouble(): number /*double*/
                // @ts-ignore
                public asLong(): number /*long*/
                // @ts-ignore
                public asShort(): number /*short*/
                // @ts-ignore
                public asByte(): number /*byte*/
                // @ts-ignore
                public asBoolean(): boolean
                // @ts-ignore
                public asString(): string
            }
        }
    }
}
