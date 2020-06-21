declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
            class PlayerUIComponent extends cn.nukkit.inventory.BaseInventory {
                // @ts-ignore
                public getSize(): number /*int*/
                // @ts-ignore
                public getMaxStackSize(): number /*int*/
                // @ts-ignore
                public setMaxStackSize(size: number /*int*/): void
                // @ts-ignore
                public getTitle(): string
                // @ts-ignore
                public getItem(index: number /*int*/): cn.nukkit.item.Item
                // @ts-ignore
                public setItem(index: number /*int*/, item: cn.nukkit.item.Item, send: boolean): boolean
                // @ts-ignore
                public getContents(): java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>
                // @ts-ignore
                public sendContents(...players: cn.nukkit.Player[]): void
                // @ts-ignore
                public sendSlot(index: number /*int*/, ...players: cn.nukkit.Player[]): void
                // @ts-ignore
                public getViewers(): Array<cn.nukkit.Player>
                // @ts-ignore
                public getType(): cn.nukkit.inventory.InventoryType
                // @ts-ignore
                public onOpen(who: cn.nukkit.Player): void
                // @ts-ignore
                public open(who: cn.nukkit.Player): boolean
                // @ts-ignore
                public close(who: cn.nukkit.Player): void
                // @ts-ignore
                public onClose(who: cn.nukkit.Player): void
                // @ts-ignore
                public onSlotChange(index: number /*int*/, before: cn.nukkit.item.Item, send: boolean): void
            }
        }
    }
}
