declare namespace com {
    namespace rabbitmq {
        namespace client {
            // @ts-ignore
            interface BasicProperties {
                /**
                 * Retrieve the value in the contentType field.
                 * @return contentType field, or null if the field has not been set.
                 */
                // @ts-ignore
                getContentType(): string
                /**
                 * Retrieve the value in the contentEncoding field.
                 * @return contentEncoding field, or null if the field has not been set.
                 */
                // @ts-ignore
                getContentEncoding(): string
                /**
                 * Retrieve the table in the headers field as a map of fields names and
                 * values.
                 * @return headers table, or null if the headers field has not been set.
                 */
                // @ts-ignore
                getHeaders(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                /**
                 * Retrieve the value in the deliveryMode field.
                 * @return deliveryMode field, or null if the field has not been set.
                 */
                // @ts-ignore
                getDeliveryMode(): number
                /**
                 * Retrieve the value in the priority field.
                 * @return priority field, or null if the field has not been set.
                 */
                // @ts-ignore
                getPriority(): number
                /**
                 * Retrieve the value in the correlationId field.
                 * @return correlationId field, or null if the field has not been set.
                 */
                // @ts-ignore
                getCorrelationId(): string
                /**
                 * Retrieve the value in the replyTo field.
                 * @return replyTo field, or null if the field has not been set.
                 */
                // @ts-ignore
                getReplyTo(): string
                /**
                 * Retrieve the value in the expiration field.
                 * @return expiration field, or null if the field has not been set.
                 */
                // @ts-ignore
                getExpiration(): string
                /**
                 * Retrieve the value in the messageId field.
                 * @return messageId field, or null if the field has not been set.
                 */
                // @ts-ignore
                getMessageId(): string
                /**
                 * Retrieve the value in the timestamp field.
                 * @return timestamp field, or null if the field has not been set.
                 */
                // @ts-ignore
                getTimestamp(): java.util.Date
                /**
                 * Retrieve the value in the type field.
                 * @return type field, or null if the field has not been set.
                 */
                // @ts-ignore
                getType(): string
                /**
                 * Retrieve the value in the userId field.
                 * @return userId field, or null if the field has not been set.
                 */
                // @ts-ignore
                getUserId(): string
                /**
                 * Retrieve the value in the appId field.
                 * @return appId field, or null if the field has not been set.
                 */
                // @ts-ignore
                getAppId(): string
            }
        }
    }
}
