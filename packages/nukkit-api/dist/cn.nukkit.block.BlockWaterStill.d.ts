declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: Angelic47
             * Nukkit Project
             */
            // @ts-ignore
            class BlockWaterStill extends cn.nukkit.block.BlockWater {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getBlock(meta: number /*int*/): cn.nukkit.block.BlockLiquid
            }
        }
    }
}
