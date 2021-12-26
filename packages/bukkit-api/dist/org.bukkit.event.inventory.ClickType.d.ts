declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * What the client did to trigger this action (not the result).
                 */
                // @ts-ignore
                class ClickType extends java.lang.Enum<org.bukkit.event.inventory.ClickType> {
                    /**
                     * The left (or primary) mouse button.
                     */
                    // @ts-ignore
                    public static readonly LEFT: org.bukkit.event.inventory.ClickType
                    /**
                     * Holding shift while pressing the left mouse button.
                     */
                    // @ts-ignore
                    public static readonly SHIFT_LEFT: org.bukkit.event.inventory.ClickType
                    /**
                     * The right mouse button.
                     */
                    // @ts-ignore
                    public static readonly RIGHT: org.bukkit.event.inventory.ClickType
                    /**
                     * Holding shift while pressing the right mouse button.
                     */
                    // @ts-ignore
                    public static readonly SHIFT_RIGHT: org.bukkit.event.inventory.ClickType
                    /**
                     * Clicking the left mouse button on the grey area around the inventory.
                     */
                    // @ts-ignore
                    public static readonly WINDOW_BORDER_LEFT: org.bukkit.event.inventory.ClickType
                    /**
                     * Clicking the right mouse button on the grey area around the inventory.
                     */
                    // @ts-ignore
                    public static readonly WINDOW_BORDER_RIGHT: org.bukkit.event.inventory.ClickType
                    /**
                     * The middle mouse button, or a "scrollwheel click".
                     */
                    // @ts-ignore
                    public static readonly MIDDLE: org.bukkit.event.inventory.ClickType
                    /**
                     * One of the number keys 1-9, correspond to slots on the hotbar.
                     */
                    // @ts-ignore
                    public static readonly NUMBER_KEY: org.bukkit.event.inventory.ClickType
                    /**
                     * Pressing the left mouse button twice in quick succession.
                     */
                    // @ts-ignore
                    public static readonly DOUBLE_CLICK: org.bukkit.event.inventory.ClickType
                    /**
                     * The "Drop" key (defaults to Q).
                     */
                    // @ts-ignore
                    public static readonly DROP: org.bukkit.event.inventory.ClickType
                    /**
                     * Holding Ctrl while pressing the "Drop" key (defaults to Q).
                     */
                    // @ts-ignore
                    public static readonly CONTROL_DROP: org.bukkit.event.inventory.ClickType
                    /**
                     * Any action done with the Creative inventory open.
                     */
                    // @ts-ignore
                    public static readonly CREATIVE: org.bukkit.event.inventory.ClickType
                    /**
                     * The "swap item with offhand" key (defaults to F).
                     */
                    // @ts-ignore
                    public static readonly SWAP_OFFHAND: org.bukkit.event.inventory.ClickType
                    /**
                     * A type of inventory manipulation not yet recognized by Bukkit.
                     * <p>
                     * This is only for transitional purposes on a new Minecraft update, and
                     * should never be relied upon.
                     * <p>
                     * Any ClickType.UNKNOWN is called on a best-effort basis.
                     */
                    // @ts-ignore
                    public static readonly UNKNOWN: org.bukkit.event.inventory.ClickType
                    // @ts-ignore
                    public static values(): org.bukkit.event.inventory.ClickType[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.bukkit.event.inventory.ClickType
                    /**
                     * Gets whether this ClickType represents the pressing of a key on a
                     * keyboard.
                     * @return true if this ClickType represents the pressing of a key
                     */
                    // @ts-ignore
                    public isKeyboardClick(): boolean
                    /**
                     * Gets whether this ClickType represents an action that can only be
                     * performed by a Player in creative mode.
                     * @return true if this action requires Creative mode
                     */
                    // @ts-ignore
                    public isCreativeAction(): boolean
                    /**
                     * Gets whether this ClickType represents a right click.
                     * @return true if this ClickType represents a right click
                     */
                    // @ts-ignore
                    public isRightClick(): boolean
                    /**
                     * Gets whether this ClickType represents a left click.
                     * @return true if this ClickType represents a left click
                     */
                    // @ts-ignore
                    public isLeftClick(): boolean
                    /**
                     * Gets whether this ClickType indicates that the shift key was pressed
                     * down when the click was made.
                     * @return true if the action uses Shift.
                     */
                    // @ts-ignore
                    public isShiftClick(): boolean
                }
            }
        }
    }
}
