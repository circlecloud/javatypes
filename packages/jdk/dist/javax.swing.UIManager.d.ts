declare namespace javax {
    namespace swing {
        /**
         * {@code UIManager} manages the current look and feel, the set of
         * available look and feels, {@code PropertyChangeListeners} that
         * are notified when the look and feel changes, look and feel defaults, and
         * convenience methods for obtaining various default values.
         * <h3>Specifying the look and feel</h3>
         * The look and feel can be specified in two distinct ways: by
         * specifying the fully qualified name of the class for the look and
         * feel, or by creating an instance of {@code LookAndFeel} and passing
         * it to {@code setLookAndFeel}. The following example illustrates
         * setting the look and feel to the system look and feel:
         * <pre>
         * UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
         * </pre>
         * The following example illustrates setting the look and feel based on
         * class name:
         * <pre>
         * UIManager.setLookAndFeel("javax.swing.plaf.metal.MetalLookAndFeel");
         * </pre>
         * Once the look and feel has been changed it is imperative to invoke
         * {@code updateUI} on all {@code JComponents}. The method {@link
         * SwingUtilities#updateComponentTreeUI} makes it easy to apply {@code
         * updateUI} to a containment hierarchy. Refer to it for
         * details. The exact behavior of not invoking {@code
         * updateUI} after changing the look and feel is
         * unspecified. It is very possible to receive unexpected exceptions,
         * painting problems, or worse.
         * <h3>Default look and feel</h3>
         * The class used for the default look and feel is chosen in the following
         * manner:
         * <ol>
         * <li>If the system property <code>swing.defaultlaf</code> is
         * {@code non-null}, use its value as the default look and feel class
         * name.
         * <li>If the {@link java.util.Properties} file <code>swing.properties</code>
         * exists and contains the key <code>swing.defaultlaf</code>,
         * use its value as the default look and feel class name. The location
         * that is checked for <code>swing.properties</code> may vary depending
         * upon the implementation of the Java platform. Typically the
         * <code>swing.properties</code> file is located in the <code>lib</code>
         * subdirectory of the Java installation directory.
         * Refer to the release notes of the implementation being used for
         * further details.
         * <li>Otherwise use the cross platform look and feel.
         * </ol>
         * <h3>Defaults</h3>
         * {@code UIManager} manages three sets of {@code UIDefaults}. In order, they
         * are:
         * <ol>
         * <li>Developer defaults. With few exceptions Swing does not
         * alter the developer defaults; these are intended to be modified
         * and used by the developer.
         * <li>Look and feel defaults. The look and feel defaults are
         * supplied by the look and feel at the time it is installed as the
         * current look and feel ({@code setLookAndFeel()} is invoked). The
         * look and feel defaults can be obtained using the {@code
         * getLookAndFeelDefaults()} method.
         * <li>System defaults. The system defaults are provided by Swing.
         * </ol>
         * Invoking any of the various {@code get} methods
         * results in checking each of the defaults, in order, returning
         * the first {@code non-null} value. For example, invoking
         * {@code UIManager.getString("Table.foreground")} results in first
         * checking developer defaults. If the developer defaults contain
         * a value for {@code "Table.foreground"} it is returned, otherwise
         * the look and feel defaults are checked, followed by the system defaults.
         * <p>
         * It's important to note that {@code getDefaults} returns a custom
         * instance of {@code UIDefaults} with this resolution logic built into it.
         * For example, {@code UIManager.getDefaults().getString("Table.foreground")}
         * is equivalent to {@code UIManager.getString("Table.foreground")}. Both
         * resolve using the algorithm just described. In many places the
         * documentation uses the word defaults to refer to the custom instance
         * of {@code UIDefaults} with the resolution logic as previously described.
         * <p>
         * When the look and feel is changed, {@code UIManager} alters only the
         * look and feel defaults; the developer and system defaults are not
         * altered by the {@code UIManager} in any way.
         * <p>
         * The set of defaults a particular look and feel supports is defined
         * and documented by that look and feel. In addition, each look and
         * feel, or {@code ComponentUI} provided by a look and feel, may
         * access the defaults at different times in their life cycle. Some
         * look and feels may aggressively look up defaults, so that changing a
         * default may not have an effect after installing the look and feel.
         * Other look and feels may lazily access defaults so that a change to
         * the defaults may effect an existing look and feel. Finally, other look
         * and feels might not configure themselves from the defaults table in
         * any way. None-the-less it is usually the case that a look and feel
         * expects certain defaults, so that in general
         * a {@code ComponentUI} provided by one look and feel will not
         * work with another look and feel.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @author Thomas Ball
         * @author Hans Muller
         */
        // @ts-ignore
        class UIManager extends java.lang.Object implements java.io.Serializable {
            // @ts-ignore
            constructor()
            /**
             * Returns an array of {@code LookAndFeelInfo}s representing the
             * {@code LookAndFeel} implementations currently available. The
             * <code>LookAndFeelInfo</code> objects can be used by an
             * application to construct a menu of look and feel options for
             * the user, or to determine which look and feel to set at startup
             * time. To avoid the penalty of creating numerous {@code
             * LookAndFeel} objects, {@code LookAndFeelInfo} maintains the
             * class name of the {@code LookAndFeel} class, not the actual
             * {@code LookAndFeel} instance.
             * <p>
             * The following example illustrates setting the current look and feel
             * from an instance of {@code LookAndFeelInfo}:
             * <pre>
             * UIManager.setLookAndFeel(info.getClassName());
             * </pre>
             * @return an array of <code>LookAndFeelInfo</code> objects
             * @see #setLookAndFeel
             */
            // @ts-ignore
            getInstalledLookAndFeels(): javax.swing.UIManager.LookAndFeelInfo[]
            /**
             * Sets the set of available look and feels. While this method does
             * not check to ensure all of the {@code LookAndFeelInfos} are
             * {@code non-null}, it is strongly recommended that only {@code non-null}
             * values are supplied in the {@code infos} array.
             * @param infos set of <code>LookAndFeelInfo</code> objects specifying
             *         the available look and feels
             * @see #getInstalledLookAndFeels
             * @throws NullPointerException if {#code infos} is {@code null}
             */
            // @ts-ignore
            setInstalledLookAndFeels(infos: javax.swing.UIManager.LookAndFeelInfo[]): void
            /**
             * Adds the specified look and feel to the set of available look
             * and feels. While this method allows a {@code null} {@code info},
             * it is strongly recommended that a {@code non-null} value be used.
             * @param info a <code>LookAndFeelInfo</code> object that names the
             *           look and feel and identifies the class that implements it
             * @see #setInstalledLookAndFeels
             */
            // @ts-ignore
            installLookAndFeel(info: javax.swing.UIManager.LookAndFeelInfo): void
            /**
             * Adds the specified look and feel to the set of available look
             * and feels. While this method does not check the
             * arguments in any way, it is strongly recommended that {@code
             * non-null} values be supplied.
             * @param name descriptive name of the look and feel
             * @param className name of the class that implements the look and feel
             * @see #setInstalledLookAndFeels
             */
            // @ts-ignore
            installLookAndFeel(name: string, className: string): void
            /**
             * Returns the current look and feel or <code>null</code>.
             * @return current look and feel, or <code>null</code>
             * @see #setLookAndFeel
             */
            // @ts-ignore
            getLookAndFeel(): javax.swing.LookAndFeel
            /**
             * Sets the current look and feel to {@code newLookAndFeel}.
             * If the current look and feel is {@code non-null} {@code
             * uninitialize} is invoked on it. If {@code newLookAndFeel} is
             * {@code non-null}, {@code initialize} is invoked on it followed
             * by {@code getDefaults}. The defaults returned from {@code
             * newLookAndFeel.getDefaults()} replace those of the defaults
             * from the previous look and feel. If the {@code newLookAndFeel} is
             * {@code null}, the look and feel defaults are set to {@code null}.
             * <p>
             * A value of {@code null} can be used to set the look and feel
             * to {@code null}. As the {@code LookAndFeel} is required for
             * most of Swing to function, setting the {@code LookAndFeel} to
             * {@code null} is strongly discouraged.
             * <p>
             * This is a JavaBeans bound property.
             * @param newLookAndFeel {#code LookAndFeel} to install
             * @throws UnsupportedLookAndFeelException if
             *           {#code newLookAndFeel} is {@code non-null} and
             *           {@code newLookAndFeel.isSupportedLookAndFeel()} returns
             *           {@code false}
             * @see #getLookAndFeel
             */
            // @ts-ignore
            setLookAndFeel(newLookAndFeel: javax.swing.LookAndFeel): void
            /**
             * Loads the {@code LookAndFeel} specified by the given class
             * name, using the current thread's context class loader, and
             * passes it to {@code setLookAndFeel(LookAndFeel)}.
             * @param className  a string specifying the name of the class that implements
             *         the look and feel
             * @exception ClassNotFoundException if the <code>LookAndFeel</code>
             *            class could not be found
             * @exception InstantiationException if a new instance of the class
             *           couldn't be created
             * @exception IllegalAccessException if the class or initializer isn't accessible
             * @exception UnsupportedLookAndFeelException if
             *           <code>lnf.isSupportedLookAndFeel()</code> is false
             * @throws ClassCastException if {#code className} does not identify
             *          a class that extends {@code LookAndFeel}
             */
            // @ts-ignore
            setLookAndFeel(className: string): void
            /**
             * Returns the name of the <code>LookAndFeel</code> class that implements
             * the native system look and feel if there is one, otherwise
             * the name of the default cross platform <code>LookAndFeel</code>
             * class. This value can be overriden by setting the
             * <code>swing.systemlaf</code> system property.
             * @return the <code>String</code> of the <code>LookAndFeel</code>
             *           class
             * @see #setLookAndFeel
             * @see #getCrossPlatformLookAndFeelClassName
             */
            // @ts-ignore
            getSystemLookAndFeelClassName(): java.lang.String
            /**
             * Returns the name of the <code>LookAndFeel</code> class that implements
             * the default cross platform look and feel -- the Java
             * Look and Feel (JLF).  This value can be overriden by setting the
             * <code>swing.crossplatformlaf</code> system property.
             * @return a string with the JLF implementation-class
             * @see #setLookAndFeel
             * @see #getSystemLookAndFeelClassName
             */
            // @ts-ignore
            getCrossPlatformLookAndFeelClassName(): java.lang.String
            /**
             * Returns the defaults. The returned defaults resolve using the
             * logic specified in the class documentation.
             * @return a <code>UIDefaults</code> object containing the default values
             */
            // @ts-ignore
            getDefaults(): javax.swing.UIDefaults
            /**
             * Returns a font from the defaults. If the value for {@code key} is
             * not a {@code Font}, {@code null} is returned.
             * @param key  an <code>Object</code> specifying the font
             * @return the <code>Font</code> object
             * @throws NullPointerException if {#code key} is {@code null}
             */
            // @ts-ignore
            getFont(key: any): java.awt.Font
            /**
             * Returns a font from the defaults that is appropriate
             * for the given locale. If the value for {@code key} is
             * not a {@code Font}, {@code null} is returned.
             * @param key  an <code>Object</code> specifying the font
             * @param l the <code>Locale</code> for which the font is desired; refer
             *         to {#code UIDefaults} for details on how a {@code null}
             *         {@code Locale} is handled
             * @return the <code>Font</code> object
             * @throws NullPointerException if {#code key} is {@code null}
             * @since 1.4
             */
            // @ts-ignore
            getFont(key: any, l: java.util.Locale): java.awt.Font
            /**
             * Returns a color from the defaults. If the value for {@code key} is
             * not a {@code Color}, {@code null} is returned.
             * @param key  an <code>Object</code> specifying the color
             * @return the <code>Color</code> object
             * @throws NullPointerException if {#code key} is {@code null}
             */
            // @ts-ignore
            getColor(key: any): java.awt.Color
            /**
             * Returns a color from the defaults that is appropriate
             * for the given locale. If the value for {@code key} is
             * not a {@code Color}, {@code null} is returned.
             * @param key  an <code>Object</code> specifying the color
             * @param l the <code>Locale</code> for which the color is desired; refer
             *         to {#code UIDefaults} for details on how a {@code null}
             *         {@code Locale} is handled
             * @return the <code>Color</code> object
             * @throws NullPointerException if {#code key} is {@code null}
             * @since 1.4
             */
            // @ts-ignore
            getColor(key: any, l: java.util.Locale): java.awt.Color
            /**
             * Returns an <code>Icon</code> from the defaults. If the value for
             * {@code key} is not an {@code Icon}, {@code null} is returned.
             * @param key  an <code>Object</code> specifying the icon
             * @return the <code>Icon</code> object
             * @throws NullPointerException if {#code key} is {@code null}
             */
            // @ts-ignore
            getIcon(key: any): javax.swing.Icon
            /**
             * Returns an <code>Icon</code> from the defaults that is appropriate
             * for the given locale. If the value for
             * {@code key} is not an {@code Icon}, {@code null} is returned.
             * @param key  an <code>Object</code> specifying the icon
             * @param l the <code>Locale</code> for which the icon is desired; refer
             *         to {#code UIDefaults} for details on how a {@code null}
             *         {@code Locale} is handled
             * @return the <code>Icon</code> object
             * @throws NullPointerException if {#code key} is {@code null}
             * @since 1.4
             */
            // @ts-ignore
            getIcon(key: any, l: java.util.Locale): javax.swing.Icon
            /**
             * Returns a border from the defaults. If the value for
             * {@code key} is not a {@code Border}, {@code null} is returned.
             * @param key  an <code>Object</code> specifying the border
             * @return the <code>Border</code> object
             * @throws NullPointerException if {#code key} is {@code null}
             */
            // @ts-ignore
            getBorder(key: any): javax.swing.border.Border
            /**
             * Returns a border from the defaults that is appropriate
             * for the given locale.  If the value for
             * {@code key} is not a {@code Border}, {@code null} is returned.
             * @param key  an <code>Object</code> specifying the border
             * @param l the <code>Locale</code> for which the border is desired; refer
             *         to {#code UIDefaults} for details on how a {@code null}
             *         {@code Locale} is handled
             * @return the <code>Border</code> object
             * @throws NullPointerException if {#code key} is {@code null}
             * @since 1.4
             */
            // @ts-ignore
            getBorder(key: any, l: java.util.Locale): javax.swing.border.Border
            /**
             * Returns a string from the defaults. If the value for
             * {@code key} is not a {@code String}, {@code null} is returned.
             * @param key  an <code>Object</code> specifying the string
             * @return the <code>String</code>
             * @throws NullPointerException if {#code key} is {@code null}
             */
            // @ts-ignore
            getString(key: any): java.lang.String
            /**
             * Returns a string from the defaults that is appropriate for the
             * given locale.  If the value for
             * {@code key} is not a {@code String}, {@code null} is returned.
             * @param key  an <code>Object</code> specifying the string
             * @param l the <code>Locale</code> for which the string is desired; refer
             *         to {#code UIDefaults} for details on how a {@code null}
             *         {@code Locale} is handled
             * @return the <code>String</code>
             * @since 1.4
             * @throws NullPointerException if {#code key} is {@code null}
             */
            // @ts-ignore
            getString(key: any, l: java.util.Locale): java.lang.String
            /**
             * Returns an integer from the defaults. If the value for
             * {@code key} is not an {@code Integer}, or does not exist,
             * {@code 0} is returned.
             * @param key  an <code>Object</code> specifying the int
             * @return the int
             * @throws NullPointerException if {#code key} is {@code null}
             */
            // @ts-ignore
            getInt(key: any): int
            /**
             * Returns an integer from the defaults that is appropriate
             * for the given locale. If the value for
             * {@code key} is not an {@code Integer}, or does not exist,
             * {@code 0} is returned.
             * @param key  an <code>Object</code> specifying the int
             * @param l the <code>Locale</code> for which the int is desired; refer
             *         to {#code UIDefaults} for details on how a {@code null}
             *         {@code Locale} is handled
             * @return the int
             * @throws NullPointerException if {#code key} is {@code null}
             * @since 1.4
             */
            // @ts-ignore
            getInt(key: any, l: java.util.Locale): int
            /**
             * Returns a boolean from the defaults which is associated with
             * the key value. If the key is not found or the key doesn't represent
             * a boolean value then {@code false} is returned.
             * @param key  an <code>Object</code> specifying the key for the desired boolean value
             * @return the boolean value corresponding to the key
             * @throws NullPointerException if {#code key} is {@code null}
             * @since 1.4
             */
            // @ts-ignore
            getBoolean(key: any): boolean
            /**
             * Returns a boolean from the defaults which is associated with
             * the key value and the given <code>Locale</code>. If the key is not
             * found or the key doesn't represent
             * a boolean value then {@code false} will be returned.
             * @param key  an <code>Object</code> specifying the key for the desired
             *              boolean value
             * @param l the <code>Locale</code> for which the boolean is desired; refer
             *         to {#code UIDefaults} for details on how a {@code null}
             *         {@code Locale} is handled
             * @return the boolean value corresponding to the key
             * @throws NullPointerException if {#code key} is {@code null}
             * @since 1.4
             */
            // @ts-ignore
            getBoolean(key: any, l: java.util.Locale): boolean
            /**
             * Returns an <code>Insets</code> object from the defaults. If the value
             * for {@code key} is not an {@code Insets}, {@code null} is returned.
             * @param key  an <code>Object</code> specifying the <code>Insets</code> object
             * @return the <code>Insets</code> object
             * @throws NullPointerException if {#code key} is {@code null}
             */
            // @ts-ignore
            getInsets(key: any): java.awt.Insets
            /**
             * Returns an <code>Insets</code> object from the defaults that is
             * appropriate for the given locale. If the value
             * for {@code key} is not an {@code Insets}, {@code null} is returned.
             * @param key  an <code>Object</code> specifying the <code>Insets</code> object
             * @param l the <code>Locale</code> for which the object is desired; refer
             *         to {#code UIDefaults} for details on how a {@code null}
             *         {@code Locale} is handled
             * @return the <code>Insets</code> object
             * @throws NullPointerException if {#code key} is {@code null}
             * @since 1.4
             */
            // @ts-ignore
            getInsets(key: any, l: java.util.Locale): java.awt.Insets
            /**
             * Returns a dimension from the defaults. If the value
             * for {@code key} is not a {@code Dimension}, {@code null} is returned.
             * @param key  an <code>Object</code> specifying the dimension object
             * @return the <code>Dimension</code> object
             * @throws NullPointerException if {#code key} is {@code null}
             */
            // @ts-ignore
            getDimension(key: any): java.awt.Dimension
            /**
             * Returns a dimension from the defaults that is appropriate
             * for the given locale. If the value
             * for {@code key} is not a {@code Dimension}, {@code null} is returned.
             * @param key  an <code>Object</code> specifying the dimension object
             * @param l the <code>Locale</code> for which the object is desired; refer
             *         to {#code UIDefaults} for details on how a {@code null}
             *         {@code Locale} is handled
             * @return the <code>Dimension</code> object
             * @throws NullPointerException if {#code key} is {@code null}
             * @since 1.4
             */
            // @ts-ignore
            getDimension(key: any, l: java.util.Locale): java.awt.Dimension
            /**
             * Returns an object from the defaults.
             * @param key  an <code>Object</code> specifying the desired object
             * @return the <code>Object</code>
             * @throws NullPointerException if {#code key} is {@code null}
             */
            // @ts-ignore
            get(key: any): java.lang.Object
            /**
             * Returns an object from the defaults that is appropriate for
             * the given locale.
             * @param key  an <code>Object</code> specifying the desired object
             * @param l the <code>Locale</code> for which the object is desired; refer
             *         to {#code UIDefaults} for details on how a {@code null}
             *         {@code Locale} is handled
             * @return the <code>Object</code>
             * @throws NullPointerException if {#code key} is {@code null}
             * @since 1.4
             */
            // @ts-ignore
            get(key: any, l: java.util.Locale): java.lang.Object
            /**
             * Stores an object in the developer defaults. This is a cover method
             * for {@code getDefaults().put(key, value)}. This only effects the
             * developer defaults, not the system or look and feel defaults.
             * @param key    an <code>Object</code> specifying the retrieval key
             * @param value  the <code>Object</code> to store; refer to
             *                {#code UIDefaults} for details on how {@code null} is
             *                handled
             * @return the <code>Object</code> returned by {#link UIDefaults#put}
             * @throws NullPointerException if {#code key} is {@code null}
             * @see UIDefaults#put
             */
            // @ts-ignore
            put(key: any, value: any): java.lang.Object
            /**
             * Returns the appropriate {@code ComponentUI} implementation for
             * {@code target}. Typically, this is a cover for
             * {@code getDefaults().getUI(target)}. However, if an auxiliary
             * look and feel has been installed, this first invokes
             * {@code getUI(target)} on the multiplexing look and feel's
             * defaults, and returns that value if it is {@code non-null}.
             * @param target the <code>JComponent</code> to return the
             *         {#code ComponentUI} for
             * @return the <code>ComponentUI</code> object for {#code target}
             * @throws NullPointerException if {#code target} is {@code null}
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            getUI(target: javax.swing.JComponent): javax.swing.plaf.ComponentUI
            /**
             * Returns the {@code UIDefaults} from the current look and feel,
             * that were obtained at the time the look and feel was installed.
             * <p>
             * In general, developers should use the {@code UIDefaults} returned from
             * {@code getDefaults()}. As the current look and feel may expect
             * certain values to exist, altering the {@code UIDefaults} returned
             * from this method could have unexpected results.
             * @return <code>UIDefaults</code> from the current look and feel
             * @see #getDefaults
             * @see #setLookAndFeel(LookAndFeel)
             * @see LookAndFeel#getDefaults
             */
            // @ts-ignore
            getLookAndFeelDefaults(): javax.swing.UIDefaults
            /**
             * Adds a <code>LookAndFeel</code> to the list of auxiliary look and feels.
             * The auxiliary look and feels tell the multiplexing look and feel what
             * other <code>LookAndFeel</code> classes for a component instance are to be used
             * in addition to the default <code>LookAndFeel</code> class when creating a
             * multiplexing UI.  The change will only take effect when a new
             * UI class is created or when the default look and feel is changed
             * on a component instance.
             * <p>Note these are not the same as the installed look and feels.
             * @param laf the <code>LookAndFeel</code> object
             * @see #removeAuxiliaryLookAndFeel
             * @see #setLookAndFeel
             * @see #getAuxiliaryLookAndFeels
             * @see #getInstalledLookAndFeels
             */
            // @ts-ignore
            addAuxiliaryLookAndFeel(laf: javax.swing.LookAndFeel): void
            /**
             * Removes a <code>LookAndFeel</code> from the list of auxiliary look and feels.
             * The auxiliary look and feels tell the multiplexing look and feel what
             * other <code>LookAndFeel</code> classes for a component instance are to be used
             * in addition to the default <code>LookAndFeel</code> class when creating a
             * multiplexing UI.  The change will only take effect when a new
             * UI class is created or when the default look and feel is changed
             * on a component instance.
             * <p>Note these are not the same as the installed look and feels.
             * @return true if the <code>LookAndFeel</code> was removed from the list
             * @see #removeAuxiliaryLookAndFeel
             * @see #getAuxiliaryLookAndFeels
             * @see #setLookAndFeel
             * @see #getInstalledLookAndFeels
             */
            // @ts-ignore
            removeAuxiliaryLookAndFeel(laf: javax.swing.LookAndFeel): boolean
            /**
             * Returns the list of auxiliary look and feels (can be <code>null</code>).
             * The auxiliary look and feels tell the multiplexing look and feel what
             * other <code>LookAndFeel</code> classes for a component instance are
             * to be used in addition to the default LookAndFeel class when creating a
             * multiplexing UI.
             * <p>Note these are not the same as the installed look and feels.
             * @return list of auxiliary <code>LookAndFeel</code>s or <code>null</code>
             * @see #addAuxiliaryLookAndFeel
             * @see #removeAuxiliaryLookAndFeel
             * @see #setLookAndFeel
             * @see #getInstalledLookAndFeels
             */
            // @ts-ignore
            getAuxiliaryLookAndFeels(): javax.swing.LookAndFeel[]
            /**
             * Adds a <code>PropertyChangeListener</code> to the listener list.
             * The listener is registered for all properties.
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
             * to this UIManager with addPropertyChangeListener().
             * @return all of the <code>PropertyChangeListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
        }
    }
}
