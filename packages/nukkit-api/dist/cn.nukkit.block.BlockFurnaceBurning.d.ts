declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: Angelic47
             * Nukkit Project
             */
            // @ts-ignore
            class BlockFurnaceBurning extends cn.nukkit.block.BlockSolidMeta implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public getLightLevel(): number /*int*/
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public hasComparatorInputOverride(): boolean
                // @ts-ignore
                public getComparatorInputOverride(): number /*int*/
                // @ts-ignore
                public canHarvestWithHand(): boolean
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace
            }
        }
    }
}
