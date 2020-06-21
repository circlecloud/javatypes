declare namespace org {
    namespace springframework {
        namespace jdbc {
            /**
             * Data access exception thrown when a result set did not have the correct column count,
             * for example when expecting a single column but getting 0 or more than 1 columns.
             * @author Juergen Hoeller
             * @since 2.0
             * @see org.springframework.dao.IncorrectResultSizeDataAccessException
             */
            // @ts-ignore
            class IncorrectResultSetColumnCountException extends DataRetrievalFailureException {
                /**
                 * Constructor for IncorrectResultSetColumnCountException.
                 * @param expectedCount the expected column count
                 * @param actualCount the actual column count
                 */
                // @ts-ignore
                constructor(expectedCount: number /*int*/, actualCount: number /*int*/)
                /**
                 * Constructor for IncorrectResultCountDataAccessException.
                 * @param msg the detail message
                 * @param expectedCount the expected column count
                 * @param actualCount the actual column count
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string, expectedCount: number /*int*/, actualCount: number /*int*/)
                /**
                 * Return the expected column count.
                 */
                // @ts-ignore
                public getExpectedCount(): number /*int*/
                /**
                 * Return the actual column count.
                 */
                // @ts-ignore
                public getActualCount(): number /*int*/
            }
        }
    }
}
