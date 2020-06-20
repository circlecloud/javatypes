declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * The default theme for the {@code MetalLookAndFeel}.
                 * <p>
                 * The designers
                 * of the Metal Look and Feel strive to keep the default look up to
                 * date, possibly through the use of new themes in the future.
                 * Therefore, developers should only use this class directly when they
                 * wish to customize the "Ocean" look, or force it to be the current
                 * theme, regardless of future updates.
                 * <p>
                 * All colors returned by {@code OceanTheme} are completely
                 * opaque.
                 * @since 1.5
                 * @see MetalLookAndFeel#setCurrentTheme
                 */
                // @ts-ignore
                class OceanTheme extends javax.swing.plaf.metal.DefaultMetalTheme {
                    /**
                     * Creates an instance of <code>OceanTheme</code>
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Add this theme's custom entries to the defaults table.
                     * @param table the defaults table, non-null
                     * @throws NullPointerException if {#code table} is {@code null}
                     */
                    // @ts-ignore
                    addCustomEntriesToTable(table: javax.swing.UIDefaults): void
                    /**
                     * Return the name of this theme, "Ocean".
                     * @return "Ocean"
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Returns the primary 1 color. This returns a color with an rgb hex value
                     * of {@code 0x6382BF}.
                     * @return the primary 1 color
                     * @see java.awt.Color#decode
                     */
                    // @ts-ignore
                    getPrimary1(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary 2 color. This returns a color with an rgb hex value
                     * of {@code 0xA3B8CC}.
                     * @return the primary 2 color
                     * @see java.awt.Color#decode
                     */
                    // @ts-ignore
                    getPrimary2(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary 3 color. This returns a color with an rgb hex value
                     * of {@code 0xB8CFE5}.
                     * @return the primary 3 color
                     * @see java.awt.Color#decode
                     */
                    // @ts-ignore
                    getPrimary3(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the secondary 1 color. This returns a color with an rgb hex
                     * value of {@code 0x7A8A99}.
                     * @return the secondary 1 color
                     * @see java.awt.Color#decode
                     */
                    // @ts-ignore
                    getSecondary1(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the secondary 2 color. This returns a color with an rgb hex
                     * value of {@code 0xB8CFE5}.
                     * @return the secondary 2 color
                     * @see java.awt.Color#decode
                     */
                    // @ts-ignore
                    getSecondary2(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the secondary 3 color. This returns a color with an rgb hex
                     * value of {@code 0xEEEEEE}.
                     * @return the secondary 3 color
                     * @see java.awt.Color#decode
                     */
                    // @ts-ignore
                    getSecondary3(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the black color. This returns a color with an rgb hex
                     * value of {@code 0x333333}.
                     * @return the black color
                     * @see java.awt.Color#decode
                     */
                    // @ts-ignore
                    getBlack(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the desktop color. This returns a color with an rgb hex
                     * value of {@code 0xFFFFFF}.
                     * @return the desktop color
                     * @see java.awt.Color#decode
                     */
                    // @ts-ignore
                    getDesktopColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the inactive control text color. This returns a color with an
                     * rgb hex value of {@code 0x999999}.
                     * @return the inactive control text color
                     */
                    // @ts-ignore
                    getInactiveControlTextColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control text color. This returns a color with an
                     * rgb hex value of {@code 0x333333}.
                     * @return the control text color
                     */
                    // @ts-ignore
                    getControlTextColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the menu disabled foreground color. This returns a color with an
                     * rgb hex value of {@code 0x999999}.
                     * @return the menu disabled foreground color
                     */
                    // @ts-ignore
                    getMenuDisabledForeground(): javax.swing.plaf.ColorUIResource
                }
            }
        }
    }
}
