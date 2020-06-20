declare namespace org {
    namespace springframework {
        namespace format {
            /**
             * Formats objects of type T.
             * A Formatter is both a Printer <i>and</i> a Parser for an object type.
             * @author Keith Donald
             * @since 3.0
             * @param <T> the type of object this Formatter formats
             */
            // @ts-ignore
            interface Formatter<T> extends org.springframework.format.Printer<T>, org.springframework.format.Parser<T> {
            }
        }
    }
}
