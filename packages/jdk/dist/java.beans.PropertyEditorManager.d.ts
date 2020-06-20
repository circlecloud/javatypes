declare namespace java {
    namespace beans {
        /**
         * The PropertyEditorManager can be used to locate a property editor for
         * any given type name.  This property editor must support the
         * java.beans.PropertyEditor interface for editing a given object.
         * <P>
         * The PropertyEditorManager uses three techniques for locating an editor
         * for a given type.  First, it provides a registerEditor method to allow
         * an editor to be specifically registered for a given type.  Second it
         * tries to locate a suitable class by adding "Editor" to the full
         * qualified classname of the given type (e.g. "foo.bah.FozEditor").
         * Finally it takes the simple classname (without the package name) adds
         * "Editor" to it and looks in a search-path of packages for a matching
         * class.
         * <P>
         * So for an input class foo.bah.Fred, the PropertyEditorManager would
         * first look in its tables to see if an editor had been registered for
         * foo.bah.Fred and if so use that.  Then it will look for a
         * foo.bah.FredEditor class.  Then it will look for (say)
         * standardEditorsPackage.FredEditor class.
         * <p>
         * Default PropertyEditors will be provided for the Java primitive types
         * "boolean", "byte", "short", "int", "long", "float", and "double"; and
         * for the classes java.lang.String. java.awt.Color, and java.awt.Font.
         */
        // @ts-ignore
        class PropertyEditorManager extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Registers an editor class to edit values of the given target class.
             * If the editor class is {@code null},
             * then any existing definition will be removed.
             * Thus this method can be used to cancel the registration.
             * The registration is canceled automatically
             * if either the target or editor class is unloaded.
             * <p>
             * If there is a security manager, its {@code checkPropertiesAccess}
             * method is called. This could result in a {@linkplain SecurityException}.
             * @param targetType   the class object of the type to be edited
             * @param editorClass  the class object of the editor class
             * @throws SecurityException  if a security manager exists and
             *                             its {#code checkPropertiesAccess} method
             *                             doesn't allow setting of system properties
             * @see SecurityManager#checkPropertiesAccess
             */
            // @ts-ignore
            registerEditor(targetType: java.lang.Class<any>, editorClass: java.lang.Class<any>): void
            /**
             * Locate a value editor for a given target type.
             * @param targetType  The Class object for the type to be edited
             * @return An editor object for the given target class.
             *  The result is null if no suitable editor can be found.
             */
            // @ts-ignore
            findEditor(targetType: java.lang.Class<any>): java.beans.PropertyEditor
            /**
             * Gets the package names that will be searched for property editors.
             * @return The array of package names that will be searched in
             *           order to find property editors.
             *  <p>     The default value for this array is implementation-dependent,
             *          e.g. Sun implementation initially sets to  {"sun.beans.editors"}.
             */
            // @ts-ignore
            getEditorSearchPath(): java.lang.String[]
            /**
             * Change the list of package names that will be used for
             * finding property editors.
             * <p>First, if there is a security manager, its <code>checkPropertiesAccess</code>
             * method is called. This could result in a SecurityException.
             * @param path  Array of package names.
             * @exception SecurityException  if a security manager exists and its
             *              <code>checkPropertiesAccess</code> method doesn't allow setting
             *               of system properties.
             * @see SecurityManager#checkPropertiesAccess
             */
            // @ts-ignore
            setEditorSearchPath(path: string[]): void
        }
    }
}
