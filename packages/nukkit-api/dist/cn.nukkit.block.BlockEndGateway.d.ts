declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * @author PikyCZ
             */
            // @ts-ignore
            class BlockEndGateway extends cn.nukkit.block.BlockSolid {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public canPassThrough(): boolean
                // @ts-ignore
                public isBreakable(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getLightLevel(): number /*int*/
                // @ts-ignore
                public hasEntityCollision(): boolean
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
            }
        }
    }
}
