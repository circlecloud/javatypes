declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BlockAir extends cn.nukkit.block.BlockTransparent {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public canPassThrough(): boolean
                // @ts-ignore
                public isBreakable(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public canBeFlowedInto(): boolean
                // @ts-ignore
                public canBePlaced(): boolean
                // @ts-ignore
                public canBeReplaced(): boolean
                // @ts-ignore
                public isSolid(): boolean
                // @ts-ignore
                public getBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public canHarvestWithHand(): boolean
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
            }
        }
    }
}
