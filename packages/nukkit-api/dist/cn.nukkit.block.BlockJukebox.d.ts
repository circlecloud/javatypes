declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by CreeperFace on 7.8.2017.
             */
            // @ts-ignore
            class BlockJukebox extends cn.nukkit.block.BlockSolid {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
            }
        }
    }
}
