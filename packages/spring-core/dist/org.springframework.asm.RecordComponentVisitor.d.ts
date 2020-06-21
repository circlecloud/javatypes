declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * A visitor to visit a record component. The methods of this class must be called in the following
             * order: ( {@code visitAnnotation} | {@code visitTypeAnnotation} | {@code visitAttribute} )* {@code
             * visitEnd}.
             * @author Remi Forax
             * @author Eric Bruneton
             * @deprecated this API is experimental.
             */
            // @ts-ignore
            abstract class RecordComponentVisitor extends java.lang.Object {
                /**
                 * Constructs a new {@link RecordComponentVisitor}.
                 * @param api the ASM API version implemented by this visitor. Must be {#link
                 *      Opcodes#ASM8_EXPERIMENTAL}.
                 * @deprecated this API is experimental.
                 */
                // @ts-ignore
                constructor(api: number /*int*/)
                /**
                 * Constructs a new {@link RecordComponentVisitor}.
                 * @param api the ASM API version implemented by this visitor. Must be {#link
                 *      Opcodes#ASM8_EXPERIMENTAL}.
                 * @param recordComponentVisitor the record component visitor to which this visitor must delegate
                 *      method calls. May be null.
                 * @deprecated this API is experimental.
                 */
                // @ts-ignore
                constructor(api: number /*int*/, recordComponentVisitor: org.springframework.asm.RecordComponentVisitor)
                /**
                 * The ASM API version implemented by this visitor. The value of this field must be {@link
                 * Opcodes#ASM8_EXPERIMENTAL}.
                 */
                // @ts-ignore
                readonly api: number /*int*/
                /**
                 * The record visitor to which this visitor must delegate method calls. May be {@literal null}.
                 * @return the record visitor to which this visitor must delegate method calls or {#literal null}.
                 * @deprecated this API is experimental.
                 */
                // @ts-ignore
                public getDelegateExperimental(): org.springframework.asm.RecordComponentVisitor
                /**
                 * Visits an annotation of the record component.
                 * @param descriptor the class descriptor of the annotation class.
                 * @param visible {#literal true} if the annotation is visible at runtime.
                 * @return a visitor to visit the annotation values, or {#literal null} if this visitor is not
                 *      interested in visiting this annotation.
                 * @deprecated this API is experimental.
                 */
                // @ts-ignore
                public visitAnnotationExperimental(descriptor: java.lang.String | string, visible: boolean): org.springframework.asm.AnnotationVisitor
                /**
                 * Visits an annotation on a type in the record component signature.
                 * @param typeRef a reference to the annotated type. The sort of this type reference must be
                 *      {#link TypeReference#CLASS_TYPE_PARAMETER}, {@link
                 *      TypeReference#CLASS_TYPE_PARAMETER_BOUND} or {@link TypeReference#CLASS_EXTENDS}. See
                 *      {@link TypeReference}.
                 * @param typePath the path to the annotated type argument, wildcard bound, array element type, or
                 *      static inner type within 'typeRef'. May be {#literal null} if the annotation targets
                 *      'typeRef' as a whole.
                 * @param descriptor the class descriptor of the annotation class.
                 * @param visible {#literal true} if the annotation is visible at runtime.
                 * @return a visitor to visit the annotation values, or {#literal null} if this visitor is not
                 *      interested in visiting this annotation.
                 * @deprecated this API is experimental.
                 */
                // @ts-ignore
                public visitTypeAnnotationExperimental(typeRef: number /*int*/, typePath: org.springframework.asm.TypePath, descriptor: java.lang.String | string, visible: boolean): org.springframework.asm.AnnotationVisitor
                /**
                 * Visits a non standard attribute of the record component.
                 * @param attribute an attribute.
                 * @deprecated this API is experimental.
                 */
                // @ts-ignore
                public visitAttributeExperimental(attribute: org.springframework.asm.Attribute): void
                /**
                 * Visits the end of the record component. This method, which is the last one to be called, is
                 * used to inform the visitor that everything have been visited.
                 * @deprecated this API is experimental.
                 */
                // @ts-ignore
                public visitEndExperimental(): void
            }
        }
    }
}
