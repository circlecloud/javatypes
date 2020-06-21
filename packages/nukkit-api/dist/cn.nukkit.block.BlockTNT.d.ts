declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created on 2015/12/8 by xtypr.
             * Package cn.nukkit.block in project Nukkit .
             */
            // @ts-ignore
            class BlockTNT extends cn.nukkit.block.BlockSolid {
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
                public canBeActivated(): boolean
                // @ts-ignore
                public getBurnChance(): number /*int*/
                // @ts-ignore
                public getBurnAbility(): number /*int*/
                // @ts-ignore
                public prime(): void
                // @ts-ignore
                public prime(fuse: number /*int*/): void
                // @ts-ignore
                public prime(fuse: number /*int*/, source: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
            }
        }
    }
}
