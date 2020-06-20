declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Enumeration of HTTP status codes.
             * <p>The HTTP status code series can be retrieved via {@link #series()}.
             * @author Arjen Poutsma
             * @author Sebastien Deleuze
             * @author Brian Clozel
             * @since 3.0
             * @see HttpStatus.Series
             * @see <a href="https://www.iana.org/assignments/http-status-codes">HTTP Status Code Registry</a>
             * @see <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes">List of HTTP status codes - Wikipedia</a>
             */
            // @ts-ignore
            class HttpStatus extends java.lang.Enum<org.springframework.http.HttpStatus> {
                // @ts-ignore
                values(): org.springframework.http.HttpStatus[]
                // @ts-ignore
                valueOf(name: string): org.springframework.http.HttpStatus
                /**
                 * Return the integer value of this status code.
                 */
                // @ts-ignore
                value(): int
                /**
                 * Return the reason phrase of this status code.
                 */
                // @ts-ignore
                getReasonPhrase(): java.lang.String
                /**
                 * Return the HTTP status series of this status code.
                 * @see HttpStatus.Series
                 */
                // @ts-ignore
                series(): org.springframework.http.HttpStatus.Series
                /**
                 * Whether this status code is in the HTTP series
                 * {@link org.springframework.http.HttpStatus.Series#INFORMATIONAL}.
                 * This is a shortcut for checking the value of {@link #series()}.
                 * @since 4.0
                 * @see #series()
                 */
                // @ts-ignore
                is1xxInformational(): boolean
                /**
                 * Whether this status code is in the HTTP series
                 * {@link org.springframework.http.HttpStatus.Series#SUCCESSFUL}.
                 * This is a shortcut for checking the value of {@link #series()}.
                 * @since 4.0
                 * @see #series()
                 */
                // @ts-ignore
                is2xxSuccessful(): boolean
                /**
                 * Whether this status code is in the HTTP series
                 * {@link org.springframework.http.HttpStatus.Series#REDIRECTION}.
                 * This is a shortcut for checking the value of {@link #series()}.
                 * @since 4.0
                 * @see #series()
                 */
                // @ts-ignore
                is3xxRedirection(): boolean
                /**
                 * Whether this status code is in the HTTP series
                 * {@link org.springframework.http.HttpStatus.Series#CLIENT_ERROR}.
                 * This is a shortcut for checking the value of {@link #series()}.
                 * @since 4.0
                 * @see #series()
                 */
                // @ts-ignore
                is4xxClientError(): boolean
                /**
                 * Whether this status code is in the HTTP series
                 * {@link org.springframework.http.HttpStatus.Series#SERVER_ERROR}.
                 * This is a shortcut for checking the value of {@link #series()}.
                 * @since 4.0
                 * @see #series()
                 */
                // @ts-ignore
                is5xxServerError(): boolean
                /**
                 * Whether this status code is in the HTTP series
                 * {@link org.springframework.http.HttpStatus.Series#CLIENT_ERROR} or
                 * {@link org.springframework.http.HttpStatus.Series#SERVER_ERROR}.
                 * This is a shortcut for checking the value of {@link #series()}.
                 * @since 5.0
                 * @see #is4xxClientError()
                 * @see #is5xxServerError()
                 */
                // @ts-ignore
                isError(): boolean
                /**
                 * Return a string representation of this status code.
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Return the enum constant of this type with the specified numeric value.
                 * @param statusCode the numeric value of the enum to be returned
                 * @return the enum constant with the specified numeric value
                 * @throws IllegalArgumentException if this enum has no constant for the specified numeric value
                 */
                // @ts-ignore
                valueOf(statusCode: number /*int*/): org.springframework.http.HttpStatus
                /**
                 * Resolve the given status code to an {@code HttpStatus}, if possible.
                 * @param statusCode the HTTP status code (potentially non-standard)
                 * @return the corresponding {#code HttpStatus}, or {@code null} if not found
                 * @since 5.0
                 */
                // @ts-ignore
                resolve(statusCode: number /*int*/): org.springframework.http.HttpStatus
            }
        }
    }
}
