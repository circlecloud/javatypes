declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BlockWater extends cn.nukkit.block.BlockLiquid {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public getBlock(meta: number /*int*/): cn.nukkit.block.BlockLiquid
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public tickRate(): number /*int*/
            }
        }
    }
}
