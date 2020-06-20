declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * A visitor to visit a Java field. The methods of this class must be called in the following order:
             * ( {@code visitAnnotation} | {@code visitTypeAnnotation} | {@code visitAttribute} )* {@code
             * visitEnd}.
             * @author Eric Bruneton
             */
            // @ts-ignore
            class FieldVisitor extends java.lang.Object {
                /**
                 * Constructs a new {@link FieldVisitor}.
                 * @param api the ASM API version implemented by this visitor. Must be one of {#link
                 *      Opcodes#ASM4}, {@link Opcodes#ASM5}, {@link Opcodes#ASM6} or {@link Opcodes#ASM7}.
                 */
                // @ts-ignore
                constructor(api: number /*int*/)
                /**
                 * Constructs a new {@link FieldVisitor}.
                 * @param api the ASM API version implemented by this visitor. Must be one of {#link
                 *      Opcodes#ASM4}, {@link Opcodes#ASM5}, {@link Opcodes#ASM6} or {@link Opcodes#ASM7}.
                 * @param fieldVisitor the field visitor to which this visitor must delegate method calls. May be
                 *      null.
                 */
                // @ts-ignore
                constructor(api: number /*int*/, fieldVisitor: org.springframework.asm.FieldVisitor)
                /**
                 * The ASM API version implemented by this visitor. The value of this field must be one of {@link
                 * Opcodes#ASM4}, {@link Opcodes#ASM5}, {@link Opcodes#ASM6} or {@link Opcodes#ASM7}.
                 */
                // @ts-ignore
                readonly api: number /*int*/
                /**
                 * The field visitor to which this visitor must delegate method calls. May be {@literal null}.
                 */
                // @ts-ignore
                fv: org.springframework.asm.FieldVisitor
                /**
                 * Visits an annotation of the field.
                 * @param descriptor the class descriptor of the annotation class.
                 * @param visible {#literal true} if the annotation is visible at runtime.
                 * @return a visitor to visit the annotation values, or {#literal null} if this visitor is not
                 *      interested in visiting this annotation.
                 */
                // @ts-ignore
                visitAnnotation(descriptor: string, visible: boolean): org.springframework.asm.AnnotationVisitor
                /**
                 * Visits an annotation on the type of the field.
                 * @param typeRef a reference to the annotated type. The sort of this type reference must be
                 *      {#link TypeReference#FIELD}. See {@link TypeReference}.
                 * @param typePath the path to the annotated type argument, wildcard bound, array element type, or
                 *      static inner type within 'typeRef'. May be {#literal null} if the annotation targets
                 *      'typeRef' as a whole.
                 * @param descriptor the class descriptor of the annotation class.
                 * @param visible {#literal true} if the annotation is visible at runtime.
                 * @return a visitor to visit the annotation values, or {#literal null} if this visitor is not
                 *      interested in visiting this annotation.
                 */
                // @ts-ignore
                visitTypeAnnotation(typeRef: number /*int*/, typePath: org.springframework.asm.TypePath, descriptor: string, visible: boolean): org.springframework.asm.AnnotationVisitor
                /**
                 * Visits a non standard attribute of the field.
                 * @param attribute an attribute.
                 */
                // @ts-ignore
                visitAttribute(attribute: org.springframework.asm.Attribute): void
                /**
                 * Visits the end of the field. This method, which is the last one to be called, is used to inform
                 * the visitor that all the annotations and attributes of the field have been visited.
                 */
                // @ts-ignore
                visitEnd(): void
            }
        }
    }
}
