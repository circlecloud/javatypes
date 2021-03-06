declare namespace cn {
    namespace nukkit {
        namespace block {
            /**
             * Created on 2016/1/5 by xtypr.
             * Package cn.nukkit.block in project nukkit .
             * The name NetherPortalBlock comes from minecraft wiki.
             */
            // @ts-ignore
            class BlockNetherPortal extends cn.nukkit.block.BlockFlowable implements cn.nukkit.utils.Faceable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number /*int*/)
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getId(): number /*int*/
                // @ts-ignore
                public canPassThrough(): boolean
                // @ts-ignore
                public isBreakable(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public getHardness(): number /*double*/
                // @ts-ignore
                public getLightLevel(): number /*int*/
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public hasEntityCollision(): boolean
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor
                // @ts-ignore
                public canBePushed(): boolean
                // @ts-ignore
                public canHarvestWithHand(): boolean
                // @ts-ignore
                recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public static spawnPortal(pos: cn.nukkit.level.Position): void
                // @ts-ignore
                public getBlockFace(): cn.nukkit.math.BlockFace
            }
        }
    }
}
