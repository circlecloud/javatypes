declare namespace javax {
    namespace swing {
        /**
         * Default data model for list selections.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @author Philip Milne
         * @author Hans Muller
         * @see ListSelectionModel
         */
        // @ts-ignore
        class DefaultListSelectionModel extends java.lang.Object implements javax.swing.ListSelectionModel, java.lang.Cloneable, java.io.Serializable {
            // @ts-ignore
            constructor()
            // @ts-ignore
            listenerList: javax.swing.event.EventListenerList
            // @ts-ignore
            leadAnchorNotificationEnabled: boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public getMinSelectionIndex(): number /*int*/
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public getMaxSelectionIndex(): number /*int*/
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public getValueIsAdjusting(): boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public getSelectionMode(): number /*int*/
            /**
             * {@inheritDoc}
             * @throws IllegalArgumentException {#inheritDoc}
             */
            // @ts-ignore
            public setSelectionMode(selectionMode: number /*int*/): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public isSelectedIndex(index: number /*int*/): boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public isSelectionEmpty(): boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public addListSelectionListener(l: javax.swing.event.ListSelectionListener): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public removeListSelectionListener(l: javax.swing.event.ListSelectionListener): void
            /**
             * Returns an array of all the list selection listeners
             * registered on this <code>DefaultListSelectionModel</code>.
             * @return all of this model's <code>ListSelectionListener</code>s
             *          or an empty
             *          array if no list selection listeners are currently registered
             * @see #addListSelectionListener
             * @see #removeListSelectionListener
             * @since 1.4
             */
            // @ts-ignore
            public getListSelectionListeners(): javax.swing.event.ListSelectionListener[]
            /**
             * Notifies listeners that we have ended a series of adjustments.
             */
            // @ts-ignore
            fireValueChanged(isAdjusting: boolean): void
            /**
             * Notifies <code>ListSelectionListeners</code> that the value
             * of the selection, in the closed interval <code>firstIndex</code>,
             * <code>lastIndex</code>, has changed.
             */
            // @ts-ignore
            fireValueChanged(firstIndex: number /*int*/, lastIndex: number /*int*/): void
            /**
             * @param firstIndex the first index in the interval
             * @param lastIndex the last index in the interval
             * @param isAdjusting true if this is the final change in a series of
             *           adjustments
             * @see EventListenerList
             */
            // @ts-ignore
            fireValueChanged(firstIndex: number /*int*/, lastIndex: number /*int*/, isAdjusting: boolean): void
            /**
             * Returns an array of all the objects currently registered as
             * <code><em>Foo</em>Listener</code>s
             * upon this model.
             * <code><em>Foo</em>Listener</code>s
             * are registered using the <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a <code>DefaultListSelectionModel</code>
             * instance <code>m</code>
             * for its list selection listeners
             * with the following code:
             * <pre>ListSelectionListener[] lsls = (ListSelectionListener[])(m.getListeners(ListSelectionListener.class));</pre>
             * If no such listeners exist,
             * this method returns an empty array.
             * @param listenerType  the type of listeners requested;
             *           this parameter should specify an interface
             *           that descends from <code>java.util.EventListener</code>
             * @return an array of all objects registered as
             *           <code><em>Foo</em>Listener</code>s
             *           on this model,
             *           or an empty array if no such
             *           listeners have been added
             * @exception ClassCastException if <code>listenerType</code> doesn't
             *           specify a class or interface that implements
             *           <code>java.util.EventListener</code>
             * @see #getListSelectionListeners
             * @since 1.3
             */
            // @ts-ignore
            public getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
            /**
             * Sets the value of the leadAnchorNotificationEnabled flag.
             * @see #isLeadAnchorNotificationEnabled()
             */
            // @ts-ignore
            public setLeadAnchorNotificationEnabled(flag: boolean): void
            /**
             * Returns the value of the <code>leadAnchorNotificationEnabled</code> flag.
             * When <code>leadAnchorNotificationEnabled</code> is true the model
             * generates notification events with bounds that cover all the changes to
             * the selection plus the changes to the lead and anchor indices.
             * Setting the flag to false causes a narrowing of the event's bounds to
             * include only the elements that have been selected or deselected since
             * the last change. Either way, the model continues to maintain the lead
             * and anchor variables internally. The default is true.
             * <p>
             * Note: It is possible for the lead or anchor to be changed without a
             * change to the selection. Notification of these changes is often
             * important, such as when the new lead or anchor needs to be updated in
             * the view. Therefore, caution is urged when changing the default value.
             * @return the value of the <code>leadAnchorNotificationEnabled</code> flag
             * @see #setLeadAnchorNotificationEnabled(boolean)
             */
            // @ts-ignore
            public isLeadAnchorNotificationEnabled(): boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public clearSelection(): void
            /**
             * Changes the selection to be between {@code index0} and {@code index1}
             * inclusive. {@code index0} doesn't have to be less than or equal to
             * {@code index1}.
             * <p>
             * In {@code SINGLE_SELECTION} selection mode, only the second index
             * is used.
             * <p>
             * If this represents a change to the current selection, then each
             * {@code ListSelectionListener} is notified of the change.
             * <p>
             * If either index is {@code -1}, this method does nothing and returns
             * without exception. Otherwise, if either index is less than {@code -1},
             * an {@code IndexOutOfBoundsException} is thrown.
             * @param index0 one end of the interval.
             * @param index1 other end of the interval
             * @throws IndexOutOfBoundsException if either index is less than {#code -1}
             *          (and neither index is {@code -1})
             * @see #addListSelectionListener
             */
            // @ts-ignore
            public setSelectionInterval(index0: number /*int*/, index1: number /*int*/): void
            /**
             * Changes the selection to be the set union of the current selection
             * and the indices between {@code index0} and {@code index1} inclusive.
             * <p>
             * In {@code SINGLE_SELECTION} selection mode, this is equivalent
             * to calling {@code setSelectionInterval}, and only the second index
             * is used. In {@code SINGLE_INTERVAL_SELECTION} selection mode, this
             * method behaves like {@code setSelectionInterval}, unless the given
             * interval is immediately adjacent to or overlaps the existing selection,
             * and can therefore be used to grow it.
             * <p>
             * If this represents a change to the current selection, then each
             * {@code ListSelectionListener} is notified of the change. Note that
             * {@code index0} doesn't have to be less than or equal to {@code index1}.
             * <p>
             * If either index is {@code -1}, this method does nothing and returns
             * without exception. Otherwise, if either index is less than {@code -1},
             * an {@code IndexOutOfBoundsException} is thrown.
             * @param index0 one end of the interval.
             * @param index1 other end of the interval
             * @throws IndexOutOfBoundsException if either index is less than {#code -1}
             *          (and neither index is {@code -1})
             * @see #addListSelectionListener
             * @see #setSelectionInterval
             */
            // @ts-ignore
            public addSelectionInterval(index0: number /*int*/, index1: number /*int*/): void
            /**
             * Changes the selection to be the set difference of the current selection
             * and the indices between {@code index0} and {@code index1} inclusive.
             * {@code index0} doesn't have to be less than or equal to {@code index1}.
             * <p>
             * In {@code SINGLE_INTERVAL_SELECTION} selection mode, if the removal
             * would produce two disjoint selections, the removal is extended through
             * the greater end of the selection. For example, if the selection is
             * {@code 0-10} and you supply indices {@code 5,6} (in any order) the
             * resulting selection is {@code 0-4}.
             * <p>
             * If this represents a change to the current selection, then each
             * {@code ListSelectionListener} is notified of the change.
             * <p>
             * If either index is {@code -1}, this method does nothing and returns
             * without exception. Otherwise, if either index is less than {@code -1},
             * an {@code IndexOutOfBoundsException} is thrown.
             * @param index0 one end of the interval
             * @param index1 other end of the interval
             * @throws IndexOutOfBoundsException if either index is less than {#code -1}
             *          (and neither index is {@code -1})
             * @see #addListSelectionListener
             */
            // @ts-ignore
            public removeSelectionInterval(index0: number /*int*/, index1: number /*int*/): void
            /**
             * Insert length indices beginning before/after index. If the value
             * at index is itself selected and the selection mode is not
             * SINGLE_SELECTION, set all of the newly inserted items as selected.
             * Otherwise leave them unselected. This method is typically
             * called to sync the selection model with a corresponding change
             * in the data model.
             */
            // @ts-ignore
            public insertIndexInterval(index: number /*int*/, length: number /*int*/, before: boolean): void
            /**
             * Remove the indices in the interval index0,index1 (inclusive) from
             * the selection model.  This is typically called to sync the selection
             * model width a corresponding change in the data model.  Note
             * that (as always) index0 need not be &lt;= index1.
             */
            // @ts-ignore
            public removeIndexInterval(index0: number /*int*/, index1: number /*int*/): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setValueIsAdjusting(isAdjusting: boolean): void
            /**
             * Returns a string that displays and identifies this
             * object's properties.
             * @return a <code>String</code> representation of this object
             */
            // @ts-ignore
            public toString(): string
            /**
             * Returns a clone of this selection model with the same selection.
             * <code>listenerLists</code> are not duplicated.
             * @exception CloneNotSupportedException if the selection model does not
             *     both (a) implement the Cloneable interface and (b) define a
             *     <code>clone</code> method.
             */
            // @ts-ignore
            public clone(): any
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public getAnchorSelectionIndex(): number /*int*/
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public getLeadSelectionIndex(): number /*int*/
            /**
             * Set the anchor selection index, leaving all selection values unchanged.
             * If leadAnchorNotificationEnabled is true, send a notification covering
             * the old and new anchor cells.
             * @see #getAnchorSelectionIndex
             * @see #setLeadSelectionIndex
             */
            // @ts-ignore
            public setAnchorSelectionIndex(anchorIndex: number /*int*/): void
            /**
             * Set the lead selection index, leaving all selection values unchanged.
             * If leadAnchorNotificationEnabled is true, send a notification covering
             * the old and new lead cells.
             * @param leadIndex the new lead selection index
             * @see #setAnchorSelectionIndex
             * @see #setLeadSelectionIndex
             * @see #getLeadSelectionIndex
             * @since 1.5
             */
            // @ts-ignore
            public moveLeadSelectionIndex(leadIndex: number /*int*/): void
            /**
             * Sets the lead selection index, ensuring that values between the
             * anchor and the new lead are either all selected or all deselected.
             * If the value at the anchor index is selected, first clear all the
             * values in the range [anchor, oldLeadIndex], then select all the values
             * values in the range [anchor, newLeadIndex], where oldLeadIndex is the old
             * leadIndex and newLeadIndex is the new one.
             * <p>
             * If the value at the anchor index is not selected, do the same thing in
             * reverse selecting values in the old range and deselecting values in the
             * new one.
             * <p>
             * Generate a single event for this change and notify all listeners.
             * For the purposes of generating minimal bounds in this event, do the
             * operation in a single pass; that way the first and last index inside the
             * ListSelectionEvent that is broadcast will refer to cells that actually
             * changed value because of this method. If, instead, this operation were
             * done in two steps the effect on the selection state would be the same
             * but two events would be generated and the bounds around the changed
             * values would be wider, including cells that had been first cleared only
             * to later be set.
             * <p>
             * This method can be used in the <code>mouseDragged</code> method
             * of a UI class to extend a selection.
             * @see #getLeadSelectionIndex
             * @see #setAnchorSelectionIndex
             */
            // @ts-ignore
            public setLeadSelectionIndex(leadIndex: number /*int*/): void
        }
    }
}
