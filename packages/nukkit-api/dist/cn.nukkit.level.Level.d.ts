declare namespace cn {
    namespace nukkit {
        namespace level {
            /**
             * author: MagicDroidX Nukkit Project
             */
            // @ts-ignore
            class Level extends java.lang.Object implements cn.nukkit.level.ChunkManager, cn.nukkit.metadata.Metadatable {
                // @ts-ignore
                constructor(server: cn.nukkit.Server, name: java.lang.String | string, path: java.lang.String | string, provider: java.lang.Class<any>)
                // @ts-ignore
                public static COMPRESSION_LEVEL: number /*int*/
                // @ts-ignore
                public static readonly BLOCK_UPDATE_NORMAL: number /*int*/
                // @ts-ignore
                public static readonly BLOCK_UPDATE_RANDOM: number /*int*/
                // @ts-ignore
                public static readonly BLOCK_UPDATE_SCHEDULED: number /*int*/
                // @ts-ignore
                public static readonly BLOCK_UPDATE_WEAK: number /*int*/
                // @ts-ignore
                public static readonly BLOCK_UPDATE_TOUCH: number /*int*/
                // @ts-ignore
                public static readonly BLOCK_UPDATE_REDSTONE: number /*int*/
                // @ts-ignore
                public static readonly BLOCK_UPDATE_TICK: number /*int*/
                // @ts-ignore
                public static readonly TIME_DAY: number /*int*/
                // @ts-ignore
                public static readonly TIME_NOON: number /*int*/
                // @ts-ignore
                public static readonly TIME_SUNSET: number /*int*/
                // @ts-ignore
                public static readonly TIME_NIGHT: number /*int*/
                // @ts-ignore
                public static readonly TIME_MIDNIGHT: number /*int*/
                // @ts-ignore
                public static readonly TIME_SUNRISE: number /*int*/
                // @ts-ignore
                public static readonly TIME_FULL: number /*int*/
                // @ts-ignore
                public static readonly DIMENSION_OVERWORLD: number /*int*/
                // @ts-ignore
                public static readonly DIMENSION_NETHER: number /*int*/
                // @ts-ignore
                public static readonly DIMENSION_THE_END: number /*int*/
                // @ts-ignore
                public static readonly MAX_BLOCK_CACHE: number /*int*/
                // @ts-ignore
                public readonly updateEntities: object
                // @ts-ignore
                public skyLightSubtracted: number /*float*/
                // @ts-ignore
                public sleepTicks: number /*int*/
                // @ts-ignore
                public timings: cn.nukkit.timings.LevelTimings
                // @ts-ignore
                public tickRateTime: number /*int*/
                // @ts-ignore
                public tickRateCounter: number /*int*/
                // @ts-ignore
                public gameRules: cn.nukkit.level.GameRules
                // @ts-ignore
                public static chunkHash(x: number /*int*/, z: number /*int*/): number /*long*/
                // @ts-ignore
                public static blockHash(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*long*/
                // @ts-ignore
                public static localBlockHash(x: number /*double*/, y: number /*double*/, z: number /*double*/): string
                // @ts-ignore
                public static getBlockXYZ(chunkHash: number /*long*/, blockHash: string): cn.nukkit.math.Vector3
                // @ts-ignore
                public static chunkBlockHash(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                // @ts-ignore
                public static getHashX(hash: number /*long*/): number /*int*/
                // @ts-ignore
                public static getHashZ(hash: number /*long*/): number /*int*/
                // @ts-ignore
                public static getBlockXYZ(hash: cn.nukkit.math.BlockVector3): cn.nukkit.math.Vector3
                // @ts-ignore
                public static getChunkXZ(hash: number /*long*/): cn.nukkit.level.format.Chunk.Entry
                // @ts-ignore
                public static generateChunkLoaderId(loader: cn.nukkit.level.ChunkLoader): number /*int*/
                // @ts-ignore
                public getTickRate(): number /*int*/
                // @ts-ignore
                public getTickRateTime(): number /*int*/
                // @ts-ignore
                public setTickRate(tickRate: number /*int*/): void
                // @ts-ignore
                public initLevel(): void
                // @ts-ignore
                public getGenerator(): cn.nukkit.level.generator.Generator
                // @ts-ignore
                public getBlockMetadata(): cn.nukkit.metadata.BlockMetadataStore
                // @ts-ignore
                public getServer(): cn.nukkit.Server
                // @ts-ignore
                public getProvider(): cn.nukkit.level.format.LevelProvider
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public close(): void
                // @ts-ignore
                public addSound(pos: cn.nukkit.math.Vector3, sound: cn.nukkit.level.Sound): void
                // @ts-ignore
                public addSound(pos: cn.nukkit.math.Vector3, sound: cn.nukkit.level.Sound, volume: number /*float*/, pitch: number /*float*/): void
                // @ts-ignore
                public addSound(pos: cn.nukkit.math.Vector3, sound: cn.nukkit.level.Sound, volume: number /*float*/, pitch: number /*float*/, players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
                // @ts-ignore
                public addSound(pos: cn.nukkit.math.Vector3, sound: cn.nukkit.level.Sound, volume: number /*float*/, pitch: number /*float*/, ...players: cn.nukkit.Player[]): void
                // @ts-ignore
                public addLevelEvent(pos: cn.nukkit.math.Vector3, event: number /*int*/): void
                // @ts-ignore
                public addLevelSoundEvent(pos: cn.nukkit.math.Vector3, type: number /*int*/, data: number /*int*/, entityType: number /*int*/): void
                // @ts-ignore
                public addLevelSoundEvent(pos: cn.nukkit.math.Vector3, type: number /*int*/, data: number /*int*/, entityType: number /*int*/, isBaby: boolean, isGlobal: boolean): void
                // @ts-ignore
                public addLevelSoundEvent(pos: cn.nukkit.math.Vector3, type: number /*int*/): void
                /**
                 * Broadcasts sound to players
                 * @param pos  position where sound should be played
                 * @param type ID of the sound from {#link cn.nukkit.network.protocol.LevelSoundEventPacket}
                 * @param data generic data that can affect sound
                 */
                // @ts-ignore
                public addLevelSoundEvent(pos: cn.nukkit.math.Vector3, type: number /*int*/, data: number /*int*/): void
                // @ts-ignore
                public addLevelSoundEvent(pos: cn.nukkit.math.Vector3, type: number /*int*/, data: number /*int*/, identifier: java.lang.String | string, isBaby: boolean, isGlobal: boolean): void
                // @ts-ignore
                public addParticle(particle: cn.nukkit.level.particle.Particle): void
                // @ts-ignore
                public addParticle(particle: cn.nukkit.level.particle.Particle, player: cn.nukkit.Player): void
                // @ts-ignore
                public addParticle(particle: cn.nukkit.level.particle.Particle, players: cn.nukkit.Player[]): void
                // @ts-ignore
                public addParticle(particle: cn.nukkit.level.particle.Particle, players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
                // @ts-ignore
                public addParticleEffect(pos: cn.nukkit.math.Vector3, particleEffect: cn.nukkit.level.ParticleEffect): void
                // @ts-ignore
                public addParticleEffect(pos: cn.nukkit.math.Vector3, particleEffect: cn.nukkit.level.ParticleEffect, uniqueEntityId: number /*long*/): void
                // @ts-ignore
                public addParticleEffect(pos: cn.nukkit.math.Vector3, particleEffect: cn.nukkit.level.ParticleEffect, uniqueEntityId: number /*long*/, dimensionId: number /*int*/): void
                // @ts-ignore
                public addParticleEffect(pos: cn.nukkit.math.Vector3, particleEffect: cn.nukkit.level.ParticleEffect, uniqueEntityId: number /*long*/, dimensionId: number /*int*/, players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
                // @ts-ignore
                public addParticleEffect(pos: cn.nukkit.math.Vector3, particleEffect: cn.nukkit.level.ParticleEffect, uniqueEntityId: number /*long*/, dimensionId: number /*int*/, ...players: cn.nukkit.Player[]): void
                // @ts-ignore
                public addParticleEffect(pos: cn.nukkit.math.Vector3f, identifier: java.lang.String | string, uniqueEntityId: number /*long*/, dimensionId: number /*int*/, ...players: cn.nukkit.Player[]): void
                // @ts-ignore
                public getAutoSave(): boolean
                // @ts-ignore
                public setAutoSave(autoSave: boolean): void
                // @ts-ignore
                public unload(): boolean
                // @ts-ignore
                public unload(force: boolean): boolean
                // @ts-ignore
                public getChunkPlayers(chunkX: number /*int*/, chunkZ: number /*int*/): java.util.Map<java.lang.Integer | number, cn.nukkit.Player>
                // @ts-ignore
                public getChunkLoaders(chunkX: number /*int*/, chunkZ: number /*int*/): cn.nukkit.level.ChunkLoader[]
                // @ts-ignore
                public addChunkPacket(chunkX: number /*int*/, chunkZ: number /*int*/, packet: cn.nukkit.network.protocol.DataPacket): void
                // @ts-ignore
                public registerChunkLoader(loader: cn.nukkit.level.ChunkLoader, chunkX: number /*int*/, chunkZ: number /*int*/): void
                // @ts-ignore
                public registerChunkLoader(loader: cn.nukkit.level.ChunkLoader, chunkX: number /*int*/, chunkZ: number /*int*/, autoLoad: boolean): void
                // @ts-ignore
                public unregisterChunkLoader(loader: cn.nukkit.level.ChunkLoader, chunkX: number /*int*/, chunkZ: number /*int*/): void
                // @ts-ignore
                public checkTime(): void
                // @ts-ignore
                public sendTime(...players: cn.nukkit.Player[]): void
                // @ts-ignore
                public sendTime(): void
                // @ts-ignore
                public getGameRules(): cn.nukkit.level.GameRules
                // @ts-ignore
                public doTick(currentTick: number /*int*/): void
                // @ts-ignore
                public adjustPosToNearbyEntity(pos: cn.nukkit.math.Vector3): cn.nukkit.math.Vector3
                // @ts-ignore
                public checkSleep(): void
                // @ts-ignore
                public sendBlockExtraData(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/, data: number /*int*/): void
                // @ts-ignore
                public sendBlockExtraData(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/, data: number /*int*/, players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
                // @ts-ignore
                public sendBlockExtraData(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/, data: number /*int*/, players: cn.nukkit.Player[]): void
                // @ts-ignore
                public sendBlocks(target: cn.nukkit.Player[], blocks: cn.nukkit.math.Vector3[]): void
                // @ts-ignore
                public sendBlocks(target: cn.nukkit.Player[], blocks: cn.nukkit.math.Vector3[], flags: number /*int*/): void
                // @ts-ignore
                public sendBlocks(target: cn.nukkit.Player[], blocks: cn.nukkit.math.Vector3[], flags: number /*int*/, optimizeRebuilds: boolean): void
                // @ts-ignore
                public sendBlocks(target: cn.nukkit.Player[], blocks: cn.nukkit.math.Vector3[], flags: number /*int*/, dataLayer: number /*int*/): void
                // @ts-ignore
                public sendBlocks(target: cn.nukkit.Player[], blocks: cn.nukkit.math.Vector3[], flags: number /*int*/, dataLayer: number /*int*/, optimizeRebuilds: boolean): void
                // @ts-ignore
                public save(): boolean
                // @ts-ignore
                public save(force: boolean): boolean
                // @ts-ignore
                public saveChunks(): void
                // @ts-ignore
                public updateAroundRedstone(pos: cn.nukkit.math.Vector3, face: cn.nukkit.math.BlockFace): void
                // @ts-ignore
                public updateComparatorOutputLevel(v: cn.nukkit.math.Vector3): void
                // @ts-ignore
                public updateAround(pos: cn.nukkit.math.Vector3): void
                // @ts-ignore
                public updateAround(x: number /*int*/, y: number /*int*/, z: number /*int*/): void
                // @ts-ignore
                public scheduleUpdate(pos: cn.nukkit.block.Block, delay: number /*int*/): void
                // @ts-ignore
                public scheduleUpdate(block: cn.nukkit.block.Block, pos: cn.nukkit.math.Vector3, delay: number /*int*/): void
                // @ts-ignore
                public scheduleUpdate(block: cn.nukkit.block.Block, pos: cn.nukkit.math.Vector3, delay: number /*int*/, priority: number /*int*/): void
                // @ts-ignore
                public scheduleUpdate(block: cn.nukkit.block.Block, pos: cn.nukkit.math.Vector3, delay: number /*int*/, priority: number /*int*/, checkArea: boolean): void
                // @ts-ignore
                public cancelSheduledUpdate(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block): boolean
                // @ts-ignore
                public isUpdateScheduled(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block): boolean
                // @ts-ignore
                public isBlockTickPending(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block): boolean
                // @ts-ignore
                public getPendingBlockUpdates(chunk: cn.nukkit.level.format.FullChunk): Array<cn.nukkit.utils.BlockUpdateEntry>
                // @ts-ignore
                public getPendingBlockUpdates(boundingBox: cn.nukkit.math.AxisAlignedBB): Array<cn.nukkit.utils.BlockUpdateEntry>
                // @ts-ignore
                public getCollisionBlocks(bb: cn.nukkit.math.AxisAlignedBB): cn.nukkit.block.Block[]
                // @ts-ignore
                public getCollisionBlocks(bb: cn.nukkit.math.AxisAlignedBB, targetFirst: boolean): cn.nukkit.block.Block[]
                // @ts-ignore
                public isFullBlock(pos: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                public getCollisionCubes(entity: cn.nukkit.entity.Entity, bb: cn.nukkit.math.AxisAlignedBB): cn.nukkit.math.AxisAlignedBB[]
                // @ts-ignore
                public getCollisionCubes(entity: cn.nukkit.entity.Entity, bb: cn.nukkit.math.AxisAlignedBB, entities: boolean): cn.nukkit.math.AxisAlignedBB[]
                // @ts-ignore
                public getCollisionCubes(entity: cn.nukkit.entity.Entity, bb: cn.nukkit.math.AxisAlignedBB, entities: boolean, solidEntities: boolean): cn.nukkit.math.AxisAlignedBB[]
                // @ts-ignore
                public hasCollision(entity: cn.nukkit.entity.Entity, bb: cn.nukkit.math.AxisAlignedBB, entities: boolean): boolean
                // @ts-ignore
                public getFullLight(pos: cn.nukkit.math.Vector3): number /*int*/
                // @ts-ignore
                public calculateSkylightSubtracted(tickDiff: number /*float*/): number /*int*/
                // @ts-ignore
                public calculateCelestialAngle(time: number /*int*/, tickDiff: number /*float*/): number /*float*/
                // @ts-ignore
                public getMoonPhase(worldTime: number /*long*/): number /*int*/
                // @ts-ignore
                public getFullBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                // @ts-ignore
                public getBlock(pos: cn.nukkit.math.Vector3): cn.nukkit.block.Block
                // @ts-ignore
                public getBlock(pos: cn.nukkit.math.Vector3, load: boolean): cn.nukkit.block.Block
                // @ts-ignore
                public getBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/): cn.nukkit.block.Block
                // @ts-ignore
                public getBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, load: boolean): cn.nukkit.block.Block
                // @ts-ignore
                public updateAllLight(pos: cn.nukkit.math.Vector3): void
                // @ts-ignore
                public updateBlockSkyLight(x: number /*int*/, y: number /*int*/, z: number /*int*/): void
                // @ts-ignore
                public updateBlockLight(map: java.util.Map<java.lang.Long | number, java.util.Map<java.lang.Character, java.lang.Object | any>>): void
                // @ts-ignore
                public addLightUpdate(x: number /*int*/, y: number /*int*/, z: number /*int*/): void
                // @ts-ignore
                public setBlockFullIdAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, fullId: number /*int*/): void
                // @ts-ignore
                public setBlock(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block): boolean
                // @ts-ignore
                public setBlock(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block, direct: boolean): boolean
                // @ts-ignore
                public setBlock(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block, direct: boolean, update: boolean): boolean
                // @ts-ignore
                public setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, block: cn.nukkit.block.Block, direct: boolean, update: boolean): boolean
                // @ts-ignore
                public dropItem(source: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item): void
                // @ts-ignore
                public dropItem(source: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, motion: cn.nukkit.math.Vector3): void
                // @ts-ignore
                public dropItem(source: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, motion: cn.nukkit.math.Vector3, delay: number /*int*/): void
                // @ts-ignore
                public dropItem(source: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, motion: cn.nukkit.math.Vector3, dropAround: boolean, delay: number /*int*/): void
                // @ts-ignore
                public useBreakOn(vector: cn.nukkit.math.Vector3): cn.nukkit.item.Item
                // @ts-ignore
                public useBreakOn(vector: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item): cn.nukkit.item.Item
                // @ts-ignore
                public useBreakOn(vector: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, player: cn.nukkit.Player): cn.nukkit.item.Item
                // @ts-ignore
                public useBreakOn(vector: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, player: cn.nukkit.Player, createParticles: boolean): cn.nukkit.item.Item
                // @ts-ignore
                public useBreakOn(vector: cn.nukkit.math.Vector3, face: cn.nukkit.math.BlockFace, item: cn.nukkit.item.Item, player: cn.nukkit.Player, createParticles: boolean): cn.nukkit.item.Item
                // @ts-ignore
                public dropExpOrb(source: cn.nukkit.math.Vector3, exp: number /*int*/): void
                // @ts-ignore
                public dropExpOrb(source: cn.nukkit.math.Vector3, exp: number /*int*/, motion: cn.nukkit.math.Vector3): void
                // @ts-ignore
                public dropExpOrb(source: cn.nukkit.math.Vector3, exp: number /*int*/, motion: cn.nukkit.math.Vector3, delay: number /*int*/): void
                // @ts-ignore
                public useItemOn(vector: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, face: cn.nukkit.math.BlockFace, fx: number /*float*/, fy: number /*float*/, fz: number /*float*/): cn.nukkit.item.Item
                // @ts-ignore
                public useItemOn(vector: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, face: cn.nukkit.math.BlockFace, fx: number /*float*/, fy: number /*float*/, fz: number /*float*/, player: cn.nukkit.Player): cn.nukkit.item.Item
                // @ts-ignore
                public useItemOn(vector: cn.nukkit.math.Vector3, item: cn.nukkit.item.Item, face: cn.nukkit.math.BlockFace, fx: number /*float*/, fy: number /*float*/, fz: number /*float*/, player: cn.nukkit.Player, playSound: boolean): cn.nukkit.item.Item
                // @ts-ignore
                public isInSpawnRadius(vector3: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                public getEntity(entityId: number /*long*/): cn.nukkit.entity.Entity
                // @ts-ignore
                public getEntities(): cn.nukkit.entity.Entity[]
                // @ts-ignore
                public getCollidingEntities(bb: cn.nukkit.math.AxisAlignedBB): cn.nukkit.entity.Entity[]
                // @ts-ignore
                public getCollidingEntities(bb: cn.nukkit.math.AxisAlignedBB, entity: cn.nukkit.entity.Entity): cn.nukkit.entity.Entity[]
                // @ts-ignore
                public getNearbyEntities(bb: cn.nukkit.math.AxisAlignedBB): cn.nukkit.entity.Entity[]
                // @ts-ignore
                public getNearbyEntities(bb: cn.nukkit.math.AxisAlignedBB, entity: cn.nukkit.entity.Entity): cn.nukkit.entity.Entity[]
                // @ts-ignore
                public getNearbyEntities(bb: cn.nukkit.math.AxisAlignedBB, entity: cn.nukkit.entity.Entity, loadChunks: boolean): cn.nukkit.entity.Entity[]
                // @ts-ignore
                public getBlockEntities(): java.util.Map<java.lang.Long | number, cn.nukkit.blockentity.BlockEntity>
                // @ts-ignore
                public getBlockEntityById(blockEntityId: number /*long*/): cn.nukkit.blockentity.BlockEntity
                // @ts-ignore
                public getPlayers(): java.util.Map<java.lang.Long | number, cn.nukkit.Player>
                // @ts-ignore
                public getLoaders(): java.util.Map<java.lang.Integer | number, cn.nukkit.level.ChunkLoader>
                // @ts-ignore
                public getBlockEntity(pos: cn.nukkit.math.Vector3): cn.nukkit.blockentity.BlockEntity
                // @ts-ignore
                public getBlockEntityIfLoaded(pos: cn.nukkit.math.Vector3): cn.nukkit.blockentity.BlockEntity
                // @ts-ignore
                public getChunkEntities(X: number /*int*/, Z: number /*int*/): java.util.Map<java.lang.Long | number, cn.nukkit.entity.Entity>
                // @ts-ignore
                public getChunkEntities(X: number /*int*/, Z: number /*int*/, loadChunks: boolean): java.util.Map<java.lang.Long | number, cn.nukkit.entity.Entity>
                // @ts-ignore
                public getChunkBlockEntities(X: number /*int*/, Z: number /*int*/): java.util.Map<java.lang.Long | number, cn.nukkit.blockentity.BlockEntity>
                // @ts-ignore
                public getBlockIdAt(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                // @ts-ignore
                public setBlockIdAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/): void
                // @ts-ignore
                public setBlockAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/, data: number /*int*/): void
                // @ts-ignore
                public getBlockExtraDataAt(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                // @ts-ignore
                public setBlockExtraDataAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/, data: number /*int*/): void
                // @ts-ignore
                public getBlockDataAt(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                // @ts-ignore
                public setBlockDataAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, data: number /*int*/): void
                // @ts-ignore
                public getBlockSkyLightAt(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                // @ts-ignore
                public setBlockSkyLightAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, level: number /*int*/): void
                // @ts-ignore
                public getBlockLightAt(x: number /*int*/, y: number /*int*/, z: number /*int*/): number /*int*/
                // @ts-ignore
                public setBlockLightAt(x: number /*int*/, y: number /*int*/, z: number /*int*/, level: number /*int*/): void
                // @ts-ignore
                public getBiomeId(x: number /*int*/, z: number /*int*/): number /*int*/
                // @ts-ignore
                public setBiomeId(x: number /*int*/, z: number /*int*/, biomeId: number /*byte*/): void
                // @ts-ignore
                public getHeightMap(x: number /*int*/, z: number /*int*/): number /*int*/
                // @ts-ignore
                public setHeightMap(x: number /*int*/, z: number /*int*/, value: number /*int*/): void
                // @ts-ignore
                public getChunks(): java.util.Map<java.lang.Long | number, any>
                // @ts-ignore
                public getChunk(chunkX: number /*int*/, chunkZ: number /*int*/): cn.nukkit.level.format.generic.BaseFullChunk
                // @ts-ignore
                public getChunk(chunkX: number /*int*/, chunkZ: number /*int*/, create: boolean): cn.nukkit.level.format.generic.BaseFullChunk
                // @ts-ignore
                public getChunkIfLoaded(chunkX: number /*int*/, chunkZ: number /*int*/): cn.nukkit.level.format.generic.BaseFullChunk
                // @ts-ignore
                public generateChunkCallback(x: number /*int*/, z: number /*int*/, chunk: cn.nukkit.level.format.generic.BaseFullChunk): void
                // @ts-ignore
                public generateChunkCallback(x: number /*int*/, z: number /*int*/, chunk: cn.nukkit.level.format.generic.BaseFullChunk, isPopulated: boolean): void
                // @ts-ignore
                public setChunk(chunkX: number /*int*/, chunkZ: number /*int*/): void
                // @ts-ignore
                public setChunk(chunkX: number /*int*/, chunkZ: number /*int*/, chunk: cn.nukkit.level.format.generic.BaseFullChunk): void
                // @ts-ignore
                public setChunk(chunkX: number /*int*/, chunkZ: number /*int*/, chunk: cn.nukkit.level.format.generic.BaseFullChunk, unload: boolean): void
                // @ts-ignore
                public getHighestBlockAt(x: number /*int*/, z: number /*int*/): number /*int*/
                // @ts-ignore
                public getMapColorAt(x: number /*int*/, z: number /*int*/): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public isChunkLoaded(x: number /*int*/, z: number /*int*/): boolean
                // @ts-ignore
                public isChunkGenerated(x: number /*int*/, z: number /*int*/): boolean
                // @ts-ignore
                public isChunkPopulated(x: number /*int*/, z: number /*int*/): boolean
                // @ts-ignore
                public getSpawnLocation(): cn.nukkit.level.Position
                // @ts-ignore
                public setSpawnLocation(pos: cn.nukkit.math.Vector3): void
                // @ts-ignore
                public requestChunk(x: number /*int*/, z: number /*int*/, player: cn.nukkit.Player): void
                // @ts-ignore
                public chunkRequestCallback(timestamp: number /*long*/, x: number /*int*/, z: number /*int*/, subChunkCount: number /*int*/, payload: number /*byte*/[]): void
                // @ts-ignore
                public removeEntity(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public addEntity(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public addBlockEntity(blockEntity: cn.nukkit.blockentity.BlockEntity): void
                // @ts-ignore
                public scheduleBlockEntityUpdate(entity: cn.nukkit.blockentity.BlockEntity): void
                // @ts-ignore
                public removeBlockEntity(entity: cn.nukkit.blockentity.BlockEntity): void
                // @ts-ignore
                public isChunkInUse(x: number /*int*/, z: number /*int*/): boolean
                // @ts-ignore
                public isChunkInUse(hash: number /*long*/): boolean
                // @ts-ignore
                public loadChunk(x: number /*int*/, z: number /*int*/): boolean
                // @ts-ignore
                public loadChunk(x: number /*int*/, z: number /*int*/, generate: boolean): boolean
                // @ts-ignore
                public unloadChunkRequest(x: number /*int*/, z: number /*int*/): boolean
                // @ts-ignore
                public unloadChunkRequest(x: number /*int*/, z: number /*int*/, safe: boolean): boolean
                // @ts-ignore
                public cancelUnloadChunkRequest(x: number /*int*/, z: number /*int*/): void
                // @ts-ignore
                public cancelUnloadChunkRequest(hash: number /*long*/): void
                // @ts-ignore
                public unloadChunk(x: number /*int*/, z: number /*int*/): boolean
                // @ts-ignore
                public unloadChunk(x: number /*int*/, z: number /*int*/, safe: boolean): boolean
                // @ts-ignore
                public unloadChunk(x: number /*int*/, z: number /*int*/, safe: boolean, trySave: boolean): boolean
                // @ts-ignore
                public isSpawnChunk(X: number /*int*/, Z: number /*int*/): boolean
                // @ts-ignore
                public getSafeSpawn(): cn.nukkit.level.Position
                // @ts-ignore
                public getSafeSpawn(spawn: cn.nukkit.math.Vector3): cn.nukkit.level.Position
                // @ts-ignore
                public getTime(): number /*int*/
                // @ts-ignore
                public isDaytime(): boolean
                // @ts-ignore
                public getCurrentTick(): number /*long*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getFolderName(): string
                // @ts-ignore
                public setTime(time: number /*int*/): void
                // @ts-ignore
                public stopTime(): void
                // @ts-ignore
                public startTime(): void
                // @ts-ignore
                public getSeed(): number /*long*/
                // @ts-ignore
                public setSeed(seed: number /*int*/): void
                // @ts-ignore
                public populateChunk(x: number /*int*/, z: number /*int*/): boolean
                // @ts-ignore
                public populateChunk(x: number /*int*/, z: number /*int*/, force: boolean): boolean
                // @ts-ignore
                public generateChunk(x: number /*int*/, z: number /*int*/): void
                // @ts-ignore
                public generateChunk(x: number /*int*/, z: number /*int*/, force: boolean): void
                // @ts-ignore
                public regenerateChunk(x: number /*int*/, z: number /*int*/): void
                // @ts-ignore
                public doChunkGarbageCollection(): void
                // @ts-ignore
                public doGarbageCollection(allocatedTime: number /*long*/): void
                // @ts-ignore
                public unloadChunks(): void
                // @ts-ignore
                public unloadChunks(force: boolean): void
                // @ts-ignore
                public unloadChunks(maxUnload: number /*int*/, force: boolean): void
                // @ts-ignore
                public setMetadata(metadataKey: java.lang.String | string, newMetadataValue: cn.nukkit.metadata.MetadataValue): void
                // @ts-ignore
                public getMetadata(metadataKey: java.lang.String | string): Array<cn.nukkit.metadata.MetadataValue>
                // @ts-ignore
                public hasMetadata(metadataKey: java.lang.String | string): boolean
                // @ts-ignore
                public removeMetadata(metadataKey: java.lang.String | string, owningPlugin: cn.nukkit.plugin.Plugin): void
                // @ts-ignore
                public addEntityMovement(entity: cn.nukkit.entity.Entity, x: number /*double*/, y: number /*double*/, z: number /*double*/, yaw: number /*double*/, pitch: number /*double*/, headYaw: number /*double*/): void
                // @ts-ignore
                public isRaining(): boolean
                // @ts-ignore
                public setRaining(raining: boolean): boolean
                // @ts-ignore
                public getRainTime(): number /*int*/
                // @ts-ignore
                public setRainTime(rainTime: number /*int*/): void
                // @ts-ignore
                public isThundering(): boolean
                // @ts-ignore
                public setThundering(thundering: boolean): boolean
                // @ts-ignore
                public getThunderTime(): number /*int*/
                // @ts-ignore
                public setThunderTime(thunderTime: number /*int*/): void
                // @ts-ignore
                public sendWeather(players: cn.nukkit.Player[]): void
                // @ts-ignore
                public sendWeather(player: cn.nukkit.Player): void
                // @ts-ignore
                public sendWeather(players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
                // @ts-ignore
                public getDimension(): number /*int*/
                // @ts-ignore
                public canBlockSeeSky(pos: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                public getStrongPower(pos: cn.nukkit.math.Vector3, direction: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public getStrongPower(pos: cn.nukkit.math.Vector3): number /*int*/
                // @ts-ignore
                public isSidePowered(pos: cn.nukkit.math.Vector3, face: cn.nukkit.math.BlockFace): boolean
                // @ts-ignore
                public getRedstonePower(pos: cn.nukkit.math.Vector3, face: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public isBlockPowered(pos: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                public isBlockIndirectlyGettingPowered(pos: cn.nukkit.math.Vector3): number /*int*/
                // @ts-ignore
                public isAreaLoaded(bb: cn.nukkit.math.AxisAlignedBB): boolean
                // @ts-ignore
                public getUpdateLCG(): number /*int*/
                // @ts-ignore
                public createPortal(target: cn.nukkit.block.Block): boolean
            }
        }
    }
}
