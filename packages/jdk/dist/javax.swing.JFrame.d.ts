declare namespace javax {
    namespace swing {
        /**
         * An extended version of <code>java.awt.Frame</code> that adds support for
         * the JFC/Swing component architecture.
         * You can find task-oriented documentation about using <code>JFrame</code>
         * in <em>The Java Tutorial</em>, in the section
         * <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/components/frame.html">How to Make Frames</a>.
         * <p>
         * The <code>JFrame</code> class is slightly incompatible with <code>Frame</code>.
         * Like all other JFC/Swing top-level containers,
         * a <code>JFrame</code> contains a <code>JRootPane</code> as its only child.
         * The <b>content pane</b> provided by the root pane should,
         * as a rule, contain
         * all the non-menu components displayed by the <code>JFrame</code>.
         * This is different from the AWT <code>Frame</code> case.
         * As a convenience, the {@code add}, {@code remove}, and {@code setLayout}
         * methods of this class are overridden, so that they delegate calls
         * to the corresponding methods of the {@code ContentPane}.
         * For example, you can add a child component to a frame as follows:
         * <pre>
         * frame.add(child);
         * </pre>
         * And the child will be added to the contentPane.
         * The content pane will
         * always be non-null. Attempting to set it to null will cause the JFrame
         * to throw an exception. The default content pane will have a BorderLayout
         * manager set on it.
         * Refer to {@link javax.swing.RootPaneContainer}
         * for details on adding, removing and setting the <code>LayoutManager</code>
         * of a <code>JFrame</code>.
         * <p>
         * Unlike a <code>Frame</code>, a <code>JFrame</code> has some notion of how to
         * respond when the user attempts to close the window. The default behavior
         * is to simply hide the JFrame when the user closes the window. To change the
         * default behavior, you invoke the method
         * {@link #setDefaultCloseOperation}.
         * To make the <code>JFrame</code> behave the same as a <code>Frame</code>
         * instance, use
         * <code>setDefaultCloseOperation(WindowConstants.DO_NOTHING_ON_CLOSE)</code>.
         * <p>
         * For more information on content panes
         * and other features that root panes provide,
         * see <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/components/toplevel.html">Using Top-Level Containers</a> in <em>The Java Tutorial</em>.
         * <p>
         * In a multi-screen environment, you can create a <code>JFrame</code>
         * on a different screen device.  See {@link java.awt.Frame} for more
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
         * @see #setDefaultCloseOperation
         * @see java.awt.event.WindowListener#windowClosing
         * @see javax.swing.RootPaneContainer
         * @beaninfo attribute: isContainer true
         *       attribute: containerDelegate getContentPane
         *     description: A toplevel window which can be minimized to an icon.
         * @author Jeff Dinkins
         * @author Georges Saab
         * @author David Kloba
         */
        // @ts-ignore
        class JFrame extends java.awt.Frame implements javax.swing.WindowConstants, javax.accessibility.Accessible, javax.swing.RootPaneContainer, javax.swing.TransferHandler.HasGetTransferHandler {
            /**
             * Constructs a new frame that is initially invisible.
             * <p>
             * This constructor sets the component's locale property to the value
             * returned by <code>JComponent.getDefaultLocale</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see Component#setSize
             * @see Component#setVisible
             * @see JComponent#getDefaultLocale
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a <code>Frame</code> in the specified
             * <code>GraphicsConfiguration</code> of
             * a screen device and a blank title.
             * <p>
             * This constructor sets the component's locale property to the value
             * returned by <code>JComponent.getDefaultLocale</code>.
             * @param gc the <code>GraphicsConfiguration</code> that is used
             *           to construct the new <code>Frame</code>;
             *           if <code>gc</code> is <code>null</code>, the system
             *           default <code>GraphicsConfiguration</code> is assumed
             * @exception IllegalArgumentException if <code>gc</code> is not from
             *           a screen device.  This exception is always thrown when
             *       GraphicsEnvironment.isHeadless() returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see JComponent#getDefaultLocale
             * @since 1.3
             */
            // @ts-ignore
            constructor(gc: java.awt.GraphicsConfiguration)
            /**
             * Creates a new, initially invisible <code>Frame</code> with the
             * specified title.
             * <p>
             * This constructor sets the component's locale property to the value
             * returned by <code>JComponent.getDefaultLocale</code>.
             * @param title the title for the frame
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see Component#setSize
             * @see Component#setVisible
             * @see JComponent#getDefaultLocale
             */
            // @ts-ignore
            constructor(title: string)
            /**
             * Creates a <code>JFrame</code> with the specified title and the
             * specified <code>GraphicsConfiguration</code> of a screen device.
             * <p>
             * This constructor sets the component's locale property to the value
             * returned by <code>JComponent.getDefaultLocale</code>.
             * @param title the title to be displayed in the
             *           frame's border. A <code>null</code> value is treated as
             *           an empty string, "".
             * @param gc the <code>GraphicsConfiguration</code> that is used
             *           to construct the new <code>JFrame</code> with;
             *           if <code>gc</code> is <code>null</code>, the system
             *           default <code>GraphicsConfiguration</code> is assumed
             * @exception IllegalArgumentException if <code>gc</code> is not from
             *           a screen device.  This exception is always thrown when
             *       GraphicsEnvironment.isHeadless() returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see JComponent#getDefaultLocale
             * @since 1.3
             */
            // @ts-ignore
            constructor(title: string, gc: java.awt.GraphicsConfiguration)
            /**
             * The exit application default window close operation. If a window
             * has this set as the close operation and is closed in an applet,
             * a <code>SecurityException</code> may be thrown.
             * It is recommended you only use this in an application.
             * <p>
             * @since 1.3
             */
            // @ts-ignore
            readonly EXIT_ON_CLOSE: number /*int*/
            /**
             * The <code>JRootPane</code> instance that manages the
             * <code>contentPane</code>
             * and optional <code>menuBar</code> for this frame, as well as the
             * <code>glassPane</code>.
             * @see JRootPane
             * @see RootPaneContainer
             */
            // @ts-ignore
            rootPane: javax.swing.JRootPane
            /**
             * If true then calls to <code>add</code> and <code>setLayout</code>
             * will be forwarded to the <code>contentPane</code>. This is initially
             * false, but is set to true when the <code>JFrame</code> is constructed.
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
             * Called by the constructors to init the <code>JFrame</code> properly.
             */
            // @ts-ignore
            frameInit(): void
            /**
             * Called by the constructor methods to create the default
             * <code>rootPane</code>.
             */
            // @ts-ignore
            createRootPane(): javax.swing.JRootPane
            /**
             * Processes window events occurring on this component.
             * Hides the window or disposes of it, as specified by the setting
             * of the <code>defaultCloseOperation</code> property.
             * @param e  the window event
             * @see #setDefaultCloseOperation
             * @see java.awt.Window#processWindowEvent
             */
            // @ts-ignore
            processWindowEvent(e: java.awt.event.WindowEvent): void
            /**
             * Sets the operation that will happen by default when
             * the user initiates a "close" on this frame.
             * You must specify one of the following choices:
             * <br><br>
             * <ul>
             * <li><code>DO_NOTHING_ON_CLOSE</code>
             * (defined in <code>WindowConstants</code>):
             * Don't do anything; require the
             * program to handle the operation in the <code>windowClosing</code>
             * method of a registered <code>WindowListener</code> object.
             * <li><code>HIDE_ON_CLOSE</code>
             * (defined in <code>WindowConstants</code>):
             * Automatically hide the frame after
             * invoking any registered <code>WindowListener</code>
             * objects.
             * <li><code>DISPOSE_ON_CLOSE</code>
             * (defined in <code>WindowConstants</code>):
             * Automatically hide and dispose the
             * frame after invoking any registered <code>WindowListener</code>
             * objects.
             * <li><code>EXIT_ON_CLOSE</code>
             * (defined in <code>JFrame</code>):
             * Exit the application using the <code>System</code>
             * <code>exit</code> method.  Use this only in applications.
             * </ul>
             * <p>
             * The value is set to <code>HIDE_ON_CLOSE</code> by default. Changes
             * to the value of this property cause the firing of a property
             * change event, with property name "defaultCloseOperation".
             * <p>
             * <b>Note</b>: When the last displayable window within the
             * Java virtual machine (VM) is disposed of, the VM may
             * terminate.  See <a href="../../java/awt/doc-files/AWTThreadIssues.html">
             * AWT Threading Issues</a> for more information.
             * @param operation the operation which should be performed when the
             *         user closes the frame
             * @exception IllegalArgumentException if defaultCloseOperation value
             *              isn't one of the above valid values
             * @see #addWindowListener
             * @see #getDefaultCloseOperation
             * @see WindowConstants
             * @throws SecurityException
             *         if <code>EXIT_ON_CLOSE</code> has been specified and the
             *         <code>SecurityManager</code> will
             *         not allow the caller to invoke <code>System.exit</code>
             * @see java.lang.Runtime#exit(int)
             * @beaninfo preferred: true
             *        bound: true
             *         enum: DO_NOTHING_ON_CLOSE WindowConstants.DO_NOTHING_ON_CLOSE
             *               HIDE_ON_CLOSE       WindowConstants.HIDE_ON_CLOSE
             *               DISPOSE_ON_CLOSE    WindowConstants.DISPOSE_ON_CLOSE
             *               EXIT_ON_CLOSE       WindowConstants.EXIT_ON_CLOSE
             *  description: The frame's default close operation.
             */
            // @ts-ignore
            setDefaultCloseOperation(operation: number /*int*/): void
            /**
             * Returns the operation that occurs when the user
             * initiates a "close" on this frame.
             * @return an integer indicating the window-close operation
             * @see #setDefaultCloseOperation
             */
            // @ts-ignore
            getDefaultCloseOperation(): int
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
             * Note: When used with {@code JFrame}, {@code TransferHandler} only
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
            setTransferHandler(newHandler: javax.swing.TransferHandler): void
            /**
             * Gets the <code>transferHandler</code> property.
             * @return the value of the <code>transferHandler</code> property
             * @see TransferHandler
             * @see #setTransferHandler
             * @since 1.6
             */
            // @ts-ignore
            getTransferHandler(): javax.swing.TransferHandler
            /**
             * Just calls <code>paint(g)</code>.  This method was overridden to
             * prevent an unnecessary call to clear the background.
             * @param g the Graphics context in which to paint
             */
            // @ts-ignore
            update(g: java.awt.Graphics): void
            /**
             * Sets the menubar for this frame.
             * @param menubar the menubar being placed in the frame
             * @see #getJMenuBar
             * @beaninfo hidden: true
             *  description: The menubar for accessing pulldown menus from this frame.
             */
            // @ts-ignore
            setJMenuBar(menubar: javax.swing.JMenuBar): void
            /**
             * Returns the menubar set on this frame.
             * @return the menubar for this frame
             * @see #setJMenuBar
             */
            // @ts-ignore
            getJMenuBar(): javax.swing.JMenuBar
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
             *         <code>JFrame</code>.
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
            addImpl(comp: java.awt.Component, constraints: any, index: number /*int*/): void
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
            remove(comp: java.awt.Component): void
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
            setLayout(manager: java.awt.LayoutManager): void
            /**
             * Returns the <code>rootPane</code> object for this frame.
             * @return the <code>rootPane</code> property
             * @see #setRootPane
             * @see RootPaneContainer#getRootPane
             */
            // @ts-ignore
            getRootPane(): javax.swing.JRootPane
            /**
             * Sets the <code>rootPane</code> property.
             * This method is called by the constructor.
             * @param root the <code>rootPane</code> object for this frame
             * @see #getRootPane
             * @beaninfo hidden: true
             *  description: the RootPane object for this frame.
             */
            // @ts-ignore
            setRootPane(root: javax.swing.JRootPane): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            setIconImage(image: java.awt.Image): void
            /**
             * Returns the <code>contentPane</code> object for this frame.
             * @return the <code>contentPane</code> property
             * @see #setContentPane
             * @see RootPaneContainer#getContentPane
             */
            // @ts-ignore
            getContentPane(): java.awt.Container
            /**
             * Sets the <code>contentPane</code> property.
             * This method is called by the constructor.
             * <p>
             * Swing's painting architecture requires an opaque <code>JComponent</code>
             * in the containment hierarchy. This is typically provided by the
             * content pane. If you replace the content pane it is recommended you
             * replace it with an opaque <code>JComponent</code>.
             * @param contentPane the <code>contentPane</code> object for this frame
             * @exception java.awt.IllegalComponentStateException (a runtime
             *             exception) if the content pane parameter is <code>null</code>
             * @see #getContentPane
             * @see RootPaneContainer#setContentPane
             * @see JRootPane
             * @beaninfo hidden: true
             *      description: The client area of the frame where child
             *                   components are normally inserted.
             */
            // @ts-ignore
            setContentPane(contentPane: java.awt.Container): void
            /**
             * Returns the <code>layeredPane</code> object for this frame.
             * @return the <code>layeredPane</code> property
             * @see #setLayeredPane
             * @see RootPaneContainer#getLayeredPane
             */
            // @ts-ignore
            getLayeredPane(): javax.swing.JLayeredPane
            /**
             * Sets the <code>layeredPane</code> property.
             * This method is called by the constructor.
             * @param layeredPane the <code>layeredPane</code> object for this frame
             * @exception java.awt.IllegalComponentStateException (a runtime
             *             exception) if the layered pane parameter is <code>null</code>
             * @see #getLayeredPane
             * @see RootPaneContainer#setLayeredPane
             * @beaninfo hidden: true
             *      description: The pane that holds the various frame layers.
             */
            // @ts-ignore
            setLayeredPane(layeredPane: javax.swing.JLayeredPane): void
            /**
             * Returns the <code>glassPane</code> object for this frame.
             * @return the <code>glassPane</code> property
             * @see #setGlassPane
             * @see RootPaneContainer#getGlassPane
             */
            // @ts-ignore
            getGlassPane(): java.awt.Component
            /**
             * Sets the <code>glassPane</code> property.
             * This method is called by the constructor.
             * @param glassPane the <code>glassPane</code> object for this frame
             * @see #getGlassPane
             * @see RootPaneContainer#setGlassPane
             * @beaninfo hidden: true
             *      description: A transparent pane used for menu rendering.
             */
            // @ts-ignore
            setGlassPane(glassPane: java.awt.Component): void
            /**
             * {@inheritDoc}
             * @since 1.6
             */
            // @ts-ignore
            getGraphics(): java.awt.Graphics
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
            repaint(time: number /*long*/, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Provides a hint as to whether or not newly created <code>JFrame</code>s
             * should have their Window decorations (such as borders, widgets to
             * close the window, title...) provided by the current look
             * and feel. If <code>defaultLookAndFeelDecorated</code> is true,
             * the current <code>LookAndFeel</code> supports providing window
             * decorations, and the current window manager supports undecorated
             * windows, then newly created <code>JFrame</code>s will have their
             * Window decorations provided by the current <code>LookAndFeel</code>.
             * Otherwise, newly created <code>JFrame</code>s will have their
             * Window decorations provided by the current window manager.
             * <p>
             * You can get the same effect on a single JFrame by doing the following:
             * <pre>
             * JFrame frame = new JFrame();
             * frame.setUndecorated(true);
             * frame.getRootPane().setWindowDecorationStyle(JRootPane.FRAME);
             * </pre>
             * @param defaultLookAndFeelDecorated A hint as to whether or not current
             *         look and feel should provide window decorations
             * @see javax.swing.LookAndFeel#getSupportsWindowDecorations
             * @since 1.4
             */
            // @ts-ignore
            setDefaultLookAndFeelDecorated(defaultLookAndFeelDecorated: boolean): void
            /**
             * Returns true if newly created <code>JFrame</code>s should have their
             * Window decorations provided by the current look and feel. This is only
             * a hint, as certain look and feels may not support this feature.
             * @return true if look and feel should provide Window decorations.
             * @since 1.4
             */
            // @ts-ignore
            isDefaultLookAndFeelDecorated(): boolean
            /**
             * Returns a string representation of this <code>JFrame</code>.
             * This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JFrame</code>
             */
            // @ts-ignore
            paramString(): java.lang.String
            /**
             * Gets the AccessibleContext associated with this JFrame.
             * For JFrames, the AccessibleContext takes the form of an
             * AccessibleJFrame.
             * A new AccessibleJFrame instance is created if necessary.
             * @return an AccessibleJFrame that serves as the
             *          AccessibleContext of this JFrame
             */
            // @ts-ignore
            getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
