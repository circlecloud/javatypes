declare namespace javax {
    namespace xml {
        namespace stream {
            /**
             * The base exception for unexpected processing errors.  This Exception
             * class is used to report well-formedness errors as well as unexpected
             * processing conditions.
             * @version 1.0
             * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
             * @since 1.6
             */
            // @ts-ignore
            class XMLStreamException extends java.lang.Exception {
                /**
                 * Default constructor
                 */
                // @ts-ignore
                constructor()
                /**
                 * Construct an exception with the assocated message.
                 * @param msg the message to report
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string)
                /**
                 * Construct an exception with the assocated exception
                 * @param th a nested exception
                 */
                // @ts-ignore
                constructor(th: java.lang.Throwable | Error)
                /**
                 * Construct an exception with the assocated message and exception
                 * @param th a nested exception
                 * @param msg the message to report
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string, th: java.lang.Throwable | Error)
                /**
                 * Construct an exception with the assocated message, exception and location.
                 * @param th a nested exception
                 * @param msg the message to report
                 * @param location the location of the error
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string, location: javax.xml.stream.Location, th: java.lang.Throwable | Error)
                /**
                 * Construct an exception with the assocated message, exception and location.
                 * @param msg the message to report
                 * @param location the location of the error
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string, location: javax.xml.stream.Location)
                // @ts-ignore
                nested: java.lang.Throwable | Error
                // @ts-ignore
                location: javax.xml.stream.Location
                /**
                 * Gets the nested exception.
                 * @return Nested exception
                 */
                // @ts-ignore
                getNestedException(): Error
                /**
                 * Gets the location of the exception
                 * @return the location of the exception, may be null if none is available
                 */
                // @ts-ignore
                getLocation(): javax.xml.stream.Location
            }
        }
    }
}
