declare namespace java {
    namespace awt {
        /**
         * This class represents the state of a horizontal or vertical
         * scrollbar of a <code>ScrollPane</code>.  Objects of this class are
         * returned by <code>ScrollPane</code> methods.
         * @since 1.4
         */
        // @ts-ignore
        class ScrollPaneAdjustable extends java.lang.Object implements java.awt.Adjustable, java.io.Serializable {
            /**
             * Returns the orientation of this scrollbar.
             * @return the orientation of this scrollbar, either
             *             <code>Adjustable.HORIZONTAL</code> or
             *             <code>Adjustable.VERTICAL</code>
             */
            // @ts-ignore
            getOrientation(): int
            /**
             * This method should <strong>NOT</strong> be called by user code.
             * This method is public for this class to properly implement
             * <code>Adjustable</code> interface.
             * @throws AWTError Always throws an error when called.
             */
            // @ts-ignore
            setMinimum(min: number /*int*/): void
            // @ts-ignore
            getMinimum(): int
            /**
             * This method should <strong>NOT</strong> be called by user code.
             * This method is public for this class to properly implement
             * <code>Adjustable</code> interface.
             * @throws AWTError Always throws an error when called.
             */
            // @ts-ignore
            setMaximum(max: number /*int*/): void
            // @ts-ignore
            getMaximum(): int
            // @ts-ignore
            setUnitIncrement(u: number /*int*/): void
            // @ts-ignore
            getUnitIncrement(): int
            // @ts-ignore
            setBlockIncrement(b: number /*int*/): void
            // @ts-ignore
            getBlockIncrement(): int
            /**
             * This method should <strong>NOT</strong> be called by user code.
             * This method is public for this class to properly implement
             * <code>Adjustable</code> interface.
             * @throws AWTError Always throws an error when called.
             */
            // @ts-ignore
            setVisibleAmount(v: number /*int*/): void
            // @ts-ignore
            getVisibleAmount(): int
            /**
             * Sets the <code>valueIsAdjusting</code> property.
             * @param b new adjustment-in-progress status
             * @see #getValueIsAdjusting
             * @since 1.4
             */
            // @ts-ignore
            setValueIsAdjusting(b: boolean): void
            /**
             * Returns true if the value is in the process of changing as a
             * result of actions being taken by the user.
             * @return the value of the <code>valueIsAdjusting</code> property
             * @see #setValueIsAdjusting
             */
            // @ts-ignore
            getValueIsAdjusting(): boolean
            /**
             * Sets the value of this scrollbar to the specified value.
             * <p>
             * If the value supplied is less than the current minimum or
             * greater than the current maximum, then one of those values is
             * substituted, as appropriate.
             * @param v the new value of the scrollbar
             */
            // @ts-ignore
            setValue(v: number /*int*/): void
            // @ts-ignore
            getValue(): int
            /**
             * Adds the specified adjustment listener to receive adjustment
             * events from this <code>ScrollPaneAdjustable</code>.
             * If <code>l</code> is <code>null</code>, no exception is thrown
             * and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param l   the adjustment listener.
             * @see #removeAdjustmentListener
             * @see #getAdjustmentListeners
             * @see java.awt.event.AdjustmentListener
             * @see java.awt.event.AdjustmentEvent
             */
            // @ts-ignore
            addAdjustmentListener(l: java.awt.event.AdjustmentListener): void
            /**
             * Removes the specified adjustment listener so that it no longer
             * receives adjustment events from this <code>ScrollPaneAdjustable</code>.
             * If <code>l</code> is <code>null</code>, no exception is thrown
             * and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param l     the adjustment listener.
             * @see #addAdjustmentListener
             * @see #getAdjustmentListeners
             * @see java.awt.event.AdjustmentListener
             * @see java.awt.event.AdjustmentEvent
             * @since JDK1.1
             */
            // @ts-ignore
            removeAdjustmentListener(l: java.awt.event.AdjustmentListener): void
            /**
             * Returns an array of all the adjustment listeners
             * registered on this <code>ScrollPaneAdjustable</code>.
             * @return all of this <code>ScrollPaneAdjustable</code>'s
             *          <code>AdjustmentListener</code>s
             *          or an empty array if no adjustment
             *          listeners are currently registered
             * @see #addAdjustmentListener
             * @see #removeAdjustmentListener
             * @see java.awt.event.AdjustmentListener
             * @see java.awt.event.AdjustmentEvent
             * @since 1.4
             */
            // @ts-ignore
            getAdjustmentListeners(): java.awt.event.AdjustmentListener[]
            /**
             * Returns a string representation of this scrollbar and its values.
             * @return a string representation of this scrollbar.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Returns a string representing the state of this scrollbar.
             * This method is intended to be used only for debugging purposes,
             * and the content and format of the returned string may vary
             * between implementations.  The returned string may be empty but
             * may not be <code>null</code>.
             * @return the parameter string of this scrollbar.
             */
            // @ts-ignore
            paramString(): java.lang.String
        }
    }
}
