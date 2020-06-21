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
                public getReactiveType(): java.lang.Class<any>
                /**
                 * Return {@code true} if the reactive type can produce more than 1 value
                 * can be produced and is therefore a good fit to adapt to {@code Flux}.
                 * A {@code false} return value implies the reactive type can produce 1
                 * value at most and is therefore a good fit to adapt to {@code Mono}.
                 */
                // @ts-ignore
                public isMultiValue(): boolean
                /**
                 * Return {@code true} if the reactive type does not produce any values and
                 * only provides completion and error signals.
                 */
                // @ts-ignore
                public isNoValue(): boolean
                /**
                 * Return {@code true} if the reactive type can complete with no values.
                 */
                // @ts-ignore
                public supportsEmpty(): boolean
                /**
                 * Return an empty-value instance for the underlying reactive or async type.
                 * Use of this type implies {@link #supportsEmpty()} is true.
                 */
                // @ts-ignore
                public getEmptyValue(): any
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Descriptor for a reactive type that can produce 0..N values.
                 * @param type the reactive type
                 * @param emptySupplier a supplier of an empty-value instance of the reactive type
                 */
                // @ts-ignore
                public static multiValue(type: java.lang.Class<any>, emptySupplier: java.util.function$.Supplier<any>): org.springframework.core.ReactiveTypeDescriptor
                /**
                 * Descriptor for a reactive type that can produce 0..1 values.
                 * @param type the reactive type
                 * @param emptySupplier a supplier of an empty-value instance of the reactive type
                 */
                // @ts-ignore
                public static singleOptionalValue(type: java.lang.Class<any>, emptySupplier: java.util.function$.Supplier<any>): org.springframework.core.ReactiveTypeDescriptor
                /**
                 * Descriptor for a reactive type that must produce 1 value to complete.
                 * @param type the reactive type
                 */
                // @ts-ignore
                public static singleRequiredValue(type: java.lang.Class<any>): org.springframework.core.ReactiveTypeDescriptor
                /**
                 * Descriptor for a reactive type that does not produce any values.
                 * @param type the reactive type
                 * @param emptySupplier a supplier of an empty-value instance of the reactive type
                 */
                // @ts-ignore
                public static noValue(type: java.lang.Class<any>, emptySupplier: java.util.function$.Supplier<any>): org.springframework.core.ReactiveTypeDescriptor
            }
        }
    }
}
