declare namespace cn {
    namespace nukkit {
        namespace inventory {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class PlayerInventory extends cn.nukkit.inventory.BaseInventory {
                // @ts-ignore
                constructor(player: cn.nukkit.entity.EntityHumanType)
                // @ts-ignore
                itemInHandIndex: number /*int*/
                // @ts-ignore
                public getSize(): number /*int*/
                // @ts-ignore
                public setSize(size: number /*int*/): void
                /**
                 * Called when a client equips a hotbar inventorySlot. This method should not be used by plugins.
                 * This method will call PlayerItemHeldEvent.
                 * @param slot hotbar slot Number of the hotbar slot to equip.
                 * @return boolean if the equipment change was successful, false if not.
                 */
                // @ts-ignore
                public equipItem(slot: number /*int*/): boolean
                // @ts-ignore
                public getHotbarSlotIndex(index: number /*int*/): number /*int*/
                // @ts-ignore
                public setHotbarSlotIndex(index: number /*int*/, slot: number /*int*/): void
                // @ts-ignore
                public getHeldItemIndex(): number /*int*/
                // @ts-ignore
                public setHeldItemIndex(index: number /*int*/): void
                // @ts-ignore
                public setHeldItemIndex(index: number /*int*/, send: boolean): void
                // @ts-ignore
                public getItemInHand(): cn.nukkit.item.Item
                // @ts-ignore
                public setItemInHand(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public getHeldItemSlot(): number /*int*/
                // @ts-ignore
                public setHeldItemSlot(slot: number /*int*/): void
                // @ts-ignore
                public sendHeldItem(...players: cn.nukkit.Player[]): void
                // @ts-ignore
                public sendHeldItem(players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
                // @ts-ignore
                public onSlotChange(index: number /*int*/, before: cn.nukkit.item.Item, send: boolean): void
                // @ts-ignore
                public getHotbarSize(): number /*int*/
                // @ts-ignore
                public getArmorItem(index: number /*int*/): cn.nukkit.item.Item
                // @ts-ignore
                public setArmorItem(index: number /*int*/, item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public setArmorItem(index: number /*int*/, item: cn.nukkit.item.Item, ignoreArmorEvents: boolean): boolean
                // @ts-ignore
                public getHelmet(): cn.nukkit.item.Item
                // @ts-ignore
                public getChestplate(): cn.nukkit.item.Item
                // @ts-ignore
                public getLeggings(): cn.nukkit.item.Item
                // @ts-ignore
                public getBoots(): cn.nukkit.item.Item
                // @ts-ignore
                public setHelmet(helmet: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public setChestplate(chestplate: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public setLeggings(leggings: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public setBoots(boots: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public setItem(index: number /*int*/, item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public clear(index: number /*int*/, send: boolean): boolean
                // @ts-ignore
                public getArmorContents(): cn.nukkit.item.Item[]
                // @ts-ignore
                public clearAll(): void
                // @ts-ignore
                public sendArmorContents(player: cn.nukkit.Player): void
                // @ts-ignore
                public sendArmorContents(players: cn.nukkit.Player[]): void
                // @ts-ignore
                public setArmorContents(items: cn.nukkit.item.Item[]): void
                // @ts-ignore
                public sendArmorContents(players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
                // @ts-ignore
                public sendArmorSlot(index: number /*int*/, player: cn.nukkit.Player): void
                // @ts-ignore
                public sendArmorSlot(index: number /*int*/, players: cn.nukkit.Player[]): void
                // @ts-ignore
                public sendArmorSlot(index: number /*int*/, players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
                // @ts-ignore
                public sendContents(player: cn.nukkit.Player): void
                // @ts-ignore
                public sendContents(players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
                // @ts-ignore
                public sendContents(players: cn.nukkit.Player[]): void
                // @ts-ignore
                public sendSlot(index: number /*int*/, player: cn.nukkit.Player): void
                // @ts-ignore
                public sendSlot(index: number /*int*/, players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
                // @ts-ignore
                public sendSlot(index: number /*int*/, ...players: cn.nukkit.Player[]): void
                // @ts-ignore
                public sendCreativeContents(): void
                // @ts-ignore
                public getHolder(): cn.nukkit.entity.EntityHuman
            }
        }
    }
}
