declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * SynthLookAndFeel provides the basis for creating a customized look and
                 * feel. SynthLookAndFeel does not directly provide a look, all painting is
                 * delegated.
                 * You need to either provide a configuration file, by way of the
                 * {@link #load} method, or provide your own {@link SynthStyleFactory}
                 * to {@link #setStyleFactory}. Refer to the
                 * <a href="package-summary.html">package summary</a> for an example of
                 * loading a file, and {@link javax.swing.plaf.synth.SynthStyleFactory} for
                 * an example of providing your own <code>SynthStyleFactory</code> to
                 * <code>setStyleFactory</code>.
                 * <p>
                 * <strong>Warning:</strong>
                 * This class implements {@link Serializable} as a side effect of it
                 * extending {@link BasicLookAndFeel}. It is not intended to be serialized.
                 * An attempt to serialize it will
                 * result in {@link NotSerializableException}.
                 * @serial exclude
                 * @since 1.5
                 * @author Scott Violet
                 */
                // @ts-ignore
                class SynthLookAndFeel extends javax.swing.plaf.basic.BasicLookAndFeel {
                    /**
                     * Creates a SynthLookAndFeel.
                     * <p>
                     * For the returned <code>SynthLookAndFeel</code> to be useful you need to
                     * invoke <code>load</code> to specify the set of
                     * <code>SynthStyle</code>s, or invoke <code>setStyleFactory</code>.
                     * @see #load
                     * @see #setStyleFactory
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Sets the SynthStyleFactory that the UI classes provided by
                     * synth will use to obtain a SynthStyle.
                     * @param cache SynthStyleFactory the UIs should use.
                     */
                    // @ts-ignore
                    setStyleFactory(cache: javax.swing.plaf.synth.SynthStyleFactory): void
                    /**
                     * Returns the current SynthStyleFactory.
                     * @return SynthStyleFactory
                     */
                    // @ts-ignore
                    getStyleFactory(): javax.swing.plaf.synth.SynthStyleFactory
                    /**
                     * Gets a SynthStyle for the specified region of the specified component.
                     * This is not for general consumption, only custom UIs should call this
                     * method.
                     * @param c JComponent to get the SynthStyle for
                     * @param region Identifies the region of the specified component
                     * @return SynthStyle to use.
                     */
                    // @ts-ignore
                    getStyle(c: javax.swing.JComponent, region: javax.swing.plaf.synth.Region): javax.swing.plaf.synth.SynthStyle
                    /**
                     * Updates the style associated with <code>c</code>, and all its children.
                     * This is a lighter version of
                     * <code>SwingUtilities.updateComponentTreeUI</code>.
                     * @param c Component to update style for.
                     */
                    // @ts-ignore
                    updateStyles(c: java.awt.Component): void
                    /**
                     * Returns the Region for the JComponent <code>c</code>.
                     * @param c JComponent to fetch the Region for
                     * @return Region corresponding to <code>c</code>
                     */
                    // @ts-ignore
                    getRegion(c: javax.swing.JComponent): javax.swing.plaf.synth.Region
                    /**
                     * Creates the Synth look and feel <code>ComponentUI</code> for
                     * the passed in <code>JComponent</code>.
                     * @param c JComponent to create the <code>ComponentUI</code> for
                     * @return ComponentUI to use for <code>c</code>
                     */
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Loads the set of <code>SynthStyle</code>s that will be used by
                     * this <code>SynthLookAndFeel</code>. <code>resourceBase</code> is
                     * used to resolve any path based resources, for example an
                     * <code>Image</code> would be resolved by
                     * <code>resourceBase.getResource(path)</code>. Refer to
                     * <a href="doc-files/synthFileFormat.html">Synth File Format</a>
                     * for more information.
                     * @param input InputStream to load from
                     * @param resourceBase used to resolve any images or other resources
                     * @throws ParseException if there is an error in parsing
                     * @throws IllegalArgumentException if input or resourceBase is <code>null</code>
                     */
                    // @ts-ignore
                    load(input: java.io.InputStream, resourceBase: java.lang.Class<any>): void
                    /**
                     * Loads the set of <code>SynthStyle</code>s that will be used by
                     * this <code>SynthLookAndFeel</code>. Path based resources are resolved
                     * relatively to the specified <code>URL</code> of the style. For example
                     * an <code>Image</code> would be resolved by
                     * <code>new URL(synthFile, path)</code>. Refer to
                     * <a href="doc-files/synthFileFormat.html">Synth File Format</a> for more
                     * information.
                     * @param url the <code>URL</code> to load the set of
                     *      <code>SynthStyle</code> from
                     * @throws ParseException if there is an error in parsing
                     * @throws IllegalArgumentException if synthSet is <code>null</code>
                     * @throws IOException if synthSet cannot be opened as an <code>InputStream</code>
                     * @since 1.6
                     */
                    // @ts-ignore
                    load(url: java.net.URL): void
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
                     * Returns the defaults for this SynthLookAndFeel.
                     * @return Defaults table.
                     */
                    // @ts-ignore
                    getDefaults(): javax.swing.UIDefaults
                    /**
                     * Returns true, SynthLookAndFeel is always supported.
                     * @return true.
                     */
                    // @ts-ignore
                    isSupportedLookAndFeel(): boolean
                    /**
                     * Returns false, SynthLookAndFeel is not a native look and feel.
                     * @return false
                     */
                    // @ts-ignore
                    isNativeLookAndFeel(): boolean
                    /**
                     * Returns a textual description of SynthLookAndFeel.
                     * @return textual description of synth.
                     */
                    // @ts-ignore
                    getDescription(): java.lang.String
                    /**
                     * Return a short string that identifies this look and feel.
                     * @return a short string identifying this look and feel.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Return a string that identifies this look and feel.
                     * @return a short string identifying this look and feel.
                     */
                    // @ts-ignore
                    getID(): java.lang.String
                    /**
                     * Returns whether or not the UIs should update their
                     * <code>SynthStyles</code> from the <code>SynthStyleFactory</code>
                     * when the ancestor of the <code>JComponent</code> changes. A subclass
                     * that provided a <code>SynthStyleFactory</code> that based the
                     * return value from <code>getStyle</code> off the containment hierarchy
                     * would override this method to return true.
                     * @return whether or not the UIs should update their
                     *  <code>SynthStyles</code> from the <code>SynthStyleFactory</code>
                     *  when the ancestor changed.
                     */
                    // @ts-ignore
                    shouldUpdateStyleOnAncestorChanged(): boolean
                    /**
                     * Returns whether or not the UIs should update their styles when a
                     * particular event occurs.
                     * @param ev a {#code PropertyChangeEvent}
                     * @return whether or not the UIs should update their styles
                     * @since 1.7
                     */
                    // @ts-ignore
                    shouldUpdateStyleOnEvent(ev: java.beans.PropertyChangeEvent): boolean
                }
            }
        }
    }
}
