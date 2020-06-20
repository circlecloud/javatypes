declare namespace java {
    namespace lang {
        namespace invoke {
            namespace MethodHandles {
                /**
                 * A factory for creating MethodHandles that require access-checking on creation.
                 * <p>
                 * Unlike Reflection, MethodHandle only requires access-checking when the MethodHandle
                 * is created, not when it is invoked.
                 * <p>
                 * This class provides the lookup authentication necessary when creating MethodHandles.  Any
                 * number of MethodHandles can be lookup using this token, and the token can be shared to provide
                 * others with the the "owner's" authentication level.
                 * <p>
                 * Sharing {@link Lookup} objects should be done with care, as they may allow access to private
                 * methods.
                 * <p>
                 * When using the lookup factory methods (find and unreflect methods), creating the MethodHandle
                 * may fail because the method's arity is too high.
                 */
                // @ts-ignore
                class Lookup extends java.lang.Object {
                    /**
                     * Bit flag 0x1 representing <i>public</i> access.  See {@link #lookupModes()}.
                     */
                    // @ts-ignore
                    readonly PUBLIC: number /*int*/
                    /**
                     * Bit flag 0x2 representing <i>private</i> access.  See {@link #lookupModes()}.
                     */
                    // @ts-ignore
                    readonly PRIVATE: number /*int*/
                    /**
                     * Bit flag 0x4 representing <i>protected</i> access.  See {@link #lookupModes()}.
                     */
                    // @ts-ignore
                    readonly PROTECTED: number /*int*/
                    /**
                     * Bit flag 0x8 representing <i>package</i> access.  See {@link #lookupModes()}.
                     */
                    // @ts-ignore
                    readonly PACKAGE: number /*int*/
                    /**
                     * A query to determine the lookup capabilities held by this instance.
                     * @return the lookup mode bit mask for this Lookup object
                     */
                    // @ts-ignore
                    lookupModes(): int
                    /**
                     * Return an early-bound method handle to a non-static method.  The receiver must
                     * have a Class in its hierarchy that provides the virtual method named methodName.
                     * <p>
                     * The final MethodType of the MethodHandle will be identical to that of the method.
                     * The receiver will be inserted prior to the call and therefore does not need to be
                     * included in the MethodType.
                     * @param receiver - The Object to insert as a receiver.  Must implement the methodName
                     * @param methodName - The name of the method
                     * @param type - The MethodType describing the method
                     * @return a MethodHandle to the required method.
                     * @throws IllegalAccessException if access is denied
                     * @throws NoSuchMethodException if the method doesn't exist
                     */
                    // @ts-ignore
                    bind(receiver: any, methodName: string, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    /**
                     * Return a MethodHandle bound to a specific-implementation of a virtual method, as if created by an invokespecial bytecode
                     * using the class specialToken.  The method and all Classes in its MethodType must be accessible to
                     * the caller.
                     * <p>
                     * The receiver class will be added to the MethodType of the handle, but dispatch will not occur based
                     * on the receiver.
                     * @param clazz - the class or interface from which defines the method
                     * @param methodName - the method name
                     * @param type - the MethodType of the method
                     * @param specialToken - the calling class for the invokespecial
                     * @return a MethodHandle
                     * @throws IllegalAccessException - if the method is static or access checking fails
                     * @throws NullPointerException - if clazz, methodName, type or specialToken is null
                     * @throws NoSuchMethodException - if clazz has no instance method named methodName with signature matching type
                     * @throws SecurityException - if any installed SecurityManager denies access to the method
                     */
                    // @ts-ignore
                    findSpecial(clazz: java.lang.Class<any>, methodName: string, type: java.lang.invoke.MethodType, specialToken: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    /**
                     * Return a MethodHandle to a static method.  The MethodHandle will have the same type as the
                     * method.  The method and all classes in its type must be accessible to the caller.
                     * @param clazz - the class defining the method
                     * @param methodName - the name of the method
                     * @param type - the MethodType of the method
                     * @return A MethodHandle able to invoke the requested static method
                     * @throws IllegalAccessException - if the method is not static or access checking fails
                     * @throws NullPointerException - if clazz, methodName or type is null
                     * @throws NoSuchMethodException - if clazz has no static method named methodName with signature matching type
                     * @throws SecurityException - if any installed SecurityManager denies access to the method
                     */
                    // @ts-ignore
                    findStatic(clazz: java.lang.Class<any>, methodName: string, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    /**
                     * Return a MethodHandle to a virtual method.  The method will be looked up in the first argument
                     * (aka receiver) prior to dispatch.  The type of the MethodHandle will be that of the method
                     * with the receiver type prepended.
                     * @param clazz - the class defining the method
                     * @param methodName - the name of the method
                     * @param type - the type of the method
                     * @return a MethodHandle that will do virtual dispatch on the first argument
                     * @throws IllegalAccessException - if method is static or access is refused
                     * @throws NullPointerException - if clazz, methodName or type is null
                     * @throws NoSuchMethodException - if clazz has no virtual method named methodName with signature matching type
                     * @throws SecurityException - if any installed SecurityManager denies access to the method
                     */
                    // @ts-ignore
                    findVirtual(clazz: java.lang.Class<any>, methodName: string, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    /**
                     * Return a MethodHandle that provides read access to a field.
                     * The MethodHandle will have a MethodType taking a single
                     * argument with type <code>clazz</code> and returning something of
                     * type <code>fieldType</code>.
                     * @param clazz - the class defining the field
                     * @param fieldName - the name of the field
                     * @param fieldType - the type of the field
                     * @return a MethodHandle able to return the value of the field
                     * @throws IllegalAccessException if access is denied or the field is static
                     * @throws NoSuchFieldException if no field is found with given name and type in clazz
                     * @throws SecurityException if the SecurityManager prevents access
                     * @throws NullPointerException if any of the arguments are null
                     */
                    // @ts-ignore
                    findGetter(clazz: java.lang.Class<any>, fieldName: string, fieldType: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    /**
                     * Return a MethodHandle that provides read access to a field.
                     * The MethodHandle will have a MethodType taking no arguments
                     * and returning something of type <code>fieldType</code>.
                     * @param clazz - the class defining the field
                     * @param fieldName - the name of the field
                     * @param fieldType - the type of the field
                     * @return a MethodHandle able to return the value of the field
                     * @throws IllegalAccessException if access is denied or the field is not static
                     * @throws NoSuchFieldException if no field is found with given name and type in clazz
                     * @throws SecurityException if the SecurityManager prevents access
                     * @throws NullPointerException if any of the arguments are null
                     */
                    // @ts-ignore
                    findStaticGetter(clazz: java.lang.Class<any>, fieldName: string, fieldType: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    /**
                     * Return a MethodHandle that provides write access to a field.
                     * The MethodHandle will have a MethodType taking a two
                     * arguments, the first with type <code>clazz</code> and the second with
                     * type <code>fieldType</code>, and returning void.
                     * @param clazz - the class defining the field
                     * @param fieldName - the name of the field
                     * @param fieldType - the type of the field
                     * @return a MethodHandle able to set the value of the field
                     * @throws IllegalAccessException if access is denied
                     * @throws NoSuchFieldException if no field is found with given name and type in clazz
                     * @throws SecurityException if the SecurityManager prevents access
                     * @throws NullPointerException if any of the arguments are null
                     */
                    // @ts-ignore
                    findSetter(clazz: java.lang.Class<any>, fieldName: string, fieldType: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    /**
                     * Return a MethodHandle that provides write access to a field.
                     * The MethodHandle will have a MethodType taking one argument
                     * of type <code>fieldType</code> and returning void.
                     * @param clazz - the class defining the field
                     * @param fieldName - the name of the field
                     * @param fieldType - the type of the field
                     * @return a MethodHandle able to set the value of the field
                     * @throws IllegalAccessException if access is denied
                     * @throws NoSuchFieldException if no field is found with given name and type in clazz
                     * @throws SecurityException if the SecurityManager prevents access
                     * @throws NullPointerException if any of the arguments are null
                     */
                    // @ts-ignore
                    findStaticSetter(clazz: java.lang.Class<any>, fieldName: string, fieldType: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    /**
                     * Create a lookup on the request class.  The resulting lookup will have no more
                     * access privileges than the original.
                     * @param lookupClass - the class to create the lookup on
                     * @return a new MethodHandles.Lookup object
                     */
                    // @ts-ignore
                    in(lookupClass: java.lang.Class<any>): java.lang.invoke.MethodHandles.Lookup
                    /**
                     * The class being used for visibility checks and access permissions.
                     * @return The class used in by this Lookup object for access checking
                     */
                    // @ts-ignore
                    lookupClass(): java.lang.Class<?>
                    /**
                     * Make a MethodHandle to the Reflect method.  If the method is non-static, the receiver argument
                     * is treated as the intial argument in the MethodType.
                     * <p>
                     * If m is a virtual method, normal virtual dispatch is used on each invocation.
                     * <p>
                     * If the <code>accessible</code> flag is not set on the Reflect method, then access checking
                     * is performed using the lookup class.
                     * @param method - the reflect method
                     * @return A MethodHandle able to invoke the reflect method
                     * @throws IllegalAccessException - if access is denied
                     */
                    // @ts-ignore
                    unreflect(method: java.lang.reflect.Method): java.lang.invoke.MethodHandle
                    /**
                     * Return a MethodHandle for the reflect constructor. The MethodType has a return type
                     * of the declared class, and the arguments of the constructor.  The MehtodHnadle
                     * creates a new object as through by newInstance.
                     * <p>
                     * If the <code>accessible</code> flag is not set, then access checking
                     * is performed using the lookup class.
                     * @param method - the Reflect constructor
                     * @return a Methodhandle that creates new instances using the requested constructor
                     * @throws IllegalAccessException - if access is denied
                     */
                    // @ts-ignore
                    unreflectConstructor(method: java.lang.reflect.Constructor<any>): java.lang.invoke.MethodHandle
                    /**
                     * Return a MethodHandle that will create an object of the required class and initialize it using
                     * the constructor method with signature <i>type</i>.  The MethodHandle will have a MethodType
                     * with the same parameters as the constructor method, but will have a return type of the
                     * <i>declaringClass</i> instead of void.
                     * @param declaringClass - Class that declares the constructor
                     * @param type - the MethodType of the constructor.  Return type must be void.
                     * @return a MethodHandle able to construct and initialize the required class
                     * @throws IllegalAccessException if access is denied
                     * @throws NoSuchMethodException if the method doesn't exist
                     * @throws SecurityException if the SecurityManager prevents access
                     * @throws NullPointerException if any of the arguments are null
                     */
                    // @ts-ignore
                    findConstructor(declaringClass: java.lang.Class<any>, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    /**
                     * Return a MethodHandle for the Reflect method, that will directly call the requested method
                     * as through from the class <code>specialToken</code>.  The MethodType of the method handle
                     * will be that of the method with the receiver argument prepended.
                     * @param method - a Reflect method
                     * @param specialToken - the class the call is from
                     * @return a MethodHandle that directly dispatches the requested method
                     * @throws IllegalAccessException - if access is denied
                     */
                    // @ts-ignore
                    unreflectSpecial(method: java.lang.reflect.Method, specialToken: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    /**
                     * Create a MethodHandle that returns the value of the Reflect field.  There are two cases:
                     * <ol>
                     * <li>a static field - which has the MethodType with only a return type of the field</li>
                     * <li>an instance field - which has the MethodType with a return type of the field and a
                     * single argument of the object that contains the field</li>
                     * </ol>
                     * <p>
                     * If the <code>accessible</code> flag is not set, then access checking
                     * is performed using the lookup class.
                     * @param field - a Reflect field
                     * @return a MethodHandle able to return the field value
                     * @throws IllegalAccessException - if access is denied
                     */
                    // @ts-ignore
                    unreflectGetter(field: java.lang.reflect.Field): java.lang.invoke.MethodHandle
                    /**
                     * Create a MethodHandle that sets the value of the Reflect field.  All MethodHandles created
                     * here have a return type of void.  For the arguments, there are two cases:
                     * <ol>
                     * <li>a static field - which takes a single argument the same as the field</li>
                     * <li>an instance field - which takes two arguments, the object that contains the field, and the type of the field</li>
                     * </ol>
                     * <p>
                     * If the <code>accessible</code> flag is not set, then access checking
                     * is performed using the lookup class.
                     * @param field - a Reflect field
                     * @return a MethodHandle able to set the field value
                     * @throws IllegalAccessException - if access is denied
                     */
                    // @ts-ignore
                    unreflectSetter(field: java.lang.reflect.Field): java.lang.invoke.MethodHandle
                    /**
                     * Cracks a MethodHandle, which allows access to its symbolic parts.
                     * The MethodHandle must have been created by this Lookup object or one that is able to recreate the MethodHandle.
                     * If the Lookup object is not able to recreate the MethodHandle, the cracking may fail.
                     * @param target The MethodHandle to be cracked
                     * @return a MethodHandleInfo which provides access to the target's symbolic parts
                     * @throws IllegalArgumentException if the target is not a direct handle, or if the access check fails
                     * @throws NullPointerException if the target is null
                     * @throws SecurityException if a SecurityManager denies access
                     */
                    // @ts-ignore
                    revealDirect(target: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandleInfo
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
