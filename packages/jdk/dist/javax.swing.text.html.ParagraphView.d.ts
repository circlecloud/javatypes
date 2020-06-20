declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * Displays the a paragraph, and uses css attributes for its
                 * configuration.
                 * @author Timothy Prinzing
                 */
                // @ts-ignore
                class ParagraphView extends javax.swing.text.ParagraphView {
                    /**
                     * Constructs a ParagraphView for the given element.
                     * @param elem the element that this view is responsible for
                     */
                    // @ts-ignore
                    constructor(elem: javax.swing.text.Element)
                    /**
                     * Establishes the parent view for this view.  This is
                     * guaranteed to be called before any other methods if the
                     * parent view is functioning properly.
                     * <p>
                     * This is implemented
                     * to forward to the superclass as well as call the
                     * {@link #setPropertiesFromAttributes setPropertiesFromAttributes}
                     * method to set the paragraph properties from the css
                     * attributes.  The call is made at this time to ensure
                     * the ability to resolve upward through the parents
                     * view attributes.
                     * @param parent the new parent, or null if the view is
                     *   being removed from a parent it was previously added
                     *   to
                     */
                    // @ts-ignore
                    setParent(parent: javax.swing.text.View): void
                    /**
                     * Fetches the attributes to use when rendering.  This is
                     * implemented to multiplex the attributes specified in the
                     * model with a StyleSheet.
                     */
                    // @ts-ignore
                    getAttributes(): javax.swing.text.AttributeSet
                    /**
                     * Sets up the paragraph from css attributes instead of
                     * the values found in StyleConstants (i.e. which are used
                     * by the superclass).  Since
                     */
                    // @ts-ignore
                    setPropertiesFromAttributes(): void
                    // @ts-ignore
                    getStyleSheet(): javax.swing.text.html.StyleSheet
                    /**
                     * Calculate the needs for the paragraph along the minor axis.
                     * <p>If size requirements are explicitly specified for the paragraph,
                     * use that requirements.  Otherwise, use the requirements of the
                     * superclass {@link javax.swing.text.ParagraphView}.</p>
                     * <p>If the {@code axis} parameter is neither {@code View.X_AXIS} nor
                     * {@code View.Y_AXIS}, {@link IllegalArgumentException} is thrown.  If the
                     * {@code r} parameter is {@code null,} a new {@code SizeRequirements}
                     * object is created, otherwise the supplied {@code SizeRequirements}
                     * object is returned.</p>
                     * @param axis  the minor axis
                     * @param r     the input {#code SizeRequirements} object
                     * @return the new or adjusted {#code SizeRequirements} object
                     * @throws IllegalArgumentException  if the {#code axis} parameter is invalid
                     */
                    // @ts-ignore
                    calculateMinorAxisRequirements(axis: number /*int*/, r: javax.swing.SizeRequirements): javax.swing.SizeRequirements
                    /**
                     * Indicates whether or not this view should be
                     * displayed.  If none of the children wish to be
                     * displayed and the only visible child is the
                     * break that ends the paragraph, the paragraph
                     * will not be considered visible.  Otherwise,
                     * it will be considered visible and return true.
                     * @return true if the paragraph should be displayed
                     */
                    // @ts-ignore
                    isVisible(): boolean
                    /**
                     * Renders using the given rendering surface and area on that
                     * surface.  This is implemented to delegate to the superclass
                     * after stashing the base coordinate for tab calculations.
                     * @param g the rendering surface to use
                     * @param a the allocated region to render into
                     * @see View#paint
                     */
                    // @ts-ignore
                    paint(g: java.awt.Graphics, a: java.awt.Shape): void
                    /**
                     * Determines the preferred span for this view.  Returns
                     * 0 if the view is not visible, otherwise it calls the
                     * superclass method to get the preferred span.
                     * axis.
                     * @param axis may be either View.X_AXIS or View.Y_AXIS
                     * @return the span the view would like to be rendered into;
                     *            typically the view is told to render into the span
                     *            that is returned, although there is no guarantee;
                     *            the parent may choose to resize or break the view
                     * @see javax.swing.text.ParagraphView#getPreferredSpan
                     */
                    // @ts-ignore
                    getPreferredSpan(axis: number /*int*/): float
                    /**
                     * Determines the minimum span for this view along an
                     * axis.  Returns 0 if the view is not visible, otherwise
                     * it calls the superclass method to get the minimum span.
                     * @param axis may be either <code>View.X_AXIS</code> or
                     *   <code>View.Y_AXIS</code>
                     * @return the minimum span the view can be rendered into
                     * @see javax.swing.text.ParagraphView#getMinimumSpan
                     */
                    // @ts-ignore
                    getMinimumSpan(axis: number /*int*/): float
                    /**
                     * Determines the maximum span for this view along an
                     * axis.  Returns 0 if the view is not visible, otherwise
                     * it calls the superclass method ot get the maximum span.
                     * @param axis may be either <code>View.X_AXIS</code> or
                     *   <code>View.Y_AXIS</code>
                     * @return the maximum span the view can be rendered into
                     * @see javax.swing.text.ParagraphView#getMaximumSpan
                     */
                    // @ts-ignore
                    getMaximumSpan(axis: number /*int*/): float
                }
            }
        }
    }
}
