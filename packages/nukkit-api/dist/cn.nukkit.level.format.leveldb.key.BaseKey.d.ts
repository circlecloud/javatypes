declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace leveldb {
                    namespace key {
                        /**
                         * author: MagicDroidX
                         * Nukkit Project
                         */
                        // @ts-ignore
                        class BaseKey extends java.lang.Object {
                            // @ts-ignore
                            constructor(chunkX: number /*int*/, chunkZ: number /*int*/, type: number /*byte*/)
                            // @ts-ignore
                            public static readonly DATA_VERSION: number /*byte*/
                            // @ts-ignore
                            public static readonly DATA_FLAGS: number /*byte*/
                            // @ts-ignore
                            public static readonly DATA_EXTRA_DATA: number /*byte*/
                            // @ts-ignore
                            public static readonly DATA_TICKS: number /*byte*/
                            // @ts-ignore
                            public static readonly DATA_ENTITIES: number /*byte*/
                            // @ts-ignore
                            public static readonly DATA_TILES: number /*byte*/
                            // @ts-ignore
                            public static readonly DATA_TERRAIN: number /*byte*/
                            // @ts-ignore
                            public toArray(): number /*byte*/[]
                        }
                    }
                }
            }
        }
    }
}
