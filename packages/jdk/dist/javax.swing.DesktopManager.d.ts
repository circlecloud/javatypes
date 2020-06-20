declare namespace javax {
    namespace swing {
        /**
         * DesktopManager objects are owned by a JDesktopPane object. They are responsible
         * for implementing L&amp;F specific behaviors for the JDesktopPane. JInternalFrame
         * implementations should delegate specific behaviors to the DesktopManager. For
         * instance, if a JInternalFrame was asked to iconify, it should try:
         * <PRE>
         * getDesktopPane().getDesktopManager().iconifyFrame(frame);
         * </PRE>
         * This delegation allows each L&amp;F to provide custom behaviors for desktop-specific
         * actions. (For example, how and where the internal frame's icon would appear.)
         * <p>This class provides a policy for the various JInternalFrame methods, it is not
         * meant to be called directly rather the various JInternalFrame methods will call
         * into the DesktopManager.</p>
         * @see JDesktopPane
         * @see JInternalFrame
         * @see JInternalFrame.JDesktopIcon
         * @author David Kloba
         */
        // @ts-ignore
        interface DesktopManager {
            /**
             * If possible, display this frame in an appropriate location.
             * Normally, this is not called, as the creator of the JInternalFrame
             * will add the frame to the appropriate parent.
             */
            // @ts-ignore
            openFrame(f: javax.swing.JInternalFrame): void
            /**
             * Generally, this call should remove the frame from it's parent.
             */
            // @ts-ignore
            closeFrame(f: javax.swing.JInternalFrame): void
            /**
             * Generally, the frame should be resized to match it's parents bounds.
             */
            // @ts-ignore
            maximizeFrame(f: javax.swing.JInternalFrame): void
            /**
             * Generally, this indicates that the frame should be restored to it's
             * size and position prior to a maximizeFrame() call.
             */
            // @ts-ignore
            minimizeFrame(f: javax.swing.JInternalFrame): void
            /**
             * Generally, remove this frame from it's parent and add an iconic representation.
             */
            // @ts-ignore
            iconifyFrame(f: javax.swing.JInternalFrame): void
            /**
             * Generally, remove any iconic representation that is present and restore the
             * frame to it's original size and location.
             */
            // @ts-ignore
            deiconifyFrame(f: javax.swing.JInternalFrame): void
            /**
             * Generally, indicate that this frame has focus. This is usually called after
             * the JInternalFrame's IS_SELECTED_PROPERTY has been set to true.
             */
            // @ts-ignore
            activateFrame(f: javax.swing.JInternalFrame): void
            /**
             * Generally, indicate that this frame has lost focus. This is usually called
             * after the JInternalFrame's IS_SELECTED_PROPERTY has been set to false.
             */
            // @ts-ignore
            deactivateFrame(f: javax.swing.JInternalFrame): void
            /**
             * This method is normally called when the user has indicated that
             * they will begin dragging a component around. This method should be called
             * prior to any dragFrame() calls to allow the DesktopManager to prepare any
             * necessary state. Normally <b>f</b> will be a JInternalFrame.
             */
            // @ts-ignore
            beginDraggingFrame(f: javax.swing.JComponent): void
            /**
             * The user has moved the frame. Calls to this method will be preceded by calls
             * to beginDraggingFrame().
             * Normally <b>f</b> will be a JInternalFrame.
             */
            // @ts-ignore
            dragFrame(f: javax.swing.JComponent, newX: number /*int*/, newY: number /*int*/): void
            /**
             * This method signals the end of the dragging session. Any state maintained by
             * the DesktopManager can be removed here.  Normally <b>f</b> will be a JInternalFrame.
             */
            // @ts-ignore
            endDraggingFrame(f: javax.swing.JComponent): void
            /**
             * This methods is normally called when the user has indicated that
             * they will begin resizing the frame. This method should be called
             * prior to any resizeFrame() calls to allow the DesktopManager to prepare any
             * necessary state.  Normally <b>f</b> will be a JInternalFrame.
             */
            // @ts-ignore
            beginResizingFrame(f: javax.swing.JComponent, direction: number /*int*/): void
            /**
             * The user has resized the component. Calls to this method will be preceded by calls
             * to beginResizingFrame().
             * Normally <b>f</b> will be a JInternalFrame.
             */
            // @ts-ignore
            resizeFrame(f: javax.swing.JComponent, newX: number /*int*/, newY: number /*int*/, newWidth: number /*int*/, newHeight: number /*int*/): void
            /**
             * This method signals the end of the resize session. Any state maintained by
             * the DesktopManager can be removed here.  Normally <b>f</b> will be a JInternalFrame.
             */
            // @ts-ignore
            endResizingFrame(f: javax.swing.JComponent): void
            /**
             * This is a primitive reshape method.
             */
            // @ts-ignore
            setBoundsForFrame(f: javax.swing.JComponent, newX: number /*int*/, newY: number /*int*/, newWidth: number /*int*/, newHeight: number /*int*/): void
        }
    }
}
