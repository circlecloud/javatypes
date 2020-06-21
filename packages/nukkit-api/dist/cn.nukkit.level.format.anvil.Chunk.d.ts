declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace anvil {
                    /**
                     * author: MagicDroidX
                     * Nukkit Project
                     */
                    // @ts-ignore
                    class Chunk extends cn.nukkit.level.format.generic.BaseChunk {
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider)
                        // @ts-ignore
                        constructor(providerClass: java.lang.Class<any>)
                        // @ts-ignore
                        constructor(providerClass: java.lang.Class<any>, nbt: cn.nukkit.nbt.tag.CompoundTag)
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider, nbt: cn.nukkit.nbt.tag.CompoundTag)
                        // @ts-ignore
                        inhabitedTime: number /*long*/
                        // @ts-ignore
                        terrainPopulated: boolean
                        // @ts-ignore
                        terrainGenerated: boolean
                        // @ts-ignore
                        public clone(): cn.nukkit.level.format.anvil.Chunk
                        // @ts-ignore
                        public isPopulated(): boolean
                        // @ts-ignore
                        public setPopulated(): void
                        // @ts-ignore
                        public setPopulated(value: boolean): void
                        // @ts-ignore
                        public isGenerated(): boolean
                        // @ts-ignore
                        public setGenerated(): void
                        // @ts-ignore
                        public setGenerated(value: boolean): void
                        // @ts-ignore
                        public getNBT(): cn.nukkit.nbt.tag.CompoundTag
                        // @ts-ignore
                        public static fromBinary(data: number /*byte*/[]): cn.nukkit.level.format.anvil.Chunk
                        // @ts-ignore
                        public static fromBinary(data: number /*byte*/[], provider: cn.nukkit.level.format.LevelProvider): cn.nukkit.level.format.anvil.Chunk
                        // @ts-ignore
                        public static fromFastBinary(data: number /*byte*/[]): cn.nukkit.level.format.anvil.Chunk
                        // @ts-ignore
                        public static fromFastBinary(data: number /*byte*/[], provider: cn.nukkit.level.format.LevelProvider): cn.nukkit.level.format.anvil.Chunk
                        // @ts-ignore
                        public toFastBinary(): number /*byte*/[]
                        // @ts-ignore
                        public toBinary(): number /*byte*/[]
                        // @ts-ignore
                        public getBlockSkyLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getBlockLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public static getEmptyChunk(chunkX: number /*int*/, chunkZ: number /*int*/): cn.nukkit.level.format.anvil.Chunk
                        // @ts-ignore
                        public static getEmptyChunk(chunkX: number /*int*/, chunkZ: number /*int*/, provider: cn.nukkit.level.format.LevelProvider): cn.nukkit.level.format.anvil.Chunk
                        // @ts-ignore
                        public compress(): boolean
                    }
                }
            }
        }
    }
}
