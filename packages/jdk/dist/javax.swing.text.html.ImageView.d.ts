declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * View of an Image, intended to support the HTML &lt;IMG&gt; tag.
                 * Supports scaling via the HEIGHT and WIDTH attributes of the tag.
                 * If the image is unable to be loaded any text specified via the
                 * <code>ALT</code> attribute will be rendered.
                 * <p>
                 * While this class has been part of swing for a while now, it is public
                 * as of 1.4.
                 * @author Scott Violet
                 * @see IconView
                 * @since 1.4
                 */
                // @ts-ignore
                class ImageView extends javax.swing.text.View {
                    /**
                     * Creates a new view that represents an IMG element.
                     * @param elem the element to create a view for
                     */
                    // @ts-ignore
                    constructor(elem: javax.swing.text.Element)
                    /**
                     * Returns the text to display if the image can't be loaded. This is
                     * obtained from the Elements attribute set with the attribute name
                     * <code>HTML.Attribute.ALT</code>.
                     */
                    // @ts-ignore
                    getAltText(): java.lang.String
                    /**
                     * Return a URL for the image source,
                     * or null if it could not be determined.
                     */
                    // @ts-ignore
                    getImageURL(): java.net.URL
                    /**
                     * Returns the icon to use if the image couldn't be found.
                     */
                    // @ts-ignore
                    getNoImageIcon(): javax.swing.Icon
                    /**
                     * Returns the icon to use while in the process of loading the image.
                     */
                    // @ts-ignore
                    getLoadingImageIcon(): javax.swing.Icon
                    /**
                     * Returns the image to render.
                     */
                    // @ts-ignore
                    getImage(): java.awt.Image
                    /**
                     * Sets how the image is loaded. If <code>newValue</code> is true,
                     * the image we be loaded when first asked for, otherwise it will
                     * be loaded asynchronously. The default is to not load synchronously,
                     * that is to load the image asynchronously.
                     */
                    // @ts-ignore
                    setLoadsSynchronously(newValue: boolean): void
                    /**
                     * Returns true if the image should be loaded when first asked for.
                     */
                    // @ts-ignore
                    getLoadsSynchronously(): boolean
                    /**
                     * Convenience method to get the StyleSheet.
                     */
                    // @ts-ignore
                    getStyleSheet(): javax.swing.text.html.StyleSheet
                    /**
                     * Fetches the attributes to use when rendering.  This is
                     * implemented to multiplex the attributes specified in the
                     * model with a StyleSheet.
                     */
                    // @ts-ignore
                    getAttributes(): javax.swing.text.AttributeSet
                    /**
                     * For images the tooltip text comes from text specified with the
                     * <code>ALT</code> attribute. This is overriden to return
                     * <code>getAltText</code>.
                     * @see JTextComponent#getToolTipText
                     */
                    // @ts-ignore
                    getToolTipText(x: number /*float*/, y: number /*float*/, allocation: java.awt.Shape): java.lang.String
                    /**
                     * Update any cached values that come from attributes.
                     */
                    // @ts-ignore
                    setPropertiesFromAttributes(): void
                    /**
                     * Establishes the parent view for this view.
                     * Seize this moment to cache the AWT Container I'm in.
                     */
                    // @ts-ignore
                    setParent(parent: javax.swing.text.View): void
                    /**
                     * Invoked when the Elements attributes have changed. Recreates the image.
                     */
                    // @ts-ignore
                    changedUpdate(e: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
                    /**
                     * Paints the View.
                     * @param g the rendering surface to use
                     * @param a the allocated region to render into
                     * @see View#paint
                     */
                    // @ts-ignore
                    paint(g: java.awt.Graphics, a: java.awt.Shape): void
                    /**
                     * Determines the preferred span for this view along an
                     * axis.
                     * @param axis may be either X_AXIS or Y_AXIS
                     * @return the span the view would like to be rendered into;
                     *            typically the view is told to render into the span
                     *            that is returned, although there is no guarantee;
                     *            the parent may choose to resize or break the view
                     */
                    // @ts-ignore
                    getPreferredSpan(axis: number /*int*/): float
                    /**
                     * Determines the desired alignment for this view along an
                     * axis.  This is implemented to give the alignment to the
                     * bottom of the icon along the y axis, and the default
                     * along the x axis.
                     * @param axis may be either X_AXIS or Y_AXIS
                     * @return the desired alignment; this should be a value
                     *    between 0.0 and 1.0 where 0 indicates alignment at the
                     *    origin and 1.0 indicates alignment to the full span
                     *    away from the origin; an alignment of 0.5 would be the
                     *    center of the view
                     */
                    // @ts-ignore
                    getAlignment(axis: number /*int*/): float
                    /**
                     * Provides a mapping from the document model coordinate space
                     * to the coordinate space of the view mapped to it.
                     * @param pos the position to convert
                     * @param a the allocated region to render into
                     * @return the bounding box of the given position
                     * @exception BadLocationException  if the given position does not represent a
                     *    valid location in the associated document
                     * @see View#modelToView
                     */
                    // @ts-ignore
                    modelToView(pos: number /*int*/, a: java.awt.Shape, b: javax.swing.text.Position.Bias): java.awt.Shape
                    /**
                     * Provides a mapping from the view coordinate space to the logical
                     * coordinate space of the model.
                     * @param x the X coordinate
                     * @param y the Y coordinate
                     * @param a the allocated region to render into
                     * @return the location within the model that best represents the
                     *   given point of view
                     * @see View#viewToModel
                     */
                    // @ts-ignore
                    viewToModel(x: number /*float*/, y: number /*float*/, a: java.awt.Shape, bias: javax.swing.text.Position.Bias[]): int
                    /**
                     * Sets the size of the view.  This should cause
                     * layout of the view if it has any layout duties.
                     * @param width the width &gt;= 0
                     * @param height the height &gt;= 0
                     */
                    // @ts-ignore
                    setSize(width: number /*float*/, height: number /*float*/): void
                }
            }
        }
    }
}
