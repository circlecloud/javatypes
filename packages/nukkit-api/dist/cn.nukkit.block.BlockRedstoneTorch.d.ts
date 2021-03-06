declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: Angelic47
             * Nukkit Project
             */
            // @ts-ignore
            class BlockRedstoneTorch extends cn.nukkit.block.BlockTorch {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getLightLevel(): number /*int*/
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public getWeakPower(side: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public getStrongPower(side: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                checkState(): boolean
                // @ts-ignore
                isPoweredFromSide(): boolean
                // @ts-ignore
                public tickRate(): number /*int*/
                // @ts-ignore
                public isPowerSource(): boolean
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
            }
        }
    }
}
