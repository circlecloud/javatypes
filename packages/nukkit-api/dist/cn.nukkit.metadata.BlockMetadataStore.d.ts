declare namespace cn {
    namespace nukkit {
        namespace metadata {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BlockMetadataStore extends cn.nukkit.metadata.MetadataStore {
                // @ts-ignore
                constructor(owningLevel: cn.nukkit.level.Level)
                // @ts-ignore
                disambiguate(block: cn.nukkit.metadata.Metadatable, metadataKey: java.lang.String | string): string
                // @ts-ignore
                public getMetadata(block: java.lang.Object | any, metadataKey: java.lang.String | string): Array<cn.nukkit.metadata.MetadataValue>
                // @ts-ignore
                public hasMetadata(block: java.lang.Object | any, metadataKey: java.lang.String | string): boolean
                // @ts-ignore
                public removeMetadata(block: java.lang.Object | any, metadataKey: java.lang.String | string, owningPlugin: cn.nukkit.plugin.Plugin): void
                // @ts-ignore
                public setMetadata(block: java.lang.Object | any, metadataKey: java.lang.String | string, newMetadataValue: cn.nukkit.metadata.MetadataValue): void
            }
        }
    }
}
