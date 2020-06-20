declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Describes the semantics of a reactive type including boolean checks for
             * {@link #isMultiValue()}, {@link #isNoValue()}, and {@link #supportsEmpty()}.
             * @author Rossen Stoyanchev
             * @since 5.0
             */
            // @ts-ignore
            class ReactiveTypeDescriptor extends java.lang.Object {
                /**
                 * Return the reactive type for this descriptor.
                 */
                // @ts-ignore
                getReactiveType(): java.lang.Class<?>
                /**
                 * Return {@code true} if the reactive type can produce more than 1 value
                 * can be produced and is therefore a good fit to adapt to {@code Flux}.
                 * A {@code false} return value implies the reactive type can produce 1
                 * value at most and is therefore a good fit to adapt to {@code Mono}.
                 */
                // @ts-ignore
                isMultiValue(): boolean
                /**
                 * Return {@code true} if the reactive type does not produce any values and
                 * only provides completion and error signals.
                 */
                // @ts-ignore
                isNoValue(): boolean
                /**
                 * Return {@code true} if the reactive type can complete with no values.
                 */
                // @ts-ignore
                supportsEmpty(): boolean
                /**
                 * Return an empty-value instance for the underlying reactive or async type.
                 * Use of this type implies {@link #supportsEmpty()} is true.
                 */
                // @ts-ignore
                getEmptyValue(): java.lang.Object
                // @ts-ignore
                equals(other: any): boolean
                // @ts-ignore
                hashCode(): int
                /**
                 * Descriptor for a reactive type that can produce 0..N values.
                 * @param type the reactive type
                 * @param emptySupplier a supplier of an empty-value instance of the reactive type
                 */
                // @ts-ignore
                multiValue(type: java.lang.Class<any>, emptySupplier: java.util.function.Supplier<any> | java.util.function$.Supplier<?>): org.springframework.core.ReactiveTypeDescriptor
                /**
                 * Descriptor for a reactive type that can produce 0..1 values.
                 * @param type the reactive type
                 * @param emptySupplier a supplier of an empty-value instance of the reactive type
                 */
                // @ts-ignore
                singleOptionalValue(type: java.lang.Class<any>, emptySupplier: java.util.function.Supplier<any> | java.util.function$.Supplier<?>): org.springframework.core.ReactiveTypeDescriptor
                /**
                 * Descriptor for a reactive type that must produce 1 value to complete.
                 * @param type the reactive type
                 */
                // @ts-ignore
                singleRequiredValue(type: java.lang.Class<any>): org.springframework.core.ReactiveTypeDescriptor
                /**
                 * Descriptor for a reactive type that does not produce any values.
                 * @param type the reactive type
                 * @param emptySupplier a supplier of an empty-value instance of the reactive type
                 */
                // @ts-ignore
                noValue(type: java.lang.Class<any>, emptySupplier: java.util.function.Supplier<any> | java.util.function$.Supplier<?>): org.springframework.core.ReactiveTypeDescriptor
            }
        }
    }
}
