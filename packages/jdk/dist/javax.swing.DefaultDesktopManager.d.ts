declare namespace javax {
    namespace swing {
        /**
         * This is an implementation of the <code>DesktopManager</code>.
         * It currently implements the basic behaviors for managing
         * <code>JInternalFrame</code>s in an arbitrary parent.
         * <code>JInternalFrame</code>s that are not children of a
         * <code>JDesktop</code> will use this component
         * to handle their desktop-like actions.
         * <p>This class provides a policy for the various JInternalFrame methods,
         * it is not meant to be called directly rather the various JInternalFrame
         * methods will call into the DesktopManager.</p>
         * @see JDesktopPane
         * @see JInternalFrame
         * @author David Kloba
         * @author Steve Wilson
         */
        // @ts-ignore
        class DefaultDesktopManager extends java.lang.Object implements javax.swing.DesktopManager, java.io.Serializable {
            // @ts-ignore
            constructor()
            /**
             * Normally this method will not be called. If it is, it
             * try to determine the appropriate parent from the desktopIcon of the frame.
             * Will remove the desktopIcon from its parent if it successfully adds the frame.
             */
            // @ts-ignore
            public openFrame(f: javax.swing.JInternalFrame): void
            /**
             * Removes the frame, and, if necessary, the
             * <code>desktopIcon</code>, from its parent.
             * @param f the <code>JInternalFrame</code> to be removed
             */
            // @ts-ignore
            public closeFrame(f: javax.swing.JInternalFrame): void
            /**
             * Resizes the frame to fill its parents bounds.
             * @param f the frame to be resized
             */
            // @ts-ignore
            public maximizeFrame(f: javax.swing.JInternalFrame): void
            /**
             * Restores the frame back to its size and position prior
             * to a <code>maximizeFrame</code> call.
             * @param f the <code>JInternalFrame</code> to be restored
             */
            // @ts-ignore
            public minimizeFrame(f: javax.swing.JInternalFrame): void
            /**
             * Removes the frame from its parent and adds its
             * <code>desktopIcon</code> to the parent.
             * @param f the <code>JInternalFrame</code> to be iconified
             */
            // @ts-ignore
            public iconifyFrame(f: javax.swing.JInternalFrame): void
            /**
             * Removes the desktopIcon from its parent and adds its frame
             * to the parent.
             * @param f the <code>JInternalFrame</code> to be de-iconified
             */
            // @ts-ignore
            public deiconifyFrame(f: javax.swing.JInternalFrame): void
            /**
             * This will activate <b>f</b> moving it to the front. It will
             * set the current active frame's (if any)
             * <code>IS_SELECTED_PROPERTY</code> to <code>false</code>.
             * There can be only one active frame across all Layers.
             * @param f the <code>JInternalFrame</code> to be activated
             */
            // @ts-ignore
            public activateFrame(f: javax.swing.JInternalFrame): void
            // @ts-ignore
            public deactivateFrame(f: javax.swing.JInternalFrame): void
            // @ts-ignore
            public beginDraggingFrame(f: javax.swing.JComponent): void
            /**
             * Moves the visible location of the frame being dragged
             * to the location specified.  The means by which this occurs can vary depending
             * on the dragging algorithm being used.  The actual logical location of the frame
             * might not change until <code>endDraggingFrame</code> is called.
             */
            // @ts-ignore
            public dragFrame(f: javax.swing.JComponent, newX: number /*int*/, newY: number /*int*/): void
            // @ts-ignore
            public endDraggingFrame(f: javax.swing.JComponent): void
            // @ts-ignore
            public beginResizingFrame(f: javax.swing.JComponent, direction: number /*int*/): void
            /**
             * Calls <code>setBoundsForFrame</code> with the new values.
             * @param f the component to be resized
             * @param newX the new x-coordinate
             * @param newY the new y-coordinate
             * @param newWidth the new width
             * @param newHeight the new height
             */
            // @ts-ignore
            public resizeFrame(f: javax.swing.JComponent, newX: number /*int*/, newY: number /*int*/, newWidth: number /*int*/, newHeight: number /*int*/): void
            // @ts-ignore
            public endResizingFrame(f: javax.swing.JComponent): void
            /**
             * This moves the <code>JComponent</code> and repaints the damaged areas.
             */
            // @ts-ignore
            public setBoundsForFrame(f: javax.swing.JComponent, newX: number /*int*/, newY: number /*int*/, newWidth: number /*int*/, newHeight: number /*int*/): void
            /**
             * Convenience method to remove the desktopIcon of <b>f</b> is necessary.
             */
            // @ts-ignore
            removeIconFor(f: javax.swing.JInternalFrame): void
            /**
             * The iconifyFrame() code calls this to determine the proper bounds
             * for the desktopIcon.
             */
            // @ts-ignore
            getBoundsForIconOf(f: javax.swing.JInternalFrame): java.awt.Rectangle
            /**
             * Stores the bounds of the component just before a maximize call.
             * @param f the component about to be resized
             * @param r the normal bounds to be saved away
             */
            // @ts-ignore
            setPreviousBounds(f: javax.swing.JInternalFrame, r: java.awt.Rectangle): void
            /**
             * Gets the normal bounds of the component prior to the component
             * being maximized.
             * @param f the <code>JInternalFrame</code> of interest
             * @return the normal bounds of the component
             */
            // @ts-ignore
            getPreviousBounds(f: javax.swing.JInternalFrame): java.awt.Rectangle
            /**
             * Sets that the component has been iconized and the bounds of the
             * <code>desktopIcon</code> are valid.
             */
            // @ts-ignore
            setWasIcon(f: javax.swing.JInternalFrame, value: java.lang.Boolean): void
            /**
             * Returns <code>true</code> if the component has been iconized
             * and the bounds of the <code>desktopIcon</code> are valid,
             * otherwise returns <code>false</code>.
             * @param f the <code>JInternalFrame</code> of interest
             * @return <code>true</code> if the component has been iconized;
             *     otherwise returns <code>false</code>
             */
            // @ts-ignore
            wasIcon(f: javax.swing.JInternalFrame): boolean
        }
    }
}
