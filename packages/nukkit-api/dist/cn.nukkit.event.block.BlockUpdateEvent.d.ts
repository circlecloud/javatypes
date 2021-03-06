declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace block {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class BlockUpdateEvent extends cn.nukkit.event.block.BlockEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: cn.nukkit.block.Block)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                }
            }
        }
    }
}
