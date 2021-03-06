declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                class Action extends java.lang.Enum<org.bukkit.event.block.Action> {
                    /**
                     * Left-clicking a block
                     */
                    // @ts-ignore
                    public static readonly LEFT_CLICK_BLOCK: org.bukkit.event.block.Action
                    /**
                     * Right-clicking a block
                     */
                    // @ts-ignore
                    public static readonly RIGHT_CLICK_BLOCK: org.bukkit.event.block.Action
                    /**
                     * Left-clicking the air
                     */
                    // @ts-ignore
                    public static readonly LEFT_CLICK_AIR: org.bukkit.event.block.Action
                    /**
                     * Right-clicking the air
                     */
                    // @ts-ignore
                    public static readonly RIGHT_CLICK_AIR: org.bukkit.event.block.Action
                    /**
                     * Stepping onto or into a block (Ass-pressure)
                     * Examples:
                     * <ul>
                     * <li>Jumping on soil
                     * <li>Standing on pressure plate
                     * <li>Triggering redstone ore
                     * <li>Triggering tripwire
                     * </ul>
                     */
                    // @ts-ignore
                    public static readonly PHYSICAL: org.bukkit.event.block.Action
                    // @ts-ignore
                    public static values(): org.bukkit.event.block.Action[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.bukkit.event.block.Action
                }
            }
        }
    }
}
