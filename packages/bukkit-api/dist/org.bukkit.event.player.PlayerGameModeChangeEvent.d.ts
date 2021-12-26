declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when the GameMode of the player is changed.
                 */
                // @ts-ignore
                class PlayerGameModeChangeEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, newGameMode: org.bukkit.GameMode)
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    /**
                     * Gets the GameMode the player is switched to.
                     * @return player's new GameMode
                     */
                    // @ts-ignore
                    public getNewGameMode(): org.bukkit.GameMode
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
