declare namespace java {
    namespace awt {
        /**
         * A <code>TrayIcon</code> object represents a tray icon that can be
         * added to the {@link SystemTray system tray}. A
         * <code>TrayIcon</code> can have a tooltip (text), an image, a popup
         * menu, and a set of listeners associated with it.
         * <p>A <code>TrayIcon</code> can generate various {@link MouseEvent
         * MouseEvents} and supports adding corresponding listeners to receive
         * notification of these events.  <code>TrayIcon</code> processes some
         * of the events by itself.  For example, by default, when the
         * right-mouse click is performed on the <code>TrayIcon</code> it
         * displays the specified popup menu.  When the mouse hovers
         * over the <code>TrayIcon</code> the tooltip is displayed.
         * <p><strong>Note:</strong> When the <code>MouseEvent</code> is
         * dispatched to its registered listeners its <code>component</code>
         * property will be set to <code>null</code>.  (See {@link
         * java.awt.event.ComponentEvent#getComponent}) The
         * <code>source</code> property will be set to this
         * <code>TrayIcon</code>. (See {@link
         * java.util.EventObject#getSource})
         * <p><b>Note:</b> A well-behaved {@link TrayIcon} implementation
         * will assign different gestures to showing a popup menu and
         * selecting a tray icon.
         * <p>A <code>TrayIcon</code> can generate an {@link ActionEvent
         * ActionEvent}.  On some platforms, this occurs when the user selects
         * the tray icon using either the mouse or keyboard.
         * <p>If a SecurityManager is installed, the AWTPermission
         * {@code accessSystemTray} must be granted in order to create
         * a {@code TrayIcon}. Otherwise the constructor will throw a
         * SecurityException.
         * <p> See the {@link SystemTray} class overview for an example on how
         * to use the <code>TrayIcon</code> API.
         * @since 1.6
         * @see SystemTray#add
         * @see java.awt.event.ComponentEvent#getComponent
         * @see java.util.EventObject#getSource
         * @author Bino George
         * @author Denis Mikhalkin
         * @author Sharon Zakhour
         * @author Anton Tarasov
         */
        // @ts-ignore
        class TrayIcon extends java.lang.Object {
            /**
             * Creates a <code>TrayIcon</code> with the specified image.
             * @param image the <code>Image</code> to be used
             * @throws IllegalArgumentException if <code>image</code> is
             *  <code>null</code>
             * @throws UnsupportedOperationException if the system tray isn't
             *  supported by the current platform
             * @throws HeadlessException if
             *  {#code GraphicsEnvironment.isHeadless()} returns {@code true}
             * @throws SecurityException if {#code accessSystemTray} permission
             *  is not granted
             * @see SystemTray#add(TrayIcon)
             * @see TrayIcon#TrayIcon(Image, String, PopupMenu)
             * @see TrayIcon#TrayIcon(Image, String)
             * @see SecurityManager#checkPermission
             * @see AWTPermission
             */
            // @ts-ignore
            constructor(image: java.awt.Image)
            /**
             * Creates a <code>TrayIcon</code> with the specified image and
             * tooltip text.
             * @param image the <code>Image</code> to be used
             * @param tooltip the string to be used as tooltip text; if the
             *  value is <code>null</code> no tooltip is shown
             * @throws IllegalArgumentException if <code>image</code> is
             *  <code>null</code>
             * @throws UnsupportedOperationException if the system tray isn't
             *  supported by the current platform
             * @throws HeadlessException if
             *  {#code GraphicsEnvironment.isHeadless()} returns {@code true}
             * @throws SecurityException if {#code accessSystemTray} permission
             *  is not granted
             * @see SystemTray#add(TrayIcon)
             * @see TrayIcon#TrayIcon(Image)
             * @see TrayIcon#TrayIcon(Image, String, PopupMenu)
             * @see SecurityManager#checkPermission
             * @see AWTPermission
             */
            // @ts-ignore
            constructor(image: java.awt.Image, tooltip: string)
            /**
             * Creates a <code>TrayIcon</code> with the specified image,
             * tooltip and popup menu.
             * @param image the <code>Image</code> to be used
             * @param tooltip the string to be used as tooltip text; if the
             *  value is <code>null</code> no tooltip is shown
             * @param popup the menu to be used for the tray icon's popup
             *  menu; if the value is <code>null</code> no popup menu is shown
             * @throws IllegalArgumentException if <code>image</code> is <code>null</code>
             * @throws UnsupportedOperationException if the system tray isn't
             *  supported by the current platform
             * @throws HeadlessException if
             *  {#code GraphicsEnvironment.isHeadless()} returns {@code true}
             * @throws SecurityException if {#code accessSystemTray} permission
             *  is not granted
             * @see SystemTray#add(TrayIcon)
             * @see TrayIcon#TrayIcon(Image, String)
             * @see TrayIcon#TrayIcon(Image)
             * @see PopupMenu
             * @see MouseListener
             * @see #addMouseListener(MouseListener)
             * @see SecurityManager#checkPermission
             * @see AWTPermission
             */
            // @ts-ignore
            constructor(image: java.awt.Image, tooltip: string, popup: java.awt.PopupMenu)
            /**
             * Sets the image for this <code>TrayIcon</code>.  The previous
             * tray icon image is discarded without calling the {@link
             * java.awt.Image#flush} method &#151; you will need to call it
             * manually.
             * <p> If the image represents an animated image, it will be
             * animated automatically.
             * <p> See the {@link #setImageAutoSize(boolean)} property for
             * details on the size of the displayed image.
             * <p> Calling this method with the same image that is currently
             * being used has no effect.
             * @throws NullPointerException if <code>image</code> is <code>null</code>
             * @param image the non-null <code>Image</code> to be used
             * @see #getImage
             * @see Image
             * @see SystemTray#add(TrayIcon)
             * @see TrayIcon#TrayIcon(Image, String)
             */
            // @ts-ignore
            setImage(image: java.awt.Image): void
            /**
             * Returns the current image used for this <code>TrayIcon</code>.
             * @return the image
             * @see #setImage(Image)
             * @see Image
             */
            // @ts-ignore
            getImage(): java.awt.Image
            /**
             * Sets the popup menu for this <code>TrayIcon</code>.  If
             * <code>popup</code> is <code>null</code>, no popup menu will be
             * associated with this <code>TrayIcon</code>.
             * <p>Note that this <code>popup</code> must not be added to any
             * parent before or after it is set on the tray icon.  If you add
             * it to some parent, the <code>popup</code> may be removed from
             * that parent.
             * <p>The {@code popup} can be set on one {@code TrayIcon} only.
             * Setting the same popup on multiple {@code TrayIcon}s will cause
             * an {@code IllegalArgumentException}.
             * <p><strong>Note:</strong> Some platforms may not support
             * showing the user-specified popup menu component when the user
             * right-clicks the tray icon.  In this situation, either no menu
             * will be displayed or, on some systems, a native version of the
             * menu may be displayed.
             * @throws IllegalArgumentException if the {#code popup} is already
             *  set for another {@code TrayIcon}
             * @param popup a <code>PopupMenu</code> or <code>null</code> to
             *  remove any popup menu
             * @see #getPopupMenu
             */
            // @ts-ignore
            setPopupMenu(popup: java.awt.PopupMenu): void
            /**
             * Returns the popup menu associated with this <code>TrayIcon</code>.
             * @return the popup menu or <code>null</code> if none exists
             * @see #setPopupMenu(PopupMenu)
             */
            // @ts-ignore
            getPopupMenu(): java.awt.PopupMenu
            /**
             * Sets the tooltip string for this <code>TrayIcon</code>. The
             * tooltip is displayed automatically when the mouse hovers over
             * the icon.  Setting the tooltip to <code>null</code> removes any
             * tooltip text.
             * When displayed, the tooltip string may be truncated on some platforms;
             * the number of characters that may be displayed is platform-dependent.
             * @param tooltip the string for the tooltip; if the value is
             *  <code>null</code> no tooltip is shown
             * @see #getToolTip
             */
            // @ts-ignore
            setToolTip(tooltip: string): void
            /**
             * Returns the tooltip string associated with this
             * <code>TrayIcon</code>.
             * @return the tooltip string or <code>null</code> if none exists
             * @see #setToolTip(String)
             */
            // @ts-ignore
            getToolTip(): java.lang.String
            /**
             * Sets the auto-size property.  Auto-size determines whether the
             * tray image is automatically sized to fit the space allocated
             * for the image on the tray.  By default, the auto-size property
             * is set to <code>false</code>.
             * <p> If auto-size is <code>false</code>, and the image size
             * doesn't match the tray icon space, the image is painted as-is
             * inside that space &#151; if larger than the allocated space, it will
             * be cropped.
             * <p> If auto-size is <code>true</code>, the image is stretched or shrunk to
             * fit the tray icon space.
             * @param autosize <code>true</code> to auto-size the image,
             *  <code>false</code> otherwise
             * @see #isImageAutoSize
             */
            // @ts-ignore
            setImageAutoSize(autosize: boolean): void
            /**
             * Returns the value of the auto-size property.
             * @return <code>true</code> if the image will be auto-sized,
             *  <code>false</code> otherwise
             * @see #setImageAutoSize(boolean)
             */
            // @ts-ignore
            isImageAutoSize(): boolean
            /**
             * Adds the specified mouse listener to receive mouse events from
             * this <code>TrayIcon</code>.  Calling this method with a
             * <code>null</code> value has no effect.
             * <p><b>Note</b>: The {@code MouseEvent}'s coordinates (received
             * from the {@code TrayIcon}) are relative to the screen, not the
             * {@code TrayIcon}.
             * <p> <b>Note: </b>The <code>MOUSE_ENTERED</code> and
             * <code>MOUSE_EXITED</code> mouse events are not supported.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param listener the mouse listener
             * @see java.awt.event.MouseEvent
             * @see java.awt.event.MouseListener
             * @see #removeMouseListener(MouseListener)
             * @see #getMouseListeners
             */
            // @ts-ignore
            addMouseListener(listener: java.awt.event.MouseListener): void
            /**
             * Removes the specified mouse listener.  Calling this method with
             * <code>null</code> or an invalid value has no effect.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param listener   the mouse listener
             * @see java.awt.event.MouseEvent
             * @see java.awt.event.MouseListener
             * @see #addMouseListener(MouseListener)
             * @see #getMouseListeners
             */
            // @ts-ignore
            removeMouseListener(listener: java.awt.event.MouseListener): void
            /**
             * Returns an array of all the mouse listeners
             * registered on this <code>TrayIcon</code>.
             * @return all of the <code>MouseListeners</code> registered on
             *  this <code>TrayIcon</code> or an empty array if no mouse
             *  listeners are currently registered
             * @see #addMouseListener(MouseListener)
             * @see #removeMouseListener(MouseListener)
             * @see java.awt.event.MouseListener
             */
            // @ts-ignore
            getMouseListeners(): java.awt.event.MouseListener[]
            /**
             * Adds the specified mouse listener to receive mouse-motion
             * events from this <code>TrayIcon</code>.  Calling this method
             * with a <code>null</code> value has no effect.
             * <p><b>Note</b>: The {@code MouseEvent}'s coordinates (received
             * from the {@code TrayIcon}) are relative to the screen, not the
             * {@code TrayIcon}.
             * <p> <b>Note: </b>The <code>MOUSE_DRAGGED</code> mouse event is not supported.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param listener   the mouse listener
             * @see java.awt.event.MouseEvent
             * @see java.awt.event.MouseMotionListener
             * @see #removeMouseMotionListener(MouseMotionListener)
             * @see #getMouseMotionListeners
             */
            // @ts-ignore
            addMouseMotionListener(listener: java.awt.event.MouseMotionListener): void
            /**
             * Removes the specified mouse-motion listener.  Calling this method with
             * <code>null</code> or an invalid value has no effect.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param listener   the mouse listener
             * @see java.awt.event.MouseEvent
             * @see java.awt.event.MouseMotionListener
             * @see #addMouseMotionListener(MouseMotionListener)
             * @see #getMouseMotionListeners
             */
            // @ts-ignore
            removeMouseMotionListener(listener: java.awt.event.MouseMotionListener): void
            /**
             * Returns an array of all the mouse-motion listeners
             * registered on this <code>TrayIcon</code>.
             * @return all of the <code>MouseInputListeners</code> registered on
             *  this <code>TrayIcon</code> or an empty array if no mouse
             *  listeners are currently registered
             * @see #addMouseMotionListener(MouseMotionListener)
             * @see #removeMouseMotionListener(MouseMotionListener)
             * @see java.awt.event.MouseMotionListener
             */
            // @ts-ignore
            getMouseMotionListeners(): java.awt.event.MouseMotionListener[]
            /**
             * Returns the command name of the action event fired by this tray icon.
             * @return the action command name, or <code>null</code> if none exists
             * @see #addActionListener(ActionListener)
             * @see #setActionCommand(String)
             */
            // @ts-ignore
            getActionCommand(): java.lang.String
            /**
             * Sets the command name for the action event fired by this tray
             * icon.  By default, this action command is set to
             * <code>null</code>.
             * @param command  a string used to set the tray icon's
             *                  action command.
             * @see java.awt.event.ActionEvent
             * @see #addActionListener(ActionListener)
             * @see #getActionCommand
             */
            // @ts-ignore
            setActionCommand(command: string): void
            /**
             * Adds the specified action listener to receive
             * <code>ActionEvent</code>s from this <code>TrayIcon</code>.
             * Action events usually occur when a user selects the tray icon,
             * using either the mouse or keyboard.  The conditions in which
             * action events are generated are platform-dependent.
             * <p>Calling this method with a <code>null</code> value has no
             * effect.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param listener the action listener
             * @see #removeActionListener
             * @see #getActionListeners
             * @see java.awt.event.ActionListener
             * @see #setActionCommand(String)
             */
            // @ts-ignore
            addActionListener(listener: java.awt.event.ActionListener): void
            /**
             * Removes the specified action listener.  Calling this method with
             * <code>null</code> or an invalid value has no effect.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param listener   the action listener
             * @see java.awt.event.ActionEvent
             * @see java.awt.event.ActionListener
             * @see #addActionListener(ActionListener)
             * @see #getActionListeners
             * @see #setActionCommand(String)
             */
            // @ts-ignore
            removeActionListener(listener: java.awt.event.ActionListener): void
            /**
             * Returns an array of all the action listeners
             * registered on this <code>TrayIcon</code>.
             * @return all of the <code>ActionListeners</code> registered on
             *  this <code>TrayIcon</code> or an empty array if no action
             *  listeners are currently registered
             * @see #addActionListener(ActionListener)
             * @see #removeActionListener(ActionListener)
             * @see java.awt.event.ActionListener
             */
            // @ts-ignore
            getActionListeners(): java.awt.event.ActionListener[]
            /**
             * Displays a popup message near the tray icon.  The message will
             * disappear after a time or if the user clicks on it.  Clicking
             * on the message may trigger an {@code ActionEvent}.
             * <p>Either the caption or the text may be <code>null</code>, but an
             * <code>NullPointerException</code> is thrown if both are
             * <code>null</code>.
             * When displayed, the caption or text strings may be truncated on
             * some platforms; the number of characters that may be displayed is
             * platform-dependent.
             * <p><strong>Note:</strong> Some platforms may not support
             * showing a message.
             * @param caption the caption displayed above the text, usually in
             *  bold; may be <code>null</code>
             * @param text the text displayed for the particular message; may be
             *  <code>null</code>
             * @param messageType an enum indicating the message type
             * @throws NullPointerException if both <code>caption</code>
             *  and <code>text</code> are <code>null</code>
             */
            // @ts-ignore
            displayMessage(caption: string, text: string, messageType: java.awt.TrayIcon.MessageType): void
            /**
             * Returns the size, in pixels, of the space that the tray icon
             * occupies in the system tray.  For the tray icon that is not yet
             * added to the system tray, the returned size is equal to the
             * result of the {@link SystemTray#getTrayIconSize}.
             * @return the size of the tray icon, in pixels
             * @see TrayIcon#setImageAutoSize(boolean)
             * @see java.awt.Image
             * @see TrayIcon#getSize()
             */
            // @ts-ignore
            getSize(): java.awt.Dimension
        }
    }
}
