declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                class PlayerDeathEvent extends cn.nukkit.event.entity.EntityDeathEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, drops: cn.nukkit.item.Item[], deathMessage: cn.nukkit.lang.TextContainer, experience: number /*int*/)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, drops: cn.nukkit.item.Item[], deathMessage: java.lang.String | string, experience: number /*int*/)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getEntity(): cn.nukkit.Player
                    // @ts-ignore
                    public getDeathMessage(): cn.nukkit.lang.TextContainer
                    // @ts-ignore
                    public setDeathMessage(deathMessage: cn.nukkit.lang.TextContainer): void
                    // @ts-ignore
                    public setDeathMessage(deathMessage: java.lang.String | string): void
                    // @ts-ignore
                    public getKeepInventory(): boolean
                    // @ts-ignore
                    public setKeepInventory(keepInventory: boolean): void
                    // @ts-ignore
                    public getKeepExperience(): boolean
                    // @ts-ignore
                    public setKeepExperience(keepExperience: boolean): void
                    // @ts-ignore
                    public getExperience(): number /*int*/
                    // @ts-ignore
                    public setExperience(experience: number /*int*/): void
                }
            }
        }
    }
}
