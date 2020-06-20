declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * The Java Look and Feel, otherwise known as Metal.
                 * <p>
                 * Each of the {@code ComponentUI}s provided by {@code
                 * MetalLookAndFeel} derives its behavior from the defaults
                 * table. Unless otherwise noted each of the {@code ComponentUI}
                 * implementations in this package document the set of defaults they
                 * use. Unless otherwise noted the defaults are installed at the time
                 * {@code installUI} is invoked, and follow the recommendations
                 * outlined in {@code LookAndFeel} for installing defaults.
                 * <p>
                 * {@code MetalLookAndFeel} derives it's color palette and fonts from
                 * {@code MetalTheme}. The default theme is {@code OceanTheme}. The theme
                 * can be changed using the {@code setCurrentTheme} method, refer to it
                 * for details on changing the theme. Prior to 1.5 the default
                 * theme was {@code DefaultMetalTheme}. The system property
                 * {@code "swing.metalTheme"} can be set to {@code "steel"} to indicate
                 * the default should be {@code DefaultMetalTheme}.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @see MetalTheme
                 * @see DefaultMetalTheme
                 * @see OceanTheme
                 * @author Steve Wilson
                 */
                // @ts-ignore
                class MetalLookAndFeel extends javax.swing.plaf.basic.BasicLookAndFeel {
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns the name of this look and feel. This returns
                     * {@code "Metal"}.
                     * @return the name of this look and feel
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Returns an identifier for this look and feel. This returns
                     * {@code "Metal"}.
                     * @return the identifier of this look and feel
                     */
                    // @ts-ignore
                    getID(): java.lang.String
                    /**
                     * Returns a short description of this look and feel. This returns
                     * {@code "The Java(tm) Look and Feel"}.
                     * @return a short description for the look and feel
                     */
                    // @ts-ignore
                    getDescription(): java.lang.String
                    /**
                     * Returns {@code false}; {@code MetalLookAndFeel} is not a native
                     * look and feel.
                     * @return {#code false}
                     */
                    // @ts-ignore
                    isNativeLookAndFeel(): boolean
                    /**
                     * Returns {@code true}; {@code MetalLookAndFeel} can be run on
                     * any platform.
                     * @return {#code true}
                     */
                    // @ts-ignore
                    isSupportedLookAndFeel(): boolean
                    /**
                     * Returns {@code true}; metal can provide {@code Window}
                     * decorations.
                     * @return {#code true}
                     * @see JDialog#setDefaultLookAndFeelDecorated
                     * @see JFrame#setDefaultLookAndFeelDecorated
                     * @see JRootPane#setWindowDecorationStyle
                     * @since 1.4
                     */
                    // @ts-ignore
                    getSupportsWindowDecorations(): boolean
                    /**
                     * Populates {@code table} with mappings from {@code uiClassID} to
                     * the fully qualified name of the ui class. {@code
                     * MetalLookAndFeel} registers an entry for each of the classes in
                     * the package {@code javax.swing.plaf.metal} that are named
                     * MetalXXXUI. The string {@code XXX} is one of Swing's uiClassIDs. For
                     * the {@code uiClassIDs} that do not have a class in metal, the
                     * corresponding class in {@code javax.swing.plaf.basic} is
                     * used. For example, metal does not have a class named {@code
                     * "MetalColorChooserUI"}, as such, {@code
                     * javax.swing.plaf.basic.BasicColorChooserUI} is used.
                     * @param table the {#code UIDefaults} instance the entries are
                     *         added to
                     * @throws NullPointerException if {#code table} is {@code null}
                     * @see javax.swing.plaf.basic.BasicLookAndFeel#initClassDefaults
                     */
                    // @ts-ignore
                    initClassDefaults(table: javax.swing.UIDefaults): void
                    /**
                     * Populates {@code table} with system colors. The following values are
                     * added to {@code table}:
                     * <table border="1" cellpadding="1" cellspacing="0"
                     * summary="Metal's system color mapping">
                     * <tr valign="top"  align="left">
                     * <th style="background-color:#CCCCFF" align="left">Key
                     * <th style="background-color:#CCCCFF" align="left">Value
                     * <tr valign="top"  align="left">
                     * <td>"desktop"
                     * <td>{@code theme.getDesktopColor()}
                     * <tr valign="top"  align="left">
                     * <td>"activeCaption"
                     * <td>{@code theme.getWindowTitleBackground()}
                     * <tr valign="top"  align="left">
                     * <td>"activeCaptionText"
                     * <td>{@code theme.getWindowTitleForeground()}
                     * <tr valign="top"  align="left">
                     * <td>"activeCaptionBorder"
                     * <td>{@code theme.getPrimaryControlShadow()}
                     * <tr valign="top"  align="left">
                     * <td>"inactiveCaption"
                     * <td>{@code theme.getWindowTitleInactiveBackground()}
                     * <tr valign="top"  align="left">
                     * <td>"inactiveCaptionText"
                     * <td>{@code theme.getWindowTitleInactiveForeground()}
                     * <tr valign="top"  align="left">
                     * <td>"inactiveCaptionBorder"
                     * <td>{@code theme.getControlShadow()}
                     * <tr valign="top"  align="left">
                     * <td>"window"
                     * <td>{@code theme.getWindowBackground()}
                     * <tr valign="top"  align="left">
                     * <td>"windowBorder"
                     * <td>{@code theme.getControl()}
                     * <tr valign="top"  align="left">
                     * <td>"windowText"
                     * <td>{@code theme.getUserTextColor()}
                     * <tr valign="top"  align="left">
                     * <td>"menu"
                     * <td>{@code theme.getMenuBackground()}
                     * <tr valign="top"  align="left">
                     * <td>"menuText"
                     * <td>{@code theme.getMenuForeground()}
                     * <tr valign="top"  align="left">
                     * <td>"text"
                     * <td>{@code theme.getWindowBackground()}
                     * <tr valign="top"  align="left">
                     * <td>"textText"
                     * <td>{@code theme.getUserTextColor()}
                     * <tr valign="top"  align="left">
                     * <td>"textHighlight"
                     * <td>{@code theme.getTextHighlightColor()}
                     * <tr valign="top"  align="left">
                     * <td>"textHighlightText"
                     * <td>{@code theme.getHighlightedTextColor()}
                     * <tr valign="top"  align="left">
                     * <td>"textInactiveText"
                     * <td>{@code theme.getInactiveSystemTextColor()}
                     * <tr valign="top"  align="left">
                     * <td>"control"
                     * <td>{@code theme.getControl()}
                     * <tr valign="top"  align="left">
                     * <td>"controlText"
                     * <td>{@code theme.getControlTextColor()}
                     * <tr valign="top"  align="left">
                     * <td>"controlHighlight"
                     * <td>{@code theme.getControlHighlight()}
                     * <tr valign="top"  align="left">
                     * <td>"controlLtHighlight"
                     * <td>{@code theme.getControlHighlight()}
                     * <tr valign="top"  align="left">
                     * <td>"controlShadow"
                     * <td>{@code theme.getControlShadow()}
                     * <tr valign="top"  align="left">
                     * <td>"controlDkShadow"
                     * <td>{@code theme.getControlDarkShadow()}
                     * <tr valign="top"  align="left">
                     * <td>"scrollbar"
                     * <td>{@code theme.getControl()}
                     * <tr valign="top"  align="left">
                     * <td>"info"
                     * <td>{@code theme.getPrimaryControl()}
                     * <tr valign="top"  align="left">
                     * <td>"infoText"
                     * <td>{@code theme.getPrimaryControlInfo()}
                     * </table>
                     * The value {@code theme} corresponds to the current {@code MetalTheme}.
                     * @param table the {#code UIDefaults} object the values are added to
                     * @throws NullPointerException if {#code table} is {@code null}
                     */
                    // @ts-ignore
                    initSystemColorDefaults(table: javax.swing.UIDefaults): void
                    /**
                     * Populates {@code table} with the defaults for metal.
                     * @param table the {#code UIDefaults} to add the values to
                     * @throws NullPointerException if {#code table} is {@code null}
                     */
                    // @ts-ignore
                    initComponentDefaults(table: javax.swing.UIDefaults): void
                    /**
                     * Ensures the current {@code MetalTheme} is {@code non-null}. This is
                     * a cover method for {@code getCurrentTheme}.
                     * @see #getCurrentTheme
                     */
                    // @ts-ignore
                    createDefaultTheme(): void
                    /**
                     * Returns the look and feel defaults. This invokes, in order,
                     * {@code createDefaultTheme()}, {@code super.getDefaults()} and
                     * {@code getCurrentTheme().addCustomEntriesToTable(table)}.
                     * <p>
                     * While this method is public, it should only be invoked by the
                     * {@code UIManager} when the look and feel is set as the current
                     * look and feel and after {@code initialize} has been invoked.
                     * @return the look and feel defaults
                     * @see #createDefaultTheme
                     * @see javax.swing.plaf.basic.BasicLookAndFeel#getDefaults()
                     * @see MetalTheme#addCustomEntriesToTable(UIDefaults)
                     */
                    // @ts-ignore
                    getDefaults(): javax.swing.UIDefaults
                    /**
                     * {@inheritDoc}
                     * @since 1.4
                     */
                    // @ts-ignore
                    provideErrorFeedback(component: java.awt.Component): void
                    /**
                     * Set the theme used by <code>MetalLookAndFeel</code>.
                     * <p>
                     * After the theme is set, {@code MetalLookAndFeel} needs to be
                     * re-installed and the uis need to be recreated. The following
                     * shows how to do this:
                     * <pre>
                     * MetalLookAndFeel.setCurrentTheme(theme);
                     * // re-install the Metal Look and Feel
                     * UIManager.setLookAndFeel(new MetalLookAndFeel());
                     * // Update the ComponentUIs for all Components. This
                     * // needs to be invoked for all windows.
                     * SwingUtilities.updateComponentTreeUI(rootComponent);
                     * </pre>
                     * If this is not done the results are undefined.
                     * @param theme the theme to use
                     * @throws NullPointerException if {#code theme} is {@code null}
                     * @see #getCurrentTheme
                     */
                    // @ts-ignore
                    setCurrentTheme(theme: javax.swing.plaf.metal.MetalTheme): void
                    /**
                     * Return the theme currently being used by <code>MetalLookAndFeel</code>.
                     * If the current theme is {@code null}, the default theme is created.
                     * @return the current theme
                     * @see #setCurrentTheme
                     * @since 1.5
                     */
                    // @ts-ignore
                    getCurrentTheme(): javax.swing.plaf.metal.MetalTheme
                    /**
                     * Returns an <code>Icon</code> with a disabled appearance.
                     * This method is used to generate a disabled <code>Icon</code> when
                     * one has not been specified.  For example, if you create a
                     * <code>JButton</code> and only specify an <code>Icon</code> via
                     * <code>setIcon</code> this method will be called to generate the
                     * disabled <code>Icon</code>. If null is passed as <code>icon</code>
                     * this method returns null.
                     * <p>
                     * Some look and feels might not render the disabled Icon, in which
                     * case they will ignore this.
                     * @param component JComponent that will display the Icon, may be null
                     * @param icon Icon to generate disable icon from.
                     * @return Disabled icon, or null if a suitable Icon can not be
                     *          generated.
                     * @since 1.5
                     */
                    // @ts-ignore
                    getDisabledIcon(component: javax.swing.JComponent, icon: javax.swing.Icon): javax.swing.Icon
                    /**
                     * Returns an <code>Icon</code> for use by disabled
                     * components that are also selected. This method is used to generate an
                     * <code>Icon</code> for components that are in both the disabled and
                     * selected states but do not have a specific <code>Icon</code> for this
                     * state.  For example, if you create a <code>JButton</code> and only
                     * specify an <code>Icon</code> via <code>setIcon</code> this method
                     * will be called to generate the disabled and selected
                     * <code>Icon</code>. If null is passed as <code>icon</code> this method
                     * returns null.
                     * <p>
                     * Some look and feels might not render the disabled and selected Icon,
                     * in which case they will ignore this.
                     * @param component JComponent that will display the Icon, may be null
                     * @param icon Icon to generate disabled and selected icon from.
                     * @return Disabled and Selected icon, or null if a suitable Icon can not
                     *          be generated.
                     * @since 1.5
                     */
                    // @ts-ignore
                    getDisabledSelectedIcon(component: javax.swing.JComponent, icon: javax.swing.Icon): javax.swing.Icon
                    /**
                     * Returns the control text font of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getControlTextColor()}.
                     * @return the control text font
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getControlTextFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the system text font of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getSystemTextFont()}.
                     * @return the system text font
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getSystemTextFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the user text font of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getUserTextFont()}.
                     * @return the user text font
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getUserTextFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the menu text font of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getMenuTextFont()}.
                     * @return the menu text font
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getMenuTextFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the window title font of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getWindowTitleFont()}.
                     * @return the window title font
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getWindowTitleFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the sub-text font of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getSubTextFont()}.
                     * @return the sub-text font
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getSubTextFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the desktop color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getDesktopColor()}.
                     * @return the desktop color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getDesktopColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the focus color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getFocusColor()}.
                     * @return the focus color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getFocusColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the white color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getWhite()}.
                     * @return the white color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getWhite(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the black color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getBlack()}.
                     * @return the black color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getBlack(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getControl()}.
                     * @return the control color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getControl(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control shadow color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getControlShadow()}.
                     * @return the control shadow color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getControlShadow(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control dark shadow color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getControlDarkShadow()}.
                     * @return the control dark shadow color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getControlDarkShadow(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control info color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getControlInfo()}.
                     * @return the control info color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getControlInfo(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control highlight color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getControlHighlight()}.
                     * @return the control highlight color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getControlHighlight(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control disabled color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getControlDisabled()}.
                     * @return the control disabled color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getControlDisabled(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary control color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getPrimaryControl()}.
                     * @return the primary control color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getPrimaryControl(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary control shadow color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getPrimaryControlShadow()}.
                     * @return the primary control shadow color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getPrimaryControlShadow(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary control dark shadow color of the current
                     * theme. This is a cover method for {@code
                     * getCurrentTheme().getPrimaryControlDarkShadow()}.
                     * @return the primary control dark shadow color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getPrimaryControlDarkShadow(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary control info color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getPrimaryControlInfo()}.
                     * @return the primary control info color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getPrimaryControlInfo(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary control highlight color of the current
                     * theme. This is a cover method for {@code
                     * getCurrentTheme().getPrimaryControlHighlight()}.
                     * @return the primary control highlight color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getPrimaryControlHighlight(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the system text color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getSystemTextColor()}.
                     * @return the system text color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getSystemTextColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control text color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getControlTextColor()}.
                     * @return the control text color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getControlTextColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the inactive control text color of the current theme. This is a
                     * cover method for {@code
                     * getCurrentTheme().getInactiveControlTextColor()}.
                     * @return the inactive control text color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getInactiveControlTextColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the inactive system text color of the current theme. This is a
                     * cover method for {@code
                     * getCurrentTheme().getInactiveSystemTextColor()}.
                     * @return the inactive system text color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getInactiveSystemTextColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the user text color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getUserTextColor()}.
                     * @return the user text color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getUserTextColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the text highlight color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getTextHighlightColor()}.
                     * @return the text highlight color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getTextHighlightColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the highlighted text color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getHighlightedTextColor()}.
                     * @return the highlighted text color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getHighlightedTextColor(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the window background color of the current theme. This is a
                     * cover method for {@code getCurrentTheme().getWindowBackground()}.
                     * @return the window background color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getWindowBackground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the window title background color of the current
                     * theme. This is a cover method for {@code
                     * getCurrentTheme().getWindowTitleBackground()}.
                     * @return the window title background color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getWindowTitleBackground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the window title foreground color of the current
                     * theme. This is a cover method for {@code
                     * getCurrentTheme().getWindowTitleForeground()}.
                     * @return the window title foreground color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getWindowTitleForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the window title inactive background color of the current
                     * theme. This is a cover method for {@code
                     * getCurrentTheme().getWindowTitleInactiveBackground()}.
                     * @return the window title inactive background color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getWindowTitleInactiveBackground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the window title inactive foreground color of the current
                     * theme. This is a cover method for {@code
                     * getCurrentTheme().getWindowTitleInactiveForeground()}.
                     * @return the window title inactive foreground color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getWindowTitleInactiveForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the menu background color of the current theme. This is
                     * a cover method for {@code getCurrentTheme().getMenuBackground()}.
                     * @return the menu background color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getMenuBackground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the menu foreground color of the current theme. This is
                     * a cover method for {@code getCurrentTheme().getMenuForeground()}.
                     * @return the menu foreground color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getMenuForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the menu selected background color of the current theme. This is
                     * a cover method for
                     * {@code getCurrentTheme().getMenuSelectedBackground()}.
                     * @return the menu selected background color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getMenuSelectedBackground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the menu selected foreground color of the current theme. This is
                     * a cover method for
                     * {@code getCurrentTheme().getMenuSelectedForeground()}.
                     * @return the menu selected foreground color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getMenuSelectedForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the menu disabled foreground color of the current theme. This is
                     * a cover method for
                     * {@code getCurrentTheme().getMenuDisabledForeground()}.
                     * @return the menu disabled foreground color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getMenuDisabledForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the separator background color of the current theme. This is
                     * a cover method for {@code getCurrentTheme().getSeparatorBackground()}.
                     * @return the separator background color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getSeparatorBackground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the separator foreground color of the current theme. This is
                     * a cover method for {@code getCurrentTheme().getSeparatorForeground()}.
                     * @return the separator foreground color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getSeparatorForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the accelerator foreground color of the current theme. This is
                     * a cover method for {@code getCurrentTheme().getAcceleratorForeground()}.
                     * @return the separator accelerator foreground color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getAcceleratorForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the accelerator selected foreground color of the
                     * current theme. This is a cover method for {@code
                     * getCurrentTheme().getAcceleratorSelectedForeground()}.
                     * @return the accelerator selected foreground color
                     * @see MetalTheme
                     */
                    // @ts-ignore
                    getAcceleratorSelectedForeground(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns a {@code LayoutStyle} implementing the Java look and feel
                     * design guidelines as specified at
                     * <a href="http://www.oracle.com/technetwork/java/hig-136467.html">http://www.oracle.com/technetwork/java/hig-136467.html</a>.
                     * @return LayoutStyle implementing the Java look and feel design
                     *          guidelines
                     * @since 1.6
                     */
                    // @ts-ignore
                    getLayoutStyle(): javax.swing.LayoutStyle
                }
            }
        }
    }
}
