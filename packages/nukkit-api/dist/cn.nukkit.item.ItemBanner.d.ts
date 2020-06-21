declare namespace cn {
    namespace nukkit {
        namespace item {
            /**
             * Created by PetteriM1
             */
            // @ts-ignore
            class ItemBanner extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: java.lang.Integer | number)
                // @ts-ignore
                constructor(meta: java.lang.Integer | number, count: number /*int*/)
                // @ts-ignore
                public getMaxStackSize(): number /*int*/
                // @ts-ignore
                public getBaseColor(): number /*int*/
                // @ts-ignore
                public setBaseColor(color: cn.nukkit.utils.DyeColor): void
                // @ts-ignore
                public getType(): number /*int*/
                // @ts-ignore
                public setType(type: number /*int*/): void
                // @ts-ignore
                public addPattern(pattern: cn.nukkit.utils.BannerPattern): void
                // @ts-ignore
                public getPattern(index: number /*int*/): cn.nukkit.utils.BannerPattern
                // @ts-ignore
                public removePattern(index: number /*int*/): void
                // @ts-ignore
                public getPatternsSize(): number /*int*/
                // @ts-ignore
                public correctNBT(): void
            }
        }
    }
}
