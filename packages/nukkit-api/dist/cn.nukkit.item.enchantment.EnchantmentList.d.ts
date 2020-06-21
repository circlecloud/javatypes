declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace enchantment {
                /**
                 * @author Nukkit Project Team
                 */
                // @ts-ignore
                class EnchantmentList extends java.lang.Object {
                    // @ts-ignore
                    constructor(size: number /*int*/)
                    /**
                     * @param slot  The index of enchantment.
                     * @param entry The given enchantment entry.
                     * @return {#link EnchantmentList}
                     */
                    // @ts-ignore
                    public setSlot(slot: number /*int*/, entry: cn.nukkit.item.enchantment.EnchantmentEntry): cn.nukkit.item.enchantment.EnchantmentList
                    // @ts-ignore
                    public getSlot(slot: number /*int*/): cn.nukkit.item.enchantment.EnchantmentEntry
                    // @ts-ignore
                    public getSize(): number /*int*/
                }
            }
        }
    }
}
