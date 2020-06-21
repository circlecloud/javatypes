declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * @author CreeperFace
             */
            // @ts-ignore
            abstract class BlockRedstoneDiode extends cn.nukkit.block.BlockFlowable implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)

                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public updateState(): void
                // @ts-ignore
                public isLocked(): boolean
                // @ts-ignore
                calculateInputStrength(): number /*int*/
                // @ts-ignore
                getPowerOnSides(): number /*int*/
                // @ts-ignore
                getPowerOnSide(pos: cn.nukkit.math.Vector3, side: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public isPowerSource(): boolean
                // @ts-ignore
                shouldBePowered(): boolean
                // @ts-ignore
                public abstract getFacing(): cn.nukkit.math.BlockFace
                // @ts-ignore
                abstract getDelay(): number /*int*/
                // @ts-ignore
                abstract getUnpowered(): cn.nukkit.block.Block
                // @ts-ignore
                abstract getPowered(): cn.nukkit.block.Block
                // @ts-ignore
                public getMaxY(): number /*double*/
                // @ts-ignore
                public canPassThrough(): boolean
                // @ts-ignore
                isAlternateInput(block: cn.nukkit.block.Block): boolean
                // @ts-ignore
                public static isDiode(block: cn.nukkit.block.Block): boolean
                // @ts-ignore
                getRedstoneSignal(): number /*int*/
                // @ts-ignore
                public getStrongPower(side: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public getWeakPower(side: cn.nukkit.math.BlockFace): number /*int*/
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public isPowered(): boolean
                // @ts-ignore
                public isFacingTowardsRepeater(): boolean
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
            }
        }
    }
}
