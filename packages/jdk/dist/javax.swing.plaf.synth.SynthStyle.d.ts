declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * <code>SynthStyle</code> is a set of style properties.
                 * Each <code>SynthUI</code> references at least one
                 * <code>SynthStyle</code> that is obtained using a
                 * <code>SynthStyleFactory</code>. You typically don't need to interact with
                 * this class directly, rather you will load a
                 * <a href="doc-files/synthFileFormat.html">Synth File Format file</a> into
                 * <code>SynthLookAndFeel</code> that will create a set of SynthStyles.
                 * @see SynthLookAndFeel
                 * @see SynthStyleFactory
                 * @since 1.5
                 * @author Scott Violet
                 */
                // @ts-ignore
                class SynthStyle extends java.lang.Object {
                    /**
                     * Constructs a SynthStyle.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns the <code>SynthGraphicUtils</code> for the specified context.
                     * @param context SynthContext identifying requester
                     * @return SynthGraphicsUtils
                     */
                    // @ts-ignore
                    getGraphicsUtils(context: javax.swing.plaf.synth.SynthContext): javax.swing.plaf.synth.SynthGraphicsUtils
                    /**
                     * Returns the color for the specified state. This gives precedence to
                     * foreground and background of the <code>JComponent</code>. If the
                     * <code>Color</code> from the <code>JComponent</code> is not appropriate,
                     * or not used, this will invoke <code>getColorForState</code>. Subclasses
                     * should generally not have to override this, instead override
                     * {@link #getColorForState}.
                     * @param context SynthContext identifying requester
                     * @param type Type of color being requested.
                     * @return Color
                     */
                    // @ts-ignore
                    getColor(context: javax.swing.plaf.synth.SynthContext, type: javax.swing.plaf.synth.ColorType): java.awt.Color
                    /**
                     * Returns the color for the specified state. This should NOT call any
                     * methods on the <code>JComponent</code>.
                     * @param context SynthContext identifying requester
                     * @param type Type of color being requested.
                     * @return Color to render with
                     */
                    // @ts-ignore
                    abstract getColorForState(context: javax.swing.plaf.synth.SynthContext, type: javax.swing.plaf.synth.ColorType): java.awt.Color
                    /**
                     * Returns the Font for the specified state. This redirects to the
                     * <code>JComponent</code> from the <code>context</code> as necessary.
                     * If this does not redirect
                     * to the JComponent {@link #getFontForState} is invoked.
                     * @param context SynthContext identifying requester
                     * @return Font to render with
                     */
                    // @ts-ignore
                    getFont(context: javax.swing.plaf.synth.SynthContext): java.awt.Font
                    /**
                     * Returns the font for the specified state. This should NOT call any
                     * method on the <code>JComponent</code>.
                     * @param context SynthContext identifying requester
                     * @return Font to render with
                     */
                    // @ts-ignore
                    abstract getFontForState(context: javax.swing.plaf.synth.SynthContext): java.awt.Font
                    /**
                     * Returns the Insets that are used to calculate sizing information.
                     * @param context SynthContext identifying requester
                     * @param insets Insets to place return value in.
                     * @return Sizing Insets.
                     */
                    // @ts-ignore
                    getInsets(context: javax.swing.plaf.synth.SynthContext, insets: java.awt.Insets): java.awt.Insets
                    /**
                     * Returns the <code>SynthPainter</code> that will be used for painting.
                     * This may return null.
                     * @param context SynthContext identifying requester
                     * @return SynthPainter to use
                     */
                    // @ts-ignore
                    getPainter(context: javax.swing.plaf.synth.SynthContext): javax.swing.plaf.synth.SynthPainter
                    /**
                     * Returns true if the region is opaque.
                     * @param context SynthContext identifying requester
                     * @return true if region is opaque.
                     */
                    // @ts-ignore
                    isOpaque(context: javax.swing.plaf.synth.SynthContext): boolean
                    /**
                     * Getter for a region specific style property.
                     * @param context SynthContext identifying requester
                     * @param key Property being requested.
                     * @return Value of the named property
                     */
                    // @ts-ignore
                    get(context: javax.swing.plaf.synth.SynthContext, key: any): java.lang.Object
                    /**
                     * Installs the necessary state from this Style on the
                     * <code>JComponent</code> from <code>context</code>.
                     * @param context SynthContext identifying component to install properties
                     *         to.
                     */
                    // @ts-ignore
                    installDefaults(context: javax.swing.plaf.synth.SynthContext): void
                    /**
                     * Uninstalls any state that this style installed on
                     * the <code>JComponent</code> from <code>context</code>.
                     * <p>
                     * Styles should NOT depend upon this being called, in certain cases
                     * it may never be called.
                     * @param context SynthContext identifying component to install properties
                     *         to.
                     */
                    // @ts-ignore
                    uninstallDefaults(context: javax.swing.plaf.synth.SynthContext): void
                    /**
                     * Convenience method to get a specific style property whose value is
                     * a <code>Number</code>. If the value is a <code>Number</code>,
                     * <code>intValue</code> is returned, otherwise <code>defaultValue</code>
                     * is returned.
                     * @param context SynthContext identifying requester
                     * @param key Property being requested.
                     * @param defaultValue Value to return if the property has not been
                     *         specified, or is not a Number
                     * @return Value of the named property
                     */
                    // @ts-ignore
                    getInt(context: javax.swing.plaf.synth.SynthContext, key: any, defaultValue: number /*int*/): int
                    /**
                     * Convenience method to get a specific style property whose value is
                     * an Boolean.
                     * @param context SynthContext identifying requester
                     * @param key Property being requested.
                     * @param defaultValue Value to return if the property has not been
                     *         specified, or is not a Boolean
                     * @return Value of the named property
                     */
                    // @ts-ignore
                    getBoolean(context: javax.swing.plaf.synth.SynthContext, key: any, defaultValue: boolean): boolean
                    /**
                     * Convenience method to get a specific style property whose value is
                     * an Icon.
                     * @param context SynthContext identifying requester
                     * @param key Property being requested.
                     * @return Value of the named property, or null if not specified
                     */
                    // @ts-ignore
                    getIcon(context: javax.swing.plaf.synth.SynthContext, key: any): javax.swing.Icon
                    /**
                     * Convenience method to get a specific style property whose value is
                     * a String.
                     * @param context SynthContext identifying requester
                     * @param key Property being requested.
                     * @param defaultValue Value to return if the property has not been
                     *         specified, or is not a String
                     * @return Value of the named property
                     */
                    // @ts-ignore
                    getString(context: javax.swing.plaf.synth.SynthContext, key: any, defaultValue: string): java.lang.String
                }
            }
        }
    }
}
