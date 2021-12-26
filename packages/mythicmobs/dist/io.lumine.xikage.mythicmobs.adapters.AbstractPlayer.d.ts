declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    // @ts-ignore
                    interface AbstractPlayer extends io.lumine.xikage.mythicmobs.adapters.AbstractEntity {
                        // @ts-ignore
                        hasPermission(p0: java.lang.String | string): boolean
                        // @ts-ignore
                        isInCreativeMode(): boolean
                        // @ts-ignore
                        isInSpectatorMode(): boolean
                        // @ts-ignore
                        sendMessage(p0: java.lang.String | string): void
                        // @ts-ignore
                        getExperience(): number /*float*/
                        // @ts-ignore
                        setExperience(p0: number /*float*/): void
                        // @ts-ignore
                        hidePlayer(p0: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer): void
                        // @ts-ignore
                        canSee(p0: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer): boolean
                        // @ts-ignore
                        isOnline(): boolean
                        // @ts-ignore
                        getLevel(): number /*int*/
                        // @ts-ignore
                        setLevel(p0: number /*int*/): void
                        // @ts-ignore
                        setHealthScale(p0: number /*double*/): void
                        // @ts-ignore
                        setHealthScaled(p0: boolean): void
                        // @ts-ignore
                        setPersonalTime(p0: number /*long*/, p1: boolean): void
                        // @ts-ignore
                        resetPersonalTime(): void
                        // @ts-ignore
                        setPersonalWeather(p0: java.lang.String | string): void
                        // @ts-ignore
                        resetPersonalWeather(): void
                        // @ts-ignore
                        setAllowFlight(p0: boolean): void
                        // @ts-ignore
                        getAllowFlight(): boolean
                        // @ts-ignore
                        showPlayer(p0: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer): void
                        // @ts-ignore
                        setFlying(p0: boolean): void
                        // @ts-ignore
                        setFlyingSpeed(p0: number /*float*/): void
                        // @ts-ignore
                        setWalkSpeed(p0: number /*float*/): void
                        // @ts-ignore
                        getFoodLevel(): number /*int*/
                        // @ts-ignore
                        setFoodLevel(p0: number /*int*/): void
                        // @ts-ignore
                        getFoodSaturation(): number /*float*/
                        // @ts-ignore
                        setFoodSaturation(p0: number /*float*/): void
                        // @ts-ignore
                        setGameMode(p0: io.lumine.xikage.mythicmobs.adapters.AbstractGameMode): void
                    }
                }
            }
        }
    }
}
