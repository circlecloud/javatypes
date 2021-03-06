declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace block {
                /**
                 * Created by Snake1999 on 2016/1/22.
                 * Package cn.nukkit.event.block in project nukkit.
                 */
                // @ts-ignore
                class DoorToggleEvent extends cn.nukkit.event.block.BlockUpdateEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: cn.nukkit.block.Block, player: cn.nukkit.Player)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public setPlayer(player: cn.nukkit.Player): void
                    // @ts-ignore
                    public getPlayer(): cn.nukkit.Player
                }
            }
        }
    }
}
