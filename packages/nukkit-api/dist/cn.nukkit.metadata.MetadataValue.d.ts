declare namespace cn {
    namespace nukkit {
        namespace metadata {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class MetadataValue extends java.lang.Object {
                // @ts-ignore
                constructor(owningPlugin: cn.nukkit.plugin.Plugin)
                // @ts-ignore
                readonly owningPlugin: java.lang.ref.WeakReference<cn.nukkit.plugin.Plugin>
                // @ts-ignore
                public getOwningPlugin(): cn.nukkit.plugin.Plugin
                // @ts-ignore
                public abstract value(): any
                // @ts-ignore
                public abstract invalidate(): void
            }
        }
    }
}
