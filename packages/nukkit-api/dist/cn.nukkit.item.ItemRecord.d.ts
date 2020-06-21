declare namespace cn {
    namespace nukkit {
        namespace item {
            /**
             * @author CreeperFace
             */
            // @ts-ignore
            abstract class ItemRecord extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor(id: number /*int*/, meta: java.lang.Integer | number, count: number /*int*/)
                // @ts-ignore
                public getMaxStackSize(): number /*int*/
                // @ts-ignore
                public abstract getSoundId(): string
            }
        }
    }
}
