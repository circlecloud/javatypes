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
         * @author Arnaud Weber
         * @author David Mendenhall
         */
        // @ts-ignore
        class DefaultFocusManager extends javax.swing.FocusManager {
            // @ts-ignore
            constructor()
            // @ts-ignore
            public getComponentAfter(aContainer: java.awt.Container, aComponent: java.awt.Component): java.awt.Component
            // @ts-ignore
            public getComponentBefore(aContainer: java.awt.Container, aComponent: java.awt.Component): java.awt.Component
            // @ts-ignore
            public getFirstComponent(aContainer: java.awt.Container): java.awt.Component
            // @ts-ignore
            public getLastComponent(aContainer: java.awt.Container): java.awt.Component
            // @ts-ignore
            public compareTabOrder(a: java.awt.Component, b: java.awt.Component): boolean
        }
    }
}
