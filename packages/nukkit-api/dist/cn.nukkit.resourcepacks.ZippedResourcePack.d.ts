declare namespace cn {
    namespace nukkit {
        namespace resourcepacks {
            // @ts-ignore
            class ZippedResourcePack extends cn.nukkit.resourcepacks.AbstractResourcePack {
                // @ts-ignore
                constructor(file: java.io.File)
                // @ts-ignore
                public getPackSize(): number /*int*/
                // @ts-ignore
                public getSha256(): number /*byte*/[]
                // @ts-ignore
                public getPackChunk(off: number /*int*/, len: number /*int*/): number /*byte*/[]
            }
        }
    }
}
