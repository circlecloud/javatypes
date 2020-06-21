declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * Factory used for obtaining <code>SynthStyle</code>s.  Each of the
                 * Synth <code>ComponentUI</code>s will call into the current
                 * <code>SynthStyleFactory</code> to obtain a <code>SynthStyle</code>
                 * for each of the distinct regions they have.
                 * <p>
                 * The following example creates a custom <code>SynthStyleFactory</code>
                 * that returns a different style based on the <code>Region</code>:
                 * <pre>
                 * class MyStyleFactory extends SynthStyleFactory {
                 * public SynthStyle getStyle(JComponent c, Region id) {
                 * if (id == Region.BUTTON) {
                 * return buttonStyle;
                 * }
                 * else if (id == Region.TREE) {
                 * return treeStyle;
                 * }
                 * return defaultStyle;
                 * }
                 * }
                 * SynthLookAndFeel laf = new SynthLookAndFeel();
                 * UIManager.setLookAndFeel(laf);
                 * SynthLookAndFeel.setStyleFactory(new MyStyleFactory());
                 * </pre>
                 * @see SynthStyleFactory
                 * @see SynthStyle
                 * @since 1.5
                 * @author Scott Violet
                 */
                // @ts-ignore
                abstract class SynthStyleFactory extends java.lang.Object {
                    /**
                     * Creates a <code>SynthStyleFactory</code>.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns the style for the specified Component.
                     * @param c Component asking for
                     * @param id Region identifier
                     * @return SynthStyle for region.
                     */
                    // @ts-ignore
                    public abstract getStyle(c: javax.swing.JComponent, id: javax.swing.plaf.synth.Region): javax.swing.plaf.synth.SynthStyle
                }
            }
        }
    }
}
