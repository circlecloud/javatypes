declare namespace javax {
    namespace swing {
        /**
         * A component that lets the user switch between a group of components by
         * clicking on a tab with a given title and/or icon.
         * For examples and information on using tabbed panes see
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/tabbedpane.html">How to Use Tabbed Panes</a>,
         * a section in <em>The Java Tutorial</em>.
         * <p>
         * Tabs/components are added to a <code>TabbedPane</code> object by using the
         * <code>addTab</code> and <code>insertTab</code> methods.
         * A tab is represented by an index corresponding
         * to the position it was added in, where the first tab has an index equal to 0
         * and the last tab has an index equal to the tab count minus 1.
         * <p>
         * The <code>TabbedPane</code> uses a <code>SingleSelectionModel</code>
         * to represent the set
         * of tab indices and the currently selected index.  If the tab count
         * is greater than 0, then there will always be a selected index, which
         * by default will be initialized to the first tab.  If the tab count is
         * 0, then the selected index will be -1.
         * <p>
         * The tab title can be rendered by a <code>Component</code>.
         * For example, the following produce similar results:
         * <pre>
         * // In this case the look and feel renders the title for the tab.
         * tabbedPane.addTab("Tab", myComponent);
         * // In this case the custom component is responsible for rendering the
         * // title of the tab.
         * tabbedPane.addTab(null, myComponent);
         * tabbedPane.setTabComponentAt(0, new JLabel("Tab"));
         * </pre>
         * The latter is typically used when you want a more complex user interaction
         * that requires custom components on the tab.  For example, you could
         * provide a custom component that animates or one that has widgets for
         * closing the tab.
         * <p>
         * If you specify a component for a tab, the <code>JTabbedPane</code>
         * will not render any text or icon you have specified for the tab.
         * <p>
         * <strong>Note:</strong>
         * Do not use <code>setVisible</code> directly on a tab component to make it visible,
         * use <code>setSelectedComponent</code> or <code>setSelectedIndex</code> methods instead.
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
         * @beaninfo attribute: isContainer true
         *     description: A component which provides a tab folder metaphor for
         *                  displaying one component from a set of components.
         * @author Dave Moore
         * @author Philip Milne
         * @author Amy Fowler
         * @see SingleSelectionModel
         */
        // @ts-ignore
        class JTabbedPane extends javax.swing.JComponent implements java.io.Serializable, javax.accessibility.Accessible, javax.swing.SwingConstants {
            /**
             * Creates an empty <code>TabbedPane</code> with a default
             * tab placement of <code>JTabbedPane.TOP</code>.
             * @see #addTab
             */
            // @ts-ignore
            constructor()
            /**
             * Creates an empty <code>TabbedPane</code> with the specified tab placement
             * of either: <code>JTabbedPane.TOP</code>, <code>JTabbedPane.BOTTOM</code>,
             * <code>JTabbedPane.LEFT</code>, or <code>JTabbedPane.RIGHT</code>.
             * @param tabPlacement the placement for the tabs relative to the content
             * @see #addTab
             */
            // @ts-ignore
            constructor(tabPlacement: number /*int*/)
            /**
             * Creates an empty <code>TabbedPane</code> with the specified tab placement
             * and tab layout policy.  Tab placement may be either:
             * <code>JTabbedPane.TOP</code>, <code>JTabbedPane.BOTTOM</code>,
             * <code>JTabbedPane.LEFT</code>, or <code>JTabbedPane.RIGHT</code>.
             * Tab layout policy may be either: <code>JTabbedPane.WRAP_TAB_LAYOUT</code>
             * or <code>JTabbedPane.SCROLL_TAB_LAYOUT</code>.
             * @param tabPlacement the placement for the tabs relative to the content
             * @param tabLayoutPolicy the policy for laying out tabs when all tabs will not fit on one run
             * @exception IllegalArgumentException if tab placement or tab layout policy are not
             *             one of the above supported values
             * @see #addTab
             * @since 1.4
             */
            // @ts-ignore
            constructor(tabPlacement: number /*int*/, tabLayoutPolicy: number /*int*/)
            /**
             * The tab layout policy for wrapping tabs in multiple runs when all
             * tabs will not fit within a single run.
             */
            // @ts-ignore
            readonly WRAP_TAB_LAYOUT: number /*int*/
            /**
             * Tab layout policy for providing a subset of available tabs when all
             * the tabs will not fit within a single run.  If all the tabs do
             * not fit within a single run the look and feel will provide a way
             * to navigate to hidden tabs.
             */
            // @ts-ignore
            readonly SCROLL_TAB_LAYOUT: number /*int*/
            /**
             * Where the tabs are placed.
             * @see #setTabPlacement
             */
            // @ts-ignore
            tabPlacement: number /*int*/
            /**
             * The default selection model
             */
            // @ts-ignore
            model: javax.swing.SingleSelectionModel
            /**
             * The <code>changeListener</code> is the listener we add to the
             * model.
             */
            // @ts-ignore
            changeListener: javax.swing.event.ChangeListener
            /**
             * Only one <code>ChangeEvent</code> is needed per <code>TabPane</code>
             * instance since the
             * event's only (read-only) state is the source property.  The source
             * of events generated here is always "this".
             */
            // @ts-ignore
            changeEvent: javax.swing.event.ChangeEvent
            /**
             * Returns the UI object which implements the L&amp;F for this component.
             * @return a <code>TabbedPaneUI</code> object
             * @see #setUI
             */
            // @ts-ignore
            getUI(): javax.swing.plaf.TabbedPaneUI
            /**
             * Sets the UI object which implements the L&amp;F for this component.
             * @param ui the new UI object
             * @see UIDefaults#getUI
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the tabbedpane's LookAndFeel
             */
            // @ts-ignore
            setUI(ui: javax.swing.plaf.TabbedPaneUI): void
            /**
             * Resets the UI property to a value from the current look and feel.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            updateUI(): void
            /**
             * Returns the name of the UI class that implements the
             * L&amp;F for this component.
             * @return the string "TabbedPaneUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            getUIClassID(): java.lang.String
            /**
             * Subclasses that want to handle <code>ChangeEvents</code> differently
             * can override this to return a subclass of <code>ModelListener</code> or
             * another <code>ChangeListener</code> implementation.
             * @see #fireStateChanged
             */
            // @ts-ignore
            createChangeListener(): javax.swing.event.ChangeListener
            /**
             * Adds a <code>ChangeListener</code> to this tabbedpane.
             * @param l the <code>ChangeListener</code> to add
             * @see #fireStateChanged
             * @see #removeChangeListener
             */
            // @ts-ignore
            addChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Removes a <code>ChangeListener</code> from this tabbedpane.
             * @param l the <code>ChangeListener</code> to remove
             * @see #fireStateChanged
             * @see #addChangeListener
             */
            // @ts-ignore
            removeChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Returns an array of all the <code>ChangeListener</code>s added
             * to this <code>JTabbedPane</code> with <code>addChangeListener</code>.
             * @return all of the <code>ChangeListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getChangeListeners(): javax.swing.event.ChangeListener[]
            /**
             * Sends a {@code ChangeEvent}, with this {@code JTabbedPane} as the source,
             * to each registered listener. This method is called each time there is
             * a change to either the selected index or the selected tab in the
             * {@code JTabbedPane}. Usually, the selected index and selected tab change
             * together. However, there are some cases, such as tab addition, where the
             * selected index changes and the same tab remains selected. There are other
             * cases, such as deleting the selected tab, where the index remains the
             * same, but a new tab moves to that index. Events are fired for all of
             * these cases.
             * @see #addChangeListener
             * @see EventListenerList
             */
            // @ts-ignore
            fireStateChanged(): void
            /**
             * Returns the model associated with this tabbedpane.
             * @see #setModel
             */
            // @ts-ignore
            getModel(): javax.swing.SingleSelectionModel
            /**
             * Sets the model to be used with this tabbedpane.
             * @param model the model to be used
             * @see #getModel
             * @beaninfo bound: true
             *  description: The tabbedpane's SingleSelectionModel.
             */
            // @ts-ignore
            setModel(model: javax.swing.SingleSelectionModel): void
            /**
             * Returns the placement of the tabs for this tabbedpane.
             * @see #setTabPlacement
             */
            // @ts-ignore
            getTabPlacement(): int
            /**
             * Sets the tab placement for this tabbedpane.
             * Possible values are:<ul>
             * <li><code>JTabbedPane.TOP</code>
             * <li><code>JTabbedPane.BOTTOM</code>
             * <li><code>JTabbedPane.LEFT</code>
             * <li><code>JTabbedPane.RIGHT</code>
             * </ul>
             * The default value, if not set, is <code>SwingConstants.TOP</code>.
             * @param tabPlacement the placement for the tabs relative to the content
             * @exception IllegalArgumentException if tab placement value isn't one
             *                           of the above valid values
             * @beaninfo preferred: true
             *         bound: true
             *     attribute: visualUpdate true
             *          enum: TOP JTabbedPane.TOP
             *                LEFT JTabbedPane.LEFT
             *                BOTTOM JTabbedPane.BOTTOM
             *                RIGHT JTabbedPane.RIGHT
             *   description: The tabbedpane's tab placement.
             */
            // @ts-ignore
            setTabPlacement(tabPlacement: number /*int*/): void
            /**
             * Returns the policy used by the tabbedpane to layout the tabs when all the
             * tabs will not fit within a single run.
             * @see #setTabLayoutPolicy
             * @since 1.4
             */
            // @ts-ignore
            getTabLayoutPolicy(): int
            /**
             * Sets the policy which the tabbedpane will use in laying out the tabs
             * when all the tabs will not fit within a single run.
             * Possible values are:
             * <ul>
             * <li><code>JTabbedPane.WRAP_TAB_LAYOUT</code>
             * <li><code>JTabbedPane.SCROLL_TAB_LAYOUT</code>
             * </ul>
             * The default value, if not set by the UI, is <code>JTabbedPane.WRAP_TAB_LAYOUT</code>.
             * <p>
             * Some look and feels might only support a subset of the possible
             * layout policies, in which case the value of this property may be
             * ignored.
             * @param tabLayoutPolicy the policy used to layout the tabs
             * @exception IllegalArgumentException if layoutPolicy value isn't one
             *                           of the above valid values
             * @see #getTabLayoutPolicy
             * @since 1.4
             * @beaninfo preferred: true
             *         bound: true
             *     attribute: visualUpdate true
             *          enum: WRAP_TAB_LAYOUT JTabbedPane.WRAP_TAB_LAYOUT
             *                SCROLL_TAB_LAYOUT JTabbedPane.SCROLL_TAB_LAYOUT
             *   description: The tabbedpane's policy for laying out the tabs
             */
            // @ts-ignore
            setTabLayoutPolicy(tabLayoutPolicy: number /*int*/): void
            /**
             * Returns the currently selected index for this tabbedpane.
             * Returns -1 if there is no currently selected tab.
             * @return the index of the selected tab
             * @see #setSelectedIndex
             */
            // @ts-ignore
            getSelectedIndex(): int
            /**
             * Sets the selected index for this tabbedpane. The index must be
             * a valid tab index or -1, which indicates that no tab should be selected
             * (can also be used when there are no tabs in the tabbedpane).  If a -1
             * value is specified when the tabbedpane contains one or more tabs, then
             * the results will be implementation defined.
             * @param index  the index to be selected
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < -1 || index >= tab count)}
             * @see #getSelectedIndex
             * @see SingleSelectionModel#setSelectedIndex
             * @beaninfo preferred: true
             *  description: The tabbedpane's selected tab index.
             */
            // @ts-ignore
            setSelectedIndex(index: number /*int*/): void
            /**
             * Returns the currently selected component for this tabbedpane.
             * Returns <code>null</code> if there is no currently selected tab.
             * @return the component corresponding to the selected tab
             * @see #setSelectedComponent
             */
            // @ts-ignore
            getSelectedComponent(): java.awt.Component
            /**
             * Sets the selected component for this tabbedpane.  This
             * will automatically set the <code>selectedIndex</code> to the index
             * corresponding to the specified component.
             * @exception IllegalArgumentException if component not found in tabbed
             *           pane
             * @see #getSelectedComponent
             * @beaninfo preferred: true
             *  description: The tabbedpane's selected component.
             */
            // @ts-ignore
            setSelectedComponent(c: java.awt.Component): void
            /**
             * Inserts a new tab for the given component, at the given index,
             * represented by the given title and/or icon, either of which may
             * be {@code null}.
             * @param title the title to be displayed on the tab
             * @param icon the icon to be displayed on the tab
             * @param component the component to be displayed when this tab is clicked.
             * @param tip the tooltip to be displayed for this tab
             * @param index the position to insert this new tab
             *        ({#code > 0 and <= getTabCount()})
             * @throws IndexOutOfBoundsException if the index is out of range
             *          ({#code < 0 or > getTabCount()})
             * @see #addTab
             * @see #removeTabAt
             */
            // @ts-ignore
            insertTab(title: string, icon: javax.swing.Icon, component: java.awt.Component, tip: string, index: number /*int*/): void
            /**
             * Adds a <code>component</code> and <code>tip</code>
             * represented by a <code>title</code> and/or <code>icon</code>,
             * either of which can be <code>null</code>.
             * Cover method for <code>insertTab</code>.
             * @param title the title to be displayed in this tab
             * @param icon the icon to be displayed in this tab
             * @param component the component to be displayed when this tab is clicked
             * @param tip the tooltip to be displayed for this tab
             * @see #insertTab
             * @see #removeTabAt
             */
            // @ts-ignore
            addTab(title: string, icon: javax.swing.Icon, component: java.awt.Component, tip: string): void
            /**
             * Adds a <code>component</code> represented by a <code>title</code>
             * and/or <code>icon</code>, either of which can be <code>null</code>.
             * Cover method for <code>insertTab</code>.
             * @param title the title to be displayed in this tab
             * @param icon the icon to be displayed in this tab
             * @param component the component to be displayed when this tab is clicked
             * @see #insertTab
             * @see #removeTabAt
             */
            // @ts-ignore
            addTab(title: string, icon: javax.swing.Icon, component: java.awt.Component): void
            /**
             * Adds a <code>component</code> represented by a <code>title</code>
             * and no icon.
             * Cover method for <code>insertTab</code>.
             * @param title the title to be displayed in this tab
             * @param component the component to be displayed when this tab is clicked
             * @see #insertTab
             * @see #removeTabAt
             */
            // @ts-ignore
            addTab(title: string, component: java.awt.Component): void
            /**
             * Adds a <code>component</code> with a tab title defaulting to
             * the name of the component which is the result of calling
             * <code>component.getName</code>.
             * Cover method for <code>insertTab</code>.
             * @param component the component to be displayed when this tab is clicked
             * @return the component
             * @see #insertTab
             * @see #removeTabAt
             */
            // @ts-ignore
            add(component: java.awt.Component): java.awt.Component
            /**
             * Adds a <code>component</code> with the specified tab title.
             * Cover method for <code>insertTab</code>.
             * @param title the title to be displayed in this tab
             * @param component the component to be displayed when this tab is clicked
             * @return the component
             * @see #insertTab
             * @see #removeTabAt
             */
            // @ts-ignore
            add(title: string, component: java.awt.Component): java.awt.Component
            /**
             * Adds a <code>component</code> at the specified tab index with a tab
             * title defaulting to the name of the component.
             * Cover method for <code>insertTab</code>.
             * @param component the component to be displayed when this tab is clicked
             * @param index the position to insert this new tab
             * @return the component
             * @see #insertTab
             * @see #removeTabAt
             */
            // @ts-ignore
            add(component: java.awt.Component, index: number /*int*/): java.awt.Component
            /**
             * Adds a <code>component</code> to the tabbed pane.
             * If <code>constraints</code> is a <code>String</code> or an
             * <code>Icon</code>, it will be used for the tab title,
             * otherwise the component's name will be used as the tab title.
             * Cover method for <code>insertTab</code>.
             * @param component the component to be displayed when this tab is clicked
             * @param constraints the object to be displayed in the tab
             * @see #insertTab
             * @see #removeTabAt
             */
            // @ts-ignore
            add(component: java.awt.Component, constraints: any): void
            /**
             * Adds a <code>component</code> at the specified tab index.
             * If <code>constraints</code> is a <code>String</code> or an
             * <code>Icon</code>, it will be used for the tab title,
             * otherwise the component's name will be used as the tab title.
             * Cover method for <code>insertTab</code>.
             * @param component the component to be displayed when this tab is clicked
             * @param constraints the object to be displayed in the tab
             * @param index the position to insert this new tab
             * @see #insertTab
             * @see #removeTabAt
             */
            // @ts-ignore
            add(component: java.awt.Component, constraints: any, index: number /*int*/): void
            /**
             * Removes the tab at <code>index</code>.
             * After the component associated with <code>index</code> is removed,
             * its visibility is reset to true to ensure it will be visible
             * if added to other containers.
             * @param index the index of the tab to be removed
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #addTab
             * @see #insertTab
             */
            // @ts-ignore
            removeTabAt(index: number /*int*/): void
            /**
             * Removes the specified <code>Component</code> from the
             * <code>JTabbedPane</code>. The method does nothing
             * if the <code>component</code> is null.
             * @param component the component to remove from the tabbedpane
             * @see #addTab
             * @see #removeTabAt
             */
            // @ts-ignore
            remove(component: java.awt.Component): void
            /**
             * Removes the tab and component which corresponds to the specified index.
             * @param index the index of the component to remove from the
             *           <code>tabbedpane</code>
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #addTab
             * @see #removeTabAt
             */
            // @ts-ignore
            remove(index: number /*int*/): void
            /**
             * Removes all the tabs and their corresponding components
             * from the <code>tabbedpane</code>.
             * @see #addTab
             * @see #removeTabAt
             */
            // @ts-ignore
            removeAll(): void
            /**
             * Returns the number of tabs in this <code>tabbedpane</code>.
             * @return an integer specifying the number of tabbed pages
             */
            // @ts-ignore
            getTabCount(): int
            /**
             * Returns the number of tab runs currently used to display
             * the tabs.
             * @return an integer giving the number of rows if the
             *           <code>tabPlacement</code>
             *           is <code>TOP</code> or <code>BOTTOM</code>
             *           and the number of columns if
             *           <code>tabPlacement</code>
             *           is <code>LEFT</code> or <code>RIGHT</code>,
             *           or 0 if there is no UI set on this <code>tabbedpane</code>
             */
            // @ts-ignore
            getTabRunCount(): int
            /**
             * Returns the tab title at <code>index</code>.
             * @param index  the index of the item being queried
             * @return the title at <code>index</code>
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #setTitleAt
             */
            // @ts-ignore
            getTitleAt(index: number /*int*/): java.lang.String
            /**
             * Returns the tab icon at <code>index</code>.
             * @param index  the index of the item being queried
             * @return the icon at <code>index</code>
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #setIconAt
             */
            // @ts-ignore
            getIconAt(index: number /*int*/): javax.swing.Icon
            /**
             * Returns the tab disabled icon at <code>index</code>.
             * If the tab disabled icon doesn't exist at <code>index</code>
             * this will forward the call to the look and feel to construct
             * an appropriate disabled Icon from the corresponding enabled
             * Icon. Some look and feels might not render the disabled Icon,
             * in which case it won't be created.
             * @param index  the index of the item being queried
             * @return the icon at <code>index</code>
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #setDisabledIconAt
             */
            // @ts-ignore
            getDisabledIconAt(index: number /*int*/): javax.swing.Icon
            /**
             * Returns the tab tooltip text at <code>index</code>.
             * @param index  the index of the item being queried
             * @return a string containing the tool tip text at <code>index</code>
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #setToolTipTextAt
             * @since 1.3
             */
            // @ts-ignore
            getToolTipTextAt(index: number /*int*/): java.lang.String
            /**
             * Returns the tab background color at <code>index</code>.
             * @param index  the index of the item being queried
             * @return the <code>Color</code> of the tab background at
             *           <code>index</code>
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #setBackgroundAt
             */
            // @ts-ignore
            getBackgroundAt(index: number /*int*/): java.awt.Color
            /**
             * Returns the tab foreground color at <code>index</code>.
             * @param index  the index of the item being queried
             * @return the <code>Color</code> of the tab foreground at
             *           <code>index</code>
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #setForegroundAt
             */
            // @ts-ignore
            getForegroundAt(index: number /*int*/): java.awt.Color
            /**
             * Returns whether or not the tab at <code>index</code> is
             * currently enabled.
             * @param index  the index of the item being queried
             * @return true if the tab at <code>index</code> is enabled;
             *           false otherwise
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #setEnabledAt
             */
            // @ts-ignore
            isEnabledAt(index: number /*int*/): boolean
            /**
             * Returns the component at <code>index</code>.
             * @param index  the index of the item being queried
             * @return the <code>Component</code> at <code>index</code>
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #setComponentAt
             */
            // @ts-ignore
            getComponentAt(index: number /*int*/): java.awt.Component
            /**
             * Returns the keyboard mnemonic for accessing the specified tab.
             * The mnemonic is the key which when combined with the look and feel's
             * mouseless modifier (usually Alt) will activate the specified
             * tab.
             * @since 1.4
             * @param tabIndex the index of the tab that the mnemonic refers to
             * @return the key code which represents the mnemonic;
             *          -1 if a mnemonic is not specified for the tab
             * @exception IndexOutOfBoundsException if index is out of range
             *             (<code>tabIndex</code> &lt; 0 ||
             *               <code>tabIndex</code> &gt;= tab count)
             * @see #setDisplayedMnemonicIndexAt(int,int)
             * @see #setMnemonicAt(int,int)
             */
            // @ts-ignore
            getMnemonicAt(tabIndex: number /*int*/): int
            /**
             * Returns the character, as an index, that the look and feel should
             * provide decoration for as representing the mnemonic character.
             * @since 1.4
             * @param tabIndex the index of the tab that the mnemonic refers to
             * @return index representing mnemonic character if one exists;
             *     otherwise returns -1
             * @exception IndexOutOfBoundsException if index is out of range
             *             (<code>tabIndex</code> &lt; 0 ||
             *               <code>tabIndex</code> &gt;= tab count)
             * @see #setDisplayedMnemonicIndexAt(int,int)
             * @see #setMnemonicAt(int,int)
             */
            // @ts-ignore
            getDisplayedMnemonicIndexAt(tabIndex: number /*int*/): int
            /**
             * Returns the tab bounds at <code>index</code>.  If the tab at
             * this index is not currently visible in the UI, then returns
             * <code>null</code>.
             * If there is no UI set on this <code>tabbedpane</code>,
             * then returns <code>null</code>.
             * @param index the index to be queried
             * @return a <code>Rectangle</code> containing the tab bounds at
             *           <code>index</code>, or <code>null</code> if tab at
             *           <code>index</code> is not currently visible in the UI,
             *           or if there is no UI set on this <code>tabbedpane</code>
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             */
            // @ts-ignore
            getBoundsAt(index: number /*int*/): java.awt.Rectangle
            /**
             * Sets the title at <code>index</code> to <code>title</code> which
             * can be <code>null</code>.
             * The title is not shown if a tab component for this tab was specified.
             * An internal exception is raised if there is no tab at that index.
             * @param index the tab index where the title should be set
             * @param title the title to be displayed in the tab
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #getTitleAt
             * @see #setTabComponentAt
             * @beaninfo preferred: true
             *     attribute: visualUpdate true
             *   description: The title at the specified tab index.
             */
            // @ts-ignore
            setTitleAt(index: number /*int*/, title: string): void
            /**
             * Sets the icon at <code>index</code> to <code>icon</code> which can be
             * <code>null</code>. This does not set disabled icon at <code>icon</code>.
             * If the new Icon is different than the current Icon and disabled icon
             * is not explicitly set, the LookAndFeel will be asked to generate a disabled
             * Icon. To explicitly set disabled icon, use <code>setDisableIconAt()</code>.
             * The icon is not shown if a tab component for this tab was specified.
             * An internal exception is raised if there is no tab at that index.
             * @param index the tab index where the icon should be set
             * @param icon the icon to be displayed in the tab
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #setDisabledIconAt
             * @see #getIconAt
             * @see #getDisabledIconAt
             * @see #setTabComponentAt
             * @beaninfo preferred: true
             *     attribute: visualUpdate true
             *   description: The icon at the specified tab index.
             */
            // @ts-ignore
            setIconAt(index: number /*int*/, icon: javax.swing.Icon): void
            /**
             * Sets the disabled icon at <code>index</code> to <code>icon</code>
             * which can be <code>null</code>.
             * An internal exception is raised if there is no tab at that index.
             * @param index the tab index where the disabled icon should be set
             * @param disabledIcon the icon to be displayed in the tab when disabled
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #getDisabledIconAt
             * @beaninfo preferred: true
             *     attribute: visualUpdate true
             *   description: The disabled icon at the specified tab index.
             */
            // @ts-ignore
            setDisabledIconAt(index: number /*int*/, disabledIcon: javax.swing.Icon): void
            /**
             * Sets the tooltip text at <code>index</code> to <code>toolTipText</code>
             * which can be <code>null</code>.
             * An internal exception is raised if there is no tab at that index.
             * @param index the tab index where the tooltip text should be set
             * @param toolTipText the tooltip text to be displayed for the tab
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #getToolTipTextAt
             * @beaninfo preferred: true
             *   description: The tooltip text at the specified tab index.
             * @since 1.3
             */
            // @ts-ignore
            setToolTipTextAt(index: number /*int*/, toolTipText: string): void
            /**
             * Sets the background color at <code>index</code> to
             * <code>background</code>
             * which can be <code>null</code>, in which case the tab's background color
             * will default to the background color of the <code>tabbedpane</code>.
             * An internal exception is raised if there is no tab at that index.
             * <p>
             * It is up to the look and feel to honor this property, some may
             * choose to ignore it.
             * @param index the tab index where the background should be set
             * @param background the color to be displayed in the tab's background
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #getBackgroundAt
             * @beaninfo preferred: true
             *     attribute: visualUpdate true
             *   description: The background color at the specified tab index.
             */
            // @ts-ignore
            setBackgroundAt(index: number /*int*/, background: java.awt.Color): void
            /**
             * Sets the foreground color at <code>index</code> to
             * <code>foreground</code> which can be
             * <code>null</code>, in which case the tab's foreground color
             * will default to the foreground color of this <code>tabbedpane</code>.
             * An internal exception is raised if there is no tab at that index.
             * <p>
             * It is up to the look and feel to honor this property, some may
             * choose to ignore it.
             * @param index the tab index where the foreground should be set
             * @param foreground the color to be displayed as the tab's foreground
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #getForegroundAt
             * @beaninfo preferred: true
             *     attribute: visualUpdate true
             *   description: The foreground color at the specified tab index.
             */
            // @ts-ignore
            setForegroundAt(index: number /*int*/, foreground: java.awt.Color): void
            /**
             * Sets whether or not the tab at <code>index</code> is enabled.
             * An internal exception is raised if there is no tab at that index.
             * @param index the tab index which should be enabled/disabled
             * @param enabled whether or not the tab should be enabled
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #isEnabledAt
             */
            // @ts-ignore
            setEnabledAt(index: number /*int*/, enabled: boolean): void
            /**
             * Sets the component at <code>index</code> to <code>component</code>.
             * An internal exception is raised if there is no tab at that index.
             * @param index the tab index where this component is being placed
             * @param component the component for the tab
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #getComponentAt
             * @beaninfo attribute: visualUpdate true
             *   description: The component at the specified tab index.
             */
            // @ts-ignore
            setComponentAt(index: number /*int*/, component: java.awt.Component): void
            /**
             * Provides a hint to the look and feel as to which character in the
             * text should be decorated to represent the mnemonic. Not all look and
             * feels may support this. A value of -1 indicates either there is
             * no mnemonic for this tab, or you do not wish the mnemonic to be
             * displayed for this tab.
             * <p>
             * The value of this is updated as the properties relating to the
             * mnemonic change (such as the mnemonic itself, the text...).
             * You should only ever have to call this if
             * you do not wish the default character to be underlined. For example, if
             * the text at tab index 3 was 'Apple Price', with a mnemonic of 'p',
             * and you wanted the 'P'
             * to be decorated, as 'Apple <u>P</u>rice', you would have to invoke
             * <code>setDisplayedMnemonicIndex(3, 6)</code> after invoking
             * <code>setMnemonicAt(3, KeyEvent.VK_P)</code>.
             * <p>Note that it is the programmer's responsibility to ensure
             * that each tab has a unique mnemonic or unpredictable results may
             * occur.
             * @since 1.4
             * @param tabIndex the index of the tab that the mnemonic refers to
             * @param mnemonicIndex index into the <code>String</code> to underline
             * @exception IndexOutOfBoundsException if <code>tabIndex</code> is
             *             out of range ({#code tabIndex < 0 || tabIndex >= tab
             *             count})
             * @exception IllegalArgumentException will be thrown if
             *             <code>mnemonicIndex</code> is &gt;= length of the tab
             *             title , or &lt; -1
             * @see #setMnemonicAt(int,int)
             * @see #getDisplayedMnemonicIndexAt(int)
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: the index into the String to draw the keyboard character
             *                mnemonic at
             */
            // @ts-ignore
            setDisplayedMnemonicIndexAt(tabIndex: number /*int*/, mnemonicIndex: number /*int*/): void
            /**
             * Sets the keyboard mnemonic for accessing the specified tab.
             * The mnemonic is the key which when combined with the look and feel's
             * mouseless modifier (usually Alt) will activate the specified
             * tab.
             * <p>
             * A mnemonic must correspond to a single key on the keyboard
             * and should be specified using one of the <code>VK_XXX</code>
             * keycodes defined in <code>java.awt.event.KeyEvent</code>
             * or one of the extended keycodes obtained through
             * <code>java.awt.event.KeyEvent.getExtendedKeyCodeForChar</code>.
             * Mnemonics are case-insensitive, therefore a key event
             * with the corresponding keycode would cause the button to be
             * activated whether or not the Shift modifier was pressed.
             * <p>
             * This will update the displayed mnemonic property for the specified
             * tab.
             * @since 1.4
             * @param tabIndex the index of the tab that the mnemonic refers to
             * @param mnemonic the key code which represents the mnemonic
             * @exception IndexOutOfBoundsException if <code>tabIndex</code> is out
             *             of range ({#code tabIndex < 0 || tabIndex >= tab count})
             * @see #getMnemonicAt(int)
             * @see #setDisplayedMnemonicIndexAt(int,int)
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: The keyboard mnenmonic, as a KeyEvent VK constant,
             *                for the specified tab
             */
            // @ts-ignore
            setMnemonicAt(tabIndex: number /*int*/, mnemonic: number /*int*/): void
            /**
             * Returns the first tab index with a given <code>title</code>,  or
             * -1 if no tab has this title.
             * @param title the title for the tab
             * @return the first tab index which matches <code>title</code>, or
             *           -1 if no tab has this title
             */
            // @ts-ignore
            indexOfTab(title: string): int
            /**
             * Returns the first tab index with a given <code>icon</code>,
             * or -1 if no tab has this icon.
             * @param icon the icon for the tab
             * @return the first tab index which matches <code>icon</code>,
             *           or -1 if no tab has this icon
             */
            // @ts-ignore
            indexOfTab(icon: javax.swing.Icon): int
            /**
             * Returns the index of the tab for the specified component.
             * Returns -1 if there is no tab for this component.
             * @param component the component for the tab
             * @return the first tab which matches this component, or -1
             *           if there is no tab for this component
             */
            // @ts-ignore
            indexOfComponent(component: java.awt.Component): int
            /**
             * Returns the tab index corresponding to the tab whose bounds
             * intersect the specified location.  Returns -1 if no tab
             * intersects the location.
             * @param x the x location relative to this tabbedpane
             * @param y the y location relative to this tabbedpane
             * @return the tab index which intersects the location, or
             *          -1 if no tab intersects the location
             * @since 1.4
             */
            // @ts-ignore
            indexAtLocation(x: number /*int*/, y: number /*int*/): int
            /**
             * Returns the tooltip text for the component determined by the
             * mouse event location.
             * @param event  the <code>MouseEvent</code> that tells where the
             *           cursor is lingering
             * @return the <code>String</code> containing the tooltip text
             */
            // @ts-ignore
            getToolTipText(event: java.awt.event.MouseEvent): java.lang.String
            /**
             * Returns a string representation of this <code>JTabbedPane</code>.
             * This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this JTabbedPane.
             */
            // @ts-ignore
            paramString(): java.lang.String
            /**
             * Gets the AccessibleContext associated with this JTabbedPane.
             * For tabbed panes, the AccessibleContext takes the form of an
             * AccessibleJTabbedPane.
             * A new AccessibleJTabbedPane instance is created if necessary.
             * @return an AccessibleJTabbedPane that serves as the
             *          AccessibleContext of this JTabbedPane
             */
            // @ts-ignore
            getAccessibleContext(): javax.accessibility.AccessibleContext
            /**
             * Sets the component that is responsible for rendering the
             * title for the specified tab.  A null value means
             * <code>JTabbedPane</code> will render the title and/or icon for
             * the specified tab.  A non-null value means the component will
             * render the title and <code>JTabbedPane</code> will not render
             * the title and/or icon.
             * <p>
             * Note: The component must not be one that the developer has
             * already added to the tabbed pane.
             * @param index the tab index where the component should be set
             * @param component the component to render the title for the
             *                   specified tab
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @exception IllegalArgumentException if component has already been
             *             added to this <code>JTabbedPane</code>
             * @see #getTabComponentAt
             * @beaninfo preferred: true
             *     attribute: visualUpdate true
             *   description: The tab component at the specified tab index.
             * @since 1.6
             */
            // @ts-ignore
            setTabComponentAt(index: number /*int*/, component: java.awt.Component): void
            /**
             * Returns the tab component at <code>index</code>.
             * @param index  the index of the item being queried
             * @return the tab component at <code>index</code>
             * @exception IndexOutOfBoundsException if index is out of range
             *             {#code (index < 0 || index >= tab count)}
             * @see #setTabComponentAt
             * @since 1.6
             */
            // @ts-ignore
            getTabComponentAt(index: number /*int*/): java.awt.Component
            /**
             * Returns the index of the tab for the specified tab component.
             * Returns -1 if there is no tab for this tab component.
             * @param tabComponent the tab component for the tab
             * @return the first tab which matches this tab component, or -1
             *           if there is no tab for this tab component
             * @see #setTabComponentAt
             * @see #getTabComponentAt
             * @since 1.6
             */
            // @ts-ignore
            indexOfTabComponent(tabComponent: java.awt.Component): int
        }
    }
}
