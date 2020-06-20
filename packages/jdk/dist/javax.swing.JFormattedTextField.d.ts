declare namespace javax {
    namespace swing {
        /**
         * <code>JFormattedTextField</code> extends <code>JTextField</code> adding
         * support for formatting arbitrary values, as well as retrieving a particular
         * object once the user has edited the text. The following illustrates
         * configuring a <code>JFormattedTextField</code> to edit dates:
         * <pre>
         * JFormattedTextField ftf = new JFormattedTextField();
         * ftf.setValue(new Date());
         * </pre>
         * <p>
         * Once a <code>JFormattedTextField</code> has been created, you can
         * listen for editing changes by way of adding
         * a <code>PropertyChangeListener</code> and listening for
         * <code>PropertyChangeEvent</code>s with the property name <code>value</code>.
         * <p>
         * <code>JFormattedTextField</code> allows
         * configuring what action should be taken when focus is lost. The possible
         * configurations are:
         * <table summary="Possible JFormattedTextField configurations and their descriptions">
         * <tr><th><p style="text-align:left">Value</p></th><th><p style="text-align:left">Description</p></th></tr>
         * <tr><td>JFormattedTextField.REVERT
         * <td>Revert the display to match that of <code>getValue</code>,
         * possibly losing the current edit.
         * <tr><td>JFormattedTextField.COMMIT
         * <td>Commits the current value. If the value being edited
         * isn't considered a legal value by the
         * <code>AbstractFormatter</code> that is, a
         * <code>ParseException</code> is thrown, then the value
         * will not change, and then edited value will persist.
         * <tr><td>JFormattedTextField.COMMIT_OR_REVERT
         * <td>Similar to <code>COMMIT</code>, but if the value isn't
         * legal, behave like <code>REVERT</code>.
         * <tr><td>JFormattedTextField.PERSIST
         * <td>Do nothing, don't obtain a new
         * <code>AbstractFormatter</code>, and don't update the value.
         * </table>
         * The default is <code>JFormattedTextField.COMMIT_OR_REVERT</code>,
         * refer to {@link #setFocusLostBehavior} for more information on this.
         * <p>
         * <code>JFormattedTextField</code> allows the focus to leave, even if
         * the currently edited value is invalid. To lock the focus down while the
         * <code>JFormattedTextField</code> is an invalid edit state
         * you can attach an <code>InputVerifier</code>. The following code snippet
         * shows a potential implementation of such an <code>InputVerifier</code>:
         * <pre>
         * public class FormattedTextFieldVerifier extends InputVerifier {
         * public boolean verify(JComponent input) {
         * if (input instanceof JFormattedTextField) {
         * JFormattedTextField ftf = (JFormattedTextField)input;
         * AbstractFormatter formatter = ftf.getFormatter();
         * if (formatter != null) {
         * String text = ftf.getText();
         * try {
         * formatter.stringToValue(text);
         * return true;
         * } catch (ParseException pe) {
         * return false;
         * }
         * }
         * }
         * return true;
         * }
         * public boolean shouldYieldFocus(JComponent input) {
         * return verify(input);
         * }
         * }
         * </pre>
         * <p>
         * Alternatively, you could invoke <code>commitEdit</code>, which would also
         * commit the value.
         * <p>
         * <code>JFormattedTextField</code> does not do the formatting it self,
         * rather formatting is done through an instance of
         * <code>JFormattedTextField.AbstractFormatter</code> which is obtained from
         * an instance of <code>JFormattedTextField.AbstractFormatterFactory</code>.
         * Instances of <code>JFormattedTextField.AbstractFormatter</code> are
         * notified when they become active by way of the
         * <code>install</code> method, at which point the
         * <code>JFormattedTextField.AbstractFormatter</code> can install whatever
         * it needs to, typically a <code>DocumentFilter</code>. Similarly when
         * <code>JFormattedTextField</code> no longer
         * needs the <code>AbstractFormatter</code>, it will invoke
         * <code>uninstall</code>.
         * <p>
         * <code>JFormattedTextField</code> typically
         * queries the <code>AbstractFormatterFactory</code> for an
         * <code>AbstractFormat</code> when it gains or loses focus. Although this
         * can change based on the focus lost policy. If the focus lost
         * policy is <code>JFormattedTextField.PERSIST</code>
         * and the <code>JFormattedTextField</code> has been edited, the
         * <code>AbstractFormatterFactory</code> will not be queried until the
         * value has been committed. Similarly if the focus lost policy is
         * <code>JFormattedTextField.COMMIT</code> and an exception
         * is thrown from <code>stringToValue</code>, the
         * <code>AbstractFormatterFactory</code> will not be queried when focus is
         * lost or gained.
         * <p>
         * <code>JFormattedTextField.AbstractFormatter</code>
         * is also responsible for determining when values are committed to
         * the <code>JFormattedTextField</code>. Some
         * <code>JFormattedTextField.AbstractFormatter</code>s will make new values
         * available on every edit, and others will never commit the value. You can
         * force the current value to be obtained
         * from the current <code>JFormattedTextField.AbstractFormatter</code>
         * by way of invoking <code>commitEdit</code>. <code>commitEdit</code> will
         * be invoked whenever return is pressed in the
         * <code>JFormattedTextField</code>.
         * <p>
         * If an <code>AbstractFormatterFactory</code> has not been explicitly
         * set, one will be set based on the <code>Class</code> of the value type after
         * <code>setValue</code> has been invoked (assuming value is non-null).
         * For example, in the following code an appropriate
         * <code>AbstractFormatterFactory</code> and <code>AbstractFormatter</code>
         * will be created to handle formatting of numbers:
         * <pre>
         * JFormattedTextField tf = new JFormattedTextField();
         * tf.setValue(100);
         * </pre>
         * <p>
         * <strong>Warning:</strong> As the <code>AbstractFormatter</code> will
         * typically install a <code>DocumentFilter</code> on the
         * <code>Document</code>, and a <code>NavigationFilter</code> on the
         * <code>JFormattedTextField</code> you should not install your own. If you do,
         * you are likely to see odd behavior in that the editing policy of the
         * <code>AbstractFormatter</code> will not be enforced.
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
         * @since 1.4
         */
        // @ts-ignore
        class JFormattedTextField extends javax.swing.JTextField {
            /**
             * Creates a <code>JFormattedTextField</code> with no
             * <code>AbstractFormatterFactory</code>. Use <code>setMask</code> or
             * <code>setFormatterFactory</code> to configure the
             * <code>JFormattedTextField</code> to edit a particular type of
             * value.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a JFormattedTextField with the specified value. This will
             * create an <code>AbstractFormatterFactory</code> based on the
             * type of <code>value</code>.
             * @param value Initial value for the JFormattedTextField
             */
            // @ts-ignore
            constructor(value: any)
            /**
             * Creates a <code>JFormattedTextField</code>. <code>format</code> is
             * wrapped in an appropriate <code>AbstractFormatter</code> which is
             * then wrapped in an <code>AbstractFormatterFactory</code>.
             * @param format Format used to look up an AbstractFormatter
             */
            // @ts-ignore
            constructor(format: java.text.Format)
            /**
             * Creates a <code>JFormattedTextField</code> with the specified
             * <code>AbstractFormatter</code>. The <code>AbstractFormatter</code>
             * is placed in an <code>AbstractFormatterFactory</code>.
             * @param formatter AbstractFormatter to use for formatting.
             */
            // @ts-ignore
            constructor(formatter: javax.swing.JFormattedTextField.AbstractFormatter)
            /**
             * Creates a <code>JFormattedTextField</code> with the specified
             * <code>AbstractFormatterFactory</code>.
             * @param factory AbstractFormatterFactory used for formatting.
             */
            // @ts-ignore
            constructor(factory: javax.swing.JFormattedTextField.AbstractFormatterFactory)
            /**
             * Creates a <code>JFormattedTextField</code> with the specified
             * <code>AbstractFormatterFactory</code> and initial value.
             * @param factory <code>AbstractFormatterFactory</code> used for
             *         formatting.
             * @param currentValue Initial value to use
             */
            // @ts-ignore
            constructor(factory: javax.swing.JFormattedTextField.AbstractFormatterFactory, currentValue: any)
            /**
             * Constant identifying that when focus is lost,
             * <code>commitEdit</code> should be invoked. If in committing the
             * new value a <code>ParseException</code> is thrown, the invalid
             * value will remain.
             * @see #setFocusLostBehavior
             */
            // @ts-ignore
            readonly COMMIT: number /*int*/
            /**
             * Constant identifying that when focus is lost,
             * <code>commitEdit</code> should be invoked. If in committing the new
             * value a <code>ParseException</code> is thrown, the value will be
             * reverted.
             * @see #setFocusLostBehavior
             */
            // @ts-ignore
            readonly COMMIT_OR_REVERT: number /*int*/
            /**
             * Constant identifying that when focus is lost, editing value should
             * be reverted to current value set on the
             * <code>JFormattedTextField</code>.
             * @see #setFocusLostBehavior
             */
            // @ts-ignore
            readonly REVERT: number /*int*/
            /**
             * Constant identifying that when focus is lost, the edited value
             * should be left.
             * @see #setFocusLostBehavior
             */
            // @ts-ignore
            readonly PERSIST: number /*int*/
            /**
             * Sets the behavior when focus is lost. This will be one of
             * <code>JFormattedTextField.COMMIT_OR_REVERT</code>,
             * <code>JFormattedTextField.REVERT</code>,
             * <code>JFormattedTextField.COMMIT</code> or
             * <code>JFormattedTextField.PERSIST</code>
             * Note that some <code>AbstractFormatter</code>s may push changes as
             * they occur, so that the value of this will have no effect.
             * <p>
             * This will throw an <code>IllegalArgumentException</code> if the object
             * passed in is not one of the afore mentioned values.
             * <p>
             * The default value of this property is
             * <code>JFormattedTextField.COMMIT_OR_REVERT</code>.
             * @param behavior Identifies behavior when focus is lost
             * @throws IllegalArgumentException if behavior is not one of the known
             *          values
             * @beaninfo enum: COMMIT         JFormattedTextField.COMMIT
             *         COMMIT_OR_REVERT JFormattedTextField.COMMIT_OR_REVERT
             *         REVERT         JFormattedTextField.REVERT
             *         PERSIST        JFormattedTextField.PERSIST
             *   description: Behavior when component loses focus
             */
            // @ts-ignore
            setFocusLostBehavior(behavior: number /*int*/): void
            /**
             * Returns the behavior when focus is lost. This will be one of
             * <code>COMMIT_OR_REVERT</code>,
             * <code>COMMIT</code>,
             * <code>REVERT</code> or
             * <code>PERSIST</code>
             * Note that some <code>AbstractFormatter</code>s may push changes as
             * they occur, so that the value of this will have no effect.
             * @return returns behavior when focus is lost
             */
            // @ts-ignore
            getFocusLostBehavior(): int
            /**
             * Sets the <code>AbstractFormatterFactory</code>.
             * <code>AbstractFormatterFactory</code> is
             * able to return an instance of <code>AbstractFormatter</code> that is
             * used to format a value for display, as well an enforcing an editing
             * policy.
             * <p>
             * If you have not explicitly set an <code>AbstractFormatterFactory</code>
             * by way of this method (or a constructor) an
             * <code>AbstractFormatterFactory</code> and consequently an
             * <code>AbstractFormatter</code> will be used based on the
             * <code>Class</code> of the value. <code>NumberFormatter</code> will
             * be used for <code>Number</code>s, <code>DateFormatter</code> will
             * be used for <code>Dates</code>, otherwise <code>DefaultFormatter</code>
             * will be used.
             * <p>
             * This is a JavaBeans bound property.
             * @param tf <code>AbstractFormatterFactory</code> used to lookup
             *           instances of <code>AbstractFormatter</code>
             * @beaninfo bound: true
             *    attribute: visualUpdate true
             *  description: AbstractFormatterFactory, responsible for returning an
             *               AbstractFormatter that can format the current value.
             */
            // @ts-ignore
            setFormatterFactory(tf: javax.swing.JFormattedTextField.AbstractFormatterFactory): void
            /**
             * Returns the current <code>AbstractFormatterFactory</code>.
             * @see #setFormatterFactory
             * @return <code>AbstractFormatterFactory</code> used to determine
             *          <code>AbstractFormatter</code>s
             */
            // @ts-ignore
            getFormatterFactory(): javax.swing.JFormattedTextField.AbstractFormatterFactory
            /**
             * Sets the current <code>AbstractFormatter</code>.
             * <p>
             * You should not normally invoke this, instead set the
             * <code>AbstractFormatterFactory</code> or set the value.
             * <code>JFormattedTextField</code> will
             * invoke this as the state of the <code>JFormattedTextField</code>
             * changes and requires the value to be reset.
             * <code>JFormattedTextField</code> passes in the
             * <code>AbstractFormatter</code> obtained from the
             * <code>AbstractFormatterFactory</code>.
             * <p>
             * This is a JavaBeans bound property.
             * @see #setFormatterFactory
             * @param format AbstractFormatter to use for formatting
             * @beaninfo bound: true
             *    attribute: visualUpdate true
             *  description: TextFormatter, responsible for formatting the current value
             */
            // @ts-ignore
            setFormatter(format: javax.swing.JFormattedTextField.AbstractFormatter): void
            /**
             * Returns the <code>AbstractFormatter</code> that is used to format and
             * parse the current value.
             * @return AbstractFormatter used for formatting
             */
            // @ts-ignore
            getFormatter(): javax.swing.JFormattedTextField.AbstractFormatter
            /**
             * Sets the value that will be formatted by an
             * <code>AbstractFormatter</code> obtained from the current
             * <code>AbstractFormatterFactory</code>. If no
             * <code>AbstractFormatterFactory</code> has been specified, this will
             * attempt to create one based on the type of <code>value</code>.
             * <p>
             * The default value of this property is null.
             * <p>
             * This is a JavaBeans bound property.
             * @param value Current value to display
             * @beaninfo bound: true
             *    attribute: visualUpdate true
             *  description: The value to be formatted.
             */
            // @ts-ignore
            setValue(value: any): void
            /**
             * Returns the last valid value. Based on the editing policy of
             * the <code>AbstractFormatter</code> this may not return the current
             * value. The currently edited value can be obtained by invoking
             * <code>commitEdit</code> followed by <code>getValue</code>.
             * @return Last valid value
             */
            // @ts-ignore
            getValue(): java.lang.Object
            /**
             * Forces the current value to be taken from the
             * <code>AbstractFormatter</code> and set as the current value.
             * This has no effect if there is no current
             * <code>AbstractFormatter</code> installed.
             * @throws ParseException if the <code>AbstractFormatter</code> is not able
             *          to format the current value
             */
            // @ts-ignore
            commitEdit(): void
            /**
             * Returns true if the current value being edited is valid. The value of
             * this is managed by the current <code>AbstractFormatter</code>, as such
             * there is no public setter for it.
             * @return true if the current value being edited is valid.
             */
            // @ts-ignore
            isEditValid(): boolean
            /**
             * Invoked when the user inputs an invalid value. This gives the
             * component a chance to provide feedback. The default
             * implementation beeps.
             */
            // @ts-ignore
            invalidEdit(): void
            /**
             * Processes any input method events, such as
             * <code>InputMethodEvent.INPUT_METHOD_TEXT_CHANGED</code> or
             * <code>InputMethodEvent.CARET_POSITION_CHANGED</code>.
             * @param e the <code>InputMethodEvent</code>
             * @see InputMethodEvent
             */
            // @ts-ignore
            processInputMethodEvent(e: java.awt.event.InputMethodEvent): void
            /**
             * Processes any focus events, such as
             * <code>FocusEvent.FOCUS_GAINED</code> or
             * <code>FocusEvent.FOCUS_LOST</code>.
             * @param e the <code>FocusEvent</code>
             * @see FocusEvent
             */
            // @ts-ignore
            processFocusEvent(e: java.awt.event.FocusEvent): void
            /**
             * Fetches the command list for the editor.  This is
             * the list of commands supported by the plugged-in UI
             * augmented by the collection of commands that the
             * editor itself supports.  These are useful for binding
             * to events, such as in a keymap.
             * @return the command list
             */
            // @ts-ignore
            getActions(): javax.swing.Action[]
            /**
             * Gets the class ID for a UI.
             * @return the string "FormattedTextFieldUI"
             * @see JComponent#getUIClassID
             */
            // @ts-ignore
            getUIClassID(): java.lang.String
            /**
             * Associates the editor with a text document.
             * The currently registered factory is used to build a view for
             * the document, which gets displayed by the editor after revalidation.
             * A PropertyChange event ("document") is propagated to each listener.
             * @param doc  the document to display/edit
             * @see #getDocument
             * @beaninfo description: the text document model
             *         bound: true
             *        expert: true
             */
            // @ts-ignore
            setDocument(doc: javax.swing.text.Document): void
        }
    }
}
