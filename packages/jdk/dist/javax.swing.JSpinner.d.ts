declare namespace javax {
    namespace swing {
        /**
         * A single line input field that lets the user select a
         * number or an object value from an ordered sequence. Spinners typically
         * provide a pair of tiny arrow buttons for stepping through the elements
         * of the sequence. The keyboard up/down arrow keys also cycle through the
         * elements. The user may also be allowed to type a (legal) value directly
         * into the spinner. Although combo boxes provide similar functionality,
         * spinners are sometimes preferred because they don't require a drop down list
         * that can obscure important data.
         * <p>
         * A <code>JSpinner</code>'s sequence value is defined by its
         * <code>SpinnerModel</code>.
         * The <code>model</code> can be specified as a constructor argument and
         * changed with the <code>model</code> property.  <code>SpinnerModel</code>
         * classes for some common types are provided: <code>SpinnerListModel</code>,
         * <code>SpinnerNumberModel</code>, and <code>SpinnerDateModel</code>.
         * <p>
         * A <code>JSpinner</code> has a single child component that's
         * responsible for displaying
         * and potentially changing the current element or <i>value</i> of
         * the model, which is called the <code>editor</code>.  The editor is created
         * by the <code>JSpinner</code>'s constructor and can be changed with the
         * <code>editor</code> property.  The <code>JSpinner</code>'s editor stays
         * in sync with the model by listening for <code>ChangeEvent</code>s. If the
         * user has changed the value displayed by the <code>editor</code> it is
         * possible for the <code>model</code>'s value to differ from that of
         * the <code>editor</code>. To make sure the <code>model</code> has the same
         * value as the editor use the <code>commitEdit</code> method, eg:
         * <pre>
         * try {
         * spinner.commitEdit();
         * }
         * catch (ParseException pe) {
         * // Edited value is invalid, spinner.getValue() will return
         * // the last valid value, you could revert the spinner to show that:
         * JComponent editor = spinner.getEditor();
         * if (editor instanceof DefaultEditor) {
         * ((DefaultEditor)editor).getTextField().setValue(spinner.getValue());
         * }
         * // reset the value to some known value:
         * spinner.setValue(fallbackValue);
         * // or treat the last valid value as the current, in which
         * // case you don't need to do anything.
         * }
         * return spinner.getValue();
         * </pre>
         * <p>
         * For information and examples of using spinner see
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/spinner.html">How to Use Spinners</a>,
         * a section in <em>The Java Tutorial.</em>
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
         * @beaninfo attribute: isContainer false
         *  description: A single line input field that lets the user select a
         *      number or an object value from an ordered set.
         * @see SpinnerModel
         * @see AbstractSpinnerModel
         * @see SpinnerListModel
         * @see SpinnerNumberModel
         * @see SpinnerDateModel
         * @see JFormattedTextField
         * @author Hans Muller
         * @author Lynn Monsanto (accessibility)
         * @since 1.4
         */
        // @ts-ignore
        class JSpinner extends javax.swing.JComponent implements javax.accessibility.Accessible {
            /**
             * Constructs a spinner for the given model. The spinner has
             * a set of previous/next buttons, and an editor appropriate
             * for the model.
             * @throws NullPointerException if the model is {#code null}
             */
            // @ts-ignore
            constructor(model: javax.swing.SpinnerModel)
            /**
             * Constructs a spinner with an <code>Integer SpinnerNumberModel</code>
             * with initial value 0 and no minimum or maximum limits.
             */
            // @ts-ignore
            constructor()
            /**
             * Returns the look and feel (L&amp;F) object that renders this component.
             * @return the <code>SpinnerUI</code> object that renders this component
             */
            // @ts-ignore
            public getUI(): javax.swing.plaf.SpinnerUI
            /**
             * Sets the look and feel (L&amp;F) object that renders this component.
             * @param ui  the <code>SpinnerUI</code> L&amp;F object
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            public setUI(ui: javax.swing.plaf.SpinnerUI): void
            /**
             * Returns the suffix used to construct the name of the look and feel
             * (L&amp;F) class used to render this component.
             * @return the string "SpinnerUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            public getUIClassID(): string
            /**
             * Resets the UI property with the value from the current look and feel.
             * @see UIManager#getUI
             */
            // @ts-ignore
            public updateUI(): void
            /**
             * This method is called by the constructors to create the
             * <code>JComponent</code>
             * that displays the current value of the sequence.  The editor may
             * also allow the user to enter an element of the sequence directly.
             * An editor must listen for <code>ChangeEvents</code> on the
             * <code>model</code> and keep the value it displays
             * in sync with the value of the model.
             * <p>
             * Subclasses may override this method to add support for new
             * <code>SpinnerModel</code> classes.  Alternatively one can just
             * replace the editor created here with the <code>setEditor</code>
             * method.  The default mapping from model type to editor is:
             * <ul>
             * <li> <code>SpinnerNumberModel =&gt; JSpinner.NumberEditor</code>
             * <li> <code>SpinnerDateModel =&gt; JSpinner.DateEditor</code>
             * <li> <code>SpinnerListModel =&gt; JSpinner.ListEditor</code>
             * <li> <i>all others</i> =&gt; <code>JSpinner.DefaultEditor</code>
             * </ul>
             * @return a component that displays the current value of the sequence
             * @param model the value of getModel
             * @see #getModel
             * @see #setEditor
             */
            // @ts-ignore
            createEditor(model: javax.swing.SpinnerModel): javax.swing.JComponent
            /**
             * Changes the model that represents the value of this spinner.
             * If the editor property has not been explicitly set,
             * the editor property is (implicitly) set after the <code>"model"</code>
             * <code>PropertyChangeEvent</code> has been fired.  The editor
             * property is set to the value returned by <code>createEditor</code>,
             * as in:
             * <pre>
             * setEditor(createEditor(model));
             * </pre>
             * @param model the new <code>SpinnerModel</code>
             * @see #getModel
             * @see #getEditor
             * @see #setEditor
             * @throws IllegalArgumentException if model is <code>null</code>
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: Model that represents the value of this spinner.
             */
            // @ts-ignore
            public setModel(model: javax.swing.SpinnerModel): void
            /**
             * Returns the <code>SpinnerModel</code> that defines
             * this spinners sequence of values.
             * @return the value of the model property
             * @see #setModel
             */
            // @ts-ignore
            public getModel(): javax.swing.SpinnerModel
            /**
             * Returns the current value of the model, typically
             * this value is displayed by the <code>editor</code>. If the
             * user has changed the value displayed by the <code>editor</code> it is
             * possible for the <code>model</code>'s value to differ from that of
             * the <code>editor</code>, refer to the class level javadoc for examples
             * of how to deal with this.
             * <p>
             * This method simply delegates to the <code>model</code>.
             * It is equivalent to:
             * <pre>
             * getModel().getValue()
             * </pre>
             * @see #setValue
             * @see SpinnerModel#getValue
             */
            // @ts-ignore
            public getValue(): any
            /**
             * Changes current value of the model, typically
             * this value is displayed by the <code>editor</code>.
             * If the <code>SpinnerModel</code> implementation
             * doesn't support the specified value then an
             * <code>IllegalArgumentException</code> is thrown.
             * <p>
             * This method simply delegates to the <code>model</code>.
             * It is equivalent to:
             * <pre>
             * getModel().setValue(value)
             * </pre>
             * @throws IllegalArgumentException if <code>value</code> isn't allowed
             * @see #getValue
             * @see SpinnerModel#setValue
             */
            // @ts-ignore
            public setValue(value: java.lang.Object | any): void
            /**
             * Returns the object in the sequence that comes after the object returned
             * by <code>getValue()</code>. If the end of the sequence has been reached
             * then return <code>null</code>.
             * Calling this method does not effect <code>value</code>.
             * <p>
             * This method simply delegates to the <code>model</code>.
             * It is equivalent to:
             * <pre>
             * getModel().getNextValue()
             * </pre>
             * @return the next legal value or <code>null</code> if one doesn't exist
             * @see #getValue
             * @see #getPreviousValue
             * @see SpinnerModel#getNextValue
             */
            // @ts-ignore
            public getNextValue(): any
            /**
             * Adds a listener to the list that is notified each time a change
             * to the model occurs.  The source of <code>ChangeEvents</code>
             * delivered to <code>ChangeListeners</code> will be this
             * <code>JSpinner</code>.  Note also that replacing the model
             * will not affect listeners added directly to JSpinner.
             * Applications can add listeners to  the model directly.  In that
             * case is that the source of the event would be the
             * <code>SpinnerModel</code>.
             * @param listener the <code>ChangeListener</code> to add
             * @see #removeChangeListener
             * @see #getModel
             */
            // @ts-ignore
            public addChangeListener(listener: javax.swing.event.ChangeListener): void
            /**
             * Removes a <code>ChangeListener</code> from this spinner.
             * @param listener the <code>ChangeListener</code> to remove
             * @see #fireStateChanged
             * @see #addChangeListener
             */
            // @ts-ignore
            public removeChangeListener(listener: javax.swing.event.ChangeListener): void
            /**
             * Returns an array of all the <code>ChangeListener</code>s added
             * to this JSpinner with addChangeListener().
             * @return all of the <code>ChangeListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            public getChangeListeners(): javax.swing.event.ChangeListener[]
            /**
             * Sends a <code>ChangeEvent</code>, whose source is this
             * <code>JSpinner</code>, to each <code>ChangeListener</code>.
             * When a <code>ChangeListener</code> has been added
             * to the spinner, this method method is called each time
             * a <code>ChangeEvent</code> is received from the model.
             * @see #addChangeListener
             * @see #removeChangeListener
             * @see EventListenerList
             */
            // @ts-ignore
            fireStateChanged(): void
            /**
             * Returns the object in the sequence that comes
             * before the object returned by <code>getValue()</code>.
             * If the end of the sequence has been reached then
             * return <code>null</code>. Calling this method does
             * not effect <code>value</code>.
             * <p>
             * This method simply delegates to the <code>model</code>.
             * It is equivalent to:
             * <pre>
             * getModel().getPreviousValue()
             * </pre>
             * @return the previous legal value or <code>null</code>
             *    if one doesn't exist
             * @see #getValue
             * @see #getNextValue
             * @see SpinnerModel#getPreviousValue
             */
            // @ts-ignore
            public getPreviousValue(): any
            /**
             * Changes the <code>JComponent</code> that displays the current value
             * of the <code>SpinnerModel</code>.  It is the responsibility of this
             * method to <i>disconnect</i> the old editor from the model and to
             * connect the new editor.  This may mean removing the
             * old editors <code>ChangeListener</code> from the model or the
             * spinner itself and adding one for the new editor.
             * @param editor the new editor
             * @see #getEditor
             * @see #createEditor
             * @see #getModel
             * @throws IllegalArgumentException if editor is <code>null</code>
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: JComponent that displays the current value of the model
             */
            // @ts-ignore
            public setEditor(editor: javax.swing.JComponent): void
            /**
             * Returns the component that displays and potentially
             * changes the model's value.
             * @return the component that displays and potentially
             *     changes the model's value
             * @see #setEditor
             * @see #createEditor
             */
            // @ts-ignore
            public getEditor(): javax.swing.JComponent
            /**
             * Commits the currently edited value to the <code>SpinnerModel</code>.
             * <p>
             * If the editor is an instance of <code>DefaultEditor</code>, the
             * call if forwarded to the editor, otherwise this does nothing.
             * @throws ParseException if the currently edited value couldn't
             *          be committed.
             */
            // @ts-ignore
            public commitEdit(): void
            /**
             * Gets the <code>AccessibleContext</code> for the <code>JSpinner</code>
             * @return the <code>AccessibleContext</code> for the <code>JSpinner</code>
             * @since 1.5
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
