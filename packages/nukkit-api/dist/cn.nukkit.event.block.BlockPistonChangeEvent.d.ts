declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace block {
                /**
                 * Created by CreeperFace on 2.8.2017.
                 */
                // @ts-ignore
                class BlockPistonChangeEvent extends cn.nukkit.event.block.BlockEvent {
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
