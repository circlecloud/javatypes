declare namespace javax {
    namespace swing {
        namespace JFormattedTextField {
            /**
             * Instances of <code>AbstractFormatter</code> are used by
             * <code>JFormattedTextField</code> to handle the conversion both
             * from an Object to a String, and back from a String to an Object.
             * <code>AbstractFormatter</code>s can also enforce editing policies,
             * or navigation policies, or manipulate the
             * <code>JFormattedTextField</code> in any way it sees fit to
             * enforce the desired policy.
             * <p>
             * An <code>AbstractFormatter</code> can only be active in
             * one <code>JFormattedTextField</code> at a time.
             * <code>JFormattedTextField</code> invokes
             * <code>install</code> when it is ready to use it followed
             * by <code>uninstall</code> when done. Subclasses
             * that wish to install additional state should override
             * <code>install</code> and message super appropriately.
             * <p>
             * Subclasses must override the conversion methods
             * <code>stringToValue</code> and <code>valueToString</code>. Optionally
             * they can override <code>getActions</code>,
             * <code>getNavigationFilter</code> and <code>getDocumentFilter</code>
             * to restrict the <code>JFormattedTextField</code> in a particular
             * way.
             * <p>
             * Subclasses that allow the <code>JFormattedTextField</code> to be in
             * a temporarily invalid state should invoke <code>setEditValid</code>
             * at the appropriate times.
             * @since 1.4
             */
            // @ts-ignore
            class AbstractFormatter extends java.lang.Object implements java.io.Serializable {
                // @ts-ignore
                constructor()
                /**
                 * Installs the <code>AbstractFormatter</code> onto a particular
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
                 * state changes.  You will only need to invoke this yourself if
                 * you are subclassing <code>JFormattedTextField</code> and
                 * installing/uninstalling <code>AbstractFormatter</code> at a
                 * different time than <code>JFormattedTextField</code> does.
                 * @param ftf JFormattedTextField to format for, may be null indicating
                 *             uninstall from current JFormattedTextField.
                 */
                // @ts-ignore
                install(ftf: javax.swing.JFormattedTextField): void
                /**
                 * Uninstalls any state the <code>AbstractFormatter</code> may have
                 * installed on the <code>JFormattedTextField</code>. This resets the
                 * <code>DocumentFilter</code>, <code>NavigationFilter</code>
                 * and additional <code>Action</code>s installed on the
                 * <code>JFormattedTextField</code>.
                 */
                // @ts-ignore
                uninstall(): void
                /**
                 * Parses <code>text</code> returning an arbitrary Object. Some
                 * formatters may return null.
                 * @throws ParseException if there is an error in the conversion
                 * @param text String to convert
                 * @return Object representation of text
                 */
                // @ts-ignore
                abstract stringToValue(text: string): java.lang.Object
                /**
                 * Returns the string value to display for <code>value</code>.
                 * @throws ParseException if there is an error in the conversion
                 * @param value Value to convert
                 * @return String representation of value
                 */
                // @ts-ignore
                abstract valueToString(value: any): java.lang.String
                /**
                 * Returns the current <code>JFormattedTextField</code> the
                 * <code>AbstractFormatter</code> is installed on.
                 * @return JFormattedTextField formatting for.
                 */
                // @ts-ignore
                getFormattedTextField(): javax.swing.JFormattedTextField
                /**
                 * This should be invoked when the user types an invalid character.
                 * This forwards the call to the current JFormattedTextField.
                 */
                // @ts-ignore
                invalidEdit(): void
                /**
                 * Invoke this to update the <code>editValid</code> property of the
                 * <code>JFormattedTextField</code>. If you an enforce a policy
                 * such that the <code>JFormattedTextField</code> is always in a
                 * valid state, you will never need to invoke this.
                 * @param valid Valid state of the JFormattedTextField
                 */
                // @ts-ignore
                setEditValid(valid: boolean): void
                /**
                 * Subclass and override if you wish to provide a custom set of
                 * <code>Action</code>s. <code>install</code> will install these
                 * on the <code>JFormattedTextField</code>'s <code>ActionMap</code>.
                 * @return Array of Actions to install on JFormattedTextField
                 */
                // @ts-ignore
                getActions(): javax.swing.Action[]
                /**
                 * Subclass and override if you wish to provide a
                 * <code>DocumentFilter</code> to restrict what can be input.
                 * <code>install</code> will install the returned value onto
                 * the <code>JFormattedTextField</code>.
                 * @return DocumentFilter to restrict edits
                 */
                // @ts-ignore
                getDocumentFilter(): javax.swing.text.DocumentFilter
                /**
                 * Subclass and override if you wish to provide a filter to restrict
                 * where the user can navigate to.
                 * <code>install</code> will install the returned value onto
                 * the <code>JFormattedTextField</code>.
                 * @return NavigationFilter to restrict navigation
                 */
                // @ts-ignore
                getNavigationFilter(): javax.swing.text.NavigationFilter
                /**
                 * Clones the <code>AbstractFormatter</code>. The returned instance
                 * is not associated with a <code>JFormattedTextField</code>.
                 * @return Copy of the AbstractFormatter
                 */
                // @ts-ignore
                clone(): java.lang.Object
            }
        }
    }
}
