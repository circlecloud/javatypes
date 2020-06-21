declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * A view implementation to display a block (as a box)
                 * with CSS specifications.
                 * @author Timothy Prinzing
                 */
                // @ts-ignore
                class BlockView extends javax.swing.text.BoxView {
                    /**
                     * Creates a new view that represents an
                     * html box.  This can be used for a number
                     * of elements.
                     * @param elem the element to create a view for
                     * @param axis either View.X_AXIS or View.Y_AXIS
                     */
                    // @ts-ignore
                    constructor(elem: javax.swing.text.Element, axis: number /*int*/)
                    /**
                     * Establishes the parent view for this view.  This is
                     * guaranteed to be called before any other methods if the
                     * parent view is functioning properly.
                     * <p>
                     * This is implemented
                     * to forward to the superclass as well as call the
                     * {@link #setPropertiesFromAttributes()}
                     * method to set the paragraph properties from the css
                     * attributes.  The call is made at this time to ensure
                     * the ability to resolve upward through the parents
                     * view attributes.
                     * @param parent the new parent, or null if the view is
                     *   being removed from a parent it was previously added
                     *   to
                     */
                    // @ts-ignore
                    public setParent(parent: javax.swing.text.View): void
                    /**
                     * Calculate the requirements of the block along the major
                     * axis (i.e. the axis along with it tiles).  This is implemented
                     * to provide the superclass behavior and then adjust it if the
                     * CSS width or height attribute is specified and applicable to
                     * the axis.
                     */
                    // @ts-ignore
                    calculateMajorAxisRequirements(axis: number /*int*/, r: javax.swing.SizeRequirements): javax.swing.SizeRequirements
                    /**
                     * Calculate the requirements of the block along the minor
                     * axis (i.e. the axis orthogonal to the axis along with it tiles).
                     * This is implemented
                     * to provide the superclass behavior and then adjust it if the
                     * CSS width or height attribute is specified and applicable to
                     * the axis.
                     */
                    // @ts-ignore
                    calculateMinorAxisRequirements(axis: number /*int*/, r: javax.swing.SizeRequirements): javax.swing.SizeRequirements
                    /**
                     * Performs layout for the minor axis of the box (i.e. the
                     * axis orthogonal to the axis that it represents). The results
                     * of the layout (the offset and span for each children) are
                     * placed in the given arrays which represent the allocations to
                     * the children along the minor axis.
                     * @param targetSpan the total span given to the view, which
                     *   would be used to layout the children.
                     * @param axis the axis being layed out
                     * @param offsets the offsets from the origin of the view for
                     *   each of the child views; this is a return value and is
                     *   filled in by the implementation of this method
                     * @param spans the span of each child view; this is a return
                     *   value and is filled in by the implementation of this method
                     */
                    // @ts-ignore
                    layoutMinorAxis(targetSpan: number /*int*/, axis: number /*int*/, offsets: number /*int*/[], spans: number /*int*/[]): void
                    /**
                     * Renders using the given rendering surface and area on that
                     * surface.  This is implemented to delegate to the css box
                     * painter to paint the border and background prior to the
                     * interior.
                     * @param g the rendering surface to use
                     * @param allocation the allocated region to render into
                     * @see View#paint
                     */
                    // @ts-ignore
                    public paint(g: java.awt.Graphics, allocation: java.awt.Shape): void
                    /**
                     * Fetches the attributes to use when rendering.  This is
                     * implemented to multiplex the attributes specified in the
                     * model with a StyleSheet.
                     */
                    // @ts-ignore
                    public getAttributes(): javax.swing.text.AttributeSet
                    /**
                     * Gets the resize weight.
                     * @param axis may be either X_AXIS or Y_AXIS
                     * @return the weight
                     * @exception IllegalArgumentException for an invalid axis
                     */
                    // @ts-ignore
                    public getResizeWeight(axis: number /*int*/): number /*int*/
                    /**
                     * Gets the alignment.
                     * @param axis may be either X_AXIS or Y_AXIS
                     * @return the alignment
                     */
                    // @ts-ignore
                    public getAlignment(axis: number /*int*/): number /*float*/
                    // @ts-ignore
                    public changedUpdate(changes: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                    /**
                     * Determines the preferred span for this view along an
                     * axis.
                     * @param axis may be either <code>View.X_AXIS</code>
                     *            or <code>View.Y_AXIS</code>
                     * @return the span the view would like to be rendered into &gt;= 0;
                     *            typically the view is told to render into the span
                     *            that is returned, although there is no guarantee;
                     *            the parent may choose to resize or break the view
                     * @exception IllegalArgumentException for an invalid axis type
                     */
                    // @ts-ignore
                    public getPreferredSpan(axis: number /*int*/): number /*float*/
                    /**
                     * Determines the minimum span for this view along an
                     * axis.
                     * @param axis may be either <code>View.X_AXIS</code>
                     *            or <code>View.Y_AXIS</code>
                     * @return the span the view would like to be rendered into &gt;= 0;
                     *            typically the view is told to render into the span
                     *            that is returned, although there is no guarantee;
                     *            the parent may choose to resize or break the view
                     * @exception IllegalArgumentException for an invalid axis type
                     */
                    // @ts-ignore
                    public getMinimumSpan(axis: number /*int*/): number /*float*/
                    /**
                     * Determines the maximum span for this view along an
                     * axis.
                     * @param axis may be either <code>View.X_AXIS</code>
                     *            or <code>View.Y_AXIS</code>
                     * @return the span the view would like to be rendered into &gt;= 0;
                     *            typically the view is told to render into the span
                     *            that is returned, although there is no guarantee;
                     *            the parent may choose to resize or break the view
                     * @exception IllegalArgumentException for an invalid axis type
                     */
                    // @ts-ignore
                    public getMaximumSpan(axis: number /*int*/): number /*float*/
                    /**
                     * Update any cached values that come from attributes.
                     */
                    // @ts-ignore
                    setPropertiesFromAttributes(): void
                    // @ts-ignore
                    getStyleSheet(): javax.swing.text.html.StyleSheet
                }
            }
        }
    }
}
