declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Implementation of ScrollBarUI for the Basic Look and Feel
                 * @author Rich Schiavi
                 * @author David Kloba
                 * @author Hans Muller
                 */
                // @ts-ignore
                class BasicScrollBarUI extends javax.swing.plaf.ScrollBarUI implements java.awt.LayoutManager, javax.swing.SwingConstants {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    minimumThumbSize: java.awt.Dimension
                    // @ts-ignore
                    maximumThumbSize: java.awt.Dimension
                    // @ts-ignore
                    thumbHighlightColor: java.awt.Color
                    // @ts-ignore
                    thumbLightShadowColor: java.awt.Color
                    // @ts-ignore
                    thumbDarkShadowColor: java.awt.Color
                    // @ts-ignore
                    thumbColor: java.awt.Color
                    // @ts-ignore
                    trackColor: java.awt.Color
                    // @ts-ignore
                    trackHighlightColor: java.awt.Color
                    // @ts-ignore
                    scrollbar: javax.swing.JScrollBar
                    // @ts-ignore
                    incrButton: javax.swing.JButton
                    // @ts-ignore
                    decrButton: javax.swing.JButton
                    // @ts-ignore
                    isDragging: boolean
                    // @ts-ignore
                    trackListener: javax.swing.plaf.basic.BasicScrollBarUI.TrackListener
                    // @ts-ignore
                    buttonListener: javax.swing.plaf.basic.BasicScrollBarUI.ArrowButtonListener
                    // @ts-ignore
                    modelListener: javax.swing.plaf.basic.BasicScrollBarUI.ModelListener
                    // @ts-ignore
                    thumbRect: java.awt.Rectangle
                    // @ts-ignore
                    trackRect: java.awt.Rectangle
                    // @ts-ignore
                    trackHighlight: number /*int*/
                    // @ts-ignore
                    readonly NO_HIGHLIGHT: number /*int*/
                    // @ts-ignore
                    readonly DECREASE_HIGHLIGHT: number /*int*/
                    // @ts-ignore
                    readonly INCREASE_HIGHLIGHT: number /*int*/
                    // @ts-ignore
                    scrollListener: javax.swing.plaf.basic.BasicScrollBarUI.ScrollListener
                    // @ts-ignore
                    propertyChangeListener: java.beans.PropertyChangeListener
                    // @ts-ignore
                    scrollTimer: javax.swing.Timer
                    /**
                     * Hint as to what width (when vertical) or height (when horizontal)
                     * should be.
                     * @since 1.7
                     */
                    // @ts-ignore
                    scrollBarWidth: number /*int*/
                    /**
                     * Distance between the increment button and the track. This may be a negative
                     * number. If negative, then an overlap between the button and track will occur,
                     * which is useful for shaped buttons.
                     * @since 1.7
                     */
                    // @ts-ignore
                    incrGap: number /*int*/
                    /**
                     * Distance between the decrement button and the track. This may be a negative
                     * number. If negative, then an overlap between the button and track will occur,
                     * which is useful for shaped buttons.
                     * @since 1.7
                     */
                    // @ts-ignore
                    decrGap: number /*int*/
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    configureScrollBarColors(): void
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installDefaults(): void
                    // @ts-ignore
                    installComponents(): void
                    // @ts-ignore
                    uninstallComponents(): void
                    // @ts-ignore
                    installListeners(): void
                    // @ts-ignore
                    installKeyboardActions(): void
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    uninstallDefaults(): void
                    // @ts-ignore
                    createTrackListener(): javax.swing.plaf.basic.BasicScrollBarUI.TrackListener
                    // @ts-ignore
                    createArrowButtonListener(): javax.swing.plaf.basic.BasicScrollBarUI.ArrowButtonListener
                    // @ts-ignore
                    createModelListener(): javax.swing.plaf.basic.BasicScrollBarUI.ModelListener
                    // @ts-ignore
                    createScrollListener(): javax.swing.plaf.basic.BasicScrollBarUI.ScrollListener
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                    /**
                     * Sets whether or not the mouse is currently over the thumb.
                     * @param active True indicates the thumb is currently active.
                     * @since 1.5
                     */
                    // @ts-ignore
                    setThumbRollover(active: boolean): void
                    /**
                     * Returns true if the mouse is currently over the thumb.
                     * @return true if the thumb is currently active
                     * @since 1.5
                     */
                    // @ts-ignore
                    isThumbRollover(): boolean
                    // @ts-ignore
                    paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * A vertical scrollbar's preferred width is the maximum of
                     * preferred widths of the (non <code>null</code>)
                     * increment/decrement buttons,
                     * and the minimum width of the thumb. The preferred height is the
                     * sum of the preferred heights of the same parts.  The basis for
                     * the preferred size of a horizontal scrollbar is similar.
                     * <p>
                     * The <code>preferredSize</code> is only computed once, subsequent
                     * calls to this method just return a cached size.
                     * @param c the <code>JScrollBar</code> that's delegating this method to us
                     * @return the preferred size of a Basic JScrollBar
                     * @see #getMaximumSize
                     * @see #getMinimumSize
                     */
                    // @ts-ignore
                    getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * @param c The JScrollBar that's delegating this method to us.
                     * @return new Dimension(Integer.MAX_VALUE, Integer.MAX_VALUE);
                     * @see #getMinimumSize
                     * @see #getPreferredSize
                     */
                    // @ts-ignore
                    getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    createDecreaseButton(orientation: number /*int*/): javax.swing.JButton
                    // @ts-ignore
                    createIncreaseButton(orientation: number /*int*/): javax.swing.JButton
                    // @ts-ignore
                    paintDecreaseHighlight(g: java.awt.Graphics): void
                    // @ts-ignore
                    paintIncreaseHighlight(g: java.awt.Graphics): void
                    // @ts-ignore
                    paintTrack(g: java.awt.Graphics, c: javax.swing.JComponent, trackBounds: java.awt.Rectangle): void
                    // @ts-ignore
                    paintThumb(g: java.awt.Graphics, c: javax.swing.JComponent, thumbBounds: java.awt.Rectangle): void
                    /**
                     * Returns the smallest acceptable size for the thumb.  If the scrollbar
                     * becomes so small that this size isn't available, the thumb will be
                     * hidden.
                     * <p>
                     * <b>Warning </b>: the value returned by this method should not be
                     * be modified, it's a shared static constant.
                     * @return The smallest acceptable size for the thumb.
                     * @see #getMaximumThumbSize
                     */
                    // @ts-ignore
                    getMinimumThumbSize(): java.awt.Dimension
                    /**
                     * Returns the largest acceptable size for the thumb.  To create a fixed
                     * size thumb one make this method and <code>getMinimumThumbSize</code>
                     * return the same value.
                     * <p>
                     * <b>Warning </b>: the value returned by this method should not be
                     * be modified, it's a shared static constant.
                     * @return The largest acceptable size for the thumb.
                     * @see #getMinimumThumbSize
                     */
                    // @ts-ignore
                    getMaximumThumbSize(): java.awt.Dimension
                    // @ts-ignore
                    addLayoutComponent(name: string, child: java.awt.Component): void
                    // @ts-ignore
                    removeLayoutComponent(child: java.awt.Component): void
                    // @ts-ignore
                    preferredLayoutSize(scrollbarContainer: java.awt.Container): java.awt.Dimension
                    // @ts-ignore
                    minimumLayoutSize(scrollbarContainer: java.awt.Container): java.awt.Dimension
                    // @ts-ignore
                    layoutVScrollbar(sb: javax.swing.JScrollBar): void
                    // @ts-ignore
                    layoutHScrollbar(sb: javax.swing.JScrollBar): void
                    // @ts-ignore
                    layoutContainer(scrollbarContainer: java.awt.Container): void
                    /**
                     * Set the bounds of the thumb and force a repaint that includes
                     * the old thumbBounds and the new one.
                     * @see #getThumbBounds
                     */
                    // @ts-ignore
                    setThumbBounds(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
                    /**
                     * Return the current size/location of the thumb.
                     * <p>
                     * <b>Warning </b>: the value returned by this method should not be
                     * be modified, it's a reference to the actual rectangle, not a copy.
                     * @return The current size/location of the thumb.
                     * @see #setThumbBounds
                     */
                    // @ts-ignore
                    getThumbBounds(): java.awt.Rectangle
                    /**
                     * Returns the current bounds of the track, i.e. the space in between
                     * the increment and decrement buttons, less the insets.  The value
                     * returned by this method is updated each time the scrollbar is
                     * laid out (validated).
                     * <p>
                     * <b>Warning </b>: the value returned by this method should not be
                     * be modified, it's a reference to the actual rectangle, not a copy.
                     * @return the current bounds of the scrollbar track
                     * @see #layoutContainer
                     */
                    // @ts-ignore
                    getTrackBounds(): java.awt.Rectangle
                    // @ts-ignore
                    scrollByBlock(direction: number /*int*/): void
                    // @ts-ignore
                    scrollByUnit(direction: number /*int*/): void
                    /**
                     * Indicates whether the user can absolutely position the thumb with
                     * a mouse gesture (usually the middle mouse button).
                     * @return true if a mouse gesture can absolutely position the thumb
                     * @since 1.5
                     */
                    // @ts-ignore
                    getSupportsAbsolutePositioning(): boolean
                }
            }
        }
    }
}
