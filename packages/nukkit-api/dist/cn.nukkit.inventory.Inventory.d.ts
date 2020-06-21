declare namespace cn {
    namespace nukkit {
        namespace inventory {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            interface Inventory {
                // @ts-ignore
                readonly MAX_STACK: number /*int*/
                // @ts-ignore
                getSize(): number /*int*/
                // @ts-ignore
                getMaxStackSize(): number /*int*/
                // @ts-ignore
                setMaxStackSize(size: number /*int*/): void
                // @ts-ignore
                getName(): string
                // @ts-ignore
                getTitle(): string
                // @ts-ignore
                getItem(index: number /*int*/): cn.nukkit.item.Item
                // @ts-ignore
                setItem(index: number /*int*/, item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                setItem(index: number /*int*/, item: cn.nukkit.item.Item, send: boolean): boolean
                // @ts-ignore
                addItem(...slots: cn.nukkit.item.Item[]): cn.nukkit.item.Item[]
                // @ts-ignore
                canAddItem(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                removeItem(...slots: cn.nukkit.item.Item[]): cn.nukkit.item.Item[]
                // @ts-ignore
                getContents(): java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>
                // @ts-ignore
                setContents(items: java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>): void
                // @ts-ignore
                sendContents(player: cn.nukkit.Player): void
                // @ts-ignore
                sendContents(...players: cn.nukkit.Player[]): void
                // @ts-ignore
                sendContents(players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
                // @ts-ignore
                sendSlot(index: number /*int*/, player: cn.nukkit.Player): void
                // @ts-ignore
                sendSlot(index: number /*int*/, ...players: cn.nukkit.Player[]): void
                // @ts-ignore
                sendSlot(index: number /*int*/, players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
                // @ts-ignore
                contains(item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                all(item: cn.nukkit.item.Item): java.util.Map<java.lang.Integer | number, cn.nukkit.item.Item>
                // @ts-ignore
                first(item: cn.nukkit.item.Item): number /*int*/
                // @ts-ignore
                first(item: cn.nukkit.item.Item, exact: boolean): number /*int*/
                // @ts-ignore
                firstEmpty(item: cn.nukkit.item.Item): number /*int*/
                // @ts-ignore
                decreaseCount(slot: number /*int*/): void
                // @ts-ignore
                remove(item: cn.nukkit.item.Item): void
                // @ts-ignore
                clear(index: number /*int*/): boolean
                // @ts-ignore
                clear(index: number /*int*/, send: boolean): boolean
                // @ts-ignore
                clearAll(): void
                // @ts-ignore
                isFull(): boolean
                // @ts-ignore
                isEmpty(): boolean
                // @ts-ignore
                getViewers(): Array<cn.nukkit.Player>
                // @ts-ignore
                getType(): cn.nukkit.inventory.InventoryType
                // @ts-ignore
                getHolder(): cn.nukkit.inventory.InventoryHolder
                // @ts-ignore
                onOpen(who: cn.nukkit.Player): void
                // @ts-ignore
                open(who: cn.nukkit.Player): boolean
                // @ts-ignore
                close(who: cn.nukkit.Player): void
                // @ts-ignore
                onClose(who: cn.nukkit.Player): void
                // @ts-ignore
                onSlotChange(index: number /*int*/, before: cn.nukkit.item.Item, send: boolean): void
            }
        }
    }
}
