declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * An immutable transient object containing contextual information about
                 * a <code>Region</code>. A <code>SynthContext</code> should only be
                 * considered valid for the duration
                 * of the method it is passed to. In other words you should not cache
                 * a <code>SynthContext</code> that is passed to you and expect it to
                 * remain valid.
                 * @since 1.5
                 * @author Scott Violet
                 */
                // @ts-ignore
                class SynthContext extends java.lang.Object {
                    /**
                     * Creates a SynthContext with the specified values. This is meant
                     * for subclasses and custom UI implementors. You very rarely need to
                     * construct a SynthContext, though some methods will take one.
                     * @param component JComponent
                     * @param region Identifies the portion of the JComponent
                     * @param style Style associated with the component
                     * @param state State of the component as defined in SynthConstants.
                     * @throws NullPointerException if component, region of style is null.
                     */
                    // @ts-ignore
                    constructor(component: javax.swing.JComponent, region: javax.swing.plaf.synth.Region, style: javax.swing.plaf.synth.SynthStyle, state: number /*int*/)
                    /**
                     * Returns the hosting component containing the region.
                     * @return Hosting Component
                     */
                    // @ts-ignore
                    getComponent(): javax.swing.JComponent
                    /**
                     * Returns the Region identifying this state.
                     * @return Region of the hosting component
                     */
                    // @ts-ignore
                    getRegion(): javax.swing.plaf.synth.Region
                    /**
                     * Returns the style associated with this Region.
                     * @return SynthStyle associated with the region.
                     */
                    // @ts-ignore
                    getStyle(): javax.swing.plaf.synth.SynthStyle
                    /**
                     * Returns the state of the widget, which is a bitmask of the
                     * values defined in <code>SynthConstants</code>. A region will at least
                     * be in one of
                     * <code>ENABLED</code>, <code>MOUSE_OVER</code>, <code>PRESSED</code>
                     * or <code>DISABLED</code>.
                     * @see SynthConstants
                     * @return State of Component
                     */
                    // @ts-ignore
                    getComponentState(): int
                }
            }
        }
    }
}
