declare namespace java {
    namespace awt {
        /**
         * The <code>List</code> component presents the user with a
         * scrolling list of text items. The list can be set up so that
         * the user can choose either one item or multiple items.
         * <p>
         * For example, the code&nbsp;.&nbsp;.&nbsp;.
         * <hr><blockquote><pre>
         * List lst = new List(4, false);
         * lst.add("Mercury");
         * lst.add("Venus");
         * lst.add("Earth");
         * lst.add("JavaSoft");
         * lst.add("Mars");
         * lst.add("Jupiter");
         * lst.add("Saturn");
         * lst.add("Uranus");
         * lst.add("Neptune");
         * lst.add("Pluto");
         * cnt.add(lst);
         * </pre></blockquote><hr>
         * <p>
         * where <code>cnt</code> is a container, produces the following
         * scrolling list:
         * <p>
         * <img src="doc-files/List-1.gif"
         * alt="Shows a list containing: Venus, Earth, JavaSoft, and Mars. Javasoft is selected." style="float:center; margin: 7px 10px;">
         * <p>
         * If the List allows multiple selections, then clicking on
         * an item that is already selected deselects it. In the preceding
         * example, only one item from the scrolling list can be selected
         * at a time, since the second argument when creating the new scrolling
         * list is <code>false</code>. If the List does not allow multiple
         * selections, selecting an item causes any other selected item
         * to be deselected.
         * <p>
         * Note that the list in the example shown was created with four visible
         * rows.  Once the list has been created, the number of visible rows
         * cannot be changed.  A default <code>List</code> is created with
         * four rows, so that <code>lst = new List()</code> is equivalent to
         * <code>list = new List(4, false)</code>.
         * <p>
         * Beginning with Java&nbsp;1.1, the Abstract Window Toolkit
         * sends the <code>List</code> object all mouse, keyboard, and focus events
         * that occur over it. (The old AWT event model is being maintained
         * only for backwards compatibility, and its use is discouraged.)
         * <p>
         * When an item is selected or deselected by the user, AWT sends an instance
         * of <code>ItemEvent</code> to the list.
         * When the user double-clicks on an item in a scrolling list,
         * AWT sends an instance of <code>ActionEvent</code> to the
         * list following the item event. AWT also generates an action event
         * when the user presses the return key while an item in the
         * list is selected.
         * <p>
         * If an application wants to perform some action based on an item
         * in this list being selected or activated by the user, it should implement
         * <code>ItemListener</code> or <code>ActionListener</code>
         * as appropriate and register the new listener to receive
         * events from this list.
         * <p>
         * For multiple-selection scrolling lists, it is considered a better
         * user interface to use an external gesture (such as clicking on a
         * button) to trigger the action.
         * @author Sami Shaio
         * @see java.awt.event.ItemEvent
         * @see java.awt.event.ItemListener
         * @see java.awt.event.ActionEvent
         * @see java.awt.event.ActionListener
         * @since JDK1.0
         */
        // @ts-ignore
        class List extends java.awt.Component implements java.awt.ItemSelectable, javax.accessibility.Accessible {
            /**
             * Creates a new scrolling list.
             * By default, there are four visible lines and multiple selections are
             * not allowed.  Note that this is a convenience method for
             * <code>List(0, false)</code>.  Also note that the number of visible
             * lines in the list cannot be changed after it has been created.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new scrolling list initialized with the specified
             * number of visible lines. By default, multiple selections are
             * not allowed.  Note that this is a convenience method for
             * <code>List(rows, false)</code>.  Also note that the number
             * of visible rows in the list cannot be changed after it has
             * been created.
             * @param rows the number of items to show.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(rows: number /*int*/)
            /**
             * Creates a new scrolling list initialized to display the specified
             * number of rows. Note that if zero rows are specified, then
             * the list will be created with a default of four rows.
             * Also note that the number of visible rows in the list cannot
             * be changed after it has been created.
             * If the value of <code>multipleMode</code> is
             * <code>true</code>, then the user can select multiple items from
             * the list. If it is <code>false</code>, only one item at a time
             * can be selected.
             * @param rows   the number of items to show.
             * @param multipleMode   if <code>true</code>,
             *                      then multiple selections are allowed;
             *                      otherwise, only one item can be selected at a time.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true.
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            constructor(rows: number /*int*/, multipleMode: boolean)
            /**
             * Creates the peer for the list.  The peer allows us to modify the
             * list's appearance without changing its functionality.
             */
            // @ts-ignore
            public addNotify(): void
            /**
             * Removes the peer for this list.  The peer allows us to modify the
             * list's appearance without changing its functionality.
             */
            // @ts-ignore
            public removeNotify(): void
            /**
             * Gets the number of items in the list.
             * @return the number of items in the list
             * @see #getItem
             * @since JDK1.1
             */
            // @ts-ignore
            public getItemCount(): number /*int*/
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>getItemCount()</code>.
             */
            // @ts-ignore
            public countItems(): number /*int*/
            /**
             * Gets the item associated with the specified index.
             * @return an item that is associated with
             *                     the specified index
             * @param index the position of the item
             * @see #getItemCount
             */
            // @ts-ignore
            public getItem(index: number /*int*/): string
            /**
             * Gets the items in the list.
             * @return a string array containing items of the list
             * @see #select
             * @see #deselect
             * @see #isIndexSelected
             * @since JDK1.1
             */
            // @ts-ignore
            public getItems(): string[]
            /**
             * Adds the specified item to the end of scrolling list.
             * @param item the item to be added
             * @since JDK1.1
             */
            // @ts-ignore
            public add(item: java.lang.String | string): void
            /**
             * @deprecated replaced by <code>add(String)</code>.
             */
            // @ts-ignore
            public addItem(item: java.lang.String | string): void
            /**
             * Adds the specified item to the the scrolling list
             * at the position indicated by the index.  The index is
             * zero-based.  If the value of the index is less than zero,
             * or if the value of the index is greater than or equal to
             * the number of items in the list, then the item is added
             * to the end of the list.
             * @param item   the item to be added;
             *               if this parameter is <code>null</code> then the item is
             *               treated as an empty string, <code>""</code>
             * @param index  the position at which to add the item
             * @since JDK1.1
             */
            // @ts-ignore
            public add(item: java.lang.String | string, index: number /*int*/): void
            /**
             * @deprecated replaced by <code>add(String, int)</code>.
             */
            // @ts-ignore
            public addItem(item: java.lang.String | string, index: number /*int*/): void
            /**
             * Replaces the item at the specified index in the scrolling list
             * with the new string.
             * @param newValue   a new string to replace an existing item
             * @param index      the position of the item to replace
             * @exception ArrayIndexOutOfBoundsException if <code>index</code>
             *           is out of range
             */
            // @ts-ignore
            public replaceItem(newValue: java.lang.String | string, index: number /*int*/): void
            /**
             * Removes all items from this list.
             * @see #remove
             * @see #delItems
             * @since JDK1.1
             */
            // @ts-ignore
            public removeAll(): void
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>removeAll()</code>.
             */
            // @ts-ignore
            public clear(): void
            /**
             * Removes the first occurrence of an item from the list.
             * If the specified item is selected, and is the only selected
             * item in the list, the list is set to have no selection.
             * @param item  the item to remove from the list
             * @exception IllegalArgumentException
             *                      if the item doesn't exist in the list
             * @since JDK1.1
             */
            // @ts-ignore
            public remove(item: java.lang.String | string): void
            /**
             * Removes the item at the specified position
             * from this scrolling list.
             * If the item with the specified position is selected, and is the
             * only selected item in the list, the list is set to have no selection.
             * @param position   the index of the item to delete
             * @see #add(String, int)
             * @since JDK1.1
             * @exception ArrayIndexOutOfBoundsException
             *                if the <code>position</code> is less than 0 or
             *                greater than <code>getItemCount()-1</code>
             */
            // @ts-ignore
            public remove(position: number /*int*/): void
            /**
             * @deprecated replaced by <code>remove(String)</code>
             *                          and <code>remove(int)</code>.
             */
            // @ts-ignore
            public delItem(position: number /*int*/): void
            /**
             * Gets the index of the selected item on the list,
             * @return the index of the selected item;
             *                 if no item is selected, or if multiple items are
             *                 selected, <code>-1</code> is returned.
             * @see #select
             * @see #deselect
             * @see #isIndexSelected
             */
            // @ts-ignore
            public getSelectedIndex(): number /*int*/
            /**
             * Gets the selected indexes on the list.
             * @return an array of the selected indexes on this scrolling list;
             *                 if no item is selected, a zero-length array is returned.
             * @see #select
             * @see #deselect
             * @see #isIndexSelected
             */
            // @ts-ignore
            public getSelectedIndexes(): number /*int*/[]
            /**
             * Gets the selected item on this scrolling list.
             * @return the selected item on the list;
             *                 if no item is selected, or if multiple items are
             *                 selected, <code>null</code> is returned.
             * @see #select
             * @see #deselect
             * @see #isIndexSelected
             */
            // @ts-ignore
            public getSelectedItem(): string
            /**
             * Gets the selected items on this scrolling list.
             * @return an array of the selected items on this scrolling list;
             *                 if no item is selected, a zero-length array is returned.
             * @see #select
             * @see #deselect
             * @see #isIndexSelected
             */
            // @ts-ignore
            public getSelectedItems(): string[]
            /**
             * Gets the selected items on this scrolling list in an array of Objects.
             * @return an array of <code>Object</code>s representing the
             *                 selected items on this scrolling list;
             *                 if no item is selected, a zero-length array is returned.
             * @see #getSelectedItems
             * @see ItemSelectable
             */
            // @ts-ignore
            public getSelectedObjects(): any[]
            /**
             * Selects the item at the specified index in the scrolling list.
             * <p>
             * Note that passing out of range parameters is invalid,
             * and will result in unspecified behavior.
             * <p>Note that this method should be primarily used to
             * initially select an item in this component.
             * Programmatically calling this method will <i>not</i> trigger
             * an <code>ItemEvent</code>.  The only way to trigger an
             * <code>ItemEvent</code> is by user interaction.
             * @param index the position of the item to select
             * @see #getSelectedItem
             * @see #deselect
             * @see #isIndexSelected
             */
            // @ts-ignore
            public select(index: number /*int*/): void
            /**
             * Deselects the item at the specified index.
             * <p>
             * Note that passing out of range parameters is invalid,
             * and will result in unspecified behavior.
             * <p>
             * If the item at the specified index is not selected,
             * then the operation is ignored.
             * @param index the position of the item to deselect
             * @see #select
             * @see #getSelectedItem
             * @see #isIndexSelected
             */
            // @ts-ignore
            public deselect(index: number /*int*/): void
            /**
             * Determines if the specified item in this scrolling list is
             * selected.
             * @param index   the item to be checked
             * @return <code>true</code> if the specified item has been
             *                        selected; <code>false</code> otherwise
             * @see #select
             * @see #deselect
             * @since JDK1.1
             */
            // @ts-ignore
            public isIndexSelected(index: number /*int*/): boolean
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>isIndexSelected(int)</code>.
             */
            // @ts-ignore
            public isSelected(index: number /*int*/): boolean
            /**
             * Gets the number of visible lines in this list.  Note that
             * once the <code>List</code> has been created, this number
             * will never change.
             * @return the number of visible lines in this scrolling list
             */
            // @ts-ignore
            public getRows(): number /*int*/
            /**
             * Determines whether this list allows multiple selections.
             * @return <code>true</code> if this list allows multiple
             *                  selections; otherwise, <code>false</code>
             * @see #setMultipleMode
             * @since JDK1.1
             */
            // @ts-ignore
            public isMultipleMode(): boolean
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>isMultipleMode()</code>.
             */
            // @ts-ignore
            public allowsMultipleSelections(): boolean
            /**
             * Sets the flag that determines whether this list
             * allows multiple selections.
             * When the selection mode is changed from multiple-selection to
             * single-selection, the selected items change as follows:
             * If a selected item has the location cursor, only that
             * item will remain selected.  If no selected item has the
             * location cursor, all items will be deselected.
             * @param b   if <code>true</code> then multiple selections
             *                       are allowed; otherwise, only one item from
             *                       the list can be selected at once
             * @see #isMultipleMode
             * @since JDK1.1
             */
            // @ts-ignore
            public setMultipleMode(b: boolean): void
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>setMultipleMode(boolean)</code>.
             */
            // @ts-ignore
            public setMultipleSelections(b: boolean): void
            /**
             * Gets the index of the item that was last made visible by
             * the method <code>makeVisible</code>.
             * @return the index of the item that was last made visible
             * @see #makeVisible
             */
            // @ts-ignore
            public getVisibleIndex(): number /*int*/
            /**
             * Makes the item at the specified index visible.
             * @param index    the position of the item
             * @see #getVisibleIndex
             */
            // @ts-ignore
            public makeVisible(index: number /*int*/): void
            /**
             * Gets the preferred dimensions for a list with the specified
             * number of rows.
             * @param rows    number of rows in the list
             * @return the preferred dimensions for displaying this scrolling list
             *              given that the specified number of rows must be visible
             * @see java.awt.Component#getPreferredSize
             * @since JDK1.1
             */
            // @ts-ignore
            public getPreferredSize(rows: number /*int*/): java.awt.Dimension
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>getPreferredSize(int)</code>.
             */
            // @ts-ignore
            public preferredSize(rows: number /*int*/): java.awt.Dimension
            /**
             * Gets the preferred size of this scrolling list.
             * @return the preferred dimensions for displaying this scrolling list
             * @see java.awt.Component#getPreferredSize
             * @since JDK1.1
             */
            // @ts-ignore
            public getPreferredSize(): java.awt.Dimension
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>getPreferredSize()</code>.
             */
            // @ts-ignore
            public preferredSize(): java.awt.Dimension
            /**
             * Gets the minimum dimensions for a list with the specified
             * number of rows.
             * @param rows    number of rows in the list
             * @return the minimum dimensions for displaying this scrolling list
             *              given that the specified number of rows must be visible
             * @see java.awt.Component#getMinimumSize
             * @since JDK1.1
             */
            // @ts-ignore
            public getMinimumSize(rows: number /*int*/): java.awt.Dimension
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>getMinimumSize(int)</code>.
             */
            // @ts-ignore
            public minimumSize(rows: number /*int*/): java.awt.Dimension
            /**
             * Determines the minimum size of this scrolling list.
             * @return the minimum dimensions needed
             *                         to display this scrolling list
             * @see java.awt.Component#getMinimumSize()
             * @since JDK1.1
             */
            // @ts-ignore
            public getMinimumSize(): java.awt.Dimension
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>getMinimumSize()</code>.
             */
            // @ts-ignore
            public minimumSize(): java.awt.Dimension
            /**
             * Adds the specified item listener to receive item events from
             * this list.  Item events are sent in response to user input, but not
             * in response to calls to <code>select</code> or <code>deselect</code>.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param l the item listener
             * @see #removeItemListener
             * @see #getItemListeners
             * @see #select
             * @see #deselect
             * @see java.awt.event.ItemEvent
             * @see java.awt.event.ItemListener
             * @since JDK1.1
             */
            // @ts-ignore
            public addItemListener(l: java.awt.event.ItemListener): void
            /**
             * Removes the specified item listener so that it no longer
             * receives item events from this list.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param l the item listener
             * @see #addItemListener
             * @see #getItemListeners
             * @see java.awt.event.ItemEvent
             * @see java.awt.event.ItemListener
             * @since JDK1.1
             */
            // @ts-ignore
            public removeItemListener(l: java.awt.event.ItemListener): void
            /**
             * Returns an array of all the item listeners
             * registered on this list.
             * @return all of this list's <code>ItemListener</code>s
             *          or an empty array if no item
             *          listeners are currently registered
             * @see #addItemListener
             * @see #removeItemListener
             * @see java.awt.event.ItemEvent
             * @see java.awt.event.ItemListener
             * @since 1.4
             */
            // @ts-ignore
            public getItemListeners(): java.awt.event.ItemListener[]
            /**
             * Adds the specified action listener to receive action events from
             * this list. Action events occur when a user double-clicks
             * on a list item or types Enter when the list has the keyboard
             * focus.
             * <p>
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param l the action listener
             * @see #removeActionListener
             * @see #getActionListeners
             * @see java.awt.event.ActionEvent
             * @see java.awt.event.ActionListener
             * @since JDK1.1
             */
            // @ts-ignore
            public addActionListener(l: java.awt.event.ActionListener): void
            /**
             * Removes the specified action listener so that it no longer
             * receives action events from this list. Action events
             * occur when a user double-clicks on a list item.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param l     the action listener
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
             * registered on this list.
             * @return all of this list's <code>ActionListener</code>s
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
             * upon this <code>List</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>List</code> <code>l</code>
             * for its item listeners with the following code:
             * <pre>ItemListener[] ils = (ItemListener[])(l.getListeners(ItemListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             * @param listenerType the type of listeners requested; this parameter
             *           should specify an interface that descends from
             *           <code>java.util.EventListener</code>
             * @return an array of all objects registered as
             *           <code><em>Foo</em>Listener</code>s on this list,
             *           or an empty array if no such
             *           listeners have been added
             * @exception ClassCastException if <code>listenerType</code>
             *           doesn't specify a class or interface that implements
             *           <code>java.util.EventListener</code>
             * @see #getItemListeners
             * @since 1.3
             */
            // @ts-ignore
            public getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
            /**
             * Processes events on this scrolling list. If an event is
             * an instance of <code>ItemEvent</code>, it invokes the
             * <code>processItemEvent</code> method. Else, if the
             * event is an instance of <code>ActionEvent</code>,
             * it invokes <code>processActionEvent</code>.
             * If the event is not an item event or an action event,
             * it invokes <code>processEvent</code> on the superclass.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             * @param e the event
             * @see java.awt.event.ActionEvent
             * @see java.awt.event.ItemEvent
             * @see #processActionEvent
             * @see #processItemEvent
             * @since JDK1.1
             */
            // @ts-ignore
            processEvent(e: java.awt.AWTEvent): void
            /**
             * Processes item events occurring on this list by
             * dispatching them to any registered
             * <code>ItemListener</code> objects.
             * <p>
             * This method is not called unless item events are
             * enabled for this component. Item events are enabled
             * when one of the following occurs:
             * <ul>
             * <li>An <code>ItemListener</code> object is registered
             * via <code>addItemListener</code>.
             * <li>Item events are enabled via <code>enableEvents</code>.
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             * @param e the item event
             * @see java.awt.event.ItemEvent
             * @see java.awt.event.ItemListener
             * @see #addItemListener
             * @see java.awt.Component#enableEvents
             * @since JDK1.1
             */
            // @ts-ignore
            processItemEvent(e: java.awt.event.ItemEvent): void
            /**
             * Processes action events occurring on this component
             * by dispatching them to any registered
             * <code>ActionListener</code> objects.
             * <p>
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
             * @see #addActionListener
             * @see java.awt.Component#enableEvents
             * @since JDK1.1
             */
            // @ts-ignore
            processActionEvent(e: java.awt.event.ActionEvent): void
            /**
             * Returns the parameter string representing the state of this
             * scrolling list. This string is useful for debugging.
             * @return the parameter string of this scrolling list
             */
            // @ts-ignore
            paramString(): string
            /**
             * @deprecated As of JDK version 1.1,
             *  Not for public use in the future.
             *  This method is expected to be retained only as a package
             *  private method.
             */
            // @ts-ignore
            public delItems(start: number /*int*/, end: number /*int*/): void
            /**
             * Gets the <code>AccessibleContext</code> associated with this
             * <code>List</code>. For lists, the <code>AccessibleContext</code>
             * takes the form of an <code>AccessibleAWTList</code>.
             * A new <code>AccessibleAWTList</code> instance is created, if necessary.
             * @return an <code>AccessibleAWTList</code> that serves as the
             *          <code>AccessibleContext</code> of this <code>List</code>
             * @since 1.3
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
