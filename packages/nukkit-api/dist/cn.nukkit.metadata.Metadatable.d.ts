declare namespace cn {
    namespace nukkit {
        namespace metadata {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            interface Metadatable {
                // @ts-ignore
                setMetadata(metadataKey: java.lang.String | string, newMetadataValue: cn.nukkit.metadata.MetadataValue): void
                // @ts-ignore
                getMetadata(metadataKey: java.lang.String | string): Array<cn.nukkit.metadata.MetadataValue>
                // @ts-ignore
                hasMetadata(metadataKey: java.lang.String | string): boolean
                // @ts-ignore
                removeMetadata(metadataKey: java.lang.String | string, owningPlugin: cn.nukkit.plugin.Plugin): void
            }
        }
    }
}
