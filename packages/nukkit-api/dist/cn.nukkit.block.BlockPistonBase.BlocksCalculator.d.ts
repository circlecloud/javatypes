declare namespace cn {
    namespace nukkit {
        namespace block {
            namespace BlockPistonBase {
                // @ts-ignore
                class BlocksCalculator extends java.lang.Object {
                    // @ts-ignore
                    constructor(level: cn.nukkit.level.Level, pos: cn.nukkit.block.Block, facing: cn.nukkit.math.BlockFace, extending: boolean)
                    // @ts-ignore
                    public canMove(): boolean
                    // @ts-ignore
                    public getBlocksToMove(): Array<cn.nukkit.block.Block>
                    // @ts-ignore
                    public getBlocksToDestroy(): Array<cn.nukkit.block.Block>
                }
            }
        }
    }
}
