declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by CreeperFace on 2.6.2017.
             */
            // @ts-ignore
            class BlockConcretePowder extends cn.nukkit.block.BlockFallable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getFullId(): number /*int*/
                // @ts-ignore
                public getDamage(): number /*int*/
                // @ts-ignore
                public setDamage(meta: number /*int*/): void
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, b: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
            }
        }
    }
}
