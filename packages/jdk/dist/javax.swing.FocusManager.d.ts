declare namespace javax {
    namespace swing {
        /**
         * This class has been obsoleted by the 1.4 focus APIs. While client code may
         * still use this class, developers are strongly encouraged to use
         * <code>java.awt.KeyboardFocusManager</code> and
         * <code>java.awt.DefaultKeyboardFocusManager</code> instead.
         * <p>
         * Please see
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html">
         * How to Use the Focus Subsystem</a>,
         * a section in <em>The Java Tutorial</em>, and the
         * <a href="../../java/awt/doc-files/FocusSpec.html">Focus Specification</a>
         * for more information.
         * @see <a href="../../java/awt/doc-files/FocusSpec.html">Focus Specification</a>
         * @author Arnaud Weber
         * @author David Mendenhall
         */
        // @ts-ignore
        abstract class FocusManager extends java.awt.DefaultKeyboardFocusManager {
            // @ts-ignore
            constructor()
            /**
             * This field is obsolete, and its use is discouraged since its
             * specification is incompatible with the 1.4 focus APIs.
             * The current FocusManager is no longer a property of the UI.
             * Client code must query for the current FocusManager using
             * <code>KeyboardFocusManager.getCurrentKeyboardFocusManager()</code>.
             * See the Focus Specification for more information.
             * @see java.awt.KeyboardFocusManager#getCurrentKeyboardFocusManager
             * @see <a href="../../java/awt/doc-files/FocusSpec.html">Focus Specification</a>
             */
            // @ts-ignore
            public static readonly FOCUS_MANAGER_CLASS_PROPERTY: java.lang.String | string
            /**
             * Returns the current <code>KeyboardFocusManager</code> instance
             * for the calling thread's context.
             * @return this thread's context's <code>KeyboardFocusManager</code>
             * @see #setCurrentManager
             */
            // @ts-ignore
            public static getCurrentManager(): javax.swing.FocusManager
            /**
             * Sets the current <code>KeyboardFocusManager</code> instance
             * for the calling thread's context. If <code>null</code> is
             * specified, then the current <code>KeyboardFocusManager</code>
             * is replaced with a new instance of
             * <code>DefaultKeyboardFocusManager</code>.
             * <p>
             * If a <code>SecurityManager</code> is installed,
             * the calling thread must be granted the <code>AWTPermission</code>
             * "replaceKeyboardFocusManager" in order to replace the
             * the current <code>KeyboardFocusManager</code>.
             * If this permission is not granted,
             * this method will throw a <code>SecurityException</code>,
             * and the current <code>KeyboardFocusManager</code> will be unchanged.
             * @param aFocusManager the new <code>KeyboardFocusManager</code>
             *      for this thread's context
             * @see #getCurrentManager
             * @see java.awt.DefaultKeyboardFocusManager
             * @throws SecurityException if the calling thread does not have permission
             *          to replace the current <code>KeyboardFocusManager</code>
             */
            // @ts-ignore
            public static setCurrentManager(aFocusManager: javax.swing.FocusManager): void
            /**
             * Changes the current <code>KeyboardFocusManager</code>'s default
             * <code>FocusTraversalPolicy</code> to
             * <code>DefaultFocusTraversalPolicy</code>.
             * @see java.awt.DefaultFocusTraversalPolicy
             * @see java.awt.KeyboardFocusManager#setDefaultFocusTraversalPolicy
             * @deprecated as of 1.4, replaced by
             *  <code>KeyboardFocusManager.setDefaultFocusTraversalPolicy(FocusTraversalPolicy)</code>
             */
            // @ts-ignore
            public static disableSwingFocusManager(): void
            /**
             * Returns whether the application has invoked
             * <code>disableSwingFocusManager()</code>.
             * @see #disableSwingFocusManager
             * @deprecated As of 1.4, replaced by
             *    <code>KeyboardFocusManager.getDefaultFocusTraversalPolicy()</code>
             */
            // @ts-ignore
            public static isFocusManagerEnabled(): boolean
        }
    }
}
