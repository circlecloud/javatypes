declare namespace cn {
    namespace nukkit {
        namespace item {
            /**
             * Created by yescallop on 2016/2/13.
             */
            // @ts-ignore
            class ItemBoat extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: java.lang.Integer | number)
                // @ts-ignore
                constructor(meta: java.lang.Integer | number, count: number /*int*/)
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public onActivate(level: cn.nukkit.level.Level, player: cn.nukkit.Player, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/): boolean
                // @ts-ignore
                public getMaxStackSize(): number /*int*/
            }
        }
    }
}
