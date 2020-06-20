declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Divider used by BasicSplitPaneUI. Subclassers may wish to override
                 * paint to do something more interesting.
                 * The border effect is drawn in BasicSplitPaneUI, so if you don't like
                 * that border, reset it there.
                 * To conditionally drag from certain areas subclass mousePressed and
                 * call super when you wish the dragging to begin.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Scott Violet
                 */
                // @ts-ignore
                class BasicSplitPaneDivider extends java.awt.Container implements java.beans.PropertyChangeListener {
                    /**
                     * Creates an instance of BasicSplitPaneDivider. Registers this
                     * instance for mouse events and mouse dragged events.
                     */
                    // @ts-ignore
                    constructor(ui: javax.swing.plaf.basic.BasicSplitPaneUI)
                    /**
                     * Width or height of the divider based on orientation
                     * BasicSplitPaneUI adds two to this.
                     */
                    // @ts-ignore
                    readonly ONE_TOUCH_SIZE: number /*int*/
                    // @ts-ignore
                    readonly ONE_TOUCH_OFFSET: number /*int*/
                    /**
                     * Handles mouse dragging message to do the actual dragging.
                     */
                    // @ts-ignore
                    dragger: javax.swing.plaf.basic.BasicSplitPaneDivider.DragController
                    /**
                     * UI this instance was created from.
                     */
                    // @ts-ignore
                    splitPaneUI: javax.swing.plaf.basic.BasicSplitPaneUI
                    /**
                     * Size of the divider.
                     */
                    // @ts-ignore
                    dividerSize: number /*int*/
                    /**
                     * Divider that is used for noncontinuous layout mode.
                     */
                    // @ts-ignore
                    hiddenDivider: java.awt.Component
                    /**
                     * JSplitPane the receiver is contained in.
                     */
                    // @ts-ignore
                    splitPane: javax.swing.JSplitPane
                    /**
                     * Handles mouse events from both this class, and the split pane.
                     * Mouse events are handled for the splitpane since you want to be able
                     * to drag when clicking on the border of the divider, which is not
                     * drawn by the divider.
                     */
                    // @ts-ignore
                    mouseHandler: javax.swing.plaf.basic.BasicSplitPaneDivider.MouseHandler
                    /**
                     * Orientation of the JSplitPane.
                     */
                    // @ts-ignore
                    orientation: number /*int*/
                    /**
                     * Button for quickly toggling the left component.
                     */
                    // @ts-ignore
                    leftButton: javax.swing.JButton
                    /**
                     * Button for quickly toggling the right component.
                     */
                    // @ts-ignore
                    rightButton: javax.swing.JButton
                    /**
                     * Sets the SplitPaneUI that is using the receiver.
                     */
                    // @ts-ignore
                    setBasicSplitPaneUI(newUI: javax.swing.plaf.basic.BasicSplitPaneUI): void
                    /**
                     * Returns the <code>SplitPaneUI</code> the receiver is currently
                     * in.
                     */
                    // @ts-ignore
                    getBasicSplitPaneUI(): javax.swing.plaf.basic.BasicSplitPaneUI
                    /**
                     * Sets the size of the divider to <code>newSize</code>. That is
                     * the width if the splitpane is <code>HORIZONTAL_SPLIT</code>, or
                     * the height of <code>VERTICAL_SPLIT</code>.
                     */
                    // @ts-ignore
                    setDividerSize(newSize: number /*int*/): void
                    /**
                     * Returns the size of the divider, that is the width if the splitpane
                     * is HORIZONTAL_SPLIT, or the height of VERTICAL_SPLIT.
                     */
                    // @ts-ignore
                    getDividerSize(): int
                    /**
                     * Sets the border of this component.
                     * @since 1.3
                     */
                    // @ts-ignore
                    setBorder(border: javax.swing.border.Border): void
                    /**
                     * Returns the border of this component or null if no border is
                     * currently set.
                     * @return the border object for this component
                     * @see #setBorder
                     * @since 1.3
                     */
                    // @ts-ignore
                    getBorder(): javax.swing.border.Border
                    /**
                     * If a border has been set on this component, returns the
                     * border's insets, else calls super.getInsets.
                     * @return the value of the insets property.
                     * @see #setBorder
                     */
                    // @ts-ignore
                    getInsets(): java.awt.Insets
                    /**
                     * Sets whether or not the mouse is currently over the divider.
                     * @param mouseOver whether or not the mouse is currently over the divider
                     * @since 1.5
                     */
                    // @ts-ignore
                    setMouseOver(mouseOver: boolean): void
                    /**
                     * Returns whether or not the mouse is currently over the divider
                     * @return whether or not the mouse is currently over the divider
                     * @since 1.5
                     */
                    // @ts-ignore
                    isMouseOver(): boolean
                    /**
                     * Returns dividerSize x dividerSize
                     */
                    // @ts-ignore
                    getPreferredSize(): java.awt.Dimension
                    /**
                     * Returns dividerSize x dividerSize
                     */
                    // @ts-ignore
                    getMinimumSize(): java.awt.Dimension
                    /**
                     * Property change event, presumably from the JSplitPane, will message
                     * updateOrientation if necessary.
                     */
                    // @ts-ignore
                    propertyChange(e: java.beans.PropertyChangeEvent): void
                    /**
                     * Paints the divider.
                     */
                    // @ts-ignore
                    paint(g: java.awt.Graphics): void
                    /**
                     * Messaged when the oneTouchExpandable value of the JSplitPane the
                     * receiver is contained in changes. Will create the
                     * <code>leftButton</code> and <code>rightButton</code> if they
                     * are null. invalidates the receiver as well.
                     */
                    // @ts-ignore
                    oneTouchExpandableChanged(): void
                    /**
                     * Creates and return an instance of JButton that can be used to
                     * collapse the left component in the split pane.
                     */
                    // @ts-ignore
                    createLeftOneTouchButton(): javax.swing.JButton
                    /**
                     * Creates and return an instance of JButton that can be used to
                     * collapse the right component in the split pane.
                     */
                    // @ts-ignore
                    createRightOneTouchButton(): javax.swing.JButton
                    /**
                     * Message to prepare for dragging. This messages the BasicSplitPaneUI
                     * with startDragging.
                     */
                    // @ts-ignore
                    prepareForDragging(): void
                    /**
                     * Messages the BasicSplitPaneUI with dragDividerTo that this instance
                     * is contained in.
                     */
                    // @ts-ignore
                    dragDividerTo(location: number /*int*/): void
                    /**
                     * Messages the BasicSplitPaneUI with finishDraggingTo that this instance
                     * is contained in.
                     */
                    // @ts-ignore
                    finishDraggingTo(location: number /*int*/): void
                }
            }
        }
    }
}
