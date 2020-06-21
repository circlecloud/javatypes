declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace support {
                    /**
                     * A very simple hardcoded implementation of the {@link org.springframework.expression.Expression}
                     * interface that represents an immutable value.
                     * It is used as value holder in the context of expression evaluation.
                     * @param <V> - The expected value type.
                     * @author Artem Bilan
                     * @since 1.4
                     */
                    // @ts-ignore
                    class ValueExpression<V> extends java.lang.Object {
                        // @ts-ignore
                        constructor(value: V)
                        // @ts-ignore
                        public getValue(): V
                        // @ts-ignore
                        public getValue(rootObject: java.lang.Object | any): V
                        // @ts-ignore
                        public getValue(context: EvaluationContext): V
                        // @ts-ignore
                        public getValue(context: EvaluationContext, rootObject: java.lang.Object | any): V
                        // @ts-ignore
                        public getValue<T>(rootObject: java.lang.Object | any, desiredResultType: java.lang.Class<T>): T
                        // @ts-ignore
                        public getValue<T>(context: EvaluationContext, rootObject: java.lang.Object | any, desiredResultType: java.lang.Class<T>): T
                        // @ts-ignore
                        public getValue<T>(context: EvaluationContext, desiredResultType: java.lang.Class<T>): T
                        // @ts-ignore
                        public getValueType(): java.lang.Class<V>
                        // @ts-ignore
                        public getValueType(rootObject: java.lang.Object | any): java.lang.Class<V>
                        // @ts-ignore
                        public getValueType(context: EvaluationContext): java.lang.Class<V>
                        // @ts-ignore
                        public getValueType(context: EvaluationContext, rootObject: java.lang.Object | any): java.lang.Class<V>
                        // @ts-ignore
                        public getValueTypeDescriptor(): TypeDescriptor
                        // @ts-ignore
                        public getValueTypeDescriptor(rootObject: java.lang.Object | any): TypeDescriptor
                        // @ts-ignore
                        public getValueTypeDescriptor(context: EvaluationContext): TypeDescriptor
                        // @ts-ignore
                        public getValueTypeDescriptor(context: EvaluationContext, rootObject: java.lang.Object | any): TypeDescriptor
                        // @ts-ignore
                        public isWritable(context: EvaluationContext): boolean
                        // @ts-ignore
                        public isWritable(context: EvaluationContext, rootObject: java.lang.Object | any): boolean
                        // @ts-ignore
                        public setValue(context: EvaluationContext, value: java.lang.Object | any): void
                        // @ts-ignore
                        public setValue(context: EvaluationContext, rootObject: java.lang.Object | any, value: java.lang.Object | any): void
                        // @ts-ignore
                        public getExpressionString(): string
                    }
                }
            }
        }
    }
}
