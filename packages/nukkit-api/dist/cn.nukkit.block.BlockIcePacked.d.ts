declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class BlockIcePacked extends cn.nukkit.block.BlockIce {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getToolType(): number /*int*/
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public canHarvestWithHand(): boolean
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public canSilkTouch(): boolean
            }
        }
    }
}
