declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            class BlockDragonEgg extends cn.nukkit.block.BlockFallable {
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
                public getLightLevel(): number /*int*/
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public isTransparent(): boolean
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public teleport(): void
            }
        }
    }
}
