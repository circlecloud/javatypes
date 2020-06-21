declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BlockGravel extends cn.nukkit.block.BlockFallable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
            }
        }
    }
}
