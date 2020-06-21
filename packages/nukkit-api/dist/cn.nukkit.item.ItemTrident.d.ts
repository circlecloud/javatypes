declare namespace cn {
    namespace nukkit {
        namespace item {
            /**
             * Created by PetteriM1
             */
            // @ts-ignore
            class ItemTrident extends cn.nukkit.item.ItemTool {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: java.lang.Integer | number)
                // @ts-ignore
                constructor(meta: java.lang.Integer | number, count: number /*int*/)
                // @ts-ignore
                public getMaxDurability(): number /*int*/
                // @ts-ignore
                public isSword(): boolean
                // @ts-ignore
                public getAttackDamage(): number /*int*/
                // @ts-ignore
                public onClickAir(player: cn.nukkit.Player, directionVector: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                public onRelease(player: cn.nukkit.Player, ticksUsed: number /*int*/): boolean
            }
        }
    }
}
