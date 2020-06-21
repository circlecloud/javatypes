declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
            class PlayerOffhandInventory extends cn.nukkit.inventory.BaseInventory {
                // @ts-ignore
                constructor(holder: cn.nukkit.entity.EntityHumanType)
                // @ts-ignore
                public setSize(size: number /*int*/): void
                // @ts-ignore
                public onSlotChange(index: number /*int*/, before: cn.nukkit.item.Item, send: boolean): void
                // @ts-ignore
                public sendContents(...players: cn.nukkit.Player[]): void
                // @ts-ignore
                public sendSlot(index: number /*int*/, ...players: cn.nukkit.Player[]): void
                // @ts-ignore
                public getHolder(): cn.nukkit.entity.EntityHuman
            }
        }
    }
}
