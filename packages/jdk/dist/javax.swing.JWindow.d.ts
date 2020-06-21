declare namespace javax {
    namespace swing {
        /**
         * A <code>JWindow</code> is a container that can be displayed anywhere on the
         * user's desktop. It does not have the title bar, window-management buttons,
         * or other trimmings associated with a <code>JFrame</code>, but it is still a
         * "first-class citizen" of the user's desktop, and can exist anywhere
         * on it.
         * <p>
         * The <code>JWindow</code> component contains a <code>JRootPane</code>
         * as its only child.  The <code>contentPane</code> should be the parent
         * of any children of the <code>JWindow</code>.
         * As a convenience, the {@code add}, {@code remove}, and {@code setLayout}
         * methods of this class are overridden, so that they delegate calls
         * to the corresponding methods of the {@code ContentPane}.
         * For example, you can add a child component to a window as follows:
         * <pre>
         * window.add(child);
         * </pre>
         * And the child will be added to the contentPane.
         * The <code>contentPane</code> will always be non-<code>null</code>.
         * Attempting to set it to <code>null</code> will cause the <code>JWindow</code>
         * to throw an exception. The default <code>contentPane</code> will have a
         * <code>BorderLayout</code> manager set on it.
         * Refer to {@link javax.swing.RootPaneContainer}
         * for details on adding, removing and setting the <code>LayoutManager</code>
         * of a <code>JWindow</code>.
         * <p>
         * Please see the {@link JRootPane} documentation for a complete description of
         * the <code>contentPane</code>, <code>glassPane</code>, and
         * <code>layeredPane</code> components.
         * <p>
         * In a multi-screen environment, you can create a <code>JWindow</code>
         * on a different screen device.  See {@link java.awt.Window} for more
         * information.
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
         * @see JRootPane
         * @beaninfo attribute: isContainer true
         *       attribute: containerDelegate getContentPane
         *     description: A toplevel window which has no system border or controls.
         * @author David Kloba
         */
        // @ts-ignore
        class JWindow extends java.awt.Window implements javax.accessibility.Accessible, javax.swing.RootPaneContainer, javax.swing.TransferHandler.HasGetTransferHandler {
            /**
             * Creates a window with no specified owner. This window will not be
             * focusable.
             * <p>
             * This constructor sets the component's locale property to the value
             * returned by <code>JComponent.getDefaultLocale</code>.
             * @throws HeadlessException if
             *          <code>GraphicsEnvironment.isHeadless()</code> returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see #isFocusableWindow
             * @see JComponent#getDefaultLocale
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a window with the specified <code>GraphicsConfiguration</code>
             * of a screen device. This window will not be focusable.
             * <p>
             * This constructor sets the component's locale property to the value
             * returned by <code>JComponent.getDefaultLocale</code>.
             * @param gc the <code>GraphicsConfiguration</code> that is used
             *           to construct the new window with; if gc is <code>null</code>,
             *           the system default <code>GraphicsConfiguration</code>
             *           is assumed
             * @throws HeadlessException If
             *          <code>GraphicsEnvironment.isHeadless()</code> returns true.
             * @throws IllegalArgumentException if <code>gc</code> is not from
             *          a screen device.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see #isFocusableWindow
             * @see JComponent#getDefaultLocale
             * @since 1.3
             */
            // @ts-ignore
            constructor(gc: java.awt.GraphicsConfiguration)
            /**
             * Creates a window with the specified owner frame.
             * If <code>owner</code> is <code>null</code>, the shared owner
             * will be used and this window will not be focusable. Also,
             * this window will not be focusable unless its owner is showing
             * on the screen.
             * <p>
             * This constructor sets the component's locale property to the value
             * returned by <code>JComponent.getDefaultLocale</code>.
             * @param owner the frame from which the window is displayed
             * @throws HeadlessException if GraphicsEnvironment.isHeadless()
             *             returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see #isFocusableWindow
             * @see JComponent#getDefaultLocale
             */
            // @ts-ignore
            constructor(owner: java.awt.Frame)
            /**
             * Creates a window with the specified owner window. This window
             * will not be focusable unless its owner is showing on the screen.
             * If <code>owner</code> is <code>null</code>, the shared owner
             * will be used and this window will not be focusable.
             * <p>
             * This constructor sets the component's locale property to the value
             * returned by <code>JComponent.getDefaultLocale</code>.
             * @param owner the window from which the window is displayed
             * @throws HeadlessException if
             *          <code>GraphicsEnvironment.isHeadless()</code> returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see #isFocusableWindow
             * @see JComponent#getDefaultLocale
             */
            // @ts-ignore
            constructor(owner: java.awt.Window)
            /**
             * Creates a window with the specified owner window and
             * <code>GraphicsConfiguration</code> of a screen device. If
             * <code>owner</code> is <code>null</code>, the shared owner will be used
             * and this window will not be focusable.
             * <p>
             * This constructor sets the component's locale property to the value
             * returned by <code>JComponent.getDefaultLocale</code>.
             * @param owner the window from which the window is displayed
             * @param gc the <code>GraphicsConfiguration</code> that is used
             *           to construct the new window with; if gc is <code>null</code>,
             *           the system default <code>GraphicsConfiguration</code>
             *           is assumed, unless <code>owner</code> is also null, in which
             *           case the <code>GraphicsConfiguration</code> from the
             *           shared owner frame will be used.
             * @throws HeadlessException if
             *          <code>GraphicsEnvironment.isHeadless()</code> returns true.
             * @throws IllegalArgumentException if <code>gc</code> is not from
             *          a screen device.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see #isFocusableWindow
             * @see JComponent#getDefaultLocale
             * @since 1.3
             */
            // @ts-ignore
            constructor(owner: java.awt.Window, gc: java.awt.GraphicsConfiguration)
            /**
             * The <code>JRootPane</code> instance that manages the
             * <code>contentPane</code>
             * and optional <code>menuBar</code> for this frame, as well as the
             * <code>glassPane</code>.
             * @see #getRootPane
             * @see #setRootPane
             */
            // @ts-ignore
            rootPane: javax.swing.JRootPane
            /**
             * If true then calls to <code>add</code> and <code>setLayout</code>
             * will be forwarded to the <code>contentPane</code>. This is initially
             * false, but is set to true when the <code>JWindow</code> is constructed.
             * @see #isRootPaneCheckingEnabled
             * @see #setRootPaneCheckingEnabled
             * @see javax.swing.RootPaneContainer
             */
            // @ts-ignore
            rootPaneCheckingEnabled: boolean
            /**
             * The accessible context property.
             */
            // @ts-ignore
            accessibleContext: javax.accessibility.AccessibleContext
            /**
             * Called by the constructors to init the <code>JWindow</code> properly.
             */
            // @ts-ignore
            windowInit(): void
            /**
             * Called by the constructor methods to create the default
             * <code>rootPane</code>.
             */
            // @ts-ignore
            createRootPane(): javax.swing.JRootPane
            /**
             * Returns whether calls to <code>add</code> and
             * <code>setLayout</code> are forwarded to the <code>contentPane</code>.
             * @return true if <code>add</code> and <code>setLayout</code>
             *          are forwarded; false otherwise
             * @see #addImpl
             * @see #setLayout
             * @see #setRootPaneCheckingEnabled
             * @see javax.swing.RootPaneContainer
             */
            // @ts-ignore
            isRootPaneCheckingEnabled(): boolean
            /**
             * Sets the {@code transferHandler} property, which is a mechanism to
             * support transfer of data into this component. Use {@code null}
             * if the component does not support data transfer operations.
             * <p>
             * If the system property {@code suppressSwingDropSupport} is {@code false}
             * (the default) and the current drop target on this component is either
             * {@code null} or not a user-set drop target, this method will change the
             * drop target as follows: If {@code newHandler} is {@code null} it will
             * clear the drop target. If not {@code null} it will install a new
             * {@code DropTarget}.
             * <p>
             * Note: When used with {@code JWindow}, {@code TransferHandler} only
             * provides data import capability, as the data export related methods
             * are currently typed to {@code JComponent}.
             * <p>
             * Please see
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/dnd/index.html">
             * How to Use Drag and Drop and Data Transfer</a>, a section in
             * <em>The Java Tutorial</em>, for more information.
             * @param newHandler the new {#code TransferHandler}
             * @see TransferHandler
             * @see #getTransferHandler
             * @see java.awt.Component#setDropTarget
             * @since 1.6
             * @beaninfo bound: true
             *        hidden: true
             *   description: Mechanism for transfer of data into the component
             */
            // @ts-ignore
            public setTransferHandler(newHandler: javax.swing.TransferHandler): void
            /**
             * Gets the <code>transferHandler</code> property.
             * @return the value of the <code>transferHandler</code> property
             * @see TransferHandler
             * @see #setTransferHandler
             * @since 1.6
             */
            // @ts-ignore
            public getTransferHandler(): javax.swing.TransferHandler
            /**
             * Calls <code>paint(g)</code>.  This method was overridden to
             * prevent an unnecessary call to clear the background.
             * @param g  the <code>Graphics</code> context in which to paint
             */
            // @ts-ignore
            public update(g: java.awt.Graphics): void
            /**
             * Sets whether calls to <code>add</code> and
             * <code>setLayout</code> are forwarded to the <code>contentPane</code>.
             * @param enabled  true if <code>add</code> and <code>setLayout</code>
             *         are forwarded, false if they should operate directly on the
             *         <code>JWindow</code>.
             * @see #addImpl
             * @see #setLayout
             * @see #isRootPaneCheckingEnabled
             * @see javax.swing.RootPaneContainer
             * @beaninfo hidden: true
             *  description: Whether the add and setLayout methods are forwarded
             */
            // @ts-ignore
            setRootPaneCheckingEnabled(enabled: boolean): void
            /**
             * Adds the specified child <code>Component</code>.
             * This method is overridden to conditionally forward calls to the
             * <code>contentPane</code>.
             * By default, children are added to the <code>contentPane</code> instead
             * of the frame, refer to {@link javax.swing.RootPaneContainer} for
             * details.
             * @param comp the component to be enhanced
             * @param constraints the constraints to be respected
             * @param index the index
             * @exception IllegalArgumentException if <code>index</code> is invalid
             * @exception IllegalArgumentException if adding the container's parent
             *                   to itself
             * @exception IllegalArgumentException if adding a window to a container
             * @see #setRootPaneCheckingEnabled
             * @see javax.swing.RootPaneContainer
             */
            // @ts-ignore
            addImpl(comp: java.awt.Component, constraints: java.lang.Object | any, index: number /*int*/): void
            /**
             * Removes the specified component from the container. If
             * <code>comp</code> is not the <code>rootPane</code>, this will forward
             * the call to the <code>contentPane</code>. This will do nothing if
             * <code>comp</code> is not a child of the <code>JWindow</code> or
             * <code>contentPane</code>.
             * @param comp the component to be removed
             * @throws NullPointerException if <code>comp</code> is null
             * @see #add
             * @see javax.swing.RootPaneContainer
             */
            // @ts-ignore
            public remove(comp: java.awt.Component): void
            /**
             * Sets the <code>LayoutManager</code>.
             * Overridden to conditionally forward the call to the
             * <code>contentPane</code>.
             * Refer to {@link javax.swing.RootPaneContainer} for
             * more information.
             * @param manager the <code>LayoutManager</code>
             * @see #setRootPaneCheckingEnabled
             * @see javax.swing.RootPaneContainer
             */
            // @ts-ignore
            public setLayout(manager: java.awt.LayoutManager): void
            /**
             * Returns the <code>rootPane</code> object for this window.
             * @return the <code>rootPane</code> property for this window
             * @see #setRootPane
             * @see RootPaneContainer#getRootPane
             */
            // @ts-ignore
            public getRootPane(): javax.swing.JRootPane
            /**
             * Sets the new <code>rootPane</code> object for this window.
             * This method is called by the constructor.
             * @param root the new <code>rootPane</code> property
             * @see #getRootPane
             * @beaninfo hidden: true
             *    description: the RootPane object for this window.
             */
            // @ts-ignore
            setRootPane(root: javax.swing.JRootPane): void
            /**
             * Returns the <code>Container</code> which is the <code>contentPane</code>
             * for this window.
             * @return the <code>contentPane</code> property
             * @see #setContentPane
             * @see RootPaneContainer#getContentPane
             */
            // @ts-ignore
            public getContentPane(): java.awt.Container
            /**
             * Sets the <code>contentPane</code> property for this window.
             * This method is called by the constructor.
             * @param contentPane the new <code>contentPane</code>
             * @exception IllegalComponentStateException (a runtime
             *             exception) if the content pane parameter is <code>null</code>
             * @see #getContentPane
             * @see RootPaneContainer#setContentPane
             * @beaninfo hidden: true
             *      description: The client area of the window where child
             *                   components are normally inserted.
             */
            // @ts-ignore
            public setContentPane(contentPane: java.awt.Container): void
            /**
             * Returns the <code>layeredPane</code> object for this window.
             * @return the <code>layeredPane</code> property
             * @see #setLayeredPane
             * @see RootPaneContainer#getLayeredPane
             */
            // @ts-ignore
            public getLayeredPane(): javax.swing.JLayeredPane
            /**
             * Sets the <code>layeredPane</code> property.
             * This method is called by the constructor.
             * @param layeredPane the new <code>layeredPane</code> object
             * @exception IllegalComponentStateException (a runtime
             *             exception) if the content pane parameter is <code>null</code>
             * @see #getLayeredPane
             * @see RootPaneContainer#setLayeredPane
             * @beaninfo hidden: true
             *      description: The pane which holds the various window layers.
             */
            // @ts-ignore
            public setLayeredPane(layeredPane: javax.swing.JLayeredPane): void
            /**
             * Returns the <code>glassPane Component</code> for this window.
             * @return the <code>glassPane</code> property
             * @see #setGlassPane
             * @see RootPaneContainer#getGlassPane
             */
            // @ts-ignore
            public getGlassPane(): java.awt.Component
            /**
             * Sets the <code>glassPane</code> property.
             * This method is called by the constructor.
             * @param glassPane the <code>glassPane</code> object for this window
             * @see #getGlassPane
             * @see RootPaneContainer#setGlassPane
             * @beaninfo hidden: true
             *      description: A transparent pane used for menu rendering.
             */
            // @ts-ignore
            public setGlassPane(glassPane: java.awt.Component): void
            /**
             * {@inheritDoc}
             * @since 1.6
             */
            // @ts-ignore
            public getGraphics(): java.awt.Graphics
            /**
             * Repaints the specified rectangle of this component within
             * <code>time</code> milliseconds.  Refer to <code>RepaintManager</code>
             * for details on how the repaint is handled.
             * @param time   maximum time in milliseconds before update
             * @param x    the <i>x</i> coordinate
             * @param y    the <i>y</i> coordinate
             * @param width    the width
             * @param height   the height
             * @see RepaintManager
             * @since 1.6
             */
            // @ts-ignore
            public repaint(time: number /*long*/, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Returns a string representation of this <code>JWindow</code>.
             * This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JWindow</code>
             */
            // @ts-ignore
            paramString(): string
            /**
             * Gets the AccessibleContext associated with this JWindow.
             * For JWindows, the AccessibleContext takes the form of an
             * AccessibleJWindow.
             * A new AccessibleJWindow instance is created if necessary.
             * @return an AccessibleJWindow that serves as the
             *          AccessibleContext of this JWindow
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
