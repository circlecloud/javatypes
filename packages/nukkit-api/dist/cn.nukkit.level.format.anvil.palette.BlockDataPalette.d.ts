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
                        class BlockDataPalette extends java.lang.Object implements java.lang.Cloneable {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            constructor(rawData: string[])
                            // @ts-ignore
                            public getRaw(): string[]
                            // @ts-ignore
                            public getBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                            // @ts-ignore
                            public getBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                            // @ts-ignore
                            public setBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/): void
                            // @ts-ignore
                            public setBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/, data: number /*int*/): void
                            // @ts-ignore
                            public getFullBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                            // @ts-ignore
                            public setFullBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, value: number /*int*/): void
                            // @ts-ignore
                            public getAndSetFullBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, value: number /*int*/): number /*int*/
                            // @ts-ignore
                            public compress(): boolean
                            // @ts-ignore
                            public clone(): cn.nukkit.level.format.anvil.palette.BlockDataPalette
                        }
                    }
                }
            }
        }
    }
}
