declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace anvil {
                    namespace palette {
                        /**
                         * @author https://github.com/boy0001/
                         */
                        // @ts-ignore
                        class BitArray256 extends java.lang.Object {
                            // @ts-ignore
                            constructor(bitsPerEntry: number /*int*/)
                            // @ts-ignore
                            constructor(other: cn.nukkit.level.format.anvil.palette.BitArray256)
                            // @ts-ignore
                            readonly data: number /*long*/[]
                            // @ts-ignore
                            public setAt(index: number /*int*/, value: number /*int*/): void
                            // @ts-ignore
                            public getAt(index: number /*int*/): number /*int*/
                            // @ts-ignore
                            public fromRaw(arr: number /*int*/[]): void
                            // @ts-ignore
                            public grow(newBitsPerEntry: number /*int*/): cn.nukkit.level.format.anvil.palette.BitArray256
                            // @ts-ignore
                            public growSlow(bitsPerEntry: number /*int*/): cn.nukkit.level.format.anvil.palette.BitArray256
                            // @ts-ignore
                            public toRaw(buffer: number /*int*/[]): number /*int*/[]
                            // @ts-ignore
                            public toRaw(): number /*int*/[]
                            // @ts-ignore
                            public clone(): cn.nukkit.level.format.anvil.palette.BitArray256
                        }
                    }
                }
            }
        }
    }
}
