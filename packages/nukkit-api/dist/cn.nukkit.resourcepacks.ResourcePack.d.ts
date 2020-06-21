declare namespace cn {
    namespace nukkit {
        namespace resourcepacks {
            // @ts-ignore
            interface ResourcePack {
                // @ts-ignore
                getPackName(): string
                // @ts-ignore
                getPackId(): java.util.UUID
                // @ts-ignore
                getPackVersion(): string
                // @ts-ignore
                getPackSize(): number /*int*/
                // @ts-ignore
                getSha256(): number /*byte*/[]
                // @ts-ignore
                getPackChunk(off: number /*int*/, len: number /*int*/): number /*byte*/[]
            }
        }
    }
}
