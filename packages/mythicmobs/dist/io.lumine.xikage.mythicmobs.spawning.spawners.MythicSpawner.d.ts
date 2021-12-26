declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace spawning {
                    namespace spawners {
                        // @ts-ignore
                        class MythicSpawner extends java.lang.Object implements java.lang.Cloneable {
                            // @ts-ignore
                            constructor(name: java.lang.String | string, location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, mobName: java.lang.String | string)
                            // @ts-ignore
                            constructor(name: java.lang.String | string, config: io.lumine.xikage.mythicmobs.io.MythicConfig)
                            // @ts-ignore
                            constructor(name: java.lang.String | string, group: java.lang.String | string, mobName: java.lang.String | string, world: java.lang.String | string, x: number /*int*/, y: number /*int*/, z: number /*int*/, radius: number /*int*/, radiusY: number /*int*/, useTimer: boolean, maxMobs: number /*int*/, mps: number /*int*/, moblevel: java.lang.String | string, cooldown: number /*int*/, cooldownTimer: number /*int*/, warmup: number /*int*/, warmupTimer: number /*int*/, activeRange: number /*int*/, leashRange: number /*int*/, leashHeal: boolean, leashResetThreat: boolean, showFlames: boolean, breakable: boolean, activeMobs: number /*int*/, checkForPlayers: boolean, conditions: java.util.ArrayList<java.lang.String | string>)
                            // @ts-ignore
                            cachedActiveMobs: number /*int*/
                            // @ts-ignore
                            public unloadSpawner(): void
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public setName(name: java.lang.String | string): void
                            // @ts-ignore
                            public getGroup(): string
                            // @ts-ignore
                            public setGroup(group: java.lang.String | string): void
                            // @ts-ignore
                            public getTypeName(): string
                            // @ts-ignore
                            public setType(type: java.lang.String | string): void
                            // @ts-ignore
                            public setType(type: io.lumine.xikage.mythicmobs.mobs.MythicMob): void
                            // @ts-ignore
                            public setLocation(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                            // @ts-ignore
                            public getWorldName(): string
                            // @ts-ignore
                            public setWorld(worldName: java.lang.String | string): void
                            // @ts-ignore
                            public setOnCooldown(): void
                            // @ts-ignore
                            public isOnCooldown(): boolean
                            // @ts-ignore
                            public getCooldownSeconds(): number /*int*/
                            // @ts-ignore
                            public setCooldownSeconds(cooldown: number /*int*/): void
                            // @ts-ignore
                            public getRemainingCooldownSeconds(): number /*int*/
                            // @ts-ignore
                            public setRemainingCooldownSeconds(seconds: number /*long*/): void
                            // @ts-ignore
                            public setOnWarmup(): void
                            // @ts-ignore
                            public isOnWarmup(): boolean
                            // @ts-ignore
                            public getWarmupSeconds(): number /*int*/
                            // @ts-ignore
                            public setWarmupSeconds(warmup: number /*int*/): void
                            // @ts-ignore
                            public getRemainingWarmupSeconds(): number /*int*/
                            // @ts-ignore
                            public setRemainingWarmupSeconds(seconds: number /*long*/): void
                            // @ts-ignore
                            public getUseTimer(): boolean
                            // @ts-ignore
                            public setUseTimer(bool: boolean): void
                            // @ts-ignore
                            public getConditionList(): Array<java.lang.String | string>
                            // @ts-ignore
                            public getAssociatedMobs(): Array<java.util.UUID>
                            // @ts-ignore
                            public setAssociatedMobs(collection: java.util.Collection<java.util.UUID> | Array<java.util.UUID>): void
                            // @ts-ignore
                            public getInternalCooldown(): number /*int*/
                            // @ts-ignore
                            public tickSpawnerClock(): void
                            // @ts-ignore
                            public ActivateSpawner(): void
                            // @ts-ignore
                            public checkSpawnConditions(): boolean
                            // @ts-ignore
                            public Spawn(): Array<io.lumine.xikage.mythicmobs.mobs.ActiveMob>
                            // @ts-ignore
                            public Leash(): void
                            // @ts-ignore
                            public doLeash(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): void
                            // @ts-ignore
                            public trackMob(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): void
                            // @ts-ignore
                            public markMobDespawned(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): void
                            // @ts-ignore
                            public markMobDead(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): void
                            // @ts-ignore
                            public reattachToWorld(): boolean
                            // @ts-ignore
                            public getInternalName(): string
                            // @ts-ignore
                            public getNumberOfMobs(): number /*int*/
                            // @ts-ignore
                            public Disable(): void
                            // @ts-ignore
                            public Enable(): void
                            // @ts-ignore
                            public distanceTo(abstractLocation: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): number /*double*/
                            // @ts-ignore
                            public clone(): io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner
                            // @ts-ignore
                            public resetTimers(): void
                            // @ts-ignore
                            public getChunkX(): number /*int*/
                            // @ts-ignore
                            public getChunkZ(): number /*int*/
                            // @ts-ignore
                            public getChunkString(): string
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public getNumberOfCachedMobs(): number /*int*/
                            // @ts-ignore
                            public getLocation(): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                            // @ts-ignore
                            public getBlockX(): number /*int*/
                            // @ts-ignore
                            public getBlockY(): number /*int*/
                            // @ts-ignore
                            public getBlockZ(): number /*int*/
                            // @ts-ignore
                            public setBlockX(blockX: number /*int*/): void
                            // @ts-ignore
                            public setBlockY(blockY: number /*int*/): void
                            // @ts-ignore
                            public setBlockZ(blockZ: number /*int*/): void
                            // @ts-ignore
                            public getSpawnRadius(): number /*int*/
                            // @ts-ignore
                            public setSpawnRadius(spawnRadius: number /*int*/): void
                            // @ts-ignore
                            public getSpawnRadiusY(): number /*int*/
                            // @ts-ignore
                            public setSpawnRadiusY(spawnRadiusY: number /*int*/): void
                            // @ts-ignore
                            public getMaxMobs(): number /*int*/
                            // @ts-ignore
                            public setMaxMobs(maxMobs: number /*int*/): void
                            // @ts-ignore
                            public getMobsPerSpawn(): number /*int*/
                            // @ts-ignore
                            public setMobsPerSpawn(mobsPerSpawn: number /*int*/): void
                            // @ts-ignore
                            public getMobLevel(): io.lumine.xikage.mythicmobs.util.types.RandomInt
                            // @ts-ignore
                            public setMobLevel(mobLevel: io.lumine.xikage.mythicmobs.util.types.RandomInt): void
                            // @ts-ignore
                            public isShowFlames(): boolean
                            // @ts-ignore
                            public setShowFlames(showFlames: boolean): void
                            // @ts-ignore
                            public isBreakable(): boolean
                            // @ts-ignore
                            public setBreakable(breakable: boolean): void
                            // @ts-ignore
                            public isCheckForPlayers(): boolean
                            // @ts-ignore
                            public setCheckForPlayers(checkForPlayers: boolean): void
                            // @ts-ignore
                            public getActivationRange(): number /*int*/
                            // @ts-ignore
                            public setActivationRange(activationRange: number /*int*/): void
                            // @ts-ignore
                            public getLeashRange(): number /*int*/
                            // @ts-ignore
                            public setLeashRange(leashRange: number /*int*/): void
                            // @ts-ignore
                            public isHealOnLeash(): boolean
                            // @ts-ignore
                            public setHealOnLeash(healOnLeash: boolean): void
                            // @ts-ignore
                            public isLeashResetsThreat(): boolean
                            // @ts-ignore
                            public setLeashResetsThreat(leashResetsThreat: boolean): void
                        }
                    }
                }
            }
        }
    }
}
