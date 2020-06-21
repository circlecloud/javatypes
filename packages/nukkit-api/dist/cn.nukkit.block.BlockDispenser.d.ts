declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created by CreeperFace on 15.4.2017.
             */
            // @ts-ignore
            class BlockDispenser extends cn.nukkit.block.BlockSolidMeta implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public hasComparatorInputOverride(): boolean
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public getComparatorInputOverride(): number /*int*/
                // @ts-ignore
                public getFacing(): cn.nukkit.math.BlockFace
                // @ts-ignore
                public isTriggered(): boolean
                // @ts-ignore
                public setTriggered(value: boolean): void
                // @ts-ignore
                public canHarvestWithHand(): boolean
                // @ts-ignore
                public getDispensePosition(): cn.nukkit.math.Vector3
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace
            }
        }
    }
}
