declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BlockLava extends cn.nukkit.block.BlockLiquid {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getLightLevel(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                isSurroundingBlockFlammable(block: cn.nukkit.block.Block): boolean
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public getBlock(meta: number /*int*/): cn.nukkit.block.BlockLiquid
                // @ts-ignore
                public tickRate(): number /*int*/
                // @ts-ignore
                public getFlowDecayPerBlock(): number /*int*/
                // @ts-ignore
                checkForHarden(): void
                // @ts-ignore
                flowIntoBlock(block: cn.nukkit.block.Block, newFlowDecay: number /*int*/): void
                // @ts-ignore
                public addVelocityToEntity(entity: cn.nukkit.entity.Entity, vector: cn.nukkit.math.Vector3): void
            }
        }
    }
}
