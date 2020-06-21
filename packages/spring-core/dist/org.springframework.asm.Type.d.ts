declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * A Java field or method type. This class can be used to make it easier to manipulate type and
             * method descriptors.
             * @author Eric Bruneton
             * @author Chris Nokleberg
             */
            // @ts-ignore
            class Type extends java.lang.Object {
                /**
                 * The sort of the {@code void} type. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly VOID: number /*int*/
                /**
                 * The sort of the {@code boolean} type. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly BOOLEAN: number /*int*/
                /**
                 * The sort of the {@code char} type. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly CHAR: number /*int*/
                /**
                 * The sort of the {@code byte} type. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly BYTE: number /*int*/
                /**
                 * The sort of the {@code short} type. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly SHORT: number /*int*/
                /**
                 * The sort of the {@code int} type. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly INT: number /*int*/
                /**
                 * The sort of the {@code float} type. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly FLOAT: number /*int*/
                /**
                 * The sort of the {@code long} type. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly LONG: number /*int*/
                /**
                 * The sort of the {@code double} type. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly DOUBLE: number /*int*/
                /**
                 * The sort of array reference types. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly ARRAY: number /*int*/
                /**
                 * The sort of object reference types. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly OBJECT: number /*int*/
                /**
                 * The sort of method types. See {@link #getSort}.
                 */
                // @ts-ignore
                public static readonly METHOD: number /*int*/
                /**
                 * The {@code void} type.
                 */
                // @ts-ignore
                public static readonly VOID_TYPE: org.springframework.asm.Type
                /**
                 * The {@code boolean} type.
                 */
                // @ts-ignore
                public static readonly BOOLEAN_TYPE: org.springframework.asm.Type
                /**
                 * The {@code char} type.
                 */
                // @ts-ignore
                public static readonly CHAR_TYPE: org.springframework.asm.Type
                /**
                 * The {@code byte} type.
                 */
                // @ts-ignore
                public static readonly BYTE_TYPE: org.springframework.asm.Type
                /**
                 * The {@code short} type.
                 */
                // @ts-ignore
                public static readonly SHORT_TYPE: org.springframework.asm.Type
                /**
                 * The {@code int} type.
                 */
                // @ts-ignore
                public static readonly INT_TYPE: org.springframework.asm.Type
                /**
                 * The {@code float} type.
                 */
                // @ts-ignore
                public static readonly FLOAT_TYPE: org.springframework.asm.Type
                /**
                 * The {@code long} type.
                 */
                // @ts-ignore
                public static readonly LONG_TYPE: org.springframework.asm.Type
                /**
                 * The {@code double} type.
                 */
                // @ts-ignore
                public static readonly DOUBLE_TYPE: org.springframework.asm.Type
                /**
                 * Returns the {@link Type} corresponding to the given type descriptor.
                 * @param typeDescriptor a field or method type descriptor.
                 * @return the {#link Type} corresponding to the given type descriptor.
                 */
                // @ts-ignore
                public static getType(typeDescriptor: java.lang.String | string): org.springframework.asm.Type
                /**
                 * Returns the {@link Type} corresponding to the given class.
                 * @param clazz a class.
                 * @return the {#link Type} corresponding to the given class.
                 */
                // @ts-ignore
                public static getType(clazz: java.lang.Class<any>): org.springframework.asm.Type
                /**
                 * Returns the method {@link Type} corresponding to the given constructor.
                 * @param constructor a {#link Constructor} object.
                 * @return the method {#link Type} corresponding to the given constructor.
                 */
                // @ts-ignore
                public static getType(constructor: java.lang.reflect.Constructor<any>): org.springframework.asm.Type
                /**
                 * Returns the method {@link Type} corresponding to the given method.
                 * @param method a {#link Method} object.
                 * @return the method {#link Type} corresponding to the given method.
                 */
                // @ts-ignore
                public static getType(method: java.lang.reflect.Method): org.springframework.asm.Type
                /**
                 * Returns the type of the elements of this array type. This method should only be used for an
                 * array type.
                 * @return Returns the type of the elements of this array type.
                 */
                // @ts-ignore
                public getElementType(): org.springframework.asm.Type
                /**
                 * Returns the {@link Type} corresponding to the given internal name.
                 * @param internalName an internal name.
                 * @return the {#link Type} corresponding to the given internal name.
                 */
                // @ts-ignore
                public static getObjectType(internalName: java.lang.String | string): org.springframework.asm.Type
                /**
                 * Returns the {@link Type} corresponding to the given method descriptor. Equivalent to <code>
                 * Type.getType(methodDescriptor)</code>.
                 * @param methodDescriptor a method descriptor.
                 * @return the {#link Type} corresponding to the given method descriptor.
                 */
                // @ts-ignore
                public static getMethodType(methodDescriptor: java.lang.String | string): org.springframework.asm.Type
                /**
                 * Returns the method {@link Type} corresponding to the given argument and return types.
                 * @param returnType the return type of the method.
                 * @param argumentTypes the argument types of the method.
                 * @return the method {#link Type} corresponding to the given argument and return types.
                 */
                // @ts-ignore
                public static getMethodType(returnType: org.springframework.asm.Type, ...argumentTypes: org.springframework.asm.Type[]): org.springframework.asm.Type
                /**
                 * Returns the argument types of methods of this type. This method should only be used for method
                 * types.
                 * @return the argument types of methods of this type.
                 */
                // @ts-ignore
                public getArgumentTypes(): org.springframework.asm.Type[]
                /**
                 * Returns the {@link Type} values corresponding to the argument types of the given method
                 * descriptor.
                 * @param methodDescriptor a method descriptor.
                 * @return the {#link Type} values corresponding to the argument types of the given method
                 *      descriptor.
                 */
                // @ts-ignore
                public static getArgumentTypes(methodDescriptor: java.lang.String | string): org.springframework.asm.Type[]
                /**
                 * Returns the {@link Type} values corresponding to the argument types of the given method.
                 * @param method a method.
                 * @return the {#link Type} values corresponding to the argument types of the given method.
                 */
                // @ts-ignore
                public static getArgumentTypes(method: java.lang.reflect.Method): org.springframework.asm.Type[]
                /**
                 * Returns the return type of methods of this type. This method should only be used for method
                 * types.
                 * @return the return type of methods of this type.
                 */
                // @ts-ignore
                public getReturnType(): org.springframework.asm.Type
                /**
                 * Returns the {@link Type} corresponding to the return type of the given method descriptor.
                 * @param methodDescriptor a method descriptor.
                 * @return the {#link Type} corresponding to the return type of the given method descriptor.
                 */
                // @ts-ignore
                public static getReturnType(methodDescriptor: java.lang.String | string): org.springframework.asm.Type
                /**
                 * Returns the {@link Type} corresponding to the return type of the given method.
                 * @param method a method.
                 * @return the {#link Type} corresponding to the return type of the given method.
                 */
                // @ts-ignore
                public static getReturnType(method: java.lang.reflect.Method): org.springframework.asm.Type
                /**
                 * Returns the binary name of the class corresponding to this type. This method must not be used
                 * on method types.
                 * @return the binary name of the class corresponding to this type.
                 */
                // @ts-ignore
                public getClassName(): string
                /**
                 * Returns the internal name of the class corresponding to this object or array type. The internal
                 * name of a class is its fully qualified name (as returned by Class.getName(), where '.' are
                 * replaced by '/'). This method should only be used for an object or array type.
                 * @return the internal name of the class corresponding to this object type.
                 */
                // @ts-ignore
                public getInternalName(): string
                /**
                 * Returns the internal name of the given class. The internal name of a class is its fully
                 * qualified name, as returned by Class.getName(), where '.' are replaced by '/'.
                 * @param clazz an object or array class.
                 * @return the internal name of the given class.
                 */
                // @ts-ignore
                public static getInternalName(clazz: java.lang.Class<any>): string
                /**
                 * Returns the descriptor corresponding to this type.
                 * @return the descriptor corresponding to this type.
                 */
                // @ts-ignore
                public getDescriptor(): string
                /**
                 * Returns the descriptor corresponding to the given class.
                 * @param clazz an object class, a primitive class or an array class.
                 * @return the descriptor corresponding to the given class.
                 */
                // @ts-ignore
                public static getDescriptor(clazz: java.lang.Class<any>): string
                /**
                 * Returns the descriptor corresponding to the given constructor.
                 * @param constructor a {#link Constructor} object.
                 * @return the descriptor of the given constructor.
                 */
                // @ts-ignore
                public static getConstructorDescriptor(constructor: java.lang.reflect.Constructor<any>): string
                /**
                 * Returns the descriptor corresponding to the given argument and return types.
                 * @param returnType the return type of the method.
                 * @param argumentTypes the argument types of the method.
                 * @return the descriptor corresponding to the given argument and return types.
                 */
                // @ts-ignore
                public static getMethodDescriptor(returnType: org.springframework.asm.Type, ...argumentTypes: org.springframework.asm.Type[]): string
                /**
                 * Returns the descriptor corresponding to the given method.
                 * @param method a {#link Method} object.
                 * @return the descriptor of the given method.
                 */
                // @ts-ignore
                public static getMethodDescriptor(method: java.lang.reflect.Method): string
                /**
                 * Returns the sort of this type.
                 * @return {#link #VOID}, {@link #BOOLEAN}, {@link #CHAR}, {@link #BYTE}, {@link #SHORT}, {@link
                 *      #INT}, {@link #FLOAT}, {@link #LONG}, {@link #DOUBLE}, {@link #ARRAY}, {@link #OBJECT} or
                 *      {@link #METHOD}.
                 */
                // @ts-ignore
                public getSort(): number /*int*/
                /**
                 * Returns the number of dimensions of this array type. This method should only be used for an
                 * array type.
                 * @return the number of dimensions of this array type.
                 */
                // @ts-ignore
                public getDimensions(): number /*int*/
                /**
                 * Returns the size of values of this type. This method must not be used for method types.
                 * @return the size of values of this type, i.e., 2 for {#code long} and {@code double}, 0 for
                 *      {@code void} and 1 otherwise.
                 */
                // @ts-ignore
                public getSize(): number /*int*/
                /**
                 * Returns the size of the arguments and of the return value of methods of this type. This method
                 * should only be used for method types.
                 * @return the size of the arguments of the method (plus one for the implicit this argument),
                 *      argumentsSize, and the size of its return value, returnSize, packed into a single int i =
                 *      {#code (argumentsSize &lt;&lt; 2) | returnSize} (argumentsSize is therefore equal to {@code
                 *      i &gt;&gt; 2}, and returnSize to {@code i &amp; 0x03}).
                 */
                // @ts-ignore
                public getArgumentsAndReturnSizes(): number /*int*/
                /**
                 * Computes the size of the arguments and of the return value of a method.
                 * @param methodDescriptor a method descriptor.
                 * @return the size of the arguments of the method (plus one for the implicit this argument),
                 *      argumentsSize, and the size of its return value, returnSize, packed into a single int i =
                 *      {#code (argumentsSize &lt;&lt; 2) | returnSize} (argumentsSize is therefore equal to {@code
                 *      i &gt;&gt; 2}, and returnSize to {@code i &amp; 0x03}).
                 */
                // @ts-ignore
                public static getArgumentsAndReturnSizes(methodDescriptor: java.lang.String | string): number /*int*/
                /**
                 * Returns a JVM instruction opcode adapted to this {@link Type}. This method must not be used for
                 * method types.
                 * @param opcode a JVM instruction opcode. This opcode must be one of ILOAD, ISTORE, IALOAD,
                 *      IASTORE, IADD, ISUB, IMUL, IDIV, IREM, INEG, ISHL, ISHR, IUSHR, IAND, IOR, IXOR and
                 *      IRETURN.
                 * @return an opcode that is similar to the given opcode, but adapted to this {#link Type}. For
                 *      example, if this type is {@code float} and {@code opcode} is IRETURN, this method returns
                 *      FRETURN.
                 */
                // @ts-ignore
                public getOpcode(opcode: number /*int*/): number /*int*/
                /**
                 * Tests if the given object is equal to this type.
                 * @param object the object to be compared to this type.
                 * @return {#literal true} if the given object is equal to this type.
                 */
                // @ts-ignore
                public equals(object: java.lang.Object | any): boolean
                /**
                 * Returns a hash code value for this type.
                 * @return a hash code value for this type.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns a string representation of this type.
                 * @return the descriptor of this type.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
