declare namespace cn {
    namespace nukkit {
        namespace entity {
            // @ts-ignore
            abstract class EntityHumanType extends cn.nukkit.entity.EntityCreature implements cn.nukkit.inventory.InventoryHolder {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                inventory: cn.nukkit.inventory.PlayerInventory
                // @ts-ignore
                enderChestInventory: cn.nukkit.inventory.PlayerEnderChestInventory
                // @ts-ignore
                offhandInventory: cn.nukkit.inventory.PlayerOffhandInventory
                // @ts-ignore
                public getInventory(): cn.nukkit.inventory.PlayerInventory
                // @ts-ignore
                public getEnderChestInventory(): cn.nukkit.inventory.PlayerEnderChestInventory
                // @ts-ignore
                public getOffhandInventory(): cn.nukkit.inventory.PlayerOffhandInventory
                // @ts-ignore
                initEntity(): void
                // @ts-ignore
                public saveNBT(): void
                // @ts-ignore
                public getDrops(): cn.nukkit.item.Item[]
                // @ts-ignore
                public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean
                // @ts-ignore
                calculateEnchantmentProtectionFactor(item: cn.nukkit.item.Item, source: cn.nukkit.event.entity.EntityDamageEvent): number /*double*/
                // @ts-ignore
                public setOnFire(seconds: number /*int*/): void
            }
        }
    }
}
