declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace nimbus {
                /**
                 * <p>The NimbusLookAndFeel class.</p>
                 * @author Jasper Potts
                 * @author Richard Bair
                 */
                // @ts-ignore
                class NimbusLookAndFeel extends javax.swing.plaf.synth.SynthLookAndFeel {
                    /**
                     * Create a new NimbusLookAndFeel.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Called by UIManager when this look and feel is installed.
                     */
                    // @ts-ignore
                    initialize(): void
                    /**
                     * Called by UIManager when this look and feel is uninstalled.
                     */
                    // @ts-ignore
                    uninitialize(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    getDefaults(): javax.swing.UIDefaults
                    /**
                     * Gets the style associated with the given component and region. This
                     * will never return null. If an appropriate component and region cannot
                     * be determined, then a default style is returned.
                     * @param c a non-null reference to a JComponent
                     * @param r a non-null reference to the region of the component c
                     * @return a non-null reference to a NimbusStyle.
                     */
                    // @ts-ignore
                    getStyle(c: javax.swing.JComponent, r: javax.swing.plaf.synth.Region): javax.swing.plaf.nimbus.NimbusStyle
                    /**
                     * Return a short string that identifies this look and feel. This
                     * String will be the unquoted String "Nimbus".
                     * @return a short string identifying this look and feel.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Return a string that identifies this look and feel. This String will
                     * be the unquoted String "Nimbus".
                     * @return a short string identifying this look and feel.
                     */
                    // @ts-ignore
                    getID(): java.lang.String
                    /**
                     * Returns a textual description of this look and feel.
                     * @return textual description of this look and feel.
                     */
                    // @ts-ignore
                    getDescription(): java.lang.String
                    /**
                     * {@inheritDoc}
                     * @return {#code true}
                     */
                    // @ts-ignore
                    shouldUpdateStyleOnAncestorChanged(): boolean
                    /**
                     * {@inheritDoc}
                     * <p>Overridden to return {@code true} when one of the following
                     * properties change:
                     * <ul>
                     * <li>{@code "Nimbus.Overrides"}
                     * <li>{@code "Nimbus.Overrides.InheritDefaults"}
                     * <li>{@code "JComponent.sizeVariant"}
                     * </ul>
                     * @since 1.7
                     */
                    // @ts-ignore
                    shouldUpdateStyleOnEvent(ev: java.beans.PropertyChangeEvent): boolean
                    /**
                     * <p>Registers a third party component with the NimbusLookAndFeel.</p>
                     * <p>Regions represent Components and areas within Components that act as
                     * independent painting areas. Once registered with the NimbusLookAndFeel,
                     * NimbusStyles for these Regions can be retrieved via the
                     * <code>getStyle</code> method.</p>
                     * <p>The NimbusLookAndFeel uses a standard naming scheme for entries in the
                     * UIDefaults table. The key for each property, state, painter, and other
                     * default registered in UIDefaults for a specific Region will begin with
                     * the specified <code>prefix</code></p>
                     * <p>For example, suppose I had a component named JFoo. Suppose I then registered
                     * this component with the NimbusLookAndFeel in this manner:</p>
                     * <pre><code>
                     * laf.register(NimbusFooUI.FOO_REGION, "Foo");
                     * </code></pre>
                     * <p>In this case, I could then register properties for this component with
                     * UIDefaults in the following manner:</p>
                     * <pre><code>
                     * UIManager.put("Foo.background", new ColorUIResource(Color.BLACK));
                     * UIManager.put("Foo.Enabled.backgroundPainter", new FooBackgroundPainter());
                     * </code></pre>
                     * <p>It is also possible to register a named component with Nimbus.
                     * For example, suppose you wanted to style the background of a JPanel
                     * named "MyPanel" differently from other JPanels. You could accomplish this
                     * by doing the following:</p>
                     * <pre><code>
                     * laf.register(Region.PANEL, "\"MyPanel\"");
                     * UIManager.put("\"MyPanel\".background", new ColorUIResource(Color.RED));
                     * </code></pre>
                     * @param region The Synth Region that is being registered. Such as Button, or
                     *         ScrollBarThumb, or NimbusFooUI.FOO_REGION.
                     * @param prefix The UIDefault prefix. For example, could be ComboBox, or if
                     *         a named components, "MyComboBox", or even something like
                     *         ToolBar."MyComboBox"."ComboBox.arrowButton"
                     */
                    // @ts-ignore
                    register(region: javax.swing.plaf.synth.Region, prefix: string): void
                    // @ts-ignore
                    getDisabledIcon(component: javax.swing.JComponent, icon: javax.swing.Icon): javax.swing.Icon
                    /**
                     * Get a derived color, derived colors are shared instances and is color
                     * value will change when its parent UIDefault color changes.
                     * @param uiDefaultParentName The parent UIDefault key
                     * @param hOffset             The hue offset
                     * @param sOffset             The saturation offset
                     * @param bOffset             The brightness offset
                     * @param aOffset             The alpha offset
                     * @param uiResource          True if the derived color should be a
                     *                             UIResource, false if it should not be
                     * @return The stored derived color
                     */
                    // @ts-ignore
                    getDerivedColor(uiDefaultParentName: string, hOffset: number /*float*/, sOffset: number /*float*/, bOffset: number /*float*/, aOffset: number /*int*/, uiResource: boolean): java.awt.Color
                    /**
                     * Decodes and returns a color, which is derived from an offset between two
                     * other colors.
                     * @param color1   The first color
                     * @param color2   The second color
                     * @param midPoint The offset between color 1 and color 2, a value of 0.0 is
                     *                  color 1 and 1.0 is color 2;
                     * @param uiResource True if the derived color should be a UIResource
                     * @return The derived color
                     */
                    // @ts-ignore
                    getDerivedColor(color1: java.awt.Color, color2: java.awt.Color, midPoint: number /*float*/, uiResource: boolean): java.awt.Color
                    /**
                     * Decodes and returns a color, which is derived from a offset between two
                     * other colors.
                     * @param color1   The first color
                     * @param color2   The second color
                     * @param midPoint The offset between color 1 and color 2, a value of 0.0 is
                     *                  color 1 and 1.0 is color 2;
                     * @return The derived color, which will be a UIResource
                     */
                    // @ts-ignore
                    getDerivedColor(color1: java.awt.Color, color2: java.awt.Color, midPoint: number /*float*/): java.awt.Color
                }
            }
        }
    }
}
