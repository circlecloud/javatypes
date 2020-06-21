declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by CreeperFace on 10.4.2017.
             */
            // @ts-ignore
            class BlockRedstoneRepeaterPowered extends cn.nukkit.block.BlockRedstoneDiode {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getFacing(): cn.nukkit.math.BlockFace
                // @ts-ignore
                isAlternateInput(block: cn.nukkit.block.Block): boolean
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                getDelay(): number /*int*/
                // @ts-ignore
                getPowered(): cn.nukkit.block.Block
                // @ts-ignore
                getUnpowered(): cn.nukkit.block.Block
                // @ts-ignore
                public getLightLevel(): number /*int*/
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean
                // @ts-ignore
                public isLocked(): boolean
            }
        }
    }
}
