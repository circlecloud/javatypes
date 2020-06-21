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
                        class BitArray4096 extends java.lang.Object {
                            // @ts-ignore
                            constructor(bitsPerEntry: number /*int*/)
                            // @ts-ignore
                            public setAt(index: number /*int*/, value: number /*int*/): void
                            // @ts-ignore
                            public getAt(index: number /*int*/): number /*int*/
                            // @ts-ignore
                            public fromRawSlow(arr: string[]): void
                            // @ts-ignore
                            public fromRaw(arr: string[]): void
                            // @ts-ignore
                            public grow(newBitsPerEntry: number /*int*/): cn.nukkit.level.format.anvil.palette.BitArray4096
                            // @ts-ignore
                            public growSlow(bitsPerEntry: number /*int*/): cn.nukkit.level.format.anvil.palette.BitArray4096
                            // @ts-ignore
                            public toRawSlow(): string[]
                            // @ts-ignore
                            public toRaw(): string[]
                            // @ts-ignore
                            toRaw(buffer: string[]): string[]
                        }
                    }
                }
            }
        }
    }
}
