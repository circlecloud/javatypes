declare namespace cn {
    namespace nukkit {
        namespace item {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class ItemBucket extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: java.lang.Integer | number)
                // @ts-ignore
                constructor(meta: java.lang.Integer | number, count: number /*int*/)
                // @ts-ignore
                static getName(meta: number /*int*/): string
                // @ts-ignore
                public static getDamageByTarget(target: number /*int*/): number /*int*/
                // @ts-ignore
                public getMaxStackSize(): number /*int*/
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public onActivate(level: cn.nukkit.level.Level, player: cn.nukkit.Player, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/): boolean
                // @ts-ignore
                public onClickAir(player: cn.nukkit.Player, directionVector: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                public onUse(player: cn.nukkit.Player, ticksUsed: number /*int*/): boolean
            }
        }
    }
}
