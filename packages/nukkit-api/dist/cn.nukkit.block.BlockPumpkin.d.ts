declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created on 2015/12/8 by xtypr.
             * Package cn.nukkit.block in project Nukkit .
             */
            // @ts-ignore
            class BlockPumpkin extends cn.nukkit.block.BlockSolidMeta implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public canBePushed(): boolean
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace
            }
        }
    }
}
