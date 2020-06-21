declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by Snake1999 on 2016/1/17.
             * Package cn.nukkit.block in project nukkit.
             */
            // @ts-ignore
            class BlockNoteblock extends cn.nukkit.block.BlockSolid {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getResistance(): number /*double*/
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public getStrength(): number /*int*/
                // @ts-ignore
                public increaseStrength(): void
                // @ts-ignore
                public getInstrument(): cn.nukkit.block.BlockNoteblock.Instrument
                // @ts-ignore
                public emitSound(): void
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
            }
        }
    }
}
