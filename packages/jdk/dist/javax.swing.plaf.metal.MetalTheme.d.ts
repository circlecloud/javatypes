declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * {@code MetalTheme} provides the color palette and fonts used by
                 * the Java Look and Feel.
                 * <p>
                 * {@code MetalTheme} is abstract, see {@code DefaultMetalTheme} and
                 * {@code OceanTheme} for concrete implementations.
                 * <p>
                 * {@code MetalLookAndFeel} maintains the current theme that the
                 * the {@code ComponentUI} implementations for metal use. Refer to
                 * {@link MetalLookAndFeel#setCurrentTheme
                 * MetalLookAndFeel.setCurrentTheme(MetalTheme)} for details on changing
                 * the current theme.
                 * <p>
                 * {@code MetalTheme} provides a number of public methods for getting
                 * colors. These methods are implemented in terms of a
                 * handful of protected abstract methods. A subclass need only override
                 * the protected abstract methods ({@code getPrimary1},
                 * {@code getPrimary2}, {@code getPrimary3}, {@code getSecondary1},
                 * {@code getSecondary2}, and {@code getSecondary3}); although a subclass
                 * may override the other public methods for more control over the set of
                 * colors that are used.
                 * <p>
                 * Concrete implementations of {@code MetalTheme} must return {@code non-null}
                 * values from all methods. While the behavior of returning {@code null} is
                 * not specified, returning {@code null} will result in incorrect behavior.
                 * <p>
                 * It is strongly recommended that subclasses return completely opaque colors.
                 * To do otherwise may result in rendering problems, such as visual garbage.
                 * @see DefaultMetalTheme
                 * @see OceanTheme
                 * @see MetalLookAndFeel#setCurrentTheme
                 * @author Steve Wilson
                 */
                // @ts-ignore
                class MetalTheme extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns the name of this theme.
                     * @return the name of this theme
                     */
                    // @ts-ignore
                    abstract getName(): java.lang.String
                    /**
                     * Returns the primary 1 color.
                     * @return the primary 1 color
                     */
                    // @ts-ignore
                    abstract getPrimary1(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary 2 color.
                     * @return the primary 2 color
                     */
                    // @ts-ignore
                    abstract getPrimary2(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary 3 color.
                     * @return the primary 3 color
                     */
                    // @ts-ignore
                    abstract getPrimary3(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the secondary 1 color.
                     * @return the secondary 1 color
                     */
                    // @ts-ignore
                    abstract getSecondary1(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the secondary 2 color.
                     * @return the secondary 2 color
                     */
                    // @ts-ignore
                    abstract getSecondary2(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the secondary 3 color.
                     * @return the secondary 3 color
                     */
                    // @ts-ignore
                    abstract getSecondary3(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control text font.
                     * @return the control text font
                     */
                    // @ts-ignore
                    abstract getControlTextFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the system text font.
                     * @return the system text font
                     */
                    // @ts-ignore
                    abstract getSystemTextFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the user text font.
                     * @return the user text font
                     */
                    // @ts-ignore
                    abstract getUserTextFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the menu text font.
                     * @return the menu text font
                     */
                    // @ts-ignore
                    abstract getMenuTextFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the window title font.
                     * @return the window title font
                     */
                    // @ts-ignore
                    abstract getWindowTitleFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the sub-text font.
                     * @return the sub-text font
                     */
                    // @ts-ignore
                    abstract getSubTextFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the white color. This returns opaque white
                     * ({@code 0xFFFFFFFF}).
                     * @return the white color
                     */
                    // @ts-ignore
                    getWhite(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the black color. This returns opaque black
                     * ({@code 0xFF000000}).
                     * @return the black color
                     */
                    // @ts-ignore
                    getBlack(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the focus color. This returns the value of
                     * {@code getPrimary2()}.
                     * @return the focus color
                     */
                    // @ts-ignore
                    getFocusColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the desktop color. This returns the value of
                     * {@code getPrimary2()}.
                     * @return the desktop color
                     */
                    // @ts-ignore
                    getDesktopColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control color. This returns the value of
                     * {@code getSecondary3()}.
                     * @return the control color
                     */
                    // @ts-ignore
                    getControl(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control shadow color. This returns
                     * the value of {@code getSecondary2()}.
                     * @return the control shadow color
                     */
                    // @ts-ignore
                    getControlShadow(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control dark shadow color. This returns
                     * the value of {@code getSecondary1()}.
                     * @return the control dark shadow color
                     */
                    // @ts-ignore
                    getControlDarkShadow(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control info color. This returns
                     * the value of {@code getBlack()}.
                     * @return the control info color
                     */
                    // @ts-ignore
                    getControlInfo(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control highlight color. This returns
                     * the value of {@code getWhite()}.
                     * @return the control highlight color
                     */
                    // @ts-ignore
                    getControlHighlight(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control disabled color. This returns
                     * the value of {@code getSecondary2()}.
                     * @return the control disabled color
                     */
                    // @ts-ignore
                    getControlDisabled(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary control color. This returns
                     * the value of {@code getPrimary3()}.
                     * @return the primary control color
                     */
                    // @ts-ignore
                    getPrimaryControl(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary control shadow color. This returns
                     * the value of {@code getPrimary2()}.
                     * @return the primary control shadow color
                     */
                    // @ts-ignore
                    getPrimaryControlShadow(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary control dark shadow color. This
                     * returns the value of {@code getPrimary1()}.
                     * @return the primary control dark shadow color
                     */
                    // @ts-ignore
                    getPrimaryControlDarkShadow(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary control info color. This
                     * returns the value of {@code getBlack()}.
                     * @return the primary control info color
                     */
                    // @ts-ignore
                    getPrimaryControlInfo(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary control highlight color. This
                     * returns the value of {@code getWhite()}.
                     * @return the primary control highlight color
                     */
                    // @ts-ignore
                    getPrimaryControlHighlight(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the system text color. This returns the value of
                     * {@code getBlack()}.
                     * @return the system text color
                     */
                    // @ts-ignore
                    getSystemTextColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control text color. This returns the value of
                     * {@code getControlInfo()}.
                     * @return the control text color
                     */
                    // @ts-ignore
                    getControlTextColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the inactive control text color. This returns the value of
                     * {@code getControlDisabled()}.
                     * @return the inactive control text color
                     */
                    // @ts-ignore
                    getInactiveControlTextColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the inactive system text color. This returns the value of
                     * {@code getSecondary2()}.
                     * @return the inactive system text color
                     */
                    // @ts-ignore
                    getInactiveSystemTextColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the user text color. This returns the value of
                     * {@code getBlack()}.
                     * @return the user text color
                     */
                    // @ts-ignore
                    getUserTextColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the text highlight color. This returns the value of
                     * {@code getPrimary3()}.
                     * @return the text highlight color
                     */
                    // @ts-ignore
                    getTextHighlightColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the highlighted text color. This returns the value of
                     * {@code getControlTextColor()}.
                     * @return the highlighted text color
                     */
                    // @ts-ignore
                    getHighlightedTextColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the window background color. This returns the value of
                     * {@code getWhite()}.
                     * @return the window background color
                     */
                    // @ts-ignore
                    getWindowBackground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the window title background color. This returns the value of
                     * {@code getPrimary3()}.
                     * @return the window title background color
                     */
                    // @ts-ignore
                    getWindowTitleBackground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the window title foreground color. This returns the value of
                     * {@code getBlack()}.
                     * @return the window title foreground color
                     */
                    // @ts-ignore
                    getWindowTitleForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the window title inactive background color. This
                     * returns the value of {@code getSecondary3()}.
                     * @return the window title inactive background color
                     */
                    // @ts-ignore
                    getWindowTitleInactiveBackground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the window title inactive foreground color. This
                     * returns the value of {@code getBlack()}.
                     * @return the window title inactive foreground color
                     */
                    // @ts-ignore
                    getWindowTitleInactiveForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the menu background color. This
                     * returns the value of {@code getSecondary3()}.
                     * @return the menu background color
                     */
                    // @ts-ignore
                    getMenuBackground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the menu foreground color. This
                     * returns the value of {@code getBlack()}.
                     * @return the menu foreground color
                     */
                    // @ts-ignore
                    getMenuForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the menu selected background color. This
                     * returns the value of {@code getPrimary2()}.
                     * @return the menu selected background color
                     */
                    // @ts-ignore
                    getMenuSelectedBackground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the menu selected foreground color. This
                     * returns the value of {@code getBlack()}.
                     * @return the menu selected foreground color
                     */
                    // @ts-ignore
                    getMenuSelectedForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the menu disabled foreground color. This
                     * returns the value of {@code getSecondary2()}.
                     * @return the menu disabled foreground color
                     */
                    // @ts-ignore
                    getMenuDisabledForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the separator background color. This
                     * returns the value of {@code getWhite()}.
                     * @return the separator background color
                     */
                    // @ts-ignore
                    getSeparatorBackground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the separator foreground color. This
                     * returns the value of {@code getPrimary1()}.
                     * @return the separator foreground color
                     */
                    // @ts-ignore
                    getSeparatorForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the accelerator foreground color. This
                     * returns the value of {@code getPrimary1()}.
                     * @return the accelerator foreground color
                     */
                    // @ts-ignore
                    getAcceleratorForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the accelerator selected foreground color. This
                     * returns the value of {@code getBlack()}.
                     * @return the accelerator selected foreground color
                     */
                    // @ts-ignore
                    getAcceleratorSelectedForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Adds values specific to this theme to the defaults table. This method
                     * is invoked when the look and feel defaults are obtained from
                     * {@code MetalLookAndFeel}.
                     * <p>
                     * This implementation does nothing; it is provided for subclasses
                     * that wish to customize the defaults table.
                     * @param table the {#code UIDefaults} to add the values to
                     * @see MetalLookAndFeel#getDefaults
                     */
                    // @ts-ignore
                    addCustomEntriesToTable(table: javax.swing.UIDefaults): void
                }
            }
        }
    }
}
