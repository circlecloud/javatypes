declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * Displays the <dfn>inline element</dfn> styles
                 * based upon css attributes.
                 * @author Timothy Prinzing
                 */
                // @ts-ignore
                class InlineView extends javax.swing.text.LabelView {
                    /**
                     * Constructs a new view wrapped on an element.
                     * @param elem the element
                     */
                    // @ts-ignore
                    constructor(elem: javax.swing.text.Element)
                    /**
                     * Gives notification that something was inserted into
                     * the document in a location that this view is responsible for.
                     * If either parameter is <code>null</code>, behavior of this method is
                     * implementation dependent.
                     * @param e the change information from the associated document
                     * @param a the current allocation of the view
                     * @param f the factory to use to rebuild if the view has children
                     * @since 1.5
                     * @see View#insertUpdate
                     */
                    // @ts-ignore
                    insertUpdate(e: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                    /**
                     * Gives notification that something was removed from the document
                     * in a location that this view is responsible for.
                     * If either parameter is <code>null</code>, behavior of this method is
                     * implementation dependent.
                     * @param e the change information from the associated document
                     * @param a the current allocation of the view
                     * @param f the factory to use to rebuild if the view has children
                     * @since 1.5
                     * @see View#removeUpdate
                     */
                    // @ts-ignore
                    removeUpdate(e: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                    /**
                     * Gives notification from the document that attributes were changed
                     * in a location that this view is responsible for.
                     * @param e the change information from the associated document
                     * @param a the current allocation of the view
                     * @param f the factory to use to rebuild if the view has children
                     * @see View#changedUpdate
                     */
                    // @ts-ignore
                    changedUpdate(e: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                    /**
                     * Fetches the attributes to use when rendering.  This is
                     * implemented to multiplex the attributes specified in the
                     * model with a StyleSheet.
                     */
                    // @ts-ignore
                    getAttributes(): javax.swing.text.AttributeSet
                    /**
                     * Determines how attractive a break opportunity in
                     * this view is.  This can be used for determining which
                     * view is the most attractive to call <code>breakView</code>
                     * on in the process of formatting.  A view that represents
                     * text that has whitespace in it might be more attractive
                     * than a view that has no whitespace, for example.  The
                     * higher the weight, the more attractive the break.  A
                     * value equal to or lower than <code>BadBreakWeight</code>
                     * should not be considered for a break.  A value greater
                     * than or equal to <code>ForcedBreakWeight</code> should
                     * be broken.
                     * <p>
                     * This is implemented to provide the default behavior
                     * of returning <code>BadBreakWeight</code> unless the length
                     * is greater than the length of the view in which case the
                     * entire view represents the fragment.  Unless a view has
                     * been written to support breaking behavior, it is not
                     * attractive to try and break the view.  An example of
                     * a view that does support breaking is <code>LabelView</code>.
                     * An example of a view that uses break weight is
                     * <code>ParagraphView</code>.
                     * @param axis may be either View.X_AXIS or View.Y_AXIS
                     * @param pos the potential location of the start of the
                     *    broken view &gt;= 0.  This may be useful for calculating tab
                     *    positions.
                     * @param len specifies the relative length from <em>pos</em>
                     *    where a potential break is desired &gt;= 0.
                     * @return the weight, which should be a value between
                     *    ForcedBreakWeight and BadBreakWeight.
                     * @see LabelView
                     * @see ParagraphView
                     * @see javax.swing.text.View#BadBreakWeight
                     * @see javax.swing.text.View#GoodBreakWeight
                     * @see javax.swing.text.View#ExcellentBreakWeight
                     * @see javax.swing.text.View#ForcedBreakWeight
                     */
                    // @ts-ignore
                    getBreakWeight(axis: number /*int*/, pos: number /*float*/, len: number /*float*/): int
                    /**
                     * Tries to break this view on the given axis. Refer to
                     * {@link javax.swing.text.View#breakView} for a complete
                     * description of this method.
                     * <p>Behavior of this method is unspecified in case <code>axis</code>
                     * is neither <code>View.X_AXIS</code> nor <code>View.Y_AXIS</code>, and
                     * in case <code>offset</code>, <code>pos</code>, or <code>len</code>
                     * is null.
                     * @param axis may be either <code>View.X_AXIS</code> or
                     *           <code>View.Y_AXIS</code>
                     * @param offset the location in the document model
                     *    that a broken fragment would occupy &gt;= 0.  This
                     *    would be the starting offset of the fragment
                     *    returned
                     * @param pos the position along the axis that the
                     *   broken view would occupy &gt;= 0.  This may be useful for
                     *   things like tab calculations
                     * @param len specifies the distance along the axis
                     *   where a potential break is desired &gt;= 0
                     * @return the fragment of the view that represents the
                     *   given span.
                     * @since 1.5
                     * @see javax.swing.text.View#breakView
                     */
                    // @ts-ignore
                    breakView(axis: number /*int*/, offset: number /*int*/, pos: number /*float*/, len: number /*float*/): javax.swing.text.View
                    /**
                     * Set the cached properties from the attributes.
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
