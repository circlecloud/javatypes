declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace nimbus {
                /**
                 * <p>A SynthStyle implementation used by Nimbus. Each Region that has been
                 * registered with the NimbusLookAndFeel will have an associated NimbusStyle.
                 * Third party components that are registered with the NimbusLookAndFeel will
                 * therefore be handed a NimbusStyle from the look and feel from the
                 * #getStyle(JComponent, Region) method.</p>
                 * <p>This class properly reads and retrieves values placed in the UIDefaults
                 * according to the standard Nimbus naming conventions. It will create and
                 * retrieve painters, fonts, colors, and other data stored there.</p>
                 * <p>NimbusStyle also supports the ability to override settings on a per
                 * component basis. NimbusStyle checks the component's client property map for
                 * "Nimbus.Overrides". If the value associated with this key is an instance of
                 * UIDefaults, then the values in that defaults table will override the standard
                 * Nimbus defaults in UIManager, but for that component instance only.</p>
                 * <p>Optionally, you may specify the client property
                 * "Nimbus.Overrides.InheritDefaults". If true, this client property indicates
                 * that the defaults located in UIManager should first be read, and then
                 * replaced with defaults located in the component client properties. If false,
                 * then only the defaults located in the component client property map will
                 * be used. If not specified, it is assumed to be true.</p>
                 * <p>You must specify "Nimbus.Overrides" for "Nimbus.Overrides.InheritDefaults"
                 * to have any effect. "Nimbus.Overrides" indicates whether there are any
                 * overrides, while "Nimbus.Overrides.InheritDefaults" indicates whether those
                 * overrides should first be initialized with the defaults from UIManager.</p>
                 * <p>The NimbusStyle is reloaded whenever a property change event is fired
                 * for a component for "Nimbus.Overrides" or "Nimbus.Overrides.InheritDefaults".
                 * So for example, setting a new UIDefaults on a component would cause the
                 * style to be reloaded.</p>
                 * <p>The values are only read out of UIManager once, and then cached. If
                 * you need to read the values again (for example, if the UI is being reloaded),
                 * then discard this NimbusStyle and read a new one from NimbusLookAndFeel
                 * using NimbusLookAndFeel.getStyle.</p>
                 * <p>The primary API of interest in this class for 3rd party component authors
                 * are the three methods which retrieve painters: #getBackgroundPainter,
                 * #getForegroundPainter, and #getBorderPainter.</p>
                 * <p>NimbusStyle allows you to specify custom states, or modify the order of
                 * states. Synth (and thus Nimbus) has the concept of a "state". For example,
                 * a JButton might be in the "MOUSE_OVER" state, or the "ENABLED" state, or the
                 * "DISABLED" state. These are all "standard" states which are defined in synth,
                 * and which apply to all synth Regions.</p>
                 * <p>Sometimes, however, you need to have a custom state. For example, you
                 * want JButton to render differently if it's parent is a JToolbar. In Nimbus,
                 * you specify these custom states by including a special key in UIDefaults.
                 * The following UIDefaults entries define three states for this button:</p>
                 * <pre><code>
                 * JButton.States = Enabled, Disabled, Toolbar
                 * JButton[Enabled].backgroundPainter = somePainter
                 * JButton[Disabled].background = BLUE
                 * JButton[Toolbar].backgroundPainter = someOtherPaint
                 * </code></pre>
                 * <p>As you can see, the <code>JButton.States</code> entry lists the states
                 * that the JButton style will support. You then specify the settings for
                 * each state. If you do not specify the <code>JButton.States</code> entry,
                 * then the standard Synth states will be assumed. If you specify the entry
                 * but the list of states is empty or null, then the standard synth states
                 * will be assumed.</p>
                 * @author Richard Bair
                 * @author Jasper Potts
                 */
                // @ts-ignore
                class NimbusStyle extends javax.swing.plaf.synth.SynthStyle {
                    // @ts-ignore
                    public static readonly LARGE_KEY: java.lang.String | string
                    // @ts-ignore
                    public static readonly SMALL_KEY: java.lang.String | string
                    // @ts-ignore
                    public static readonly MINI_KEY: java.lang.String | string
                    // @ts-ignore
                    public static readonly LARGE_SCALE: number /*double*/
                    // @ts-ignore
                    public static readonly SMALL_SCALE: number /*double*/
                    // @ts-ignore
                    public static readonly MINI_SCALE: number /*double*/
                    /**
                     * {@inheritDoc}
                     * Overridden to cause this style to populate itself with data from
                     * UIDefaults, if necessary.
                     */
                    // @ts-ignore
                    public installDefaults(ctx: javax.swing.plaf.synth.SynthContext): void
                    /**
                     * {@inheritDoc}
                     * Overridden to cause this style to populate itself with data from
                     * UIDefaults, if necessary.
                     */
                    // @ts-ignore
                    public getInsets(ctx: javax.swing.plaf.synth.SynthContext, input: java.awt.Insets): java.awt.Insets
                    /**
                     * {@inheritDoc}
                     * <p>Overridden to cause this style to populate itself with data from
                     * UIDefaults, if necessary.</p>
                     * <p>In addition, NimbusStyle handles ColorTypes slightly differently from
                     * Synth.</p>
                     * <ul>
                     * <li>ColorType.BACKGROUND will equate to the color stored in UIDefaults
                     * named "background".</li>
                     * <li>ColorType.TEXT_BACKGROUND will equate to the color stored in
                     * UIDefaults named "textBackground".</li>
                     * <li>ColorType.FOREGROUND will equate to the color stored in UIDefaults
                     * named "textForeground".</li>
                     * <li>ColorType.TEXT_FOREGROUND will equate to the color stored in
                     * UIDefaults named "textForeground".</li>
                     * </ul>
                     */
                    // @ts-ignore
                    getColorForState(ctx: javax.swing.plaf.synth.SynthContext, type: javax.swing.plaf.synth.ColorType): java.awt.Color
                    /**
                     * {@inheritDoc}
                     * Overridden to cause this style to populate itself with data from
                     * UIDefaults, if necessary. If a value named "font" is not found in
                     * UIDefaults, then the "defaultFont" font in UIDefaults will be returned
                     * instead.
                     */
                    // @ts-ignore
                    getFontForState(ctx: javax.swing.plaf.synth.SynthContext): java.awt.Font
                    /**
                     * {@inheritDoc}
                     * Returns the SynthPainter for this style, which ends up delegating to
                     * the Painters installed in this style.
                     */
                    // @ts-ignore
                    public getPainter(ctx: javax.swing.plaf.synth.SynthContext): javax.swing.plaf.synth.SynthPainter
                    /**
                     * {@inheritDoc}
                     * Overridden to cause this style to populate itself with data from
                     * UIDefaults, if necessary. If opacity is not specified in UI defaults,
                     * then it defaults to being non-opaque.
                     */
                    // @ts-ignore
                    public isOpaque(ctx: javax.swing.plaf.synth.SynthContext): boolean
                    /**
                     * {@inheritDoc}
                     * <p>Overridden to cause this style to populate itself with data from
                     * UIDefaults, if necessary.</p>
                     * <p>Properties in UIDefaults may be specified in a chained manner. For
                     * example:
                     * <pre>
                     * background
                     * Button.opacity
                     * Button.Enabled.foreground
                     * Button.Enabled+Selected.background
                     * </pre>
                     * <p>In this example, suppose you were in the Enabled+Selected state and
                     * searched for "foreground". In this case, we first check for
                     * Button.Enabled+Selected.foreground, but no such color exists. We then
                     * fall back to the next valid state, in this case,
                     * Button.Enabled.foreground, and have a match. So we return it.</p>
                     * <p>Again, if we were in the state Enabled and looked for "background", we
                     * wouldn't find it in Button.Enabled, or in Button, but would at the top
                     * level in UIManager. So we return that value.</p>
                     * <p>One special note: the "key" passed to this method could be of the form
                     * "background" or "Button.background" where "Button" equals the prefix
                     * passed to the NimbusStyle constructor. In either case, it looks for
                     * "background".</p>
                     * @param ctx
                     * @param key must not be null
                     */
                    // @ts-ignore
                    public get(ctx: javax.swing.plaf.synth.SynthContext, key: java.lang.Object | any): any
                    /**
                     * Gets the appropriate background Painter, if there is one, for the state
                     * specified in the given SynthContext. This method does appropriate
                     * fallback searching, as described in #get.
                     * @param ctx The SynthContext. Must not be null.
                     * @return The background painter associated for the given state, or null if
                     *  none could be found.
                     */
                    // @ts-ignore
                    public getBackgroundPainter(ctx: javax.swing.plaf.synth.SynthContext): javax.swing.Painter<any>
                    /**
                     * Gets the appropriate foreground Painter, if there is one, for the state
                     * specified in the given SynthContext. This method does appropriate
                     * fallback searching, as described in #get.
                     * @param ctx The SynthContext. Must not be null.
                     * @return The foreground painter associated for the given state, or null if
                     *  none could be found.
                     */
                    // @ts-ignore
                    public getForegroundPainter(ctx: javax.swing.plaf.synth.SynthContext): javax.swing.Painter<any>
                    /**
                     * Gets the appropriate border Painter, if there is one, for the state
                     * specified in the given SynthContext. This method does appropriate
                     * fallback searching, as described in #get.
                     * @param ctx The SynthContext. Must not be null.
                     * @return The border painter associated for the given state, or null if
                     *  none could be found.
                     */
                    // @ts-ignore
                    public getBorderPainter(ctx: javax.swing.plaf.synth.SynthContext): javax.swing.Painter<any>
                }
            }
        }
    }
}
