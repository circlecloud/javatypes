declare namespace javax {
    namespace swing {
        /**
         * A model for a potentially unbounded sequence of object values.  This model
         * is similar to <code>ListModel</code> however there are some important differences:
         * <ul>
         * <li> The number of sequence elements isn't necessarily bounded.
         * <li> The model doesn't support indexed random access to sequence elements.
         * Only three sequence values are accessible at a time: current, next and
         * previous.
         * <li> The current sequence element, can be set.
         * </ul>
         * <p>
         * A <code>SpinnerModel</code> has three properties, only the first is read/write.
         * <dl>
         * <dt><code>value</code>
         * <dd>The current element of the sequence.
         * <dt><code>nextValue</code>
         * <dd>The following element or null if <code>value</code> is the
         * last element of the sequence.
         * <dt><code>previousValue</code>
         * <dd>The preceding element or null if <code>value</code> is the
         * first element of the sequence.
         * </dl>
         * When the the <code>value</code> property changes,
         * <code>ChangeListeners</code> are notified.  <code>SpinnerModel</code> may
         * choose to notify the <code>ChangeListeners</code> under other circumstances.
         * @see JSpinner
         * @see AbstractSpinnerModel
         * @see SpinnerListModel
         * @see SpinnerNumberModel
         * @see SpinnerDateModel
         * @author Hans Muller
         * @since 1.4
         */
        // @ts-ignore
        interface SpinnerModel {
            /**
             * The <i>current element</i> of the sequence.  This element is usually
             * displayed by the <code>editor</code> part of a <code>JSpinner</code>.
             * @return the current spinner value.
             * @see #setValue
             */
            // @ts-ignore
            getValue(): any
            /**
             * Changes current value of the model, typically this value is displayed
             * by the <code>editor</code> part of a  <code>JSpinner</code>.
             * If the <code>SpinnerModel</code> implementation doesn't support
             * the specified value then an <code>IllegalArgumentException</code>
             * is thrown.  For example a <code>SpinnerModel</code> for numbers might
             * only support values that are integer multiples of ten. In
             * that case, <code>model.setValue(new Number(11))</code>
             * would throw an exception.
             * @throws IllegalArgumentException if <code>value</code> isn't allowed
             * @see #getValue
             */
            // @ts-ignore
            setValue(value: java.lang.Object | any): void
            /**
             * Return the object in the sequence that comes after the object returned
             * by <code>getValue()</code>. If the end of the sequence has been reached
             * then return null.  Calling this method does not effect <code>value</code>.
             * @return the next legal value or null if one doesn't exist
             * @see #getValue
             * @see #getPreviousValue
             */
            // @ts-ignore
            getNextValue(): any
            /**
             * Return the object in the sequence that comes before the object returned
             * by <code>getValue()</code>.  If the end of the sequence has been reached then
             * return null. Calling this method does not effect <code>value</code>.
             * @return the previous legal value or null if one doesn't exist
             * @see #getValue
             * @see #getNextValue
             */
            // @ts-ignore
            getPreviousValue(): any
            /**
             * Adds a <code>ChangeListener</code> to the model's listener list.  The
             * <code>ChangeListeners</code> must be notified when models <code>value</code>
             * changes.
             * @param l the ChangeListener to add
             * @see #removeChangeListener
             */
            // @ts-ignore
            addChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Removes a <code>ChangeListener</code> from the model's listener list.
             * @param l the ChangeListener to remove
             * @see #addChangeListener
             */
            // @ts-ignore
            removeChangeListener(l: javax.swing.event.ChangeListener): void
        }
    }
}
