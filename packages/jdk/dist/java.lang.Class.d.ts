declare namespace java {
    namespace lang {
        /**
         * An instance of class Class is the in-image representation
         * of a Java class. There are three basic types of Classes
         * <dl>
         * <dt><em>Classes representing object types (classes or interfaces)</em></dt>
         * <dd>These are Classes which represent the class of a
         * simple instance as found in the class hierarchy.
         * The name of one of these Classes is simply the
         * fully qualified class name of the class or interface
         * that it represents. Its <em>signature</em> is
         * the letter "L", followed by its name, followed
         * by a semi-colon (";").</dd>
         * <dt><em>Classes representing base types</em></dt>
         * <dd>These Classes represent the standard Java base types.
         * Although it is not possible to create new instances
         * of these Classes, they are still useful for providing
         * reflection information, and as the component type
         * of array classes. There is one of these Classes for
         * each base type, and their signatures are:
         * <ul>
         * <li><code>B</code> representing the <code>byte</code> base type</li>
         * <li><code>S</code> representing the <code>short</code> base type</li>
         * <li><code>I</code> representing the <code>int</code> base type</li>
         * <li><code>J</code> representing the <code>long</code> base type</li>
         * <li><code>F</code> representing the <code>float</code> base type</li>
         * <li><code>D</code> representing the <code>double</code> base type</li>
         * <li><code>C</code> representing the <code>char</code> base type</li>
         * <li><code>Z</code> representing the <code>boolean</code> base type</li>
         * <li><code>V</code> representing void function return values</li>
         * </ul>
         * The name of a Class representing a base type
         * is the keyword which is used to represent the
         * type in Java source code (i.e. "int" for the
         * <code>int</code> base type.</dd>
         * <dt><em>Classes representing array classes</em></dt>
         * <dd>These are Classes which represent the classes of
         * Java arrays. There is one such Class for all array
         * instances of a given arity (number of dimensions)
         * and leaf component type. In this case, the name of the
         * class is one or more left square brackets (one per
         * dimension in the array) followed by the signature ofP
         * the class representing the leaf component type, which
         * can be either an object type or a base type. The
         * signature of a Class representing an array type
         * is the same as its name.</dd>
         * </dl>
         * @author OTI
         * @version initial
         */
        // @ts-ignore
        class Class<T> extends java.lang.Object implements java.io.Serializable, java.lang.reflect.GenericDeclaration, java.lang.reflect.Type {
            /**
             * Answers a Class object which represents the class
             * named by the argument. The name should be the name
             * of a class as described in the class definition of
             * java.lang.Class, however Classes representing base
             * types can not be found using this method.
             * @param className	The name of the non-base type class to find
             * @return the named Class
             * @throws ClassNotFoundException If the class could not be found
             * @see java.lang.Class
             */
            // @ts-ignore
            forName(className: string): java.lang.Class<?>
            /**
             * Answers a Class object which represents the class
             * named by the argument. The name should be the name
             * of a class as described in the class definition of
             * java.lang.Class, however Classes representing base
             * types can not be found using this method.
             * Security rules will be obeyed.
             * @param className			The name of the non-base type class to find
             * @param initializeBoolean	A boolean indicating whether the class should be 
             * 									initialized
             * @param classLoader			The classloader to use to load the class
             * @return the named class.
             * @throws ClassNotFoundException If the class could not be found
             * @see java.lang.Class
             */
            // @ts-ignore
            forName(className: string, initializeBoolean: boolean, classLoader: java.lang.ClassLoader): java.lang.Class<?>
            /**
             * Answers an array containing all public class members
             * of the class which the receiver represents and its
             * superclasses and interfaces
             * @return the class' public class members
             * @throws SecurityException If member access is not allowed
             * @see java.lang.Class
             */
            // @ts-ignore
            getClasses(): java.lang.Class[]
            /**
             * Answers the classloader which was used to load the
             * class represented by the receiver. Answer null if the
             * class was loaded by the system class loader.
             * @return the receiver's class loader or nil
             * @see java.lang.ClassLoader
             */
            // @ts-ignore
            getClassLoader(): java.lang.ClassLoader
            /**
             * Answers a Class object which represents the receiver's
             * component type if the receiver represents an array type.
             * Otherwise answers nil. The component type of an array
             * type is the type of the elements of the array.
             * @return the component type of the receiver.
             * @see java.lang.Class
             */
            // @ts-ignore
            getComponentType(): java.lang.Class<?>
            /**
             * Answers a public Constructor object which represents the
             * constructor described by the arguments.
             * @param parameterTypes	the types of the arguments.
             * @return the constructor described by the arguments.
             * @throws NoSuchMethodException if the constructor could not be found.
             * @throws SecurityException if member access is not allowed
             * @see #getConstructors
             */
            // @ts-ignore
            getConstructor(...parameterTypes: java.lang.Class[]): java.lang.reflect.Constructor<T>
            /**
             * Answers an array containing Constructor objects describing
             * all constructors which are visible from the current execution
             * context.
             * @return all visible constructors starting from the receiver.
             * @throws SecurityException if member access is not allowed
             * @see #getMethods
             */
            // @ts-ignore
            getConstructors(): java.lang.reflect.Constructor[]
            /**
             * Answers an array containing all class members of the class
             * which the receiver represents. Note that some of the fields
             * which are returned may not be visible in the current
             * execution context.
             * @return the class' class members
             * @throws SecurityException if member access is not allowed
             * @see java.lang.Class
             */
            // @ts-ignore
            getDeclaredClasses(): java.lang.Class[]
            /**
             * Answers a Constructor object which represents the
             * constructor described by the arguments.
             * @param parameterTypes	the types of the arguments.
             * @return the constructor described by the arguments.
             * @throws NoSuchMethodException if the constructor could not be found.
             * @throws SecurityException if member access is not allowed
             * @see #getConstructors
             */
            // @ts-ignore
            getDeclaredConstructor(...parameterTypes: java.lang.Class[]): java.lang.reflect.Constructor<T>
            /**
             * Answers an array containing Constructor objects describing
             * all constructor which are defined by the receiver. Note that
             * some of the fields which are returned may not be visible
             * in the current execution context.
             * @return the receiver's constructors.
             * @throws SecurityException if member access is not allowed
             * @see #getMethods
             */
            // @ts-ignore
            getDeclaredConstructors(): java.lang.reflect.Constructor[]
            /**
             * Answers a Field object describing the field in the receiver
             * named by the argument. Note that the Constructor may not be
             * visible from the current execution context.
             * @param name		The name of the field to look for.
             * @return the field in the receiver named by the argument.
             * @throws NoSuchFieldException if the requested field could not be found
             * @throws SecurityException if member access is not allowed
             * @see #getDeclaredFields
             */
            // @ts-ignore
            getDeclaredField(name: string): java.lang.reflect.Field
            /**
             * Answers an array containing Field objects describing
             * all fields which are defined by the receiver. Note that
             * some of the fields which are returned may not be visible
             * in the current execution context.
             * @return the receiver's fields.
             * @throws SecurityException If member access is not allowed
             * @see #getFields
             */
            // @ts-ignore
            getDeclaredFields(): java.lang.reflect.Field[]
            /**
             * Answers a Method object which represents the method
             * described by the arguments. Note that the associated
             * method may not be visible from the current execution
             * context.
             * @param name			the name of the method
             * @param parameterTypes	the types of the arguments.
             * @return the method described by the arguments.
             * @throws NoSuchMethodException if the method could not be found.
             * @throws SecurityException If member access is not allowed
             * @see #getMethods
             */
            // @ts-ignore
            getDeclaredMethod(name: string, ...parameterTypes: java.lang.Class[]): java.lang.reflect.Method
            /**
             * Answers an array containing Method objects describing
             * all methods which are defined by the receiver. Note that
             * some of the methods which are returned may not be visible
             * in the current execution context.
             * @throws SecurityException	if member access is not allowed
             * @return the receiver's methods.
             * @see #getMethods
             */
            // @ts-ignore
            getDeclaredMethods(): java.lang.reflect.Method[]
            /**
             * Answers the class which declared the class represented
             * by the receiver. This will return null if the receiver
             * is not a member of another class.
             * @return the declaring class of the receiver.
             */
            // @ts-ignore
            getDeclaringClass(): java.lang.Class<?>
            /**
             * Answers a Field object describing the field in the receiver
             * named by the argument which must be visible from the current
             * execution context.
             * @param name		The name of the field to look for.
             * @return the field in the receiver named by the argument.
             * @throws NoSuchFieldException If the given field does not exist
             * @throws SecurityException If access is denied
             * @see #getDeclaredFields
             */
            // @ts-ignore
            getField(name: string): java.lang.reflect.Field
            /**
             * Answers an array containing Field objects describing
             * all fields which are visible from the current execution
             * context.
             * @return all visible fields starting from the receiver.
             * @throws SecurityException If member access is not allowed
             * @see #getDeclaredFields
             */
            // @ts-ignore
            getFields(): java.lang.reflect.Field[]
            /**
             * Answers an array of Class objects which match the interfaces
             * specified in the receiver classes <code>implements</code>
             * declaration
             * @return {#code Class<?>[]}
             * 					the interfaces the receiver claims to implement.
             */
            // @ts-ignore
            getInterfaces(): java.lang.Class[]
            /**
             * Answers a Method object which represents the method
             * described by the arguments.
             * @param name String
             * 					the name of the method
             * @param parameterTypes {#code Class<?>[]}
             * 					the types of the arguments.
             * @return Method
             * 					the method described by the arguments.
             * @throws NoSuchMethodException
             * 					if the method could not be found.
             * @throws SecurityException
             * 					if member access is not allowed
             * @see #getMethods
             */
            // @ts-ignore
            getMethod(name: string, ...parameterTypes: java.lang.Class[]): java.lang.reflect.Method
            /**
             * Answers an array containing Method objects describing
             * all methods which are visible from the current execution
             * context.
             * @return Method[]
             * 					all visible methods starting from the receiver.
             * @throws SecurityException
             * 					if member access is not allowed
             * @see #getDeclaredMethods
             */
            // @ts-ignore
            getMethods(): java.lang.reflect.Method[]
            /**
             * Answers an integer which which is the receiver's modifiers.
             * Note that the constants which describe the bits which are
             * returned are implemented in class java.lang.reflect.Modifier
             * which may not be available on the target.
             * @return the receiver's modifiers
             */
            // @ts-ignore
            getModifiers(): int
            /**
             * Answers the name of the class which the receiver represents.
             * For a description of the format which is used, see the class
             * definition of java.lang.Class.
             * @return the receiver's name.
             * @see java.lang.Class
             */
            // @ts-ignore
            getName(): java.lang.String
            /**
             * Answers the ProtectionDomain of the receiver.
             * <p>
             * Note: In order to conserve space in embedded targets, we allow this
             * method to answer null for classes in the system protection domain
             * (i.e. for system classes). System classes are always given full
             * permissions (i.e. AllPermission). This is not changeable via the
             * java.security.Policy.
             * @return ProtectionDomain
             * 					the receiver's ProtectionDomain.
             * @see java.lang.Class
             */
            // @ts-ignore
            getProtectionDomain(): java.security.ProtectionDomain
            /**
             * Answers a URL referring to the
             * resource specified by resName. The mapping between
             * the resource name and the URL is managed by the
             * class's class loader.
             * @param resName 	the name of the resource.
             * @return a stream on the resource.
             * @see java.lang.ClassLoader
             */
            // @ts-ignore
            getResource(resName: string): java.net.URL
            /**
             * Answers a read-only stream on the contents of the
             * resource specified by resName. The mapping between
             * the resource name and the stream is managed by the
             * class's class loader.
             * @param resName		the name of the resource.
             * @return a stream on the resource.
             * @see java.lang.ClassLoader
             */
            // @ts-ignore
            getResourceAsStream(resName: string): java.io.InputStream
            /**
             * Answers the signers for the class represented by the
             * receiver, or null if there are no signers.
             * @return the signers of the receiver.
             * @see #getMethods
             */
            // @ts-ignore
            getSigners(): java.lang.Object[]
            /**
             * Answers the Class which represents the receiver's
             * superclass. For Classes which represent base types,
             * interfaces, and for java.lang.Object the method
             * answers null.
             * @return the receiver's superclass.
             */
            // @ts-ignore
            getSuperclass(): java.lang.Class<? super T>
            /**
             * Answers true if the receiver represents an array class.
             * @return <code>true</code>
             * 					if the receiver represents an array class
             *               <code>false</code>
             *                   if it does not represent an array class
             */
            // @ts-ignore
            isArray(): boolean
            /**
             * Answers true if the type represented by the argument
             * can be converted via an identity conversion or a widening
             * reference conversion (i.e. if either the receiver or the
             * argument represent primitive types, only the identity
             * conversion applies).
             * @return <code>true</code>
             * 					the argument can be assigned into the receiver
             *               <code>false</code> 
             * 					the argument cannot be assigned into the receiver
             * @param cls	Class
             * 					the class to test
             * @throws NullPointerException
             * 					if the parameter is null
             */
            // @ts-ignore
            isAssignableFrom(cls: java.lang.Class<any>): boolean
            /**
             * Answers true if the argument is non-null and can be
             * cast to the type of the receiver. This is the runtime
             * version of the <code>instanceof</code> operator.
             * @return <code>true</code>
             * 					the argument can be cast to the type of the receiver
             *               <code>false</code> 
             * 					the argument is null or cannot be cast to the 
             * 					type of the receiver
             * @param object Object
             * 					the object to test
             */
            // @ts-ignore
            isInstance(object: any): boolean
            /**
             * Answers true if the receiver represents an interface.
             * @return <code>true</code>
             * 					if the receiver represents an interface
             *               <code>false</code>
             *                   if it does not represent an interface
             */
            // @ts-ignore
            isInterface(): boolean
            /**
             * Answers true if the receiver represents a base type.
             * @return <code>true</code>
             * 					if the receiver represents a base type
             *               <code>false</code>
             *                   if it does not represent a base type
             */
            // @ts-ignore
            isPrimitive(): boolean
            /**
             * Answers a new instance of the class represented by the
             * receiver, created by invoking the default (i.e. zero-argument)
             * constructor. If there is no such constructor, or if the
             * creation fails (either because of a lack of available memory or
             * because an exception is thrown by the constructor), an
             * InstantiationException is thrown. If the default constructor
             * exists, but is not accessible from the context where this
             * message is sent, an IllegalAccessException is thrown.
             * @return a new instance of the class represented by the receiver.
             * @throws IllegalAccessException if the constructor is not visible to the sender.
             * @throws InstantiationException if the instance could not be created.
             */
            // @ts-ignore
            newInstance(): T
            /**
             * Answers a string containing a concise, human-readable
             * description of the receiver.
             * @return a printable representation for the receiver.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Returns a formatted string describing this Class. The string has
             * the following format:
             * <i>modifier1 modifier2 ... kind name&lt;typeparam1, typeparam2, ...&gt;</i>.
             * kind is one of <code>class</code>, <code>enum</code>, <code>interface</code>,
             * <code>&#64;interface</code>, or
             * the empty string for primitive types. The type parameter list is
             * omitted if there are no type parameters.
             * @return a formatted string describing this class
             * @since 1.8
             */
            // @ts-ignore
            toGenericString(): java.lang.String
            /**
             * Returns the Package of which this class is a member.
             * A class has a Package iff it was loaded from a SecureClassLoader.
             * @return Package the Package of which this class is a member
             *  or null in the case of primitive or array types
             */
            // @ts-ignore
            getPackage(): java.lang.Package
            /**
             * Returns the assertion status for this class.
             * Assertion is enabled/disabled based on
             * classloader default, package or class default at runtime
             * @since 1.4
             * @return the assertion status for this class
             */
            // @ts-ignore
            desiredAssertionStatus(): boolean
            /**
             * Return the specified Annotation for this Class. Inherited Annotations
             * are searched.
             * @param annotation the Annotation type
             * @return the specified Annotation or null
             * @since 1.5
             */
            // @ts-ignore
            getAnnotation<A extends java.lang.annotation.Annotation>(annotation: java.lang.Class<A>): A
            /**
             * Return the directly declared Annotations for this Class, including the Annotations
             * inherited from superclasses.
             * If an annotation type has been included before, then next occurrences will not be included.
             * Repeated annotations are not included since they will be stored in their container annotation.
             * But container annotations are included. (If a container annotation is repeatable and it is repeated,
             * then these container annotations' container annotation is included. )
             * @return an array of Annotation
             * @since 1.5
             */
            // @ts-ignore
            getAnnotations(): java.lang.annotation.Annotation[]
            /**
             * Looks through directly declared annotations for this class, not including Annotations inherited from superclasses.
             * @param annotation the Annotation to search for
             * @return directly declared annotation of specified annotation type.
             * @since 1.8
             */
            // @ts-ignore
            getDeclaredAnnotation<A extends java.lang.annotation.Annotation>(annotation: java.lang.Class<A>): A
            /**
             * Return the annotated types for the implemented interfaces.
             * @return array, possibly empty, of AnnotatedTypes
             */
            // @ts-ignore
            getAnnotatedInterfaces(): java.lang.reflect.AnnotatedType[]
            /**
             * Return the annotated superclass of this class.
             * @return null if this class is Object, an interface, a primitive type, or an array type.  Otherwise return (possibly empty) AnnotatedType.
             */
            // @ts-ignore
            getAnnotatedSuperclass(): java.lang.reflect.AnnotatedType
            /**
             * Answers the type name of the class which the receiver represents.
             * @return the fully qualified type name, with brackets if an array class
             * @since 1.8
             */
            // @ts-ignore
            getTypeName(): java.lang.String
            /**
             * Returns the annotations only for this Class, not including Annotations inherited from superclasses.
             * It includes all the directly declared annotations.
             * Repeated annotations are not included but their container annotation does.
             * @return an array of declared annotations
             * @since 1.5
             */
            // @ts-ignore
            getDeclaredAnnotations(): java.lang.annotation.Annotation[]
            /**
             * Terms used for annotations :
             * Repeatable Annotation :
             * An annotation which can be used more than once for the same class declaration.
             * Repeatable annotations are annotated with Repeatable annotation which tells the
             * container annotation for this repeatable annotation.
             * Example =
             * @interface ContainerAnnotation {RepeatableAnn[] value();}
             * @Repeatable(ContainerAnnotation.class) Container Annotation: 
             *  		Container annotation stores the repeated annotations in its array-valued element. 
             *  		Using repeatable annotations more than once makes them stored in their container annotation. 
             *  		In this case, container annotation is visible directly on class declaration, but not the repeated annotations.   
             *  Repeated Annotation:
             *  		A repeatable annotation which is used more than once for the same class. 
             *  Directly Declared Annotation :
             *  		All non repeatable annotations are directly declared annotations.
             *  		As for repeatable annotations, they can be directly declared annotation if and only if they are used once. 
             *  		Repeated annotations are not directly declared in class declaration, but their container annotation does. 
             *  
             *  -------------------------------------------------------------------------------------------------------
             *  
             *  Gets the specified type annotations of this class. 
             *  If the specified type is not repeatable annotation, then returned array size will be 0 or 1.
             *  If specified type is repeatable annotation, then all the annotations of that type will be returned. Array size might be 0, 1 or more.
             *  
             *  It does not search through super classes.
             * @param annotationClass the annotation type to search for
             * @return array of declared annotations in the specified annotation type
             * @since 1.8
             */
            // @ts-ignore
            getDeclaredAnnotationsByType<A extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<A>): A
            /**
             * Gets the specified type annotations of this class.
             * If the specified type is not repeatable annotation, then returned array size will be 0 or 1.
             * If specified type is repeatable annotation, then all the annotations of that type will be returned. Array size might be 0, 1 or more.
             * It searches through superclasses until it finds the inherited specified annotationClass.
             * @param annotationClass the annotation type to search for
             * @return array of declared annotations in the specified annotation type
             * @since 1.8
             */
            // @ts-ignore
            getAnnotationsByType<A extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<A>): A
            /**
             * Answer if this class is an Annotation.
             * @return true if this class is an Annotation
             * @since 1.5
             */
            // @ts-ignore
            isAnnotation(): boolean
            /**
             * Answer if the specified Annotation exists for this Class. Inherited
             * Annotations are searched.
             * @param annotation the Annotation type
             * @return true if the specified Annotation exists
             * @since 1.5
             */
            // @ts-ignore
            isAnnotationPresent(annotation: java.lang.Class<java.lang.annotation.Annotation>): boolean
            /**
             * Cast this Class to a subclass of the specified Class.
             * @param <U> cls the Class to cast to
             * @return this Class, cast to a subclass of the specified Class
             * @throws ClassCastException if this Class is not the same or a subclass
             * 		of the specified Class
             * @since 1.5
             */
            // @ts-ignore
            asSubclass<U>(cls: java.lang.Class<U>): java.lang.Class<? extends U>
            /**
             * Cast the specified object to this Class.
             * @param object the object to cast
             * @return the specified object, cast to this Class
             * @throws ClassCastException if the specified object cannot be cast
             * 		to this Class
             * @since 1.5
             */
            // @ts-ignore
            cast(object: any): T
            /**
             * Answer if this Class is an enum.
             * @return true if this Class is an enum
             * @since 1.5
             */
            // @ts-ignore
            isEnum(): boolean
            /**
             * Answer the array of enum constants for this Class. Returns null if
             * this class is not an enum.
             * @return the array of enum constants, or null
             * @since 1.5
             */
            // @ts-ignore
            getEnumConstants(): T
            /**
             * Answer if this Class is synthetic. A synthetic Class is created by
             * the compiler.
             * @return true if this Class is synthetic.
             * @since 1.5
             */
            // @ts-ignore
            isSynthetic(): boolean
            /**
             * Answers an array of TypeVariable for the generic parameters declared
             * on this Class.
             * @return the TypeVariable[] for the generic parameters
             * @since 1.5
             */
            // @ts-ignore
            getTypeParameters(): java.lang.reflect.TypeVariable[]
            /**
             * Answers an array of Type for the Class objects which match the
             * interfaces specified in the receiver classes <code>implements</code>
             * declaration.
             * @return Type[]
             * 					the interfaces the receiver claims to implement.
             * @since 1.5
             */
            // @ts-ignore
            getGenericInterfaces(): java.lang.reflect.Type[]
            /**
             * Answers the Type for the Class which represents the receiver's
             * superclass. For classes which represent base types,
             * interfaces, and for java.lang.Object the method
             * answers null.
             * @return the Type for the receiver's superclass.
             * @since 1.5
             */
            // @ts-ignore
            getGenericSuperclass(): java.lang.reflect.Type
            /**
             * If this Class is defined inside a constructor, return the Constructor.
             * @return the enclosing Constructor or null
             * @throws SecurityException if declared member access or package access is not allowed
             * @since 1.5
             * @see #isAnonymousClass()
             * @see #isLocalClass()
             */
            // @ts-ignore
            getEnclosingConstructor(): java.lang.reflect.Constructor<?>
            /**
             * If this Class is defined inside a method, return the Method.
             * @return the enclosing Method or null
             * @throws SecurityException if declared member access or package access is not allowed
             * @since 1.5
             * @see #isAnonymousClass()
             * @see #isLocalClass()
             */
            // @ts-ignore
            getEnclosingMethod(): java.lang.reflect.Method
            /**
             * Return the enclosing Class of this Class. Unlike getDeclaringClass(),
             * this method works on any nested Class, not just classes nested directly
             * in other classes.
             * @return the enclosing Class or null
             * @throws SecurityException if package access is not allowed
             * @since 1.5
             * @see #getDeclaringClass()
             * @see #isAnonymousClass()
             * @see #isLocalClass()
             * @see #isMemberClass()
             */
            // @ts-ignore
            getEnclosingClass(): java.lang.Class<?>
            /**
             * Return the simple name of this Class. The simple name does not include
             * the package or the name of the enclosing class. The simple name of an
             * anonymous class is "".
             * @return the simple name
             * @since 1.5
             * @see #isAnonymousClass()
             */
            // @ts-ignore
            getSimpleName(): java.lang.String
            /**
             * Return the canonical name of this Class. The canonical name is null
             * for a local or anonymous class. The canonical name includes the package
             * and the name of the enclosing class.
             * @return the canonical name or null
             * @since 1.5
             * @see #isAnonymousClass()
             * @see #isLocalClass()
             */
            // @ts-ignore
            getCanonicalName(): java.lang.String
            /**
             * Answer if this Class is anonymous. An unnamed Class defined
             * inside a method.
             * @return true if this Class is anonymous.
             * @since 1.5
             * @see #isLocalClass()
             */
            // @ts-ignore
            isAnonymousClass(): boolean
            /**
             * Answer if this Class is local. A named Class defined inside
             * a method.
             * @return true if this Class is local.
             * @since 1.5
             * @see #isAnonymousClass()
             */
            // @ts-ignore
            isLocalClass(): boolean
            /**
             * Answer if this Class is a member Class. A Class defined inside another
             * Class.
             * @return true if this Class is local.
             * @since 1.5
             * @see #isLocalClass()
             */
            // @ts-ignore
            isMemberClass(): boolean
        }
    }
}
