declare namespace java {
    namespace awt {
        /**
         * This class is the abstract superclass of all actual
         * implementations of the Abstract Window Toolkit. Subclasses of
         * the <code>Toolkit</code> class are used to bind the various components
         * to particular native toolkit implementations.
         * <p>
         * Many GUI events may be delivered to user
         * asynchronously, if the opposite is not specified explicitly.
         * As well as
         * many GUI operations may be performed asynchronously.
         * This fact means that if the state of a component is set, and then
         * the state immediately queried, the returned value may not yet
         * reflect the requested change.  This behavior includes, but is not
         * limited to:
         * <ul>
         * <li>Scrolling to a specified position.
         * <br>For example, calling <code>ScrollPane.setScrollPosition</code>
         * and then <code>getScrollPosition</code> may return an incorrect
         * value if the original request has not yet been processed.
         * <li>Moving the focus from one component to another.
         * <br>For more information, see
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html#transferTiming">Timing
         * Focus Transfers</a>, a section in
         * <a href="http://java.sun.com/docs/books/tutorial/uiswing/">The Swing
         * Tutorial</a>.
         * <li>Making a top-level container visible.
         * <br>Calling <code>setVisible(true)</code> on a <code>Window</code>,
         * <code>Frame</code> or <code>Dialog</code> may occur
         * asynchronously.
         * <li>Setting the size or location of a top-level container.
         * <br>Calls to <code>setSize</code>, <code>setBounds</code> or
         * <code>setLocation</code> on a <code>Window</code>,
         * <code>Frame</code> or <code>Dialog</code> are forwarded
         * to the underlying window management system and may be
         * ignored or modified.  See {@link java.awt.Window} for
         * more information.
         * </ul>
         * <p>
         * Most applications should not call any of the methods in this
         * class directly. The methods defined by <code>Toolkit</code> are
         * the "glue" that joins the platform-independent classes in the
         * <code>java.awt</code> package with their counterparts in
         * <code>java.awt.peer</code>. Some methods defined by
         * <code>Toolkit</code> query the native operating system directly.
         * @author Sami Shaio
         * @author Arthur van Hoff
         * @author Fred Ecks
         * @since JDK1.0
         */
        // @ts-ignore
        class Toolkit extends java.lang.Object {
            // @ts-ignore
            constructor()
            // @ts-ignore
            readonly desktopProperties: java.util.Map<java.lang.String, java.lang.Object>
            // @ts-ignore
            readonly desktopPropsSupport: java.beans.PropertyChangeSupport
            /**
             * Creates this toolkit's implementation of the <code>Desktop</code>
             * using the specified peer interface.
             * @param target the desktop to be implemented
             * @return this toolkit's implementation of the <code>Desktop</code>
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.Desktop
             * @see java.awt.peer.DesktopPeer
             * @since 1.6
             */
            // @ts-ignore
            abstract createDesktopPeer(target: java.awt.Desktop): java.awt.peer.DesktopPeer
            /**
             * Creates this toolkit's implementation of <code>Button</code> using
             * the specified peer interface.
             * @param target the button to be implemented.
             * @return this toolkit's implementation of <code>Button</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.Button
             * @see java.awt.peer.ButtonPeer
             */
            // @ts-ignore
            abstract createButton(target: java.awt.Button): java.awt.peer.ButtonPeer
            /**
             * Creates this toolkit's implementation of <code>TextField</code> using
             * the specified peer interface.
             * @param target the text field to be implemented.
             * @return this toolkit's implementation of <code>TextField</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.TextField
             * @see java.awt.peer.TextFieldPeer
             */
            // @ts-ignore
            abstract createTextField(target: java.awt.TextField): java.awt.peer.TextFieldPeer
            /**
             * Creates this toolkit's implementation of <code>Label</code> using
             * the specified peer interface.
             * @param target the label to be implemented.
             * @return this toolkit's implementation of <code>Label</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.Label
             * @see java.awt.peer.LabelPeer
             */
            // @ts-ignore
            abstract createLabel(target: java.awt.Label): java.awt.peer.LabelPeer
            /**
             * Creates this toolkit's implementation of <code>List</code> using
             * the specified peer interface.
             * @param target the list to be implemented.
             * @return this toolkit's implementation of <code>List</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.List
             * @see java.awt.peer.ListPeer
             */
            // @ts-ignore
            abstract createList(target: java.awt.List): java.awt.peer.ListPeer
            /**
             * Creates this toolkit's implementation of <code>Checkbox</code> using
             * the specified peer interface.
             * @param target the check box to be implemented.
             * @return this toolkit's implementation of <code>Checkbox</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.Checkbox
             * @see java.awt.peer.CheckboxPeer
             */
            // @ts-ignore
            abstract createCheckbox(target: java.awt.Checkbox): java.awt.peer.CheckboxPeer
            /**
             * Creates this toolkit's implementation of <code>Scrollbar</code> using
             * the specified peer interface.
             * @param target the scroll bar to be implemented.
             * @return this toolkit's implementation of <code>Scrollbar</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.Scrollbar
             * @see java.awt.peer.ScrollbarPeer
             */
            // @ts-ignore
            abstract createScrollbar(target: java.awt.Scrollbar): java.awt.peer.ScrollbarPeer
            /**
             * Creates this toolkit's implementation of <code>ScrollPane</code> using
             * the specified peer interface.
             * @param target the scroll pane to be implemented.
             * @return this toolkit's implementation of <code>ScrollPane</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.ScrollPane
             * @see java.awt.peer.ScrollPanePeer
             * @since JDK1.1
             */
            // @ts-ignore
            abstract createScrollPane(target: java.awt.ScrollPane): java.awt.peer.ScrollPanePeer
            /**
             * Creates this toolkit's implementation of <code>TextArea</code> using
             * the specified peer interface.
             * @param target the text area to be implemented.
             * @return this toolkit's implementation of <code>TextArea</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.TextArea
             * @see java.awt.peer.TextAreaPeer
             */
            // @ts-ignore
            abstract createTextArea(target: java.awt.TextArea): java.awt.peer.TextAreaPeer
            /**
             * Creates this toolkit's implementation of <code>Choice</code> using
             * the specified peer interface.
             * @param target the choice to be implemented.
             * @return this toolkit's implementation of <code>Choice</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.Choice
             * @see java.awt.peer.ChoicePeer
             */
            // @ts-ignore
            abstract createChoice(target: java.awt.Choice): java.awt.peer.ChoicePeer
            /**
             * Creates this toolkit's implementation of <code>Frame</code> using
             * the specified peer interface.
             * @param target the frame to be implemented.
             * @return this toolkit's implementation of <code>Frame</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.Frame
             * @see java.awt.peer.FramePeer
             */
            // @ts-ignore
            abstract createFrame(target: java.awt.Frame): java.awt.peer.FramePeer
            /**
             * Creates this toolkit's implementation of <code>Canvas</code> using
             * the specified peer interface.
             * @param target the canvas to be implemented.
             * @return this toolkit's implementation of <code>Canvas</code>.
             * @see java.awt.Canvas
             * @see java.awt.peer.CanvasPeer
             */
            // @ts-ignore
            abstract createCanvas(target: java.awt.Canvas): java.awt.peer.CanvasPeer
            /**
             * Creates this toolkit's implementation of <code>Panel</code> using
             * the specified peer interface.
             * @param target the panel to be implemented.
             * @return this toolkit's implementation of <code>Panel</code>.
             * @see java.awt.Panel
             * @see java.awt.peer.PanelPeer
             */
            // @ts-ignore
            abstract createPanel(target: java.awt.Panel): java.awt.peer.PanelPeer
            /**
             * Creates this toolkit's implementation of <code>Window</code> using
             * the specified peer interface.
             * @param target the window to be implemented.
             * @return this toolkit's implementation of <code>Window</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.Window
             * @see java.awt.peer.WindowPeer
             */
            // @ts-ignore
            abstract createWindow(target: java.awt.Window): java.awt.peer.WindowPeer
            /**
             * Creates this toolkit's implementation of <code>Dialog</code> using
             * the specified peer interface.
             * @param target the dialog to be implemented.
             * @return this toolkit's implementation of <code>Dialog</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.Dialog
             * @see java.awt.peer.DialogPeer
             */
            // @ts-ignore
            abstract createDialog(target: java.awt.Dialog): java.awt.peer.DialogPeer
            /**
             * Creates this toolkit's implementation of <code>MenuBar</code> using
             * the specified peer interface.
             * @param target the menu bar to be implemented.
             * @return this toolkit's implementation of <code>MenuBar</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.MenuBar
             * @see java.awt.peer.MenuBarPeer
             */
            // @ts-ignore
            abstract createMenuBar(target: java.awt.MenuBar): java.awt.peer.MenuBarPeer
            /**
             * Creates this toolkit's implementation of <code>Menu</code> using
             * the specified peer interface.
             * @param target the menu to be implemented.
             * @return this toolkit's implementation of <code>Menu</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.Menu
             * @see java.awt.peer.MenuPeer
             */
            // @ts-ignore
            abstract createMenu(target: java.awt.Menu): java.awt.peer.MenuPeer
            /**
             * Creates this toolkit's implementation of <code>PopupMenu</code> using
             * the specified peer interface.
             * @param target the popup menu to be implemented.
             * @return this toolkit's implementation of <code>PopupMenu</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.PopupMenu
             * @see java.awt.peer.PopupMenuPeer
             * @since JDK1.1
             */
            // @ts-ignore
            abstract createPopupMenu(target: java.awt.PopupMenu): java.awt.peer.PopupMenuPeer
            /**
             * Creates this toolkit's implementation of <code>MenuItem</code> using
             * the specified peer interface.
             * @param target the menu item to be implemented.
             * @return this toolkit's implementation of <code>MenuItem</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.MenuItem
             * @see java.awt.peer.MenuItemPeer
             */
            // @ts-ignore
            abstract createMenuItem(target: java.awt.MenuItem): java.awt.peer.MenuItemPeer
            /**
             * Creates this toolkit's implementation of <code>FileDialog</code> using
             * the specified peer interface.
             * @param target the file dialog to be implemented.
             * @return this toolkit's implementation of <code>FileDialog</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.FileDialog
             * @see java.awt.peer.FileDialogPeer
             */
            // @ts-ignore
            abstract createFileDialog(target: java.awt.FileDialog): java.awt.peer.FileDialogPeer
            /**
             * Creates this toolkit's implementation of <code>CheckboxMenuItem</code> using
             * the specified peer interface.
             * @param target the checkbox menu item to be implemented.
             * @return this toolkit's implementation of <code>CheckboxMenuItem</code>.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.CheckboxMenuItem
             * @see java.awt.peer.CheckboxMenuItemPeer
             */
            // @ts-ignore
            abstract createCheckboxMenuItem(target: java.awt.CheckboxMenuItem): java.awt.peer.CheckboxMenuItemPeer
            /**
             * Obtains this toolkit's implementation of helper class for
             * <code>MouseInfo</code> operations.
             * @return this toolkit's implementation of  helper for <code>MouseInfo</code>
             * @throws UnsupportedOperationException if this operation is not implemented
             * @see java.awt.peer.MouseInfoPeer
             * @see java.awt.MouseInfo
             * @since 1.5
             */
            // @ts-ignore
            getMouseInfoPeer(): java.awt.peer.MouseInfoPeer
            /**
             * Creates a peer for a component or container.  This peer is windowless
             * and allows the Component and Container classes to be extended directly
             * to create windowless components that are defined entirely in java.
             * @param target The Component to be created.
             */
            // @ts-ignore
            createComponent(target: java.awt.Component): java.awt.peer.LightweightPeer
            /**
             * Creates this toolkit's implementation of <code>Font</code> using
             * the specified peer interface.
             * @param name the font to be implemented
             * @param style the style of the font, such as <code>PLAIN</code>,
             *             <code>BOLD</code>, <code>ITALIC</code>, or a combination
             * @return this toolkit's implementation of <code>Font</code>
             * @see java.awt.Font
             * @see java.awt.peer.FontPeer
             * @see java.awt.GraphicsEnvironment#getAllFonts
             * @deprecated see java.awt.GraphicsEnvironment#getAllFonts
             */
            // @ts-ignore
            abstract getFontPeer(name: string, style: number /*int*/): java.awt.peer.FontPeer
            /**
             * Fills in the integer array that is supplied as an argument
             * with the current system color values.
             * @param systemColors an integer array.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since JDK1.1
             */
            // @ts-ignore
            loadSystemColors(systemColors: number /*int*/[]): void
            /**
             * Controls whether the layout of Containers is validated dynamically
             * during resizing, or statically, after resizing is complete.
             * Use {@code isDynamicLayoutActive()} to detect if this feature enabled
             * in this program and is supported by this operating system
             * and/or window manager.
             * Note that this feature is supported not on all platforms, and
             * conversely, that this feature cannot be turned off on some platforms.
             * On these platforms where dynamic layout during resizing is not supported
             * (or is always supported), setting this property has no effect.
             * Note that this feature can be set or unset as a property of the
             * operating system or window manager on some platforms.  On such
             * platforms, the dynamic resize property must be set at the operating
             * system or window manager level before this method can take effect.
             * This method does not change support or settings of the underlying
             * operating system or
             * window manager.  The OS/WM support can be
             * queried using getDesktopProperty("awt.dynamicLayoutSupported") method.
             * @param dynamic  If true, Containers should re-layout their
             *             components as the Container is being resized.  If false,
             *             the layout will be validated after resizing is completed.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *             returns true
             * @see #isDynamicLayoutSet()
             * @see #isDynamicLayoutActive()
             * @see #getDesktopProperty(String propertyName)
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since 1.4
             */
            // @ts-ignore
            setDynamicLayout(dynamic: boolean): void
            /**
             * Returns whether the layout of Containers is validated dynamically
             * during resizing, or statically, after resizing is complete.
             * Note: this method returns the value that was set programmatically;
             * it does not reflect support at the level of the operating system
             * or window manager for dynamic layout on resizing, or the current
             * operating system or window manager settings.  The OS/WM support can
             * be queried using getDesktopProperty("awt.dynamicLayoutSupported").
             * @return true if validation of Containers is done dynamically,
             *             false if validation is done after resizing is finished.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *             returns true
             * @see #setDynamicLayout(boolean dynamic)
             * @see #isDynamicLayoutActive()
             * @see #getDesktopProperty(String propertyName)
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since 1.4
             */
            // @ts-ignore
            isDynamicLayoutSet(): boolean
            /**
             * Returns whether dynamic layout of Containers on resize is
             * currently active (both set in program
             * ( {@code isDynamicLayoutSet()} )
             * , and supported
             * by the underlying operating system and/or window manager).
             * If dynamic layout is currently inactive then Containers
             * re-layout their components when resizing is completed. As a result
             * the {@code Component.validate()} method will be invoked only
             * once per resize.
             * If dynamic layout is currently active then Containers
             * re-layout their components on every native resize event and
             * the {@code validate()} method will be invoked each time.
             * The OS/WM support can be queried using
             * the getDesktopProperty("awt.dynamicLayoutSupported") method.
             * @return true if dynamic layout of Containers on resize is
             *             currently active, false otherwise.
             * @exception HeadlessException if the GraphicsEnvironment.isHeadless()
             *             method returns true
             * @see #setDynamicLayout(boolean dynamic)
             * @see #isDynamicLayoutSet()
             * @see #getDesktopProperty(String propertyName)
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since 1.4
             */
            // @ts-ignore
            isDynamicLayoutActive(): boolean
            /**
             * Gets the size of the screen.  On systems with multiple displays, the
             * primary display is used.  Multi-screen aware display dimensions are
             * available from <code>GraphicsConfiguration</code> and
             * <code>GraphicsDevice</code>.
             * @return the size of this toolkit's screen, in pixels.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsConfiguration#getBounds
             * @see java.awt.GraphicsDevice#getDisplayMode
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            abstract getScreenSize(): java.awt.Dimension
            /**
             * Returns the screen resolution in dots-per-inch.
             * @return this toolkit's screen resolution, in dots-per-inch.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            abstract getScreenResolution(): int
            /**
             * Gets the insets of the screen.
             * @param gc a <code>GraphicsConfiguration</code>
             * @return the insets of this toolkit's screen, in pixels.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since 1.4
             */
            // @ts-ignore
            getScreenInsets(gc: java.awt.GraphicsConfiguration): java.awt.Insets
            /**
             * Determines the color model of this toolkit's screen.
             * <p>
             * <code>ColorModel</code> is an abstract class that
             * encapsulates the ability to translate between the
             * pixel values of an image and its red, green, blue,
             * and alpha components.
             * <p>
             * This toolkit method is called by the
             * <code>getColorModel</code> method
             * of the <code>Component</code> class.
             * @return the color model of this toolkit's screen.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.image.ColorModel
             * @see java.awt.Component#getColorModel
             */
            // @ts-ignore
            abstract getColorModel(): java.awt.image.ColorModel
            /**
             * Returns the names of the available fonts in this toolkit.<p>
             * For 1.1, the following font names are deprecated (the replacement
             * name follows):
             * <ul>
             * <li>TimesRoman (use Serif)
             * <li>Helvetica (use SansSerif)
             * <li>Courier (use Monospaced)
             * </ul><p>
             * The ZapfDingbats fontname is also deprecated in 1.1 but the characters
             * are defined in Unicode starting at 0x2700, and as of 1.1 Java supports
             * those characters.
             * @return the names of the available fonts in this toolkit.
             * @deprecated see {#link java.awt.GraphicsEnvironment#getAvailableFontFamilyNames()}
             * @see java.awt.GraphicsEnvironment#getAvailableFontFamilyNames()
             */
            // @ts-ignore
            abstract getFontList(): java.lang.String[]
            /**
             * Gets the screen device metrics for rendering of the font.
             * @param font   a font
             * @return the screen metrics of the specified font in this toolkit
             * @deprecated As of JDK version 1.2, replaced by the <code>Font</code>
             *           method <code>getLineMetrics</code>.
             * @see java.awt.font.LineMetrics
             * @see java.awt.Font#getLineMetrics
             * @see java.awt.GraphicsEnvironment#getScreenDevices
             */
            // @ts-ignore
            abstract getFontMetrics(font: java.awt.Font): java.awt.FontMetrics
            /**
             * Synchronizes this toolkit's graphics state. Some window systems
             * may do buffering of graphics events.
             * <p>
             * This method ensures that the display is up-to-date. It is useful
             * for animation.
             */
            // @ts-ignore
            abstract sync(): void
            /**
             * Gets the default toolkit.
             * <p>
             * If a system property named <code>"java.awt.headless"</code> is set
             * to <code>true</code> then the headless implementation
             * of <code>Toolkit</code> is used.
             * <p>
             * If there is no <code>"java.awt.headless"</code> or it is set to
             * <code>false</code> and there is a system property named
             * <code>"awt.toolkit"</code>,
             * that property is treated as the name of a class that is a subclass
             * of <code>Toolkit</code>;
             * otherwise the default platform-specific implementation of
             * <code>Toolkit</code> is used.
             * <p>
             * Also loads additional classes into the VM, using the property
             * 'assistive_technologies' specified in the Sun reference
             * implementation by a line in the 'accessibility.properties'
             * file.  The form is "assistive_technologies=..." where
             * the "..." is a comma-separated list of assistive technology
             * classes to load.  Each class is loaded in the order given
             * and a single instance of each is created using
             * Class.forName(class).newInstance().  This is done just after
             * the AWT toolkit is created.  All errors are handled via an
             * AWTError exception.
             * @return the default toolkit.
             * @exception AWTError  if a toolkit could not be found, or
             *                  if one could not be accessed or instantiated.
             */
            // @ts-ignore
            getDefaultToolkit(): java.awt.Toolkit
            /**
             * Returns an image which gets pixel data from the specified file,
             * whose format can be either GIF, JPEG or PNG.
             * The underlying toolkit attempts to resolve multiple requests
             * with the same filename to the same returned Image.
             * <p>
             * Since the mechanism required to facilitate this sharing of
             * <code>Image</code> objects may continue to hold onto images
             * that are no longer in use for an indefinite period of time,
             * developers are encouraged to implement their own caching of
             * images by using the {@link #createImage(java.lang.String) createImage}
             * variant wherever available.
             * If the image data contained in the specified file changes,
             * the <code>Image</code> object returned from this method may
             * still contain stale information which was loaded from the
             * file after a prior call.
             * Previously loaded image data can be manually discarded by
             * calling the {@link Image#flush flush} method on the
             * returned <code>Image</code>.
             * <p>
             * This method first checks if there is a security manager installed.
             * If so, the method calls the security manager's
             * <code>checkRead</code> method with the file specified to ensure
             * that the access to the image is allowed.
             * @param filename   the name of a file containing pixel data
             *                          in a recognized file format.
             * @return an image which gets its pixel data from
             *                          the specified file.
             * @throws SecurityException  if a security manager exists and its
             *                             checkRead method doesn't allow the operation.
             * @see #createImage(java.lang.String)
             */
            // @ts-ignore
            abstract getImage(filename: string): java.awt.Image
            /**
             * Returns an image which gets pixel data from the specified URL.
             * The pixel data referenced by the specified URL must be in one
             * of the following formats: GIF, JPEG or PNG.
             * The underlying toolkit attempts to resolve multiple requests
             * with the same URL to the same returned Image.
             * <p>
             * Since the mechanism required to facilitate this sharing of
             * <code>Image</code> objects may continue to hold onto images
             * that are no longer in use for an indefinite period of time,
             * developers are encouraged to implement their own caching of
             * images by using the {@link #createImage(java.net.URL) createImage}
             * variant wherever available.
             * If the image data stored at the specified URL changes,
             * the <code>Image</code> object returned from this method may
             * still contain stale information which was fetched from the
             * URL after a prior call.
             * Previously loaded image data can be manually discarded by
             * calling the {@link Image#flush flush} method on the
             * returned <code>Image</code>.
             * <p>
             * This method first checks if there is a security manager installed.
             * If so, the method calls the security manager's
             * <code>checkPermission</code> method with the
             * url.openConnection().getPermission() permission to ensure
             * that the access to the image is allowed. For compatibility
             * with pre-1.2 security managers, if the access is denied with
             * <code>FilePermission</code> or <code>SocketPermission</code>,
             * the method throws the <code>SecurityException</code>
             * if the corresponding 1.1-style SecurityManager.checkXXX method
             * also denies permission.
             * @param url   the URL to use in fetching the pixel data.
             * @return an image which gets its pixel data from
             *                          the specified URL.
             * @throws SecurityException  if a security manager exists and its
             *                             checkPermission method doesn't allow
             *                             the operation.
             * @see #createImage(java.net.URL)
             */
            // @ts-ignore
            abstract getImage(url: java.net.URL): java.awt.Image
            /**
             * Returns an image which gets pixel data from the specified file.
             * The returned Image is a new object which will not be shared
             * with any other caller of this method or its getImage variant.
             * <p>
             * This method first checks if there is a security manager installed.
             * If so, the method calls the security manager's
             * <code>checkRead</code> method with the specified file to ensure
             * that the image creation is allowed.
             * @param filename   the name of a file containing pixel data
             *                          in a recognized file format.
             * @return an image which gets its pixel data from
             *                          the specified file.
             * @throws SecurityException  if a security manager exists and its
             *                             checkRead method doesn't allow the operation.
             * @see #getImage(java.lang.String)
             */
            // @ts-ignore
            abstract createImage(filename: string): java.awt.Image
            /**
             * Returns an image which gets pixel data from the specified URL.
             * The returned Image is a new object which will not be shared
             * with any other caller of this method or its getImage variant.
             * <p>
             * This method first checks if there is a security manager installed.
             * If so, the method calls the security manager's
             * <code>checkPermission</code> method with the
             * url.openConnection().getPermission() permission to ensure
             * that the image creation is allowed. For compatibility
             * with pre-1.2 security managers, if the access is denied with
             * <code>FilePermission</code> or <code>SocketPermission</code>,
             * the method throws <code>SecurityException</code>
             * if the corresponding 1.1-style SecurityManager.checkXXX method
             * also denies permission.
             * @param url   the URL to use in fetching the pixel data.
             * @return an image which gets its pixel data from
             *                          the specified URL.
             * @throws SecurityException  if a security manager exists and its
             *                             checkPermission method doesn't allow
             *                             the operation.
             * @see #getImage(java.net.URL)
             */
            // @ts-ignore
            abstract createImage(url: java.net.URL): java.awt.Image
            /**
             * Prepares an image for rendering.
             * <p>
             * If the values of the width and height arguments are both
             * <code>-1</code>, this method prepares the image for rendering
             * on the default screen; otherwise, this method prepares an image
             * for rendering on the default screen at the specified width and height.
             * <p>
             * The image data is downloaded asynchronously in another thread,
             * and an appropriately scaled screen representation of the image is
             * generated.
             * <p>
             * This method is called by components <code>prepareImage</code>
             * methods.
             * <p>
             * Information on the flags returned by this method can be found
             * with the definition of the <code>ImageObserver</code> interface.
             * @param image      the image for which to prepare a
             *                            screen representation.
             * @param width      the width of the desired screen
             *                            representation, or <code>-1</code>.
             * @param height     the height of the desired screen
             *                            representation, or <code>-1</code>.
             * @param observer   the <code>ImageObserver</code>
             *                            object to be notified as the
             *                            image is being prepared.
             * @return <code>true</code> if the image has already been
             *                  fully prepared; <code>false</code> otherwise.
             * @see java.awt.Component#prepareImage(java.awt.Image,
             *                  java.awt.image.ImageObserver)
             * @see java.awt.Component#prepareImage(java.awt.Image,
             *                  int, int, java.awt.image.ImageObserver)
             * @see java.awt.image.ImageObserver
             */
            // @ts-ignore
            abstract prepareImage(image: java.awt.Image, width: number /*int*/, height: number /*int*/, observer: java.awt.image.ImageObserver): boolean
            /**
             * Indicates the construction status of a specified image that is
             * being prepared for display.
             * <p>
             * If the values of the width and height arguments are both
             * <code>-1</code>, this method returns the construction status of
             * a screen representation of the specified image in this toolkit.
             * Otherwise, this method returns the construction status of a
             * scaled representation of the image at the specified width
             * and height.
             * <p>
             * This method does not cause the image to begin loading.
             * An application must call <code>prepareImage</code> to force
             * the loading of an image.
             * <p>
             * This method is called by the component's <code>checkImage</code>
             * methods.
             * <p>
             * Information on the flags returned by this method can be found
             * with the definition of the <code>ImageObserver</code> interface.
             * @param image   the image whose status is being checked.
             * @param width   the width of the scaled version whose status is
             *                  being checked, or <code>-1</code>.
             * @param height  the height of the scaled version whose status
             *                  is being checked, or <code>-1</code>.
             * @param observer   the <code>ImageObserver</code> object to be
             *                  notified as the image is being prepared.
             * @return the bitwise inclusive <strong>OR</strong> of the
             *                  <code>ImageObserver</code> flags for the
             *                  image data that is currently available.
             * @see java.awt.Toolkit#prepareImage(java.awt.Image,
             *                  int, int, java.awt.image.ImageObserver)
             * @see java.awt.Component#checkImage(java.awt.Image,
             *                  java.awt.image.ImageObserver)
             * @see java.awt.Component#checkImage(java.awt.Image,
             *                  int, int, java.awt.image.ImageObserver)
             * @see java.awt.image.ImageObserver
             */
            // @ts-ignore
            abstract checkImage(image: java.awt.Image, width: number /*int*/, height: number /*int*/, observer: java.awt.image.ImageObserver): int
            /**
             * Creates an image with the specified image producer.
             * @param producer the image producer to be used.
             * @return an image with the specified image producer.
             * @see java.awt.Image
             * @see java.awt.image.ImageProducer
             * @see java.awt.Component#createImage(java.awt.image.ImageProducer)
             */
            // @ts-ignore
            abstract createImage(producer: java.awt.image.ImageProducer): java.awt.Image
            /**
             * Creates an image which decodes the image stored in the specified
             * byte array.
             * <p>
             * The data must be in some image format, such as GIF or JPEG,
             * that is supported by this toolkit.
             * @param imagedata   an array of bytes, representing
             *                          image data in a supported image format.
             * @return an image.
             * @since JDK1.1
             */
            // @ts-ignore
            createImage(imagedata: number /*byte*/[]): java.awt.Image
            /**
             * Creates an image which decodes the image stored in the specified
             * byte array, and at the specified offset and length.
             * The data must be in some image format, such as GIF or JPEG,
             * that is supported by this toolkit.
             * @param imagedata   an array of bytes, representing
             *                          image data in a supported image format.
             * @param imageoffset  the offset of the beginning
             *                          of the data in the array.
             * @param imagelength  the length of the data in the array.
             * @return an image.
             * @since JDK1.1
             */
            // @ts-ignore
            abstract createImage(imagedata: number /*byte*/[], imageoffset: number /*int*/, imagelength: number /*int*/): java.awt.Image
            /**
             * Gets a <code>PrintJob</code> object which is the result of initiating
             * a print operation on the toolkit's platform.
             * <p>
             * Each actual implementation of this method should first check if there
             * is a security manager installed. If there is, the method should call
             * the security manager's <code>checkPrintJobAccess</code> method to
             * ensure initiation of a print operation is allowed. If the default
             * implementation of <code>checkPrintJobAccess</code> is used (that is,
             * that method is not overriden), then this results in a call to the
             * security manager's <code>checkPermission</code> method with a <code>
             * RuntimePermission("queuePrintJob")</code> permission.
             * @param frame the parent of the print dialog. May not be null.
             * @param jobtitle the title of the PrintJob. A null title is equivalent
             *           to "".
             * @param props a Properties object containing zero or more properties.
             *           Properties are not standardized and are not consistent across
             *           implementations. Because of this, PrintJobs which require job
             *           and page control should use the version of this function which
             *           takes JobAttributes and PageAttributes objects. This object
             *           may be updated to reflect the user's job choices on exit. May
             *           be null.
             * @return a <code>PrintJob</code> object, or <code>null</code> if the
             *           user cancelled the print job.
             * @throws NullPointerException if frame is null
             * @throws SecurityException if this thread is not allowed to initiate a
             *           print job request
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.PrintJob
             * @see java.lang.RuntimePermission
             * @since JDK1.1
             */
            // @ts-ignore
            abstract getPrintJob(frame: java.awt.Frame, jobtitle: string, props: java.util.Properties): java.awt.PrintJob
            /**
             * Gets a <code>PrintJob</code> object which is the result of initiating
             * a print operation on the toolkit's platform.
             * <p>
             * Each actual implementation of this method should first check if there
             * is a security manager installed. If there is, the method should call
             * the security manager's <code>checkPrintJobAccess</code> method to
             * ensure initiation of a print operation is allowed. If the default
             * implementation of <code>checkPrintJobAccess</code> is used (that is,
             * that method is not overriden), then this results in a call to the
             * security manager's <code>checkPermission</code> method with a <code>
             * RuntimePermission("queuePrintJob")</code> permission.
             * @param frame the parent of the print dialog. May not be null.
             * @param jobtitle the title of the PrintJob. A null title is equivalent
             *           to "".
             * @param jobAttributes a set of job attributes which will control the
             *           PrintJob. The attributes will be updated to reflect the user's
             *           choices as outlined in the JobAttributes documentation. May be
             *           null.
             * @param pageAttributes a set of page attributes which will control the
             *           PrintJob. The attributes will be applied to every page in the
             *           job. The attributes will be updated to reflect the user's
             *           choices as outlined in the PageAttributes documentation. May be
             *           null.
             * @return a <code>PrintJob</code> object, or <code>null</code> if the
             *           user cancelled the print job.
             * @throws NullPointerException if frame is null
             * @throws IllegalArgumentException if pageAttributes specifies differing
             *           cross feed and feed resolutions. Also if this thread has
             *           access to the file system and jobAttributes specifies
             *           print to file, and the specified destination file exists but
             *           is a directory rather than a regular file, does not exist but
             *           cannot be created, or cannot be opened for any other reason.
             *           However in the case of print to file, if a dialog is also
             *           requested to be displayed then the user will be given an
             *           opportunity to select a file and proceed with printing.
             *           The dialog will ensure that the selected output file
             *           is valid before returning from this method.
             * @throws SecurityException if this thread is not allowed to initiate a
             *           print job request, or if jobAttributes specifies print to file,
             *           and this thread is not allowed to access the file system
             * @see java.awt.PrintJob
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.lang.RuntimePermission
             * @see java.awt.JobAttributes
             * @see java.awt.PageAttributes
             * @since 1.3
             */
            // @ts-ignore
            getPrintJob(frame: java.awt.Frame, jobtitle: string, jobAttributes: java.awt.JobAttributes, pageAttributes: java.awt.PageAttributes): java.awt.PrintJob
            /**
             * Emits an audio beep depending on native system settings and hardware
             * capabilities.
             * @since JDK1.1
             */
            // @ts-ignore
            abstract beep(): void
            /**
             * Gets the singleton instance of the system Clipboard which interfaces
             * with clipboard facilities provided by the native platform. This
             * clipboard enables data transfer between Java programs and native
             * applications which use native clipboard facilities.
             * <p>
             * In addition to any and all formats specified in the flavormap.properties
             * file, or other file specified by the <code>AWT.DnD.flavorMapFileURL
             * </code> Toolkit property, text returned by the system Clipboard's <code>
             * getTransferData()</code> method is available in the following flavors:
             * <ul>
             * <li>DataFlavor.stringFlavor</li>
             * <li>DataFlavor.plainTextFlavor (<b>deprecated</b>)</li>
             * </ul>
             * As with <code>java.awt.datatransfer.StringSelection</code>, if the
             * requested flavor is <code>DataFlavor.plainTextFlavor</code>, or an
             * equivalent flavor, a Reader is returned. <b>Note:</b> The behavior of
             * the system Clipboard's <code>getTransferData()</code> method for <code>
             * DataFlavor.plainTextFlavor</code>, and equivalent DataFlavors, is
             * inconsistent with the definition of <code>DataFlavor.plainTextFlavor
             * </code>. Because of this, support for <code>
             * DataFlavor.plainTextFlavor</code>, and equivalent flavors, is
             * <b>deprecated</b>.
             * <p>
             * Each actual implementation of this method should first check if there
             * is a security manager installed. If there is, the method should call
             * the security manager's {@link SecurityManager#checkPermission
             * checkPermission} method to check {@code AWTPermission("accessClipboard")}.
             * @return the system Clipboard
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.datatransfer.Clipboard
             * @see java.awt.datatransfer.StringSelection
             * @see java.awt.datatransfer.DataFlavor#stringFlavor
             * @see java.awt.datatransfer.DataFlavor#plainTextFlavor
             * @see java.io.Reader
             * @see java.awt.AWTPermission
             * @since JDK1.1
             */
            // @ts-ignore
            abstract getSystemClipboard(): java.awt.datatransfer.Clipboard
            /**
             * Gets the singleton instance of the system selection as a
             * <code>Clipboard</code> object. This allows an application to read and
             * modify the current, system-wide selection.
             * <p>
             * An application is responsible for updating the system selection whenever
             * the user selects text, using either the mouse or the keyboard.
             * Typically, this is implemented by installing a
             * <code>FocusListener</code> on all <code>Component</code>s which support
             * text selection, and, between <code>FOCUS_GAINED</code> and
             * <code>FOCUS_LOST</code> events delivered to that <code>Component</code>,
             * updating the system selection <code>Clipboard</code> when the selection
             * changes inside the <code>Component</code>. Properly updating the system
             * selection ensures that a Java application will interact correctly with
             * native applications and other Java applications running simultaneously
             * on the system. Note that <code>java.awt.TextComponent</code> and
             * <code>javax.swing.text.JTextComponent</code> already adhere to this
             * policy. When using these classes, and their subclasses, developers need
             * not write any additional code.
             * <p>
             * Some platforms do not support a system selection <code>Clipboard</code>.
             * On those platforms, this method will return <code>null</code>. In such a
             * case, an application is absolved from its responsibility to update the
             * system selection <code>Clipboard</code> as described above.
             * <p>
             * Each actual implementation of this method should first check if there
             * is a security manager installed. If there is, the method should call
             * the security manager's {@link SecurityManager#checkPermission
             * checkPermission} method to check {@code AWTPermission("accessClipboard")}.
             * @return the system selection as a <code>Clipboard</code>, or
             *          <code>null</code> if the native platform does not support a
             *          system selection <code>Clipboard</code>
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *             returns true
             * @see java.awt.datatransfer.Clipboard
             * @see java.awt.event.FocusListener
             * @see java.awt.event.FocusEvent#FOCUS_GAINED
             * @see java.awt.event.FocusEvent#FOCUS_LOST
             * @see TextComponent
             * @see javax.swing.text.JTextComponent
             * @see AWTPermission
             * @see GraphicsEnvironment#isHeadless
             * @since 1.4
             */
            // @ts-ignore
            getSystemSelection(): java.awt.datatransfer.Clipboard
            /**
             * Determines which modifier key is the appropriate accelerator
             * key for menu shortcuts.
             * <p>
             * Menu shortcuts, which are embodied in the
             * <code>MenuShortcut</code> class, are handled by the
             * <code>MenuBar</code> class.
             * <p>
             * By default, this method returns <code>Event.CTRL_MASK</code>.
             * Toolkit implementations should override this method if the
             * <b>Control</b> key isn't the correct key for accelerators.
             * @return the modifier mask on the <code>Event</code> class
             *                  that is used for menu shortcuts on this toolkit.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see java.awt.MenuBar
             * @see java.awt.MenuShortcut
             * @since JDK1.1
             */
            // @ts-ignore
            getMenuShortcutKeyMask(): int
            /**
             * Returns whether the given locking key on the keyboard is currently in
             * its "on" state.
             * Valid key codes are
             * {@link java.awt.event.KeyEvent#VK_CAPS_LOCK VK_CAPS_LOCK},
             * {@link java.awt.event.KeyEvent#VK_NUM_LOCK VK_NUM_LOCK},
             * {@link java.awt.event.KeyEvent#VK_SCROLL_LOCK VK_SCROLL_LOCK}, and
             * {@link java.awt.event.KeyEvent#VK_KANA_LOCK VK_KANA_LOCK}.
             * @exception java.lang.IllegalArgumentException if <code>keyCode</code>
             *  is not one of the valid key codes
             * @exception java.lang.UnsupportedOperationException if the host system doesn't
             *  allow getting the state of this key programmatically, or if the keyboard
             *  doesn't have this key
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since 1.3
             */
            // @ts-ignore
            getLockingKeyState(keyCode: number /*int*/): boolean
            /**
             * Sets the state of the given locking key on the keyboard.
             * Valid key codes are
             * {@link java.awt.event.KeyEvent#VK_CAPS_LOCK VK_CAPS_LOCK},
             * {@link java.awt.event.KeyEvent#VK_NUM_LOCK VK_NUM_LOCK},
             * {@link java.awt.event.KeyEvent#VK_SCROLL_LOCK VK_SCROLL_LOCK}, and
             * {@link java.awt.event.KeyEvent#VK_KANA_LOCK VK_KANA_LOCK}.
             * <p>
             * Depending on the platform, setting the state of a locking key may
             * involve event processing and therefore may not be immediately
             * observable through getLockingKeyState.
             * @exception java.lang.IllegalArgumentException if <code>keyCode</code>
             *  is not one of the valid key codes
             * @exception java.lang.UnsupportedOperationException if the host system doesn't
             *  allow setting the state of this key programmatically, or if the keyboard
             *  doesn't have this key
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since 1.3
             */
            // @ts-ignore
            setLockingKeyState(keyCode: number /*int*/, on: boolean): void
            /**
             * Give native peers the ability to query the native container
             * given a native component (eg the direct parent may be lightweight).
             */
            // @ts-ignore
            getNativeContainer(c: java.awt.Component): java.awt.Container
            /**
             * Creates a new custom cursor object.
             * If the image to display is invalid, the cursor will be hidden (made
             * completely transparent), and the hotspot will be set to (0, 0).
             * <p>Note that multi-frame images are invalid and may cause this
             * method to hang.
             * @param cursor the image to display when the cursor is activated
             * @param hotSpot the X and Y of the large cursor's hot spot; the
             *    hotSpot values must be less than the Dimension returned by
             *    <code>getBestCursorSize</code>
             * @param name a localized description of the cursor, for Java Accessibility use
             * @exception IndexOutOfBoundsException if the hotSpot values are outside
             *    the bounds of the cursor
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since 1.2
             */
            // @ts-ignore
            createCustomCursor(cursor: java.awt.Image, hotSpot: java.awt.Point, name: string): java.awt.Cursor
            /**
             * Returns the supported cursor dimension which is closest to the desired
             * sizes.  Systems which only support a single cursor size will return that
             * size regardless of the desired sizes.  Systems which don't support custom
             * cursors will return a dimension of 0, 0. <p>
             * Note:  if an image is used whose dimensions don't match a supported size
             * (as returned by this method), the Toolkit implementation will attempt to
             * resize the image to a supported size.
             * Since converting low-resolution images is difficult,
             * no guarantees are made as to the quality of a cursor image which isn't a
             * supported size.  It is therefore recommended that this method
             * be called and an appropriate image used so no image conversion is made.
             * @param preferredWidth the preferred cursor width the component would like
             *  to use.
             * @param preferredHeight the preferred cursor height the component would like
             *  to use.
             * @return the closest matching supported cursor size, or a dimension of 0,0 if
             *  the Toolkit implementation doesn't support custom cursors.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since 1.2
             */
            // @ts-ignore
            getBestCursorSize(preferredWidth: number /*int*/, preferredHeight: number /*int*/): java.awt.Dimension
            /**
             * Returns the maximum number of colors the Toolkit supports in a custom cursor
             * palette.<p>
             * Note: if an image is used which has more colors in its palette than
             * the supported maximum, the Toolkit implementation will attempt to flatten the
             * palette to the maximum.  Since converting low-resolution images is difficult,
             * no guarantees are made as to the quality of a cursor image which has more
             * colors than the system supports.  It is therefore recommended that this method
             * be called and an appropriate image used so no image conversion is made.
             * @return the maximum number of colors, or zero if custom cursors are not
             *  supported by this Toolkit implementation.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since 1.2
             */
            // @ts-ignore
            getMaximumCursorColors(): int
            /**
             * Returns whether Toolkit supports this state for
             * <code>Frame</code>s.  This method tells whether the <em>UI
             * concept</em> of, say, maximization or iconification is
             * supported.  It will always return false for "compound" states
             * like <code>Frame.ICONIFIED|Frame.MAXIMIZED_VERT</code>.
             * In other words, the rule of thumb is that only queries with a
             * single frame state constant as an argument are meaningful.
             * <p>Note that supporting a given concept is a platform-
             * dependent feature. Due to native limitations the Toolkit
             * object may report a particular state as supported, however at
             * the same time the Toolkit object will be unable to apply the
             * state to a given frame.  This circumstance has two following
             * consequences:
             * <ul>
             * <li>Only the return value of {@code false} for the present
             * method actually indicates that the given state is not
             * supported. If the method returns {@code true} the given state
             * may still be unsupported and/or unavailable for a particular
             * frame.
             * <li>The developer should consider examining the value of the
             * {@link java.awt.event.WindowEvent#getNewState} method of the
             * {@code WindowEvent} received through the {@link
             * java.awt.event.WindowStateListener}, rather than assuming
             * that the state given to the {@code setExtendedState()} method
             * will be definitely applied. For more information see the
             * documentation for the {@link Frame#setExtendedState} method.
             * </ul>
             * @param state one of named frame state constants.
             * @return <code>true</code> is this frame state is supported by
             *      this Toolkit implementation, <code>false</code> otherwise.
             * @exception HeadlessException
             *      if <code>GraphicsEnvironment.isHeadless()</code>
             *      returns <code>true</code>.
             * @see java.awt.Window#addWindowStateListener
             * @since 1.4
             */
            // @ts-ignore
            isFrameStateSupported(state: number /*int*/): boolean
            /**
             * Gets a property with the specified key and default.
             * This method returns defaultValue if the property is not found.
             */
            // @ts-ignore
            getProperty(key: string, defaultValue: string): java.lang.String
            /**
             * Get the application's or applet's EventQueue instance.
             * Depending on the Toolkit implementation, different EventQueues
             * may be returned for different applets.  Applets should
             * therefore not assume that the EventQueue instance returned
             * by this method will be shared by other applets or the system.
             * <p> If there is a security manager then its
             * {@link SecurityManager#checkPermission checkPermission} method
             * is called to check {@code AWTPermission("accessEventQueue")}.
             * @return the <code>EventQueue</code> object
             * @throws SecurityException
             *           if a security manager is set and it denies access to
             *           the {#code EventQueue}
             * @see java.awt.AWTPermission
             */
            // @ts-ignore
            getSystemEventQueue(): java.awt.EventQueue
            /**
             * Gets the application's or applet's <code>EventQueue</code>
             * instance, without checking access.  For security reasons,
             * this can only be called from a <code>Toolkit</code> subclass.
             * @return the <code>EventQueue</code> object
             */
            // @ts-ignore
            abstract getSystemEventQueueImpl(): java.awt.EventQueue
            /**
             * Creates the peer for a DragSourceContext.
             * Always throws InvalidDndOperationException if
             * GraphicsEnvironment.isHeadless() returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            abstract createDragSourceContextPeer(dge: java.awt.dnd.DragGestureEvent): java.awt.dnd.peer.DragSourceContextPeer
            /**
             * Creates a concrete, platform dependent, subclass of the abstract
             * DragGestureRecognizer class requested, and associates it with the
             * DragSource, Component and DragGestureListener specified.
             * subclasses should override this to provide their own implementation
             * @param abstractRecognizerClass The abstract class of the required recognizer
             * @param ds                      The DragSource
             * @param c                       The Component target for the DragGestureRecognizer
             * @param srcActions              The actions permitted for the gesture
             * @param dgl                     The DragGestureListener
             * @return the new object or null.  Always returns null if
             *  GraphicsEnvironment.isHeadless() returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            createDragGestureRecognizer<T extends java.awt.dnd.DragGestureRecognizer>(abstractRecognizerClass: java.lang.Class<T>, ds: java.awt.dnd.DragSource, c: java.awt.Component, srcActions: number /*int*/, dgl: java.awt.dnd.DragGestureListener): T
            /**
             * Obtains a value for the specified desktop property.
             * A desktop property is a uniquely named value for a resource that
             * is Toolkit global in nature. Usually it also is an abstract
             * representation for an underlying platform dependent desktop setting.
             * For more information on desktop properties supported by the AWT see
             * <a href="doc-files/DesktopProperties.html">AWT Desktop Properties</a>.
             */
            // @ts-ignore
            getDesktopProperty(propertyName: string): java.lang.Object
            /**
             * Sets the named desktop property to the specified value and fires a
             * property change event to notify any listeners that the value has changed.
             */
            // @ts-ignore
            setDesktopProperty(name: string, newValue: any): void
            /**
             * an opportunity to lazily evaluate desktop property values.
             */
            // @ts-ignore
            lazilyLoadDesktopProperty(name: string): java.lang.Object
            /**
             * initializeDesktopProperties
             */
            // @ts-ignore
            initializeDesktopProperties(): void
            /**
             * Adds the specified property change listener for the named desktop
             * property. When a {@link java.beans.PropertyChangeListenerProxy} object is added,
             * its property name is ignored, and the wrapped listener is added.
             * If {@code name} is {@code null} or {@code pcl} is {@code null},
             * no exception is thrown and no action is performed.
             * @param name The name of the property to listen for
             * @param pcl The property change listener
             * @see PropertyChangeSupport#addPropertyChangeListener(String,
             *                 PropertyChangeListener)
             * @since 1.2
             */
            // @ts-ignore
            addPropertyChangeListener(name: string, pcl: java.beans.PropertyChangeListener): void
            /**
             * Removes the specified property change listener for the named
             * desktop property. When a {@link java.beans.PropertyChangeListenerProxy} object
             * is removed, its property name is ignored, and
             * the wrapped listener is removed.
             * If {@code name} is {@code null} or {@code pcl} is {@code null},
             * no exception is thrown and no action is performed.
             * @param name The name of the property to remove
             * @param pcl The property change listener
             * @see PropertyChangeSupport#removePropertyChangeListener(String,
             *                 PropertyChangeListener)
             * @since 1.2
             */
            // @ts-ignore
            removePropertyChangeListener(name: string, pcl: java.beans.PropertyChangeListener): void
            /**
             * Returns an array of all the property change listeners
             * registered on this toolkit. The returned array
             * contains {@link java.beans.PropertyChangeListenerProxy} objects
             * that associate listeners with the names of desktop properties.
             * @return all of this toolkit's {#link PropertyChangeListener}
             *          objects wrapped in {@code java.beans.PropertyChangeListenerProxy} objects
             *          or an empty array  if no listeners are added
             * @see PropertyChangeSupport#getPropertyChangeListeners()
             * @since 1.4
             */
            // @ts-ignore
            getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
            /**
             * Returns an array of all property change listeners
             * associated with the specified name of a desktop property.
             * @param propertyName the named property
             * @return all of the {#code PropertyChangeListener} objects
             *          associated with the specified name of a desktop property
             *          or an empty array if no such listeners are added
             * @see PropertyChangeSupport#getPropertyChangeListeners(String)
             * @since 1.4
             */
            // @ts-ignore
            getPropertyChangeListeners(propertyName: string): java.beans.PropertyChangeListener[]
            /**
             * Returns whether the always-on-top mode is supported by this toolkit.
             * To detect whether the always-on-top mode is supported for a
             * particular Window, use {@link Window#isAlwaysOnTopSupported}.
             * @return <code>true</code>, if current toolkit supports the always-on-top mode,
             *      otherwise returns <code>false</code>
             * @see Window#isAlwaysOnTopSupported
             * @see Window#setAlwaysOnTop(boolean)
             * @since 1.6
             */
            // @ts-ignore
            isAlwaysOnTopSupported(): boolean
            /**
             * Returns whether the given modality type is supported by this toolkit. If
             * a dialog with unsupported modality type is created, then
             * <code>Dialog.ModalityType.MODELESS</code> is used instead.
             * @param modalityType modality type to be checked for support by this toolkit
             * @return <code>true</code>, if current toolkit supports given modality
             *      type, <code>false</code> otherwise
             * @see java.awt.Dialog.ModalityType
             * @see java.awt.Dialog#getModalityType
             * @see java.awt.Dialog#setModalityType
             * @since 1.6
             */
            // @ts-ignore
            abstract isModalityTypeSupported(modalityType: java.awt.Dialog.ModalityType): boolean
            /**
             * Returns whether the given modal exclusion type is supported by this
             * toolkit. If an unsupported modal exclusion type property is set on a window,
             * then <code>Dialog.ModalExclusionType.NO_EXCLUDE</code> is used instead.
             * @param modalExclusionType modal exclusion type to be checked for support by this toolkit
             * @return <code>true</code>, if current toolkit supports given modal exclusion
             *      type, <code>false</code> otherwise
             * @see java.awt.Dialog.ModalExclusionType
             * @see java.awt.Window#getModalExclusionType
             * @see java.awt.Window#setModalExclusionType
             * @since 1.6
             */
            // @ts-ignore
            abstract isModalExclusionTypeSupported(modalExclusionType: java.awt.Dialog.ModalExclusionType): boolean
            /**
             * Adds an AWTEventListener to receive all AWTEvents dispatched
             * system-wide that conform to the given <code>eventMask</code>.
             * <p>
             * First, if there is a security manager, its <code>checkPermission</code>
             * method is called with an
             * <code>AWTPermission("listenToAllAWTEvents")</code> permission.
             * This may result in a SecurityException.
             * <p>
             * <code>eventMask</code> is a bitmask of event types to receive.
             * It is constructed by bitwise OR-ing together the event masks
             * defined in <code>AWTEvent</code>.
             * <p>
             * Note:  event listener use is not recommended for normal
             * application use, but are intended solely to support special
             * purpose facilities including support for accessibility,
             * event record/playback, and diagnostic tracing.
             * If listener is null, no exception is thrown and no action is performed.
             * @param listener   the event listener.
             * @param eventMask  the bitmask of event types to receive
             * @throws SecurityException
             *         if a security manager exists and its
             *         <code>checkPermission</code> method doesn't allow the operation.
             * @see #removeAWTEventListener
             * @see #getAWTEventListeners
             * @see SecurityManager#checkPermission
             * @see java.awt.AWTEvent
             * @see java.awt.AWTPermission
             * @see java.awt.event.AWTEventListener
             * @see java.awt.event.AWTEventListenerProxy
             * @since 1.2
             */
            // @ts-ignore
            addAWTEventListener(listener: java.awt.event.AWTEventListener, eventMask: number /*long*/): void
            /**
             * Removes an AWTEventListener from receiving dispatched AWTEvents.
             * <p>
             * First, if there is a security manager, its <code>checkPermission</code>
             * method is called with an
             * <code>AWTPermission("listenToAllAWTEvents")</code> permission.
             * This may result in a SecurityException.
             * <p>
             * Note:  event listener use is not recommended for normal
             * application use, but are intended solely to support special
             * purpose facilities including support for accessibility,
             * event record/playback, and diagnostic tracing.
             * If listener is null, no exception is thrown and no action is performed.
             * @param listener   the event listener.
             * @throws SecurityException
             *         if a security manager exists and its
             *         <code>checkPermission</code> method doesn't allow the operation.
             * @see #addAWTEventListener
             * @see #getAWTEventListeners
             * @see SecurityManager#checkPermission
             * @see java.awt.AWTEvent
             * @see java.awt.AWTPermission
             * @see java.awt.event.AWTEventListener
             * @see java.awt.event.AWTEventListenerProxy
             * @since 1.2
             */
            // @ts-ignore
            removeAWTEventListener(listener: java.awt.event.AWTEventListener): void
            /**
             * Returns an array of all the <code>AWTEventListener</code>s
             * registered on this toolkit.
             * If there is a security manager, its {@code checkPermission}
             * method is called with an
             * {@code AWTPermission("listenToAllAWTEvents")} permission.
             * This may result in a SecurityException.
             * Listeners can be returned
             * within <code>AWTEventListenerProxy</code> objects, which also contain
             * the event mask for the given listener.
             * Note that listener objects
             * added multiple times appear only once in the returned array.
             * @return all of the <code>AWTEventListener</code>s or an empty
             *          array if no listeners are currently registered
             * @throws SecurityException
             *         if a security manager exists and its
             *         <code>checkPermission</code> method doesn't allow the operation.
             * @see #addAWTEventListener
             * @see #removeAWTEventListener
             * @see SecurityManager#checkPermission
             * @see java.awt.AWTEvent
             * @see java.awt.AWTPermission
             * @see java.awt.event.AWTEventListener
             * @see java.awt.event.AWTEventListenerProxy
             * @since 1.4
             */
            // @ts-ignore
            getAWTEventListeners(): java.awt.event.AWTEventListener[]
            /**
             * Returns an array of all the <code>AWTEventListener</code>s
             * registered on this toolkit which listen to all of the event
             * types specified in the {@code eventMask} argument.
             * If there is a security manager, its {@code checkPermission}
             * method is called with an
             * {@code AWTPermission("listenToAllAWTEvents")} permission.
             * This may result in a SecurityException.
             * Listeners can be returned
             * within <code>AWTEventListenerProxy</code> objects, which also contain
             * the event mask for the given listener.
             * Note that listener objects
             * added multiple times appear only once in the returned array.
             * @param eventMask the bitmask of event types to listen for
             * @return all of the <code>AWTEventListener</code>s registered
             *          on this toolkit for the specified
             *          event types, or an empty array if no such listeners
             *          are currently registered
             * @throws SecurityException
             *         if a security manager exists and its
             *         <code>checkPermission</code> method doesn't allow the operation.
             * @see #addAWTEventListener
             * @see #removeAWTEventListener
             * @see SecurityManager#checkPermission
             * @see java.awt.AWTEvent
             * @see java.awt.AWTPermission
             * @see java.awt.event.AWTEventListener
             * @see java.awt.event.AWTEventListenerProxy
             * @since 1.4
             */
            // @ts-ignore
            getAWTEventListeners(eventMask: number /*long*/): java.awt.event.AWTEventListener[]
            /**
             * Returns a map of visual attributes for the abstract level description
             * of the given input method highlight, or null if no mapping is found.
             * The style field of the input method highlight is ignored. The map
             * returned is unmodifiable.
             * @param highlight input method highlight
             * @return style attribute map, or <code>null</code>
             * @exception HeadlessException if
             *      <code>GraphicsEnvironment.isHeadless</code> returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since 1.3
             */
            // @ts-ignore
            abstract mapInputMethodHighlight(highlight: java.awt.im.InputMethodHighlight): java.util.Map<java.awt.font.TextAttribute, ?>
            /**
             * Reports whether events from extra mouse buttons are allowed to be processed and posted into
             * {@code EventQueue}.
             * <br>
             * To change the returned value it is necessary to set the {@code sun.awt.enableExtraMouseButtons}
             * property before the {@code Toolkit} class initialization. This setting could be done on the application
             * startup by the following command:
             * <pre>
             * java -Dsun.awt.enableExtraMouseButtons=false Application
             * </pre>
             * Alternatively, the property could be set in the application by using the following code:
             * <pre>
             * System.setProperty("sun.awt.enableExtraMouseButtons", "true");
             * </pre>
             * before the {@code Toolkit} class initialization.
             * If not set by the time of the {@code Toolkit} class initialization, this property will be
             * initialized with {@code true}.
             * Changing this value after the {@code Toolkit} class initialization will have no effect.
             * <p>
             * @exception HeadlessException if GraphicsEnvironment.isHeadless() returns true
             * @return {#code true} if events from extra mouse buttons are allowed to be processed and posted;
             *          {@code false} otherwise
             * @see System#getProperty(String propertyName)
             * @see System#setProperty(String propertyName, String value)
             * @see java.awt.EventQueue
             * @since 1.7
             */
            // @ts-ignore
            areExtraMouseButtonsEnabled(): boolean
        }
    }
}
