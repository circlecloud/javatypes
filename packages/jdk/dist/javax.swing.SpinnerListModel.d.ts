declare namespace javax {
    namespace swing {
        /**
         * A simple implementation of <code>SpinnerModel</code> whose
         * values are defined by an array or a <code>List</code>.
         * For example to create a model defined by
         * an array of the names of the days of the week:
         * <pre>
         * String[] days = new DateFormatSymbols().getWeekdays();
         * SpinnerModel model = new SpinnerListModel(Arrays.asList(days).subList(1, 8));
         * </pre>
         * This class only stores a reference to the array or <code>List</code>
         * so if an element of the underlying sequence changes, it's up
         * to the application to notify the <code>ChangeListeners</code> by calling
         * <code>fireStateChanged</code>.
         * <p>
         * This model inherits a <code>ChangeListener</code>.
         * The <code>ChangeListener</code>s are notified whenever the
         * model's <code>value</code> or <code>list</code> properties changes.
         * @see JSpinner
         * @see SpinnerModel
         * @see AbstractSpinnerModel
         * @see SpinnerNumberModel
         * @see SpinnerDateModel
         * @author Hans Muller
         * @since 1.4
         */
        // @ts-ignore
        class SpinnerListModel extends javax.swing.AbstractSpinnerModel implements java.io.Serializable {
            /**
             * Constructs a <code>SpinnerModel</code> whose sequence of
             * values is defined by the specified <code>List</code>.
             * The initial value (<i>current element</i>)
             * of the model will be <code>values.get(0)</code>.
             * If <code>values</code> is <code>null</code> or has zero
             * size, an <code>IllegalArugmentException</code> is thrown.
             * @param values the sequence this model represents
             * @throws IllegalArgumentException if <code>values</code> is
             *     <code>null</code> or zero size
             */
            // @ts-ignore
            constructor(values: java.util.List<any> | Array<any>)
            /**
             * Constructs a <code>SpinnerModel</code> whose sequence of values
             * is defined by the specified array.  The initial value of the model
             * will be <code>values[0]</code>.  If <code>values</code> is
             * <code>null</code> or has zero length, an
             * <code>IllegalArgumentException</code> is thrown.
             * @param values the sequence this model represents
             * @throws IllegalArgumentException if <code>values</code> is
             *     <code>null</code> or zero length
             */
            // @ts-ignore
            constructor(values: java.lang.Object[] | any[])
            /**
             * Constructs an effectively empty <code>SpinnerListModel</code>.
             * The model's list will contain a single
             * <code>"empty"</code> string element.
             */
            // @ts-ignore
            constructor()
            /**
             * Returns the <code>List</code> that defines the sequence for this model.
             * @return the value of the <code>list</code> property
             * @see #setList
             */
            // @ts-ignore
            public getList(): Array<any>
            /**
             * Changes the list that defines this sequence and resets the index
             * of the models <code>value</code> to zero.  Note that <code>list</code>
             * is not copied, the model just stores a reference to it.
             * <p>
             * This method fires a <code>ChangeEvent</code> if <code>list</code> is
             * not equal to the current list.
             * @param list the sequence that this model represents
             * @throws IllegalArgumentException if <code>list</code> is
             *     <code>null</code> or zero length
             * @see #getList
             */
            // @ts-ignore
            public setList(list: java.util.List<any> | Array<any>): void
            /**
             * Returns the current element of the sequence.
             * @return the <code>value</code> property
             * @see SpinnerModel#getValue
             * @see #setValue
             */
            // @ts-ignore
            public getValue(): any
            /**
             * Changes the current element of the sequence and notifies
             * <code>ChangeListeners</code>.  If the specified
             * value is not equal to an element of the underlying sequence
             * then an <code>IllegalArgumentException</code> is thrown.
             * In the following example the <code>setValue</code> call
             * would cause an exception to be thrown:
             * <pre>
             * String[] values = {"one", "two", "free", "four"};
             * SpinnerModel model = new SpinnerListModel(values);
             * model.setValue("TWO");
             * </pre>
             * @param elt the sequence element that will be model's current value
             * @throws IllegalArgumentException if the specified value isn't allowed
             * @see SpinnerModel#setValue
             * @see #getValue
             */
            // @ts-ignore
            public setValue(elt: java.lang.Object | any): void
            /**
             * Returns the next legal value of the underlying sequence or
             * <code>null</code> if value is already the last element.
             * @return the next legal value of the underlying sequence or
             *      <code>null</code> if value is already the last element
             * @see SpinnerModel#getNextValue
             * @see #getPreviousValue
             */
            // @ts-ignore
            public getNextValue(): any
            /**
             * Returns the previous element of the underlying sequence or
             * <code>null</code> if value is already the first element.
             * @return the previous element of the underlying sequence or
             *      <code>null</code> if value is already the first element
             * @see SpinnerModel#getPreviousValue
             * @see #getNextValue
             */
            // @ts-ignore
            public getPreviousValue(): any
        }
    }
}
