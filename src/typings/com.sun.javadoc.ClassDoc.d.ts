declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents a java class or interface and provides access to
             * information about the class, the class's comment and tags, and the
             * members of the class.  A ClassDoc only exists if it was
             * processed in this run of javadoc.  References to classes
             * which may or may not have been processed in this run are
             * referred to using Type (which can be converted to ClassDoc,
             * if possible).
             * @see Type
             * @since 1.2
             * @author Kaiyang Liu (original)
             * @author Robert Field (rewrite)
             */
            // @ts-ignore
            interface ClassDoc extends com.sun.javadoc.ProgramElementDoc, com.sun.javadoc.Type {
                /**
                 * Return true if this class is abstract.  Return true
                 * for all interfaces.
                 */
                // @ts-ignore
                isAbstract(): boolean
                /**
                 * Return true if this class implements or interface extends
                 * <code>java.io.Serializable</code>.
                 * Since <code>java.io.Externalizable</code> extends
                 * <code>java.io.Serializable</code>,
                 * Externalizable objects are also Serializable.
                 */
                // @ts-ignore
                isSerializable(): boolean
                /**
                 * Return true if this class implements or interface extends
                 * <code>java.io.Externalizable</code>.
                 */
                // @ts-ignore
                isExternalizable(): boolean
                /**
                 * Return the serialization methods for this class or
                 * interface.
                 * @return an array of MethodDoc objects that represents
                 *          the serialization methods for this class or interface.
                 */
                // @ts-ignore
                serializationMethods(): com.sun.javadoc.MethodDoc[]
                /**
                 * Return the Serializable fields of this class or interface.
                 * <p>
                 * Return either a list of default fields documented by
                 * <code>serial</code> tag<br>
                 * or return a single <code>FieldDoc</code> for
                 * <code>serialPersistentField</code> member.
                 * There should be a <code>serialField</code> tag for
                 * each Serializable field defined by an <code>ObjectStreamField</code>
                 * array component of <code>serialPersistentField</code>.
                 * @return an array of <code>FieldDoc</code> objects for the Serializable
                 *          fields of this class or interface.
                 * @see #definesSerializableFields()
                 * @see SerialFieldTag
                 */
                // @ts-ignore
                serializableFields(): com.sun.javadoc.FieldDoc[]
                /**
                 * Return true if Serializable fields are explicitly defined with
                 * the special class member <code>serialPersistentFields</code>.
                 * @see #serializableFields()
                 * @see SerialFieldTag
                 */
                // @ts-ignore
                definesSerializableFields(): boolean
                /**
                 * Return the superclass of this class.  Return null if this is an
                 * interface.
                 * <p> <i>This method cannot accommodate certain generic type constructs.
                 * The <code>superclassType</code> method should be used instead.</i>
                 * @return the ClassDoc for the superclass of this class, null if
                 *          there is no superclass.
                 * @see #superclassType
                 */
                // @ts-ignore
                superclass(): com.sun.javadoc.ClassDoc
                /**
                 * Return the superclass of this class.  Return null if this is an
                 * interface.  A superclass is represented by either a
                 * <code>ClassDoc</code> or a <code>ParametrizedType</code>.
                 * @return the superclass of this class, or null if there is no superclass.
                 * @since 1.5
                 */
                // @ts-ignore
                superclassType(): com.sun.javadoc.Type
                /**
                 * Test whether this class is a subclass of the specified class.
                 * If this is an interface, return false for all classes except
                 * <code>java.lang.Object</code> (we must keep this unexpected
                 * behavior for compatibility reasons).
                 * @param cd the candidate superclass.
                 * @return true if cd is a superclass of this class.
                 */
                // @ts-ignore
                subclassOf(cd: com.sun.javadoc.ClassDoc): boolean
                /**
                 * Return interfaces implemented by this class or interfaces extended
                 * by this interface. Includes only directly-declared interfaces, not
                 * inherited interfaces.
                 * Return an empty array if there are no interfaces.
                 * <p> <i>This method cannot accommodate certain generic type constructs.
                 * The <code>interfaceTypes</code> method should be used instead.</i>
                 * @return an array of ClassDoc objects representing the interfaces.
                 * @see #interfaceTypes
                 */
                // @ts-ignore
                interfaces(): com.sun.javadoc.ClassDoc[]
                /**
                 * Return interfaces implemented by this class or interfaces extended
                 * by this interface. Includes only directly-declared interfaces, not
                 * inherited interfaces.
                 * Return an empty array if there are no interfaces.
                 * @return an array of interfaces, each represented by a
                 *          <code>ClassDoc</code> or a <code>ParametrizedType</code>.
                 * @since 1.5
                 */
                // @ts-ignore
                interfaceTypes(): com.sun.javadoc.Type[]
                /**
                 * Return the formal type parameters of this class or interface.
                 * Return an empty array if there are none.
                 * @return the formal type parameters of this class or interface.
                 * @since 1.5
                 */
                // @ts-ignore
                typeParameters(): com.sun.javadoc.TypeVariable[]
                /**
                 * Return the type parameter tags of this class or interface.
                 * Return an empty array if there are none.
                 * @return the type parameter tags of this class or interface.
                 * @since 1.5
                 */
                // @ts-ignore
                typeParamTags(): com.sun.javadoc.ParamTag[]
                /**
                 * Return
                 * <a href="{@docRoot}/com/sun/javadoc/package-summary.html#included">included</a>
                 * fields in this class or interface.
                 * Excludes enum constants if this is an enum type.
                 * @return an array of FieldDoc objects representing the included
                 *          fields in this class or interface.
                 */
                // @ts-ignore
                fields(): com.sun.javadoc.FieldDoc[]
                /**
                 * Return fields in this class or interface, filtered to the specified
                 * <a href="{@docRoot}/com/sun/javadoc/package-summary.html#included">access
                 * modifier option</a>.
                 * Excludes enum constants if this is an enum type.
                 * @param filter Specify true to filter according to the specified access
                 *                modifier option.
                 *                Specify false to include all fields regardless of
                 *                access modifier option.
                 * @return an array of FieldDoc objects representing the included
                 *                fields in this class or interface.
                 */
                // @ts-ignore
                fields(filter: boolean): com.sun.javadoc.FieldDoc[]
                /**
                 * Return the enum constants if this is an enum type.
                 * Return an empty array if there are no enum constants, or if
                 * this is not an enum type.
                 * @return the enum constants if this is an enum type.
                 */
                // @ts-ignore
                enumConstants(): com.sun.javadoc.FieldDoc[]
                /**
                 * Return
                 * <a href="{@docRoot}/com/sun/javadoc/package-summary.html#included">included</a>
                 * methods in this class or interface.
                 * Same as <code>methods(true)</code>.
                 * @return an array of MethodDoc objects representing the included
                 *          methods in this class or interface.  Does not include
                 *          constructors or annotation type elements.
                 */
                // @ts-ignore
                methods(): com.sun.javadoc.MethodDoc[]
                /**
                 * Return methods in this class or interface, filtered to the specified
                 * <a href="{@docRoot}/com/sun/javadoc/package-summary.html#included">access
                 * modifier option</a>.  Does not include constructors or annotation
                 * type elements.
                 * @param filter Specify true to filter according to the specified access
                 *                modifier option.
                 *                Specify false to include all methods regardless of
                 *                access modifier option.
                 * @return an array of MethodDoc objects representing the included
                 *                methods in this class or interface.
                 */
                // @ts-ignore
                methods(filter: boolean): com.sun.javadoc.MethodDoc[]
                /**
                 * Return
                 * <a href="{@docRoot}/com/sun/javadoc/package-summary.html#included">included</a>
                 * constructors in this class.  An array containing the default
                 * no-arg constructor is returned if no other constructors exist.
                 * Return empty array if this is an interface.
                 * @return an array of ConstructorDoc objects representing the included
                 *          constructors in this class.
                 */
                // @ts-ignore
                constructors(): com.sun.javadoc.ConstructorDoc[]
                /**
                 * Return constructors in this class, filtered to the specified
                 * <a href="{@docRoot}/com/sun/javadoc/package-summary.html#included">access
                 * modifier option</a>.  Return an array containing the default
                 * no-arg constructor if no other constructors exist.
                 * @param filter Specify true to filter according to the specified access
                 *                modifier option.
                 *                Specify false to include all constructors regardless of
                 *                access modifier option.
                 * @return an array of ConstructorDoc objects representing the included
                 *                constructors in this class.
                 */
                // @ts-ignore
                constructors(filter: boolean): com.sun.javadoc.ConstructorDoc[]
                /**
                 * Return
                 * <a href="{@docRoot}/com/sun/javadoc/package-summary.html#included">included</a>
                 * nested classes and interfaces within this class or interface.
                 * This includes both static and non-static nested classes.
                 * (This method should have been named <code>nestedClasses()</code>,
                 * as inner classes are technically non-static.)  Anonymous and local classes
                 * or interfaces are not included.
                 * @return an array of ClassDoc objects representing the included classes
                 *          and interfaces defined in this class or interface.
                 */
                // @ts-ignore
                innerClasses(): com.sun.javadoc.ClassDoc[]
                /**
                 * Return nested classes and interfaces within this class or interface
                 * filtered to the specified
                 * <a href="{@docRoot}/com/sun/javadoc/package-summary.html#included">access
                 * modifier option</a>.
                 * This includes both static and non-static nested classes.
                 * Anonymous and local classes are not included.
                 * @param filter Specify true to filter according to the specified access
                 *                modifier option.
                 *                Specify false to include all nested classes regardless of
                 *                access modifier option.
                 * @return a filtered array of ClassDoc objects representing the included
                 *                classes and interfaces defined in this class or interface.
                 */
                // @ts-ignore
                innerClasses(filter: boolean): com.sun.javadoc.ClassDoc[]
                /**
                 * Find the specified class or interface within the context of this class doc.
                 * Search order: 1) qualified name, 2) nested in this class or interface,
                 * 3) in this package, 4) in the class imports, 5) in the package imports.
                 * Return the ClassDoc if found, null if not found.
                 */
                // @ts-ignore
                findClass(className: string): com.sun.javadoc.ClassDoc
                /**
                 * Get the list of classes and interfaces declared as imported.
                 * These are called "single-type-import declarations" in
                 * <cite>The Java&trade; Language Specification</cite>.
                 * @return an array of ClassDoc representing the imported classes.
                 * @deprecated Import declarations are implementation details that
                 *           should not be exposed here.  In addition, not all imported
                 *           classes are imported through single-type-import declarations.
                 */
                // @ts-ignore
                importedClasses(): com.sun.javadoc.ClassDoc[]
                /**
                 * Get the list of packages declared as imported.
                 * These are called "type-import-on-demand declarations" in
                 * <cite>The Java&trade; Language Specification</cite>.
                 * @return an array of PackageDoc representing the imported packages.
                 * @deprecated Import declarations are implementation details that
                 *           should not be exposed here.  In addition, this method's
                 *           return type does not allow for all type-import-on-demand
                 *           declarations to be returned.
                 */
                // @ts-ignore
                importedPackages(): com.sun.javadoc.PackageDoc[]
            }
        }
    }
}
