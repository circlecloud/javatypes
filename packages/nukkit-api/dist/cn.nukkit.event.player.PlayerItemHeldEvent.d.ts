declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class PlayerItemHeldEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, item: cn.nukkit.item.Item, hotbarSlot: number /*int*/)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getSlot(): number /*int*/
                    // @ts-ignore
                    public getInventorySlot(): number /*int*/
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item
                }
            }
        }
    }
}
