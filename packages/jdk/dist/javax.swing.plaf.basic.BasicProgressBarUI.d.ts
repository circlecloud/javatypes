declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * A Basic L&amp;F implementation of ProgressBarUI.
                 * @author Michael C. Albers
                 * @author Kathy Walrath
                 */
                // @ts-ignore
                class BasicProgressBarUI extends javax.swing.plaf.ProgressBarUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    progressBar: javax.swing.JProgressBar
                    // @ts-ignore
                    changeListener: javax.swing.event.ChangeListener
                    /**
                     * Used to hold the location and size of the bouncing box (returned
                     * by getBox) to be painted.
                     * @since 1.5
                     */
                    // @ts-ignore
                    boxRect: java.awt.Rectangle
                    // @ts-ignore
                    public static createUI(x: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installDefaults(): void
                    // @ts-ignore
                    uninstallDefaults(): void
                    // @ts-ignore
                    installListeners(): void
                    /**
                     * Starts the animation thread, creating and initializing
                     * it if necessary. This method is invoked when an
                     * indeterminate progress bar should start animating.
                     * Reasons for this may include:
                     * <ul>
                     * <li>The progress bar is determinate and becomes displayable
                     * <li>The progress bar is displayable and becomes determinate
                     * <li>The progress bar is displayable and determinate and this
                     * UI is installed
                     * </ul>
                     * If you implement your own animation thread,
                     * you must override this method.
                     * @since 1.4
                     * @see #stopAnimationTimer
                     */
                    // @ts-ignore
                    startAnimationTimer(): void
                    /**
                     * Stops the animation thread.
                     * This method is invoked when the indeterminate
                     * animation should be stopped. Reasons for this may include:
                     * <ul>
                     * <li>The progress bar changes to determinate
                     * <li>The progress bar is no longer part of a displayable hierarchy
                     * <li>This UI in uninstalled
                     * </ul>
                     * If you implement your own animation thread,
                     * you must override this method.
                     * @since 1.4
                     * @see #startAnimationTimer
                     */
                    // @ts-ignore
                    stopAnimationTimer(): void
                    /**
                     * Removes all listeners installed by this object.
                     */
                    // @ts-ignore
                    uninstallListeners(): void
                    /**
                     * Returns the baseline.
                     * @throws NullPointerException {#inheritDoc}
                     * @throws IllegalArgumentException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    public getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): number /*int*/
                    /**
                     * Returns an enum indicating how the baseline of the component
                     * changes as the size changes.
                     * @throws NullPointerException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    public getBaselineResizeBehavior(c: javax.swing.JComponent): java.awt.Component.BaselineResizeBehavior
                    // @ts-ignore
                    getPreferredInnerHorizontal(): java.awt.Dimension
                    // @ts-ignore
                    getPreferredInnerVertical(): java.awt.Dimension
                    /**
                     * The "selectionForeground" is the color of the text when it is painted
                     * over a filled area of the progress bar.
                     */
                    // @ts-ignore
                    getSelectionForeground(): java.awt.Color
                    /**
                     * The "selectionBackground" is the color of the text when it is painted
                     * over an unfilled area of the progress bar.
                     */
                    // @ts-ignore
                    getSelectionBackground(): java.awt.Color
                    /**
                     * Returns the width (if HORIZONTAL) or height (if VERTICAL)
                     * of each of the individual cells/units to be rendered in the
                     * progress bar. However, for text rendering simplification and
                     * aesthetic considerations, this function will return 1 when
                     * the progress string is being rendered.
                     * @return the value representing the spacing between cells
                     * @see #setCellLength
                     * @see JProgressBar#isStringPainted
                     */
                    // @ts-ignore
                    getCellLength(): number /*int*/
                    // @ts-ignore
                    setCellLength(cellLen: number /*int*/): void
                    /**
                     * Returns the spacing between each of the cells/units in the
                     * progress bar. However, for text rendering simplification and
                     * aesthetic considerations, this function will return 0 when
                     * the progress string is being rendered.
                     * @return the value representing the spacing between cells
                     * @see #setCellSpacing
                     * @see JProgressBar#isStringPainted
                     */
                    // @ts-ignore
                    getCellSpacing(): number /*int*/
                    // @ts-ignore
                    setCellSpacing(cellSpace: number /*int*/): void
                    /**
                     * This determines the amount of the progress bar that should be filled
                     * based on the percent done gathered from the model. This is a common
                     * operation so it was abstracted out. It assumes that your progress bar
                     * is linear. That is, if you are making a circular progress indicator,
                     * you will want to override this method.
                     */
                    // @ts-ignore
                    getAmountFull(b: java.awt.Insets, width: number /*int*/, height: number /*int*/): number /*int*/
                    /**
                     * Delegates painting to one of two methods:
                     * paintDeterminate or paintIndeterminate.
                     */
                    // @ts-ignore
                    public paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * Stores the position and size of
                     * the bouncing box that would be painted for the current animation index
                     * in <code>r</code> and returns <code>r</code>.
                     * Subclasses that add to the painting performed
                     * in this class's implementation of <code>paintIndeterminate</code> --
                     * to draw an outline around the bouncing box, for example --
                     * can use this method to get the location of the bouncing
                     * box that was just painted.
                     * By overriding this method,
                     * you have complete control over the size and position
                     * of the bouncing box,
                     * without having to reimplement <code>paintIndeterminate</code>.
                     * @param r  the Rectangle instance to be modified;
                     *            may be <code>null</code>
                     * @return <code>null</code> if no box should be drawn;
                     *            otherwise, returns the passed-in rectangle
                     *            (if non-null)
                     *            or a new rectangle
                     * @see #setAnimationIndex
                     * @since 1.4
                     */
                    // @ts-ignore
                    getBox(r: java.awt.Rectangle): java.awt.Rectangle
                    /**
                     * Returns the length
                     * of the "bouncing box" to be painted.
                     * This method is invoked by the
                     * default implementation of <code>paintIndeterminate</code>
                     * to get the width (if the progress bar is horizontal)
                     * or height (if vertical) of the box.
                     * For example:
                     * <blockquote>
                     * <pre>
                     * boxRect.width = getBoxLength(componentInnards.width,
                     * componentInnards.height);
                     * </pre>
                     * </blockquote>
                     * @param availableLength  the amount of space available
                     *                          for the bouncing box to move in;
                     *                          for a horizontal progress bar,
                     *                          for example,
                     *                          this should be
                     *                          the inside width of the progress bar
                     *                          (the component width minus borders)
                     * @param otherDimension   for a horizontal progress bar, this should be
                     *                          the inside height of the progress bar; this
                     *                          value might be used to constrain or determine
                     *                          the return value
                     * @return the size of the box dimension being determined;
                     *          must be no larger than <code>availableLength</code>
                     * @see javax.swing.SwingUtilities#calculateInnerArea
                     * @since 1.5
                     */
                    // @ts-ignore
                    getBoxLength(availableLength: number /*int*/, otherDimension: number /*int*/): number /*int*/
                    /**
                     * All purpose paint method that should do the right thing for all
                     * linear bouncing-box progress bars.
                     * Override this if you are making another kind of
                     * progress bar.
                     * @see #paintDeterminate
                     * @since 1.4
                     */
                    // @ts-ignore
                    paintIndeterminate(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * All purpose paint method that should do the right thing for almost
                     * all linear, determinate progress bars. By setting a few values in
                     * the defaults
                     * table, things should work just fine to paint your progress bar.
                     * Naturally, override this if you are making a circular or
                     * semi-circular progress bar.
                     * @see #paintIndeterminate
                     * @since 1.4
                     */
                    // @ts-ignore
                    paintDeterminate(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    paintString(g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/, amountFull: number /*int*/, b: java.awt.Insets): void
                    /**
                     * Designate the place where the progress string will be painted.
                     * This implementation places it at the center of the progress
                     * bar (in both x and y). Override this if you want to right,
                     * left, top, or bottom align the progress string or if you need
                     * to nudge it around for any reason.
                     */
                    // @ts-ignore
                    getStringPlacement(g: java.awt.Graphics, progressString: java.lang.String | string, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): java.awt.Point
                    // @ts-ignore
                    public getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * The Minimum size for this component is 10. The rationale here
                     * is that there should be at least one pixel per 10 percent.
                     */
                    // @ts-ignore
                    public getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    public getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Gets the index of the current animation frame.
                     * @since 1.4
                     */
                    // @ts-ignore
                    getAnimationIndex(): number /*int*/
                    /**
                     * Returns the number of frames for the complete animation loop
                     * used by an indeterminate JProgessBar. The progress chunk will go
                     * from one end to the other and back during the entire loop. This
                     * visual behavior may be changed by subclasses in other Look and Feels.
                     * @return the number of frames
                     * @since 1.6
                     */
                    // @ts-ignore
                    getFrameCount(): number /*int*/
                    /**
                     * Sets the index of the current animation frame
                     * to the specified value and requests that the
                     * progress bar be repainted.
                     * Subclasses that don't use the default painting code
                     * might need to override this method
                     * to change the way that the <code>repaint</code> method
                     * is invoked.
                     * @param newValue the new animation index; no checking
                     *                  is performed on its value
                     * @see #incrementAnimationIndex
                     * @since 1.4
                     */
                    // @ts-ignore
                    setAnimationIndex(newValue: number /*int*/): void
                    /**
                     * Sets the index of the current animation frame,
                     * to the next valid value,
                     * which results in the progress bar being repainted.
                     * The next valid value is, by default,
                     * the current animation index plus one.
                     * If the new value would be too large,
                     * this method sets the index to 0.
                     * Subclasses might need to override this method
                     * to ensure that the index does not go over
                     * the number of frames needed for the particular
                     * progress bar instance.
                     * This method is invoked by the default animation thread
                     * every <em>X</em> milliseconds,
                     * where <em>X</em> is specified by the "ProgressBar.repaintInterval"
                     * UI default.
                     * @see #setAnimationIndex
                     * @since 1.4
                     */
                    // @ts-ignore
                    incrementAnimationIndex(): void
                }
            }
        }
    }
}
