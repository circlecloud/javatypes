declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * Constants used by Synth. Not all Components support all states. A
                 * Component will at least be in one of the primary states. That is, the
                 * return value from <code>SynthContext.getComponentState()</code> will at
                 * least be one of <code>ENABLED</code>, <code>MOUSE_OVER</code>,
                 * <code>PRESSED</code> or <code>DISABLED</code>, and may also contain
                 * <code>FOCUSED</code>, <code>SELECTED</code> or <code>DEFAULT</code>.
                 * @since 1.5
                 */
                // @ts-ignore
                interface SynthConstants {
                    /**
                     * Primary state indicating the component is enabled.
                     */
                    // @ts-ignore
                    readonly ENABLED: number /*int*/
                    /**
                     * Primary state indicating the mouse is over the region.
                     */
                    // @ts-ignore
                    readonly MOUSE_OVER: number /*int*/
                    /**
                     * Primary state indicating the region is in a pressed state. Pressed
                     * does not necessarily mean the user has pressed the mouse button.
                     */
                    // @ts-ignore
                    readonly PRESSED: number /*int*/
                    /**
                     * Primary state indicating the region is not enabled.
                     */
                    // @ts-ignore
                    readonly DISABLED: number /*int*/
                    /**
                     * Indicates the region has focus.
                     */
                    // @ts-ignore
                    readonly FOCUSED: number /*int*/
                    /**
                     * Indicates the region is selected.
                     */
                    // @ts-ignore
                    readonly SELECTED: number /*int*/
                    /**
                     * Indicates the region is the default. This is typically used for buttons
                     * to indicate this button is somehow special.
                     */
                    // @ts-ignore
                    readonly DEFAULT: number /*int*/
                }
            }
        }
    }
}
