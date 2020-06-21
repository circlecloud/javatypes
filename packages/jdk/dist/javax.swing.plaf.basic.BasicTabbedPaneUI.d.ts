declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * A Basic L&amp;F implementation of TabbedPaneUI.
                 * @author Amy Fowler
                 * @author Philip Milne
                 * @author Steve Wilson
                 * @author Tom Santos
                 * @author Dave Moore
                 */
                // @ts-ignore
                class BasicTabbedPaneUI extends javax.swing.plaf.TabbedPaneUI implements javax.swing.SwingConstants {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    tabPane: javax.swing.JTabbedPane
                    // @ts-ignore
                    highlight: java.awt.Color
                    // @ts-ignore
                    lightHighlight: java.awt.Color
                    // @ts-ignore
                    shadow: java.awt.Color
                    // @ts-ignore
                    darkShadow: java.awt.Color
                    // @ts-ignore
                    focus: java.awt.Color
                    // @ts-ignore
                    textIconGap: number /*int*/
                    // @ts-ignore
                    tabRunOverlay: number /*int*/
                    // @ts-ignore
                    tabInsets: java.awt.Insets
                    // @ts-ignore
                    selectedTabPadInsets: java.awt.Insets
                    // @ts-ignore
                    tabAreaInsets: java.awt.Insets
                    // @ts-ignore
                    contentBorderInsets: java.awt.Insets
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    upKey: javax.swing.KeyStroke
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    downKey: javax.swing.KeyStroke
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    leftKey: javax.swing.KeyStroke
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    rightKey: javax.swing.KeyStroke
                    // @ts-ignore
                    tabRuns: number /*int*/[]
                    // @ts-ignore
                    runCount: number /*int*/
                    // @ts-ignore
                    selectedRun: number /*int*/
                    // @ts-ignore
                    rects: java.awt.Rectangle[]
                    // @ts-ignore
                    maxTabHeight: number /*int*/
                    // @ts-ignore
                    maxTabWidth: number /*int*/
                    // @ts-ignore
                    tabChangeListener: javax.swing.event.ChangeListener
                    // @ts-ignore
                    propertyChangeListener: java.beans.PropertyChangeListener
                    // @ts-ignore
                    mouseListener: java.awt.event.MouseListener
                    // @ts-ignore
                    focusListener: java.awt.event.FocusListener
                    /**
                     * A rectangle used for general layout calculations in order
                     * to avoid constructing many new Rectangles on the fly.
                     */
                    // @ts-ignore
                    calcRect: java.awt.Rectangle
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    /**
                     * Invoked by <code>installUI</code> to create
                     * a layout manager object to manage
                     * the <code>JTabbedPane</code>.
                     * @return a layout manager object
                     * @see TabbedPaneLayout
                     * @see javax.swing.JTabbedPane#getTabLayoutPolicy
                     */
                    // @ts-ignore
                    createLayoutManager(): java.awt.LayoutManager
                    /**
                     * Creates and installs any required subcomponents for the JTabbedPane.
                     * Invoked by installUI.
                     * @since 1.4
                     */
                    // @ts-ignore
                    installComponents(): void
                    /**
                     * Creates and returns a JButton that will provide the user
                     * with a way to scroll the tabs in a particular direction. The
                     * returned JButton must be instance of UIResource.
                     * @param direction One of the SwingConstants constants:
                     *  SOUTH, NORTH, EAST or WEST
                     * @return Widget for user to
                     * @see javax.swing.JTabbedPane#setTabPlacement
                     * @see javax.swing.SwingConstants
                     * @throws IllegalArgumentException if direction is not one of
                     *          NORTH, SOUTH, EAST or WEST
                     * @since 1.5
                     */
                    // @ts-ignore
                    createScrollButton(direction: number /*int*/): javax.swing.JButton
                    /**
                     * Removes any installed subcomponents from the JTabbedPane.
                     * Invoked by uninstallUI.
                     * @since 1.4
                     */
                    // @ts-ignore
                    uninstallComponents(): void
                    // @ts-ignore
                    installDefaults(): void
                    // @ts-ignore
                    uninstallDefaults(): void
                    // @ts-ignore
                    installListeners(): void
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    createMouseListener(): java.awt.event.MouseListener
                    // @ts-ignore
                    createFocusListener(): java.awt.event.FocusListener
                    // @ts-ignore
                    createChangeListener(): javax.swing.event.ChangeListener
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                    // @ts-ignore
                    installKeyboardActions(): void
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    /**
                     * Sets the tab the mouse is currently over to <code>index</code>.
                     * <code>index</code> will be -1 if the mouse is no longer over any
                     * tab. No checking is done to ensure the passed in index identifies a
                     * valid tab.
                     * @param index Index of the tab the mouse is over.
                     * @since 1.5
                     */
                    // @ts-ignore
                    setRolloverTab(index: number /*int*/): void
                    /**
                     * Returns the tab the mouse is currently over, or {@code -1} if the mouse is no
                     * longer over any tab.
                     * @return the tab the mouse is currently over, or {#code -1} if the mouse is no
                     *  longer over any tab
                     * @since 1.5
                     */
                    // @ts-ignore
                    getRolloverTab(): number /*int*/
                    // @ts-ignore
                    public getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    public getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
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
                    /**
                     * Returns the baseline for the specified tab.
                     * @param tab index of tab to get baseline for
                     * @exception IndexOutOfBoundsException if index is out of range
                     *             (index &lt; 0 || index &gt;= tab count)
                     * @return baseline or a value &lt; 0 indicating there is no reasonable
                     *                   baseline
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaseline(tab: number /*int*/): number /*int*/
                    /**
                     * Returns the amount the baseline is offset by.  This is typically
                     * the same as <code>getTabLabelShiftY</code>.
                     * @return amount to offset the baseline by
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaselineOffset(): number /*int*/
                    // @ts-ignore
                    public paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * Paints the tabs in the tab area.
                     * Invoked by paint().
                     * The graphics parameter must be a valid <code>Graphics</code>
                     * object.  Tab placement may be either:
                     * <code>JTabbedPane.TOP</code>, <code>JTabbedPane.BOTTOM</code>,
                     * <code>JTabbedPane.LEFT</code>, or <code>JTabbedPane.RIGHT</code>.
                     * The selected index must be a valid tabbed pane tab index (0 to
                     * tab count - 1, inclusive) or -1 if no tab is currently selected.
                     * The handling of invalid parameters is unspecified.
                     * @param g the graphics object to use for rendering
                     * @param tabPlacement the placement for the tabs within the JTabbedPane
                     * @param selectedIndex the tab index of the selected component
                     * @since 1.4
                     */
                    // @ts-ignore
                    paintTabArea(g: java.awt.Graphics, tabPlacement: number /*int*/, selectedIndex: number /*int*/): void
                    // @ts-ignore
                    paintTab(g: java.awt.Graphics, tabPlacement: number /*int*/, rects: java.awt.Rectangle[], tabIndex: number /*int*/, iconRect: java.awt.Rectangle, textRect: java.awt.Rectangle): void
                    // @ts-ignore
                    layoutLabel(tabPlacement: number /*int*/, metrics: java.awt.FontMetrics, tabIndex: number /*int*/, title: java.lang.String | string, icon: javax.swing.Icon, tabRect: java.awt.Rectangle, iconRect: java.awt.Rectangle, textRect: java.awt.Rectangle, isSelected: boolean): void
                    // @ts-ignore
                    paintIcon(g: java.awt.Graphics, tabPlacement: number /*int*/, tabIndex: number /*int*/, icon: javax.swing.Icon, iconRect: java.awt.Rectangle, isSelected: boolean): void
                    // @ts-ignore
                    paintText(g: java.awt.Graphics, tabPlacement: number /*int*/, font: java.awt.Font, metrics: java.awt.FontMetrics, tabIndex: number /*int*/, title: java.lang.String | string, textRect: java.awt.Rectangle, isSelected: boolean): void
                    // @ts-ignore
                    getTabLabelShiftX(tabPlacement: number /*int*/, tabIndex: number /*int*/, isSelected: boolean): number /*int*/
                    // @ts-ignore
                    getTabLabelShiftY(tabPlacement: number /*int*/, tabIndex: number /*int*/, isSelected: boolean): number /*int*/
                    // @ts-ignore
                    paintFocusIndicator(g: java.awt.Graphics, tabPlacement: number /*int*/, rects: java.awt.Rectangle[], tabIndex: number /*int*/, iconRect: java.awt.Rectangle, textRect: java.awt.Rectangle, isSelected: boolean): void
                    /**
                     * this function draws the border around each tab
                     * note that this function does now draw the background of the tab.
                     * that is done elsewhere
                     */
                    // @ts-ignore
                    paintTabBorder(g: java.awt.Graphics, tabPlacement: number /*int*/, tabIndex: number /*int*/, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, isSelected: boolean): void
                    // @ts-ignore
                    paintTabBackground(g: java.awt.Graphics, tabPlacement: number /*int*/, tabIndex: number /*int*/, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, isSelected: boolean): void
                    // @ts-ignore
                    paintContentBorder(g: java.awt.Graphics, tabPlacement: number /*int*/, selectedIndex: number /*int*/): void
                    // @ts-ignore
                    paintContentBorderTopEdge(g: java.awt.Graphics, tabPlacement: number /*int*/, selectedIndex: number /*int*/, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    // @ts-ignore
                    paintContentBorderLeftEdge(g: java.awt.Graphics, tabPlacement: number /*int*/, selectedIndex: number /*int*/, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    // @ts-ignore
                    paintContentBorderBottomEdge(g: java.awt.Graphics, tabPlacement: number /*int*/, selectedIndex: number /*int*/, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    // @ts-ignore
                    paintContentBorderRightEdge(g: java.awt.Graphics, tabPlacement: number /*int*/, selectedIndex: number /*int*/, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Returns the bounds of the specified tab index.  The bounds are
                     * with respect to the JTabbedPane's coordinate space.
                     */
                    // @ts-ignore
                    public getTabBounds(pane: javax.swing.JTabbedPane, i: number /*int*/): java.awt.Rectangle
                    // @ts-ignore
                    public getTabRunCount(pane: javax.swing.JTabbedPane): number /*int*/
                    /**
                     * Returns the tab index which intersects the specified point
                     * in the JTabbedPane's coordinate space.
                     */
                    // @ts-ignore
                    public tabForCoordinate(pane: javax.swing.JTabbedPane, x: number /*int*/, y: number /*int*/): number /*int*/
                    /**
                     * Returns the bounds of the specified tab in the coordinate space
                     * of the JTabbedPane component.  This is required because the tab rects
                     * are by default defined in the coordinate space of the component where
                     * they are rendered, which could be the JTabbedPane
                     * (for WRAP_TAB_LAYOUT) or a ScrollableTabPanel (SCROLL_TAB_LAYOUT).
                     * This method should be used whenever the tab rectangle must be relative
                     * to the JTabbedPane itself and the result should be placed in a
                     * designated Rectangle object (rather than instantiating and returning
                     * a new Rectangle each time). The tab index parameter must be a valid
                     * tabbed pane tab index (0 to tab count - 1, inclusive).  The destination
                     * rectangle parameter must be a valid <code>Rectangle</code> instance.
                     * The handling of invalid parameters is unspecified.
                     * @param tabIndex the index of the tab
                     * @param dest the rectangle where the result should be placed
                     * @return the resulting rectangle
                     * @since 1.4
                     */
                    // @ts-ignore
                    getTabBounds(tabIndex: number /*int*/, dest: java.awt.Rectangle): java.awt.Rectangle
                    // @ts-ignore
                    getVisibleComponent(): java.awt.Component
                    // @ts-ignore
                    setVisibleComponent(component: java.awt.Component): void
                    // @ts-ignore
                    assureRectsCreated(tabCount: number /*int*/): void
                    // @ts-ignore
                    expandTabRunsArray(): void
                    // @ts-ignore
                    getRunForTab(tabCount: number /*int*/, tabIndex: number /*int*/): number /*int*/
                    // @ts-ignore
                    lastTabInRun(tabCount: number /*int*/, run: number /*int*/): number /*int*/
                    // @ts-ignore
                    getTabRunOverlay(tabPlacement: number /*int*/): number /*int*/
                    // @ts-ignore
                    getTabRunIndent(tabPlacement: number /*int*/, run: number /*int*/): number /*int*/
                    // @ts-ignore
                    shouldPadTabRun(tabPlacement: number /*int*/, run: number /*int*/): boolean
                    // @ts-ignore
                    shouldRotateTabRuns(tabPlacement: number /*int*/): boolean
                    // @ts-ignore
                    getIconForTab(tabIndex: number /*int*/): javax.swing.Icon
                    /**
                     * Returns the text View object required to render stylized text (HTML) for
                     * the specified tab or null if no specialized text rendering is needed
                     * for this tab. This is provided to support html rendering inside tabs.
                     * @param tabIndex the index of the tab
                     * @return the text view to render the tab's text or null if no
                     *          specialized rendering is required
                     * @since 1.4
                     */
                    // @ts-ignore
                    getTextViewForTab(tabIndex: number /*int*/): javax.swing.text.View
                    // @ts-ignore
                    calculateTabHeight(tabPlacement: number /*int*/, tabIndex: number /*int*/, fontHeight: number /*int*/): number /*int*/
                    // @ts-ignore
                    calculateMaxTabHeight(tabPlacement: number /*int*/): number /*int*/
                    // @ts-ignore
                    calculateTabWidth(tabPlacement: number /*int*/, tabIndex: number /*int*/, metrics: java.awt.FontMetrics): number /*int*/
                    // @ts-ignore
                    calculateMaxTabWidth(tabPlacement: number /*int*/): number /*int*/
                    // @ts-ignore
                    calculateTabAreaHeight(tabPlacement: number /*int*/, horizRunCount: number /*int*/, maxTabHeight: number /*int*/): number /*int*/
                    // @ts-ignore
                    calculateTabAreaWidth(tabPlacement: number /*int*/, vertRunCount: number /*int*/, maxTabWidth: number /*int*/): number /*int*/
                    // @ts-ignore
                    getTabInsets(tabPlacement: number /*int*/, tabIndex: number /*int*/): java.awt.Insets
                    // @ts-ignore
                    getSelectedTabPadInsets(tabPlacement: number /*int*/): java.awt.Insets
                    // @ts-ignore
                    getTabAreaInsets(tabPlacement: number /*int*/): java.awt.Insets
                    // @ts-ignore
                    getContentBorderInsets(tabPlacement: number /*int*/): java.awt.Insets
                    // @ts-ignore
                    getFontMetrics(): java.awt.FontMetrics
                    // @ts-ignore
                    navigateSelectedTab(direction: number /*int*/): void
                    // @ts-ignore
                    selectNextTabInRun(current: number /*int*/): void
                    // @ts-ignore
                    selectPreviousTabInRun(current: number /*int*/): void
                    // @ts-ignore
                    selectNextTab(current: number /*int*/): void
                    // @ts-ignore
                    selectPreviousTab(current: number /*int*/): void
                    // @ts-ignore
                    selectAdjacentRunTab(tabPlacement: number /*int*/, tabIndex: number /*int*/, offset: number /*int*/): void
                    /**
                     * Returns the index of the tab that has focus.
                     * @return index of tab that has focus
                     * @since 1.5
                     */
                    // @ts-ignore
                    getFocusIndex(): number /*int*/
                    // @ts-ignore
                    getTabRunOffset(tabPlacement: number /*int*/, tabCount: number /*int*/, tabIndex: number /*int*/, forward: boolean): number /*int*/
                    // @ts-ignore
                    getPreviousTabIndex(base: number /*int*/): number /*int*/
                    // @ts-ignore
                    getNextTabIndex(base: number /*int*/): number /*int*/
                    // @ts-ignore
                    getNextTabIndexInRun(tabCount: number /*int*/, base: number /*int*/): number /*int*/
                    // @ts-ignore
                    getPreviousTabIndexInRun(tabCount: number /*int*/, base: number /*int*/): number /*int*/
                    // @ts-ignore
                    getPreviousTabRun(baseRun: number /*int*/): number /*int*/
                    // @ts-ignore
                    getNextTabRun(baseRun: number /*int*/): number /*int*/
                    // @ts-ignore
                    static rotateInsets(topInsets: java.awt.Insets, targetInsets: java.awt.Insets, targetPlacement: number /*int*/): void
                }
            }
        }
    }
}
