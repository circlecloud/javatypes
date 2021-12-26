declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    namespace bukkit {
                        // @ts-ignore
                        class BukkitItemStack extends java.lang.Object implements io.lumine.xikage.mythicmobs.adapters.AbstractItemStack, java.lang.Cloneable {
                            // @ts-ignore
                            constructor(type: java.lang.String | string)
                            // @ts-ignore
                            constructor(m: Material)
                            // @ts-ignore
                            constructor(stack: ItemStack)
                            // @ts-ignore
                            public durability(d: number /*int*/): io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitItemStack
                            // @ts-ignore
                            public data(d: number /*int*/): io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitItemStack
                            // @ts-ignore
                            public amount(a: number /*int*/): io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitItemStack
                            // @ts-ignore
                            public colorData(dc: DyeColor): io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitItemStack
                            // @ts-ignore
                            public color(color: java.lang.String | string): io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitItemStack
                            // @ts-ignore
                            public display(d: java.lang.String | string): io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitItemStack
                            // @ts-ignore
                            public lore(lore: java.lang.String[] | string[]): io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitItemStack
                            // @ts-ignore
                            public lore(lores: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitItemStack
                            // @ts-ignore
                            public enchant(ench: Enchantment, level: number /*int*/): io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitItemStack
                            // @ts-ignore
                            public setOwner(owner: java.lang.String | string): io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitItemStack
                            // @ts-ignore
                            public setSkullTexture(texture: java.lang.String | string): io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitItemStack
                            // @ts-ignore
                            public getAmount(): number /*int*/
                            // @ts-ignore
                            public getNBT(): io.lumine.xikage.mythicmobs.util.jnbt.CompoundTag
                            // @ts-ignore
                            public build(): ItemStack
                            // @ts-ignore
                            public clone(): io.lumine.xikage.mythicmobs.adapters.bukkit.BukkitItemStack
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
