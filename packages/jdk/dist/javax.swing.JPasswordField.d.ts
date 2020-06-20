declare namespace javax {
    namespace swing {
        /**
         * <code>JPasswordField</code> is a lightweight component that allows
         * the editing of a single line of text where the view indicates
         * something was typed, but does not show the original characters.
         * You can find further information and examples in
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/textfield.html">How to Use Text Fields</a>,
         * a section in <em>The Java Tutorial.</em>
         * <p>
         * <code>JPasswordField</code> is intended
         * to be source-compatible with <code>java.awt.TextField</code>
         * used with <code>echoChar</code> set.  It is provided separately
         * to make it easier to safely change the UI for the
         * <code>JTextField</code> without affecting password entries.
         * <p>
         * <strong>NOTE:</strong>
         * By default, JPasswordField disables input methods; otherwise, input
         * characters could be visible while they were composed using input methods.
         * If an application needs the input methods support, please use the
         * inherited method, <code>enableInputMethods(true)</code>.
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
         *  description: Allows the editing of a line of text but doesn't show the characters.
         * @author Timothy Prinzing
         */
        // @ts-ignore
        class JPasswordField extends javax.swing.JTextField {
            /**
             * Constructs a new <code>JPasswordField</code>,
             * with a default document, <code>null</code> starting
             * text string, and 0 column width.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new <code>JPasswordField</code> initialized
             * with the specified text.  The document model is set to the
             * default, and the number of columns to 0.
             * @param text the text to be displayed, <code>null</code> if none
             */
            // @ts-ignore
            constructor(text: string)
            /**
             * Constructs a new empty <code>JPasswordField</code> with the specified
             * number of columns.  A default model is created, and the initial string
             * is set to <code>null</code>.
             * @param columns the number of columns &gt;= 0
             */
            // @ts-ignore
            constructor(columns: number /*int*/)
            /**
             * Constructs a new <code>JPasswordField</code> initialized with
             * the specified text and columns.  The document model is set to
             * the default.
             * @param text the text to be displayed, <code>null</code> if none
             * @param columns the number of columns &gt;= 0
             */
            // @ts-ignore
            constructor(text: string, columns: number /*int*/)
            /**
             * Constructs a new <code>JPasswordField</code> that uses the
             * given text storage model and the given number of columns.
             * This is the constructor through which the other constructors feed.
             * The echo character is set to '*', but may be changed by the current
             * Look and Feel.  If the document model is
             * <code>null</code>, a default one will be created.
             * @param doc  the text storage to use
             * @param txt the text to be displayed, <code>null</code> if none
             * @param columns  the number of columns to use to calculate
             *    the preferred width &gt;= 0; if columns is set to zero, the
             *    preferred width will be whatever naturally results from
             *    the component implementation
             */
            // @ts-ignore
            constructor(doc: javax.swing.text.Document, txt: string, columns: number /*int*/)
            /**
             * Returns the name of the L&amp;F class that renders this component.
             * @return the string "PasswordFieldUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            getUIClassID(): java.lang.String
            /**
             * {@inheritDoc}
             * @since 1.6
             */
            // @ts-ignore
            updateUI(): void
            /**
             * Returns the character to be used for echoing.  The default is '*'.
             * The default may be different depending on the currently running Look
             * and Feel. For example, Metal/Ocean's default is a bullet character.
             * @return the echo character, 0 if unset
             * @see #setEchoChar
             * @see #echoCharIsSet
             */
            // @ts-ignore
            getEchoChar(): char
            /**
             * Sets the echo character for this <code>JPasswordField</code>.
             * Note that this is largely a suggestion, since the
             * view that gets installed can use whatever graphic techniques
             * it desires to represent the field.  Setting a value of 0 indicates
             * that you wish to see the text as it is typed, similar to
             * the behavior of a standard <code>JTextField</code>.
             * @param c the echo character to display
             * @see #echoCharIsSet
             * @see #getEchoChar
             * @beaninfo description: character to display in place of the real characters
             *    attribute: visualUpdate true
             */
            // @ts-ignore
            setEchoChar(c: string): void
            /**
             * Returns true if this <code>JPasswordField</code> has a character
             * set for echoing.  A character is considered to be set if the echo
             * character is not 0.
             * @return true if a character is set for echoing
             * @see #setEchoChar
             * @see #getEchoChar
             */
            // @ts-ignore
            echoCharIsSet(): boolean
            /**
             * Invokes <code>provideErrorFeedback</code> on the current
             * look and feel, which typically initiates an error beep.
             * The normal behavior of transferring the
             * currently selected range in the associated text model
             * to the system clipboard, and removing the contents from
             * the model, is not acceptable for a password field.
             */
            // @ts-ignore
            cut(): void
            /**
             * Invokes <code>provideErrorFeedback</code> on the current
             * look and feel, which typically initiates an error beep.
             * The normal behavior of transferring the
             * currently selected range in the associated text model
             * to the system clipboard, and leaving the contents from
             * the model, is not acceptable for a password field.
             */
            // @ts-ignore
            copy(): void
            /**
             * Returns the text contained in this <code>TextComponent</code>.
             * If the underlying document is <code>null</code>, will give a
             * <code>NullPointerException</code>.
             * <p>
             * For security reasons, this method is deprecated.  Use the
             * <code>* getPassword</code> method instead.
             * @deprecated As of Java 2 platform v1.2,
             *  replaced by <code>getPassword</code>.
             * @return the text
             */
            // @ts-ignore
            getText(): java.lang.String
            /**
             * Fetches a portion of the text represented by the
             * component.  Returns an empty string if length is 0.
             * <p>
             * For security reasons, this method is deprecated.  Use the
             * <code>getPassword</code> method instead.
             * @deprecated As of Java 2 platform v1.2,
             *  replaced by <code>getPassword</code>.
             * @param offs the offset &gt;= 0
             * @param len the length &gt;= 0
             * @return the text
             * @exception BadLocationException if the offset or length are invalid
             */
            // @ts-ignore
            getText(offs: number /*int*/, len: number /*int*/): java.lang.String
            /**
             * Returns the text contained in this <code>TextComponent</code>.
             * If the underlying document is <code>null</code>, will give a
             * <code>NullPointerException</code>.  For stronger
             * security, it is recommended that the returned character array be
             * cleared after use by setting each character to zero.
             * @return the text
             */
            // @ts-ignore
            getPassword(): char[]
            /**
             * Returns a string representation of this <code>JPasswordField</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JPasswordField</code>
             */
            // @ts-ignore
            paramString(): java.lang.String
            /**
             * Returns the <code>AccessibleContext</code> associated with this
             * <code>JPasswordField</code>. For password fields, the
             * <code>AccessibleContext</code> takes the form of an
             * <code>AccessibleJPasswordField</code>.
             * A new <code>AccessibleJPasswordField</code> instance is created
             * if necessary.
             * @return an <code>AccessibleJPasswordField</code> that serves as the
             *          <code>AccessibleContext</code> of this
             *          <code>JPasswordField</code>
             */
            // @ts-ignore
            getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
