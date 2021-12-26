declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace listener {
                // @ts-ignore
                class SlotListener extends java.lang.Object {
                    // @ts-ignore
                    constructor(plugin: eos.moe.dragoncore.DragonCore)
                    // @ts-ignore
                    public onSlotClickEvent(e: eos.moe.dragoncore.api.gui.event.CustomPacketEvent): void
                    // @ts-ignore
                    public handleSlotClick(player: Player, slotIdentity: java.lang.String | string, mouseButton: number /*int*/, slotItem: ItemStack): void
                    // @ts-ignore
                    public onSlotRequireEvent(e: eos.moe.dragoncore.api.gui.event.CustomPacketEvent): void
                    // @ts-ignore
                    public setItemStack(player: Player, slotIdentity: java.lang.String | string, itemStack: ItemStack): void
                    // @ts-ignore
                    public setCursorItem(player: Player, itemStack: ItemStack): void
                    // @ts-ignore
                    public static setAmount(itemStack: ItemStack, amount: number /*int*/): ItemStack
                    // @ts-ignore
                    public static checkItemStackCanPutInSlot(player: Player, slotIdentity: java.lang.String | string, itemStack: ItemStack): boolean
                }
            }
        }
    }
}
