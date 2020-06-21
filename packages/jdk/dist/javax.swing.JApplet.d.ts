declare namespace javax {
    namespace swing {
        /**
         * An extended version of <code>java.applet.Applet</code> that adds support for
         * the JFC/Swing component architecture.
         * You can find task-oriented documentation about using <code>JApplet</code>
         * in <em>The Java Tutorial</em>,
         * in the section
         * <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/components/applet.html">How to Make Applets</a>.
         * <p>
         * The <code>JApplet</code> class is slightly incompatible with
         * <code>java.applet.Applet</code>.  <code>JApplet</code> contains a
         * <code>JRootPane</code> as its only child.  The <code>contentPane</code>
         * should be the parent of any children of the <code>JApplet</code>.
         * As a convenience, the {@code add}, {@code remove}, and {@code setLayout}
         * methods of this class are overridden, so that they delegate calls
         * to the corresponding methods of the {@code ContentPane}.
         * For example, you can add a child component to an applet as follows:
         * <pre>
         * applet.add(child);
         * </pre>
         * And the child will be added to the <code>contentPane</code>.
         * The <code>contentPane</code> will always be non-<code>null</code>.
         * Attempting to set it to <code>null</code> will cause the
         * <code>JApplet</code> to throw an exception. The default
         * <code>contentPane</code> will have a <code>BorderLayout</code>
         * manager set on it.
         * Refer to {@link javax.swing.RootPaneContainer}
         * for details on adding, removing and setting the <code>LayoutManager</code>
         * of a <code>JApplet</code>.
         * <p>
         * Please see the <code>JRootPane</code> documentation for a
         * complete description of the <code>contentPane</code>, <code>glassPane</code>,
         * and <code>layeredPane</code> properties.
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
         * @see javax.swing.RootPaneContainer
         * @beaninfo attribute: isContainer true
         *       attribute: containerDelegate getContentPane
         *     description: Swing's Applet subclass.
         * @author Arnaud Weber
         */
        // @ts-ignore
        class JApplet extends java.applet.Applet implements javax.accessibility.Accessible, javax.swing.RootPaneContainer, javax.swing.TransferHandler.HasGetTransferHandler {
            /**
             * Creates a swing applet instance.
             * <p>
             * This constructor sets the component's locale property to the value
             * returned by <code>JComponent.getDefaultLocale</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see JComponent#getDefaultLocale
             */
            // @ts-ignore
            constructor()
            /**
             * @see #getRootPane
             * @see #setRootPane
             */
            // @ts-ignore
            rootPane: javax.swing.JRootPane
            /**
             * If true then calls to <code>add</code> and <code>setLayout</code>
             * will be forwarded to the <code>contentPane</code>. This is initially
             * false, but is set to true when the <code>JApplet</code> is constructed.
             * @see #isRootPaneCheckingEnabled
             * @see #setRootPaneCheckingEnabled
             * @see javax.swing.RootPaneContainer
             */
            // @ts-ignore
            rootPaneCheckingEnabled: boolean
            // @ts-ignore
            accessibleContext: javax.accessibility.AccessibleContext
            /**
             * Called by the constructor methods to create the default rootPane.
             */
            // @ts-ignore
            createRootPane(): javax.swing.JRootPane
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
             * Note: When used with {@code JApplet}, {@code TransferHandler} only
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
             * Just calls <code>paint(g)</code>.  This method was overridden to
             * prevent an unnecessary call to clear the background.
             */
            // @ts-ignore
            public update(g: java.awt.Graphics): void
            /**
             * Sets the menubar for this applet.
             * @param menuBar the menubar being placed in the applet
             * @see #getJMenuBar
             * @beaninfo hidden: true
             *  description: The menubar for accessing pulldown menus from this applet.
             */
            // @ts-ignore
            public setJMenuBar(menuBar: javax.swing.JMenuBar): void
            /**
             * Returns the menubar set on this applet.
             * @see #setJMenuBar
             */
            // @ts-ignore
            public getJMenuBar(): javax.swing.JMenuBar
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
             * Sets whether calls to <code>add</code> and
             * <code>setLayout</code> are forwarded to the <code>contentPane</code>.
             * @param enabled  true if <code>add</code> and <code>setLayout</code>
             *         are forwarded, false if they should operate directly on the
             *         <code>JApplet</code>.
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
             * <code>comp</code> is not a child of the <code>JFrame</code> or
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
             * Returns the rootPane object for this applet.
             * @see #setRootPane
             * @see RootPaneContainer#getRootPane
             */
            // @ts-ignore
            public getRootPane(): javax.swing.JRootPane
            /**
             * Sets the rootPane property.  This method is called by the constructor.
             * @param root the rootPane object for this applet
             * @see #getRootPane
             * @beaninfo hidden: true
             *  description: the RootPane object for this applet.
             */
            // @ts-ignore
            setRootPane(root: javax.swing.JRootPane): void
            /**
             * Returns the contentPane object for this applet.
             * @see #setContentPane
             * @see RootPaneContainer#getContentPane
             */
            // @ts-ignore
            public getContentPane(): java.awt.Container
            /**
             * Sets the contentPane property.  This method is called by the constructor.
             * @param contentPane the contentPane object for this applet
             * @exception java.awt.IllegalComponentStateException (a runtime
             *             exception) if the content pane parameter is null
             * @see #getContentPane
             * @see RootPaneContainer#setContentPane
             * @beaninfo hidden: true
             *      description: The client area of the applet where child
             *                   components are normally inserted.
             */
            // @ts-ignore
            public setContentPane(contentPane: java.awt.Container): void
            /**
             * Returns the layeredPane object for this applet.
             * @exception java.awt.IllegalComponentStateException (a runtime
             *             exception) if the layered pane parameter is null
             * @see #setLayeredPane
             * @see RootPaneContainer#getLayeredPane
             */
            // @ts-ignore
            public getLayeredPane(): javax.swing.JLayeredPane
            /**
             * Sets the layeredPane property.  This method is called by the constructor.
             * @param layeredPane the layeredPane object for this applet
             * @see #getLayeredPane
             * @see RootPaneContainer#setLayeredPane
             * @beaninfo hidden: true
             *      description: The pane which holds the various applet layers.
             */
            // @ts-ignore
            public setLayeredPane(layeredPane: javax.swing.JLayeredPane): void
            /**
             * Returns the glassPane object for this applet.
             * @see #setGlassPane
             * @see RootPaneContainer#getGlassPane
             */
            // @ts-ignore
            public getGlassPane(): java.awt.Component
            /**
             * Sets the glassPane property.
             * This method is called by the constructor.
             * @param glassPane the glassPane object for this applet
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
             * Returns a string representation of this JApplet. This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this JApplet.
             */
            // @ts-ignore
            paramString(): string
            /**
             * Gets the AccessibleContext associated with this JApplet.
             * For JApplets, the AccessibleContext takes the form of an
             * AccessibleJApplet.
             * A new AccessibleJApplet instance is created if necessary.
             * @return an AccessibleJApplet that serves as the
             *          AccessibleContext of this JApplet
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
