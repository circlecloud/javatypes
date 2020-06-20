declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * A concrete implementation of {@code MetalTheme} providing
                 * the original look of the Java Look and Feel, code-named "Steel". Refer
                 * to {@link MetalLookAndFeel#setCurrentTheme} for details on changing
                 * the default theme.
                 * <p>
                 * All colors returned by {@code DefaultMetalTheme} are completely
                 * opaque.
                 * <h3><a name="fontStyle"></a>Font Style</h3>
                 * {@code DefaultMetalTheme} uses bold fonts for many controls.  To make all
                 * controls (with the exception of the internal frame title bars and
                 * client decorated frame title bars) use plain fonts you can do either of
                 * the following:
                 * <ul>
                 * <li>Set the system property <code>swing.boldMetal</code> to
                 * <code>false</code>.  For example,
                 * <code>java&nbsp;-Dswing.boldMetal=false&nbsp;MyApp</code>.
                 * <li>Set the defaults property <code>swing.boldMetal</code> to
                 * <code>Boolean.FALSE</code>.  For example:
                 * <code>UIManager.put("swing.boldMetal",&nbsp;Boolean.FALSE);</code>
                 * </ul>
                 * The defaults property <code>swing.boldMetal</code>, if set,
                 * takes precedence over the system property of the same name. After
                 * setting this defaults property you need to re-install
                 * <code>MetalLookAndFeel</code>, as well as update the UI
                 * of any previously created widgets. Otherwise the results are undefined.
                 * The following illustrates how to do this:
                 * <pre>
                 * // turn off bold fonts
                 * UIManager.put("swing.boldMetal", Boolean.FALSE);
                 * // re-install the Metal Look and Feel
                 * UIManager.setLookAndFeel(new MetalLookAndFeel());
                 * // Update the ComponentUIs for all Components. This
                 * // needs to be invoked for all windows.
                 * SwingUtilities.updateComponentTreeUI(rootComponent);
                 * </pre>
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @see MetalLookAndFeel
                 * @see MetalLookAndFeel#setCurrentTheme
                 * @author Steve Wilson
                 */
                // @ts-ignore
                class DefaultMetalTheme extends javax.swing.plaf.metal.MetalTheme {
                    /**
                     * Creates and returns an instance of {@code DefaultMetalTheme}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns the name of this theme. This returns {@code "Steel"}.
                     * @return the name of this theme.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Returns the primary 1 color. This returns a color with rgb values
                     * of 102, 102, and 153, respectively.
                     * @return the primary 1 color
                     */
                    // @ts-ignore
                    getPrimary1(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary 2 color. This returns a color with rgb values
                     * of 153, 153, 204, respectively.
                     * @return the primary 2 color
                     */
                    // @ts-ignore
                    getPrimary2(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the primary 3 color. This returns a color with rgb values
                     * 204, 204, 255, respectively.
                     * @return the primary 3 color
                     */
                    // @ts-ignore
                    getPrimary3(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the secondary 1 color. This returns a color with rgb values
                     * 102, 102, and 102, respectively.
                     * @return the secondary 1 color
                     */
                    // @ts-ignore
                    getSecondary1(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the secondary 2 color. This returns a color with rgb values
                     * 153, 153, and 153, respectively.
                     * @return the secondary 2 color
                     */
                    // @ts-ignore
                    getSecondary2(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the secondary 3 color. This returns a color with rgb values
                     * 204, 204, and 204, respectively.
                     * @return the secondary 3 color
                     */
                    // @ts-ignore
                    getSecondary3(): javax.swing.plaf.ColorUIResource
                    /**
                     * Returns the control text font. This returns Dialog, 12pt. If
                     * plain fonts have been enabled as described in <a href="#fontStyle">
                     * font style</a>, the font style is plain. Otherwise the font style is
                     * bold.
                     * @return the control text font
                     */
                    // @ts-ignore
                    getControlTextFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the system text font. This returns Dialog, 12pt, plain.
                     * @return the system text font
                     */
                    // @ts-ignore
                    getSystemTextFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the user text font. This returns Dialog, 12pt, plain.
                     * @return the user text font
                     */
                    // @ts-ignore
                    getUserTextFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the menu text font. This returns Dialog, 12pt. If
                     * plain fonts have been enabled as described in <a href="#fontStyle">
                     * font style</a>, the font style is plain. Otherwise the font style is
                     * bold.
                     * @return the menu text font
                     */
                    // @ts-ignore
                    getMenuTextFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the window title font. This returns Dialog, 12pt, bold.
                     * @return the window title font
                     */
                    // @ts-ignore
                    getWindowTitleFont(): javax.swing.plaf.FontUIResource
                    /**
                     * Returns the sub-text font. This returns Dialog, 10pt, plain.
                     * @return the sub-text font
                     */
                    // @ts-ignore
                    getSubTextFont(): javax.swing.plaf.FontUIResource
                }
            }
        }
    }
}
