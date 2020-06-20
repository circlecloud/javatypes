declare namespace javax {
    namespace xml {
        namespace bind {
            /**
             * Exception that represents a failure in a JAXB operation.
             * <p>
             * This exception differs from {@link JAXBException} in that
             * this is an unchecked exception, while <tt>JAXBException</tt>
             * is a checked exception.
             * @see JAXB
             * @since JAXB2.1
             */
            // @ts-ignore
            class DataBindingException extends java.lang.RuntimeException {
                // @ts-ignore
                constructor(message: string, cause: Error)
                // @ts-ignore
                constructor(cause: Error)
            }
        }
    }
}
