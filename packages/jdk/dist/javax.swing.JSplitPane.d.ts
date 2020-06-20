declare namespace javax {
    namespace swing {
        /**
         * <code>JSplitPane</code> is used to divide two (and only two)
         * <code>Component</code>s. The two <code>Component</code>s
         * are graphically divided based on the look and feel
         * implementation, and the two <code>Component</code>s can then be
         * interactively resized by the user.
         * Information on using <code>JSplitPane</code> is in
         * <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/components/splitpane.html">How to Use Split Panes</a> in
         * <em>The Java Tutorial</em>.
         * <p>
         * The two <code>Component</code>s in a split pane can be aligned
         * left to right using
         * <code>JSplitPane.HORIZONTAL_SPLIT</code>, or top to bottom using
         * <code>JSplitPane.VERTICAL_SPLIT</code>.
         * The preferred way to change the size of the <code>Component</code>s
         * is to invoke
         * <code>setDividerLocation</code> where <code>location</code> is either
         * the new x or y position, depending on the orientation of the
         * <code>JSplitPane</code>.
         * <p>
         * To resize the <code>Component</code>s to their preferred sizes invoke
         * <code>resetToPreferredSizes</code>.
         * <p>
         * When the user is resizing the <code>Component</code>s the minimum
         * size of the <code>Components</code> is used to determine the
         * maximum/minimum position the <code>Component</code>s
         * can be set to. If the minimum size of the two
         * components is greater than the size of the split pane the divider
         * will not allow you to resize it. To alter the minimum size of a
         * <code>JComponent</code>, see {@link JComponent#setMinimumSize}.
         * <p>
         * When the user resizes the split pane the new space is distributed between
         * the two components based on the <code>resizeWeight</code> property.
         * A value of 0,
         * the default, indicates the right/bottom component gets all the space,
         * where as a value of 1 indicates the left/top component gets all the space.
         * <p>
         * <strong>Warning:</strong> Swing is not thread safe. For more
         * information see <a
         * href="package-summary.html#threading">Swing's Threading
         * Policy</a>.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @see #setDividerLocation
         * @see #resetToPreferredSizes
         * @author Scott Violet
         */
        // @ts-ignore
        class JSplitPane extends javax.swing.JComponent implements javax.accessibility.Accessible {
            /**
             * Creates a new <code>JSplitPane</code> configured to arrange the child
             * components side-by-side horizontally, using two buttons for the components.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new <code>JSplitPane</code> configured with the
             * specified orientation.
             * @param newOrientation  <code>JSplitPane.HORIZONTAL_SPLIT</code> or
             *                         <code>JSplitPane.VERTICAL_SPLIT</code>
             * @exception IllegalArgumentException if <code>orientation</code>
             *           is not one of HORIZONTAL_SPLIT or VERTICAL_SPLIT.
             */
            // @ts-ignore
            constructor(newOrientation: number /*int*/)
            /**
             * Creates a new <code>JSplitPane</code> with the specified
             * orientation and redrawing style.
             * @param newOrientation  <code>JSplitPane.HORIZONTAL_SPLIT</code> or
             *                         <code>JSplitPane.VERTICAL_SPLIT</code>
             * @param newContinuousLayout  a boolean, true for the components to
             *         redraw continuously as the divider changes position, false
             *         to wait until the divider position stops changing to redraw
             * @exception IllegalArgumentException if <code>orientation</code>
             *           is not one of HORIZONTAL_SPLIT or VERTICAL_SPLIT
             */
            // @ts-ignore
            constructor(newOrientation: number /*int*/, newContinuousLayout: boolean)
            /**
             * Creates a new <code>JSplitPane</code> with the specified
             * orientation and the specified components.
             * @param newOrientation  <code>JSplitPane.HORIZONTAL_SPLIT</code> or
             *                         <code>JSplitPane.VERTICAL_SPLIT</code>
             * @param newLeftComponent the <code>Component</code> that will
             *           appear on the left
             *           of a horizontally-split pane, or at the top of a
             *           vertically-split pane
             * @param newRightComponent the <code>Component</code> that will
             *           appear on the right
             *           of a horizontally-split pane, or at the bottom of a
             *           vertically-split pane
             * @exception IllegalArgumentException if <code>orientation</code>
             *           is not one of: HORIZONTAL_SPLIT or VERTICAL_SPLIT
             */
            // @ts-ignore
            constructor(newOrientation: number /*int*/, newLeftComponent: java.awt.Component, newRightComponent: java.awt.Component)
            /**
             * Creates a new <code>JSplitPane</code> with the specified
             * orientation and
             * redrawing style, and with the specified components.
             * @param newOrientation  <code>JSplitPane.HORIZONTAL_SPLIT</code> or
             *                         <code>JSplitPane.VERTICAL_SPLIT</code>
             * @param newContinuousLayout  a boolean, true for the components to
             *         redraw continuously as the divider changes position, false
             *         to wait until the divider position stops changing to redraw
             * @param newLeftComponent the <code>Component</code> that will
             *           appear on the left
             *           of a horizontally-split pane, or at the top of a
             *           vertically-split pane
             * @param newRightComponent the <code>Component</code> that will
             *           appear on the right
             *           of a horizontally-split pane, or at the bottom of a
             *           vertically-split pane
             * @exception IllegalArgumentException if <code>orientation</code>
             *           is not one of HORIZONTAL_SPLIT or VERTICAL_SPLIT
             */
            // @ts-ignore
            constructor(newOrientation: number /*int*/, newContinuousLayout: boolean, newLeftComponent: java.awt.Component, newRightComponent: java.awt.Component)
            /**
             * Vertical split indicates the <code>Component</code>s are
             * split along the y axis.  For example the two
             * <code>Component</code>s will be split one on top of the other.
             */
            // @ts-ignore
            readonly VERTICAL_SPLIT: number /*int*/
            /**
             * Horizontal split indicates the <code>Component</code>s are
             * split along the x axis.  For example the two
             * <code>Component</code>s will be split one to the left of the
             * other.
             */
            // @ts-ignore
            readonly HORIZONTAL_SPLIT: number /*int*/
            /**
             * Used to add a <code>Component</code> to the left of the other
             * <code>Component</code>.
             */
            // @ts-ignore
            readonly LEFT: string
            /**
             * Used to add a <code>Component</code> to the right of the other
             * <code>Component</code>.
             */
            // @ts-ignore
            readonly RIGHT: string
            /**
             * Used to add a <code>Component</code> above the other
             * <code>Component</code>.
             */
            // @ts-ignore
            readonly TOP: string
            /**
             * Used to add a <code>Component</code> below the other
             * <code>Component</code>.
             */
            // @ts-ignore
            readonly BOTTOM: string
            /**
             * Used to add a <code>Component</code> that will represent the divider.
             */
            // @ts-ignore
            readonly DIVIDER: string
            /**
             * Bound property name for orientation (horizontal or vertical).
             */
            // @ts-ignore
            readonly ORIENTATION_PROPERTY: string
            /**
             * Bound property name for continuousLayout.
             */
            // @ts-ignore
            readonly CONTINUOUS_LAYOUT_PROPERTY: string
            /**
             * Bound property name for border.
             */
            // @ts-ignore
            readonly DIVIDER_SIZE_PROPERTY: string
            /**
             * Bound property for oneTouchExpandable.
             */
            // @ts-ignore
            readonly ONE_TOUCH_EXPANDABLE_PROPERTY: string
            /**
             * Bound property for lastLocation.
             */
            // @ts-ignore
            readonly LAST_DIVIDER_LOCATION_PROPERTY: string
            /**
             * Bound property for the dividerLocation.
             * @since 1.3
             */
            // @ts-ignore
            readonly DIVIDER_LOCATION_PROPERTY: string
            /**
             * Bound property for weight.
             * @since 1.3
             */
            // @ts-ignore
            readonly RESIZE_WEIGHT_PROPERTY: string
            /**
             * How the views are split.
             */
            // @ts-ignore
            orientation: number /*int*/
            /**
             * Whether or not the views are continuously redisplayed while
             * resizing.
             */
            // @ts-ignore
            continuousLayout: boolean
            /**
             * The left or top component.
             */
            // @ts-ignore
            leftComponent: java.awt.Component
            /**
             * The right or bottom component.
             */
            // @ts-ignore
            rightComponent: java.awt.Component
            /**
             * Size of the divider.
             */
            // @ts-ignore
            dividerSize: number /*int*/
            /**
             * Is a little widget provided to quickly expand/collapse the
             * split pane?
             */
            // @ts-ignore
            oneTouchExpandable: boolean
            /**
             * Previous location of the split pane.
             */
            // @ts-ignore
            lastDividerLocation: number /*int*/
            /**
             * Sets the L&amp;F object that renders this component.
             * @param ui  the <code>SplitPaneUI</code> L&amp;F object
             * @see UIDefaults#getUI
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the Component's LookAndFeel.
             */
            // @ts-ignore
            setUI(ui: javax.swing.plaf.SplitPaneUI): void
            /**
             * Returns the <code>SplitPaneUI</code> that is providing the
             * current look and feel.
             * @return the <code>SplitPaneUI</code> object that renders this component
             * @beaninfo expert: true
             *   description: The L&amp;F object that renders this component.
             */
            // @ts-ignore
            getUI(): javax.swing.plaf.SplitPaneUI
            /**
             * Notification from the <code>UIManager</code> that the L&amp;F has changed.
             * Replaces the current UI object with the latest version from the
             * <code>UIManager</code>.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            updateUI(): void
            /**
             * Returns the name of the L&amp;F class that renders this component.
             * @return the string "SplitPaneUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             * @beaninfo expert: true
             *   description: A string that specifies the name of the L&amp;F class.
             */
            // @ts-ignore
            getUIClassID(): java.lang.String
            /**
             * Sets the size of the divider.
             * @param newSize an integer giving the size of the divider in pixels
             * @beaninfo bound: true
             *   description: The size of the divider.
             */
            // @ts-ignore
            setDividerSize(newSize: number /*int*/): void
            /**
             * Returns the size of the divider.
             * @return an integer giving the size of the divider in pixels
             */
            // @ts-ignore
            getDividerSize(): int
            /**
             * Sets the component to the left (or above) the divider.
             * @param comp the <code>Component</code> to display in that position
             */
            // @ts-ignore
            setLeftComponent(comp: java.awt.Component): void
            /**
             * Returns the component to the left (or above) the divider.
             * @return the <code>Component</code> displayed in that position
             * @beaninfo preferred: true
             *   description: The component to the left (or above) the divider.
             */
            // @ts-ignore
            getLeftComponent(): java.awt.Component
            /**
             * Sets the component above, or to the left of the divider.
             * @param comp the <code>Component</code> to display in that position
             * @beaninfo description: The component above, or to the left of the divider.
             */
            // @ts-ignore
            setTopComponent(comp: java.awt.Component): void
            /**
             * Returns the component above, or to the left of the divider.
             * @return the <code>Component</code> displayed in that position
             */
            // @ts-ignore
            getTopComponent(): java.awt.Component
            /**
             * Sets the component to the right (or below) the divider.
             * @param comp the <code>Component</code> to display in that position
             * @beaninfo preferred: true
             *   description: The component to the right (or below) the divider.
             */
            // @ts-ignore
            setRightComponent(comp: java.awt.Component): void
            /**
             * Returns the component to the right (or below) the divider.
             * @return the <code>Component</code> displayed in that position
             */
            // @ts-ignore
            getRightComponent(): java.awt.Component
            /**
             * Sets the component below, or to the right of the divider.
             * @param comp the <code>Component</code> to display in that position
             * @beaninfo description: The component below, or to the right of the divider.
             */
            // @ts-ignore
            setBottomComponent(comp: java.awt.Component): void
            /**
             * Returns the component below, or to the right of the divider.
             * @return the <code>Component</code> displayed in that position
             */
            // @ts-ignore
            getBottomComponent(): java.awt.Component
            /**
             * Sets the value of the <code>oneTouchExpandable</code> property,
             * which must be <code>true</code> for the
             * <code>JSplitPane</code> to provide a UI widget
             * on the divider to quickly expand/collapse the divider.
             * The default value of this property is <code>false</code>.
             * Some look and feels might not support one-touch expanding;
             * they will ignore this property.
             * @param newValue <code>true</code> to specify that the split pane should provide a
             *         collapse/expand widget
             * @beaninfo bound: true
             *   description: UI widget on the divider to quickly
             *                expand/collapse the divider.
             * @see #isOneTouchExpandable
             */
            // @ts-ignore
            setOneTouchExpandable(newValue: boolean): void
            /**
             * Gets the <code>oneTouchExpandable</code> property.
             * @return the value of the <code>oneTouchExpandable</code> property
             * @see #setOneTouchExpandable
             */
            // @ts-ignore
            isOneTouchExpandable(): boolean
            /**
             * Sets the last location the divider was at to
             * <code>newLastLocation</code>.
             * @param newLastLocation an integer specifying the last divider location
             *         in pixels, from the left (or upper) edge of the pane to the
             *         left (or upper) edge of the divider
             * @beaninfo bound: true
             *   description: The last location the divider was at.
             */
            // @ts-ignore
            setLastDividerLocation(newLastLocation: number /*int*/): void
            /**
             * Returns the last location the divider was at.
             * @return an integer specifying the last divider location as a count
             *        of pixels from the left (or upper) edge of the pane to the
             *        left (or upper) edge of the divider
             */
            // @ts-ignore
            getLastDividerLocation(): int
            /**
             * Sets the orientation, or how the splitter is divided. The options
             * are:<ul>
             * <li>JSplitPane.VERTICAL_SPLIT  (above/below orientation of components)
             * <li>JSplitPane.HORIZONTAL_SPLIT  (left/right orientation of components)
             * </ul>
             * @param orientation an integer specifying the orientation
             * @exception IllegalArgumentException if orientation is not one of:
             *         HORIZONTAL_SPLIT or VERTICAL_SPLIT.
             * @beaninfo bound: true
             *   description: The orientation, or how the splitter is divided.
             *          enum: HORIZONTAL_SPLIT JSplitPane.HORIZONTAL_SPLIT
             *                VERTICAL_SPLIT   JSplitPane.VERTICAL_SPLIT
             */
            // @ts-ignore
            setOrientation(orientation: number /*int*/): void
            /**
             * Returns the orientation.
             * @return an integer giving the orientation
             * @see #setOrientation
             */
            // @ts-ignore
            getOrientation(): int
            /**
             * Sets the value of the <code>continuousLayout</code> property,
             * which must be <code>true</code> for the child components
             * to be continuously
             * redisplayed and laid out during user intervention.
             * The default value of this property is look and feel dependent.
             * Some look and feels might not support continuous layout;
             * they will ignore this property.
             * @param newContinuousLayout  <code>true</code> if the components
             *         should continuously be redrawn as the divider changes position
             * @beaninfo bound: true
             *   description: Whether the child components are
             *                continuously redisplayed and laid out during
             *                user intervention.
             * @see #isContinuousLayout
             */
            // @ts-ignore
            setContinuousLayout(newContinuousLayout: boolean): void
            /**
             * Gets the <code>continuousLayout</code> property.
             * @return the value of the <code>continuousLayout</code> property
             * @see #setContinuousLayout
             */
            // @ts-ignore
            isContinuousLayout(): boolean
            /**
             * Specifies how to distribute extra space when the size of the split pane
             * changes. A value of 0, the default,
             * indicates the right/bottom component gets all the extra space (the
             * left/top component acts fixed), where as a value of 1 specifies the
             * left/top component gets all the extra space (the right/bottom component
             * acts fixed). Specifically, the left/top component gets (weight * diff)
             * extra space and the right/bottom component gets (1 - weight) * diff
             * extra space.
             * @param value as described above
             * @exception IllegalArgumentException if <code>value</code> is &lt; 0 or &gt; 1
             * @since 1.3
             * @beaninfo bound: true
             *   description: Specifies how to distribute extra space when the split pane
             *                resizes.
             */
            // @ts-ignore
            setResizeWeight(value: number /*double*/): void
            /**
             * Returns the number that determines how extra space is distributed.
             * @return how extra space is to be distributed on a resize of the
             *          split pane
             * @since 1.3
             */
            // @ts-ignore
            getResizeWeight(): double
            /**
             * Lays out the <code>JSplitPane</code> layout based on the preferred size
             * of the children components. This will likely result in changing
             * the divider location.
             */
            // @ts-ignore
            resetToPreferredSizes(): void
            /**
             * Sets the divider location as a percentage of the
             * <code>JSplitPane</code>'s size.
             * <p>
             * This method is implemented in terms of
             * <code>setDividerLocation(int)</code>.
             * This method immediately changes the size of the split pane based on
             * its current size. If the split pane is not correctly realized and on
             * screen, this method will have no effect (new divider location will
             * become (current size * proportionalLocation) which is 0).
             * @param proportionalLocation  a double-precision floating point value
             *         that specifies a percentage, from zero (top/left) to 1.0
             *         (bottom/right)
             * @exception IllegalArgumentException if the specified location is &lt; 0
             *             or &gt; 1.0
             * @beaninfo description: The location of the divider.
             */
            // @ts-ignore
            setDividerLocation(proportionalLocation: number /*double*/): void
            /**
             * Sets the location of the divider. This is passed off to the
             * look and feel implementation, and then listeners are notified. A value
             * less than 0 implies the divider should be reset to a value that
             * attempts to honor the preferred size of the left/top component.
             * After notifying the listeners, the last divider location is updated,
             * via <code>setLastDividerLocation</code>.
             * @param location an int specifying a UI-specific value (typically a
             *         pixel count)
             * @beaninfo bound: true
             *   description: The location of the divider.
             */
            // @ts-ignore
            setDividerLocation(location: number /*int*/): void
            /**
             * Returns the last value passed to <code>setDividerLocation</code>.
             * The value returned from this method may differ from the actual
             * divider location (if <code>setDividerLocation</code> was passed a
             * value bigger than the current size).
             * @return an integer specifying the location of the divider
             */
            // @ts-ignore
            getDividerLocation(): int
            /**
             * Returns the minimum location of the divider from the look and feel
             * implementation.
             * @return an integer specifying a UI-specific value for the minimum
             *           location (typically a pixel count); or -1 if the UI is
             *           <code>null</code>
             * @beaninfo description: The minimum location of the divider from the L&amp;F.
             */
            // @ts-ignore
            getMinimumDividerLocation(): int
            /**
             * Returns the maximum location of the divider from the look and feel
             * implementation.
             * @return an integer specifying a UI-specific value for the maximum
             *           location (typically a pixel count); or -1 if the  UI is
             *           <code>null</code>
             */
            // @ts-ignore
            getMaximumDividerLocation(): int
            /**
             * Removes the child component, <code>component</code> from the
             * pane. Resets the <code>leftComponent</code> or
             * <code>rightComponent</code> instance variable, as necessary.
             * @param component the <code>Component</code> to remove
             */
            // @ts-ignore
            remove(component: java.awt.Component): void
            /**
             * Removes the <code>Component</code> at the specified index.
             * Updates the <code>leftComponent</code> and <code>rightComponent</code>
             * instance variables as necessary, and then messages super.
             * @param index an integer specifying the component to remove, where
             *         1 specifies the left/top component and 2 specifies the
             *         bottom/right component
             */
            // @ts-ignore
            remove(index: number /*int*/): void
            /**
             * Removes all the child components from the split pane. Resets the
             * <code>leftComonent</code> and <code>rightComponent</code>
             * instance variables.
             */
            // @ts-ignore
            removeAll(): void
            /**
             * Returns true, so that calls to <code>revalidate</code>
             * on any descendant of this <code>JSplitPane</code>
             * will cause a request to be queued that
             * will validate the <code>JSplitPane</code> and all its descendants.
             * @return true
             * @see JComponent#revalidate
             * @see java.awt.Container#isValidateRoot
             * @beaninfo hidden: true
             */
            // @ts-ignore
            isValidateRoot(): boolean
            /**
             * Adds the specified component to this split pane.
             * If <code>constraints</code> identifies the left/top or
             * right/bottom child component, and a component with that identifier
             * was previously added, it will be removed and then <code>comp</code>
             * will be added in its place. If <code>constraints</code> is not
             * one of the known identifiers the layout manager may throw an
             * <code>IllegalArgumentException</code>.
             * <p>
             * The possible constraints objects (Strings) are:
             * <ul>
             * <li>JSplitPane.TOP
             * <li>JSplitPane.LEFT
             * <li>JSplitPane.BOTTOM
             * <li>JSplitPane.RIGHT
             * </ul>
             * If the <code>constraints</code> object is <code>null</code>,
             * the component is added in the
             * first available position (left/top if open, else right/bottom).
             * @param comp        the component to add
             * @param constraints an <code>Object</code> specifying the
             *                     layout constraints
             *                     (position) for this component
             * @param index       an integer specifying the index in the container's
             *                     list.
             * @exception IllegalArgumentException  if the <code>constraints</code>
             *           object does not match an existing component
             * @see java.awt.Container#addImpl(Component, Object, int)
             */
            // @ts-ignore
            addImpl(comp: java.awt.Component, constraints: any, index: number /*int*/): void
            /**
             * Subclassed to message the UI with <code>finishedPaintingChildren</code>
             * after super has been messaged, as well as painting the border.
             * @param g the <code>Graphics</code> context within which to paint
             */
            // @ts-ignore
            paintChildren(g: java.awt.Graphics): void
            /**
             * Returns a string representation of this <code>JSplitPane</code>.
             * This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JSplitPane</code>.
             */
            // @ts-ignore
            paramString(): java.lang.String
            /**
             * Gets the AccessibleContext associated with this JSplitPane.
             * For split panes, the AccessibleContext takes the form of an
             * AccessibleJSplitPane.
             * A new AccessibleJSplitPane instance is created if necessary.
             * @return an AccessibleJSplitPane that serves as the
             *          AccessibleContext of this JSplitPane
             * @beaninfo expert: true
             *   description: The AccessibleContext associated with this SplitPane.
             */
            // @ts-ignore
            getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
