declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace block {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class BlockEvent extends cn.nukkit.event.Event {
                    // @ts-ignore
                    constructor(block: cn.nukkit.block.Block)
                    // @ts-ignore
                    readonly block: cn.nukkit.block.Block
                    // @ts-ignore
                    public getBlock(): cn.nukkit.block.Block
                }
            }
        }
    }
}
