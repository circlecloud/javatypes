declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * @author Pub4Game
             */
            // @ts-ignore
            class BlockRedstoneLampLit extends cn.nukkit.block.BlockRedstoneLamp {
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
            }
        }
    }
}
