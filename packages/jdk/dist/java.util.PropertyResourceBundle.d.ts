declare namespace java {
    namespace util {
        /**
         * <code>PropertyResourceBundle</code> is a concrete subclass of
         * <code>ResourceBundle</code> that manages resources for a locale
         * using a set of static strings from a property file. See
         * {@link ResourceBundle ResourceBundle} for more information about resource
         * bundles.
         * <p>
         * Unlike other types of resource bundle, you don't subclass
         * <code>PropertyResourceBundle</code>.  Instead, you supply properties
         * files containing the resource data.  <code>ResourceBundle.getBundle</code>
         * will automatically look for the appropriate properties file and create a
         * <code>PropertyResourceBundle</code> that refers to it. See
         * {@link ResourceBundle#getBundle(java.lang.String, java.util.Locale, java.lang.ClassLoader) ResourceBundle.getBundle}
         * for a complete description of the search and instantiation strategy.
         * <p>
         * The following <a name="sample">example</a> shows a member of a resource
         * bundle family with the base name "MyResources".
         * The text defines the bundle "MyResources_de",
         * the German member of the bundle family.
         * This member is based on <code>PropertyResourceBundle</code>, and the text
         * therefore is the content of the file "MyResources_de.properties"
         * (a related <a href="ListResourceBundle.html#sample">example</a> shows
         * how you can add bundles to this family that are implemented as subclasses
         * of <code>ListResourceBundle</code>).
         * The keys in this example are of the form "s1" etc. The actual
         * keys are entirely up to your choice, so long as they are the same as
         * the keys you use in your program to retrieve the objects from the bundle.
         * Keys are case-sensitive.
         * <blockquote>
         * <pre>
         * # MessageFormat pattern
         * s1=Die Platte \"{1}\" enth&auml;lt {0}.
         * # location of {0} in pattern
         * s2=1
         * # sample disk name
         * s3=Meine Platte
         * # first ChoiceFormat choice
         * s4=keine Dateien
         * # second ChoiceFormat choice
         * s5=eine Datei
         * # third ChoiceFormat choice
         * s6={0,number} Dateien
         * # sample date
         * s7=3. M&auml;rz 1996
         * </pre>
         * </blockquote>
         * <p>
         * The implementation of a {@code PropertyResourceBundle} subclass must be
         * thread-safe if it's simultaneously used by multiple threads. The default
         * implementations of the non-abstract methods in this class are thread-safe.
         * <p>
         * <strong>Note:</strong> PropertyResourceBundle can be constructed either
         * from an InputStream or a Reader, which represents a property file.
         * Constructing a PropertyResourceBundle instance from an InputStream requires
         * that the input stream be encoded in ISO-8859-1.  In that case, characters
         * that cannot be represented in ISO-8859-1 encoding must be represented by Unicode Escapes
         * as defined in section 3.3 of
         * <cite>The Java&trade; Language Specification</cite>
         * whereas the other constructor which takes a Reader does not have that limitation.
         * @see ResourceBundle
         * @see ListResourceBundle
         * @see Properties
         * @since JDK1.1
         */
        // @ts-ignore
        class PropertyResourceBundle extends java.util.ResourceBundle {
            /**
             * Creates a property resource bundle from an {@link java.io.InputStream
             * InputStream}.  The property file read with this constructor
             * must be encoded in ISO-8859-1.
             * @param stream an InputStream that represents a property file
             *         to read from.
             * @throws IOException if an I/O error occurs
             * @throws NullPointerException if <code>stream</code> is null
             * @throws IllegalArgumentException if {#code stream} contains a
             *      malformed Unicode escape sequence.
             */
            // @ts-ignore
            constructor(stream: java.io.InputStream)
            /**
             * Creates a property resource bundle from a {@link java.io.Reader
             * Reader}.  Unlike the constructor
             * {@link #PropertyResourceBundle(java.io.InputStream) PropertyResourceBundle(InputStream)},
             * there is no limitation as to the encoding of the input property file.
             * @param reader a Reader that represents a property file to
             *         read from.
             * @throws IOException if an I/O error occurs
             * @throws NullPointerException if <code>reader</code> is null
             * @throws IllegalArgumentException if a malformed Unicode escape sequence appears
             *      from {#code reader}.
             * @since 1.6
             */
            // @ts-ignore
            constructor(reader: java.io.Reader)
            // @ts-ignore
            public handleGetObject(key: java.lang.String | string): any
            /**
             * Returns an <code>Enumeration</code> of the keys contained in
             * this <code>ResourceBundle</code> and its parent bundles.
             * @return an <code>Enumeration</code> of the keys contained in
             *          this <code>ResourceBundle</code> and its parent bundles.
             * @see #keySet()
             */
            // @ts-ignore
            public getKeys(): java.util.Enumeration<java.lang.String | string>
            /**
             * Returns a <code>Set</code> of the keys contained
             * <em>only</em> in this <code>ResourceBundle</code>.
             * @return a <code>Set</code> of the keys contained only in this
             *          <code>ResourceBundle</code>
             * @since 1.6
             * @see #keySet()
             */
            // @ts-ignore
            handleKeySet(): Array<java.lang.String | string>
        }
    }
}
