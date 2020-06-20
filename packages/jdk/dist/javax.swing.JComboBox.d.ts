declare namespace javax {
    namespace swing {
        /**
         * A component that combines a button or editable field and a drop-down list.
         * The user can select a value from the drop-down list, which appears at the
         * user's request. If you make the combo box editable, then the combo box
         * includes an editable field into which the user can type a value.
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
         * <p>
         * See <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/combobox.html">How to Use Combo Boxes</a>
         * in <a href="https://docs.oracle.com/javase/tutorial/"><em>The Java Tutorial</em></a>
         * for further information.
         * <p>
         * @see ComboBoxModel
         * @see DefaultComboBoxModel
         * @param <E> the type of the elements of this combo box
         * @beaninfo attribute: isContainer false
         *  description: A combination of a text field and a drop-down list.
         * @author Arnaud Weber
         * @author Mark Davidson
         */
        // @ts-ignore
        class JComboBox<E> extends javax.swing.JComponent implements java.awt.ItemSelectable, javax.swing.event.ListDataListener, java.awt.event.ActionListener, javax.accessibility.Accessible {
            /**
             * Creates a <code>JComboBox</code> that takes its items from an
             * existing <code>ComboBoxModel</code>.  Since the
             * <code>ComboBoxModel</code> is provided, a combo box created using
             * this constructor does not create a default combo box model and
             * may impact how the insert, remove and add methods behave.
             * @param aModel the <code>ComboBoxModel</code> that provides the
             *           displayed list of items
             * @see DefaultComboBoxModel
             */
            // @ts-ignore
            constructor(aModel: javax.swing.ComboBoxModel<E>)
            /**
             * Creates a <code>JComboBox</code> that contains the elements
             * in the specified array.  By default the first item in the array
             * (and therefore the data model) becomes selected.
             * @param items  an array of objects to insert into the combo box
             * @see DefaultComboBoxModel
             */
            // @ts-ignore
            constructor(items: E[])
            /**
             * Creates a <code>JComboBox</code> that contains the elements
             * in the specified Vector.  By default the first item in the vector
             * (and therefore the data model) becomes selected.
             * @param items  an array of vectors to insert into the combo box
             * @see DefaultComboBoxModel
             */
            // @ts-ignore
            constructor(items: java.util.Vector<E>)
            /**
             * Creates a <code>JComboBox</code> with a default data model.
             * The default data model is an empty list of objects.
             * Use <code>addItem</code> to add items.  By default the first item
             * in the data model becomes selected.
             * @see DefaultComboBoxModel
             */
            // @ts-ignore
            constructor()
            /**
             * This protected field is implementation specific. Do not access directly
             * or override. Use the accessor methods instead.
             * @see #getModel
             * @see #setModel
             */
            // @ts-ignore
            dataModel: javax.swing.ComboBoxModel<E>
            /**
             * This protected field is implementation specific. Do not access directly
             * or override. Use the accessor methods instead.
             * @see #getRenderer
             * @see #setRenderer
             */
            // @ts-ignore
            renderer: javax.swing.ListCellRenderer<any super E>
            /**
             * This protected field is implementation specific. Do not access directly
             * or override. Use the accessor methods instead.
             * @see #getEditor
             * @see #setEditor
             */
            // @ts-ignore
            editor: javax.swing.ComboBoxEditor
            /**
             * This protected field is implementation specific. Do not access directly
             * or override. Use the accessor methods instead.
             * @see #getMaximumRowCount
             * @see #setMaximumRowCount
             */
            // @ts-ignore
            maximumRowCount: number /*int*/
            /**
             * This protected field is implementation specific. Do not access directly
             * or override. Use the accessor methods instead.
             * @see #setKeySelectionManager
             * @see #getKeySelectionManager
             */
            // @ts-ignore
            keySelectionManager: javax.swing.JComboBox.KeySelectionManager
            /**
             * This protected field is implementation specific. Do not access directly
             * or override. Use the accessor methods instead.
             * @see #setActionCommand
             * @see #getActionCommand
             */
            // @ts-ignore
            actionCommand: string
            /**
             * This protected field is implementation specific. Do not access directly
             * or override. Use the accessor methods instead.
             * @see #setLightWeightPopupEnabled
             * @see #isLightWeightPopupEnabled
             */
            // @ts-ignore
            lightWeightPopupEnabled: boolean
            /**
             * This protected field is implementation specific. Do not access directly
             * or override.
             */
            // @ts-ignore
            selectedItemReminder: any
            // @ts-ignore
            installAncestorListener(): void
            /**
             * Sets the L&amp;F object that renders this component.
             * @param ui  the <code>ComboBoxUI</code> L&amp;F object
             * @see UIDefaults#getUI
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the Component's LookAndFeel.
             */
            // @ts-ignore
            setUI(ui: javax.swing.plaf.ComboBoxUI): void
            /**
             * Resets the UI property to a value from the current look and feel.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            updateUI(): void
            /**
             * Returns the name of the L&amp;F class that renders this component.
             * @return the string "ComboBoxUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            getUIClassID(): java.lang.String
            /**
             * Returns the L&amp;F object that renders this component.
             * @return the ComboBoxUI object that renders this component
             */
            // @ts-ignore
            getUI(): javax.swing.plaf.ComboBoxUI
            /**
             * Sets the data model that the <code>JComboBox</code> uses to obtain
             * the list of items.
             * @param aModel the <code>ComboBoxModel</code> that provides the
             *   displayed list of items
             * @beaninfo bound: true
             *   description: Model that the combo box uses to get data to display.
             */
            // @ts-ignore
            setModel(aModel: javax.swing.ComboBoxModel<E>): void
            /**
             * Returns the data model currently used by the <code>JComboBox</code>.
             * @return the <code>ComboBoxModel</code> that provides the displayed
             *                   list of items
             */
            // @ts-ignore
            getModel(): javax.swing.ComboBoxModel<E>
            /**
             * Sets the <code>lightWeightPopupEnabled</code> property, which
             * provides a hint as to whether or not a lightweight
             * <code>Component</code> should be used to contain the
             * <code>JComboBox</code>, versus a heavyweight
             * <code>Component</code> such as a <code>Panel</code>
             * or a <code>Window</code>.  The decision of lightweight
             * versus heavyweight is ultimately up to the
             * <code>JComboBox</code>.  Lightweight windows are more
             * efficient than heavyweight windows, but lightweight
             * and heavyweight components do not mix well in a GUI.
             * If your application mixes lightweight and heavyweight
             * components, you should disable lightweight popups.
             * The default value for the <code>lightWeightPopupEnabled</code>
             * property is <code>true</code>, unless otherwise specified
             * by the look and feel.  Some look and feels always use
             * heavyweight popups, no matter what the value of this property.
             * <p>
             * See the article <a href="http://www.oracle.com/technetwork/articles/java/mixing-components-433992.html">Mixing Heavy and Light Components</a>
             * This method fires a property changed event.
             * @param aFlag if <code>true</code>, lightweight popups are desired
             * @beaninfo bound: true
             *        expert: true
             *   description: Set to <code>false</code> to require heavyweight popups.
             */
            // @ts-ignore
            setLightWeightPopupEnabled(aFlag: boolean): void
            /**
             * Gets the value of the <code>lightWeightPopupEnabled</code>
             * property.
             * @return the value of the <code>lightWeightPopupEnabled</code>
             *     property
             * @see #setLightWeightPopupEnabled
             */
            // @ts-ignore
            isLightWeightPopupEnabled(): boolean
            /**
             * Determines whether the <code>JComboBox</code> field is editable.
             * An editable <code>JComboBox</code> allows the user to type into the
             * field or selected an item from the list to initialize the field,
             * after which it can be edited. (The editing affects only the field,
             * the list item remains intact.) A non editable <code>JComboBox</code>
             * displays the selected item in the field,
             * but the selection cannot be modified.
             * @param aFlag a boolean value, where true indicates that the
             *                   field is editable
             * @beaninfo bound: true
             *     preferred: true
             *   description: If true, the user can type a new value in the combo box.
             */
            // @ts-ignore
            setEditable(aFlag: boolean): void
            /**
             * Returns true if the <code>JComboBox</code> is editable.
             * By default, a combo box is not editable.
             * @return true if the <code>JComboBox</code> is editable, else false
             */
            // @ts-ignore
            isEditable(): boolean
            /**
             * Sets the maximum number of rows the <code>JComboBox</code> displays.
             * If the number of objects in the model is greater than count,
             * the combo box uses a scrollbar.
             * @param count an integer specifying the maximum number of items to
             *               display in the list before using a scrollbar
             * @beaninfo bound: true
             *     preferred: true
             *   description: The maximum number of rows the popup should have
             */
            // @ts-ignore
            setMaximumRowCount(count: number /*int*/): void
            /**
             * Returns the maximum number of items the combo box can display
             * without a scrollbar
             * @return an integer specifying the maximum number of items that are
             *          displayed in the list before using a scrollbar
             */
            // @ts-ignore
            getMaximumRowCount(): int
            /**
             * Sets the renderer that paints the list items and the item selected from the list in
             * the JComboBox field. The renderer is used if the JComboBox is not
             * editable. If it is editable, the editor is used to render and edit
             * the selected item.
             * <p>
             * The default renderer displays a string or an icon.
             * Other renderers can handle graphic images and composite items.
             * <p>
             * To display the selected item,
             * <code>aRenderer.getListCellRendererComponent</code>
             * is called, passing the list object and an index of -1.
             * @param aRenderer  the <code>ListCellRenderer</code> that
             *                   displays the selected item
             * @see #setEditor
             * @beaninfo bound: true
             *      expert: true
             *   description: The renderer that paints the item selected in the list.
             */
            // @ts-ignore
            setRenderer(aRenderer: javax.swing.ListCellRenderer<any super E>): void
            /**
             * Returns the renderer used to display the selected item in the
             * <code>JComboBox</code> field.
             * @return the <code>ListCellRenderer</code> that displays
             *                   the selected item.
             */
            // @ts-ignore
            getRenderer(): javax.swing.ListCellRenderer<? super E>
            /**
             * Sets the editor used to paint and edit the selected item in the
             * <code>JComboBox</code> field.  The editor is used only if the
             * receiving <code>JComboBox</code> is editable. If not editable,
             * the combo box uses the renderer to paint the selected item.
             * @param anEditor  the <code>ComboBoxEditor</code> that
             *                   displays the selected item
             * @see #setRenderer
             * @beaninfo bound: true
             *     expert: true
             *   description: The editor that combo box uses to edit the current value
             */
            // @ts-ignore
            setEditor(anEditor: javax.swing.ComboBoxEditor): void
            /**
             * Returns the editor used to paint and edit the selected item in the
             * <code>JComboBox</code> field.
             * @return the <code>ComboBoxEditor</code> that displays the selected item
             */
            // @ts-ignore
            getEditor(): javax.swing.ComboBoxEditor
            /**
             * Sets the selected item in the combo box display area to the object in
             * the argument.
             * If <code>anObject</code> is in the list, the display area shows
             * <code>anObject</code> selected.
             * <p>
             * If <code>anObject</code> is <i>not</i> in the list and the combo box is
             * uneditable, it will not change the current selection. For editable
             * combo boxes, the selection will change to <code>anObject</code>.
             * <p>
             * If this constitutes a change in the selected item,
             * <code>ItemListener</code>s added to the combo box will be notified with
             * one or two <code>ItemEvent</code>s.
             * If there is a current selected item, an <code>ItemEvent</code> will be
             * fired and the state change will be <code>ItemEvent.DESELECTED</code>.
             * If <code>anObject</code> is in the list and is not currently selected
             * then an <code>ItemEvent</code> will be fired and the state change will
             * be <code>ItemEvent.SELECTED</code>.
             * <p>
             * <code>ActionListener</code>s added to the combo box will be notified
             * with an <code>ActionEvent</code> when this method is called.
             * @param anObject  the list object to select; use <code>null</code> to
             *                         clear the selection
             * @beaninfo preferred:   true
             *     description: Sets the selected item in the JComboBox.
             */
            // @ts-ignore
            setSelectedItem(anObject: any): void
            /**
             * Returns the current selected item.
             * <p>
             * If the combo box is editable, then this value may not have been added
             * to the combo box with <code>addItem</code>, <code>insertItemAt</code>
             * or the data constructors.
             * @return the current selected Object
             * @see #setSelectedItem
             */
            // @ts-ignore
            getSelectedItem(): java.lang.Object
            /**
             * Selects the item at index <code>anIndex</code>.
             * @param anIndex an integer specifying the list item to select,
             *                   where 0 specifies the first item in the list and -1 indicates no selection
             * @exception IllegalArgumentException if <code>anIndex</code> &lt; -1 or
             *                   <code>anIndex</code> is greater than or equal to size
             * @beaninfo preferred: true
             *   description: The item at index is selected.
             */
            // @ts-ignore
            setSelectedIndex(anIndex: number /*int*/): void
            /**
             * Returns the first item in the list that matches the given item.
             * The result is not always defined if the <code>JComboBox</code>
             * allows selected items that are not in the list.
             * Returns -1 if there is no selected item or if the user specified
             * an item which is not in the list.
             * @return an integer specifying the currently selected list item,
             *                   where 0 specifies
             *                   the first item in the list;
             *                   or -1 if no item is selected or if
             *                   the currently selected item is not in the list
             */
            // @ts-ignore
            getSelectedIndex(): int
            /**
             * Returns the "prototypical display" value - an Object used
             * for the calculation of the display height and width.
             * @return the value of the <code>prototypeDisplayValue</code> property
             * @see #setPrototypeDisplayValue
             * @since 1.4
             */
            // @ts-ignore
            getPrototypeDisplayValue(): E
            /**
             * Sets the prototype display value used to calculate the size of the display
             * for the UI portion.
             * <p>
             * If a prototype display value is specified, the preferred size of
             * the combo box is calculated by configuring the renderer with the
             * prototype display value and obtaining its preferred size. Specifying
             * the preferred display value is often useful when the combo box will be
             * displaying large amounts of data. If no prototype display value has
             * been specified, the renderer must be configured for each value from
             * the model and its preferred size obtained, which can be
             * relatively expensive.
             * @param prototypeDisplayValue
             * @see #getPrototypeDisplayValue
             * @since 1.4
             * @beaninfo bound: true
             *    attribute: visualUpdate true
             *  description: The display prototype value, used to compute display width and height.
             */
            // @ts-ignore
            setPrototypeDisplayValue(prototypeDisplayValue: E): void
            /**
             * Adds an item to the item list.
             * This method works only if the <code>JComboBox</code> uses a
             * mutable data model.
             * <p>
             * <strong>Warning:</strong>
             * Focus and keyboard navigation problems may arise if you add duplicate
             * String objects. A workaround is to add new objects instead of String
             * objects and make sure that the toString() method is defined.
             * For example:
             * <pre>
             * comboBox.addItem(makeObj("Item 1"));
             * comboBox.addItem(makeObj("Item 1"));
             * ...
             * private Object makeObj(final String item)  {
             * return new Object() { public String toString() { return item; } };
             * }
             * </pre>
             * @param item the item to add to the list
             * @see MutableComboBoxModel
             */
            // @ts-ignore
            addItem(item: E): void
            /**
             * Inserts an item into the item list at a given index.
             * This method works only if the <code>JComboBox</code> uses a
             * mutable data model.
             * @param item the item to add to the list
             * @param index    an integer specifying the position at which
             *                   to add the item
             * @see MutableComboBoxModel
             */
            // @ts-ignore
            insertItemAt(item: E, index: number /*int*/): void
            /**
             * Removes an item from the item list.
             * This method works only if the <code>JComboBox</code> uses a
             * mutable data model.
             * @param anObject  the object to remove from the item list
             * @see MutableComboBoxModel
             */
            // @ts-ignore
            removeItem(anObject: any): void
            /**
             * Removes the item at <code>anIndex</code>
             * This method works only if the <code>JComboBox</code> uses a
             * mutable data model.
             * @param anIndex  an int specifying the index of the item to remove,
             *                   where 0
             *                   indicates the first item in the list
             * @see MutableComboBoxModel
             */
            // @ts-ignore
            removeItemAt(anIndex: number /*int*/): void
            /**
             * Removes all items from the item list.
             */
            // @ts-ignore
            removeAllItems(): void
            /**
             * Causes the combo box to display its popup window.
             * @see #setPopupVisible
             */
            // @ts-ignore
            showPopup(): void
            /**
             * Causes the combo box to close its popup window.
             * @see #setPopupVisible
             */
            // @ts-ignore
            hidePopup(): void
            /**
             * Sets the visibility of the popup.
             */
            // @ts-ignore
            setPopupVisible(v: boolean): void
            /**
             * Determines the visibility of the popup.
             * @return true if the popup is visible, otherwise returns false
             */
            // @ts-ignore
            isPopupVisible(): boolean
            /**
             * Adds an <code>ItemListener</code>.
             * <p>
             * <code>aListener</code> will receive one or two <code>ItemEvent</code>s when
             * the selected item changes.
             * @param aListener the <code>ItemListener</code> that is to be notified
             * @see #setSelectedItem
             */
            // @ts-ignore
            addItemListener(aListener: java.awt.event.ItemListener): void
            /**
             * Removes an <code>ItemListener</code>.
             * @param aListener  the <code>ItemListener</code> to remove
             */
            // @ts-ignore
            removeItemListener(aListener: java.awt.event.ItemListener): void
            /**
             * Returns an array of all the <code>ItemListener</code>s added
             * to this JComboBox with addItemListener().
             * @return all of the <code>ItemListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getItemListeners(): java.awt.event.ItemListener[]
            /**
             * Adds an <code>ActionListener</code>.
             * <p>
             * The <code>ActionListener</code> will receive an <code>ActionEvent</code>
             * when a selection has been made. If the combo box is editable, then
             * an <code>ActionEvent</code> will be fired when editing has stopped.
             * @param l  the <code>ActionListener</code> that is to be notified
             * @see #setSelectedItem
             */
            // @ts-ignore
            addActionListener(l: java.awt.event.ActionListener): void
            /**
             * Removes an <code>ActionListener</code>.
             * @param l  the <code>ActionListener</code> to remove
             */
            // @ts-ignore
            removeActionListener(l: java.awt.event.ActionListener): void
            /**
             * Returns an array of all the <code>ActionListener</code>s added
             * to this JComboBox with addActionListener().
             * @return all of the <code>ActionListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getActionListeners(): java.awt.event.ActionListener[]
            /**
             * Adds a <code>PopupMenu</code> listener which will listen to notification
             * messages from the popup portion of the combo box.
             * <p>
             * For all standard look and feels shipped with Java, the popup list
             * portion of combo box is implemented as a <code>JPopupMenu</code>.
             * A custom look and feel may not implement it this way and will
             * therefore not receive the notification.
             * @param l  the <code>PopupMenuListener</code> to add
             * @since 1.4
             */
            // @ts-ignore
            addPopupMenuListener(l: javax.swing.event.PopupMenuListener): void
            /**
             * Removes a <code>PopupMenuListener</code>.
             * @param l  the <code>PopupMenuListener</code> to remove
             * @see #addPopupMenuListener
             * @since 1.4
             */
            // @ts-ignore
            removePopupMenuListener(l: javax.swing.event.PopupMenuListener): void
            /**
             * Returns an array of all the <code>PopupMenuListener</code>s added
             * to this JComboBox with addPopupMenuListener().
             * @return all of the <code>PopupMenuListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getPopupMenuListeners(): javax.swing.event.PopupMenuListener[]
            /**
             * Notifies <code>PopupMenuListener</code>s that the popup portion of the
             * combo box will become visible.
             * <p>
             * This method is public but should not be called by anything other than
             * the UI delegate.
             * @see #addPopupMenuListener
             * @since 1.4
             */
            // @ts-ignore
            firePopupMenuWillBecomeVisible(): void
            /**
             * Notifies <code>PopupMenuListener</code>s that the popup portion of the
             * combo box has become invisible.
             * <p>
             * This method is public but should not be called by anything other than
             * the UI delegate.
             * @see #addPopupMenuListener
             * @since 1.4
             */
            // @ts-ignore
            firePopupMenuWillBecomeInvisible(): void
            /**
             * Notifies <code>PopupMenuListener</code>s that the popup portion of the
             * combo box has been canceled.
             * <p>
             * This method is public but should not be called by anything other than
             * the UI delegate.
             * @see #addPopupMenuListener
             * @since 1.4
             */
            // @ts-ignore
            firePopupMenuCanceled(): void
            /**
             * Sets the action command that should be included in the event
             * sent to action listeners.
             * @param aCommand  a string containing the "command" that is sent
             *                   to action listeners; the same listener can then
             *                   do different things depending on the command it
             *                   receives
             */
            // @ts-ignore
            setActionCommand(aCommand: string): void
            /**
             * Returns the action command that is included in the event sent to
             * action listeners.
             * @return the string containing the "command" that is sent
             *           to action listeners.
             */
            // @ts-ignore
            getActionCommand(): java.lang.String
            /**
             * Sets the <code>Action</code> for the <code>ActionEvent</code> source.
             * The new <code>Action</code> replaces any previously set
             * <code>Action</code> but does not affect <code>ActionListeners</code>
             * independently added with <code>addActionListener</code>.
             * If the <code>Action</code> is already a registered
             * <code>ActionListener</code> for the <code>ActionEvent</code> source,
             * it is not re-registered.
             * <p>
             * Setting the <code>Action</code> results in immediately changing
             * all the properties described in <a href="Action.html#buttonActions">
             * Swing Components Supporting <code>Action</code></a>.
             * Subsequently, the combobox's properties are automatically updated
             * as the <code>Action</code>'s properties change.
             * <p>
             * This method uses three other methods to set
             * and help track the <code>Action</code>'s property values.
             * It uses the <code>configurePropertiesFromAction</code> method
             * to immediately change the combobox's properties.
             * To track changes in the <code>Action</code>'s property values,
             * this method registers the <code>PropertyChangeListener</code>
             * returned by <code>createActionPropertyChangeListener</code>. The
             * default {@code PropertyChangeListener} invokes the
             * {@code actionPropertyChanged} method when a property in the
             * {@code Action} changes.
             * @param a the <code>Action</code> for the <code>JComboBox</code>,
             *                   or <code>null</code>.
             * @since 1.3
             * @see Action
             * @see #getAction
             * @see #configurePropertiesFromAction
             * @see #createActionPropertyChangeListener
             * @see #actionPropertyChanged
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: the Action instance connected with this ActionEvent source
             */
            // @ts-ignore
            setAction(a: javax.swing.Action): void
            /**
             * Returns the currently set <code>Action</code> for this
             * <code>ActionEvent</code> source, or <code>null</code> if no
             * <code>Action</code> is set.
             * @return the <code>Action</code> for this <code>ActionEvent</code>
             *           source; or <code>null</code>
             * @since 1.3
             * @see Action
             * @see #setAction
             */
            // @ts-ignore
            getAction(): javax.swing.Action
            /**
             * Sets the properties on this combobox to match those in the specified
             * <code>Action</code>.  Refer to <a href="Action.html#buttonActions">
             * Swing Components Supporting <code>Action</code></a> for more
             * details as to which properties this sets.
             * @param a the <code>Action</code> from which to get the properties,
             *           or <code>null</code>
             * @since 1.3
             * @see Action
             * @see #setAction
             */
            // @ts-ignore
            configurePropertiesFromAction(a: javax.swing.Action): void
            /**
             * Creates and returns a <code>PropertyChangeListener</code> that is
             * responsible for listening for changes from the specified
             * <code>Action</code> and updating the appropriate properties.
             * <p>
             * <b>Warning:</b> If you subclass this do not create an anonymous
             * inner class.  If you do the lifetime of the combobox will be tied to
             * that of the <code>Action</code>.
             * @param a the combobox's action
             * @since 1.3
             * @see Action
             * @see #setAction
             */
            // @ts-ignore
            createActionPropertyChangeListener(a: javax.swing.Action): java.beans.PropertyChangeListener
            /**
             * Updates the combobox's state in response to property changes in
             * associated action. This method is invoked from the
             * {@code PropertyChangeListener} returned from
             * {@code createActionPropertyChangeListener}. Subclasses do not normally
             * need to invoke this. Subclasses that support additional {@code Action}
             * properties should override this and
             * {@code configurePropertiesFromAction}.
             * <p>
             * Refer to the table at <a href="Action.html#buttonActions">
             * Swing Components Supporting <code>Action</code></a> for a list of
             * the properties this method sets.
             * @param action the <code>Action</code> associated with this combobox
             * @param propertyName the name of the property that changed
             * @since 1.6
             * @see Action
             * @see #configurePropertiesFromAction
             */
            // @ts-ignore
            actionPropertyChanged(action: javax.swing.Action, propertyName: string): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.
             * @param e  the event of interest
             * @see EventListenerList
             */
            // @ts-ignore
            fireItemStateChanged(e: java.awt.event.ItemEvent): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.
             * @see EventListenerList
             */
            // @ts-ignore
            fireActionEvent(): void
            /**
             * This protected method is implementation specific. Do not access directly
             * or override.
             */
            // @ts-ignore
            selectedItemChanged(): void
            /**
             * Returns an array containing the selected item.
             * This method is implemented for compatibility with
             * <code>ItemSelectable</code>.
             * @return an array of <code>Objects</code> containing one
             *           element -- the selected item
             */
            // @ts-ignore
            getSelectedObjects(): java.lang.Object[]
            /**
             * This method is public as an implementation side effect.
             * do not call or override.
             */
            // @ts-ignore
            actionPerformed(e: java.awt.event.ActionEvent): void
            /**
             * This method is public as an implementation side effect.
             * do not call or override.
             */
            // @ts-ignore
            contentsChanged(e: javax.swing.event.ListDataEvent): void
            /**
             * This method is public as an implementation side effect.
             * do not call or override.
             */
            // @ts-ignore
            intervalAdded(e: javax.swing.event.ListDataEvent): void
            /**
             * This method is public as an implementation side effect.
             * do not call or override.
             */
            // @ts-ignore
            intervalRemoved(e: javax.swing.event.ListDataEvent): void
            /**
             * Selects the list item that corresponds to the specified keyboard
             * character and returns true, if there is an item corresponding
             * to that character.  Otherwise, returns false.
             * @param keyChar a char, typically this is a keyboard key
             *                   typed by the user
             */
            // @ts-ignore
            selectWithKeyChar(keyChar: string): boolean
            /**
             * Enables the combo box so that items can be selected. When the
             * combo box is disabled, items cannot be selected and values
             * cannot be typed into its field (if it is editable).
             * @param b a boolean value, where true enables the component and
             *           false disables it
             * @beaninfo bound: true
             *     preferred: true
             *   description: Whether the combo box is enabled.
             */
            // @ts-ignore
            setEnabled(b: boolean): void
            /**
             * Initializes the editor with the specified item.
             * @param anEditor the <code>ComboBoxEditor</code> that displays
             *                   the list item in the
             *                   combo box field and allows it to be edited
             * @param anItem   the object to display and edit in the field
             */
            // @ts-ignore
            configureEditor(anEditor: javax.swing.ComboBoxEditor, anItem: any): void
            /**
             * Handles <code>KeyEvent</code>s, looking for the Tab key.
             * If the Tab key is found, the popup window is closed.
             * @param e  the <code>KeyEvent</code> containing the keyboard
             *           key that was pressed
             */
            // @ts-ignore
            processKeyEvent(e: java.awt.event.KeyEvent): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            processKeyBinding(ks: javax.swing.KeyStroke, e: java.awt.event.KeyEvent, condition: number /*int*/, pressed: boolean): boolean
            /**
             * Sets the object that translates a keyboard character into a list
             * selection. Typically, the first selection with a matching first
             * character becomes the selected item.
             * @beaninfo expert: true
             *   description: The objects that changes the selection when a key is pressed.
             */
            // @ts-ignore
            setKeySelectionManager(aManager: javax.swing.JComboBox.KeySelectionManager): void
            /**
             * Returns the list's key-selection manager.
             * @return the <code>KeySelectionManager</code> currently in use
             */
            // @ts-ignore
            getKeySelectionManager(): javax.swing.JComboBox.KeySelectionManager
            /**
             * Returns the number of items in the list.
             * @return an integer equal to the number of items in the list
             */
            // @ts-ignore
            getItemCount(): int
            /**
             * Returns the list item at the specified index.  If <code>index</code>
             * is out of range (less than zero or greater than or equal to size)
             * it will return <code>null</code>.
             * @param index  an integer indicating the list position, where the first
             *                item starts at zero
             * @return the item at that list position; or
             *                   <code>null</code> if out of range
             */
            // @ts-ignore
            getItemAt(index: number /*int*/): E
            /**
             * Returns an instance of the default key-selection manager.
             * @return the <code>KeySelectionManager</code> currently used by the list
             * @see #setKeySelectionManager
             */
            // @ts-ignore
            createDefaultKeySelectionManager(): javax.swing.JComboBox.KeySelectionManager
            /**
             * Returns a string representation of this <code>JComboBox</code>.
             * This method is intended to be used only for debugging purposes,
             * and the content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JComboBox</code>
             */
            // @ts-ignore
            paramString(): java.lang.String
            /**
             * Gets the AccessibleContext associated with this JComboBox.
             * For combo boxes, the AccessibleContext takes the form of an
             * AccessibleJComboBox.
             * A new AccessibleJComboBox instance is created if necessary.
             * @return an AccessibleJComboBox that serves as the
             *          AccessibleContext of this JComboBox
             */
            // @ts-ignore
            getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
