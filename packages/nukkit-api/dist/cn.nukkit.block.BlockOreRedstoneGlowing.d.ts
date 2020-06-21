declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created on 2015/12/6 by xtypr.
             * Package cn.nukkit.block in project Nukkit .
             */
            // @ts-ignore
            class BlockOreRedstoneGlowing extends cn.nukkit.block.BlockOreRedstone {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getLightLevel(): number /*int*/
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public onUpdate(type: number /*int*/): number /*int*/
                // @ts-ignore
                public canHarvestWithHand(): boolean
                // @ts-ignore
                public canSilkTouch(): boolean
            }
        }
    }
}
