declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: Angelic47
             * Nukkit Project
             */
            // @ts-ignore
            class BlockLeaves extends cn.nukkit.block.BlockTransparentMeta {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public static readonly OAK: number /*int*/
                // @ts-ignore
                public static readonly SPRUCE: number /*int*/
                // @ts-ignore
                public static readonly BIRCH: number /*int*/
                // @ts-ignore
                public static readonly JUNGLE: number /*int*/
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getBurnChance(): number /*int*/
                // @ts-ignore
                public getBurnAbility(): number /*int*/
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number /*double*/, fy: number /*double*/, fz: number /*double*/, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[]
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public isCheckDecay(): boolean
                // @ts-ignore
                public setCheckDecay(checkDecay: boolean): void
                // @ts-ignore
                public isPersistent(): boolean
                // @ts-ignore
                public setPersistent(persistent: boolean): void
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public canSilkTouch(): boolean
                // @ts-ignore
                canDropApple(): boolean
                // @ts-ignore
                getSapling(): cn.nukkit.item.Item
            }
        }
    }
}
