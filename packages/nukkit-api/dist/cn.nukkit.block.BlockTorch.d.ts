declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created on 2015/12/2 by xtypr.
             * Package cn.nukkit.block in project Nukkit .
             */
            // @ts-ignore
            class BlockTorch extends cn.nukkit.block.BlockFlowable implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getLightLevel(): number /*int*/
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace
                // @ts-ignore
                public getBlockFace(meta: number /*int*/): cn.nukkit.math.BlockFace
            }
        }
    }
}
