declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    namespace bukkit {
                        // @ts-ignore
                        class BukkitWorld extends java.lang.Object implements io.lumine.xikage.mythicmobs.adapters.AbstractWorld {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            constructor(w: World)
                            // @ts-ignore
                            public getBukkitWorld(): World
                            // @ts-ignore
                            public isLoaded(): boolean
                            // @ts-ignore
                            public getLivingEntities(): Array<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public getUniqueId(): java.util.UUID
                            // @ts-ignore
                            public equals(other: java.lang.Object | any): boolean
                            // @ts-ignore
                            public toString(): string
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public getMaxY(): number /*int*/
                            // @ts-ignore
                            public createExplosion(l: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, f: number /*float*/): void
                            // @ts-ignore
                            public createExplosion(l: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, yield: number /*float*/, fire: boolean, blockdamage: boolean): void
                            // @ts-ignore
                            public getPlayers(): Array<io.lumine.xikage.mythicmobs.adapters.AbstractPlayer>
                            // @ts-ignore
                            public setStorm(b: boolean): void
                            // @ts-ignore
                            public setThundering(b: boolean): void
                            // @ts-ignore
                            public setWeatherDuration(duration: number /*int*/): void
                            // @ts-ignore
                            public playEffect(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, type: number /*int*/): boolean
                            // @ts-ignore
                            public playEffect(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, type: number /*int*/, data: number /*int*/): boolean
                            // @ts-ignore
                            public getBlockLightLevel(l: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): number /*int*/
                            // @ts-ignore
                            public getSpawnLocation(): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                            // @ts-ignore
                            public isChunkLoaded(x: number /*int*/, z: number /*int*/): boolean
                            // @ts-ignore
                            public isLocationLoaded(abstractLocation: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public getPlayersNearLocation(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, radius: number /*int*/): Array<io.lumine.xikage.mythicmobs.adapters.AbstractPlayer>
                            // @ts-ignore
                            public getLocationBiome(abstractLocation: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): io.lumine.xikage.mythicmobs.adapters.AbstractBiome
                            // @ts-ignore
                            public getFullTime(): number /*long*/
                        }
                    }
                }
            }
        }
    }
}
