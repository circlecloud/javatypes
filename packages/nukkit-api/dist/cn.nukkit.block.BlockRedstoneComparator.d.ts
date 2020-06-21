declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * @author CreeperFace
             */
            // @ts-ignore
            abstract class BlockRedstoneComparator extends cn.nukkit.block.BlockRedstoneDiode {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                getDelay(): number /*int*/
                // @ts-ignore
                public getFacing(): cn.nukkit.math.BlockFace
                // @ts-ignore
                public getMode(): cn.nukkit.block.BlockRedstoneComparator.Mode
                // @ts-ignore
                getUnpowered(): cn.nukkit.block.BlockRedstoneComparator
                // @ts-ignore
                getPowered(): cn.nukkit.block.BlockRedstoneComparator
                // @ts-ignore
                getRedstoneSignal(): number /*int*/
                // @ts-ignore
                public updateState(): void
                // @ts-ignore
                calculateInputStrength(): number /*int*/
                // @ts-ignore
                shouldBePowered(): boolean
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public isPowered(): boolean
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
            }
        }
    }
}
