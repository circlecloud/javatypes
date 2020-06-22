declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace SessionAwareMethodInterceptor {
                    /**
                     * Represents an operation upon two operands of the same type, producing a result of the same type as the operands
                     * accepting {@link ClientSession}. This is a specialization of {@link BiFunction} for the case where the operands and
                     * the result are all of the same type.
                     * @param <T> the type of the operands and result of the operator
                     */
                    // @ts-ignore
                    interface ClientSessionOperator<T> extends java.util.function.BiFunction<ClientSession, T, T> {
                    }
                }
            }
        }
    }
}
