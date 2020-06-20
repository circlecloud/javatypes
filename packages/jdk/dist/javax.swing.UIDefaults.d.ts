declare namespace javax {
    namespace swing {
        /**
         * A table of defaults for Swing components.  Applications can set/get
         * default values via the <code>UIManager</code>.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @see UIManager
         * @author Hans Muller
         */
        // @ts-ignore
        class UIDefaults extends java.util.Hashtable<java.lang.Object, java.lang.Object> {
            /**
             * Creates an empty defaults table.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates an empty defaults table with the specified initial capacity and
             * load factor.
             * @param initialCapacity   the initial capacity of the defaults table
             * @param loadFactor        the load factor of the defaults table
             * @see java.util.Hashtable
             * @since 1.6
             */
            // @ts-ignore
            constructor(initialCapacity: number /*int*/, loadFactor: number /*float*/)
            /**
             * Creates a defaults table initialized with the specified
             * key/value pairs.  For example:
             * <pre>
             * Object[] uiDefaults = {
             * "Font", new Font("Dialog", Font.BOLD, 12),
             * "Color", Color.red,
             * "five", new Integer(5)
             * }
             * UIDefaults myDefaults = new UIDefaults(uiDefaults);
             * </pre>
             * @param keyValueList  an array of objects containing the key/value
             *           pairs
             */
            // @ts-ignore
            constructor(keyValueList: any[])
            /**
             * Returns the value for key.  If the value is a
             * <code>UIDefaults.LazyValue</code> then the real
             * value is computed with <code>LazyValue.createValue()</code>,
             * the table entry is replaced, and the real value is returned.
             * If the value is an <code>UIDefaults.ActiveValue</code>
             * the table entry is not replaced - the value is computed
             * with <code>ActiveValue.createValue()</code> for each
             * <code>get()</code> call.
             * If the key is not found in the table then it is searched for in the list
             * of resource bundles maintained by this object.  The resource bundles are
             * searched most recently added first using the locale returned by
             * <code>getDefaultLocale</code>.  <code>LazyValues</code> and
             * <code>ActiveValues</code> are not supported in the resource bundles.
             * @param key the desired key
             * @return the value for <code>key</code>
             * @see LazyValue
             * @see ActiveValue
             * @see java.util.Hashtable#get
             * @see #getDefaultLocale
             * @see #addResourceBundle
             * @since 1.4
             */
            // @ts-ignore
            get(key: any): java.lang.Object
            /**
             * Returns the value for key associated with the given locale.
             * If the value is a <code>UIDefaults.LazyValue</code> then the real
             * value is computed with <code>LazyValue.createValue()</code>,
             * the table entry is replaced, and the real value is returned.
             * If the value is an <code>UIDefaults.ActiveValue</code>
             * the table entry is not replaced - the value is computed
             * with <code>ActiveValue.createValue()</code> for each
             * <code>get()</code> call.
             * If the key is not found in the table then it is searched for in the list
             * of resource bundles maintained by this object.  The resource bundles are
             * searched most recently added first using the given locale.
             * <code>LazyValues</code> and <code>ActiveValues</code> are not supported
             * in the resource bundles.
             * @param key the desired key
             * @param l the desired <code>locale</code>
             * @return the value for <code>key</code>
             * @see LazyValue
             * @see ActiveValue
             * @see java.util.Hashtable#get
             * @see #addResourceBundle
             * @since 1.4
             */
            // @ts-ignore
            get(key: any, l: java.util.Locale): java.lang.Object
            /**
             * Sets the value of <code>key</code> to <code>value</code> for all locales.
             * If <code>key</code> is a string and the new value isn't
             * equal to the old one, fire a <code>PropertyChangeEvent</code>.
             * If value is <code>null</code>, the key is removed from the table.
             * @param key    the unique <code>Object</code> who's value will be used
             *           to retrieve the data value associated with it
             * @param value  the new <code>Object</code> to store as data under
             *           that key
             * @return the previous <code>Object</code> value, or <code>null</code>
             * @see #putDefaults
             * @see java.util.Hashtable#put
             */
            // @ts-ignore
            put(key: any, value: any): java.lang.Object
            /**
             * Puts all of the key/value pairs in the database and
             * unconditionally generates one <code>PropertyChangeEvent</code>.
             * The events oldValue and newValue will be <code>null</code> and its
             * <code>propertyName</code> will be "UIDefaults".  The key/value pairs are
             * added for all locales.
             * @param keyValueList  an array of key/value pairs
             * @see #put
             * @see java.util.Hashtable#put
             */
            // @ts-ignore
            putDefaults(keyValueList: any[]): void
            /**
             * If the value of <code>key</code> is a <code>Font</code> return it,
             * otherwise return <code>null</code>.
             * @param key the desired key
             * @return if the value for <code>key</code> is a <code>Font</code>,
             *           return the <code>Font</code> object; otherwise return
             *           <code>null</code>
             */
            // @ts-ignore
            getFont(key: any): java.awt.Font
            /**
             * If the value of <code>key</code> for the given <code>Locale</code>
             * is a <code>Font</code> return it, otherwise return <code>null</code>.
             * @param key the desired key
             * @param l the desired locale
             * @return if the value for <code>key</code> and <code>Locale</code>
             *           is a <code>Font</code>,
             *           return the <code>Font</code> object; otherwise return
             *           <code>null</code>
             * @since 1.4
             */
            // @ts-ignore
            getFont(key: any, l: java.util.Locale): java.awt.Font
            /**
             * If the value of <code>key</code> is a <code>Color</code> return it,
             * otherwise return <code>null</code>.
             * @param key the desired key
             * @return if the value for <code>key</code> is a <code>Color</code>,
             *           return the <code>Color</code> object; otherwise return
             *           <code>null</code>
             */
            // @ts-ignore
            getColor(key: any): java.awt.Color
            /**
             * If the value of <code>key</code> for the given <code>Locale</code>
             * is a <code>Color</code> return it, otherwise return <code>null</code>.
             * @param key the desired key
             * @param l the desired locale
             * @return if the value for <code>key</code> and <code>Locale</code>
             *           is a <code>Color</code>,
             *           return the <code>Color</code> object; otherwise return
             *           <code>null</code>
             * @since 1.4
             */
            // @ts-ignore
            getColor(key: any, l: java.util.Locale): java.awt.Color
            /**
             * If the value of <code>key</code> is an <code>Icon</code> return it,
             * otherwise return <code>null</code>.
             * @param key the desired key
             * @return if the value for <code>key</code> is an <code>Icon</code>,
             *           return the <code>Icon</code> object; otherwise return
             *           <code>null</code>
             */
            // @ts-ignore
            getIcon(key: any): javax.swing.Icon
            /**
             * If the value of <code>key</code> for the given <code>Locale</code>
             * is an <code>Icon</code> return it, otherwise return <code>null</code>.
             * @param key the desired key
             * @param l the desired locale
             * @return if the value for <code>key</code> and <code>Locale</code>
             *           is an <code>Icon</code>,
             *           return the <code>Icon</code> object; otherwise return
             *           <code>null</code>
             * @since 1.4
             */
            // @ts-ignore
            getIcon(key: any, l: java.util.Locale): javax.swing.Icon
            /**
             * If the value of <code>key</code> is a <code>Border</code> return it,
             * otherwise return <code>null</code>.
             * @param key the desired key
             * @return if the value for <code>key</code> is a <code>Border</code>,
             *           return the <code>Border</code> object; otherwise return
             *           <code>null</code>
             */
            // @ts-ignore
            getBorder(key: any): javax.swing.border.Border
            /**
             * If the value of <code>key</code> for the given <code>Locale</code>
             * is a <code>Border</code> return it, otherwise return <code>null</code>.
             * @param key the desired key
             * @param l the desired locale
             * @return if the value for <code>key</code> and <code>Locale</code>
             *           is a <code>Border</code>,
             *           return the <code>Border</code> object; otherwise return
             *           <code>null</code>
             * @since 1.4
             */
            // @ts-ignore
            getBorder(key: any, l: java.util.Locale): javax.swing.border.Border
            /**
             * If the value of <code>key</code> is a <code>String</code> return it,
             * otherwise return <code>null</code>.
             * @param key the desired key
             * @return if the value for <code>key</code> is a <code>String</code>,
             *           return the <code>String</code> object; otherwise return
             *           <code>null</code>
             */
            // @ts-ignore
            getString(key: any): java.lang.String
            /**
             * If the value of <code>key</code> for the given <code>Locale</code>
             * is a <code>String</code> return it, otherwise return <code>null</code>.
             * @param key the desired key
             * @param l the desired <code>Locale</code>
             * @return if the value for <code>key</code> for the given
             *           <code>Locale</code> is a <code>String</code>,
             *           return the <code>String</code> object; otherwise return
             *           <code>null</code>
             * @since 1.4
             */
            // @ts-ignore
            getString(key: any, l: java.util.Locale): java.lang.String
            /**
             * If the value of <code>key</code> is an <code>Integer</code> return its
             * integer value, otherwise return 0.
             * @param key the desired key
             * @return if the value for <code>key</code> is an <code>Integer</code>,
             *           return its value, otherwise return 0
             */
            // @ts-ignore
            getInt(key: any): int
            /**
             * If the value of <code>key</code> for the given <code>Locale</code>
             * is an <code>Integer</code> return its integer value, otherwise return 0.
             * @param key the desired key
             * @param l the desired locale
             * @return if the value for <code>key</code> and <code>Locale</code>
             *           is an <code>Integer</code>,
             *           return its value, otherwise return 0
             * @since 1.4
             */
            // @ts-ignore
            getInt(key: any, l: java.util.Locale): int
            /**
             * If the value of <code>key</code> is boolean, return the
             * boolean value, otherwise return false.
             * @param key an <code>Object</code> specifying the key for the desired boolean value
             * @return if the value of <code>key</code> is boolean, return the
             *          boolean value, otherwise return false.
             * @since 1.4
             */
            // @ts-ignore
            getBoolean(key: any): boolean
            /**
             * If the value of <code>key</code> for the given <code>Locale</code>
             * is boolean, return the boolean value, otherwise return false.
             * @param key an <code>Object</code> specifying the key for the desired boolean value
             * @param l the desired locale
             * @return if the value for <code>key</code> and <code>Locale</code>
             *          is boolean, return the
             *          boolean value, otherwise return false.
             * @since 1.4
             */
            // @ts-ignore
            getBoolean(key: any, l: java.util.Locale): boolean
            /**
             * If the value of <code>key</code> is an <code>Insets</code> return it,
             * otherwise return <code>null</code>.
             * @param key the desired key
             * @return if the value for <code>key</code> is an <code>Insets</code>,
             *           return the <code>Insets</code> object; otherwise return
             *           <code>null</code>
             */
            // @ts-ignore
            getInsets(key: any): java.awt.Insets
            /**
             * If the value of <code>key</code> for the given <code>Locale</code>
             * is an <code>Insets</code> return it, otherwise return <code>null</code>.
             * @param key the desired key
             * @param l the desired locale
             * @return if the value for <code>key</code> and <code>Locale</code>
             *           is an <code>Insets</code>,
             *           return the <code>Insets</code> object; otherwise return
             *           <code>null</code>
             * @since 1.4
             */
            // @ts-ignore
            getInsets(key: any, l: java.util.Locale): java.awt.Insets
            /**
             * If the value of <code>key</code> is a <code>Dimension</code> return it,
             * otherwise return <code>null</code>.
             * @param key the desired key
             * @return if the value for <code>key</code> is a <code>Dimension</code>,
             *           return the <code>Dimension</code> object; otherwise return
             *           <code>null</code>
             */
            // @ts-ignore
            getDimension(key: any): java.awt.Dimension
            /**
             * If the value of <code>key</code> for the given <code>Locale</code>
             * is a <code>Dimension</code> return it, otherwise return <code>null</code>.
             * @param key the desired key
             * @param l the desired locale
             * @return if the value for <code>key</code> and <code>Locale</code>
             *           is a <code>Dimension</code>,
             *           return the <code>Dimension</code> object; otherwise return
             *           <code>null</code>
             * @since 1.4
             */
            // @ts-ignore
            getDimension(key: any, l: java.util.Locale): java.awt.Dimension
            /**
             * The value of <code>get(uidClassID)</code> must be the
             * <code>String</code> name of a
             * class that implements the corresponding <code>ComponentUI</code>
             * class.  If the class hasn't been loaded before, this method looks
             * up the class with <code>uiClassLoader.loadClass()</code> if a non
             * <code>null</code>
             * class loader is provided, <code>classForName()</code> otherwise.
             * <p>
             * If a mapping for <code>uiClassID</code> exists or if the specified
             * class can't be found, return <code>null</code>.
             * <p>
             * This method is used by <code>getUI</code>, it's usually
             * not necessary to call it directly.
             * @param uiClassID  a string containing the class ID
             * @param uiClassLoader the object which will load the class
             * @return the value of <code>Class.forName(get(uidClassID))</code>
             * @see #getUI
             */
            // @ts-ignore
            getUIClass(uiClassID: string, uiClassLoader: java.lang.ClassLoader): java.lang.Class<? extends javax.swing.plaf.ComponentUI>
            /**
             * Returns the L&amp;F class that renders this component.
             * @param uiClassID a string containing the class ID
             * @return the Class object returned by
             *           <code>getUIClass(uiClassID, null)</code>
             */
            // @ts-ignore
            getUIClass(uiClassID: string): java.lang.Class<? extends javax.swing.plaf.ComponentUI>
            /**
             * If <code>getUI()</code> fails for any reason,
             * it calls this method before returning <code>null</code>.
             * Subclasses may choose to do more or less here.
             * @param msg message string to print
             * @see #getUI
             */
            // @ts-ignore
            getUIError(msg: string): void
            /**
             * Creates an <code>ComponentUI</code> implementation for the
             * specified component.  In other words create the look
             * and feel specific delegate object for <code>target</code>.
             * This is done in two steps:
             * <ul>
             * <li> Look up the name of the <code>ComponentUI</code> implementation
             * class under the value returned by <code>target.getUIClassID()</code>.
             * <li> Use the implementation classes static <code>createUI()</code>
             * method to construct a look and feel delegate.
             * </ul>
             * @param target  the <code>JComponent</code> which needs a UI
             * @return the <code>ComponentUI</code> object
             */
            // @ts-ignore
            getUI(target: javax.swing.JComponent): javax.swing.plaf.ComponentUI
            /**
             * Adds a <code>PropertyChangeListener</code> to the listener list.
             * The listener is registered for all properties.
             * <p>
             * A <code>PropertyChangeEvent</code> will get fired whenever a default
             * is changed.
             * @param listener  the <code>PropertyChangeListener</code> to be added
             * @see java.beans.PropertyChangeSupport
             */
            // @ts-ignore
            addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
            /**
             * Removes a <code>PropertyChangeListener</code> from the listener list.
             * This removes a <code>PropertyChangeListener</code> that was registered
             * for all properties.
             * @param listener  the <code>PropertyChangeListener</code> to be removed
             * @see java.beans.PropertyChangeSupport
             */
            // @ts-ignore
            removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
            /**
             * Returns an array of all the <code>PropertyChangeListener</code>s added
             * to this UIDefaults with addPropertyChangeListener().
             * @return all of the <code>PropertyChangeListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
            /**
             * Support for reporting bound property changes.  If oldValue and
             * newValue are not equal and the <code>PropertyChangeEvent</code>x
             * listener list isn't empty, then fire a
             * <code>PropertyChange</code> event to each listener.
             * @param propertyName  the programmatic name of the property
             *           that was changed
             * @param oldValue  the old value of the property
             * @param newValue  the new value of the property
             * @see java.beans.PropertyChangeSupport
             */
            // @ts-ignore
            firePropertyChange(propertyName: string, oldValue: any, newValue: any): void
            /**
             * Adds a resource bundle to the list of resource bundles that are
             * searched for localized values.  Resource bundles are searched in the
             * reverse order they were added.  In other words, the most recently added
             * bundle is searched first.
             * @param bundleName  the base name of the resource bundle to be added
             * @see java.util.ResourceBundle
             * @see #removeResourceBundle
             * @since 1.4
             */
            // @ts-ignore
            addResourceBundle(bundleName: string): void
            /**
             * Removes a resource bundle from the list of resource bundles that are
             * searched for localized defaults.
             * @param bundleName  the base name of the resource bundle to be removed
             * @see java.util.ResourceBundle
             * @see #addResourceBundle
             * @since 1.4
             */
            // @ts-ignore
            removeResourceBundle(bundleName: string): void
            /**
             * Sets the default locale.  The default locale is used in retrieving
             * localized values via <code>get</code> methods that do not take a
             * locale argument.  As of release 1.4, Swing UI objects should retrieve
             * localized values using the locale of their component rather than the
             * default locale.  The default locale exists to provide compatibility with
             * pre 1.4 behaviour.
             * @param l the new default locale
             * @see #getDefaultLocale
             * @see #get(Object)
             * @see #get(Object,Locale)
             * @since 1.4
             */
            // @ts-ignore
            setDefaultLocale(l: java.util.Locale): void
            /**
             * Returns the default locale.  The default locale is used in retrieving
             * localized values via <code>get</code> methods that do not take a
             * locale argument.  As of release 1.4, Swing UI objects should retrieve
             * localized values using the locale of their component rather than the
             * default locale.  The default locale exists to provide compatibility with
             * pre 1.4 behaviour.
             * @return the default locale
             * @see #setDefaultLocale
             * @see #get(Object)
             * @see #get(Object,Locale)
             * @since 1.4
             */
            // @ts-ignore
            getDefaultLocale(): java.util.Locale
        }
    }
}
