declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created on 2015/12/6 by xtypr.
             * Package cn.nukkit.block in project Nukkit .
             */
            // @ts-ignore
            abstract class BlockThin extends cn.nukkit.block.BlockTransparent {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public isSolid(): boolean
                // @ts-ignore
                recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public canConnect(block: cn.nukkit.block.Block): boolean
            }
        }
    }
}
