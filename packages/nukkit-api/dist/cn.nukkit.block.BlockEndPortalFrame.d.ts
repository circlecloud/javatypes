declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by Pub4Game on 26.12.2015.
             */
            // @ts-ignore
            class BlockEndPortalFrame extends cn.nukkit.block.BlockTransparentMeta implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getLightLevel(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public isBreakable(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public getMaxY(): number /*double*/
                // @ts-ignore
                public canBePushed(): boolean
                // @ts-ignore
                public hasComparatorInputOverride(): boolean
                // @ts-ignore
                public getComparatorInputOverride(): number /*int*/
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public canHarvestWithHand(): boolean
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
            }
        }
    }
}
