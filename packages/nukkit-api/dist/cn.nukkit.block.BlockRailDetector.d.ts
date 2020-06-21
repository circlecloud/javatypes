declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created on 2015/11/22 by CreeperFace.
             * Contributed by: larryTheCoder on 2017/7/8.
             * <p>
             * Nukkit Project,
             * Minecart and Riding Project,
             * Package cn.nukkit.block in project Nukkit.
             */
            // @ts-ignore
            class BlockRailDetector extends cn.nukkit.block.BlockRail {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public isPowerSource(): boolean
                // @ts-ignore
                public getWeakPower(side: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public getStrongPower(side: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                updateState(): void
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
            }
        }
    }
}
