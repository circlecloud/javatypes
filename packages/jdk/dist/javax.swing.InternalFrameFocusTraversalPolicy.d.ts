declare namespace javax {
    namespace swing {
        /**
         * A FocusTraversalPolicy which can optionally provide an algorithm for
         * determining a JInternalFrame's initial Component. The initial Component is
         * the first to receive focus when the JInternalFrame is first selected. By
         * default, this is the same as the JInternalFrame's default Component to
         * focus.
         * @author David Mendenhall
         * @since 1.4
         */
        // @ts-ignore
        class InternalFrameFocusTraversalPolicy extends java.awt.FocusTraversalPolicy {
            // @ts-ignore
            constructor()
            /**
             * Returns the Component that should receive the focus when a
             * JInternalFrame is selected for the first time. Once the JInternalFrame
             * has been selected by a call to <code>setSelected(true)</code>, the
             * initial Component will not be used again. Instead, if the JInternalFrame
             * loses and subsequently regains selection, or is made invisible or
             * undisplayable and subsequently made visible and displayable, the
             * JInternalFrame's most recently focused Component will become the focus
             * owner. The default implementation of this method returns the
             * JInternalFrame's default Component to focus.
             * @param frame the JInternalFrame whose initial Component is to be
             *         returned
             * @return the Component that should receive the focus when frame is
             *          selected for the first time, or null if no suitable Component
             *          can be found
             * @see JInternalFrame#getMostRecentFocusOwner
             * @throws IllegalArgumentException if window is null
             */
            // @ts-ignore
            getInitialComponent(frame: javax.swing.JInternalFrame): java.awt.Component
        }
    }
}
