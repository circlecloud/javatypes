declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * A constant whose value is computed at runtime, with a bootstrap method.
             * @author Remi Forax
             */
            // @ts-ignore
            class ConstantDynamic extends java.lang.Object {
                /**
                 * Constructs a new {@link ConstantDynamic}.
                 * @param name the constant name (can be arbitrary).
                 * @param descriptor the constant type (must be a field descriptor).
                 * @param bootstrapMethod the bootstrap method to use to compute the constant value at runtime.
                 * @param bootstrapMethodArguments the arguments to pass to the bootstrap method, in order to
                 *      compute the constant value at runtime.
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, descriptor: java.lang.String | string, bootstrapMethod: org.springframework.asm.Handle, ...bootstrapMethodArguments: java.lang.Object[] | any[])
                /**
                 * Returns the name of this constant.
                 * @return the name of this constant.
                 */
                // @ts-ignore
                public getName(): string
                /**
                 * Returns the type of this constant.
                 * @return the type of this constant, as a field descriptor.
                 */
                // @ts-ignore
                public getDescriptor(): string
                /**
                 * Returns the bootstrap method used to compute the value of this constant.
                 * @return the bootstrap method used to compute the value of this constant.
                 */
                // @ts-ignore
                public getBootstrapMethod(): org.springframework.asm.Handle
                /**
                 * Returns the number of arguments passed to the bootstrap method, in order to compute the value
                 * of this constant.
                 * @return the number of arguments passed to the bootstrap method, in order to compute the value
                 *      of this constant.
                 */
                // @ts-ignore
                public getBootstrapMethodArgumentCount(): number /*int*/
                /**
                 * Returns an argument passed to the bootstrap method, in order to compute the value of this
                 * constant.
                 * @param index an argument index, between 0 and {#link #getBootstrapMethodArgumentCount()}
                 *      (exclusive).
                 * @return the argument passed to the bootstrap method, with the given index.
                 */
                // @ts-ignore
                public getBootstrapMethodArgument(index: number /*int*/): any
                /**
                 * Returns the size of this constant.
                 * @return the size of this constant, i.e., 2 for {#code long} and {@code double}, 1 otherwise.
                 */
                // @ts-ignore
                public getSize(): number /*int*/
                // @ts-ignore
                public equals(object: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
