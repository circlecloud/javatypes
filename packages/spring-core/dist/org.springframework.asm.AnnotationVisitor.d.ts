declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * A visitor to visit a Java annotation. The methods of this class must be called in the following
             * order: ( {@code visit} | {@code visitEnum} | {@code visitAnnotation} | {@code visitArray} )*
             * {@code visitEnd}.
             * @author Eric Bruneton
             * @author Eugene Kuleshov
             */
            // @ts-ignore
            class AnnotationVisitor extends java.lang.Object {
                /**
                 * Constructs a new {@link AnnotationVisitor}.
                 * @param api the ASM API version implemented by this visitor. Must be one of {#link
                 *      Opcodes#ASM4}, {@link Opcodes#ASM5}, {@link Opcodes#ASM6} or {@link Opcodes#ASM7}.
                 */
                // @ts-ignore
                constructor(api: number /*int*/)
                /**
                 * Constructs a new {@link AnnotationVisitor}.
                 * @param api the ASM API version implemented by this visitor. Must be one of {#link
                 *      Opcodes#ASM4}, {@link Opcodes#ASM5}, {@link Opcodes#ASM6} or {@link Opcodes#ASM7}.
                 * @param annotationVisitor the annotation visitor to which this visitor must delegate method
                 *      calls. May be {#literal null}.
                 */
                // @ts-ignore
                constructor(api: number /*int*/, annotationVisitor: org.springframework.asm.AnnotationVisitor)
                /**
                 * The ASM API version implemented by this visitor. The value of this field must be one of {@link
                 * Opcodes#ASM4}, {@link Opcodes#ASM5}, {@link Opcodes#ASM6} or {@link Opcodes#ASM7}.
                 */
                // @ts-ignore
                readonly api: number /*int*/
                /**
                 * The annotation visitor to which this visitor must delegate method calls. May be {@literal
                 * null}.
                 */
                // @ts-ignore
                av: org.springframework.asm.AnnotationVisitor
                /**
                 * Visits a primitive value of the annotation.
                 * @param name the value name.
                 * @param value the actual value, whose type must be {#link Byte}, {@link Boolean}, {@link
                 *      Character}, {@link Short}, {@link Integer} , {@link Long}, {@link Float}, {@link Double},
                 *      {@link String} or {@link Type} of {@link Type#OBJECT} or {@link Type#ARRAY} sort. This
                 *      value can also be an array of byte, boolean, short, char, int, long, float or double values
                 *      (this is equivalent to using {@link #visitArray} and visiting each array element in turn,
                 *      but is more convenient).
                 */
                // @ts-ignore
                visit(name: string, value: any): void
                /**
                 * Visits an enumeration value of the annotation.
                 * @param name the value name.
                 * @param descriptor the class descriptor of the enumeration class.
                 * @param value the actual enumeration value.
                 */
                // @ts-ignore
                visitEnum(name: string, descriptor: string, value: string): void
                /**
                 * Visits a nested annotation value of the annotation.
                 * @param name the value name.
                 * @param descriptor the class descriptor of the nested annotation class.
                 * @return a visitor to visit the actual nested annotation value, or {#literal null} if this
                 *      visitor is not interested in visiting this nested annotation. <i>The nested annotation
                 *      value must be fully visited before calling other methods on this annotation visitor</i>.
                 */
                // @ts-ignore
                visitAnnotation(name: string, descriptor: string): org.springframework.asm.AnnotationVisitor
                /**
                 * Visits an array value of the annotation. Note that arrays of primitive types (such as byte,
                 * boolean, short, char, int, long, float or double) can be passed as value to {@link #visit
                 * visit}. This is what {@link ClassReader} does.
                 * @param name the value name.
                 * @return a visitor to visit the actual array value elements, or {#literal null} if this visitor
                 *      is not interested in visiting these values. The 'name' parameters passed to the methods of
                 *      this visitor are ignored. <i>All the array values must be visited before calling other
                 *      methods on this annotation visitor</i>.
                 */
                // @ts-ignore
                visitArray(name: string): org.springframework.asm.AnnotationVisitor
                /**
                 * Visits the end of the annotation.
                 */
                // @ts-ignore
                visitEnd(): void
            }
        }
    }
}
