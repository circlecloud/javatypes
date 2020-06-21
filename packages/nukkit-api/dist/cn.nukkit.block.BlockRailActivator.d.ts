declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * @author Nukkit Project Team
             */
            // @ts-ignore
            class BlockRailActivator extends cn.nukkit.block.BlockRail {
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
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
