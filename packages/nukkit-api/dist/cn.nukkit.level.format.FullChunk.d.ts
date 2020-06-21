declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                interface FullChunk extends java.lang.Cloneable {
                    // @ts-ignore
                    getX(): number /*int*/
                    // @ts-ignore
                    getZ(): number /*int*/
                    // @ts-ignore
                    setPosition(x: number /*int*/, z: number /*int*/): void
                    // @ts-ignore
                    setX(x: number /*int*/): void
                    // @ts-ignore
                    setZ(z: number /*int*/): void
                    // @ts-ignore
                    getIndex(): number /*long*/
                    // @ts-ignore
                    getProvider(): cn.nukkit.level.format.LevelProvider
                    // @ts-ignore
                    setProvider(provider: cn.nukkit.level.format.LevelProvider): void
                    // @ts-ignore
                    getFullBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    getAndSetBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, block: cn.nukkit.block.Block): cn.nukkit.block.Block
                    // @ts-ignore
                    setFullBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/, fullId: number /*int*/): boolean
                    // @ts-ignore
                    setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, blockId: number /*int*/): boolean
                    // @ts-ignore
                    setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, blockId: number /*int*/, meta: number /*int*/): boolean
                    // @ts-ignore
                    getBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    setBlockId(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/): void
                    // @ts-ignore
                    getBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    setBlockData(x: number /*int*/, y: number /*int*/, z: number /*int*/, data: number /*int*/): void
                    // @ts-ignore
                    getBlockExtraData(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    setBlockExtraData(x: number /*int*/, y: number /*int*/, z: number /*int*/, data: number /*int*/): void
                    // @ts-ignore
                    getBlockSkyLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    setBlockSkyLight(x: number /*int*/, y: number /*int*/, z: number /*int*/, level: number /*int*/): void
                    // @ts-ignore
                    getBlockLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    setBlockLight(x: number /*int*/, y: number /*int*/, z: number /*int*/, level: number /*int*/): void
                    // @ts-ignore
                    getHighestBlockAt(x: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    getHighestBlockAt(x: number /*int*/, z: number /*int*/, cache: boolean): number /*int*/
                    // @ts-ignore
                    getHeightMap(x: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    setHeightMap(x: number /*int*/, z: number /*int*/, value: number /*int*/): void
                    // @ts-ignore
                    recalculateHeightMap(): void
                    // @ts-ignore
                    populateSkyLight(): void
                    // @ts-ignore
                    getBiomeId(x: number /*int*/, z: number /*int*/): number /*int*/
                    // @ts-ignore
                    setBiomeId(x: number /*int*/, z: number /*int*/, biomeId: number /*byte*/): void
                    // @ts-ignore
                    setBiomeId(x: number /*int*/, z: number /*int*/, biomeId: number /*int*/): void
                    // @ts-ignore
                    setBiome(x: number /*int*/, z: number /*int*/, biome: cn.nukkit.level.biome.Biome): void
                    // @ts-ignore
                    isLightPopulated(): boolean
                    // @ts-ignore
                    setLightPopulated(): void
                    // @ts-ignore
                    setLightPopulated(value: boolean): void
                    // @ts-ignore
                    isPopulated(): boolean
                    // @ts-ignore
                    setPopulated(): void
                    // @ts-ignore
                    setPopulated(value: boolean): void
                    // @ts-ignore
                    isGenerated(): boolean
                    // @ts-ignore
                    setGenerated(): void
                    // @ts-ignore
                    setGenerated(value: boolean): void
                    // @ts-ignore
                    addEntity(entity: cn.nukkit.entity.Entity): void
                    // @ts-ignore
                    removeEntity(entity: cn.nukkit.entity.Entity): void
                    // @ts-ignore
                    addBlockEntity(blockEntity: cn.nukkit.blockentity.BlockEntity): void
                    // @ts-ignore
                    removeBlockEntity(blockEntity: cn.nukkit.blockentity.BlockEntity): void
                    // @ts-ignore
                    getEntities(): java.util.Map<java.lang.Long | number, cn.nukkit.entity.Entity>
                    // @ts-ignore
                    getBlockEntities(): java.util.Map<java.lang.Long | number, cn.nukkit.blockentity.BlockEntity>
                    // @ts-ignore
                    getTile(x: number /*int*/, y: number /*int*/, z: number /*int*/): cn.nukkit.blockentity.BlockEntity
                    // @ts-ignore
                    isLoaded(): boolean
                    // @ts-ignore
                    load(): boolean
                    // @ts-ignore
                    load(generate: boolean): boolean
                    // @ts-ignore
                    unload(): boolean
                    // @ts-ignore
                    unload(save: boolean): boolean
                    // @ts-ignore
                    unload(save: boolean, safe: boolean): boolean
                    // @ts-ignore
                    initChunk(): void
                    // @ts-ignore
                    getBiomeIdArray(): number /*byte*/[]
                    // @ts-ignore
                    getHeightMapArray(): number /*byte*/[]
                    // @ts-ignore
                    getBlockIdArray(): number /*byte*/[]
                    // @ts-ignore
                    getBlockDataArray(): number /*byte*/[]
                    // @ts-ignore
                    getBlockExtraDataArray(): java.util.Map<java.lang.Integer | number, java.lang.Integer | number>
                    // @ts-ignore
                    getBlockSkyLightArray(): number /*byte*/[]
                    // @ts-ignore
                    getBlockLightArray(): number /*byte*/[]
                    // @ts-ignore
                    toBinary(): number /*byte*/[]
                    // @ts-ignore
                    toFastBinary(): number /*byte*/[]
                    // @ts-ignore
                    hasChanged(): boolean
                    // @ts-ignore
                    setChanged(): void
                    // @ts-ignore
                    setChanged(changed: boolean): void
                }
            }
        }
    }
}
