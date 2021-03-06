declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                class PlayerGameModeChangeEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, newGameMode: number /*int*/, newAdventureSettings: cn.nukkit.AdventureSettings)
                    // @ts-ignore
                    readonly gamemode: number /*int*/
                    // @ts-ignore
                    newAdventureSettings: cn.nukkit.AdventureSettings
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getNewGamemode(): number /*int*/
                    // @ts-ignore
                    public getNewAdventureSettings(): cn.nukkit.AdventureSettings
                    // @ts-ignore
                    public setNewAdventureSettings(newAdventureSettings: cn.nukkit.AdventureSettings): void
                }
            }
        }
    }
}
