declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by Pub4Game on 27.12.2015.
             */
            // @ts-ignore
            class BlockAnvil extends cn.nukkit.block.BlockFallable implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getFullId(): number /*int*/
                // @ts-ignore
                public getDamage(): number /*int*/
                // @ts-ignore
                public setDamage(meta: number /*int*/): void
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public isTransparent(): boolean
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public canHarvestWithHand(): boolean
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace
            }
        }
    }
}
