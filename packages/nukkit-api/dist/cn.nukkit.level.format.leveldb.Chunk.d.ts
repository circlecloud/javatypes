declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace leveldb {
                    /**
                     * author: MagicDroidX
                     * Nukkit Project
                     */
                    // @ts-ignore
                    class Chunk extends cn.nukkit.level.format.generic.BaseFullChunk {
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider, chunkX: number /*int*/, chunkZ: number /*int*/, terrain: number /*byte*/[])
                        // @ts-ignore
                        constructor(providerClass: java.lang.Class<any>, chunkX: number /*int*/, chunkZ: number /*int*/, terrain: number /*byte*/[])
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider, chunkX: number /*int*/, chunkZ: number /*int*/, terrain: number /*byte*/[], entityData: java.util.List<cn.nukkit.nbt.tag.CompoundTag> | Array<cn.nukkit.nbt.tag.CompoundTag>)
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider, chunkX: number /*int*/, chunkZ: number /*int*/, terrain: number /*byte*/[], entityData: java.util.List<cn.nukkit.nbt.tag.CompoundTag> | Array<cn.nukkit.nbt.tag.CompoundTag>, tileData: java.util.List<cn.nukkit.nbt.tag.CompoundTag> | Array<cn.nukkit.nbt.tag.CompoundTag>)
                        // @ts-ignore
                        constructor(level: cn.nukkit.level.format.LevelProvider, chunkX: number /*int*/, chunkZ: number /*int*/, terrain: number /*byte*/[], entityData: java.util.List<cn.nukkit.nbt.tag.CompoundTag> | Array<cn.nukkit.nbt.tag.CompoundTag>, tileData: java.util.List<cn.nukkit.nbt.tag.CompoundTag> | Array<cn.nukkit.nbt.tag.CompoundTag>, extraData: java.util.Map<java.lang.Integer | number, java.lang.Integer | number>)
                        // @ts-ignore
                        public static readonly DATA_LENGTH: number /*int*/
                        // @ts-ignore
                        public getBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/): void
                        // @ts-ignore
                        public getBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/, data: number /*int*/): void
                        // @ts-ignore
                        public getFullBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getAndSetBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, block: cn.nukkit.block.Block): cn.nukkit.block.Block
                        // @ts-ignore
                        public setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, blockId: number /*int*/): boolean
                        // @ts-ignore
                        public setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, blockId: number /*int*/, meta: number /*int*/): boolean
                        // @ts-ignore
                        public getBlockSkyLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockSkyLight(x: number /*int*/, y: number /*int*/, z: number /*int*/, level: number /*int*/): void
                        // @ts-ignore
                        public getBlockLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockLight(x: number /*int*/, y: number /*int*/, z: number /*int*/, level: number /*int*/): void
                        // @ts-ignore
                        public isLightPopulated(): boolean
                        // @ts-ignore
                        public setLightPopulated(): void
                        // @ts-ignore
                        public setLightPopulated(value: boolean): void
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
                        public static fromBinary(data: number /*byte*/[]): cn.nukkit.level.format.leveldb.Chunk
                        // @ts-ignore
                        public static fromBinary(data: number /*byte*/[], provider: cn.nukkit.level.format.LevelProvider): cn.nukkit.level.format.leveldb.Chunk
                        // @ts-ignore
                        public static fromFastBinary(data: number /*byte*/[]): cn.nukkit.level.format.leveldb.Chunk
                        // @ts-ignore
                        public static fromFastBinary(data: number /*byte*/[], provider: cn.nukkit.level.format.LevelProvider): cn.nukkit.level.format.leveldb.Chunk
                        // @ts-ignore
                        public toFastBinary(): number /*byte*/[]
                        // @ts-ignore
                        public toBinary(): number /*byte*/[]
                        // @ts-ignore
                        public toBinary(saveExtra: boolean): number /*byte*/[]
                        // @ts-ignore
                        public static getEmptyChunk(chunkX: number /*int*/, chunkZ: number /*int*/): cn.nukkit.level.format.leveldb.Chunk
                        // @ts-ignore
                        public static getEmptyChunk(chunkX: number /*int*/, chunkZ: number /*int*/, provider: cn.nukkit.level.format.LevelProvider): cn.nukkit.level.format.leveldb.Chunk
                    }
                }
            }
        }
    }
}
