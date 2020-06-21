declare namespace java {
    namespace lang {
        namespace invoke {
            /**
             * A reference to a cracked MethodHandle, which allows access to its symbolic parts.
             * Call Lookup.revealDirect to crack a MethodHandle.
             * @since 1.8
             */
            // @ts-ignore
            interface MethodHandleInfo {
                /**
                 * Getter MethodHandle for an instance field
                 */
                // @ts-ignore
                readonly REF_getField: number /*int*/
                /**
                 * Getter MethodHandle for an static field
                 */
                // @ts-ignore
                readonly REF_getStatic: number /*int*/
                /**
                 * Setter MethodHandle for an instance field
                 */
                // @ts-ignore
                readonly REF_putField: number /*int*/
                /**
                 * Setter MethodHandle for an static field
                 */
                // @ts-ignore
                readonly REF_putStatic: number /*int*/
                /**
                 * MethodHandle for an instance method
                 */
                // @ts-ignore
                readonly REF_invokeVirtual: number /*int*/
                /**
                 * MethodHandle for a static method
                 */
                // @ts-ignore
                readonly REF_invokeStatic: number /*int*/
                /**
                 * MethodHandle for an special method
                 */
                // @ts-ignore
                readonly REF_invokeSpecial: number /*int*/
                /**
                 * MethodHandle for a constructor
                 */
                // @ts-ignore
                readonly REF_newInvokeSpecial: number /*int*/
                /**
                 * MethodHandle for an interface method
                 */
                // @ts-ignore
                readonly REF_invokeInterface: number /*int*/
                /**
                 * Returns the Class where the cracked MethodHandle's underlying method, field or constructor is declared.
                 * @return class that declares the underlying member
                 */
                // @ts-ignore
                getDeclaringClass(): java.lang.Class<any>
                /**
                 * Returns the simple name of the MethodHandle's underlying member.
                 * @return A string representing the name of the method or field, or "&lt;init&gt;" for constructor.
                 */
                // @ts-ignore
                getName(): string
                /**
                 * Returns the type of the MethodHandle's underlying member as a MethodType.
                 * If the underlying member is non-static, the receiver parameter will not be included.
                 * If the underlying member is field getter, the MethodType will take no parameters, and the return type will be the field type.
                 * If the underlying member is field setter, the MethodType will take one parameter of the field type, and the return type will be void.
                 * @return A MethodType object representing the signature of the method or field
                 */
                // @ts-ignore
                getMethodType(): java.lang.invoke.MethodType
                /**
                 * Returns the modifiers of the MethodHandle's underlying member.
                 * @return An int representing the member's modifiers, or -1 if the underlying member is not accessible.
                 */
                // @ts-ignore
                getModifiers(): number /*int*/
                /**
                 * Returns the reference kind of the MethodHandle. The possible reference kinds are the declared MethodHandleInfo.REF fields.
                 * @return Returns one of the defined reference kinds which represent the MethodHandle kind.
                 */
                // @ts-ignore
                getReferenceKind(): number /*int*/
                /**
                 * Returns whether the MethodHandle's underlying method or constructor has variable argument arity.
                 * @return whether the underlying method has variable arity
                 */
                // @ts-ignore
                isVarArgs(): boolean
                /**
                 * Reflects the underlying member as a Method, Field or Constructor. The member must be accessible to the provided lookup object.
                 * Public members are reflected as if by <code>getMethod</code>, <code>getField</code> or <code>getConstructor</code>.
                 * Non-public members are reflected as if by <code>getDeclearedMethod</code>, <code>getDeclaredField</code> or <code>getDeclaredConstructor</code>.
                 * @param expected The expected type of the returned Member
                 * @param lookup The lookup that was used to create the MethodHandle, or a lookup object with equivalent access
                 * @return A Method, Field or Constructor representing the underlying member of the MethodHandle
                 * @throws NullPointerException If either argument is null
                 * @throws IllegalArgumentException If the underlying member is not accessible to the provided lookup object
                 * @throws ClassCastException If the underlying member is not of the expected type
                 */
                // @ts-ignore
                reflectAs<T extends java.lang.reflect.Member>(expected: java.lang.Class<T>, lookup: java.lang.invoke.MethodHandles.Lookup): T
                /**
                 * Returns a string representing the equivalent bytecode for the referenceKind.
                 * @param referenceKind The referenceKind to lookup
                 * @return a String representing the equivalent bytecode
                 * @throws IllegalArgumentException If the provided referenceKind is invalid
                 */
                // @ts-ignore
                referenceKindToString(referenceKind: number /*int*/): string
                /**
                 * Answers a string containing a concise, human-readable description of the receiver.
                 * @param kind the reference kind, one of the declared MethodHandleInfo.REF fields.
                 * @param defc the class where the member is declared
                 * @param name the name of the member
                 * @param type the member's MethodType
                 * @return a String of the format "K C.N:MT"
                 */
                // @ts-ignore
                toString(kind: number /*int*/, defc: java.lang.Class<any>, name: java.lang.String | string, type: java.lang.invoke.MethodType): string
            }
        }
    }
}
