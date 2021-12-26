declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace volatilecode {
                    namespace handlers {
                        // @ts-ignore
                        interface VolatileItemHandler {
                            // @ts-ignore
                            addNBTData(p0: ItemStack, p1: java.lang.String | string, p2: io.lumine.xikage.mythicmobs.util.jnbt.Tag): ItemStack
                            // @ts-ignore
                            getNBTData(p0: ItemStack): io.lumine.xikage.mythicmobs.util.jnbt.CompoundTag
                            // @ts-ignore
                            setNBTData(p0: ItemStack, p1: io.lumine.xikage.mythicmobs.util.jnbt.CompoundTag): ItemStack
                            // @ts-ignore
                            destroyItem(p0: ItemStack): void
                        }
                    }
                }
            }
        }
    }
}
