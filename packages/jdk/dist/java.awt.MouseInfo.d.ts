declare namespace java {
    namespace awt {
        /**
         * <code>MouseInfo</code>  provides methods for getting information about the mouse,
         * such as mouse pointer location and the number of mouse buttons.
         * @author Roman Poborchiy
         * @since 1.5
         */
        // @ts-ignore
        class MouseInfo extends java.lang.Object {
            /**
             * Returns a <code>PointerInfo</code> instance that represents the current
             * location of the mouse pointer.
             * The <code>GraphicsDevice</code> stored in this <code>PointerInfo</code>
             * contains the mouse pointer. The coordinate system used for the mouse position
             * depends on whether or not the <code>GraphicsDevice</code> is part of a virtual
             * screen device.
             * For virtual screen devices, the coordinates are given in the virtual
             * coordinate system, otherwise they are returned in the coordinate system
             * of the <code>GraphicsDevice</code>. See {@link GraphicsConfiguration}
             * for more information about the virtual screen devices.
             * On systems without a mouse, returns <code>null</code>.
             * <p>
             * If there is a security manager, its <code>checkPermission</code> method
             * is called with an <code>AWTPermission("watchMousePointer")</code>
             * permission before creating and returning a <code>PointerInfo</code>
             * object. This may result in a <code>SecurityException</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless() returns true
             * @exception SecurityException if a security manager exists and its
             *             <code>checkPermission</code> method doesn't allow the operation
             * @see GraphicsConfiguration
             * @see SecurityManager#checkPermission
             * @see java.awt.AWTPermission
             * @return location of the mouse pointer
             * @since 1.5
             */
            // @ts-ignore
            getPointerInfo(): java.awt.PointerInfo
            /**
             * Returns the number of buttons on the mouse.
             * On systems without a mouse, returns <code>-1</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless() returns true
             * @return number of buttons on the mouse
             * @since 1.5
             */
            // @ts-ignore
            getNumberOfButtons(): int
        }
    }
}
