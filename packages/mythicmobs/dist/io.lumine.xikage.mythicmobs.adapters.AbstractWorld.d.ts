declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    // @ts-ignore
                    interface AbstractWorld {
                        // @ts-ignore
                        getLivingEntities(): Array<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                        // @ts-ignore
                        equals(p0: java.lang.Object | any): boolean
                        // @ts-ignore
                        getName(): string
                        // @ts-ignore
                        isLoaded(): boolean
                        // @ts-ignore
                        createExplosion(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p1: number /*float*/): void
                        // @ts-ignore
                        createExplosion(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p1: number /*float*/, p2: boolean, p3: boolean): void
                        // @ts-ignore
                        getPlayers(): Array<io.lumine.xikage.mythicmobs.adapters.AbstractPlayer>
                        // @ts-ignore
                        getPlayersNearLocation(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p1: number /*int*/): Array<io.lumine.xikage.mythicmobs.adapters.AbstractPlayer>
                        // @ts-ignore
                        setStorm(p0: boolean): void
                        // @ts-ignore
                        setThundering(p0: boolean): void
                        // @ts-ignore
                        setWeatherDuration(p0: number /*int*/): void
                        // @ts-ignore
                        getBlockLightLevel(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): number /*int*/
                        // @ts-ignore
                        playEffect(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p1: number /*int*/): boolean
                        // @ts-ignore
                        playEffect(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p1: number /*int*/, p2: number /*int*/): boolean
                        // @ts-ignore
                        getSpawnLocation(): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        isLocationLoaded(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                        // @ts-ignore
                        getLocationBiome(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): io.lumine.xikage.mythicmobs.adapters.AbstractBiome
                        // @ts-ignore
                        getFullTime(): number /*long*/
                        // @ts-ignore
                        isChunkLoaded(p0: number /*int*/, p1: number /*int*/): boolean
                        // @ts-ignore
                        getUniqueId(): java.util.UUID
                    }
                }
            }
        }
    }
}
