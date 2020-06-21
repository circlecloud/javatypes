declare namespace javax {
    namespace swing {
        /**
         * This interface represents the current state of the
         * selection for any of the components that display a
         * list of values with stable indices.  The selection is
         * modeled as a set of intervals, each interval represents
         * a contiguous range of selected list elements.
         * The methods for modifying the set of selected intervals
         * all take a pair of indices, index0 and index1, that represent
         * a closed interval, i.e. the interval includes both index0 and
         * index1.
         * @author Hans Muller
         * @author Philip Milne
         * @see DefaultListSelectionModel
         */
        // @ts-ignore
        interface ListSelectionModel {
            /**
             * A value for the selectionMode property: select one list index
             * at a time.
             * @see #setSelectionMode
             */
            // @ts-ignore
            readonly SINGLE_SELECTION: number /*int*/
            /**
             * A value for the selectionMode property: select one contiguous
             * range of indices at a time.
             * @see #setSelectionMode
             */
            // @ts-ignore
            readonly SINGLE_INTERVAL_SELECTION: number /*int*/
            /**
             * A value for the selectionMode property: select one or more
             * contiguous ranges of indices at a time.
             * @see #setSelectionMode
             */
            // @ts-ignore
            readonly MULTIPLE_INTERVAL_SELECTION: number /*int*/
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
             * @param index0 one end of the interval.
             * @param index1 other end of the interval
             * @see #addListSelectionListener
             */
            // @ts-ignore
            setSelectionInterval(index0: number /*int*/, index1: number /*int*/): void
            /**
             * Changes the selection to be the set union of the current selection
             * and the indices between {@code index0} and {@code index1} inclusive.
             * {@code index0} doesn't have to be less than or equal to {@code index1}.
             * <p>
             * In {@code SINGLE_SELECTION} selection mode, this is equivalent
             * to calling {@code setSelectionInterval}, and only the second index
             * is used. In {@code SINGLE_INTERVAL_SELECTION} selection mode, this
             * method behaves like {@code setSelectionInterval}, unless the given
             * interval is immediately adjacent to or overlaps the existing selection,
             * and can therefore be used to grow the selection.
             * <p>
             * If this represents a change to the current selection, then each
             * {@code ListSelectionListener} is notified of the change.
             * @param index0 one end of the interval.
             * @param index1 other end of the interval
             * @see #addListSelectionListener
             * @see #setSelectionInterval
             */
            // @ts-ignore
            addSelectionInterval(index0: number /*int*/, index1: number /*int*/): void
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
             * @param index0 one end of the interval.
             * @param index1 other end of the interval
             * @see #addListSelectionListener
             */
            // @ts-ignore
            removeSelectionInterval(index0: number /*int*/, index1: number /*int*/): void
            /**
             * Returns the first selected index or -1 if the selection is empty.
             */
            // @ts-ignore
            getMinSelectionIndex(): number /*int*/
            /**
             * Returns the last selected index or -1 if the selection is empty.
             */
            // @ts-ignore
            getMaxSelectionIndex(): number /*int*/
            /**
             * Returns true if the specified index is selected.
             */
            // @ts-ignore
            isSelectedIndex(index: number /*int*/): boolean
            /**
             * Return the first index argument from the most recent call to
             * setSelectionInterval(), addSelectionInterval() or removeSelectionInterval().
             * The most recent index0 is considered the "anchor" and the most recent
             * index1 is considered the "lead".  Some interfaces display these
             * indices specially, e.g. Windows95 displays the lead index with a
             * dotted yellow outline.
             * @see #getLeadSelectionIndex
             * @see #setSelectionInterval
             * @see #addSelectionInterval
             */
            // @ts-ignore
            getAnchorSelectionIndex(): number /*int*/
            /**
             * Set the anchor selection index.
             * @see #getAnchorSelectionIndex
             */
            // @ts-ignore
            setAnchorSelectionIndex(index: number /*int*/): void
            /**
             * Return the second index argument from the most recent call to
             * setSelectionInterval(), addSelectionInterval() or removeSelectionInterval().
             * @see #getAnchorSelectionIndex
             * @see #setSelectionInterval
             * @see #addSelectionInterval
             */
            // @ts-ignore
            getLeadSelectionIndex(): number /*int*/
            /**
             * Set the lead selection index.
             * @see #getLeadSelectionIndex
             */
            // @ts-ignore
            setLeadSelectionIndex(index: number /*int*/): void
            /**
             * Change the selection to the empty set.  If this represents
             * a change to the current selection then notify each ListSelectionListener.
             * @see #addListSelectionListener
             */
            // @ts-ignore
            clearSelection(): void
            /**
             * Returns true if no indices are selected.
             */
            // @ts-ignore
            isSelectionEmpty(): boolean
            /**
             * Insert length indices beginning before/after index.  This is typically
             * called to sync the selection model with a corresponding change
             * in the data model.
             */
            // @ts-ignore
            insertIndexInterval(index: number /*int*/, length: number /*int*/, before: boolean): void
            /**
             * Remove the indices in the interval index0,index1 (inclusive) from
             * the selection model.  This is typically called to sync the selection
             * model width a corresponding change in the data model.
             */
            // @ts-ignore
            removeIndexInterval(index0: number /*int*/, index1: number /*int*/): void
            /**
             * Sets the {@code valueIsAdjusting} property, which indicates whether
             * or not upcoming selection changes should be considered part of a single
             * change. The value of this property is used to initialize the
             * {@code valueIsAdjusting} property of the {@code ListSelectionEvent}s that
             * are generated.
             * <p>
             * For example, if the selection is being updated in response to a user
             * drag, this property can be set to {@code true} when the drag is initiated
             * and set to {@code false} when the drag is finished. During the drag,
             * listeners receive events with a {@code valueIsAdjusting} property
             * set to {@code true}. At the end of the drag, when the change is
             * finalized, listeners receive an event with the value set to {@code false}.
             * Listeners can use this pattern if they wish to update only when a change
             * has been finalized.
             * <p>
             * Setting this property to {@code true} begins a series of changes that
             * is to be considered part of a single change. When the property is changed
             * back to {@code false}, an event is sent out characterizing the entire
             * selection change (if there was one), with the event's
             * {@code valueIsAdjusting} property set to {@code false}.
             * @param valueIsAdjusting the new value of the property
             * @see #getValueIsAdjusting
             * @see javax.swing.event.ListSelectionEvent#getValueIsAdjusting
             */
            // @ts-ignore
            setValueIsAdjusting(valueIsAdjusting: boolean): void
            /**
             * Returns {@code true} if the selection is undergoing a series of changes.
             * @return true if the selection is undergoing a series of changes
             * @see #setValueIsAdjusting
             */
            // @ts-ignore
            getValueIsAdjusting(): boolean
            /**
             * Sets the selection mode. The following list describes the accepted
             * selection modes:
             * <ul>
             * <li>{@code ListSelectionModel.SINGLE_SELECTION} -
             * Only one list index can be selected at a time. In this mode,
             * {@code setSelectionInterval} and {@code addSelectionInterval} are
             * equivalent, both replacing the current selection with the index
             * represented by the second argument (the "lead").
             * <li>{@code ListSelectionModel.SINGLE_INTERVAL_SELECTION} -
             * Only one contiguous interval can be selected at a time.
             * In this mode, {@code addSelectionInterval} behaves like
             * {@code setSelectionInterval} (replacing the current selection),
             * unless the given interval is immediately adjacent to or overlaps
             * the existing selection, and can therefore be used to grow it.
             * <li>{@code ListSelectionModel.MULTIPLE_INTERVAL_SELECTION} -
             * In this mode, there's no restriction on what can be selected.
             * </ul>
             * @see #getSelectionMode
             * @throws IllegalArgumentException if the selection mode isn't
             *          one of those allowed
             */
            // @ts-ignore
            setSelectionMode(selectionMode: number /*int*/): void
            /**
             * Returns the current selection mode.
             * @return the current selection mode
             * @see #setSelectionMode
             */
            // @ts-ignore
            getSelectionMode(): number /*int*/
            /**
             * Add a listener to the list that's notified each time a change
             * to the selection occurs.
             * @param x the ListSelectionListener
             * @see #removeListSelectionListener
             * @see #setSelectionInterval
             * @see #addSelectionInterval
             * @see #removeSelectionInterval
             * @see #clearSelection
             * @see #insertIndexInterval
             * @see #removeIndexInterval
             */
            // @ts-ignore
            addListSelectionListener(x: javax.swing.event.ListSelectionListener): void
            /**
             * Remove a listener from the list that's notified each time a
             * change to the selection occurs.
             * @param x the ListSelectionListener
             * @see #addListSelectionListener
             */
            // @ts-ignore
            removeListSelectionListener(x: javax.swing.event.ListSelectionListener): void
        }
    }
}
