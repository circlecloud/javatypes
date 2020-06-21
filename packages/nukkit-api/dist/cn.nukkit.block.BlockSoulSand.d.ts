declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by Pub4Game on 27.12.2015.
             */
            // @ts-ignore
            class BlockSoulSand extends cn.nukkit.block.BlockSolid {
                // @ts-ignore
                constructor()
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
                public getMaxY(): number /*double*/
                // @ts-ignore
                public hasEntityCollision(): boolean
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
            }
        }
    }
}
