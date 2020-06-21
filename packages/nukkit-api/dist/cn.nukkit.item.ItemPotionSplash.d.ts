declare namespace cn {
    namespace nukkit {
        namespace item {
            /**
             * Created on 2015/12/27 by xtypr.
             * Package cn.nukkit.item in project Nukkit .
             */
            // @ts-ignore
            class ItemPotionSplash extends cn.nukkit.item.ProjectileItem {
                // @ts-ignore
                constructor(meta: java.lang.Integer | number)
                // @ts-ignore
                constructor(meta: java.lang.Integer | number, count: number /*int*/)
                // @ts-ignore
                public getMaxStackSize(): number /*int*/
                // @ts-ignore
                public canBeActivated(): boolean
                // @ts-ignore
                public getProjectileEntityType(): string
                // @ts-ignore
                public getThrowForce(): number /*float*/
                // @ts-ignore
                correctNBT(nbt: cn.nukkit.nbt.tag.CompoundTag): void
            }
        }
    }
}
