declare namespace org {
    namespace springframework {
        namespace http {
            namespace HttpStatus {
                /**
                 * Enumeration of HTTP status series.
                 * <p>Retrievable via {@link HttpStatus#series()}.
                 */
                // @ts-ignore
                class Series extends java.lang.Enum<org.springframework.http.HttpStatus.Series> {
                    // @ts-ignore
                    public static readonly INFORMATIONAL: org.springframework.http.HttpStatus.Series
                    // @ts-ignore
                    public static readonly SUCCESSFUL: org.springframework.http.HttpStatus.Series
                    // @ts-ignore
                    public static readonly REDIRECTION: org.springframework.http.HttpStatus.Series
                    // @ts-ignore
                    public static readonly CLIENT_ERROR: org.springframework.http.HttpStatus.Series
                    // @ts-ignore
                    public static readonly SERVER_ERROR: org.springframework.http.HttpStatus.Series
                    // @ts-ignore
                    public static values(): org.springframework.http.HttpStatus.Series[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.springframework.http.HttpStatus.Series
                    /**
                     * Return the integer value of this status series. Ranges from 1 to 5.
                     */
                    // @ts-ignore
                    public value(): number /*int*/
                    /**
                     * Return the enum constant of this type with the corresponding series.
                     * @param status a standard HTTP status enum value
                     * @return the enum constant of this type with the corresponding series
                     * @throws IllegalArgumentException if this enum has no corresponding constant
                     */
                    // @ts-ignore
                    public static valueOf(status: org.springframework.http.HttpStatus): org.springframework.http.HttpStatus.Series
                    /**
                     * Return the enum constant of this type with the corresponding series.
                     * @param statusCode the HTTP status code (potentially non-standard)
                     * @return the enum constant of this type with the corresponding series
                     * @throws IllegalArgumentException if this enum has no corresponding constant
                     */
                    // @ts-ignore
                    public static valueOf(statusCode: number /*int*/): org.springframework.http.HttpStatus.Series
                    /**
                     * Resolve the given status code to an {@code HttpStatus.Series}, if possible.
                     * @param statusCode the HTTP status code (potentially non-standard)
                     * @return the corresponding {#code Series}, or {@code null} if not found
                     * @since 5.1.3
                     */
                    // @ts-ignore
                    public static resolve(statusCode: number /*int*/): org.springframework.http.HttpStatus.Series
                }
            }
        }
    }
}
