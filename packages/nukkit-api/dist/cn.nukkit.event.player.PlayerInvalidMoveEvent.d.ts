declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                /**
                 * call when a player moves wrongly
                 * @author WilliamGao
                 */
                // @ts-ignore
                class PlayerInvalidMoveEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, revert: boolean)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public isRevert(): boolean
                    /**
                     * @deprecated If you just simply want to disable the movement check, please use {#link Player#setCheckMovement(boolean)} instead.
                     * @param revert revert movement
                     */
                    // @ts-ignore
                    public setRevert(revert: boolean): void
                }
            }
        }
    }
}
