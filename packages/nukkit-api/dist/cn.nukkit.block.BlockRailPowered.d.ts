declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by Snake1999 on 2016/1/11.
             * Contributed by: larryTheCoder on 2017/7/18.
             * <p>
             * Nukkit Project,
             * Minecart and Riding Project,
             * Package cn.nukkit.block in project Nukkit.
             */
            // @ts-ignore
            class BlockRailPowered extends cn.nukkit.block.BlockRail {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                /**
                 * Check the surrounding of the rail
                 * @param pos      The rail position
                 * @param relative The relative of the rail that will be checked
                 * @param power    The count of the rail that had been counted
                 * @return Boolean of the surrounding area. Where the powered rail on!
                 */
                // @ts-ignore
                checkSurrounding(pos: cn.nukkit.math.Vector3, relative: boolean, power: number /*int*/): boolean
                // @ts-ignore
                canPowered(pos: cn.nukkit.math.Vector3, state: cn.nukkit.utils.Rail.Orientation, power: number /*int*/, relative: boolean): boolean
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
            }
        }
    }
}
