declare namespace cn {
    namespace nukkit {
        namespace metadata {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class MetadataStore extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public setMetadata(subject: java.lang.Object | any, metadataKey: java.lang.String | string, newMetadataValue: cn.nukkit.metadata.MetadataValue): void
                // @ts-ignore
                public getMetadata(subject: java.lang.Object | any, metadataKey: java.lang.String | string): Array<cn.nukkit.metadata.MetadataValue>
                // @ts-ignore
                public hasMetadata(subject: java.lang.Object | any, metadataKey: java.lang.String | string): boolean
                // @ts-ignore
                public removeMetadata(subject: java.lang.Object | any, metadataKey: java.lang.String | string, owningPlugin: cn.nukkit.plugin.Plugin): void
                // @ts-ignore
                public invalidateAll(owningPlugin: cn.nukkit.plugin.Plugin): void
                // @ts-ignore
                abstract disambiguate(subject: cn.nukkit.metadata.Metadatable, metadataKey: java.lang.String | string): string
            }
        }
    }
}
