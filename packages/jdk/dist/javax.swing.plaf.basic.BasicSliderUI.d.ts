declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * A Basic L&amp;F implementation of SliderUI.
                 * @author Tom Santos
                 */
                // @ts-ignore
                class BasicSliderUI extends javax.swing.plaf.SliderUI {
                    // @ts-ignore
                    constructor(b: javax.swing.JSlider)
                    // @ts-ignore
                    readonly POSITIVE_SCROLL: number /*int*/
                    // @ts-ignore
                    readonly NEGATIVE_SCROLL: number /*int*/
                    // @ts-ignore
                    readonly MIN_SCROLL: number /*int*/
                    // @ts-ignore
                    readonly MAX_SCROLL: number /*int*/
                    // @ts-ignore
                    scrollTimer: javax.swing.Timer
                    // @ts-ignore
                    slider: javax.swing.JSlider
                    // @ts-ignore
                    focusInsets: java.awt.Insets
                    // @ts-ignore
                    insetCache: java.awt.Insets
                    // @ts-ignore
                    leftToRightCache: boolean
                    // @ts-ignore
                    focusRect: java.awt.Rectangle
                    // @ts-ignore
                    contentRect: java.awt.Rectangle
                    // @ts-ignore
                    labelRect: java.awt.Rectangle
                    // @ts-ignore
                    tickRect: java.awt.Rectangle
                    // @ts-ignore
                    trackRect: java.awt.Rectangle
                    // @ts-ignore
                    thumbRect: java.awt.Rectangle
                    // @ts-ignore
                    trackBuffer: number /*int*/
                    // @ts-ignore
                    trackListener: javax.swing.plaf.basic.BasicSliderUI.TrackListener
                    // @ts-ignore
                    changeListener: javax.swing.event.ChangeListener
                    // @ts-ignore
                    componentListener: java.awt.event.ComponentListener
                    // @ts-ignore
                    focusListener: java.awt.event.FocusListener
                    // @ts-ignore
                    scrollListener: javax.swing.plaf.basic.BasicSliderUI.ScrollListener
                    // @ts-ignore
                    propertyChangeListener: java.beans.PropertyChangeListener
                    // @ts-ignore
                    getShadowColor(): java.awt.Color
                    // @ts-ignore
                    getHighlightColor(): java.awt.Color
                    // @ts-ignore
                    getFocusColor(): java.awt.Color
                    /**
                     * Returns true if the user is dragging the slider.
                     * @return true if the user is dragging the slider
                     * @since 1.5
                     */
                    // @ts-ignore
                    isDragging(): boolean
                    // @ts-ignore
                    createUI(b: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installDefaults(slider: javax.swing.JSlider): void
                    // @ts-ignore
                    uninstallDefaults(slider: javax.swing.JSlider): void
                    // @ts-ignore
                    createTrackListener(slider: javax.swing.JSlider): javax.swing.plaf.basic.BasicSliderUI.TrackListener
                    // @ts-ignore
                    createChangeListener(slider: javax.swing.JSlider): javax.swing.event.ChangeListener
                    // @ts-ignore
                    createComponentListener(slider: javax.swing.JSlider): java.awt.event.ComponentListener
                    // @ts-ignore
                    createFocusListener(slider: javax.swing.JSlider): java.awt.event.FocusListener
                    // @ts-ignore
                    createScrollListener(slider: javax.swing.JSlider): javax.swing.plaf.basic.BasicSliderUI.ScrollListener
                    // @ts-ignore
                    createPropertyChangeListener(slider: javax.swing.JSlider): java.beans.PropertyChangeListener
                    // @ts-ignore
                    installListeners(slider: javax.swing.JSlider): void
                    // @ts-ignore
                    uninstallListeners(slider: javax.swing.JSlider): void
                    // @ts-ignore
                    installKeyboardActions(slider: javax.swing.JSlider): void
                    // @ts-ignore
                    uninstallKeyboardActions(slider: javax.swing.JSlider): void
                    /**
                     * Returns the baseline.
                     * @throws NullPointerException {#inheritDoc}
                     * @throws IllegalArgumentException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): int
                    /**
                     * Returns an enum indicating how the baseline of the component
                     * changes as the size changes.
                     * @throws NullPointerException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaselineResizeBehavior(c: javax.swing.JComponent): java.awt.Component.BaselineResizeBehavior
                    /**
                     * Returns true if all the labels from the label table have the same
                     * baseline.
                     * @return true if all the labels from the label table have the
                     *          same baseline
                     * @since 1.6
                     */
                    // @ts-ignore
                    labelsHaveSameBaselines(): boolean
                    // @ts-ignore
                    getPreferredHorizontalSize(): java.awt.Dimension
                    // @ts-ignore
                    getPreferredVerticalSize(): java.awt.Dimension
                    // @ts-ignore
                    getMinimumHorizontalSize(): java.awt.Dimension
                    // @ts-ignore
                    getMinimumVerticalSize(): java.awt.Dimension
                    // @ts-ignore
                    getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    calculateGeometry(): void
                    // @ts-ignore
                    calculateFocusRect(): void
                    // @ts-ignore
                    calculateThumbSize(): void
                    // @ts-ignore
                    calculateContentRect(): void
                    // @ts-ignore
                    calculateThumbLocation(): void
                    // @ts-ignore
                    calculateTrackBuffer(): void
                    // @ts-ignore
                    calculateTrackRect(): void
                    /**
                     * Gets the height of the tick area for horizontal sliders and the width of the
                     * tick area for vertical sliders.  BasicSliderUI uses the returned value to
                     * determine the tick area rectangle.  If you want to give your ticks some room,
                     * make this larger than you need and paint your ticks away from the sides in paintTicks().
                     */
                    // @ts-ignore
                    getTickLength(): int
                    // @ts-ignore
                    calculateTickRect(): void
                    // @ts-ignore
                    calculateLabelRect(): void
                    // @ts-ignore
                    getThumbSize(): java.awt.Dimension
                    // @ts-ignore
                    getWidthOfWidestLabel(): int
                    // @ts-ignore
                    getHeightOfTallestLabel(): int
                    // @ts-ignore
                    getWidthOfHighValueLabel(): int
                    // @ts-ignore
                    getWidthOfLowValueLabel(): int
                    // @ts-ignore
                    getHeightOfHighValueLabel(): int
                    // @ts-ignore
                    getHeightOfLowValueLabel(): int
                    // @ts-ignore
                    drawInverted(): boolean
                    /**
                     * Returns the biggest value that has an entry in the label table.
                     * @return biggest value that has an entry in the label table, or
                     *          null.
                     * @since 1.6
                     */
                    // @ts-ignore
                    getHighestValue(): java.lang.Integer
                    /**
                     * Returns the smallest value that has an entry in the label table.
                     * @return smallest value that has an entry in the label table, or
                     *          null.
                     * @since 1.6
                     */
                    // @ts-ignore
                    getLowestValue(): java.lang.Integer
                    /**
                     * Returns the label that corresponds to the highest slider value in the label table.
                     * @see JSlider#setLabelTable
                     */
                    // @ts-ignore
                    getLowestValueLabel(): java.awt.Component
                    /**
                     * Returns the label that corresponds to the lowest slider value in the label table.
                     * @see JSlider#setLabelTable
                     */
                    // @ts-ignore
                    getHighestValueLabel(): java.awt.Component
                    // @ts-ignore
                    paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    recalculateIfInsetsChanged(): void
                    // @ts-ignore
                    recalculateIfOrientationChanged(): void
                    // @ts-ignore
                    paintFocus(g: java.awt.Graphics): void
                    // @ts-ignore
                    paintTrack(g: java.awt.Graphics): void
                    // @ts-ignore
                    paintTicks(g: java.awt.Graphics): void
                    // @ts-ignore
                    paintMinorTickForHorizSlider(g: java.awt.Graphics, tickBounds: java.awt.Rectangle, x: number /*int*/): void
                    // @ts-ignore
                    paintMajorTickForHorizSlider(g: java.awt.Graphics, tickBounds: java.awt.Rectangle, x: number /*int*/): void
                    // @ts-ignore
                    paintMinorTickForVertSlider(g: java.awt.Graphics, tickBounds: java.awt.Rectangle, y: number /*int*/): void
                    // @ts-ignore
                    paintMajorTickForVertSlider(g: java.awt.Graphics, tickBounds: java.awt.Rectangle, y: number /*int*/): void
                    // @ts-ignore
                    paintLabels(g: java.awt.Graphics): void
                    /**
                     * Called for every label in the label table.  Used to draw the labels for horizontal sliders.
                     * The graphics have been translated to labelRect.y already.
                     * @see JSlider#setLabelTable
                     */
                    // @ts-ignore
                    paintHorizontalLabel(g: java.awt.Graphics, value: number /*int*/, label: java.awt.Component): void
                    /**
                     * Called for every label in the label table.  Used to draw the labels for vertical sliders.
                     * The graphics have been translated to labelRect.x already.
                     * @see JSlider#setLabelTable
                     */
                    // @ts-ignore
                    paintVerticalLabel(g: java.awt.Graphics, value: number /*int*/, label: java.awt.Component): void
                    // @ts-ignore
                    paintThumb(g: java.awt.Graphics): void
                    // @ts-ignore
                    setThumbLocation(x: number /*int*/, y: number /*int*/): void
                    // @ts-ignore
                    scrollByBlock(direction: number /*int*/): void
                    // @ts-ignore
                    scrollByUnit(direction: number /*int*/): void
                    /**
                     * This function is called when a mousePressed was detected in the track, not
                     * in the thumb.  The default behavior is to scroll by block.  You can
                     * override this method to stop it from scrolling or to add additional behavior.
                     */
                    // @ts-ignore
                    scrollDueToClickInTrack(dir: number /*int*/): void
                    // @ts-ignore
                    xPositionForValue(value: number /*int*/): int
                    // @ts-ignore
                    yPositionForValue(value: number /*int*/): int
                    /**
                     * Returns the y location for the specified value.  No checking is
                     * done on the arguments.  In particular if <code>trackHeight</code> is
                     * negative undefined results may occur.
                     * @param value the slider value to get the location for
                     * @param trackY y-origin of the track
                     * @param trackHeight the height of the track
                     * @since 1.6
                     */
                    // @ts-ignore
                    yPositionForValue(value: number /*int*/, trackY: number /*int*/, trackHeight: number /*int*/): int
                    /**
                     * Returns the value at the y position. If {@code yPos} is beyond the
                     * track at the the bottom or the top, this method sets the value to either
                     * the minimum or maximum value of the slider, depending on if the slider
                     * is inverted or not.
                     */
                    // @ts-ignore
                    valueForYPosition(yPos: number /*int*/): int
                    /**
                     * Returns the value at the x position.  If {@code xPos} is beyond the
                     * track at the left or the right, this method sets the value to either the
                     * minimum or maximum value of the slider, depending on if the slider is
                     * inverted or not.
                     */
                    // @ts-ignore
                    valueForXPosition(xPos: number /*int*/): int
                }
            }
        }
    }
}
