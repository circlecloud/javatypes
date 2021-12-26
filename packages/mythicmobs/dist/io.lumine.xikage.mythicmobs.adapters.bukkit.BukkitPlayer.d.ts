declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    namespace bukkit {
                        // @ts-ignore
                        class BukkitPlayer extends io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitEntity implements io.lumine.xikage.mythicmobs.adapters.AbstractPlayer {
                            // @ts-ignore
                            constructor(p: Player)
                            // @ts-ignore
                            public isInCreativeMode(): boolean
                            // @ts-ignore
                            public isInSpectatorMode(): boolean
                            // @ts-ignore
                            public sendMessage(message: java.lang.String | string): void
                            // @ts-ignore
                            public hasPermission(perm: java.lang.String | string): boolean
                            // @ts-ignore
                            public getExperience(): number /*float*/
                            // @ts-ignore
                            public setExperience(exp: number /*float*/): void
                            // @ts-ignore
                            public hidePlayer(target: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer): void
                            // @ts-ignore
                            public showPlayer(target: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer): void
                            // @ts-ignore
                            public canSee(target: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer): boolean
                            // @ts-ignore
                            public isOnline(): boolean
                            // @ts-ignore
                            public getLevel(): number /*int*/
                            // @ts-ignore
                            public setLevel(level: number /*int*/): void
                            // @ts-ignore
                            public setHealthScale(scale: number /*double*/): void
                            // @ts-ignore
                            public setHealthScaled(scale: boolean): void
                            // @ts-ignore
                            public setPersonalTime(time: number /*long*/, relative: boolean): void
                            // @ts-ignore
                            public resetPersonalTime(): void
                            // @ts-ignore
                            public setPersonalWeather(type: java.lang.String | string): void
                            // @ts-ignore
                            public resetPersonalWeather(): void
                            // @ts-ignore
                            public setAllowFlight(b: boolean): void
                            // @ts-ignore
                            public getAllowFlight(): boolean
                            // @ts-ignore
                            public setFlying(b: boolean): void
                            // @ts-ignore
                            public setFlyingSpeed(f: number /*float*/): void
                            // @ts-ignore
                            public setWalkSpeed(f: number /*float*/): void
                            // @ts-ignore
                            public getFoodLevel(): number /*int*/
                            // @ts-ignore
                            public setFoodLevel(amount: number /*int*/): void
                            // @ts-ignore
                            public getFoodSaturation(): number /*float*/
                            // @ts-ignore
                            public setFoodSaturation(amount: number /*float*/): void
                            // @ts-ignore
                            public setGameMode(mode: io.lumine.xikage.mythicmobs.adapters.AbstractGameMode): void
                        }
                    }
                }
            }
        }
    }
}
