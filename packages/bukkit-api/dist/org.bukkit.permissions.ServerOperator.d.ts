declare namespace org {
    namespace bukkit {
        namespace permissions {
            /**
             * Represents an object that may become a server operator, such as a {@link
             * Player}
             */
            // @ts-ignore
            interface ServerOperator {
                /**
                 * Checks if this object is a server operator
                 * @return true if this is an operator, otherwise false
                 */
                // @ts-ignore
                isOp(): boolean
                /**
                 * Sets the operator status of this object
                 * @param value New operator value
                 */
                // @ts-ignore
                setOp(value: boolean): void
            }
        }
    }
}
