declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * Class to easily construct MongoDB update clauses.
                         * @author Thomas Risberg
                         * @author Mark Pollack
                         * @author Oliver Gierke
                         * @author Becca Gaspard
                         * @author Christoph Strobl
                         * @author Thomas Darimont
                         * @author Alexey Plotnik
                         * @author Mark Paluch
                         * @author Pavel Vodrazka
                         */
                        // @ts-ignore
                        class Update extends java.lang.Object implements org.springframework.data.mongodb.core.query.UpdateDefinition {
                            // @ts-ignore
                            constructor()
                            /**
                             * Static factory method to create an Update using the provided key
                             * @param key
                             * @return 
                             */
                            // @ts-ignore
                            public static update(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Creates an {@link Update} instance from the given {@link Document}. Allows to explicitly exclude fields from making
                             * it into the created {@link Update} object. Note, that this will set attributes directly and <em>not</em> use
                             * {@literal $set}. This means fields not given in the {@link Document} will be nulled when executing the update. To
                             * create an only-updating {@link Update} instance of a {@link Document}, call {@link #set(String, Object)} for each
                             * value in it.
                             * @param object the source {#link Document} to create the update from.
                             * @param exclude the fields to exclude.
                             * @return 
                             */
                            // @ts-ignore
                            public static fromDocument(object: Document, ...exclude: java.lang.String[] | string[]): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Update using the {@literal $set} update modifier
                             * @param key
                             * @param value can be {#literal null}. In this case the property remains in the db with a {@literal null} value. To
                             *           remove it use {@link #unset(String)}.
                             * @return this.
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/update/set/">MongoDB Update operator: $set</a>
                             */
                            // @ts-ignore
                            public set(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Update using the {@literal $setOnInsert} update modifier
                             * @param key
                             * @param value can be {#literal null}.
                             * @return 
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/setOnInsert/">MongoDB Update operator:
                             *       $setOnInsert</a>
                             */
                            // @ts-ignore
                            public setOnInsert(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Update using the {@literal $unset} update modifier
                             * @param key
                             * @return 
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/unset/">MongoDB Update operator: $unset</a>
                             */
                            // @ts-ignore
                            public unset(key: java.lang.String | string): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Update using the {@literal $inc} update modifier
                             * @param key
                             * @param inc
                             * @return 
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/inc/">MongoDB Update operator: $inc</a>
                             */
                            // @ts-ignore
                            public inc(key: java.lang.String | string, inc: java.lang.Number): org.springframework.data.mongodb.core.query.Update
                            // @ts-ignore
                            public inc(key: java.lang.String | string): void
                            /**
                             * Update using the {@literal $push} update modifier
                             * @param key
                             * @param value
                             * @return 
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/push/">MongoDB Update operator: $push</a>
                             */
                            // @ts-ignore
                            public push(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Update using {@code $push} modifier. <br/>
                             * Allows creation of {@code $push} command for single or multiple (using {@code $each}) values as well as using
                             * {@code $position}.
                             * @param key
                             * @return {#link PushOperatorBuilder} for given key
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/push/">MongoDB Update operator: $push</a>
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/each/">MongoDB Update operator: $each</a>
                             */
                            // @ts-ignore
                            public push(key: java.lang.String | string): org.springframework.data.mongodb.core.query.Update.PushOperatorBuilder
                            /**
                             * Update using the {@code $pushAll} update modifier. <br>
                             * <b>Note</b>: In MongoDB 2.4 the usage of {@code $pushAll} has been deprecated in favor of {@code $push $each}.
                             * <b>Important:</b> As of MongoDB 3.6 {@code $pushAll} is not longer supported. Use {@code $push $each} instead.
                             * {@link #push(String)}) returns a builder that can be used to populate the {@code $each} object.
                             * @param key
                             * @param values
                             * @return 
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/pushAll/">MongoDB Update operator:
                             *       $pushAll</a>
                             * @deprecated as of MongoDB 2.4. Removed in MongoDB 3.6. Use {#link #push(String) $push $each} instead.
                             */
                            // @ts-ignore
                            public pushAll(key: java.lang.String | string, values: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Update using {@code $addToSet} modifier. <br/>
                             * Allows creation of {@code $push} command for single or multiple (using {@code $each}) values
                             * @param key
                             * @return 
                             * @since 1.5
                             */
                            // @ts-ignore
                            public addToSet(key: java.lang.String | string): org.springframework.data.mongodb.core.query.Update.AddToSetBuilder
                            /**
                             * Update using the {@literal $addToSet} update modifier
                             * @param key
                             * @param value
                             * @return 
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/addToSet/">MongoDB Update operator:
                             *       $addToSet</a>
                             */
                            // @ts-ignore
                            public addToSet(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Update using the {@literal $pop} update modifier
                             * @param key
                             * @param pos
                             * @return 
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/pop/">MongoDB Update operator: $pop</a>
                             */
                            // @ts-ignore
                            public pop(key: java.lang.String | string, pos: org.springframework.data.mongodb.core.query.Update.Position): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Update using the {@literal $pull} update modifier
                             * @param key
                             * @param value
                             * @return 
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/pull/">MongoDB Update operator: $pull</a>
                             */
                            // @ts-ignore
                            public pull(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Update using the {@literal $pullAll} update modifier
                             * @param key
                             * @param values
                             * @return 
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/pullAll/">MongoDB Update operator:
                             *       $pullAll</a>
                             */
                            // @ts-ignore
                            public pullAll(key: java.lang.String | string, values: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Update using the {@literal $rename} update modifier
                             * @param oldName
                             * @param newName
                             * @return 
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/rename/">MongoDB Update operator:
                             *       $rename</a>
                             */
                            // @ts-ignore
                            public rename(oldName: java.lang.String | string, newName: java.lang.String | string): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Update given key to current date using {@literal $currentDate} modifier.
                             * @param key
                             * @return 
                             * @since 1.6
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/currentDate/">MongoDB Update operator:
                             *       $currentDate</a>
                             */
                            // @ts-ignore
                            public currentDate(key: java.lang.String | string): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Update given key to current date using {@literal $currentDate : &#123; $type : "timestamp" &#125;} modifier.
                             * @param key
                             * @return 
                             * @since 1.6
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/currentDate/">MongoDB Update operator:
                             *       $currentDate</a>
                             */
                            // @ts-ignore
                            public currentTimestamp(key: java.lang.String | string): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Multiply the value of given key by the given number.
                             * @param key must not be {#literal null}.
                             * @param multiplier must not be {#literal null}.
                             * @return 
                             * @since 1.7
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/mul/">MongoDB Update operator: $mul</a>
                             */
                            // @ts-ignore
                            public multiply(key: java.lang.String | string, multiplier: java.lang.Number): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Update given key to the {@code value} if the {@code value} is greater than the current value of the field.
                             * @param key must not be {#literal null}.
                             * @param value must not be {#literal null}.
                             * @return 
                             * @since 1.10
                             * @see <a href="https://docs.mongodb.com/manual/reference/bson-type-comparison-order/">Comparison/Sort Order</a>
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/max/">MongoDB Update operator: $max</a>
                             */
                            // @ts-ignore
                            public max(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.data.mongodb.core.query.Update
                            /**
                             * Update given key to the {@code value} if the {@code value} is less than the current value of the field.
                             * @param key must not be {#literal null}.
                             * @param value must not be {#literal null}.
                             * @return 
                             * @since 1.10
                             * @see <a href="https://docs.mongodb.com/manual/reference/bson-type-comparison-order/">Comparison/Sort Order</a>
                             * @see <a href="https://docs.mongodb.org/manual/reference/operator/update/min/">MongoDB Update operator: $min</a>
                             */
                            // @ts-ignore
                            public min(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.data.mongodb.core.query.Update
                            /**
                             * The operator supports bitwise {@code and}, bitwise {@code or}, and bitwise {@code xor} operations.
                             * @param key
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public bitwise(key: java.lang.String | string): org.springframework.data.mongodb.core.query.Update.BitwiseOperatorBuilder
                            /**
                             * Prevents a write operation that affects <strong>multiple</strong> documents from yielding to other reads or writes
                             * once the first document is written. <br />
                             * Use with {@link org.springframework.data.mongodb.core.MongoOperations#updateMulti(Query, Update, Class)}.
                             * @return never {#literal null}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public isolated(): org.springframework.data.mongodb.core.query.Update
                            // @ts-ignore
                            public isIsolated(): java.lang.Boolean
                            // @ts-ignore
                            public getUpdateObject(): Document
                            /**
                             * This method is not called anymore rather override {@link #addMultiFieldOperation(String, String, Object)}.
                             * @param operator
                             * @param key
                             * @param value
                             * @deprectaed Use {#link #addMultiFieldOperation(String, String, Object)} instead.
                             */
                            // @ts-ignore
                            addFieldOperation(operator: java.lang.String | string, key: java.lang.String | string, value: java.lang.Object | any): void
                            // @ts-ignore
                            addMultiFieldOperation(operator: java.lang.String | string, key: java.lang.String | string, value: java.lang.Object | any): void
                            /**
                             * Determine if a given {@code key} will be touched on execution.
                             * @param key
                             * @return 
                             */
                            // @ts-ignore
                            public modifies(key: java.lang.String | string): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
