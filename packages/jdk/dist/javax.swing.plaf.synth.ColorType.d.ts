declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * A typesafe enumeration of colors that can be fetched from a style.
                 * <p>
                 * Each <code>SynthStyle</code> has a set of <code>ColorType</code>s that
                 * are accessed by way of the
                 * {@link SynthStyle#getColor(SynthContext, ColorType)} method.
                 * <code>SynthStyle</code>'s <code>installDefaults</code> will install
                 * the <code>FOREGROUND</code> color
                 * as the foreground of
                 * the Component, and the <code>BACKGROUND</code> color to the background of
                 * the component (assuming that you have not explicitly specified a
                 * foreground and background color). Some components
                 * support more color based properties, for
                 * example <code>JList</code> has the property
                 * <code>selectionForeground</code> which will be mapped to
                 * <code>FOREGROUND</code> with a component state of
                 * <code>SynthConstants.SELECTED</code>.
                 * <p>
                 * The following example shows a custom <code>SynthStyle</code> that returns
                 * a red Color for the <code>DISABLED</code> state, otherwise a black color.
                 * <pre>
                 * class MyStyle extends SynthStyle {
                 * private Color disabledColor = new ColorUIResource(Color.RED);
                 * private Color color = new ColorUIResource(Color.BLACK);
                 * protected Color getColorForState(SynthContext context, ColorType type){
                 * if (context.getComponentState() == SynthConstants.DISABLED) {
                 * return disabledColor;
                 * }
                 * return color;
                 * }
                 * }
                 * </pre>
                 * @since 1.5
                 * @author Scott Violet
                 */
                // @ts-ignore
                class ColorType extends java.lang.Object {
                    /**
                     * Creates a new ColorType with the specified description.
                     * @param description String description of the ColorType.
                     */
                    // @ts-ignore
                    constructor(description: string)
                    /**
                     * ColorType for the foreground of a region.
                     */
                    // @ts-ignore
                    readonly FOREGROUND: javax.swing.plaf.synth.ColorType
                    /**
                     * ColorType for the background of a region.
                     */
                    // @ts-ignore
                    readonly BACKGROUND: javax.swing.plaf.synth.ColorType
                    /**
                     * ColorType for the foreground of a region.
                     */
                    // @ts-ignore
                    readonly TEXT_FOREGROUND: javax.swing.plaf.synth.ColorType
                    /**
                     * ColorType for the background of a region.
                     */
                    // @ts-ignore
                    readonly TEXT_BACKGROUND: javax.swing.plaf.synth.ColorType
                    /**
                     * ColorType for the focus.
                     */
                    // @ts-ignore
                    readonly FOCUS: javax.swing.plaf.synth.ColorType
                    /**
                     * Maximum number of <code>ColorType</code>s.
                     */
                    // @ts-ignore
                    readonly MAX_COUNT: number /*int*/
                    /**
                     * Returns a unique id, as an integer, for this ColorType.
                     * @return a unique id, as an integer, for this ColorType.
                     */
                    // @ts-ignore
                    getID(): int
                    /**
                     * Returns the textual description of this <code>ColorType</code>.
                     * This is the same value that the <code>ColorType</code> was created
                     * with.
                     * @return the description of the string
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
