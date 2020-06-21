declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * <code>DefaultFormatter</code> formats arbitrary objects. Formatting is done
             * by invoking the <code>toString</code> method. In order to convert the
             * value back to a String, your class must provide a constructor that
             * takes a String argument. If no single argument constructor that takes a
             * String is found, the returned value will be the String passed into
             * <code>stringToValue</code>.
             * <p>
             * Instances of <code>DefaultFormatter</code> can not be used in multiple
             * instances of <code>JFormattedTextField</code>. To obtain a copy of
             * an already configured <code>DefaultFormatter</code>, use the
             * <code>clone</code> method.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @see javax.swing.JFormattedTextField.AbstractFormatter
             * @since 1.4
             */
            // @ts-ignore
            class DefaultFormatter extends javax.swing.JFormattedTextField.AbstractFormatter implements java.lang.Cloneable, java.io.Serializable {
                /**
                 * Creates a DefaultFormatter.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Installs the <code>DefaultFormatter</code> onto a particular
                 * <code>JFormattedTextField</code>.
                 * This will invoke <code>valueToString</code> to convert the
                 * current value from the <code>JFormattedTextField</code> to
                 * a String. This will then install the <code>Action</code>s from
                 * <code>getActions</code>, the <code>DocumentFilter</code>
                 * returned from <code>getDocumentFilter</code> and the
                 * <code>NavigationFilter</code> returned from
                 * <code>getNavigationFilter</code> onto the
                 * <code>JFormattedTextField</code>.
                 * <p>
                 * Subclasses will typically only need to override this if they
                 * wish to install additional listeners on the
                 * <code>JFormattedTextField</code>.
                 * <p>
                 * If there is a <code>ParseException</code> in converting the
                 * current value to a String, this will set the text to an empty
                 * String, and mark the <code>JFormattedTextField</code> as being
                 * in an invalid state.
                 * <p>
                 * While this is a public method, this is typically only useful
                 * for subclassers of <code>JFormattedTextField</code>.
                 * <code>JFormattedTextField</code> will invoke this method at
                 * the appropriate times when the value changes, or its internal
                 * state changes.
                 * @param ftf JFormattedTextField to format for, may be null indicating
                 *             uninstall from current JFormattedTextField.
                 */
                // @ts-ignore
                public install(ftf: javax.swing.JFormattedTextField): void
                /**
                 * Sets when edits are published back to the
                 * <code>JFormattedTextField</code>. If true, <code>commitEdit</code>
                 * is invoked after every valid edit (any time the text is edited). On
                 * the other hand, if this is false than the <code>DefaultFormatter</code>
                 * does not publish edits back to the <code>JFormattedTextField</code>.
                 * As such, the only time the value of the <code>JFormattedTextField</code>
                 * will change is when <code>commitEdit</code> is invoked on
                 * <code>JFormattedTextField</code>, typically when enter is pressed
                 * or focus leaves the <code>JFormattedTextField</code>.
                 * @param commit Used to indicate when edits are committed back to the
                 *                JTextComponent
                 */
                // @ts-ignore
                public setCommitsOnValidEdit(commit: boolean): void
                /**
                 * Returns when edits are published back to the
                 * <code>JFormattedTextField</code>.
                 * @return true if edits are committed after every valid edit
                 */
                // @ts-ignore
                public getCommitsOnValidEdit(): boolean
                /**
                 * Configures the behavior when inserting characters. If
                 * <code>overwriteMode</code> is true (the default), new characters
                 * overwrite existing characters in the model.
                 * @param overwriteMode Indicates if overwrite or overstrike mode is used
                 */
                // @ts-ignore
                public setOverwriteMode(overwriteMode: boolean): void
                /**
                 * Returns the behavior when inserting characters.
                 * @return true if newly inserted characters overwrite existing characters
                 */
                // @ts-ignore
                public getOverwriteMode(): boolean
                /**
                 * Sets whether or not the value being edited is allowed to be invalid
                 * for a length of time (that is, <code>stringToValue</code> throws
                 * a <code>ParseException</code>).
                 * It is often convenient to allow the user to temporarily input an
                 * invalid value.
                 * @param allowsInvalid Used to indicate if the edited value must always
                 *         be valid
                 */
                // @ts-ignore
                public setAllowsInvalid(allowsInvalid: boolean): void
                /**
                 * Returns whether or not the value being edited is allowed to be invalid
                 * for a length of time.
                 * @return false if the edited value must always be valid
                 */
                // @ts-ignore
                public getAllowsInvalid(): boolean
                /**
                 * Sets that class that is used to create new Objects. If the
                 * passed in class does not have a single argument constructor that
                 * takes a String, String values will be used.
                 * @param valueClass Class used to construct return value from
                 *         stringToValue
                 */
                // @ts-ignore
                public setValueClass(valueClass: java.lang.Class<any>): void
                /**
                 * Returns that class that is used to create new Objects.
                 * @return Class used to construct return value from stringToValue
                 */
                // @ts-ignore
                public getValueClass(): java.lang.Class<any>
                /**
                 * Converts the passed in String into an instance of
                 * <code>getValueClass</code> by way of the constructor that
                 * takes a String argument. If <code>getValueClass</code>
                 * returns null, the Class of the current value in the
                 * <code>JFormattedTextField</code> will be used. If this is null, a
                 * String will be returned. If the constructor throws an exception, a
                 * <code>ParseException</code> will be thrown. If there is no single
                 * argument String constructor, <code>string</code> will be returned.
                 * @throws ParseException if there is an error in the conversion
                 * @param string String to convert
                 * @return Object representation of text
                 */
                // @ts-ignore
                public stringToValue(string: java.lang.String | string): any
                /**
                 * Converts the passed in Object into a String by way of the
                 * <code>toString</code> method.
                 * @throws ParseException if there is an error in the conversion
                 * @param value Value to convert
                 * @return String representation of value
                 */
                // @ts-ignore
                public valueToString(value: java.lang.Object | any): string
                /**
                 * Returns the <code>DocumentFilter</code> used to restrict the characters
                 * that can be input into the <code>JFormattedTextField</code>.
                 * @return DocumentFilter to restrict edits
                 */
                // @ts-ignore
                getDocumentFilter(): javax.swing.text.DocumentFilter
                /**
                 * Returns the <code>NavigationFilter</code> used to restrict where the
                 * cursor can be placed.
                 * @return NavigationFilter to restrict navigation
                 */
                // @ts-ignore
                getNavigationFilter(): javax.swing.text.NavigationFilter
                /**
                 * Creates a copy of the DefaultFormatter.
                 * @return copy of the DefaultFormatter
                 */
                // @ts-ignore
                public clone(): any
            }
        }
    }
}
