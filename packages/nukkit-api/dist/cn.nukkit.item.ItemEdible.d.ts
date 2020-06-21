declare namespace cn {
    namespace nukkit {
        namespace item {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class ItemEdible extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number, count: number /*int*/, name: java.lang.String | string)
                // @ts-ignore
                constructor(id: number /*int*/)
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number)
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number, count: number /*int*/)
                // @ts-ignore
                public onClickAir(player: cn.nukkit.Player, directionVector: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                public onUse(player: cn.nukkit.Player, ticksUsed: number /*int*/): boolean
            }
        }
    }
}
