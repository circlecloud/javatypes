declare namespace javax {
    namespace swing {
        /**
         * An implementation of a scrollbar. The user positions the knob in the
         * scrollbar to determine the contents of the viewing area. The
         * program typically adjusts the display so that the end of the
         * scrollbar represents the end of the displayable contents, or 100%
         * of the contents. The start of the scrollbar is the beginning of the
         * displayable contents, or 0%. The position of the knob within
         * those bounds then translates to the corresponding percentage of
         * the displayable contents.
         * <p>
         * Typically, as the position of the knob in the scrollbar changes
         * a corresponding change is made to the position of the JViewport on
         * the underlying view, changing the contents of the JViewport.
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
         * @see JScrollPane
         * @beaninfo attribute: isContainer false
         *     description: A component that helps determine the visible content range of an area.
         * @author David Kloba
         */
        // @ts-ignore
        class JScrollBar extends javax.swing.JComponent implements java.awt.Adjustable, javax.accessibility.Accessible {
            /**
             * Creates a scrollbar with the specified orientation,
             * value, extent, minimum, and maximum.
             * The "extent" is the size of the viewable area. It is also known
             * as the "visible amount".
             * <p>
             * Note: Use <code>setBlockIncrement</code> to set the block
             * increment to a size slightly smaller than the view's extent.
             * That way, when the user jumps the knob to an adjacent position,
             * one or two lines of the original contents remain in view.
             * @exception IllegalArgumentException if orientation is not one of VERTICAL, HORIZONTAL
             * @see #setOrientation
             * @see #setValue
             * @see #setVisibleAmount
             * @see #setMinimum
             * @see #setMaximum
             */
            // @ts-ignore
            constructor(orientation: number /*int*/, value: number /*int*/, extent: number /*int*/, min: number /*int*/, max: number /*int*/)
            /**
             * Creates a scrollbar with the specified orientation
             * and the following initial values:
             * <pre>
             * minimum = 0
             * maximum = 100
             * value = 0
             * extent = 10
             * </pre>
             */
            // @ts-ignore
            constructor(orientation: number /*int*/)
            /**
             * Creates a vertical scrollbar with the following initial values:
             * <pre>
             * minimum = 0
             * maximum = 100
             * value = 0
             * extent = 10
             * </pre>
             */
            // @ts-ignore
            constructor()
            /**
             * The model that represents the scrollbar's minimum, maximum, extent
             * (aka "visibleAmount") and current value.
             * @see #setModel
             */
            // @ts-ignore
            model: javax.swing.BoundedRangeModel
            /**
             * @see #setOrientation
             */
            // @ts-ignore
            orientation: number /*int*/
            /**
             * @see #setUnitIncrement
             */
            // @ts-ignore
            unitIncrement: number /*int*/
            /**
             * @see #setBlockIncrement
             */
            // @ts-ignore
            blockIncrement: number /*int*/
            /**
             * Sets the {@literal L&F} object that renders this component.
             * @param ui  the <code>ScrollBarUI</code> {#literal L&F} object
             * @see UIDefaults#getUI
             * @since 1.4
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the Component's LookAndFeel
             */
            // @ts-ignore
            public setUI(ui: javax.swing.plaf.ScrollBarUI): void
            /**
             * Returns the delegate that implements the look and feel for
             * this component.
             * @see JComponent#setUI
             */
            // @ts-ignore
            public getUI(): javax.swing.plaf.ScrollBarUI
            /**
             * Overrides <code>JComponent.updateUI</code>.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            public updateUI(): void
            /**
             * Returns the name of the LookAndFeel class for this component.
             * @return "ScrollBarUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            public getUIClassID(): string
            /**
             * Returns the component's orientation (horizontal or vertical).
             * @return VERTICAL or HORIZONTAL
             * @see #setOrientation
             * @see java.awt.Adjustable#getOrientation
             */
            // @ts-ignore
            public getOrientation(): number /*int*/
            /**
             * Set the scrollbar's orientation to either VERTICAL or
             * HORIZONTAL.
             * @exception IllegalArgumentException if orientation is not one of VERTICAL, HORIZONTAL
             * @see #getOrientation
             * @beaninfo preferred: true
             *         bound: true
             *     attribute: visualUpdate true
             *   description: The scrollbar's orientation.
             *          enum: VERTICAL JScrollBar.VERTICAL
             *                HORIZONTAL JScrollBar.HORIZONTAL
             */
            // @ts-ignore
            public setOrientation(orientation: number /*int*/): void
            /**
             * Returns data model that handles the scrollbar's four
             * fundamental properties: minimum, maximum, value, extent.
             * @see #setModel
             */
            // @ts-ignore
            public getModel(): javax.swing.BoundedRangeModel
            /**
             * Sets the model that handles the scrollbar's four
             * fundamental properties: minimum, maximum, value, extent.
             * @see #getModel
             * @beaninfo bound: true
             *        expert: true
             *  description: The scrollbar's BoundedRangeModel.
             */
            // @ts-ignore
            public setModel(newModel: javax.swing.BoundedRangeModel): void
            /**
             * Returns the amount to change the scrollbar's value by,
             * given a unit up/down request.  A ScrollBarUI implementation
             * typically calls this method when the user clicks on a scrollbar
             * up/down arrow and uses the result to update the scrollbar's
             * value.   Subclasses my override this method to compute
             * a value, e.g. the change required to scroll up or down one
             * (variable height) line text or one row in a table.
             * <p>
             * The JScrollPane component creates scrollbars (by default)
             * that override this method and delegate to the viewports
             * Scrollable view, if it has one.  The Scrollable interface
             * provides a more specialized version of this method.
             * <p>
             * Some look and feels implement custom scrolling behavior
             * and ignore this property.
             * @param direction is -1 or 1 for up/down respectively
             * @return the value of the unitIncrement property
             * @see #setUnitIncrement
             * @see #setValue
             * @see Scrollable#getScrollableUnitIncrement
             */
            // @ts-ignore
            public getUnitIncrement(direction: number /*int*/): number /*int*/
            /**
             * Sets the unitIncrement property.
             * <p>
             * Note, that if the argument is equal to the value of Integer.MIN_VALUE,
             * the most look and feels will not provide the scrolling to the right/down.
             * <p>
             * Some look and feels implement custom scrolling behavior
             * and ignore this property.
             * @see #getUnitIncrement
             * @beaninfo preferred: true
             *        bound: true
             *  description: The scrollbar's unit increment.
             */
            // @ts-ignore
            public setUnitIncrement(unitIncrement: number /*int*/): void
            /**
             * Returns the amount to change the scrollbar's value by,
             * given a block (usually "page") up/down request.  A ScrollBarUI
             * implementation typically calls this method when the user clicks
             * above or below the scrollbar "knob" to change the value
             * up or down by large amount.  Subclasses my override this
             * method to compute a value, e.g. the change required to scroll
             * up or down one paragraph in a text document.
             * <p>
             * The JScrollPane component creates scrollbars (by default)
             * that override this method and delegate to the viewports
             * Scrollable view, if it has one.  The Scrollable interface
             * provides a more specialized version of this method.
             * <p>
             * Some look and feels implement custom scrolling behavior
             * and ignore this property.
             * @param direction is -1 or 1 for up/down respectively
             * @return the value of the blockIncrement property
             * @see #setBlockIncrement
             * @see #setValue
             * @see Scrollable#getScrollableBlockIncrement
             */
            // @ts-ignore
            public getBlockIncrement(direction: number /*int*/): number /*int*/
            /**
             * Sets the blockIncrement property.
             * <p>
             * Note, that if the argument is equal to the value of Integer.MIN_VALUE,
             * the most look and feels will not provide the scrolling to the right/down.
             * <p>
             * Some look and feels implement custom scrolling behavior
             * and ignore this property.
             * @see #getBlockIncrement()
             * @beaninfo preferred: true
             *        bound: true
             *  description: The scrollbar's block increment.
             */
            // @ts-ignore
            public setBlockIncrement(blockIncrement: number /*int*/): void
            /**
             * For backwards compatibility with java.awt.Scrollbar.
             * @see Adjustable#getUnitIncrement
             * @see #getUnitIncrement(int)
             */
            // @ts-ignore
            public getUnitIncrement(): number /*int*/
            /**
             * For backwards compatibility with java.awt.Scrollbar.
             * @see Adjustable#getBlockIncrement
             * @see #getBlockIncrement(int)
             */
            // @ts-ignore
            public getBlockIncrement(): number /*int*/
            /**
             * Returns the scrollbar's value.
             * @return the model's value property
             * @see #setValue
             */
            // @ts-ignore
            public getValue(): number /*int*/
            /**
             * Sets the scrollbar's value.  This method just forwards the value
             * to the model.
             * @see #getValue
             * @see BoundedRangeModel#setValue
             * @beaninfo preferred: true
             *  description: The scrollbar's current value.
             */
            // @ts-ignore
            public setValue(value: number /*int*/): void
            /**
             * Returns the scrollbar's extent, aka its "visibleAmount".  In many
             * scrollbar look and feel implementations the size of the
             * scrollbar "knob" or "thumb" is proportional to the extent.
             * @return the value of the model's extent property
             * @see #setVisibleAmount
             */
            // @ts-ignore
            public getVisibleAmount(): number /*int*/
            /**
             * Set the model's extent property.
             * @see #getVisibleAmount
             * @see BoundedRangeModel#setExtent
             * @beaninfo preferred: true
             *  description: The amount of the view that is currently visible.
             */
            // @ts-ignore
            public setVisibleAmount(extent: number /*int*/): void
            /**
             * Returns the minimum value supported by the scrollbar
             * (usually zero).
             * @return the value of the model's minimum property
             * @see #setMinimum
             */
            // @ts-ignore
            public getMinimum(): number /*int*/
            /**
             * Sets the model's minimum property.
             * @see #getMinimum
             * @see BoundedRangeModel#setMinimum
             * @beaninfo preferred: true
             *  description: The scrollbar's minimum value.
             */
            // @ts-ignore
            public setMinimum(minimum: number /*int*/): void
            /**
             * The maximum value of the scrollbar is maximum - extent.
             * @return the value of the model's maximum property
             * @see #setMaximum
             */
            // @ts-ignore
            public getMaximum(): number /*int*/
            /**
             * Sets the model's maximum property.  Note that the scrollbar's value
             * can only be set to maximum - extent.
             * @see #getMaximum
             * @see BoundedRangeModel#setMaximum
             * @beaninfo preferred: true
             *  description: The scrollbar's maximum value.
             */
            // @ts-ignore
            public setMaximum(maximum: number /*int*/): void
            /**
             * True if the scrollbar knob is being dragged.
             * @return the value of the model's valueIsAdjusting property
             * @see #setValueIsAdjusting
             */
            // @ts-ignore
            public getValueIsAdjusting(): boolean
            /**
             * Sets the model's valueIsAdjusting property.  Scrollbar look and
             * feel implementations should set this property to true when
             * a knob drag begins, and to false when the drag ends.  The
             * scrollbar model will not generate ChangeEvents while
             * valueIsAdjusting is true.
             * @see #getValueIsAdjusting
             * @see BoundedRangeModel#setValueIsAdjusting
             * @beaninfo expert: true
             *  description: True if the scrollbar thumb is being dragged.
             */
            // @ts-ignore
            public setValueIsAdjusting(b: boolean): void
            /**
             * Sets the four BoundedRangeModel properties after forcing
             * the arguments to obey the usual constraints:
             * <pre>
             * minimum &le; value &le; value+extent &le; maximum
             * </pre>
             * @see BoundedRangeModel#setRangeProperties
             * @see #setValue
             * @see #setVisibleAmount
             * @see #setMinimum
             * @see #setMaximum
             */
            // @ts-ignore
            public setValues(newValue: number /*int*/, newExtent: number /*int*/, newMin: number /*int*/, newMax: number /*int*/): void
            /**
             * Adds an AdjustmentListener.  Adjustment listeners are notified
             * each time the scrollbar's model changes.  Adjustment events are
             * provided for backwards compatibility with java.awt.Scrollbar.
             * <p>
             * Note that the AdjustmentEvents type property will always have a
             * placeholder value of AdjustmentEvent.TRACK because all changes
             * to a BoundedRangeModels value are considered equivalent.  To change
             * the value of a BoundedRangeModel one just sets its value property,
             * i.e. model.setValue(123).  No information about the origin of the
             * change, e.g. it's a block decrement, is provided.  We don't try
             * fabricate the origin of the change here.
             * @param l the AdjustmentLister to add
             * @see #removeAdjustmentListener
             * @see BoundedRangeModel#addChangeListener
             */
            // @ts-ignore
            public addAdjustmentListener(l: java.awt.event.AdjustmentListener): void
            /**
             * Removes an AdjustmentEvent listener.
             * @param l the AdjustmentLister to remove
             * @see #addAdjustmentListener
             */
            // @ts-ignore
            public removeAdjustmentListener(l: java.awt.event.AdjustmentListener): void
            /**
             * Returns an array of all the <code>AdjustmentListener</code>s added
             * to this JScrollBar with addAdjustmentListener().
             * @return all of the <code>AdjustmentListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            public getAdjustmentListeners(): java.awt.event.AdjustmentListener[]
            /**
             * Notify listeners that the scrollbar's model has changed.
             * @see #addAdjustmentListener
             * @see EventListenerList
             */
            // @ts-ignore
            fireAdjustmentValueChanged(id: number /*int*/, type: number /*int*/, value: number /*int*/): void
            /**
             * The scrollbar is flexible along it's scrolling axis and
             * rigid along the other axis.
             */
            // @ts-ignore
            public getMinimumSize(): java.awt.Dimension
            /**
             * The scrollbar is flexible along it's scrolling axis and
             * rigid along the other axis.
             */
            // @ts-ignore
            public getMaximumSize(): java.awt.Dimension
            /**
             * Enables the component so that the knob position can be changed.
             * When the disabled, the knob position cannot be changed.
             * @param x a boolean value, where true enables the component and
             *           false disables it
             */
            // @ts-ignore
            public setEnabled(x: boolean): void
            /**
             * Returns a string representation of this JScrollBar. This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this JScrollBar.
             */
            // @ts-ignore
            paramString(): string
            /**
             * Gets the AccessibleContext associated with this JScrollBar.
             * For JScrollBar, the AccessibleContext takes the form of an
             * AccessibleJScrollBar.
             * A new AccessibleJScrollBar instance is created if necessary.
             * @return an AccessibleJScrollBar that serves as the
             *          AccessibleContext of this JScrollBar
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
