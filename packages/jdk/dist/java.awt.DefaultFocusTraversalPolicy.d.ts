declare namespace java {
    namespace awt {
        /**
         * A FocusTraversalPolicy that determines traversal order based on the order
         * of child Components in a Container. From a particular focus cycle root, the
         * policy makes a pre-order traversal of the Component hierarchy, and traverses
         * a Container's children according to the ordering of the array returned by
         * <code>Container.getComponents()</code>. Portions of the hierarchy that are
         * not visible and displayable will not be searched.
         * <p>
         * If client code has explicitly set the focusability of a Component by either
         * overriding <code>Component.isFocusTraversable()</code> or
         * <code>Component.isFocusable()</code>, or by calling
         * <code>Component.setFocusable()</code>, then a DefaultFocusTraversalPolicy
         * behaves exactly like a ContainerOrderFocusTraversalPolicy. If, however, the
         * Component is relying on default focusability, then a
         * DefaultFocusTraversalPolicy will reject all Components with non-focusable
         * peers. This is the default FocusTraversalPolicy for all AWT Containers.
         * <p>
         * The focusability of a peer is implementation-dependent. Sun recommends that
         * all implementations for a particular native platform construct peers with
         * the same focusability. The recommendations for Windows and Unix are that
         * Canvases, Labels, Panels, Scrollbars, ScrollPanes, Windows, and lightweight
         * Components have non-focusable peers, and all other Components have focusable
         * peers. These recommendations are used in the Sun AWT implementations. Note
         * that the focusability of a Component's peer is different from, and does not
         * impact, the focusability of the Component itself.
         * <p>
         * Please see
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html">
         * How to Use the Focus Subsystem</a>,
         * a section in <em>The Java Tutorial</em>, and the
         * <a href="../../java/awt/doc-files/FocusSpec.html">Focus Specification</a>
         * for more information.
         * @author David Mendenhall
         * @see Container#getComponents
         * @see Component#isFocusable
         * @see Component#setFocusable
         * @since 1.4
         */
        // @ts-ignore
        class DefaultFocusTraversalPolicy extends java.awt.ContainerOrderFocusTraversalPolicy {
            // @ts-ignore
            constructor()
            /**
             * Determines whether a Component is an acceptable choice as the new
             * focus owner. The Component must be visible, displayable, and enabled
             * to be accepted. If client code has explicitly set the focusability
             * of the Component by either overriding
             * <code>Component.isFocusTraversable()</code> or
             * <code>Component.isFocusable()</code>, or by calling
             * <code>Component.setFocusable()</code>, then the Component will be
             * accepted if and only if it is focusable. If, however, the Component is
             * relying on default focusability, then all Canvases, Labels, Panels,
             * Scrollbars, ScrollPanes, Windows, and lightweight Components will be
             * rejected.
             * @param aComponent the Component whose fitness as a focus owner is to
             *         be tested
             * @return <code>true</code> if aComponent meets the above requirements;
             *          <code>false</code> otherwise
             */
            // @ts-ignore
            accept(aComponent: java.awt.Component): boolean
        }
    }
}
