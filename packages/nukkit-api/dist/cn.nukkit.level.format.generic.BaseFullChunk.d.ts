declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace generic {
                    /**
                     * author: MagicDroidX
                     * Nukkit Project
                     */
                    // @ts-ignore
                    abstract class BaseFullChunk extends java.lang.Object implements cn.nukkit.level.format.FullChunk, cn.nukkit.level.ChunkManager {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        entities: java.util.Map<java.lang.Long | number, cn.nukkit.entity.Entity>
                        // @ts-ignore
                        tiles: java.util.Map<java.lang.Long | number, cn.nukkit.blockentity.BlockEntity>
                        // @ts-ignore
                        tileList: java.util.Map<java.lang.Integer | number, cn.nukkit.blockentity.BlockEntity>
                        /**
                         * encoded as:
                         * (x &lt;&lt; 4) | z
                         */
                        // @ts-ignore
                        biomes: number /*byte*/[]
                        // @ts-ignore
                        blocks: number /*byte*/[]
                        // @ts-ignore
                        data: number /*byte*/[]
                        // @ts-ignore
                        skyLight: number /*byte*/[]
                        // @ts-ignore
                        blockLight: number /*byte*/[]
                        // @ts-ignore
                        heightMap: number /*byte*/[]
                        // @ts-ignore
                        NBTtiles: java.util.List<cn.nukkit.nbt.tag.CompoundTag> | Array<cn.nukkit.nbt.tag.CompoundTag>
                        // @ts-ignore
                        NBTentities: java.util.List<cn.nukkit.nbt.tag.CompoundTag> | Array<cn.nukkit.nbt.tag.CompoundTag>
                        // @ts-ignore
                        extraData: java.util.Map<java.lang.Integer | number, java.lang.Integer | number>
                        // @ts-ignore
                        provider: cn.nukkit.level.format.LevelProvider
                        // @ts-ignore
                        providerClass: java.lang.Class<any>
                        // @ts-ignore
                        changes: number /*long*/
                        // @ts-ignore
                        isInit: boolean
                        // @ts-ignore
                        chunkPacket: cn.nukkit.network.protocol.BatchPacket
                        // @ts-ignore
                        public clone(): cn.nukkit.level.format.generic.BaseFullChunk
                        // @ts-ignore
                        public setChunkPacket(packet: cn.nukkit.network.protocol.BatchPacket): void
                        // @ts-ignore
                        public getChunkPacket(): cn.nukkit.network.protocol.BatchPacket
                        // @ts-ignore
                        public initChunk(): void
                        // @ts-ignore
                        public getIndex(): number /*long*/
                        // @ts-ignore
                        public getX(): number /*int*/
                        // @ts-ignore
                        public getZ(): number /*int*/
                        // @ts-ignore
                        public setPosition(x: number /*int*/, z: number /*int*/): void
                        // @ts-ignore
                        public setX(x: number /*int*/): void
                        // @ts-ignore
                        public setZ(z: number /*int*/): void
                        // @ts-ignore
                        public getProvider(): cn.nukkit.level.format.LevelProvider
                        // @ts-ignore
                        public setProvider(provider: cn.nukkit.level.format.LevelProvider): void
                        // @ts-ignore
                        public getBiomeId(x: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBiomeId(x: number /*int*/, z: number /*int*/, biomeId: number /*byte*/): void
                        // @ts-ignore
                        public getHeightMap(x: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setHeightMap(x: number /*int*/, z: number /*int*/, value: number /*int*/): void
                        // @ts-ignore
                        public recalculateHeightMap(): void
                        // @ts-ignore
                        public getBlockExtraData(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockExtraData(x: number /*int*/, y: number /*int*/, z: number /*int*/, data: number /*int*/): void
                        // @ts-ignore
                        public populateSkyLight(): void
                        // @ts-ignore
                        public getHighestBlockAt(x: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getHighestBlockAt(x: number /*int*/, z: number /*int*/, cache: boolean): number /*int*/
                        // @ts-ignore
                        public addEntity(entity: cn.nukkit.entity.Entity): void
                        // @ts-ignore
                        public removeEntity(entity: cn.nukkit.entity.Entity): void
                        // @ts-ignore
                        public addBlockEntity(blockEntity: cn.nukkit.blockentity.BlockEntity): void
                        // @ts-ignore
                        public removeBlockEntity(blockEntity: cn.nukkit.blockentity.BlockEntity): void
                        // @ts-ignore
                        public getEntities(): java.util.Map<java.lang.Long | number, cn.nukkit.entity.Entity>
                        // @ts-ignore
                        public getBlockEntities(): java.util.Map<java.lang.Long | number, cn.nukkit.blockentity.BlockEntity>
                        // @ts-ignore
                        public getBlockExtraDataArray(): java.util.Map<java.lang.Integer | number, java.lang.Integer | number>
                        // @ts-ignore
                        public getTile(x: number /*int*/, y: number /*int*/, z: number /*int*/): cn.nukkit.blockentity.BlockEntity
                        // @ts-ignore
                        public isLoaded(): boolean
                        // @ts-ignore
                        public load(): boolean
                        // @ts-ignore
                        public load(generate: boolean): boolean
                        // @ts-ignore
                        public unload(): boolean
                        // @ts-ignore
                        public unload(save: boolean): boolean
                        // @ts-ignore
                        public unload(save: boolean, safe: boolean): boolean
                        // @ts-ignore
                        public getBlockIdArray(): number /*byte*/[]
                        // @ts-ignore
                        public getBlockDataArray(): number /*byte*/[]
                        // @ts-ignore
                        public getBlockSkyLightArray(): number /*byte*/[]
                        // @ts-ignore
                        public getBlockLightArray(): number /*byte*/[]
                        // @ts-ignore
                        public getBiomeIdArray(): number /*byte*/[]
                        // @ts-ignore
                        public getHeightMapArray(): number /*byte*/[]
                        // @ts-ignore
                        public getChanges(): number /*long*/
                        // @ts-ignore
                        public hasChanged(): boolean
                        // @ts-ignore
                        public setChanged(): void
                        // @ts-ignore
                        public setChanged(changed: boolean): void
                        // @ts-ignore
                        public toFastBinary(): number /*byte*/[]
                        // @ts-ignore
                        public isLightPopulated(): boolean
                        // @ts-ignore
                        public setLightPopulated(): void
                        // @ts-ignore
                        public setLightPopulated(value: boolean): void
                        // @ts-ignore
                        public getBlockIdAt(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockFullIdAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, fullId: number /*int*/): void
                        // @ts-ignore
                        public setBlockIdAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/): void
                        // @ts-ignore
                        public setBlockAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/, data: number /*int*/): void
                        // @ts-ignore
                        public getBlockDataAt(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                        // @ts-ignore
                        public setBlockDataAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, data: number /*int*/): void
                        // @ts-ignore
                        public getChunk(chunkX: number /*int*/, chunkZ: number /*int*/): cn.nukkit.level.format.generic.BaseFullChunk
                        // @ts-ignore
                        public setChunk(chunkX: number /*int*/, chunkZ: number /*int*/): void
                        // @ts-ignore
                        public setChunk(chunkX: number /*int*/, chunkZ: number /*int*/, chunk: cn.nukkit.level.format.generic.BaseFullChunk): void
                        // @ts-ignore
                        public getSeed(): number /*long*/
                        // @ts-ignore
                        public compress(): boolean
                    }
                }
            }
        }
    }
}
