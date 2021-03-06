declare namespace java {
    namespace awt {
        /**
         * All items in a menu must belong to the class
         * <code>MenuItem</code>, or one of its subclasses.
         * <p>
         * The default <code>MenuItem</code> object embodies
         * a simple labeled menu item.
         * <p>
         * This picture of a menu bar shows five menu items:
         * <IMG SRC="doc-files/MenuBar-1.gif" alt="The following text describes this graphic."
         * style="float:center; margin: 7px 10px;">
         * <br style="clear:left;">
         * The first two items are simple menu items, labeled
         * <code>"Basic"</code> and <code>"Simple"</code>.
         * Following these two items is a separator, which is itself
         * a menu item, created with the label <code>"-"</code>.
         * Next is an instance of <code>CheckboxMenuItem</code>
         * labeled <code>"Check"</code>. The final menu item is a
         * submenu labeled <code>"More&nbsp;Examples"</code>,
         * and this submenu is an instance of <code>Menu</code>.
         * <p>
         * When a menu item is selected, AWT sends an action event to
         * the menu item. Since the event is an
         * instance of <code>ActionEvent</code>, the <code>processEvent</code>
         * method examines the event and passes it along to
         * <code>processActionEvent</code>. The latter method redirects the
         * event to any <code>ActionListener</code> objects that have
         * registered an interest in action events generated by this
         * menu item.
         * <P>
         * Note that the subclass <code>Menu</code> overrides this behavior and
         * does not send any event to the frame until one of its subitems is
         * selected.
         * @author Sami Shaio
         */
        // @ts-ignore
        class MenuItem extends java.awt.MenuComponent implements javax.accessibility.Accessible {
            /**
             * Constructs a new MenuItem with an empty label and no keyboard
             * shortcut.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since JDK1.1
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new MenuItem with the specified label
             * and no keyboard shortcut. Note that use of "-" in
             * a label is reserved to indicate a separator between
             * menu items. By default, all menu items except for
             * separators are enabled.
             * @param label the label for this menu item.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since JDK1.0
             */
            // @ts-ignore
            constructor(label: java.lang.String | string)
            /**
             * Create a menu item with an associated keyboard shortcut.
             * Note that use of "-" in a label is reserved to indicate
             * a separator between menu items. By default, all menu
             * items except for separators are enabled.
             * @param label the label for this menu item.
             * @param s the instance of <code>MenuShortcut</code>
             *                        associated with this menu item.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(label: java.lang.String | string, s: java.awt.MenuShortcut)
            /**
             * Creates the menu item's peer.  The peer allows us to modify the
             * appearance of the menu item without changing its functionality.
             */
            // @ts-ignore
            public addNotify(): void
            /**
             * Gets the label for this menu item.
             * @return the label of this menu item, or <code>null</code>
             *                        if this menu item has no label.
             * @see java.awt.MenuItem#setLabel
             * @since JDK1.0
             */
            // @ts-ignore
            public getLabel(): string
            /**
             * Sets the label for this menu item to the specified label.
             * @param label   the new label, or <code>null</code> for no label.
             * @see java.awt.MenuItem#getLabel
             * @since JDK1.0
             */
            // @ts-ignore
            public setLabel(label: java.lang.String | string): void
            /**
             * Checks whether this menu item is enabled.
             * @see java.awt.MenuItem#setEnabled
             * @since JDK1.0
             */
            // @ts-ignore
            public isEnabled(): boolean
            /**
             * Sets whether or not this menu item can be chosen.
             * @param b  if <code>true</code>, enables this menu item;
             *                        if <code>false</code>, disables it.
             * @see java.awt.MenuItem#isEnabled
             * @since JDK1.1
             */
            // @ts-ignore
            public setEnabled(b: boolean): void
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>setEnabled(boolean)</code>.
             */
            // @ts-ignore
            public enable(): void
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>setEnabled(boolean)</code>.
             */
            // @ts-ignore
            public enable(b: boolean): void
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>setEnabled(boolean)</code>.
             */
            // @ts-ignore
            public disable(): void
            /**
             * Get the <code>MenuShortcut</code> object associated with this
             * menu item,
             * @return the menu shortcut associated with this menu item,
             *                    or <code>null</code> if none has been specified.
             * @see java.awt.MenuItem#setShortcut
             * @since JDK1.1
             */
            // @ts-ignore
            public getShortcut(): java.awt.MenuShortcut
            /**
             * Set the <code>MenuShortcut</code> object associated with this
             * menu item. If a menu shortcut is already associated with
             * this menu item, it is replaced.
             * @param s  the menu shortcut to associate
             *                            with this menu item.
             * @see java.awt.MenuItem#getShortcut
             * @since JDK1.1
             */
            // @ts-ignore
            public setShortcut(s: java.awt.MenuShortcut): void
            /**
             * Delete any <code>MenuShortcut</code> object associated
             * with this menu item.
             * @since JDK1.1
             */
            // @ts-ignore
            public deleteShortcut(): void
            /**
             * Enables event delivery to this menu item for events
             * to be defined by the specified event mask parameter
             * <p>
             * Since event types are automatically enabled when a listener for
             * that type is added to the menu item, this method only needs
             * to be invoked by subclasses of <code>MenuItem</code> which desire to
             * have the specified event types delivered to <code>processEvent</code>
             * regardless of whether a listener is registered.
             * @param eventsToEnable the event mask defining the event types
             * @see java.awt.MenuItem#processEvent
             * @see java.awt.MenuItem#disableEvents
             * @see java.awt.Component#enableEvents
             * @since JDK1.1
             */
            // @ts-ignore
            enableEvents(eventsToEnable: number /*long*/): void
            /**
             * Disables event delivery to this menu item for events
             * defined by the specified event mask parameter.
             * @param eventsToDisable the event mask defining the event types
             * @see java.awt.MenuItem#processEvent
             * @see java.awt.MenuItem#enableEvents
             * @see java.awt.Component#disableEvents
             * @since JDK1.1
             */
            // @ts-ignore
            disableEvents(eventsToDisable: number /*long*/): void
            /**
             * Sets the command name of the action event that is fired
             * by this menu item.
             * <p>
             * By default, the action command is set to the label of
             * the menu item.
             * @param command   the action command to be set
             *                                 for this menu item.
             * @see java.awt.MenuItem#getActionCommand
             * @since JDK1.1
             */
            // @ts-ignore
            public setActionCommand(command: java.lang.String | string): void
            /**
             * Gets the command name of the action event that is fired
             * by this menu item.
             * @see java.awt.MenuItem#setActionCommand
             * @since JDK1.1
             */
            // @ts-ignore
            public getActionCommand(): string
            /**
             * Adds the specified action listener to receive action events
             * from this menu item.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param l the action listener.
             * @see #removeActionListener
             * @see #getActionListeners
             * @see java.awt.event.ActionEvent
             * @see java.awt.event.ActionListener
             * @since JDK1.1
             */
            // @ts-ignore
            public addActionListener(l: java.awt.event.ActionListener): void
            /**
             * Removes the specified action listener so it no longer receives
             * action events from this menu item.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param l the action listener.
             * @see #addActionListener
             * @see #getActionListeners
             * @see java.awt.event.ActionEvent
             * @see java.awt.event.ActionListener
             * @since JDK1.1
             */
            // @ts-ignore
            public removeActionListener(l: java.awt.event.ActionListener): void
            /**
             * Returns an array of all the action listeners
             * registered on this menu item.
             * @return all of this menu item's <code>ActionListener</code>s
             *          or an empty array if no action
             *          listeners are currently registered
             * @see #addActionListener
             * @see #removeActionListener
             * @see java.awt.event.ActionEvent
             * @see java.awt.event.ActionListener
             * @since 1.4
             */
            // @ts-ignore
            public getActionListeners(): java.awt.event.ActionListener[]
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>MenuItem</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>MenuItem</code> <code>m</code>
             * for its action listeners with the following code:
             * <pre>ActionListener[] als = (ActionListener[])(m.getListeners(ActionListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             * @param listenerType the type of listeners requested; this parameter
             *           should specify an interface that descends from
             *           <code>java.util.EventListener</code>
             * @return an array of all objects registered as
             *           <code><em>Foo</em>Listener</code>s on this menu item,
             *           or an empty array if no such
             *           listeners have been added
             * @exception ClassCastException if <code>listenerType</code>
             *           doesn't specify a class or interface that implements
             *           <code>java.util.EventListener</code>
             * @see #getActionListeners
             * @since 1.3
             */
            // @ts-ignore
            public getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
            /**
             * Processes events on this menu item. If the event is an
             * instance of <code>ActionEvent</code>, it invokes
             * <code>processActionEvent</code>, another method
             * defined by <code>MenuItem</code>.
             * <p>
             * Currently, menu items only support action events.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             * @param e the event
             * @see java.awt.MenuItem#processActionEvent
             * @since JDK1.1
             */
            // @ts-ignore
            processEvent(e: java.awt.AWTEvent): void
            /**
             * Processes action events occurring on this menu item,
             * by dispatching them to any registered
             * <code>ActionListener</code> objects.
             * This method is not called unless action events are
             * enabled for this component. Action events are enabled
             * when one of the following occurs:
             * <ul>
             * <li>An <code>ActionListener</code> object is registered
             * via <code>addActionListener</code>.
             * <li>Action events are enabled via <code>enableEvents</code>.
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             * @param e the action event
             * @see java.awt.event.ActionEvent
             * @see java.awt.event.ActionListener
             * @see java.awt.MenuItem#enableEvents
             * @since JDK1.1
             */
            // @ts-ignore
            processActionEvent(e: java.awt.event.ActionEvent): void
            /**
             * Returns a string representing the state of this <code>MenuItem</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             * @return the parameter string of this menu item
             */
            // @ts-ignore
            public paramString(): string
            /**
             * Gets the AccessibleContext associated with this MenuItem.
             * For menu items, the AccessibleContext takes the form of an
             * AccessibleAWTMenuItem.
             * A new AccessibleAWTMenuItem instance is created if necessary.
             * @return an AccessibleAWTMenuItem that serves as the
             *          AccessibleContext of this MenuItem
             * @since 1.3
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
