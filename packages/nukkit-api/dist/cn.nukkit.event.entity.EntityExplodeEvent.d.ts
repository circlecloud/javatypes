declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                /**
                 * author: Angelic47
                 * Nukkit Project
                 */
                // @ts-ignore
                class EntityExplodeEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, position: cn.nukkit.level.Position, blocks: java.util.List<cn.nukkit.block.Block> | Array<cn.nukkit.block.Block>, yield: number /*double*/)
                    // @ts-ignore
                    readonly position: cn.nukkit.level.Position
                    // @ts-ignore
                    blocks: java.util.List<cn.nukkit.block.Block> | Array<cn.nukkit.block.Block>
                    // @ts-ignore
                    yield: number /*double*/
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getPosition(): cn.nukkit.level.Position
                    // @ts-ignore
                    public getBlockList(): Array<cn.nukkit.block.Block>
                    // @ts-ignore
                    public setBlockList(blocks: java.util.List<cn.nukkit.block.Block> | Array<cn.nukkit.block.Block>): void
                    // @ts-ignore
                    public getYield(): number /*double*/
                    // @ts-ignore
                    public setYield(yield: number /*double*/): void
                }
            }
        }
    }
}
