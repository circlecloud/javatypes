declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: CreeperFace
             * Nukkit Project
             */
            // @ts-ignore
            class BlockCauldron extends cn.nukkit.block.BlockSolidMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public isFull(): boolean
                // @ts-ignore
                public isEmpty(): boolean
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                replaceBucket(oldBucket: cn.nukkit.item.Item, player: cn.nukkit.Player, newBucket: cn.nukkit.item.Item): void
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public hasComparatorInputOverride(): boolean
                // @ts-ignore
                public getComparatorInputOverride(): number /*int*/
                // @ts-ignore
                public canHarvestWithHand(): boolean
            }
        }
    }
}
