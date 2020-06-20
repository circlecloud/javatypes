declare namespace java {
    namespace net {
        /**
         * Thrown to indicate that a HTTP request needs to be retried
         * but cannot be retried automatically, due to streaming mode
         * being enabled.
         * @author Michael McMahon
         * @since 1.5
         */
        // @ts-ignore
        class HttpRetryException extends java.io.IOException {
            /**
             * Constructs a new {@code HttpRetryException} from the
             * specified response code and exception detail message
             * @param detail   the detail message.
             * @param code   the HTTP response code from server.
             */
            // @ts-ignore
            constructor(detail: string, code: number /*int*/)
            /**
             * Constructs a new {@code HttpRetryException} with detail message
             * responseCode and the contents of the Location response header field.
             * @param detail   the detail message.
             * @param code   the HTTP response code from server.
             * @param location   the URL to be redirected to
             */
            // @ts-ignore
            constructor(detail: string, code: number /*int*/, location: string)
            /**
             * Returns the http response code
             * @return The http response code.
             */
            // @ts-ignore
            responseCode(): int
            /**
             * Returns a string explaining why the http request could
             * not be retried.
             * @return The reason string
             */
            // @ts-ignore
            getReason(): java.lang.String
            /**
             * Returns the value of the Location header field if the
             * error resulted from redirection.
             * @return The location string
             */
            // @ts-ignore
            getLocation(): java.lang.String
        }
    }
}
