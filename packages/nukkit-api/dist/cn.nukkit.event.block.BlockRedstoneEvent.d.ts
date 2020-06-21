declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace block {
                /**
                 * Created by CreeperFace on 12.5.2017.
                 */
                // @ts-ignore
                class BlockRedstoneEvent extends cn.nukkit.event.block.BlockEvent {
                    // @ts-ignore
                    constructor(block: cn.nukkit.block.Block, oldPower: number /*int*/, newPower: number /*int*/)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getOldPower(): number /*int*/
                    // @ts-ignore
                    public getNewPower(): number /*int*/
                }
            }
        }
    }
}
