declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * What the client did to trigger this action (not the result).
                 */
                // @ts-ignore
                class ClickType extends java.lang.Enum<org.bukkit.event.inventory.ClickType> {
                    // @ts-ignore
                    values(): org.bukkit.event.inventory.ClickType[]
                    // @ts-ignore
                    valueOf(name: string): org.bukkit.event.inventory.ClickType
                    /**
                     * Gets whether this ClickType represents the pressing of a key on a
                     * keyboard.
                     * @return true if this ClickType represents the pressing of a key
                     */
                    // @ts-ignore
                    isKeyboardClick(): boolean
                    /**
                     * Gets whether this ClickType represents an action that can only be
                     * performed by a Player in creative mode.
                     * @return true if this action requires Creative mode
                     */
                    // @ts-ignore
                    isCreativeAction(): boolean
                    /**
                     * Gets whether this ClickType represents a right click.
                     * @return true if this ClickType represents a right click
                     */
                    // @ts-ignore
                    isRightClick(): boolean
                    /**
                     * Gets whether this ClickType represents a left click.
                     * @return true if this ClickType represents a left click
                     */
                    // @ts-ignore
                    isLeftClick(): boolean
                    /**
                     * Gets whether this ClickType indicates that the shift key was pressed
                     * down when the click was made.
                     * @return true if the action uses Shift.
                     */
                    // @ts-ignore
                    isShiftClick(): boolean
                }
            }
        }
    }
}
