declare namespace cn {
    namespace nukkit {
        namespace inventory {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            abstract class BaseInventory extends java.lang.Object implements cn.nukkit.inventory.Inventory {
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>, overrideSize: java.lang.Integer | number)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>, overrideSize: java.lang.Integer | number, overrideTitle: java.lang.String | string)
                // @ts-ignore
                readonly type: cn.nukkit.inventory.InventoryType
                // @ts-ignore
                maxStackSize: number /*int*/
                // @ts-ignore
                size: number /*int*/
                // @ts-ignore
                readonly name: java.lang.String | string
                // @ts-ignore
                readonly title: java.lang.String | string
                // @ts-ignore
                public readonly slots: java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>
                // @ts-ignore
                readonly viewers: java.util.Set<cn.nukkit.Player> | Array<cn.nukkit.Player>
                // @ts-ignore
                holder: cn.nukkit.inventory.InventoryHolder
                // @ts-ignore
                public getSize(): number /*int*/
                // @ts-ignore
                public setSize(size: number /*int*/): void
                // @ts-ignore
                public getMaxStackSize(): number /*int*/
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getTitle(): string
                // @ts-ignore
                public getItem(index: number /*int*/): cn.nukkit.item.Item
                // @ts-ignore
                public getContents(): java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>
                // @ts-ignore
                public setContents(items: java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>): void
                // @ts-ignore
                public setItem(index: number /*int*/, item: cn.nukkit.item.Item, send: boolean): boolean
                // @ts-ignore
                public contains(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public all(item: cn.nukkit.item.Item): java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>
                // @ts-ignore
                public remove(item: cn.nukkit.item.Item): void
                // @ts-ignore
                public first(item: cn.nukkit.item.Item, exact: boolean): number /*int*/
                // @ts-ignore
                public firstEmpty(item: cn.nukkit.item.Item): number /*int*/
                // @ts-ignore
                public decreaseCount(slot: number /*int*/): void
                // @ts-ignore
                public canAddItem(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                public addItem(...slots: cn.nukkit.item.Item[]): cn.nukkit.item.Item[]
                // @ts-ignore
                public removeItem(...slots: cn.nukkit.item.Item[]): cn.nukkit.item.Item[]
                // @ts-ignore
                public clear(index: number /*int*/, send: boolean): boolean
                // @ts-ignore
                public clearAll(): void
                // @ts-ignore
                public getViewers(): Array<cn.nukkit.Player>
                // @ts-ignore
                public getHolder(): cn.nukkit.inventory.InventoryHolder
                // @ts-ignore
                public setMaxStackSize(maxStackSize: number /*int*/): void
                // @ts-ignore
                public open(who: cn.nukkit.Player): boolean
                // @ts-ignore
                public close(who: cn.nukkit.Player): void
                // @ts-ignore
                public onOpen(who: cn.nukkit.Player): void
                // @ts-ignore
                public onClose(who: cn.nukkit.Player): void
                // @ts-ignore
                public onSlotChange(index: number /*int*/, before: cn.nukkit.item.Item, send: boolean): void
                // @ts-ignore
                public sendContents(player: cn.nukkit.Player): void
                // @ts-ignore
                public sendContents(...players: cn.nukkit.Player[]): void
                // @ts-ignore
                public isFull(): boolean
                // @ts-ignore
                public isEmpty(): boolean
                // @ts-ignore
                public getFreeSpace(item: cn.nukkit.item.Item): number /*int*/
                // @ts-ignore
                public sendContents(players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
                // @ts-ignore
                public sendSlot(index: number /*int*/, player: cn.nukkit.Player): void
                // @ts-ignore
                public sendSlot(index: number /*int*/, ...players: cn.nukkit.Player[]): void
                // @ts-ignore
                public sendSlot(index: number /*int*/, players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
                // @ts-ignore
                public getType(): cn.nukkit.inventory.InventoryType
            }
        }
    }
}
